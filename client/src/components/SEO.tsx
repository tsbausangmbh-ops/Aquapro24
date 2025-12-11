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
  "@type": ["Plumber", "HVACBusiness", "LocalBusiness"],
  "@id": "https://kshw-muenchen.de/#organization",
  "name": "KSHW München - Sanitär & Heizung",
  "alternateName": ["KSHW München", "KSHW", "Sanitär München"],
  "legalName": "KSHW München - Ali Kemal Kurt",
  "description": "Partnernetzwerk für Sanitär, Heizung und Badsanierung in München. Seit 2005 Ihr zuverlässiger Partner für Wasserinstallation, Wärmepumpen und Haustechnik. Geprüfte Fachbetriebe, 2.847+ zufriedene Kunden.",
  "slogan": "Geprüfte Partnerbetriebe für München - seit 2005",
  "url": "https://kshw-muenchen.de",
  "logo": {
    "@type": "ImageObject",
    "url": "https://kshw-muenchen.de/logo.png",
    "width": 200,
    "height": 200
  },
  "image": [
    "https://kshw-muenchen.de/og-image.jpg",
    "https://kshw-muenchen.de/team.jpg"
  ],
  "telephone": "+49-152-12274043",
  "email": "info@kshw-muenchen.de",
  "foundingDate": "2005",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 10,
    "maxValue": 25
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Zielstattstr. 20",
    "addressLocality": "München",
    "addressRegion": "Bayern",
    "postalCode": "81379",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.1351,
    "longitude": 11.5820
  },
  "areaServed": [
    { "@type": "City", "name": "München", "sameAs": "https://de.wikipedia.org/wiki/München" },
    { "@type": "AdministrativeArea", "name": "Schwabing" },
    { "@type": "AdministrativeArea", "name": "Bogenhausen" },
    { "@type": "AdministrativeArea", "name": "Sendling" },
    { "@type": "AdministrativeArea", "name": "Pasing" },
    { "@type": "AdministrativeArea", "name": "Maxvorstadt" },
    { "@type": "AdministrativeArea", "name": "Haidhausen" },
    { "@type": "AdministrativeArea", "name": "Neuhausen" },
    { "@type": "AdministrativeArea", "name": "Trudering" },
    { "@type": "AdministrativeArea", "name": "Laim" }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 48.1351, "longitude": 11.5820 },
    "geoRadius": "30000"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "€€",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "EC Card", "Bank Transfer", "Invoice"],
  "currenciesAccepted": "EUR",
  "knowsLanguage": ["de", "en"],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Meisterbrief",
      "name": "Installateur- und Heizungsbauermeister",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Handwerkskammer für München und Oberbayern",
        "alternateName": "HWK München"
      }
    }
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Handwerkskammer für München und Oberbayern",
      "alternateName": "HWK München",
      "url": "https://www.hwk-muenchen.de"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Sanitär, Heizung & Haustechnik Dienstleistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sanitärinstallation",
          "description": "Wasserinstallation, Rohrreinigung, Armaturen-Reparatur und -Austausch"
        },
        "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "price": 89, "minPrice": 89 }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Badsanierung",
          "description": "Komplette Badezimmer-Renovierung mit 3D-Planung, barrierefreie Bäder, Komplettumbau in 2-4 Wochen"
        },
        "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "price": 8900, "minPrice": 8900 }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Heizungsinstallation",
          "description": "Gasheizung, Ölheizung, Fußbodenheizung - Installation, Wartung und Reparatur aller Marken"
        },
        "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "price": 149, "minPrice": 149 }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wärmepumpe",
          "description": "Luft-Wasser-Wärmepumpe und Erdwärmepumpe Installation mit bis zu 70% staatlicher Förderung"
        },
        "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "price": 15000, "minPrice": 15000 }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Haustechnik",
          "description": "Gasinstallation, kontrollierte Wohnraumlüftung (KWL), Smart Home Integration"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.9,
    "reviewCount": 2847,
    "bestRating": 5,
    "worstRating": 1
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "M. Schneider" },
      "datePublished": "2024-11-15",
      "reviewBody": "Endlich ein Handwerker, der pünktlich ist und hält, was er verspricht. Die Badsanierung war perfekt geplant.",
      "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "K. Wagner" },
      "datePublished": "2024-10-22",
      "reviewBody": "Professionell, freundlich, faire Rechnung. Absolute Empfehlung für Sanitärarbeiten in München!",
      "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "S. Hoffmann" },
      "datePublished": "2024-09-08",
      "reviewBody": "Kompetente Wärmepumpen-Beratung ohne Verkaufsdruck. Spare jetzt 55% Heizkosten.",
      "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }
    }
  ],
  "sameAs": [
    "https://www.facebook.com/kshwmuenchen",
    "https://www.instagram.com/kshwmuenchen",
    "https://www.linkedin.com/company/kshwmuenchen"
  ],
  "potentialAction": [
    {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://kshw-muenchen.de/kontakt",
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
      },
      "result": { "@type": "Reservation", "name": "Terminbuchung" }
    },
    {
      "@type": "CommunicateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "tel:+4915212274043"
      }
    }
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
          "name": "KSHW München - Sanitär & Heizung München",
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
          "serviceUrl": "https://kshw-muenchen.de",
          "availableLanguage": "German"
        },
        "termsOfService": "https://kshw-muenchen.de/agb",
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
