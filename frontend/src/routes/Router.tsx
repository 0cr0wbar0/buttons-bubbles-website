import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ResourcesPage from "@/pages/ResourcesPage";
import GetInvolvedPage from "@/pages/GetInvolvedPage";
import ContactPage from "@/pages/ContactPage";

import { RootLayout } from "./RootLayout";
import { NotFoundPage } from "./NotFoundPage";

function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    const hasHash = typeof location.hash === "string" && location.hash.length > 1;

    // Deterministic behavior for route navigation (main navbar):
    // - When there's NO hash, always land at the top of the page/header.
    // - When there's a hash (sub-navigation), DO NOT force scrollTo(0,0)
    //   so react-router-hash-link can scroll to the correct section.
    try {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    } catch {
      // no-op
    }

    if (!hasHash) {
      // Force to top immediately (not smooth) to avoid landing mid-page.
      window.scrollTo(0, 0);

      // Re-assert at next tick and after a short delay.
      requestAnimationFrame(() => window.scrollTo(0, 0));
      setTimeout(() => window.scrollTo(0, 0), 50);
    }
  }, [location.pathname, location.search, location.hash]);

  return null;
}

export function AppRouter() {
  return (
    <RootLayout>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RootLayout>
  );
}
