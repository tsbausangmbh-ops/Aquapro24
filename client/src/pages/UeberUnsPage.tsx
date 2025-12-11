import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Heart, 
  Wrench,
  Phone,
  CheckCircle2,
  Star,
  MapPin,
  Target,
  Zap,
  ThumbsUp,
  Building,
  BadgeCheck,
  MessageCircle
} from "lucide-react";
import teamImage from "@assets/stock_images/professional_busines_7b2784dc.jpg";
import technicianImage from "@assets/stock_images/professional_plumber_8d5ea632.jpg";
import workshopImage from "@assets/stock_images/modern_plumbing_work_077b9e6b.jpg";

const stats = [
  { value: "Seit 2005", label: "Partnernetzwerk", sublabel: "in München" },
  { value: "2.800+", label: "Zufriedene Kunden", sublabel: "in München" },
  { value: "4.9", label: "Sterne", sublabel: "Google Bewertung" },
  { value: "Ab 60 Min.", label: "Vor Ort", sublabel: "bei Notfällen" }
];

const values = [
  {
    icon: Heart,
    title: "Kunden helfen",
    description: "Unsere oberste Priorität: Ihre Probleme schnell und nachhaltig zu lösen."
  },
  {
    icon: Shield,
    title: "Verlässlichkeit",
    description: "Termine werden eingehalten, Preise sind verbindlich, Zusagen werden erfüllt."
  },
  {
    icon: Zap,
    title: "Schnelle Hilfe",
    description: "Ab 60 Minuten vor Ort. Auch nachts, am Wochenende und an Feiertagen."
  },
  {
    icon: Award,
    title: "Geprüfte Partner",
    description: "Nur zertifizierte Fachbetriebe mit nachgewiesener Qualität in unserem Netzwerk."
  }
];

const differentiators = [
  { icon: CheckCircle2, text: "Festpreisgarantie vor Arbeitsbeginn" },
  { icon: CheckCircle2, text: "24/7 Notdienst mit echtem Ansprechpartner" },
  { icon: CheckCircle2, text: "Partnernetzwerk mit Qualitätsversprechen" },
  { icon: CheckCircle2, text: "Transparente Kommunikation ohne Fachchinesisch" },
  { icon: CheckCircle2, text: "Saubere Arbeit - wir hinterlassen keinen Schmutz" },
  { icon: CheckCircle2, text: "5 Jahre Gewährleistung auf alle Arbeiten" }
];

