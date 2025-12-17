import { useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import CookieBanner from "@/components/CookieBanner";
import FloatingContactBar from "@/components/FloatingContactBar";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import CallbackForm from "@/components/CallbackForm";
import FreeConsultationBanner from "@/components/FreeConsultationBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  Phone,
  Clock,
  MapPin,
  Shield,
  Star,
  Wrench,
  Droplets,
  Flame,
  ShowerHead,
  CheckCircle2,
  ArrowRight,
  Calendar
} from "lucide-react";

interface UmlandData {
  name: string;
  slug: string;
  distanceKm: number;
  responseTime: string;
  description: string;
  postalCodes: string[];
  specialties: string[];
  population: string;
}

const umlandOrte: Record<string, UmlandData> = {
  starnberg: {
    name: "Starnberg",
    slug: "starnberg",
    distanceKm: 25,
    responseTime: "45 Min.",
    description: "Starnberg am malerischen Starnberger See ist bekannt für exklusive Villen und gehobene Wohnlagen. Unsere Meisterbetriebe sind auf Premium-Sanitär und moderne Heiztechnik für anspruchsvolle Immobilien spezialisiert.",
    postalCodes: ["82319"],
    specialties: ["Villen-Sanierung", "Pool-Technik", "Luxusbäder", "Wärmepumpen"],
    population: "24.000"
  },
  dachau: {
    name: "Dachau",
    slug: "dachau",
    distanceKm: 18,
    responseTime: "35 Min.",
    description: "Dachau nördlich von München ist eine wachsende Stadt mit Altstadt-Charme und modernen Wohngebieten. Wir betreuen hier sowohl historische Gebäude als auch Neubauten mit vollem Service.",
    postalCodes: ["85221"],
    specialties: ["Altbausanierung", "Heizungstausch", "Rohrreinigung", "24h Notdienst"],
    population: "49.000"
  },
  freising: {
    name: "Freising",
    slug: "freising",
    distanceKm: 35,
    responseTime: "50 Min.",
    description: "Freising ist die älteste Stadt zwischen Donau und Alpen mit einer Mischung aus historischen Bauten und modernen Wohngebieten nahe dem Flughafen München.",
    postalCodes: ["85354"],
    specialties: ["Altbau-Expertise", "Gewerbe-Sanitär", "Heizungswartung", "Badsanierung"],
    population: "50.000"
  },
  germering: {
    name: "Germering",
    slug: "germering",
    distanceKm: 16,
    responseTime: "30 Min.",
    description: "Germering ist die zweitgrößte Stadt im Landkreis Fürstenfeldbruck und eine beliebte Wohngemeinde westlich von München mit guter Anbindung.",
    postalCodes: ["82110"],
    specialties: ["Einfamilienhaus", "Heizungsmodernisierung", "Badsanierung", "Notdienst"],
    population: "42.000"
  },
  unterhaching: {
    name: "Unterhaching",
    slug: "unterhaching",
    distanceKm: 10,
    responseTime: "25 Min.",
    description: "Unterhaching im Süden Münchens ist bekannt für innovative Geothermie und wächst stetig. Wir sind hier spezialisiert auf moderne Heiztechnik und Sanitäranlagen.",
    postalCodes: ["82008"],
    specialties: ["Wärmepumpen", "Fußbodenheizung", "Neubau-Installation", "Smart-Home"],
    population: "27.000"
  },
  ottobrunn: {
    name: "Ottobrunn",
    slug: "ottobrunn",
    distanceKm: 12,
    responseTime: "25 Min.",
    description: "Ottobrunn ist eine moderne Gemeinde südöstlich von München mit vielen Einfamilienhäusern und guter Infrastruktur. Ideal für unseren schnellen Vor-Ort-Service.",
    postalCodes: ["85521"],
    specialties: ["Familienhaus", "Heizungswartung", "Badsanierung", "Rohrsanierung"],
    population: "22.000"
  },
  unterschleissheim: {
    name: "Unterschleißheim",
    slug: "unterschleissheim",
    distanceKm: 15,
    responseTime: "30 Min.",
    description: "Unterschleißheim nördlich von München ist ein wichtiger Gewerbestandort mit vielen Wohngebieten. Wir betreuen hier Privat- und Gewerbekunden gleichermaßen.",
    postalCodes: ["85716"],
    specialties: ["Gewerbe-Sanitär", "Heizungstausch", "Rohrreinigung", "Wartungsverträge"],
    population: "30.000"
  },
  garching: {
    name: "Garching",
    slug: "garching",
    distanceKm: 13,
    responseTime: "30 Min.",
    description: "Garching ist bekannt für den Forschungscampus und die TU München. Die Mischung aus Wissenschaft und Wohnen erfordert flexible Sanitär- und Heizungslösungen.",
    postalCodes: ["85748"],
    specialties: ["Neubau-Installation", "Laborinstallationen", "Smart-Home", "Heizungsmodernisierung"],
    population: "19.000"
  },
  taufkirchen: {
    name: "Taufkirchen",
    slug: "taufkirchen",
    distanceKm: 14,
    responseTime: "30 Min.",
    description: "Taufkirchen im Süden Münchens bietet eine hohe Lebensqualität mit vielen Einfamilienhäusern. Unsere Techniker sind hier regelmäßig im Einsatz.",
    postalCodes: ["82024"],
    specialties: ["Familienhaus", "Garten-Bewässerung", "Wärmepumpen", "Badsanierung"],
    population: "19.000"
  },
  haar: {
    name: "Haar",
    slug: "haar",
    distanceKm: 11,
    responseTime: "25 Min.",
    description: "Haar östlich von München ist eine grüne Wohngemeinde mit kurzen Wegen in die Stadt. Wir bieten hier schnellen Service für alle Sanitär- und Heizungsarbeiten.",
    postalCodes: ["85540"],
    specialties: ["Schneller Notdienst", "Altbausanierung", "Heizungswartung", "Rohrreinigung"],
    population: "22.000"
  }
};

