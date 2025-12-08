# Design Guidelines: Komplettsanierungen Funnel-Seite

## Design Approach

**Reference-Based Design**: Drawing from successful construction service lead-generation sites (089Dach GmbH, komplettsanierungen-haus-wohnung.de) combined with modern conversion-optimized landing page patterns. Professional, trustworthy aesthetic that builds confidence while maintaining strong conversion focus.

## Typography

**Font Stack**: 
- Headlines: Modern sans-serif via Google Fonts (Poppins or similar, weights: 600, 700)
- Body: Clean sans-serif (Inter or similar, weights: 400, 500)

**Hierarchy**:
- Hero H1: text-5xl/text-6xl, font-bold
- Section H2: text-3xl/text-4xl, font-semibold
- Service Cards H3: text-xl/text-2xl, font-semibold
- Body: text-base/text-lg, leading-relaxed
- Small print (GDPR): text-sm

## Layout System

**Spacing Primitives**: Tailwind units 4, 8, 12, 16, 20, 24 (p-4, gap-8, my-12, py-16, py-20, py-24)

**Container Strategy**:
- Full-width sections with inner max-w-6xl mx-auto px-4
- Form sections: max-w-2xl centered
- Service grids: max-w-7xl

**Grid Patterns**:
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Process steps: grid-cols-1 md:grid-cols-3
- Why-us features: grid-cols-1 md:grid-cols-2

## Component Library

### Navigation
**Sticky Header** (bg-white shadow-md, fixed top-0):
- Logo left
- Phone number center/right (prominent, clickable tel: link)
- CTA button right (Kostenloser Termin)
- Mobile: hamburger menu with full-screen overlay

### Hero Section
**Structure**: Full-width with background image overlay
- Large hero image (construction/renovation scene, professional quality)
- Overlay gradient for text readability
- Centered content with max-w-4xl
- H1 headline with subtitle
- Three CTA buttons in row (md: flex gap-4, mobile: stack)
  - Primary: "Kostenloser Termin" 
  - Secondary: Phone with icon
  - Tertiary: Email with icon
- Buttons with backdrop-blur-sm bg-white/90 for readability on image

### Process Steps Section
**3-Step Visual Flow** (inspired by 089Dach):
- Three cards in row (stack on mobile)
- Large numbered icons (1, 2, 3) or custom step icons
- Bold step titles
- Brief descriptions
- Connecting lines/arrows between steps (desktop only)

### Service Overview
**Icon Grid**:
- 3-column grid (2 mobile, 3 desktop)
- Each card: Large icon, service name, brief tagline
- Icons from Heroicons (outline style)
- Cards with subtle border, hover:shadow-lg transition

### Service Detail Sections
**Expandable/Linked Cards**:
- Alternating layout (image left/right)
- Service image (real photos preferred)
- H3 title + detailed description
- Bullet point benefits
- "MEHR INFOS" link/button

### Contact Form
**Professional Lead Form**:
- Two-column layout (desktop): Name/Contact left, Message right
- Fields: Name, Address, Phone, Email, Message
- File upload with drag-drop (max 5 files indicator)
- DSGVO checkbox (required, styled checkbox)
- Math captcha field
- Large submit button with loading state indication
- Form sections grouped with subtle background differentiation

### Trust Section (Warum Uns)
**Grid of Trust Elements**:
- Image with professional team/completed project
- 3-4 key differentiators in grid
- Each: Icon, headline, description
- Optional: Stats/numbers if available

### Footer
**Comprehensive Footer**:
- Dark background section
- Multi-column layout: Services, Contact, Legal
- Full contact details (address, phone, email, hours)
- Social links
- Legal links (Impressum, Datenschutz, Cookie-Richtlinie)

## Animations

**Minimal, Professional**:
- Smooth scroll behavior
- Fade-in on scroll for sections (subtle, once)
- Button hover states (transform scale-105, shadow)
- Form field focus states (border accent, subtle glow)
- No distracting parallax or complex animations

## Images

**Required Images**:
1. **Hero Background**: Large, high-quality image of renovated property or construction team (warm, professional) - 1920x1080px minimum
2. **Service Images**: 6 images showing different services (bathroom renovation, electrical work, insulation, etc.) - 800x600px
3. **Trust Section**: Team photo or completed project showcase - 1200x800px

**Image Treatment**: Professional photography preferred over stock. If stock needed, choose authentic, German construction context images.

## Accessibility

- Semantic HTML throughout
- ARIA labels for icon-only buttons
- Form labels visible and associated
- Focus indicators on all interactive elements
- Sufficient contrast ratios
- Touch targets minimum 44px

## Responsive Breakpoints

- Mobile: < 768px (stack all, full-width CTAs)
- Tablet: 768px - 1024px (2 columns max)
- Desktop: > 1024px (full multi-column layouts)