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
  "@id": "https://aquapro24.de/#organization",
  "name": "AquaPro24 - Sanitär & Heizung München",
  "alternateName": ["AquaPro24", "KSHW München", "Sanitär München", "Heizung München", "Notdienst Sanitär München"],
  "legalName": "KSHW München - Ali Kemal Kurt",
  "description": "AquaPro24 - Ihr Partnernetzwerk für Sanitär, Heizung und Badsanierung in München. Seit 2005 zuverlässiger Partner für Wasserinstallation, Wärmepumpen, Notdienst und Haustechnik. Geprüfte Meisterbetriebe, 2.847+ zufriedene Kunden, 4.9/5 Sterne Bewertung.",
  "slogan": "Geprüfte Meisterbetriebe für München - 24/7 Notdienst",
  "url": "https://aquapro24.de",
  "logo": {
    "@type": "ImageObject",
    "url": "https://aquapro24.de/logo.png",
    "width": 200,
    "height": 200
  },
  "image": [
    "https://aquapro24.de/og-image.jpg",
    "https://aquapro24.de/team.jpg"
  ],
  "telephone": "+49-152-12274043",
  "email": "info@aquapro24.de",
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
    "https://www.facebook.com/aquapro24",
    "https://www.instagram.com/aquapro24_muenchen",
    "https://www.linkedin.com/company/aquapro24",
    "https://wa.me/4915212274043"
  ],
  "potentialAction": [
    {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://aquapro24.de/kontakt",
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
    },
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://aquapro24.de/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+49-152-12274043",
      "contactType": "customer service",
      "availableLanguage": ["German", "English"],
      "areaServed": "DE-BY",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "ContactPoint",
      "telephone": "+49-152-12274043",
      "contactType": "emergency",
      "availableLanguage": "German",
      "areaServed": "DE-BY"
    }
  ],
  "isAccessibleForFree": false,
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "24/7 Sanitär Notdienst München"
    },
    "areaServed": {
      "@type": "City",
      "name": "München"
    }
  }
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
          "@id": "https://aquapro24.de/#organization",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Zielstattstr. 20",
            "addressLocality": "München",
            "postalCode": "81379",
            "addressRegion": "Bayern",
            "addressCountry": "DE"
          },
          "telephone": "+49-152-12274043"
        },
        "areaServed": serviceSchema.areaServed.map(area => ({
          "@type": area === "München" ? "City" : "AdministrativeArea",
          "name": area
        })),
        "availableChannel": {
          "@type": "ServiceChannel",
          "servicePhone": "+49-152-12274043",
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
