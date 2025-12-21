import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import FunnelJourney from "@/components/FunnelJourney";
import MythBuster from "@/components/MythBuster";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import CookieBanner from "@/components/CookieBanner";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Klempner München Notdienst 24/7 | Sanitär ab 92€ | Heizung ab 154€"
        description="Rohrbruch, WC verstopft, Heizung ausgefallen? Klempner München 45-60 Min. vor Ort. Festpreis: Sanitär ab 92€, Rohrreinigung ab 81€, Heizung ab 154€. 2.800+ Kunden seit 2005."
        canonical="https://aquapro24.de"
        keywords="Klempner München Notdienst, Sanitär ab 92€, Rohrreinigung ab 81€, Heizung reparieren ab 154€, Rohrbruch München, WC verstopft Soforthilfe, Wasserhahn wechseln ab 80€, Durchlauferhitzer ab 600€, Badsanierung München ab 16.000€, Wärmepumpe 70% BAFA, Grohe Hansgrohe Montage, Viessmann Vaillant Buderus Wolf, Installateur Schwabing Bogenhausen, 24/7 Notdienst 365 Tage"
        aiSummary="AquaPro24 München: Klempner Notdienst 24/7, 45-60 Min. vor Ort. Festpreise: Sanitär ab 92€, Rohrreinigung ab 81€, Heizung ab 154€, Wasserhahn ab 80€, Durchlauferhitzer ab 600€, Badsanierung ab 16.000€. Marken: Grohe, Hansgrohe, Viessmann, Vaillant, Buderus. 2.800+ Kunden seit 2005, 4.9/5 Sterne, 2-5 Jahre Garantie. Alle Stadtteile: Schwabing, Bogenhausen, Sendling, Pasing. Tel: 0152 12274043"
        serviceSchema={{
          name: "Sanitär & Heizung München - AquaPro24",
          description: "Partnernetzwerk für Sanitär, Heizung, Badsanierung und Wärmepumpen in München seit 2005. Über 2.847 zufriedene Kunden, Festpreisgarantie, 24/7 Notdienst.",
          serviceType: "Sanitär/Heizung/Haustechnik",
          urlSlug: "",
          catalogName: "AquaPro24 Leistungen München",
          serviceOffers: [
            { name: "Sanitär-Notdienst 24/7" },
            { name: "Heizungsreparatur & Wartung" },
            { name: "Badsanierung Komplettservice" },
            { name: "Wärmepumpen-Installation" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 2847
          }
        }}
        faqSchema={[
          {
            question: "Wie schnell sind Sie in München vor Ort?",
            answer: "Nach Eingang Ihrer Anfrage per E-Mail oder Formular melden wir uns zeitnah mit einer realistischen Einschätzung zur Verfügbarkeit und dem nächsten möglichen Termin in München und Umgebung."
          },
          {
            question: "Arbeiten Sie mit Festpreis?",
            answer: "Für viele Standard-Leistungen bieten wir klare Preisrahmen. Bei komplexeren Fällen erhalten Sie vorab eine transparente Einschätzung nach Sichtung Ihrer Angaben und Fotos."
          },
          {
            question: "Welche Leistungen deckt AquaPro24 ab?",
            answer: "Sanitär, Heizung, Badsanierung, Modernisierung (z. B. Wärmepumpe/Fußbodenheizung), Reparaturen sowie Koordination geprüfter Fachbetriebe in München."
          }
        ]}
      />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <FunnelJourney />
        <MythBuster />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ 
          title="Klempner München: Häufige Fragen zu Preisen & Leistungen"
          subtitle="Festpreise, Notdienst, Garantie – alles Wichtige auf einen Blick"
          items={[
            {
              question: "Was kostet ein Klempner in München?",
              answer: "Klempner München Festpreise: Sanitär ab 92€/Std., Rohrreinigung ab 81€, Heizungsreparatur ab 154€/Std., Wasserhahn wechseln ab 80€, Durchlauferhitzer einbauen ab 600€. Preis vor Arbeitsbeginn, keine versteckten Kosten."
            },
            {
              question: "Wie schnell ist der Notdienst in München vor Ort?",
              answer: "24/7 Notdienst München: 45-60 Minuten vor Ort bei Rohrbruch, WC verstopft, Heizung ausgefallen. Einsatzgebiet: Schwabing, Bogenhausen, Sendling, Pasing, alle Stadtteile. Tel: 0152 12274043."
            },
            {
              question: "Welche Marken montieren Sie?",
              answer: "Wir arbeiten mit allen Marken: Grohe, Hansgrohe, Geberit, Blanco (Armaturen), Viessmann, Vaillant, Buderus, Wolf (Heizung), Villeroy & Boch, Duravit (Sanitärkeramik), Stiebel Eltron, AEG (Durchlauferhitzer)."
            },
            {
              question: "Gibt es Garantie auf die Arbeiten?",
              answer: "Ja, 2-5 Jahre Garantie auf alle Arbeiten. Nur Markenersatzteile, fachgerechte Installation nach DIN-Normen. Bei Problemen kommen wir kostenlos zurück."
            },
            {
              question: "Bieten Sie BAFA-Förderung für Wärmepumpen?",
              answer: "Ja, bis 70% BAFA-Förderung für Wärmepumpen 2025. Viessmann Vitocal, Vaillant aroTHERM, Buderus Logatherm. Wir übernehmen den kompletten Förderantrag für Sie."
            }
          ]}
        />
        <CTABanner />
      </main>
      <Footer />
      <AIChatWidget />
      <CookieBanner />
    </div>
  );
}
