/**
 * Post-build script: generates route-specific index.html files
 * with correct meta tags (canonical, title, description, og:tags)
 * so that crawlers see the right SEO data before JS executes.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");

const BASE_URL = "https://dtgrowthpartners.com";

// Each route with its unique SEO meta data
const routes = [
  {
    path: "/",
    title: "Agencia de Marketing Digital en Cartagena | DT Growth Partners",
    description: "Pauta digital, Meta Ads y desarrollo web en Cartagena. Escalamos tu negocio con estrategias basadas en datos. Agenda una consulta gratis.",
  },
  {
    path: "/servicios/meta-ads",
    title: "Meta Ads en Cartagena | Publicidad en Facebook e Instagram | DT Growth Partners",
    description: "Agencia especializada en Meta Ads en Cartagena. Campañas de anuncios en Facebook e Instagram que generan ventas reales. Resultados medibles.",
  },
  {
    path: "/servicios/desarrollo-web",
    title: "Desarrollo Web en Cartagena | Sitios que Convierten | DT Growth Partners",
    description: "Desarrollo web profesional en Cartagena. Landing pages, tiendas online y sitios web optimizados para SEO y conversión. Cotiza hoy.",
  },
  {
    path: "/servicios/sistemas-automatizaciones",
    title: "Automatizaciones e IA para Empresas en Cartagena | DT Growth Partners",
    description: "Automatiza tu negocio con IA. Flujos, chatbots y agentes inteligentes para empresas en Cartagena. Trabaja menos, crece más.",
  },
  {
    path: "/casos-exito/retail-bebidas",
    title: "Caso de Éxito: Retail de Bebidas — De ROAS 1.3x a $29.2M en ventas | DT Growth Partners",
    description: "Cómo transformamos las campañas de Meta Ads de un retail de bebidas en Cartagena, logrando $29.2M COP en ventas y un ROAS de 31x.",
  },
  {
    path: "/casos-exito/escalamiento-trimestral",
    title: "Caso de Éxito: +92% en Ventas con Escalamiento Trimestral | DT Growth Partners",
    description: "Estrategia de escalamiento en Meta Ads: de $65.2M a $125.6M en ventas con 41x ROAS. Caso real de e-commerce en Cartagena.",
  },
  {
    path: "/casos-exito/reconocimiento-local-restaurante",
    title: "Caso de Éxito: 440K Personas Alcanzadas para Restaurante Local | DT Growth Partners",
    description: "Campaña de reconocimiento local en Cartagena: 440 mil personas alcanzadas, +1,303 seguidores con solo $407 de inversión.",
  },
  {
    path: "/servicios/publicidad-digital-cartagena",
    title: "Publicidad Digital en Cartagena | DT Growth Partners",
    description: "Servicios de publicidad digital en Cartagena. Meta Ads, Google Ads, redes sociales. Estrategias integrales para escalar tu negocio con resultados medibles.",
  },
  {
    path: "/servicios/meta-ads-cartagena",
    title: "Meta Ads en Cartagena | DT Growth Partners",
    description: "Expertos en Meta Ads en Cartagena. Gestionamos campañas en Facebook, Instagram y WhatsApp Ads. Más de $500M COP gestionados en pauta digital.",
  },
  {
    path: "/servicios/facebook-ads-cartagena",
    title: "Facebook Ads en Cartagena | DT Growth Partners",
    description: "Servicio de Facebook Ads en Cartagena. Segmentación por barrios, campañas para negocios locales. Restaurantes, comercio y servicios. Resultados medibles.",
  },
  {
    path: "/servicios/agencia-publicidad-cartagena",
    title: "Agencia de Publicidad en Cartagena | DT Growth Partners",
    description: "Agencia de publicidad en Cartagena con enfoque en resultados. Comparamos: agencia vs freelancer vs in-house. Conocemos el mercado cartagenero.",
  },
  {
    path: "/servicios/pauta-digital-cartagena",
    title: "Pauta Digital en Cartagena | DT Growth Partners",
    description: "Servicios de pauta digital en Cartagena con enfoque en retorno medible. Campañas en Meta Ads, Google Ads y otros canales.",
  },
  {
    path: "/servicios/instagram-ads-cartagena",
    title: "Instagram Ads en Cartagena | DT Growth Partners",
    description: "Publicidad en Instagram para negocios en Cartagena. Reels, Stories y Feed Ads para restaurantes, estética, turismo y moda. Resultados medibles.",
  },
  {
    path: "/servicios/publicidad-redes-sociales-cartagena",
    title: "Publicidad en Redes Sociales en Cartagena | DT Growth Partners",
    description: "Campañas de publicidad en redes sociales en Cartagena. Facebook, Instagram, TikTok, WhatsApp. Estrategia multicanal para máximos resultados.",
  },
  {
    path: "/servicios/agencia-marketing-digital-cartagena",
    title: "Agencia de Marketing Digital en Cartagena | DT Growth Partners",
    description: "Agencia de marketing digital en Cartagena. No solo ads: desarrollo web, chatbots, automatización e IA. Enfoque integral para escalar tu negocio.",
  },
  {
    path: "/servicios/campanas-publicitarias-cartagena",
    title: "Campañas Publicitarias en Cartagena | DT Growth Partners",
    description: "Creamos campañas publicitarias en Cartagena enfocadas en resultados. Metodología probada, optimización continua y reportes mensuales detallados.",
  },
  {
    path: "/servicios/whatsapp-marketing-cartagena",
    title: "WhatsApp Marketing en Cartagena | DT Growth Partners",
    description: "WhatsApp Marketing en Cartagena. Campañas de Meta Ads con objetivo WhatsApp: 20-50x mejor CPR vs web. Chatbots, automatización y seguimiento de leads.",
  },
];

function generateRouteHtml(templateHtml, route) {
  const canonicalUrl = route.path === "/"
    ? `${BASE_URL}/`
    : `${BASE_URL}${route.path}`;

  let html = templateHtml;

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace og:title
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${route.title}" />`
  );

  // Replace og:description
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${route.description}" />`
  );

  // Replace og:url
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // Replace twitter:title
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${route.title}" />`
  );

  // Replace twitter:description
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${route.description}" />`
  );

  return html;
}

// Read the base template
const templatePath = path.join(distDir, "index.html");
const templateHtml = fs.readFileSync(templatePath, "utf-8");

let count = 0;

for (const route of routes) {
  const html = generateRouteHtml(templateHtml, route);

  if (route.path === "/") {
    // Overwrite the root index.html (already correct but ensure consistency)
    fs.writeFileSync(templatePath, html);
    console.log(`  ✓ /`);
  } else {
    // Create directory and write index.html for each route
    const routeDir = path.join(distDir, route.path);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, "index.html"), html);
    console.log(`  ✓ ${route.path}`);
  }
  count++;
}

console.log(`\n✅ Pre-rendered meta tags for ${count} routes.`);
