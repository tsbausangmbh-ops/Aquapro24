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
        title="Rohrbruch? Abfluss verstopft? AquaPro24 löst es"
        description="Wasserschaden oder verstopfter Abfluss? Keine Panik. Unsere Sanitär-Experten beheben Ihr Problem zuverlässig. Festpreis ohne Überraschungen. Jetzt anrufen."
        canonical="https://aquapro24.de"
        keywords="Sanitär München, Klempner München Notdienst, Heizung reparieren München, Installateur München, Wasserinstallation Schwabing, Rohrreinigung Bogenhausen, Badsanierung Sendling, Wärmepumpe München Förderung, Sanitär Pasing, Klempner Maxvorstadt, Heizungswartung Haidhausen, Sanitärnotdienst Neuhausen, Installateur Trudering, Klempner Laim, Heizung Giesing, Sanitär Moosach, Installateur Milbertshofen"
        aiSummary="AquaPro24 München: Ihr Partnernetzwerk für Sanitär, Heizung, Badsanierung und Wärmepumpen. Seit 2005 in München, 2.847+ zufriedene Kunden, 4.9/5 Sterne. 24/7 Notdienst, Festpreisgarantie, alle 25 Münchner Stadtteile. Sanitär ab 92€, Badsanierung ab 9.200€, Wärmepumpe mit bis 70% Förderung. Kontakt: 0152 12274043, info@aquapro24.de"
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
          title="Häufige Fragen zu AquaPro24 München"
          subtitle="Alles Wichtige auf einen Blick"
          items={[
            {
              question: "Was genau macht AquaPro24 in München?",
              answer: "AquaPro24 koordiniert Sanitär-, Heizungs- und Modernisierungsarbeiten in München – von Reparaturen bis zur Komplettsanierung – mit geprüften Fachbetrieben und klaren Abläufen."
            },
            {
              question: "Arbeiten Sie direkt oder mit Partnerbetrieben?",
              answer: "Je nach Projekt arbeiten wir mit einem festen Netzwerk geprüfter Meisterbetriebe. So stellen wir Qualität, Verfügbarkeit und saubere Umsetzung sicher."
            },
            {
              question: "Wie läuft eine Anfrage ab?",
              answer: "Sie senden uns Ihre Anfrage per E-Mail oder Formular, idealerweise mit Fotos und Eckdaten. Wir melden uns zeitnah mit einer Einschätzung und dem nächsten Schritt."
            },
            {
              question: "Sind auch kurzfristige Termine möglich?",
              answer: "Ja, je nach Auslastung und Art der Arbeit sind kurzfristige Termine – insbesondere bei Reparaturen oder Notfällen – möglich."
            },
            {
              question: "In welchen Stadtteilen von München sind Sie tätig?",
              answer: "Wir arbeiten im gesamten Stadtgebiet München sowie im Umkreis (z. B. Schwabing, Bogenhausen, Giesing, Sendling, Pasing, Laim, Moosach)."
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
