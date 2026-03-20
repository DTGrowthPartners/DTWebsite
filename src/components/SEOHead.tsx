import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  slug: string;
  ogImage?: string;
  noindex?: boolean;
  schemaMarkup?: object | object[];
}

const SEOHead = ({ title, description, slug, ogImage, noindex = false, schemaMarkup }: SEOHeadProps) => {
  const baseUrl = "https://dtgrowthpartners.com";
  const fullUrl = `${baseUrl}${slug}`;
  const fullTitle = `${title} | DT Growth Partners`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "DT Growth Partners",
    "description": "Agencia de marketing digital y publicidad en Cartagena, Colombia. Especialistas en Meta Ads, pauta digital y WhatsApp Marketing.",
    "url": baseUrl,
    "telephone": "+573007189383",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cartagena",
      "addressRegion": "Bolívar",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.3910",
      "longitude": "-75.5144"
    },
    "areaServed": {
      "@type": "City",
      "name": "Cartagena de Indias"
    },
    "priceRange": "$$",
    "serviceType": ["Meta Ads", "Facebook Ads", "Instagram Ads", "Pauta Digital", "Marketing Digital", "WhatsApp Marketing"]
  };

  const schemas = schemaMarkup
    ? Array.isArray(schemaMarkup)
      ? [localBusinessSchema, ...schemaMarkup]
      : [localBusinessSchema, schemaMarkup]
    : [localBusinessSchema];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage || `${baseUrl}/images/og-home.jpg`} />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:site_name" content="DT Growth Partners" />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
