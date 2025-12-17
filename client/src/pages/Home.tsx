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
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import CookieBanner from "@/components/CookieBanner";
import SEO from "@/components/SEO";
import FloatingContactBar from "@/components/FloatingContactBar";
import { Link } from "wouter";
import { MapPin, Users, Clock, Shield, Award, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function SEOContent() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          AquaPro24 - Ihr Partnernetzwerk für Sanitär und Heizung in München
        </h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p>
            Seit 2005 ist <strong>AquaPro24</strong> (KSHW München) Ihr zuverlässiges Partnernetzwerk für alle 
            Sanitär- und Heizungsarbeiten in München und Umgebung. Was als kleiner Handwerksbetrieb begann, 
            ist heute ein Netzwerk aus über 15 geprüften Partnerbetrieben, die gemeinsam über 2.847 zufriedene 
            Kunden betreuen.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-8">Unsere Kernleistungen in München</h3>
          <p>
            Unser Leistungsspektrum umfasst alle Bereiche der modernen Haustechnik: Von der schnellen 
            <Link href="/rohrreinigung" className="text-secondary hover:underline mx-1" data-testid="link-seo-rohrreinigung">Rohrreinigung</Link> 
            bei verstopften Abflüssen über professionelle 
            <Link href="/sanitaer" className="text-secondary hover:underline mx-1" data-testid="link-seo-sanitaer">Sanitärinstallation</Link> 
            bis hin zur kompletten 
            <Link href="/bad" className="text-secondary hover:underline mx-1" data-testid="link-seo-bad">Badsanierung</Link>. 
            Im Bereich Heizung bieten wir 
            <Link href="/heizung" className="text-secondary hover:underline mx-1" data-testid="link-seo-heizung">Heizungswartung</Link>, 
            Reparaturen und die Installation moderner 
            <Link href="/waermepumpe" className="text-secondary hover:underline mx-1" data-testid="link-seo-waermepumpe">Wärmepumpensysteme</Link> 
            mit bis zu 70% staatlicher Förderung.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-8">Warum Münchner uns vertrauen</h3>
          <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
              <div>
                <strong className="text-foreground">24/7 Notdienst</strong>
                <p className="text-sm">Bei Rohrbruch oder Heizungsausfall sind wir in 45-60 Minuten vor Ort - auch nachts und am Wochenende.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Festpreisgarantie</strong>
                <p className="text-sm">Keine bösen Überraschungen: Wir nennen Ihnen vor Arbeitsbeginn einen verbindlichen Preis.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
              <div>
                <strong className="text-foreground">Geprüfte Partnerbetriebe</strong>
                <p className="text-sm">Alle unsere Partner sind Meisterbetriebe mit nachgewiesener Qualifikation und Erfahrung.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
              <div>
                <strong className="text-foreground">2 Jahre Gewährleistung</strong>
                <p className="text-sm">Auf alle Arbeiten geben wir eine erweiterte Gewährleistung - bei Problemen kommen wir kostenlos zurück.</p>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mt-8">Münchner Stadtteile - Wir sind überall für Sie da</h3>
          <p>
            Unser Partnernetzwerk deckt alle Münchner Stadtteile ab: 
            <strong> Schwabing, Maxvorstadt, Bogenhausen, Haidhausen, Sendling, Pasing, Neuhausen, 
            Trudering, Laim, Giesing, Moosach, Milbertshofen</strong> und weitere. 
            Die kurzen Anfahrtswege ermöglichen schnelle Reaktionszeiten - im Notfall sind wir oft 
            innerhalb von 45 Minuten bei Ihnen.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-8">Kostenlose Beratung & Festpreisangebot</h3>
          <p>
            Ob Badsanierung, Heizungstausch oder neue Wärmepumpe - wir beraten Sie unverbindlich und 
            erstellen Ihnen ein transparentes Angebot. Bei Förderprogrammen wie BAFA und KfW übernehmen 
            wir die komplette Antragstellung, damit Sie das Maximum an Zuschüssen erhalten.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
            <a href="tel:+4915212274043" data-testid="button-call-seo-cta">
              <Phone className="w-4 h-4 mr-2" />
              0152 12274043
            </a>
          </Button>
          <Button size="lg" className="bg-emerald-600 text-white border-emerald-700" asChild>
            <a href="https://wa.me/4915212274043?text=Hallo%2C%20ich%20bitte%20um%20R%C3%BCckruf." target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-seo-cta">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Rückruf
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  const areas = [
    { name: "Schwabing", time: "30 Min." },
    { name: "Maxvorstadt", time: "25 Min." },
    { name: "Bogenhausen", time: "35 Min." },
    { name: "Haidhausen", time: "30 Min." },
    { name: "Sendling", time: "35 Min." },
    { name: "Pasing", time: "40 Min." },
    { name: "Neuhausen", time: "30 Min." },
    { name: "Trudering", time: "45 Min." },
    { name: "Laim", time: "35 Min." },
    { name: "Giesing", time: "35 Min." },
    { name: "Moosach", time: "40 Min." },
    { name: "Milbertshofen", time: "35 Min." },
  ];

  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Sanitär & Heizung in ganz München
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unsere Partnerbetriebe sind in allen Münchner Stadtteilen aktiv. 
            Die Anfahrtszeiten zeigen typische Reaktionszeiten im Notdienst.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover-elevate"
            >
              <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">{area.name}</p>
                <p className="text-xs text-muted-foreground">{area.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO 
        title="Sanitär & Heizung München | Notdienst 24/7 | Festpreis ab 89€ | AquaPro24"
        description="AquaPro24 München: Ihr Partnernetzwerk für Sanitär, Heizung & Badsanierung. 2.847+ zufriedene Kunden. Notdienst 24/7, Festpreisgarantie, alle 12 Stadtbezirke. Jetzt anrufen: 0152 12274043"
        canonical="https://aquapro24.de"
        aiSummary="AquaPro24 München: Ihr Partnernetzwerk für Sanitär, Heizung, Badsanierung und Wärmepumpen. Seit 2005 in München, 2.847+ zufriedene Kunden, 4.9/5 Sterne. 24/7 Notdienst, Festpreisgarantie, alle 25 Münchner Stadtteile. Sanitär ab 89€, Badsanierung ab 8.900€, Wärmepumpe mit bis 70% Förderung. Kontakt: 0152 12274043, info@aquapro24.de"
        serviceSchema={{
          name: "AquaPro24 München - Sanitär & Heizung",
          description: "Partnernetzwerk für Sanitär, Heizung, Badsanierung und Wärmepumpen in München seit 2005. Über 2.847 zufriedene Kunden, Festpreisgarantie, 24/7 Notdienst.",
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
      <main id="main-content">
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <FunnelJourney />
        <MythBuster />
        <Services />
        <Pricing />
        <Testimonials />
        <ServiceAreas />
        <SEOContent />
        <CTABanner />
      </main>
      <Footer />
      <AIChatWidget />
      <CookieBanner />
      <FloatingContactBar />
    </div>
  );
}
