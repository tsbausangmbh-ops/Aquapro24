# KSHW München - Sanitär & Heizung

## Overview

A professional German-language website for KSHW München (Inhaber: Mustafa Sakar), a heating and plumbing service partner network based in Munich. The site is designed as a lead-generation landing page with NLP-psychology principles (pacing, future pacing, pattern interrupt, social proof) to convert service inquiries. Features include a multi-step chatbot widget for lead capture, service showcases, pricing transparency, customer testimonials, and prominent call-to-action elements for 24/7 support.

## Company Information
- **Company**: AquaPro24
- **Owner**: Mustafa Sakar  
- **Address**: Hardenbergstr. 4, 80992 München
- **Phone**: 0152 12274043
- **USt-IdNr**: folgt
- **Type**: Einzelunternehmer (Sole Proprietor)
- **Domain**: aquapro24.de
- **Established**: 2005 (Partnernetzwerk)

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent SEO Updates (December 2025)

### H1 Optimization & Keyword Batches
All pages now feature:
- **Action-oriented H1 headings** following pattern: "Main Keyword München – Benefit/Action"
- **10-30 longtail keywords per page** displayed as keyword batch in Hero section (500+ total longtails)
- Keywords include: action verbs, service types, Munich districts, brand names, pricing terms

**Updated H1s by Category:**

#### Main Service Pages (30 Keywords each):
1. Sanitär: "Klempner München – Sanitär Notdienst 24/7"
2. Armaturen: "Wasserhahn wechseln München – Armaturen Montage & Reparatur"
3. Rohrreinigung: "Rohrreinigung München – Abfluss verstopft Notdienst 24/7"
4. Warmwasser: "Durchlauferhitzer München – Boiler Reparatur & Installation"
5. Bad: "Badsanierung München – Komplettumbau vom Profi"
6. Heizung: "Heizung München – Notdienst & Wartung 24/7"
7. Wärmepumpe: "Wärmepumpe München – bis 70% BAFA Förderung 2025"
8. Haustechnik: "Haustechnik München – Gas, Wasser, Lüftung komplett"

#### Landing Pages (20 Keywords each):
1. Notdienst: "Notdienst Sanitär & Heizung München – 24h Soforthilfe"
2. Sanitär München: "Sanitär München – Klempner & Installateur Notdienst"
3. Heizung München: "Heizung München – Reparatur, Wartung & Modernisierung Profi"
4. Fußbodenheizung: "Fußbodenheizung München – Installation & Reparatur Profi"
5. Wärmepumpe München: "Wärmepumpe München – bis 70% Förderung sichern"
6. Badsanierung: "Badsanierung München – Komplettumbau aus einer Hand"

#### Utility Pages (20 Keywords each):
1. Über uns: "AquaPro24 München – Ihr Partnernetzwerk seit 2005"
2. Termin: "Termin online buchen München – Handwerker Wunschtermin"
3. Ratgeber: "Ratgeber München – Expertentipps Sanitär & Heizung"
4. Kontakt: "Kontakt AquaPro24 München – Kostenlose Beratung"
5. FAQ: "FAQ Sanitär & Heizung München – Preise & Tipps"

#### District Pages (20 Keywords each, dynamic template):
- Template: "Klempner {Stadtteil} München – Sanitär, Heizung & Notdienst"
- Applied to: Schwabing, Bogenhausen, Sendling, Pasing, Maxvorstadt, Haidhausen, Neuhausen, Trudering, Laim, Giesing, Moosach, Milbertshofen

#### Legal Pages (10 Keywords each):
1. Impressum: "Impressum AquaPro24 München – Mustafa Sakar"
2. AGB: "AGB Sanitär München – Festpreis & Garantie"
3. Datenschutz: "Datenschutz DSGVO München – Ihre Rechte"
4. Cookie: "Cookie Richtlinie DSGVO – transparent & sicher"

#### Homepage (15 Keywords):
- "Klempner München – Sanitär & Heizung Notdienst 24/7"

