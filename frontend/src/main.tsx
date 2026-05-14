// The entry point — this is where the whole app kicks off.
// React grabs hold of the #root div in index.html and off we go.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import { AppRouter } from "./routes/Router";

const rootElement = document.getElementById("root");
// If the root div doesn't exist something has gone pretty wrong
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
);
