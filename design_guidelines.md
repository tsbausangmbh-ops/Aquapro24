# Design Guidelines: AI Chatbot Solutions Landing Page

## Design Approach

**Reference-Based Design**: Inspired by modern SaaS leaders (Intercom, Drift, HubSpot) with conversion-optimized B2B landing page patterns. Clean, professional aesthetic that conveys technological sophistication while maintaining approachability and trust.

## Typography

**Font Stack**:
- Headlines: Poppins (weights: 600, 700, 800)
- Body & UI: Inter (weights: 400, 500, 600)

**Hierarchy**:
- Hero H1: text-5xl lg:text-7xl, font-bold, tracking-tight
- Section H2: text-4xl lg:text-5xl, font-bold
- Feature H3: text-2xl lg:text-3xl, font-semibold
- Pricing H3: text-xl font-semibold
- Body: text-lg, leading-relaxed
- Captions/Stats: text-sm font-medium uppercase tracking-wide

## Layout System

**Spacing Primitives**: Tailwind units 4, 8, 12, 16, 20, 24, 32
- Section padding: py-16 lg:py-24
- Component gaps: gap-8 lg:gap-12
- Card padding: p-6 lg:p-8

**Container Strategy**:
- Full-width sections with max-w-7xl mx-auto px-6 lg:px-8
- Content sections: max-w-6xl
- Text-focused areas: max-w-3xl
- Pricing tables: max-w-6xl

## Component Library

### Navigation
**Sticky Header** (backdrop-blur-md bg-white/80, shadow-sm):
- Logo left
- Navigation center (Features, Pricing, About, ROI)
- CTA button right (Demo buchen/Kostenlos testen)
- Mobile: slide-in menu from right

### Hero Section
**Split Layout with Image**:
- Two-column desktop (60/40 split), stack mobile
- Left: H1 headline, subtitle paragraph, dual CTA buttons (primary + secondary), trust badges row (logos or stats: "Trusted by 500+ businesses")
- Right: Large hero image/illustration of chatbot interface in action
- Gradient background treatment behind entire hero
- CTAs: Primary (solid) + Secondary (outline) in horizontal row
- Background gradient overlay for depth

### Problem-Solution Section
**Two-Column Cards**:
- H2 centered section header
- Grid of 3 problem cards (red/warning indicators) on left
- Grid of 3 solution cards (green/success indicators) on right
- Each card: Icon, bold title, description
- Visual arrow/transformation element between columns (desktop)

### Features Section
**Multi-Layout Showcase**:
- Main grid: 4 features in 2x2 grid (stack mobile)
- Each feature card: Large icon, H3 title, description, feature list bullets
- Cards with subtle border, hover elevation
- Below grid: Horizontal feature highlights (3-4 items in row) with larger icons and stats

### Workflow Visualization
**Step-by-Step Process**:
- Horizontal timeline/flowchart (vertical on mobile)
- 5-6 numbered steps with icons
- Connecting lines with directional indicators
- Each step: Number badge, icon, title, brief description
- Alternating positions (zigzag pattern desktop)

### Pricing Tables
**3-Tier Comparison**:
- Three columns (stack mobile): Starter, Professional, Enterprise
- Featured plan (middle) elevated with shadow, "Most Popular" badge
- Each plan: Name, price (large), billing cycle, feature list with checkmarks, CTA button
- Toggle switch above tables: Monthly/Annual billing
- Comparison table below for detailed features

### ROI Calculator
**Interactive Card Section**:
- Centered card with max-w-4xl
- Input section: Slider inputs (team size, current support hours, hourly cost)
- Real-time calculation display: Large numbers showing savings per month/year
- Visual chart/graph representation (bar or line)
- CTA button: "Get Your Custom Analysis"

### Testimonials
**Carousel Grid**:
- 3-column grid of testimonial cards (2 mobile)
- Each card: Quote, customer photo, name, title, company
- Star ratings above quotes
- Logo wall below: "Trusted by" section with 8-12 company logos in grid

### Trust Section
**Badge Grid + Stats**:
- 4-column grid: Security certifications, integrations supported, uptime guarantee, support availability
- Each: Large icon/badge, headline, supporting stat
- Background differentiation from main sections

### Multi-CTA Sections
**Strategic Placement**:
- After Problem-Solution: "See How It Works" CTA
- After Features: "Start Free Trial" prominent banner
- After Pricing: "Schedule Demo" with calendar preview
- Before Footer: Full-width gradient section with centered CTA and urgency text

### Footer
**Comprehensive Multi-Column**:
- 4-column layout: Product (features, pricing, integrations), Resources (blog, docs, case studies), Company (about, careers, contact), Legal (privacy, terms, security)
- Full contact information row
- Newsletter signup field
- Social media icons
- Bottom bar: Copyright, language selector

## Animations & Interactions

**Purposeful Micro-Interactions**:
- Scroll-triggered fade-ins for sections (subtle, once)
- Button hover: subtle scale-105, shadow increase
- Feature cards: hover elevation increase
- Input fields: border highlight on focus
- Pricing toggle: smooth transition between monthly/annual
- ROI calculator: number count-up animation on input change
- NO complex parallax or excessive motion

## Images

**Required Images**:
1. **Hero Image**: Modern dashboard/chatbot interface mockup showing conversation flow (1200x800px)
2. **Workflow Icons/Illustrations**: 5-6 custom or branded icons for process steps
3. **Testimonial Photos**: 6-9 professional headshots (400x400px)
4. **Company Logos**: 8-12 client logos for trust section (SVG/PNG, various sizes)
5. **Optional Feature Visuals**: Screenshots of multi-channel integration, CRM dashboard views

**Image Treatment**: Clean, modern screenshots with subtle shadows. Professional photography for testimonials. Illustrations can supplement where appropriate.

## Accessibility

- Semantic HTML with proper heading hierarchy
- ARIA labels for interactive calculator elements
- Form labels properly associated
- Keyboard navigation for all interactive elements
- Focus indicators maintained throughout
- Sufficient contrast maintained across all text

## Responsive Strategy

- Mobile: < 768px (single column, stacked elements, touch-optimized 48px targets)
- Tablet: 768px-1024px (2-column maximum, adjusted spacing)
- Desktop: > 1024px (full multi-column layouts, enhanced spacing)
- All interactive elements scale appropriately across breakpoints