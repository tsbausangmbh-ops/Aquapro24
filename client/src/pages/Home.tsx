import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/CookieBanner";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Sanitär & Heizung München | Notdienst 24/7 | Festpreis ab 89€ | AquaPro24"
        description="AquaPro24 München: Ihr Meisterbetrieb für Sanitär, Heizung & Badsanierung. 2.847+ zufriedene Kunden. Notdienst 24/7, Festpreisgarantie, alle 12 Stadtbezirke. Jetzt anrufen: 0152 12274043"
        canonical="https://aquapro24.de"
        keywords="Sanitär München, Klempner München Notdienst, Heizung reparieren München, Installateur München, Wasserinstallation Schwabing, Rohrreinigung Bogenhausen, Badsanierung Sendling, Wärmepumpe München Förderung, Sanitär Pasing, Klempner Maxvorstadt, Heizungswartung Haidhausen, Sanitärnotdienst Neuhausen, Installateur Trudering, Klempner Laim, Heizung Giesing, Sanitär Moosach, Installateur Milbertshofen"
        serviceSchema={{
          name: "AquaPro24 München - Sanitär & Heizung",
          description: "Meisterbetrieb-Partnernetzwerk für Sanitär, Heizung, Badsanierung und Wärmepumpen in München seit 2005. Über 2.847 zufriedene Kunden, Festpreisgarantie, 24/7 Notdienst.",
          serviceType: "Plumbing and HVAC Services",
          areaServed: ["München", "Schwabing", "Bogenhausen", "Sendling", "Pasing", "Maxvorstadt", "Haidhausen", "Neuhausen", "Trudering", "Laim", "Giesing", "Moosach", "Milbertshofen"],
          reviews: [
            { author: "Familie Schneider", rating: 5, reviewBody: "Badsanierung in Schwabing perfekt umgesetzt. Termingerecht, sauber, Festpreis eingehalten. Sehr empfehlenswert!", datePublished: "2024-11-25", location: "München-Schwabing" },
            { author: "Dr. Müller", rating: 5, reviewBody: "Wärmepumpe in unserem Altbau in Bogenhausen. 70% Förderung erhalten, professionelle Beratung und schnelle Installation.", datePublished: "2024-11-10", location: "München-Bogenhausen" },
            { author: "Maria K.", rating: 5, reviewBody: "Rohrbruch am Sonntag - innerhalb 45 Minuten war der Monteur da. Schnell, sauber, fairer Preis. Danke!", datePublished: "2024-12-01", location: "München-Sendling" },
            { author: "Thomas Weber", rating: 5, reviewBody: "Komplette Heizungsanlage getauscht. Von der Beratung bis zur Inbetriebnahme alles top. Klare Empfehlung.", datePublished: "2024-10-15", location: "München-Pasing" }
          ]
        }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <Services />
        <Pricing />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <ChatWidget />
      <CookieBanner />
    </div>
  );
}
