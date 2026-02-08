import { Switch, Route, useLocation } from "wouter";
import { lazy, Suspense, useState, useEffect, startTransition, Component, type ReactNode } from "react";
import MobileCallButton from "@/components/MobileCallButton";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Loader2 } from "lucide-react";

class AppErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    if (
      error.message?.includes("useContext") ||
      error.message?.includes("useRef") ||
      error.message?.includes("Invalid hook call")
    ) {
      window.location.reload();
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="flex flex-col items-center gap-4 p-8 text-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-muted-foreground text-sm">Seite wird neu geladen...</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function FocusManager() {
  const [location] = useLocation();
  useEffect(() => {
    const main = document.getElementById("main-content");
    if (main) {
      main.setAttribute("tabindex", "-1");
      main.focus({ preventScroll: true });
      main.removeAttribute("tabindex");
    }
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function LiveAnnouncer() {
  const [location] = useLocation();
  const [announcement, setAnnouncement] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      const h1 = document.querySelector("h1");
      if (h1?.textContent) {
        setAnnouncement(h1.textContent);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
      data-testid="live-announcer"
    >
      {announcement}
    </div>
  );
}

// Lazy load popups - nicht kritisch für First Paint
const ChristmasPopup = lazy(() => import("@/components/ChristmasPopup"));
const NewYearPopup = lazy(() => import("@/components/NewYearPopup"));

// Delayed popup loader für bessere Performance
function DelayedPopups() {
  const [showPopups, setShowPopups] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      startTransition(() => {
        setShowPopups(true);
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  if (!showPopups) return null;
  
  return (
    <Suspense fallback={null}>
      <ChristmasPopup />
      <NewYearPopup />
    </Suspense>
  );
}

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
const FoerderungPage = lazy(() => import("@/pages/FoerderungPage"));
const FoerderantragPage = lazy(() => import("@/pages/FoerderantragPage"));
const FoerderantragHeizungPage = lazy(() => import("@/pages/FoerderantragHeizungPage"));
const FoerderrechnerPage = lazy(() => import("@/pages/FoerderrechnerPage"));
const SanitaerNotdienst24Page = lazy(() => import("@/pages/SanitaerNotdienst24Page"));
const HeizungNotdienst24Page = lazy(() => import("@/pages/HeizungNotdienst24Page"));
const BarrierefreiheitPage = lazy(() => import("@/pages/BarrierefreiheitPage"));

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
        <Route path="/foerderung" component={FoerderungPage} />
        <Route path="/foerderantrag" component={FoerderantragPage} />
        <Route path="/foerderantrag-heizung" component={FoerderantragHeizungPage} />
        <Route path="/foerderrechner" component={FoerderrechnerPage} />
        <Route path="/sanitaer-notdienst-24" component={SanitaerNotdienst24Page} />
        <Route path="/heizung-notdienst-24" component={HeizungNotdienst24Page} />
        <Route path="/barrierefreiheit" component={BarrierefreiheitPage} />
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
        <Route path="/muenchen-nord">{() => <StadtteilPage stadtteil="nord" />}</Route>
        <Route path="/muenchen-sued">{() => <StadtteilPage stadtteil="sued" />}</Route>
        <Route path="/muenchen-west">{() => <StadtteilPage stadtteil="west" />}</Route>
        <Route path="/muenchen-ost">{() => <StadtteilPage stadtteil="ost" />}</Route>
        <Route path="/nymphenburg">{() => <StadtteilPage stadtteil="nymphenburg" />}</Route>
        <Route path="/perlach">{() => <StadtteilPage stadtteil="perlach" />}</Route>
        <Route path="/solln">{() => <StadtteilPage stadtteil="solln" />}</Route>
        <Route path="/hadern">{() => <StadtteilPage stadtteil="hadern" />}</Route>
        <Route path="/allach">{() => <StadtteilPage stadtteil="allach" />}</Route>
        <Route path="/aubing">{() => <StadtteilPage stadtteil="aubing" />}</Route>
        <Route path="/feldmoching">{() => <StadtteilPage stadtteil="feldmoching" />}</Route>
        <Route path="/thalkirchen">{() => <StadtteilPage stadtteil="thalkirchen" />}</Route>
        <Route path="/ramersdorf">{() => <StadtteilPage stadtteil="ramersdorf" />}</Route>
        <Route path="/berg-am-laim">{() => <StadtteilPage stadtteil="berg_am_laim" />}</Route>
        <Route path="/schwanthalerhoehe">{() => <StadtteilPage stadtteil="schwanthalerhoehe" />}</Route>
        <Route path="/au">{() => <StadtteilPage stadtteil="au" />}</Route>
        <Route path="/lehel">{() => <StadtteilPage stadtteil="lehel" />}</Route>
        <Route path="/freimann">{() => <StadtteilPage stadtteil="freimann" />}</Route>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <AppErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <FocusManager />
          <LiveAnnouncer />
          <DelayedPopups />
          <Toaster />
          <Router />
          <MobileCallButton />
        </TooltipProvider>
      </QueryClientProvider>
    </AppErrorBoundary>
  );
}

export default App;
