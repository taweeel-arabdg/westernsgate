import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  structuredData?: object;
}

const SEO = ({
  title = "بوابة الغربية - وكالة تسويق رقمي احترافية في السعودية",
  description = "وكالة بوابة الغربية للتسويق الرقمي - نقدم خدمات SEO، تصميم المواقع، إدارة وسائل التواصل الاجتماعي، والحملات الإعلانية في السعودية",
  type = "website",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://westernsgate.com",
  keywords = ["تسويق رقمي", "SEO", "تصميم مواقع", "إدارة سوشيال ميديا", "حملات إعلانية", "السعودية"],
  structuredData,
}: SEOProps) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "بوابة الغربية",
    "alternateName": "Western Gate",
    "url": url,
    "logo": image,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "شارع التحلية، حي الصفا",
      "addressLocality": "جدة",
      "addressRegion": "مكة المكرمة",
      "addressCountry": "SA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966-55-734-6167",
      "contactType": "Customer Service",
      "areaServed": "SA",
      "availableLanguage": ["ar", "en"]
    },
    "sameAs": [
      "https://wa.me/966557346167"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="ar_SA" />
      <meta property="og:site_name" content="بوابة الغربية" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