### H2 SEO Optimization (December 2025)
All H2 headings now follow strict SEO pattern:
- **Pattern**: "Main Keyword München: Benefit/Action" (with colon separator)
- **Updated Pages**: Landing (6), Utility (5), StadtteilPage template, UeberUnsPage
- **Examples**:
  - "Sanitär Notdienst München: Wann ist ein echter Notfall?"
  - "Klempner München {data.name}: Warum Kunden uns empfehlen"
  - "Installateur München nahe {data.name}: Nachbarstadtteile im Einsatzgebiet"

### Total SEO Coverage
- 47 URLs in sitemap.xml (service pages, Munich districts, landing pages)
- 500+ longtail keywords across all pages (H1s, H2s, keyword batches)
- Keyword display: Unsichtbar für Besucher (sr-only), sichtbar für Suchmaschinen
- Complete Schema.org LocalBusiness markup with 25 Munich districts

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints under `/api/*`
- **Build**: esbuild for production bundling with dependency optimization

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts`
- **Current Storage**: In-memory storage (`MemStorage`) for leads - designed to be swapped with database implementation
- **Database Config**: Drizzle Kit configured for PostgreSQL migrations

### Component Structure
- **UI Components**: Pre-built shadcn/ui components in `client/src/components/ui/`
- **Page Components**: Feature components (Hero, Services, Pricing, Testimonials, ChatWidget) in `client/src/components/`
- **SEO Components**: Dedicated SEO infrastructure for search optimization
  - `SEO.tsx`: Meta tags, titles, descriptions, Open Graph, canonical URLs, LocalBusiness JSON-LD
  - `FAQ.tsx`: FAQ accordion with FAQPage schema.org markup for rich snippets (integrated on all 7 pages with 5 service-specific FAQs each)
  - `ServiceAreas.tsx`: Munich district geo-targeting with response times
- **NLP Psychology Components**: Customer persuasion infrastructure
  - `NLPSection.tsx`: Problem-solution framework with authority badges, urgency triggers, transformation steps (3-step journey visualization)
  - `CustomerStories.tsx`: 10 emotional success stories (2 per service) following problem/emotion/solution/result pattern, with specific savings amounts and timeframes
  - `TrustSignals.tsx`: Social proof (compact/detailed variants) with customer stats (2.847+), ratings (4.9/5), response times
- **Service Pages**: 5 dedicated pages (Sanitär, Bad, Heizung, Wärmepumpe, Haustechnik) with unique SEO, customer stories, and NLP triggers per page
- **Informational Pages**: 3 additional pages for company information and customer education
  - `UeberUnsPage.tsx`: Company history, team introduction, values, and timeline milestones
  - `FAQPage.tsx`: Pricing overview (4 categories) and frequently asked questions with accordion
  - `RatgeberPage.tsx`: Educational guides with detailed articles (Wasserschaden, Badsanierung, Heizungswartung, Wärmepumpe)

### Key Design Decisions
1. **Monorepo Structure**: Client, server, and shared code in single repository with path aliases (`@/`, `@shared/`, `@assets/`)
2. **Type Safety**: Shared schemas between frontend and backend using Drizzle-Zod
3. **Lead Capture**: Multi-step conversational chatbot widget with webhook integration support
4. **German Localization**: All UI text in German, targeting Munich local market
5. **Mobile-First**: Responsive design with mobile breakpoint detection hook

## External Dependencies

### UI Framework
- Radix UI primitives (dialog, accordion, tabs, etc.)
- Lucide React icons
- Embla Carousel for testimonials
- Vaul for drawer components

### Data & Forms
- TanStack React Query for API calls
- React Hook Form with Zod validation
- Drizzle ORM for database operations

### Styling
- Tailwind CSS with custom color scheme (primary: orange, secondary: blue, accent: green)
- CSS variables for theming support
- Class Variance Authority for component variants

### External Services (Configured)
- Webhook URL via `VITE_WEBHOOK_URL` environment variable for lead submission
- PostgreSQL database via `DATABASE_URL` environment variable

### Development Tools
- Vite with React plugin
- Replit-specific plugins (error overlay, cartographer, dev banner)
- TypeScript with strict mode