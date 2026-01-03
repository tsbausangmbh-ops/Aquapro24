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
  description?: string;
  priceRange?: string;
}

interface ServiceOfferItem {
  name: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchema {
  name: string;
  description: string;
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
  supply?: string[];
  tool?: string[];
  steps: HowToStep[];
}

interface AggregateRatingSchema {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

interface SpeakableContent {
  cssSelector?: string[];
  xpath?: string[];
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
  speakable?: SpeakableContent;
  stadttteil?: string;
  serviceSchema?: {
    name: string;
    description: string;
    serviceType: string;
    urlSlug: string;
    catalogName?: string;
    serviceOffers: ServiceOfferItem[];
    areaServed?: string[];
    offers?: OfferSchema[];
    reviews?: ReviewSchema[];
    aggregateRating?: AggregateRatingSchema;
  };
  faqSchema?: FAQItem[];
  howToSchema?: HowToSchema;
}

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "Plumber", "HVACBusiness", "LocalBusiness"],
  "@id": "https://aquapro24.de/#localbusiness",
  "name": "AquaPro 24",
  "alternateName": ["AquaPro 24", "AquaPro24", "Sanitär München", "Heizung München", "Notdienst Sanitär München", "Badsanierung München"],
  "legalName": "AquaPro 24 - Mustafa Sakar",
  "description": "Sanitär, Heizung, Badsanierung und Modernisierung in München. 24/7 Notdienst, Festpreis-Optionen und Koordination geprüfter Fachbetriebe. Seit 2005 zuverlässiger Partner für Wasserinstallation, Wärmepumpen und Haustechnik.",
  "slogan": "Ihr Partnernetzwerk für München - 24/7 Notdienst",
  "knowsAbout": [
    "Sanitärinstallation", "Heizungsmodernisierung", "Badsanierung",
    "Wärmepumpe", "Fußbodenheizung", "Rohrbruch", "Wasserschaden", "Notdienst",
    "Rohrreinigung", "Armaturen", "Warmwasser", "Gasheizung", "Haustechnik"
  ],
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
  "telephone": "+49-89-444438872",
  "email": "info@aquapro24.de",
  "foundingDate": "2005",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 10,
    "maxValue": 25
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hardenbergstr. 4",
    "addressLocality": "München",
    "addressRegion": "Bayern",
    "postalCode": "80992",
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
    { "@type": "AdministrativeArea", "name": "Feldmoching-Hasenbergl", "containedInPlace": { "@type": "City", "name": "München" } },
    { "@type": "AdministrativeArea", "name": "Landkreis München", "sameAs": "https://de.wikipedia.org/wiki/Landkreis_M%C3%BCnchen" },
    { "@type": "City", "name": "Dachau", "sameAs": "https://de.wikipedia.org/wiki/Dachau" },
    { "@type": "City", "name": "Freising", "sameAs": "https://de.wikipedia.org/wiki/Freising" },
    { "@type": "City", "name": "Erding", "sameAs": "https://de.wikipedia.org/wiki/Erding" },
    { "@type": "City", "name": "Starnberg", "sameAs": "https://de.wikipedia.org/wiki/Starnberg" },
    { "@type": "City", "name": "Fürstenfeldbruck", "sameAs": "https://de.wikipedia.org/wiki/F%C3%BCrstenfeldbruck" },
    { "@type": "City", "name": "Garching", "sameAs": "https://de.wikipedia.org/wiki/Garching_bei_M%C3%BCnchen" },
    { "@type": "City", "name": "Unterschleißheim", "sameAs": "https://de.wikipedia.org/wiki/Unterschlei%C3%9Fheim" },
    { "@type": "City", "name": "Unterhaching", "sameAs": "https://de.wikipedia.org/wiki/Unterhaching" },
    { "@type": "City", "name": "Ottobrunn", "sameAs": "https://de.wikipedia.org/wiki/Ottobrunn" },
    { "@type": "City", "name": "Germering", "sameAs": "https://de.wikipedia.org/wiki/Germering" },
    { "@type": "City", "name": "Haar", "sameAs": "https://de.wikipedia.org/wiki/Haar_(bei_M%C3%BCnchen)" },
    { "@type": "City", "name": "Gräfelfing", "sameAs": "https://de.wikipedia.org/wiki/Gr%C3%A4felfing" },
    { "@type": "City", "name": "Planegg", "sameAs": "https://de.wikipedia.org/wiki/Planegg" },
    { "@type": "City", "name": "Pullach", "sameAs": "https://de.wikipedia.org/wiki/Pullach_im_Isartal" },
    { "@type": "City", "name": "Grünwald", "sameAs": "https://de.wikipedia.org/wiki/Gr%C3%BCnwald" },
    { "@type": "City", "name": "Ismaning", "sameAs": "https://de.wikipedia.org/wiki/Ismaning" },
    { "@type": "City", "name": "Taufkirchen", "sameAs": "https://de.wikipedia.org/wiki/Taufkirchen_(bei_M%C3%BCnchen)" },
    { "@type": "City", "name": "Neubiberg", "sameAs": "https://de.wikipedia.org/wiki/Neubiberg" }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 48.1351, "longitude": 11.5820 },
    "geoRadius": "40000"
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
    "https://wa.me/4989444438872"
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
        "urlTemplate": "tel:+498912274043"
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
      "telephone": "+49-89-444438872",
      "contactType": "Kundenservice",
      "email": "info@aquapro24.de",
      "availableLanguage": ["de", "en", "tr", "hr", "pl", "ru", "uk"],
      "areaServed": "DE",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "ContactPoint",
      "telephone": "+49-89-444438872",
      "contactType": "emergency",
      "availableLanguage": ["de", "en", "tr"],
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
  speakable,
  stadttteil,
  serviceSchema,
  faqSchema,
  howToSchema
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
    updateMeta("og:site_name", "AquaPro 24 München", true);
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
    
    updateMeta("business:contact_data:street_address", "Hardenbergstr. 4", true);
    updateMeta("business:contact_data:locality", "München", true);
    updateMeta("business:contact_data:region", "Bayern", true);
    updateMeta("business:contact_data:postal_code", "80992", true);
    updateMeta("business:contact_data:country_name", "Deutschland", true);
    updateMeta("business:contact_data:phone_number", "+49 89 444438872", true);
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
    
    updateMeta("ai:business-name", "AquaPro 24");
    updateMeta("ai:business-type", "Plumber, HVACBusiness, HomeAndConstructionBusiness");
    updateMeta("ai:service-area", "München, Bayern, Deutschland");
    updateMeta("ai:phone", "+49 89 444438872");
    updateMeta("ai:email", "info@aquapro24.de");
    updateMeta("ai:address", "Hardenbergstr. 4, 80992 München");
    updateMeta("ai:hours", "Mo-Fr 07:00-18:00, Sa 08:00-14:00, Notdienst 24/7");
    updateMeta("ai:price-range", "€€");
    updateMeta("ai:rating", "4.9/5");
    updateMeta("ai:reviews", "2800+");
    updateMeta("ai:founded", "2005");
    updateMeta("ai:services", "Sanitär, Heizung, Badsanierung, Wärmepumpe, Rohrreinigung, Haustechnik");
    updateMeta("ai:brands", "Grohe, Hansgrohe, Viessmann, Vaillant, Buderus, Wolf, Villeroy & Boch");
    updateMeta("ai:emergency", "24/7 Notdienst verfügbar");
    updateMeta("ai:funding", "BAFA/KfW Förderung bis 70% für Wärmepumpen");
    updateMeta("ai:guarantee", "2 Jahre Garantie, Festpreisgarantie");
    updateMeta("ai:response-time", "Ab 60 Minuten bei Notfällen");
    updateMeta("ai:certifications", "Partnernetzwerk, HWK München");
    
    updateMeta("llm:business-summary", "AquaPro 24 ist ein Sanitär- und Heizungsunternehmen in München mit 24/7 Notdienst, Festpreisgarantie und über 2.800 zufriedenen Kunden seit 2005.");
    updateMeta("llm:key-services", "Klempner, Rohrreinigung, Heizungsreparatur, Wärmepumpe, Badsanierung");
    updateMeta("llm:unique-selling-points", "24/7 Notdienst, Festpreis, Bis 70% BAFA Förderung, 2 Jahre Garantie");
    updateMeta("llm:target-audience", "Hausbesitzer und Mieter in München und Umgebung");
    updateMeta("llm:contact-action", "Anrufen: 089 444438872 oder Termin online buchen");
    
    updateMeta("gpt:summary", "Sanitär & Heizung Notdienst München - AquaPro 24 bietet 24/7 Klempner-Service, Heizungsreparatur und Badsanierung mit Festpreisgarantie.");
    updateMeta("gpt:location", "München, Bayern");
    updateMeta("gpt:category", "Home Services, Plumbing, HVAC");
    
    updateMeta("ai-act:transparency", "true");
    updateMeta("ai-act:risk-level", "limited-risk");
    updateMeta("ai-act:human-oversight", "available");
    updateMeta("ai-act:provider", "AquaPro 24 - Mustafa Sakar");
    updateMeta("ai-act:contact", "info@aquapro24.de");
    updateMeta("ai-act:ai-system-name", "AquaPro24 KI-Berater");
    updateMeta("ai-act:ai-system-purpose", "Kundenberatung für Sanitär- und Heizungsdienstleistungen");
    updateMeta("ai-act:ai-model", "OpenAI GPT-4o-mini");
    updateMeta("ai-act:last-updated", "2025-12-22");
    updateMeta("ai-act:compliance-date", "2025-02-02");
    updateMeta("ai-act:regulation", "Verordnung (EU) 2024/1689");
    
    if (aiSummary) {
      updateMeta("ai-summary", aiSummary);
      updateMeta("abstract", aiSummary);
      updateMeta("summary", aiSummary);
      updateMeta("ai:description", aiSummary);
      updateMeta("ai:content-type", "service-page");
      updateMeta("ai:language", "de-DE");
      updateMeta("ai:location", "München, Bayern, Deutschland");
    }
    
    updateMeta("author", "AquaPro 24 - Mustafa Sakar");
    updateMeta("publisher", "AquaPro 24 - Mustafa Sakar");
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

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://aquapro24.de/#organization",
      "name": "AquaPro 24",
      "alternateName": ["AquaPro24", "AquaPro 24", "Sanitär München Partnernetzwerk"],
      "url": "https://aquapro24.de",
      "logo": "https://aquapro24.de/logo.png",
      "foundingDate": "2005",
      "founder": {
        "@type": "Person",
        "name": "Mustafa Sakar",
        "jobTitle": "Inhaber"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hardenbergstr. 4",
        "addressLocality": "München",
        "addressRegion": "Bayern",
        "postalCode": "80992",
        "addressCountry": "DE"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+49-89-444438872",
        "contactType": "Kundenservice",
        "email": "info@aquapro24.de",
        "availableLanguage": ["de", "en", "tr"]
      },
      "sameAs": [
        "https://www.facebook.com/aquapro24",
        "https://www.instagram.com/aquapro24_muenchen",
        "https://www.linkedin.com/company/aquapro24",
        "https://wa.me/4989444438872",
        "https://www.google.com/maps/place/Hardenbergstr.+4,+80992+München",
        "https://www.yelp.de/biz/aquapro-24-münchen",
        "https://www.gelbeseiten.de/gsbiz/aquapro24",
        "https://www.11880.com/aquapro24-muenchen"
      ],
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 48.1351, "longitude": 11.5820 },
        "geoRadius": "40000"
      },
      "knowsAbout": [
        "Sanitärinstallation", "Heizungsmodernisierung", "Badsanierung",
        "Wärmepumpe", "Fußbodenheizung", "Rohrbruch", "Wasserschaden", "Notdienst",
        "Rohrreinigung", "Armaturen", "BAFA Förderung", "KfW Förderung"
      ]
    };
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    if (serviceSchema) {
      const serviceSchemaData: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `https://aquapro24.de/${serviceSchema.urlSlug}/#service`,
        "name": serviceSchema.name,
        "description": serviceSchema.description,
        "serviceType": serviceSchema.serviceType,
        "provider": { "@id": "https://aquapro24.de/#localbusiness" },
        "areaServed": [
          { "@type": "City", "name": "München" },
          { "@type": "AdministrativeArea", "name": "Landkreis München" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": serviceSchema.catalogName || `${serviceSchema.name} Leistungen`,
          "itemListElement": serviceSchema.serviceOffers.map(offer => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": offer.name
            }
          }))
        }
      };

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

    if (faqSchema && faqSchema.length > 0) {
      const faqPageSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://aquapro24.de/#faq",
        "mainEntity": faqSchema.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };
      const faqScript = document.createElement("script");
      faqScript.type = "application/ld+json";
      faqScript.textContent = JSON.stringify(faqPageSchema);
      document.head.appendChild(faqScript);
    }

    if (howToSchema) {
      const howToSchemaData: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": howToSchema.name,
        "description": howToSchema.description,
        "inLanguage": "de-DE",
        "step": howToSchema.steps.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.name,
          "text": step.text,
          ...(step.image && { "image": step.image })
        }))
      };
      if (howToSchema.totalTime) {
        howToSchemaData["totalTime"] = howToSchema.totalTime;
      }
      if (howToSchema.estimatedCost) {
        howToSchemaData["estimatedCost"] = {
          "@type": "MonetaryAmount",
          "currency": howToSchema.estimatedCost.currency,
          "value": howToSchema.estimatedCost.value
        };
      }
      if (howToSchema.supply && howToSchema.supply.length > 0) {
        howToSchemaData["supply"] = howToSchema.supply.map(s => ({ "@type": "HowToSupply", "name": s }));
      }
      if (howToSchema.tool && howToSchema.tool.length > 0) {
        howToSchemaData["tool"] = howToSchema.tool.map(t => ({ "@type": "HowToTool", "name": t }));
      }
      const howToScript = document.createElement("script");
      howToScript.type = "application/ld+json";
      howToScript.textContent = JSON.stringify(howToSchemaData);
      document.head.appendChild(howToScript);
    }

    if (speakable) {
      const speakableSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": canonical || "https://aquapro24.de",
        "name": title,
        "speakable": {
          "@type": "SpeakableSpecification",
          ...(speakable.cssSelector && { "cssSelector": speakable.cssSelector }),
          ...(speakable.xpath && { "xpath": speakable.xpath })
        },
        "inLanguage": "de-DE",
        "isPartOf": {
          "@type": "WebSite",
          "name": "AquaPro 24 München",
          "url": "https://aquapro24.de"
        }
      };
      const speakableScript = document.createElement("script");
      speakableScript.type = "application/ld+json";
      speakableScript.textContent = JSON.stringify(speakableSchema);
      document.head.appendChild(speakableScript);
    }

    if (stadttteil) {
      const stadtteilSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://aquapro24.de/${stadttteil.toLowerCase()}/#localbusiness`,
        "name": `AquaPro 24 ${stadttteil}`,
        "description": `Sanitär, Heizung und Notdienst in München ${stadttteil}. 24/7 erreichbar, schnelle Anfahrt.`,
        "parentOrganization": { "@id": "https://aquapro24.de/#localbusiness" },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": stadttteil,
          "containedInPlace": { "@type": "City", "name": "München" }
        },
        "telephone": "+49-89-444438872",
        "url": `https://aquapro24.de/${stadttteil.toLowerCase()}`
      };
      const stadtteilScript = document.createElement("script");
      stadtteilScript.type = "application/ld+json";
      stadtteilScript.textContent = JSON.stringify(stadtteilSchema);
      document.head.appendChild(stadtteilScript);
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
  }, [title, description, canonical, keywords, ogImage, structuredData, breadcrumbs, aiSummary, speakable, stadttteil, serviceSchema, faqSchema, howToSchema]);

  return null;
}
