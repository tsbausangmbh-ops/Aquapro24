import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initINPOptimizations } from "./lib/inp-optimizer";

// GOOGLE 2026: Initialize INP optimizations early
initINPOptimizations();

const rootElement = document.getElementById("root")!;

// Support for pre-rendered HTML from react-snap
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
