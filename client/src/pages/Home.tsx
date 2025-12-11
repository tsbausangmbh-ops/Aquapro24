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
        title="Sanitär & Heizung München | Wasserinstallation, Badsanierung, Wärmepumpe | Partnernetzwerk seit 2005"
        description="KSHW München - Ihr Partnernetzwerk für Sanitär, Heizung und Badsanierung in München. 2.847+ zufriedene Kunden in Schwabing, Bogenhausen, Sendling. Festpreise, 24/7 Online-Buchung, geprüfte Partnerbetriebe."
        canonical="https://kshw-muenchen.de"
        keywords="Sanitär München, Heizung München, Wasserinstallation Schwabing, Badsanierung Bogenhausen, Wärmepumpe Sendling, Klempner Pasing, Installateur Maxvorstadt, Haustechnik Haidhausen, Sanitär Neuhausen"
        serviceSchema={{
          name: "KSHW München - Sanitär & Heizung München",
          description: "Komplettservice für Sanitär, Heizung und Haustechnik in München - Partnernetzwerk seit 2005 mit über 2.847 zufriedenen Kunden",
          serviceType: "Plumbing and HVAC Services",
          areaServed: ["München", "Schwabing", "Bogenhausen", "Sendling", "Pasing", "Maxvorstadt", "Haidhausen", "Neuhausen"],
          reviews: [
            { author: "Familie Schneider", rating: 5, reviewBody: "Badsanierung in Schwabing perfekt umgesetzt. Termingerecht, sauber, zum Festpreis.", datePublished: "2024-11-25", location: "München-Schwabing" },
            { author: "Dr. Müller", rating: 5, reviewBody: "Wärmepumpe in unserem Altbau in Bogenhausen. Professionelle Beratung und Installation.", datePublished: "2024-11-10", location: "München-Bogenhausen" }
          ]
        }}
      />
      <Header />
      <TrustBar />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Pricing />
        <Testimonials />
        <CTABanner />
      </main>
      <div className="bg-muted/30 border-t py-3">
        <p className="text-xs text-muted-foreground text-center px-4">
          Hinweis: Die Webseite AquaPro24.de wird von der KSHW verwaltet und gesteuert.
        </p>
      </div>
      <Footer />
      <ChatWidget />
      <CookieBanner />
    </div>
  );
}
