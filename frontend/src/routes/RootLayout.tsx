// Root layout wrapping every page: skip link, accessibility toolbar, header, main content, footer.

import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AccessibilityToolbar } from "../components/AccessibilityToolbar";
import { SkipLink } from "../components/SkipLink";

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href={appCss} />
      <SkipLink />
      <AccessibilityToolbar />
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}