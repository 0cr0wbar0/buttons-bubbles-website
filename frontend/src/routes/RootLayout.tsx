import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingBubbles } from "../components/FloatingBubbles";
import { AccessibilityToolbar } from "../components/AccessibilityToolbar";
import { SkipLink } from "../components/SkipLink";

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Ensure stylesheet is linked exactly like the previous TanStack root route */}
      <link rel="stylesheet" href={appCss} />
      <SkipLink />
      <AccessibilityToolbar />
      <Header />
      <FloatingBubbles />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