const testimonials = [
  {
    name: "M. Schneider",
    location: "München-Schwabing",
    text: "Endlich ein Handwerker, der pünktlich ist und hält, was er verspricht. Die Badsanierung war perfekt geplant und ausgeführt.",
    rating: 5
  },
  {
    name: "K. Wagner",
    location: "München-Bogenhausen",
    text: "Sonntagabend Wasserrohrbruch - in 40 Minuten war der Techniker da. Professionell, freundlich, faire Rechnung. Absolute Empfehlung!",
    rating: 5
  },
  {
    name: "S. Hoffmann",
    location: "München-Sendling",
    text: "Die Wärmepumpen-Beratung war ehrlich und kompetent. Kein Verkaufsdruck, sondern echte Expertise. Spare jetzt 55% Heizkosten.",
    rating: 5
  }
];

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Über uns | AquaPro24 München | Partnernetzwerk seit 2005 | Geprüfte Fachbetriebe"
        description="Ihr Münchner Partnernetzwerk für Sanitär und Heizung. 48+ Jahre Erfahrung, 2.500+ zufriedene Kunden in Schwabing, Bogenhausen, Sendling. Meisterqualität, Festpreise, persönlicher Service."
        canonical="https://aquapro24.de/ueber-uns"
        keywords="Über uns Sanitär München, Partnernetzwerk Heizung Schwabing, Team Installateur Bogenhausen, Fachbetriebe Sendling, Team Pasing, Partner Maxvorstadt, Betrieb Haidhausen, Neuhausen"
      />
      <Header />
      <TrustBar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="gap-2">
                  <BadgeCheck className="w-4 h-4" />
                  Partnernetzwerk seit 2005
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Unsere Vision:<br />
                  <span className="text-primary">Ihre Probleme lösen</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wir glauben daran, dass jeder Kunde schnelle, zuverlässige und faire Hilfe verdient.
                  <strong> Unsere Mission ist es, Ihre Probleme zu lösen</strong> - schnell, professionell 
                  und ohne Stress für Sie.
                </p>
                <p className="text-muted-foreground">
                  Als Partnernetzwerk seit 2005 verbinden wir geprüfte Fachbetriebe mit Kunden, 
                  die kompetente Hilfe brauchen. Ob Rohrbruch, Heizungsausfall oder Badsanierung - 
                  wir sind für Sie da und finden die beste Lösung für Ihr Anliegen.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button size="lg" asChild>
                    <a href="tel:+4915212274043" data-testid="button-call-about">
                      <Phone className="w-5 h-5 mr-2" />
                      0152 12274043
                    </a>
                  </Button>
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-600" asChild>
                    <a 
                      href="https://wa.me/4915212274043?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen%20und%20m%C3%B6chte%20eine%20Anfrage%20stellen." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      data-testid="button-whatsapp-about"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Anfrage per WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={teamImage} 
                    alt="Unser professionelles Team" 
                    className="w-full h-80 lg:h-96 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg hidden lg:block">
                  <div className="text-3xl font-bold">48+</div>
                  <div className="text-sm opacity-90">Jahre Erfahrung</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="pt-8 pb-4 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="font-medium mt-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={technicianImage} 
                    alt="Meister bei der Arbeit" 
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <Badge variant="outline">Unsere Geschichte</Badge>
                <h2 className="text-3xl font-bold">
                  Zwei Experten, eine Vision
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">2024</strong> haben sich zwei Experten zusammengetan, 
                    die eine gemeinsame Frustration teilten: Zu viele Kunden berichten von unzuverlässigen 
                    Handwerkern, intransparenten Preisen und mangelnder Kommunikation.
                  </p>
                  <p>
                    Unser <strong className="text-foreground">Sanitär- und Heizungsmeister</strong> bringt 
                    22 Jahre praktische Erfahrung mit. Er kennt jedes Rohr, jede Heizung, jedes Problem - 
                    und die beste Lösung dafür.
                  </p>
                  <p>
                    Unser <strong className="text-foreground">Inhaber</strong> mit 26 Jahren 
                    Erfahrung sorgt für professionelle Abläufe, klare Kommunikation und faire Preise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-10 lg:pt-8 pb-4 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <Badge variant="secondary" className="mb-4">Unsere Werte</Badge>
              <h2 className="text-3xl font-bold mb-4">Wofür wir stehen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Diese Prinzipien sind keine leeren Worte - sie bestimmen jede Entscheidung, 
                die wir treffen.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 shadow-sm bg-background">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-6">
                <Badge variant="outline">Warum wir?</Badge>
                <h2 className="text-3xl font-bold">
                  Das unterscheidet uns von anderen
                </h2>
                <p className="text-muted-foreground">
                  Wir wissen, dass Sie bei Handwerkern schon schlechte Erfahrungen gemacht haben. 
                  Deshalb haben wir klare Standards definiert, die wir bei jedem Auftrag einhalten.
                </p>
                <div className="space-y-4">
                  {differentiators.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={workshopImage} 
                  alt="Professionelle Werkstatt und Ausrüstung" 
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-10 lg:pt-8 pb-4 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <Badge variant="secondary" className="mb-4">Kundenstimmen</Badge>
              <h2 className="text-3xl font-bold mb-4">Was unsere Kunden sagen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Echte Bewertungen von echten Kunden aus München
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 lg:pt-8 pb-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Bereit für einen Handwerker, dem Sie vertrauen können?
            </h2>
            <p className="text-primary-foreground/80 mb-4 max-w-2xl mx-auto text-lg">
              Rufen Sie uns an oder schreiben Sie uns. Wir beraten Sie kostenlos und 
              unverbindlich - und Sie entscheiden dann in Ruhe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+4915212274043">
                  <Phone className="w-5 h-5 mr-2" />
                  0152 12274043
                </a>
              </Button>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-600" asChild>
                <a 
                  href="https://wa.me/4915212274043?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen%20und%20m%C3%B6chte%20eine%20Anfrage%20stellen." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid="button-whatsapp-cta"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Anfrage per WhatsApp
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-10 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                München & Umgebung
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                24/7 Notdienst
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Kostenlose Beratung
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