const services = [
  { icon: Droplets, title: "Sanitärinstallation", href: "/sanitaer", price: "Ab 89€" },
  { icon: ShowerHead, title: "Badsanierung", href: "/bad", price: "Ab 8.900€" },
  { icon: Flame, title: "Heizungsservice", href: "/heizung", price: "Ab 149€" },
  { icon: Wrench, title: "Rohrreinigung", href: "/rohrreinigung", price: "Ab 79€" },
];

export default function UmlandPage() {
  const params = useParams<{ ort: string }>();
  const ort = params.ort?.toLowerCase() || "";
  const location = umlandOrte[ort];

  if (!location) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Ort nicht gefunden</h1>
            <p className="text-muted-foreground mb-8">
              Dieser Ort ist noch nicht in unserer Datenbank. Aber keine Sorge - wir sind auch in Ihrem Ort für Sie da!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/termin" data-testid="button-call-notfound">
                  <Calendar className="w-4 h-4 mr-2" />
                  24h Terminbuchung
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/" data-testid="link-back-home">Zurück zur Startseite</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO
        title={`Sanitär & Heizung ${location.name} | 24h Notdienst | AquaPro24`}
        description={`Sanitär und Heizung in ${location.name}. Notdienst 24/7, Festpreisgarantie, Anfahrt in ${location.responseTime}. Badsanierung, Rohrreinigung, Heizungswartung. Jetzt anrufen: 0173 5994699`}
        canonical={`https://aquapro24.de/umland/${location.slug}`}
      />
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-secondary/10 via-background to-primary/5 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-foreground" data-testid="breadcrumb-home">Start</Link>
              <span>/</span>
              <Link href="/stadtteile" className="hover:text-foreground" data-testid="breadcrumb-stadtteile">Einsatzgebiet</Link>
              <span>/</span>
              <span className="text-foreground">{location.name}</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                  <MapPin className="w-3 h-3 mr-1" />
                  {location.distanceKm} km von München
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  Sanitär & Heizung in {location.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {location.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2 text-sm bg-muted/50 px-3 py-2 rounded-md">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span>{location.responseTime} Anfahrt</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-muted/50 px-3 py-2 rounded-md">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>4.9/5 Bewertung</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-muted/50 px-3 py-2 rounded-md">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Festpreis</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-red-700" asChild>
                    <Link href="/termin" data-testid="button-call-hero">
                      <Calendar className="w-4 h-4 mr-2" />
                      24h Terminbuchung
                    </Link>
                  </Button>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-red-700" asChild>
                    <Link href="/termin" data-testid="button-rueckruf-hero">
                      <Phone className="w-4 h-4 mr-2" />
                      Rückruf anfordern
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <h2 className="font-semibold text-lg mb-4">Unsere Leistungen in {location.name}</h2>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, i) => (
                    <Link
                      key={i}
                      href={service.href}
                      data-testid={`link-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Card className="hover-elevate cursor-pointer h-full">
                        <CardContent className="p-4 flex flex-col items-center text-center">
                          <service.icon className="w-8 h-8 text-secondary mb-2" />
                          <h3 className="font-medium text-sm">{service.title}</h3>
                          <span className="text-xs text-muted-foreground">{service.price}</span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Unsere Spezialgebiete in {location.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {location.specialties.map((specialty, i) => (
                <div key={i} className="flex items-center gap-3 bg-background p-4 rounded-lg border">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium">{specialty}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ihr lokaler Sanitär- und Heizungspartner in {location.name}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                <strong>AquaPro24</strong> ist Ihr zuverlässiger Partner für alle Sanitär- und Heizungsarbeiten in 
                {location.name} und Umgebung. Mit unserem Netzwerk aus geprüften Meisterbetrieben sind wir in 
                durchschnittlich {location.responseTime} bei Ihnen vor Ort.
              </p>
              <p>
                Ob <Link href="/notdienst" className="text-secondary hover:underline" data-testid="link-notdienst">Notdienst bei Rohrbruch</Link>, 
                professionelle <Link href="/bad" className="text-secondary hover:underline" data-testid="link-bad">Badsanierung</Link> oder 
                <Link href="/heizung" className="text-secondary hover:underline" data-testid="link-heizung"> Heizungsmodernisierung</Link> - 
                wir bieten Ihnen das komplette Leistungsspektrum aus einer Hand.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-8">Warum AquaPro24 in {location.name}?</h3>
              <ul>
                <li><strong>Schnelle Anfahrt:</strong> Nur {location.distanceKm} km von München - wir sind in {location.responseTime} bei Ihnen</li>
                <li><strong>Lokale Expertise:</strong> Unsere Partner kennen die Besonderheiten in {location.name}</li>
                <li><strong>Festpreisgarantie:</strong> Transparente Preise ohne versteckte Kosten</li>
                <li><strong>24/7 Notdienst:</strong> Auch nachts und am Wochenende erreichbar</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8">Über {location.name}</h3>
              <p>
                {location.name} mit seinen rund {location.population} Einwohnern liegt {location.distanceKm} Kilometer 
                von München entfernt. Die Postleitzahl{location.postalCodes.length > 1 ? 'en' : ''} {location.postalCodes.join(', ')} 
                {location.postalCodes.length > 1 ? ' gehören' : ' gehört'} zu unserem Einsatzgebiet.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Sanitär- oder Heizungsproblem in {location.name}?
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-2xl mx-auto">
              Rufen Sie uns an oder schreiben Sie uns - wir sind in {location.responseTime} bei Ihnen!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-red-700" asChild>
                <Link href="/termin" data-testid="button-call-cta">
                  <Calendar className="w-5 h-5 mr-2" />
                  24h Terminbuchung
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-2xl mx-auto px-4 lg:px-8">
            <CallbackForm />
          </div>
        </section>

        <FreeConsultationBanner variant="compact" className="mx-4 lg:mx-8 mb-8 max-w-7xl lg:mx-auto" />
      </main>
      <Footer />
      <AIChatWidget />
      <CookieBanner />
      <FloatingContactBar />
    </div>
  );
}
