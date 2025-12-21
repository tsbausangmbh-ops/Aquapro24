import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Loader2 } from "lucide-react";
import ChristmasPopup from "@/components/ChristmasPopup";
import NewYearPopup from "@/components/NewYearPopup";

const Home = lazy(() => import("@/pages/Home"));
const Impressum = lazy(() => import("@/pages/Impressum"));
const BadPage = lazy(() => import("@/pages/BadPage"));
const HeizungPage = lazy(() => import("@/pages/HeizungPage"));
const WaermepumpePage = lazy(() => import("@/pages/WaermepumpePage"));
const HaustechnikPage = lazy(() => import("@/pages/HaustechnikPage"));
const SanitaerPage = lazy(() => import("@/pages/SanitaerPage"));
const UeberUnsPage = lazy(() => import("@/pages/UeberUnsPage"));
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const RatgeberPage = lazy(() => import("@/pages/RatgeberPage"));
const KontaktPage = lazy(() => import("@/pages/KontaktPage"));
const CookieRichtliniePage = lazy(() => import("@/pages/CookieRichtliniePage"));
const DatenschutzPage = lazy(() => import("@/pages/DatenschutzPage"));
const AGBPage = lazy(() => import("@/pages/AGBPage"));
const NotFound = lazy(() => import("@/pages/not-found"));
const RohrreinigungPage = lazy(() => import("@/pages/RohrreinigungPage"));
const ArmaturenPage = lazy(() => import("@/pages/ArmaturenPage"));
const WarmwasserPage = lazy(() => import("@/pages/WarmwasserPage"));
const TerminPage = lazy(() => import("@/pages/TerminPage"));
const SanitaerMuenchenPage = lazy(() => import("@/pages/SanitaerMuenchenPage"));
const HeizungMuenchenPage = lazy(() => import("@/pages/HeizungMuenchenPage"));
const BadsanierungMuenchenPage = lazy(() => import("@/pages/BadsanierungMuenchenPage"));
const WaermepumpeMuenchenPage = lazy(() => import("@/pages/WaermepumpeMuenchenPage"));
const FussbodenheizungMuenchenPage = lazy(() => import("@/pages/FussbodenheizungMuenchenPage"));
const NotdienstMuenchenPage = lazy(() => import("@/pages/NotdienstMuenchenPage"));
const StadtteilPage = lazy(() => import("@/pages/StadtteilPage"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-muted-foreground text-sm">Laden...</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/bad" component={BadPage} />
        <Route path="/badsanierung" component={BadPage} />
        <Route path="/heizung" component={HeizungPage} />
        <Route path="/waermepumpe" component={WaermepumpePage} />
        <Route path="/haustechnik" component={HaustechnikPage} />
        <Route path="/sanitaer" component={SanitaerPage} />
        <Route path="/rohrreinigung" component={RohrreinigungPage} />
        <Route path="/armaturen" component={ArmaturenPage} />
        <Route path="/warmwasser" component={WarmwasserPage} />
        <Route path="/ueber-uns" component={UeberUnsPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/ratgeber" component={RatgeberPage} />
        <Route path="/kontakt" component={KontaktPage} />
        <Route path="/termin" component={TerminPage} />
        <Route path="/cookie-richtlinie" component={CookieRichtliniePage} />
        <Route path="/datenschutz" component={DatenschutzPage} />
        <Route path="/agb" component={AGBPage} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/sanitaer-muenchen" component={SanitaerMuenchenPage} />
        <Route path="/heizung-muenchen" component={HeizungMuenchenPage} />
        <Route path="/badsanierung-muenchen" component={BadsanierungMuenchenPage} />
        <Route path="/waermepumpe-muenchen" component={WaermepumpeMuenchenPage} />
        <Route path="/fussbodenheizung-muenchen" component={FussbodenheizungMuenchenPage} />
        <Route path="/notdienst-muenchen" component={NotdienstMuenchenPage} />
        <Route path="/schwabing">{() => <StadtteilPage stadtteil="schwabing" />}</Route>
        <Route path="/bogenhausen">{() => <StadtteilPage stadtteil="bogenhausen" />}</Route>
        <Route path="/sendling">{() => <StadtteilPage stadtteil="sendling" />}</Route>
        <Route path="/pasing">{() => <StadtteilPage stadtteil="pasing" />}</Route>
        <Route path="/maxvorstadt">{() => <StadtteilPage stadtteil="maxvorstadt" />}</Route>
        <Route path="/haidhausen">{() => <StadtteilPage stadtteil="haidhausen" />}</Route>
        <Route path="/neuhausen">{() => <StadtteilPage stadtteil="neuhausen" />}</Route>
        <Route path="/laim">{() => <StadtteilPage stadtteil="laim" />}</Route>
        <Route path="/giesing">{() => <StadtteilPage stadtteil="giesing" />}</Route>
        <Route path="/trudering">{() => <StadtteilPage stadtteil="trudering" />}</Route>
        <Route path="/milbertshofen">{() => <StadtteilPage stadtteil="milbertshofen" />}</Route>
        <Route path="/moosach">{() => <StadtteilPage stadtteil="moosach" />}</Route>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ChristmasPopup />
        <NewYearPopup />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
