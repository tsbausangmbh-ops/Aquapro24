import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initINPOptimizations } from "./lib/inp-optimizer";
import { initWebVitalsReporting } from "./lib/web-vitals-reporter";

initINPOptimizations();

if (typeof document !== 'undefined') {
  document.addEventListener('load', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' && target.getAttribute('loading') === 'lazy') {
      target.setAttribute('data-loaded', 'true');
    }
  }, true);
  requestAnimationFrame(() => {
    document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((img) => {
      if (img.complete) img.setAttribute('data-loaded', 'true');
    });
  });
}

const rootElement = document.getElementById("root")!;

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}

if (typeof window !== 'undefined') {
  requestIdleCallback(() => initWebVitalsReporting(), { timeout: 3000 });
}
