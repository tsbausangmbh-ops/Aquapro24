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
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Sanitär & Heizung München | 24h Notdienst | AquaPro24"
        description="24/7 Notdienst für Sanitär und Heizung in München. Rohrbruch, Heizungsausfall, Badsanierung. Festpreise, Meisterbetrieb seit 1985. In 45 Min. vor Ort."
        canonical="https://aquapro24.de"
        keywords="Sanitär München, Heizung München, Notdienst, Klempner, Installateur, Rohrbruch, Badsanierung, Wärmepumpe"
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
    </div>
  );
}
