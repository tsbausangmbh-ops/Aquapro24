import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { seoMeta } from "@shared/seoMeta";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, MapPin, FileText, Clock, CheckCircle2, AlertTriangle, Star } from "lucide-react";
import { Link } from "wouter";
import { HeroPicture } from "@/components/ResponsiveHero";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seoMeta['/impressum'].title}
        description={seoMeta['/impressum'].description}
        canonical="https://aquapro24.de/impressum"
        keywords={seoMeta['/impressum'].keywords.join(', ')}
        ogImageAlt="Impressum AquaPro 24 München Hardenbergstr 4 - Sanitär Heizung Inhaber Mustafa Sakar"
      />
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_impressum" alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-2 sm:mb-4">
                <Badge className="bg-destructive text-destructive-foreground gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  24/7 Notdienst
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  4.9 Google-Bewertung
                </Badge>
              </div>

              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-2 sm:mb-4">
                Impressum AquaPro 24 – Sanitär Heizung München
              </h1>

              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Impressum AquaPro 24</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Inhaber Mustafa Sakar</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">80992 München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Partnernetzwerk Sanitär</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Kontaktdaten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Ansprechpartner</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Einzelunternehmer</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Rechtliches</span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-1 sm:mb-3">
                <strong>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</strong>
              </p>

              <p className="text-sm sm:text-base text-white/90 mb-2 sm:mb-4">
                AquaPro 24, Inhaber Mustafa Sakar – Ihr zuverlässiger Partner für Sanitär & Heizung in München seit 2005.
              </p>

              <div className="backdrop-blur-sm rounded-lg p-2 sm:p-3 mb-2 sm:mb-4 border" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> Ein Handwerksbetrieb, der mit vollem Namen hinter seiner Arbeit steht – transparent, erreichbar und seit 20 Jahren zuverlässig.
                </p>
              </div>

              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6">
                <strong>2.847 Münchner Familien</strong> vertrauen uns – Festpreise: Sanitär ab 92€ | Rohrreinigung ab 81€ | Heizung ab 154€
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-6">
                <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-impressum">
                  <a href="tel:+4989444438872">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2 backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)", color: "white" }} 
                  asChild
                  data-testid="button-termin-impressum"
                >
                  <Link href="/termin">
                    <Clock className="w-4 h-4" />
                    24h Terminbuchung
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Geprüfte Fachbetriebe</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>München & Umgebung</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Seit 2005 aktiv</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="py-8 lg:py-6">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <Button variant="ghost" className="mb-6 gap-2" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Zurück zur Startseite
              </Link>
            </Button>

            <div className="space-y-4">
            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz):</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-foreground font-medium text-lg">AquaPro 24</p>
                  <p>Inhaber: Mustafa Sakar</p>
                  <p>Hardenbergstr. 4</p>
                  <p>80992 München</p>
                  <p>Deutschland</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Kontakt</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-4 h-4 text-secondary" />
                    <a href="tel:+4989444438872" className="hover:text-secondary transition-colors">
                      089 444438872
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-4 h-4 text-secondary" />
                    <a href="mailto:info@aquapro24.de" className="hover:text-secondary transition-colors">
                      info@aquapro24.de
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>Hardenbergstr. 4, 80992 München</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Betriebsverantwortung</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    Die Webseite AquaPro 24.de wird von AquaPro 24 (Inhaber: Mustafa Sakar) verwaltet, betrieben und technisch administriert.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Unternehmensform</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>Einzelunternehmer</p>
                  <p>Inhaber: Mustafa Sakar</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Umsatzsteuer-ID</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                  <p className="text-foreground font-medium">folgt</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>Mustafa Sakar</p>
                  <p>Hardenbergstr. 4</p>
                  <p>80992 München</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Hinweis zur KI-Beratung</h2>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Auf dieser Website setzen wir KI-gestützte Berater ein, die auf Basis von OpenAI-Technologie 
                    unverbindliche Kostenschätzungen für Sanitär-, Heizungs- und Haustechnikleistungen erstellen.
                  </p>
                  <p>
                    <strong>Preishinweis:</strong> Die von den KI-Beratern genannten Preisschätzungen enthalten 
                    einen Beratungsaufschlag von 30% gegenüber den auf unserer Website angegebenen Basispreisen. 
                    Dies dient der Vergütung der KI-gestützten Beratungsleistung.
                  </p>
                  <p>
                    Alle genannten Preise sind unverbindliche Schätzungen (netto zzgl. 19% MwSt.) und dienen 
                    nur zur Orientierung. Verbindliche Preise werden erst nach einer persönlichen Besichtigung 
                    vor Ort festgelegt. Stand: Februar 2026.
                  </p>
                </div>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    KI-Hinweis gemäß EU AI Act (Art. 50)
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    <strong>Transparenzhinweis:</strong> AquaPro 24 setzt zur Unterstützung der Geschäftsprozesse 
                    KI-basierte Systeme ein. Diese werden u.a. bei der Angebotserstellung, Kommunikation und 
                    Dokumentenverarbeitung genutzt. Alle endgültigen Entscheidungen werden von qualifizierten 
                    Mitarbeitern getroffen und verantwortet.
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    <strong>Rechtsgrundlage:</strong> Verordnung (EU) 2024/1689 (EU AI Act), Art. 22 DSGVO
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Streitschlichtung</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                    <a 
                      href="https://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                  <p>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Haftung für Inhalte</h2>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten 
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als 
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                    Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                    Tätigkeit hinweisen.
                  </p>
                  <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                    allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                    erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                    Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte 
                    umgehend entfernen.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Haftung für Links</h2>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                    Seiten verantwortlich.
                  </p>
                  <p>
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße 
                    überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. 
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                    Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
                    Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Urheberrecht</h2>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                    Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                  <p>
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
                    Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt 
                    wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter 
                    als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung 
                    aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von 
                    Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </main>
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="border-t pt-4 space-y-1">
          <p className="text-[10px] text-muted-foreground/60 font-semibold">Hinweis zum Vertragsabschluss</p>
          <p className="text-[10px] text-muted-foreground/60">
            Die auf dieser Website dargestellten Inhalte, Leistungen und Informationen stellen kein verbindliches Angebot im rechtlichen Sinne dar. Ein Vertragsabschluss über diese Website findet nicht statt.
          </p>
          <p className="text-[10px] text-muted-foreground/60">
            Anfragen über kontaktformulare, E-Mail oder Telefon dienen ausschließlich der unverbindlichen Kontaktaufnahme und der Vorbereitung einer individuellen Angebotserstellung. Ein Vertrag kommt erst nach persönlicher Abstimmung, Besichtigung vor Ort und ausdrücklicher Annahme eines schriftlichen Angebots zustande.
          </p>
          <p className="text-[10px] text-muted-foreground/60">
            Es erfolgt keine kostenpflichtige Bestellung, keine Buchung und keine Online-Zahlung über diese Website.
          </p>
          <p className="text-[10px] text-muted-foreground/60">
            <a href="/impressum" className="underline hover:text-primary">Impressum</a> · <a href="/agb" className="underline hover:text-primary">AGB</a>
          </p>
        </div>
      </section>

      <InternalLinks
        title="Unsere Leistungen"
        variant="footer-cta"
        links={[
          { href: "/sanitaer", text: "Sanitär München", description: "Alle Sanitär-Services ab 81€" },
          { href: "/heizung", text: "Heizung München", description: "Wartung & Reparatur ab 154€" },
          { href: "/bad", text: "Badsanierung München", description: "Komplettsanierung aus einer Hand" },
          { href: "/waermepumpe", text: "Wärmepumpe München", description: "Installation mit Förderung" },
          { href: "/notdienst-muenchen", text: "24/7 Notdienst", description: "Soforthilfe in 45-60 Minuten" },
          { href: "/foerderung", text: "Förderung & Zuschüsse", description: "BAFA & KfW Beratung" },
          { href: "/termin", text: "Termin vereinbaren", description: "Online-Buchung in 2 Minuten" },
          { href: "/kontakt", text: "Kontakt aufnehmen", description: "Jetzt unverbindlich anfragen" },
          { href: "/faq", text: "Häufige Fragen", description: "Preise, Ablauf & mehr" },
        ]}
      />
      <Footer />
    </div>
  );
}
