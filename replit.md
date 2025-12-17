# KSHW München - Sanitär & Heizung

## Overview

A professional German-language website for KSHW München (Inhaber: Ali Kemal Kurt), a heating and plumbing service partner network based in Munich. The site is designed as a lead-generation landing page with NLP-psychology principles (pacing, future pacing, pattern interrupt, social proof) to convert service inquiries. Features include a multi-step chatbot widget for lead capture, service showcases, pricing transparency, customer testimonials, and prominent call-to-action elements for 24/7 support.

## Company Information
- **Company**: KSHW München
- **Owner**: Ali Kemal Kurt  
- **Address**: Zielstattstr. 20, 81379 München
- **Phone**: 0152 12274043
- **USt-IdNr**: DE356852204
- **Type**: Einzelunternehmer (Sole Proprietor)
- **Domain**: aquapro24.de (verwaltet und gesteuert von KSHW München)
- **Established**: 2005 (Partnernetzwerk)

## User Preferences

Preferred communication style: Simple, everyday language.

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
  - `FAQ.tsx`: FAQ accordion with FAQPage schema.org markup for rich snippets
  - `ServiceAreas.tsx`: Munich district geo-targeting with response times
- **NLP Psychology Components**: Customer persuasion infrastructure
  - `NLPSection.tsx`: Problem-solution framework with authority badges, urgency triggers, transformation steps (3-step journey visualization)
  - `CustomerStories.tsx`: 10 emotional success stories (2 per service) following problem/emotion/solution/result pattern, with specific savings amounts and timeframes
  - `TrustSignals.tsx`: Social proof (compact/detailed variants) with customer stats (2.847+), ratings (4.9/5), response times
- **Service Pages**: 5 dedicated pages (Sanitär, Bad, Heizung, Wärmepumpe, Haustechnik) with unique SEO, customer stories, and NLP triggers per page
- **Notdienst Page**: High-conversion emergency service page with 24/7 messaging, quick CTAs, and service cards
- **Informational Pages**: 3 additional pages for company information and customer education
  - `UeberUnsPage.tsx`: Company history, team introduction, values, and timeline milestones
  - `FAQPage.tsx`: Pricing overview (4 categories) and frequently asked questions with accordion
  - `RatgeberPage.tsx`: Educational guides with detailed articles (Wasserschaden, Badsanierung, Heizungswartung, Wärmepumpe)
- **Local SEO Infrastructure**:
  - `StadtteileOverviewPage.tsx`: Overview of all Munich districts with premium section
  - `StadtteilPage.tsx`: Dynamic district pages (17 districts: Schwabing, Maxvorstadt, Bogenhausen, Haidhausen, Sendling, Pasing, Neuhausen, Trudering, Laim, Giesing, Moosach, Milbertshofen + Premium: Lehel, Solln, Grünwald, Harlaching, Thalkirchen)
  - `UmlandPage.tsx`: Surrounding area pages (10 locations: Starnberg, Dachau, Freising, Germering, Unterhaching, Ottobrunn, Unterschleißheim, Garching, Taufkirchen, Haar)
- **Conversion Components**:
  - `CallbackForm.tsx`: Compact callback request form on all service pages
  - `FreeConsultationBanner.tsx`: Free consultation CTA banner
  - `FloatingContactBar.tsx`: Mobile sticky phone button

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