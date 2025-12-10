import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Loader2 } from "lucide-react";

const Home = lazy(() => import("@/pages/Home"));
const Impressum = lazy(() => import("@/pages/Impressum"));
const BadPage = lazy(() => import("@/pages/BadPage"));
const HeizungPage = lazy(() => import("@/pages/HeizungPage"));
const WaermepumpePage = lazy(() => import("@/pages/WaermepumpePage"));
const HaustechnikPage = lazy(() => import("@/pages/HaustechnikPage"));
const SanitaerPage = lazy(() => import("@/pages/SanitaerPage"));
const NotFound = lazy(() => import("@/pages/not-found"));

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
        <Route path="/heizung" component={HeizungPage} />
        <Route path="/waermepumpe" component={WaermepumpePage} />
        <Route path="/haustechnik" component={HaustechnikPage} />
        <Route path="/sanitaer" component={SanitaerPage} />
        <Route path="/impressum" component={Impressum} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
