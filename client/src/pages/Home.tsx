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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
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
