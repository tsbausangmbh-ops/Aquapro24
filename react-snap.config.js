/**
 * React-Snap Pre-Rendering Configuration
 * Optimized for AquaPro24.de - 62 Seiten
 * 
 * This configuration is used by react-snap to pre-render all pages
 * for better SEO and faster initial page loads.
 */

module.exports = {
  source: "dist/public",
  destination: "dist/public",
  
  // HTML Minification
  minifyHtml: {
    collapseWhitespace: true,
    removeComments: true,
    removeAttributeQuotes: false,
    minifyCSS: true,
    minifyJS: true
  },
  
  // Puppeteer Settings
  puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  headless: true,
  
  // Performance
  skipThirdPartyRequests: true,
  cacheAjaxRequests: true,
  inlineCss: true,
  preloadImages: false,
  asyncScriptTags: true,
  removeBlobs: true,
  fixInsertRule: true,
  
  // Viewport for consistent rendering
  viewport: {
    width: 1440,
    height: 900
  },
  
  // Don't auto-crawl, use explicit include list
  crawl: false,
  
  // All 62 routes to pre-render
  include: [
    // Homepage
    "/",
    
    // Core Service Pages (10)
    "/sanitaer",
    "/heizung",
    "/bad",
    "/badsanierung",
    "/waermepumpe",
    "/rohrreinigung",
    "/armaturen",
    "/warmwasser",
    "/haustechnik",
    
    // 24h Notdienst (3)
    "/sanitaer-notdienst-24",
    "/heizung-notdienst-24",
    "/notdienst-muenchen",
    
    // Landing Pages (5)
    "/sanitaer-muenchen",
    "/heizung-muenchen",
    "/badsanierung-muenchen",
    "/waermepumpe-muenchen",
    "/fussbodenheizung-muenchen",
    
    // Förderung (4)
    "/foerderung",
    "/foerderantrag",
    "/foerderantrag-heizung",
    "/foerderrechner",
    
    // Utility Pages (5)
    "/termin",
    "/kontakt",
    "/ueber-uns",
    "/faq",
    "/ratgeber",
    
    // Premium Districts (7)
    "/schwabing",
    "/bogenhausen",
    "/maxvorstadt",
    "/haidhausen",
    "/nymphenburg",
    "/lehel",
    "/solln",
    
    // Standard Districts (18)
    "/sendling",
    "/pasing",
    "/neuhausen",
    "/trudering",
    "/laim",
    "/giesing",
    "/moosach",
    "/milbertshofen",
    "/perlach",
    "/hadern",
    "/allach",
    "/aubing",
    "/feldmoching",
    "/thalkirchen",
    "/ramersdorf",
    "/berg-am-laim",
    "/schwanthalerhoehe",
    "/au",
    "/freimann",
    
    // Region Pages (4)
    "/muenchen-nord",
    "/muenchen-sued",
    "/muenchen-west",
    "/muenchen-ost",
    
    // Legal Pages (5)
    "/impressum",
    "/datenschutz",
    "/agb",
    "/cookie-richtlinie",
    "/barrierefreiheit"
  ]
};
