import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import WorkflowVisualization from "@/components/WorkflowVisualization";
import RoiCalculator from "@/components/RoiCalculator";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import TrustSection from "@/components/TrustSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <WorkflowVisualization />
        <RoiCalculator />
        <Pricing />
        <Testimonials />
        <TrustSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
