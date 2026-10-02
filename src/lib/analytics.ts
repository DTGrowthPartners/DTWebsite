/**
 * Tracking de conversiones para GA4 / Google Tag Manager.
 *
 * Objetivo: medir los clics a WhatsApp (la conversión real del negocio) sin
 * tener que tocar los ~26 archivos que tienen botones de WhatsApp. Se hace con
 * un único listener delegado en `document` + un wrapper sobre `window.open`,
 * porque en la web hay dos formas de abrir WhatsApp:
 *   1. <a href="https://wa.me/..." target="_blank">
 *   2. onClick={() => window.open('https://wa.me/...', '_blank')}
 *
 * GTM no puede capturar el caso (2) con un trigger de "Click - Just Links",
 * así que el wrapper es necesario para no perder ~10 botones.
 *
 * Los eventos van al dataLayer (para GTM) y además directo a GA4 vía gtag,
 * que ya está instalado en index.html.
 *
 * OJO con el doble conteo: si en GTM se crea una etiqueta "Evento de GA4"
 * disparada por estos eventos del dataLayer, GA4 recibiría el evento DOS veces
 * (una por gtag y otra por GTM). En ese caso poner SEND_VIA_GTAG = false.
 */

const SEND_VIA_GTAG = true;

/** Dominios que cuentan como "abrir WhatsApp". */
const WHATSAPP_HOSTS = ["wa.me", "api.whatsapp.com", "web.whatsapp.com", "whatsapp.com"];

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Envía un evento al dataLayer de GTM y (opcionalmente) a GA4 vía gtag. */
export function trackEvent(eventName: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;

  const payload: EventParams = {
    page_path: window.location.pathname,
    page_location: window.location.href,
    ...params,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });

  if (SEND_VIA_GTAG && typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }
}

function isWhatsAppUrl(url: string): boolean {
  if (!url) return false;
  try {
    const { hostname } = new URL(url, window.location.href);
    const host = hostname.replace(/^www\./, "");
    return WHATSAPP_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
  } catch {
    return false;
  }
}

/** Extrae el número de destino de una URL de WhatsApp (wa.me/<num> o ?phone=<num>). */
function extractPhone(url: string): string | undefined {
  try {
    const parsed = new URL(url, window.location.href);
    const fromQuery = parsed.searchParams.get("phone");
    if (fromQuery) return fromQuery.replace(/\D/g, "");
    const fromPath = parsed.pathname.replace(/\D/g, "");
    return fromPath || undefined;
  } catch {
    return undefined;
  }
}

/**
 * Un clic de usuario puede disparar dos veces el mismo evento: el <a> burbujea
 * y además el onClick llama a window.open. Se descarta el duplicado si llega
 * el mismo evento+url en menos de DEDUPE_MS.
 */
const DEDUPE_MS = 1500;
const lastFired = new Map<string, number>();

function fireOnce(eventName: string, url: string, params: EventParams): void {
  const key = `${eventName}|${url}`;
  const now = Date.now();
  const previous = lastFired.get(key);
  if (previous && now - previous < DEDUPE_MS) return;
  lastFired.set(key, now);
  trackEvent(eventName, params);
}

/** Texto visible del botón/enlace, recortado para que quepa en GA4. */
function labelOf(el: Element | null): string | undefined {
  if (!el) return undefined;
  const text = (el.textContent || "").replace(/\s+/g, " ").trim();
  if (text) return text.slice(0, 100);
  const aria = el.getAttribute("aria-label");
  return aria ? aria.slice(0, 100) : undefined;
}

function trackWhatsApp(url: string, method: "link" | "window_open", el?: Element | null): void {
  fireOnce("whatsapp_click", url, {
    link_url: url,
    link_text: labelOf(el ?? null),
    wa_phone: extractPhone(url),
    method,
  });
}

let initialized = false;

/**
 * Instala el tracking global. Idempotente: se puede llamar varias veces
 * (React en modo estricto monta los efectos dos veces) sin duplicar listeners.
 */
export function initConversionTracking(): void {
  if (typeof window === "undefined" || initialized) return;
  initialized = true;

  // --- Caso 1: enlaces <a href="..."> ---
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";

      if (isWhatsAppUrl(href)) {
        trackWhatsApp(anchor.href, "link", anchor);
        return;
      }
      if (href.startsWith("tel:")) {
        fireOnce("phone_click", href, {
          link_url: href,
          link_text: labelOf(anchor),
          phone_number: href.replace("tel:", "").replace(/\D/g, ""),
        });
        return;
      }
      if (href.startsWith("mailto:")) {
        fireOnce("email_click", href, {
          link_url: href,
          link_text: labelOf(anchor),
          email_address: href.replace("mailto:", "").split("?")[0],
        });
      }
    },
    // Fase de captura: el evento se registra aunque algún handler llame a
    // stopPropagation() o preventDefault() más abajo en el árbol.
    true
  );

  // --- Caso 2: onClick={() => window.open('https://wa.me/...')} ---
  const nativeOpen = window.open.bind(window);
  window.open = function patchedOpen(
    url?: string | URL,
    target?: string,
    features?: string
  ): Window | null {
    const asString = typeof url === "string" ? url : url?.toString() ?? "";
    if (isWhatsAppUrl(asString)) {
      trackWhatsApp(asString, "window_open", document.activeElement);
    }
    return nativeOpen(url as string, target, features);
  } as typeof window.open;
}

/**
 * Lead del formulario de contacto. `generate_lead` es un evento recomendado
 * de GA4, así que Google Ads lo reconoce al importarlo como conversión.
 */
export function trackFormLead(params: EventParams = {}): void {
  trackEvent("generate_lead", { form_name: "contact-form", ...params });
}
