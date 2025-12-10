import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";
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
  Calendar,
  AlertTriangle,
  ArrowRight,
  ThumbsUp
} from "lucide-react";
import plumberImage from "@assets/stock_images/professional_plumber_d341c4fe.jpg";
import familyImage from "@assets/stock_images/happy_homeowner_fami_71ca925e.jpg";

const milestones = [
  { year: "2002", title: "Meisterprüfung bestanden", description: "Unser Sanitär- und Heizungsmeister beginnt seine Karriere im Handwerk - der Grundstein für 22 Jahre Erfahrung" },
  { year: "1998", title: "Kaufmännische Laufbahn", description: "Unser Geschäftsführer startet seine Karriere im Management - heute über 26 Jahre Erfahrung" },
  { year: "2024", title: "Die Vision entsteht", description: "Zwei Experten mit einer gemeinsamen Vision: Meistertechnik und professionelles Management vereinen" },
  { year: "2024", title: "Der Zusammenschluss", description: "Gründung unseres Fachbetriebs - geballte Kompetenz für Sanitär und Heizung in München" },
  { year: "Heute", title: "Ihr Partner", description: "48 Jahre Erfahrung vereint: Höchste handwerkliche Qualität und professioneller Service aus einer Hand" },
];

const values = [
  {
    icon: Heart,
    title: "Kundenorientierung",
    description: "Der Kunde steht bei uns im Mittelpunkt. Wir hören zu, beraten ehrlich und finden die beste Lösung für Ihre Bedürfnisse."
  },
  {
    icon: Award,
    title: "Qualität",
    description: "Meisterqualität in jeder Arbeit. Wir verwenden nur hochwertige Materialien und arbeiten nach höchsten Standards."
  },
  {
    icon: Clock,
    title: "Zuverlässigkeit",
    description: "Pünktlichkeit und Termintreue sind für uns selbstverständlich. Was wir zusagen, halten wir ein."
  },
  {
    icon: Shield,
    title: "Transparenz",
    description: "Keine versteckten Kosten. Sie erhalten vor Arbeitsbeginn einen verbindlichen Festpreis."
  },
];

const teamMembers = [
  { name: "Geschäftsführung", role: "Management & Strategie", experience: "26 Jahre", specialty: "Unternehmensführung" },
  { name: "Sanitär- & Heizungsmeister", role: "Technische Leitung", experience: "22 Jahre", specialty: "Sanitär & Heizung" },
];

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Über uns | Münchner Heizung & Sanitär | Meisterbetrieb"
        description="Lernen Sie uns kennen: Geballte Meistertechnik trifft auf erfahrene Unternehmensführung. 20 Jahre Sanitär- und Heizungserfahrung, 25 Jahre Managementerfahrung."
        canonical="https://aquapro24.de/ueber-uns"
        keywords="Über uns, Meisterbetrieb München, Sanitär Heizung Team, Fachbetrieb München"
      />
      <Header />
      <main>
        <section className="relative py-16 lg:py-20 bg-gradient-to-br from-secondary/10 via-background to-accent/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="gap-1">
                  <Award className="w-3 h-3" />
                  Meisterbetrieb mit Vision
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Über uns - Meistertechnik trifft Management
                </h1>
                <p className="text-lg text-muted-foreground">
                  <strong>Eine Vision, zwei Experten, ein Ziel.</strong> Unser Sanitär- und 
                  Heizungsmeister mit 22 Jahren Erfahrung im Handwerk hat sich mit einem 
                  erfahrenen Kaufmann zusammengeschlossen.
                </p>
                <p className="text-muted-foreground">
                  26 Jahre Führungserfahrung treffen auf geballte Meistertechnik. Das Ergebnis: 
                  Ein Fachbetrieb, der höchste handwerkliche Qualität mit professionellem 
                  Service und transparenter Kommunikation verbindet.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+4989123456789" data-testid="button-call-about">
                      <Phone className="w-5 h-5 mr-2" />
                      Jetzt anrufen
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <a href="mailto:info@sanitaer-muenchen.de" data-testid="button-email-about">
                      Anfrage senden
                    </a>
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={plumberImage} 
                    alt="Professioneller Sanitär-Meister bei der Arbeit" 
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Wrench className="w-5 h-5" />
                      <span className="font-semibold">22 Jahre Meistererfahrung</span>
                    </div>
                    <p className="text-sm opacity-90">Präzision und Qualität in jeder Arbeit</p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={familyImage} 
                    alt="Zufriedene Kunden in ihrem Zuhause" 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <ThumbsUp className="w-5 h-5" />
                      <span className="font-semibold">Ihr Erfolg ist unser Antrieb</span>
                    </div>
                    <p className="text-sm opacity-90">Zufriedene Kunden durch erstklassigen Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Unsere Geschichte</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Wie aus einer gemeinsamen Vision ein starkes Team wurde
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className={`flex items-center gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <Card className="inline-block">
                        <CardContent className="p-4">
                          <div className="text-primary font-bold text-lg">{milestone.year}</div>
                          <div className="font-semibold">{milestone.title}</div>
                          <div className="text-sm text-muted-foreground">{milestone.description}</div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-14 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Unsere Werte</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Diese Prinzipien leiten unsere tägliche Arbeit
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover-elevate">
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

        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Unser Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Erfahrene Meister und Techniker mit Leidenschaft für Handwerk
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                      <Wrench className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <Badge variant="secondary" className="mt-2 mb-3">{member.role}</Badge>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center gap-1">
                        <Clock className="w-3 h-3" />
                        {member.experience}
                      </div>
                      <div>{member.specialty}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-14 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Überzeugen Sie sich selbst
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Rufen Sie uns an oder schreiben Sie uns. Wir freuen uns darauf, auch Ihnen zu helfen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+4989123456789">
                  <Phone className="w-5 h-5 mr-2" />
                  089 123 456 789
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="mailto:info@sanitaer-muenchen.de">
                  Anfrage senden
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-primary-foreground/70">
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
