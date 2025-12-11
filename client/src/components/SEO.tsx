import { useEffect } from "react";

interface ReviewSchema {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  location?: string;
}

interface OfferSchema {
  name: string;
  description: string;
  priceRange: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  structuredData?: object;
  serviceSchema?: {
    name: string;
    description: string;
    serviceType: string;
    areaServed: string[];
    offers?: OfferSchema[];
    reviews?: ReviewSchema[];
  };
}

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "AquaPro24 - Sanitär & Heizung München",
  "alternateName": "AquaPro24",
  "description": "24/7 Notdienst für Sanitär, Heizung und Wasserinstallation in München. Meisterbetrieb seit 2005.",
  "url": "https://aquapro24.de",
  "telephone": "+49-89-123456789",
  "email": "info@sanitaer-muenchen.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 123",
    "addressLocality": "München",
    "addressRegion": "Bayern",
    "postalCode": "80333",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.1351",
    "longitude": "11.5820"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "München"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Schwabing"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Bogenhausen"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Sendling"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Pasing"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Maxvorstadt"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Haidhausen"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Neuhausen"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "priceRange": "€€",
  "paymentAccepted": ["Cash", "Credit Card", "EC Card", "Bank Transfer"],
  "currenciesAccepted": "EUR",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Sanitär & Heizungsdienstleistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "24h Notdienst",
          "description": "Sofortige Hilfe bei Rohrbruch, Wasserschaden und Heizungsausfall"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Badsanierung",
          "description": "Komplette Badezimmer-Renovierung aus einer Hand"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wasserinstallation",
          "description": "Professionelle Installation und Reparatur von Wasserleitungen"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "847",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/aquapro24",
    "https://www.instagram.com/aquapro24"
  ]
};

export default function SEO({ 
  title, 
  description, 
  canonical, 
  keywords,
  ogImage = "/og-image.jpg",
  structuredData,
  serviceSchema
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    const updateMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);
    
    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:type", "website", true);
    updateMeta("og:locale", "de_DE", true);
    if (ogImage) updateMeta("og:image", ogImage, true);
    
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    
    updateMeta("geo.region", "DE-BY");
    updateMeta("geo.placename", "München");
    updateMeta("geo.position", "48.1351;11.5820");
    updateMeta("ICBM", "48.1351, 11.5820");

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.rel = "canonical";
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.href = canonical;
    }

    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    const localBusinessScript = document.createElement("script");
    localBusinessScript.type = "application/ld+json";
    localBusinessScript.textContent = JSON.stringify(LOCAL_BUSINESS_SCHEMA);
    document.head.appendChild(localBusinessScript);

    if (serviceSchema) {
      const serviceSchemaData: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceSchema.name,
        "description": serviceSchema.description,
        "serviceType": serviceSchema.serviceType,
        "provider": {
          "@type": "Plumber",
          "name": "AquaPro24 - Sanitär & Heizung München",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "München",
            "addressRegion": "Bayern",
            "addressCountry": "DE"
          }
        },
        "areaServed": serviceSchema.areaServed.map(area => ({
          "@type": area === "München" ? "City" : "AdministrativeArea",
          "name": area
        })),
        "availableChannel": {
          "@type": "ServiceChannel",
          "servicePhone": "+49-89-123456789",
          "serviceUrl": "https://aquapro24.de",
          "availableLanguage": "German"
        },
        "termsOfService": "https://aquapro24.de/agb",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      };

      if (serviceSchema.offers && serviceSchema.offers.length > 0) {
        serviceSchemaData["offers"] = serviceSchema.offers.map(offer => {
          const numericPrice = parseFloat(offer.priceRange.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
          return {
            "@type": "Offer",
            "name": offer.name,
            "description": `${offer.description} - ${offer.priceRange}`,
            "priceCurrency": "EUR",
            "price": numericPrice,
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock"
          };
        });
      }

      if (serviceSchema.reviews && serviceSchema.reviews.length > 0) {
        serviceSchemaData["review"] = serviceSchema.reviews.map(review => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": review.author
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": 5
          },
          "reviewBody": review.reviewBody,
          "datePublished": review.datePublished,
          ...(review.location && { "locationCreated": { "@type": "Place", "name": review.location } })
        }));
      }

      const serviceScript = document.createElement("script");
      serviceScript.type = "application/ld+json";
      serviceScript.textContent = JSON.stringify(serviceSchemaData);
      document.head.appendChild(serviceScript);
    }

    if (structuredData) {
      const customScript = document.createElement("script");
      customScript.type = "application/ld+json";
      customScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(customScript);
    }

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [title, description, canonical, keywords, ogImage, structuredData, serviceSchema]);

  return null;
}
