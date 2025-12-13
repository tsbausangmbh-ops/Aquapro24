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

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface AggregateRatingSchema {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  structuredData?: object;
  breadcrumbs?: BreadcrumbItem[];
  aiSummary?: string;
  serviceSchema?: {
    name: string;
    description: string;
    serviceType: string;
    areaServed: string[];
    offers?: OfferSchema[];
    reviews?: ReviewSchema[];
    aggregateRating?: AggregateRatingSchema;
  };
}

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["Plumber", "HVACBusiness", "LocalBusiness"],
  "@id": "https://aquapro24.de/#organization",
  "name": "AquaPro24 - Sanitär & Heizung München",
  "alternateName": ["AquaPro24", "KSHW München", "Sanitär München", "Heizung München", "Notdienst Sanitär München"],
  "legalName": "KSHW München - Ali Kemal Kurt",
  "description": "AquaPro24 - Ihr Partnernetzwerk für Sanitär, Heizung und Badsanierung in München. Seit 2005 zuverlässiger Partner für Wasserinstallation, Wärmepumpen, Notdienst und Haustechnik. 2.847+ zufriedene Kunden, 4.9/5 Sterne Bewertung.",
  "slogan": "Ihr Partnernetzwerk für München - 24/7 Notdienst",
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
    { "@type": "AdministrativeArea", "name": "Altstadt-Lehel", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Schwabing-West", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Schwabing-Freimann", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Bogenhausen", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Sendling", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Sendling-Westpark", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Pasing-Obermenzing", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Maxvorstadt", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Au-Haidhausen", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Neuhausen-Nymphenburg", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Trudering-Riem", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Laim", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Berg am Laim", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Ramersdorf-Perlach", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Moosach", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Milbertshofen-Am Hart", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Obergiesing-Fasangarten", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Untergiesing-Harlaching", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Hadern", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Schwanthalerhöhe", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Ludwigsvorstadt-Isarvorstadt", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Allach-Untermenzing", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Aubing-Lochhausen-Langwied", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Feldmoching-Hasenbergl", "containedInPlace": { "@type": "City", "name": "München" } }
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
  breadcrumbs,
  aiSummary,
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
    updateMeta("og:site_name", "AquaPro24 München", true);
    if (ogImage) updateMeta("og:image", ogImage, true);
    if (canonical) updateMeta("og:url", canonical, true);
    
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:site", "@aquapro24");
    
    updateMeta("geo.region", "DE-BY");
    updateMeta("geo.placename", "München");
    updateMeta("geo.position", "48.1351;11.5820");
    updateMeta("ICBM", "48.1351, 11.5820");
    updateMeta("geo.country", "DE");
    updateMeta("geo.a1", "Bayern");
    updateMeta("geo.a2", "München");
    updateMeta("geo.a3", "Obersendling");
    
    updateMeta("place:location:latitude", "48.1351", true);
    updateMeta("place:location:longitude", "11.5820", true);
    
    updateMeta("business:contact_data:street_address", "Zielstattstr. 20", true);
    updateMeta("business:contact_data:locality", "München", true);
    updateMeta("business:contact_data:region", "Bayern", true);
    updateMeta("business:contact_data:postal_code", "81379", true);
    updateMeta("business:contact_data:country_name", "Deutschland", true);
    updateMeta("business:contact_data:phone_number", "+49 152 12274043", true);
    updateMeta("business:contact_data:email", "info@aquapro24.de", true);
    
    updateMeta("DC.coverage", "München, Bayern, Deutschland");
    updateMeta("DC.coverage.spatial", "München");
    updateMeta("DC.coverage.x.min", "11.3603");
    updateMeta("DC.coverage.x.max", "11.7229");
    updateMeta("DC.coverage.y.min", "48.0616");
    updateMeta("DC.coverage.y.max", "48.2481");
    
    updateMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    updateMeta("googlebot", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    updateMeta("bingbot", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    
    if (aiSummary) {
      updateMeta("ai-summary", aiSummary);
      updateMeta("abstract", aiSummary);
      updateMeta("summary", aiSummary);
      updateMeta("ai:description", aiSummary);
      updateMeta("ai:content-type", "service-page");
      updateMeta("ai:language", "de-DE");
      updateMeta("ai:location", "München, Bayern, Deutschland");
    }
    
    updateMeta("author", "AquaPro24 - KSHW München");
    updateMeta("publisher", "KSHW München - Ali Kemal Kurt");
    updateMeta("copyright", "2025 AquaPro24.de");
    updateMeta("language", "de");
    updateMeta("content-language", "de-DE");
    updateMeta("audience", "Hausbesitzer, Mieter, Hausverwaltungen in München");
    updateMeta("page-topic", "Sanitär, Heizung, Badsanierung, Haustechnik München");
    updateMeta("page-type", "Service");
    updateMeta("revisit-after", "7 days");
    updateMeta("rating", "general");
    updateMeta("distribution", "global");
    updateMeta("coverage", "München, Bayern, Deutschland");

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

      if (serviceSchema.aggregateRating) {
        serviceSchemaData["aggregateRating"] = {
          "@type": "AggregateRating",
          "ratingValue": serviceSchema.aggregateRating.ratingValue,
          "reviewCount": serviceSchema.aggregateRating.reviewCount,
          "bestRating": serviceSchema.aggregateRating.bestRating || 5,
          "worstRating": serviceSchema.aggregateRating.worstRating || 1
        };
      }

      if (serviceSchema.reviews && serviceSchema.reviews.length > 0) {
        serviceSchemaData["review"] = serviceSchema.reviews.map(review => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": review.author
          },
          "itemReviewed": {
            "@type": "Service",
            "name": serviceSchema.name,
            "@id": `https://aquapro24.de/#${serviceSchema.serviceType.toLowerCase().replace(/\s+/g, '-')}`
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": 5,
            "worstRating": 1
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

    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };
      const breadcrumbScript = document.createElement("script");
      breadcrumbScript.type = "application/ld+json";
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(breadcrumbScript);
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
  }, [title, description, canonical, keywords, ogImage, structuredData, breadcrumbs, aiSummary, serviceSchema]);

  return null;
}
