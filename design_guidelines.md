# Design Guidelines: Heizung & Sanitär Notdienst München

## Brand Identity

### Unternehmenstyp
Lokaler Meisterbetrieb für Heizung, Sanitär und 24/7-Notdienst im Raum München. Fokus auf Vertrauen, Schnelligkeit und faire Preise.

### Zielgruppe
- Hausbesitzer und Mieter in München und Umgebung
- Menschen in Notsituationen (Rohrbruch, Heizungsausfall)
- Wohnungseigentümergemeinschaften und Hausverwaltungen
- Gewerbekunden

---

## NLP-Psychologie-Prinzipien

### 1. Pacing (Spiegeln der Situation)
Zuerst die aktuelle Situation des Kunden anerkennen:
- "Ihre Heizung fällt aus? An einem kalten Winterabend?"
- "Ein Rohrbruch überschwemmt Ihre Wohnung?"

### 2. Future Pacing (Zukunftsvision)
Den gelösten Zustand visualisieren:
- "Stellen Sie sich vor: In 60 Minuten ist alles repariert"
- "Morgen früh wachen Sie in einer warmen Wohnung auf"

### 3. Presupposition (Voraussetzung)
Annahmen einbauen, die Handlung voraussetzen:
- "Wenn Sie uns anrufen, sind wir in 30 Minuten da"
- "Nach unserem Besuch haben Sie wieder Ruhe"

### 4. Pattern Interrupt
Erwartungen durchbrechen:
- "Keine Abzocke. Versprochen." (unterbricht Angst)
- "Festpreis. Bevor wir anfangen." (unterbricht Preisangst)

### 5. Social Proof
Beweis durch andere:
- "Über 2.500 zufriedene Münchner Familien"
- "4.9 Sterne bei Google mit echten Bewertungen"

### 6. Authority
Expertise zeigen:
- "Meisterbetrieb seit 1985"
- "Innungsmitglied der SHK München"
- "Zertifizierter Viessmann/Buderus Partner"

---

## Color Palette

### Primary Colors
- **Trust Blue**: #1E5F94 (Hauptfarbe - Vertrauen, Professionalität)
- **Action Orange**: #E85D04 (CTAs, Notdienst-Nummer - Dringlichkeit)
- **Success Green**: #22A06B (Positive Elemente, Checkmarks)

### Neutral Colors
- **Dark Text**: #1A2B3C (Haupttext)
- **Muted Text**: #5A6B7C (Sekundärtext)
- **Light Background**: #F8FAFC (Hintergrund)
- **White**: #FFFFFF (Cards, Hero)
- **Border**: #E2E8F0

### Semantic Colors
- **Emergency Red**: #DC2626 (Notfall-Badge)
- **Warning Yellow**: #F59E0B (Hinweise)

### CSS Variables (HSL Format)
```css
--primary: 24 95% 47%;          /* Action Orange */
--secondary: 207 66% 35%;        /* Trust Blue */
--accent: 153 65% 40%;           /* Success Green */
--background: 210 40% 98%;       /* Light Background */
--foreground: 210 40% 16%;       /* Dark Text */
```

---

## Typography

### Font Family
- **Headlines**: Inter, system-ui (Bold, Semi-bold)
- **Body**: Inter, system-ui (Regular, Medium)

### Font Sizes
- **Hero H1**: 48-64px (Responsive)
- **Section H2**: 36-48px
- **Card H3**: 24-28px
- **Body**: 16-18px
- **Small/Caption**: 14px

### Line Heights
- Headlines: 1.2
- Body: 1.6
- UI Elements: 1.4

---

## Layout Principles

### Structure
1. **Sticky Header** mit Notdienst-Nummer (immer sichtbar)
2. **Hero** mit emotionaler Ansprache + Sofort-CTA
3. **Trust Bar** (Meisterbetrieb, 24/7, Festpreis)
4. **Problem-Lösung** emotional + rational
5. **Services** mit klaren Icons
6. **Preistransparenz** 
7. **Testimonials** mit München-Bezug
8. **Notdienst-CTA**
9. **Footer**

### Spacing
- Section Padding: 80-120px vertical
- Content Max-Width: 1280px
- Card Padding: 24-32px
- Element Gap: 16-24px

### Mobile First
- Alle Elemente responsive
- Touch-friendly Buttons (min 48px)
- Lesbare Schrift (min 16px)
- Klickbare Telefonnummer

---

## Component Patterns

### Emergency Header
- Roter/Oranger Balken oben
- "24/7 NOTDIENST" prominent
- Große, klickbare Telefonnummer
- Anfahrtszeit-Versprechen

### Hero Section
- Linke Seite: Emotionale Headline + CTAs
- Rechte Seite: Vertrauensbild (Handwerker/Familie)
- Trust-Badges darunter (Meister, Bewertungen, Garantie)

### Trust Elements
- Meisterbetrieb-Siegel
- SHK-Innungsmitglied
- Google-Bewertung (4.9 Sterne)
- "Keine versteckten Kosten"-Garantie
- Lokale München-Referenz

### Service Cards
- Icon + Titel
- Kurze Beschreibung
- "Mehr erfahren" oder Preis
- Hover-Effekt

### Testimonial Cards
- Sternebewertung (5/5)
- Zitat in Anführungszeichen
- Name + Stadtteil (z.B. "Familie Müller, Schwabing")
- Verifiziert-Badge

### CTA Buttons
- Primary: Orange, Bold
- Secondary: Blue outline
- Ghost: Transparent mit Border
- Alle mit Hover-Effekt

---

## Imagery

### Photo Style
- Echte Handwerker (keine Stock-Fotos)
- Saubere, ordentliche Arbeitskleidung
- Freundliche, vertrauensvolle Gesichter
- Münchner Stadtbild/Architektur
- Moderne Badezimmer/Heizungsanlagen

### Icons
- Lucide Icons (konsistenter Stil)
- 24px Standard-Größe
- Strichstärke: 2px
- Farblich passend zum Kontext

---

## Micro-Copy (NLP-optimiert)

### Headlines
- "Ihre Heizung macht Probleme? Wir lösen sie. Heute noch."
- "Rohrbruch? Keine Panik. Wir sind in 30 Minuten da."
- "Münchens Meisterbetrieb für Heizung & Sanitär"

### CTAs
- "Jetzt Notdienst rufen" (primary)
- "Kostenlose Beratung anfordern"
- "Rückruf in 5 Minuten"
- "Festpreis anfragen"

### Trust Statements
- "Festpreis vor Arbeitsbeginn"
- "Keine Anfahrtskosten im Stadtgebiet"
- "Echte Münchner Handwerker"
- "Meisterbetrieb seit 1985"

### Problem Acknowledgment
- "Wir wissen, wie stressig ein Heizungsausfall im Winter ist."
- "Ein Rohrbruch ist ein Albtraum. Wir beenden ihn schnell."
- "Sie verdienen einen Handwerker, der ehrlich abrechnet."

---

## Accessibility

- Kontrastverhältnis min. 4.5:1
- Alt-Texte für alle Bilder
- Fokus-Indikatoren für Tastaturnavigation
- Klickbare Telefonnummern (tel:-Link)
- Große Touch-Targets auf Mobile

---

## Performance

- Bilder als WebP mit Fallback
- Lazy Loading für Below-the-fold
- Critical CSS inline
- Core Web Vitals optimiert
