import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8 pb-4 lg:pt-10 lg:pb-6">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <Button variant="ghost" className="mb-6 gap-2" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
          </Button>

          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Impressum
          </h1>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-foreground font-medium">KSHW München</p>
                  <p>Inhaber: Ali Kemal Kurt</p>
                  <p>Zielstattstr. 20</p>
                  <p>81379 München</p>
                  <p>Deutschland</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-4 h-4 text-secondary" />
                    <a href="tel:+4915212274043" className="hover:text-secondary transition-colors">
                      0152 12274043
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
                    <span>Zielstattstr. 20, 81379 München</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-xl font-semibold mb-4">Unternehmensform</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>Einzelunternehmer</p>
                  <p>Inhaber: Ali Kemal Kurt</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-xl font-semibold mb-4">Umsatzsteuer-ID</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                  <p className="text-foreground font-medium">DE356852204</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-xl font-semibold mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>Berufsbezeichnung: Installateur- und Heizungsbauermeister</p>
                  <p>Zuständige Kammer: Handwerkskammer für München und Oberbayern</p>
                  <p>Verliehen in: Deutschland</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>Ali Kemal Kurt</p>
                  <p>Zielstattstr. 20</p>
                  <p>81379 München</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-xl font-semibold mb-4">Streitschlichtung</h2>
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
                <h2 className="text-xl font-semibold mb-4">Haftung für Inhalte</h2>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
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
                <h2 className="text-xl font-semibold mb-4">Haftung für Links</h2>
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
                <h2 className="text-xl font-semibold mb-4">Urheberrecht</h2>
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
      </main>
      <Footer />
    </div>
  );
}
