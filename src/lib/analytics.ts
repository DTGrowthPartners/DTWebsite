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
 * click_whatsapp = tocó el botón. generate_lead = el mensaje llegó de verdad:
 * cada clic agrega «Ref: XXXXX» al texto prellenado y registra el código en
 * el puente (/ga/ref → pm2 dtgp-ga4-bridge). Cuando el bot de WhatsApp ve ese
 * código en el primer mensaje, el puente manda generate_lead a GA4 por
 * Measurement Protocol con el client_id de esta visita. Por eso generate_lead
 * NO se envía desde aquí.
 *
 * OJO con el doble conteo: si en GTM se crea una etiqueta "Evento de GA4"
 * disparada por estos eventos del dataLayer, GA4 recibiría el evento DOS veces
 * (una por gtag y otra por GTM). En ese caso poner SEND_VIA_GTAG = false.
 */

const SEND_VIA_GTAG = true;

/** Dominios que cuentan como "abrir WhatsApp". */
const WHATSAPP_HOSTS = ["wa.me", "api.whatsapp.com", "web.whatsapp.com", "whatsapp.com"];

const GA4_ID = "G-FWH69NBM5H";
const REF_ENDPOINT = "/ga/ref";
const REF_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const REF_RE = /Ref:\s*[A-Z0-9]{5}/;

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

function trackWhatsApp(url: string, method: "link" | "window_open", el?: Element | null, ref?: string): void {
  fireOnce("click_whatsapp", url.replace(REF_RE, ""), {
    link_url: url,
    link_text: labelOf(el ?? null),
    wa_phone: extractPhone(url),
    method,
    wa_ref: ref,
  });
}

// ---- Código Ref: une el clic con el mensaje que recibe el bot ----

function newRef(): string {
  let out = "";
  for (let i = 0; i < 5; i++) out += REF_ALPHABET.charAt(Math.floor(Math.random() * REF_ALPHABET.length));
  return out;
}

function cookie(name: string): string {
  const m = document.cookie.match(`(?:^|; )${name}=([^;]*)`);
  return m ? decodeURIComponent(m[1]) : "";
}

/** gclid/gbraid/wbraid de la URL de entrada: se guardan para la sesión. */
function clickId(name: string): string {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get(name);
    if (fromUrl) sessionStorage.setItem(`dt_${name}`, fromUrl);
    return fromUrl || sessionStorage.getItem(`dt_${name}`) || "";
  } catch {
    return "";
  }
}

/**
 * Guarda el código en el puente con los ids de GA4 de esta visita.
 * client_id: cookie _ga = GA1.1.<cid> · session_id: _ga_<ID> = GS1.1.<sid>… o GS2.1.s<sid>$…
 * Va como texto plano a propósito: sendBeacon con application/json no se envía.
 */
function registerRef(ref: string, buttonLocation: string): void {
  const sessionCookie = cookie(`_ga_${GA4_ID.replace("G-", "")}`);
  const body = JSON.stringify({
    ref,
    client_id: (cookie("_ga").match(/^GA\d\.\d\.(.+)$/) || [])[1] || "",
    session_id: (sessionCookie.match(/^GS\d\.\d\.s?(\d{9,11})/) || [])[1] || "",
    gclid: clickId("gclid"),
    gbraid: clickId("gbraid"),
    wbraid: clickId("wbraid"),
    // Servicio = último tramo de la ruta (/servicios/meta-ads/ → meta-ads); la home es "home".
    service: window.location.pathname.split("/").filter(Boolean).pop() || "home",
    page: window.location.pathname,
    button_location: buttonLocation,
  });
  try {
    if (navigator.sendBeacon && navigator.sendBeacon(REF_ENDPOINT, body)) return;
  } catch {
    /* sigue con fetch */
  }
  fetch(REF_ENDPOINT, { method: "POST", body, headers: { "content-type": "text/plain" }, keepalive: true }).catch(() => {});
}

/**
 * Agrega al texto prellenado que el mensaje viene de la web y el código Ref.
 * Devuelve null si la URL ya traía código (doble clic, o <a> + window.open).
 */
function withRef(url: string): { url: string; ref: string } | null {
  try {
    const parsed = new URL(url, window.location.href);
    const text = parsed.searchParams.get("text") || "";
    if (REF_RE.test(text)) return null;
    const ref = newRef();
    parsed.searchParams.set("text", `${text}${text ? "\n\n" : ""}(Escribo desde la web · Ref: ${ref})`);
    return { url: parsed.toString(), ref };
  } catch {
    return null;
  }
}

function locationOf(el: Element | null | undefined): string {
  if (!el) return "desconocido";
  if (el.closest("footer")) return "footer";
  if (el.closest("header, nav")) return "header";
  if (el.closest("form")) return "formulario";
  const fixed = (node: Element | null) => !!node && getComputedStyle(node).position === "fixed";
  if (fixed(el) || fixed(el.parentElement)) return "flotante";
  return "contenido";
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
        // Fase de captura: el href se cambia antes de que el navegador lo siga.
        const tagged = withRef(anchor.href);
        if (tagged) {
          anchor.href = tagged.url;
          registerRef(tagged.ref, locationOf(anchor));
        }
        trackWhatsApp(anchor.href, "link", anchor, tagged?.ref);
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
    let asString = typeof url === "string" ? url : url?.toString() ?? "";
    if (isWhatsAppUrl(asString)) {
      const tagged = withRef(asString);
      if (tagged) {
        asString = tagged.url;
        registerRef(tagged.ref, locationOf(document.activeElement));
      }
      trackWhatsApp(asString, "window_open", document.activeElement, tagged?.ref);
      return nativeOpen(asString, target, features);
    }
    return nativeOpen(url as string, target, features);
  } as typeof window.open;
}

/**
 * Formulario de contacto guardado en el CRM. Ya no es generate_lead: el
 * formulario abre WhatsApp con su propio Ref, y si el mensaje llega el bot
 * cuenta el generate_lead (method=form). Así no se cuenta dos veces.
 */
export function trackFormLead(params: EventParams = {}): void {
  trackEvent("form_submit", { form_name: "contact-form", ...params });
}
