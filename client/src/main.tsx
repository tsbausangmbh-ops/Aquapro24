import "./dep-preload";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initINPOptimizations } from "./lib/inp-optimizer";
import { initWebVitalsReporting } from "./lib/web-vitals-reporter";

initINPOptimizations();

const rootElement = document.getElementById("root")!;

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}

if (typeof window !== 'undefined') {
  requestIdleCallback(() => initWebVitalsReporting(), { timeout: 3000 });
}
