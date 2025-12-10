import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Impressum from "@/pages/Impressum";
import BadPage from "@/pages/BadPage";
import HeizungPage from "@/pages/HeizungPage";
import WaermepumpePage from "@/pages/WaermepumpePage";
import HaustechnikPage from "@/pages/HaustechnikPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/bad" component={BadPage} />
      <Route path="/heizung" component={HeizungPage} />
      <Route path="/waermepumpe" component={WaermepumpePage} />
      <Route path="/haustechnik" component={HaustechnikPage} />
      <Route path="/impressum" component={Impressum} />
      <Route component={NotFound} />
    </Switch>
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
