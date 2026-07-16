# DT Growth Partners — Sistema de diseño (rediseño 2026)

Estética: **cinematográfica / liquid-glass** sobre fondos oscuros con videos full-bleed.
Referencias: QClay, Pangram Pangram, liquid glass de iPadOS.

---

## 1. Paleta de color

### Marca (azules DT)
| Token | Hex | HSL | Uso |
|---|---|---|---|
| Electric (primary) | `#0F76D6` | `208 87% 45%` | Acento principal, inicio de gradientes, glows |
| Cyan (accent) | `#26BDF0` | `197 87% 55%` | Acentos vivos, anillos, puntos pulsantes, focus de inputs |
| Ice | `#C2FBFF` | `184 100% 88%` | Final de gradientes, brillos |
| Fog (muted) | `#8A97AD` | `217 18% 64%` | Texto secundario |

### Fondos
| Token | Valor | Uso |
|---|---|---|
| Negro puro | `#000000` | Hero y secciones con video |
| Ink azul-violeta | `#07060F` | Secciones de contenido (Casos, Método, Nosotros, Testimonios, Contacto) |
| Púrpura profundo | `hsl(260 87% 3%)` | Fondo de la sección de scroll horizontal (Servicios) |
| Surface card | `#0B1220` / `hsl(219 44% 9%)` | Cards, popovers |
| Card oscura glass | `rgba(10, 9, 24, 0.8)` (`#0a0918/80`) | Relleno de tarjetas glass del equipo |

### Secundarios (auroras / atmósfera)
| Token | Hex | Uso |
|---|---|---|
| Purple | `#7C3AED` | Manchas aurora, header de mini-card |
| Magenta | `#A855F7` | Manchas aurora |

### Texto (sobre oscuro)
- Principal: `#FFFFFF` (foreground global `hsl(225 100% 98%)` ≈ `#F5F8FF`)
- Jerarquía por opacidad: `white/90` → `white/80` (párrafos) → `white/70` → `white/60` → `white/50` (labels mono) → `white/40`

---

## 2. Gradientes

```css
/* Degradado de marca (texto destacado, palabra rotativa, hover de métricas) */
background: linear-gradient(100deg, #0F76D6 0%, #26BDF0 55%, #C2FBFF 100%);
/* como texto: bg-clip-text + text-transparent */

/* Barra de progreso / líneas de acento */
background: linear-gradient(90deg, #0F76D6, #26BDF0, #C2FBFF);

/* Hairline de marca (separadores) */
background: linear-gradient(90deg, transparent, hsl(208 87% 45% / 0.6), transparent);

/* Atmósfera del hero (radial sutil) */
background: radial-gradient(120% 120% at 15% 0%, hsl(208 87% 20% / 0.35), transparent 55%);

/* Fondo de cards */
background: linear-gradient(180deg, hsl(219 44% 10%), hsl(219 46% 7%));

/* Auroras (manchas de color con blur 130px + deriva lenta, opacidad 0.20–0.30) */
background: radial-gradient(circle, {#0F76D6 | #26BDF0 | #7C3AED | #A855F7}, transparent 70%);

/* Botón flotante WhatsApp */
background: linear-gradient(90deg, #012b80, #0D89D6, #40F2FF);

/* Barras del motivo Meta Ads */
background: linear-gradient(to top, rgba(15,118,214,0.4), rgba(38,189,240,0.75));
```

---

## 3. Liquid glass (el material del sitio)

```css
/* Variante sutil: nav, chips, tarjetas, tiles */
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
}
/* + borde degradado vía ::before (padding 1.4px, mask XOR):
   linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
   transparent 40%, transparent 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%) */

/* Variante fuerte: cards protagonistas (scroll horizontal), centro de la órbita */
.liquid-glass-strong {
  background: rgba(8, 8, 22, 0.5);
  backdrop-filter: blur(50px) saturate(140%);
  box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
}
/* borde ::before igual pero con stops 0.5 / 0.2 */
```

Bordes/hairlines generales: `border-white/10` (divisores), `border-white/15` (marcos), `border-white/20` (anillos órbita: `#26BDF0/20`).

Sombras: `0 0 60px hsl(208 87% 50% / 0.25)` (glow marca) · `0 8px 40px hsl(226 52% 2% / 0.6)` (card) · glow hover equipo `0 24px 70px rgba(15,118,214,0.3)`.

---

## 4. Tipografía (trío Pangram)

| Rol | Fuente | Pesos | Uso |
|---|---|---|---|
| Principal (`font-heading`) | **PP Neue Montreal** ⚠️ | 400 base / 500 medium / 600 highlights | Titulares gigantes, nombres, métricas |
| Acento (`font-mono`) | **Neue Machina** ⚠️ | 400 | Kickers `// Sección`, labels uppercase tracking `0.15–0.25em`, numeración 01–04, roles |
| Soporte (`font-body`) | **Manrope** | 300–600 | Párrafos, botones, chips |

⚠️ PP Neue Montreal y Neue Machina son comerciales (Pangram Pangram) — hoy cargadas
desde cdnfonts **solo en prueba**; producción definitiva requiere licencia web
(o gemelas libres: Switzer / Space Grotesk).

Reglas de titular: `font-normal` base con la palabra clave en `font-semibold`
(a veces con gradient-text) · tracking `-0.024em` · leading `0.9–1.02` ·
tamaños hasta `text-[5.5rem]`–`text-[7rem]`.

---

## 5. Tokens semánticos (shadcn / CSS vars, HSL)

```css
--background: 226 52% 4%;      /* #05070F */
--foreground: 225 100% 98%;
--card: 219 44% 9%;
--primary: 208 87% 45%;        /* #0F76D6 */
--accent: 197 87% 55%;         /* #26BDF0 */
--muted-foreground: 217 18% 64%;
--border / --input: 216 32% 15%;
--ring: 208 87% 52%;
--radius: 0.75rem;             /* cards glass: 1rem–2rem; pills: full */
```

---

## 6. Motion (firma de movimiento)

- Ease de la casa: `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out)
- Scroll suave: Lenis (duration 1.1)
- Reveals: fade + y40 con stagger; palabra rotativa: flip 3D rotateX ±88° cada ~3s con ancho animado
- Tilt 3D (transitions.dev #19): máx 14°, glare blanco blend screen
- Auroras: deriva 16s alternate · Órbita agentes: rotación rígida 70s
- Todo con guard `prefers-reduced-motion`
