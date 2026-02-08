# AquaPro24 - Sanitär & Heizung München

## Overview

AquaPro24's website is a professional German-language platform for a heating and plumbing service partner network in Munich. Its primary purpose is lead generation, employing NLP psychology principles to convert service inquiries. The site features a multi-step chatbot for lead capture, service showcases, transparent pricing, customer testimonials, and prominent 24/7 support calls-to-action. The project aims to establish AquaPro24 as a leading service provider in Munich, leveraging comprehensive SEO strategies for market penetration and customer acquisition.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Build Tool**: Vite with custom Replit integration plugins
- **UI/UX Decisions**:
    - **SEO-driven Content**: Dynamic H1, H2, H3 headings with targeted keywords across 65+ URLs, including district-specific pages.
    - **Keyword Display**: Stylized keyword tags visible in the Hero section (max 20 per page) with a semi-transparent pill design.
    - **Schema.org Markup**: Extensive LocalBusiness, HowTo, Organization, Geo-Targeting, E-E-A-T Person, AI/KI Transparency, and Review Snippet schemas for enhanced search visibility.
    - **Accessibility**: WCAG 2.1 AA / BITV 2.0 conformity, including ARIA-Labels, Skip-Links, keyboard navigation, focus indicators, Windows High Contrast Mode support, `prefers-reduced-motion`, and semantic HTML.
    - **Performance**: Server-Side Rendering (SSR) for bot-specific content, optimized font loading, image lazy loading, critical CSS inlining, code splitting, and route prefetching.
    - **NLP Psychology Components**: Integrated sections for problem-solution frameworks, authority badges, urgency triggers, transformation steps, emotional customer stories, and social proof elements.
    - **Service Pages**: Dedicated pages for Sanitär, Bad, Heizung, Wärmepumpe, and Haustechnik, each with unique SEO, customer stories, and NLP triggers.
    - **Informational Pages**: Pages for company information, FAQs (with pricing overview), and educational guides.

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints under `/api/*`
- **Build**: esbuild for production bundling
- **SSR Solution**: Custom SSR solution (`server/seoContent.ts` + `server/static.ts`) for bot-specific rendering with user-agent detection.

### Data Storage
- **Storage**: In-memory storage (`MemStorage`) for leads and contact messages.
- **Schema Location**: `shared/schema.ts` (Zod-only schemas).

### Key Design Decisions
- **Monorepo Structure**: Client, server, and shared code within a single repository with path aliases.
- **Type Safety**: Shared Zod schemas between frontend and backend.
- **Lead Capture**: Multi-step conversational chatbot widget with webhook integration.
- **German Localization**: All UI text is in German, targeting the Munich local market.
- **Mobile-First**: Responsive design with mobile breakpoint detection.
- **Hero Image System**: All pages use `useHeroImage("hero_key")` hook from `@/components/ResponsiveHero`. Hook loads WebP images from `attached_assets/hero_webp/` (desktop) or `attached_assets/hero_mobile/` (mobile <768px). Total size: ~3MB WebP (down from 44MB PNG). Background pattern: `bg-cover bg-center` with `backgroundColor: '#1a1a1a'`.
- **Mobile Optimizations**: Floating call button (`MobileCallButton`), compact spacing (py-6→py-4), smaller mobile headings (h1: 1.75rem, h2: 1.375rem), reduced header height, scrollable mobile menu with max-h-[70vh].
- **Appointment Booking**: Configured for specific business hours, slot durations (90 mins), simulated occupancy (60%), and a maximum of 2 appointments per day.

## External Dependencies

### UI Framework
- Radix UI primitives
- Lucide React icons
- Embla Carousel
- Vaul

### Data & Forms
- TanStack React Query
- React Hook Form with Zod validation

### Styling
- Tailwind CSS with custom color scheme (primary: orange, secondary: blue, accent: green)
- CSS variables
- Class Variance Authority

### External Services (Configured)
- Webhook URL (via `VITE_WEBHOOK_URL`) for lead submission
- Google Calendar API for appointment booking
- IONOS SMTP for email notifications