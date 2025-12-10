# Heizung & Sanitär Notdienst München

## Overview

A professional German-language website for a local heating and plumbing emergency service business in Munich. The site is designed as a lead-generation landing page with NLP-psychology principles (pacing, future pacing, pattern interrupt, social proof) to convert emergency service calls. Features include a multi-step chatbot widget for lead capture, service showcases, pricing transparency, customer testimonials, and prominent call-to-action elements for 24/7 emergency support.

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
  - `NLPSection.tsx`: Psychology-driven copy (pacing, future pacing, problem-solution)
- **Service Pages**: 5 dedicated pages (Sanitär, Bad, Heizung, Wärmepumpe, Haustechnik) with unique SEO per page

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