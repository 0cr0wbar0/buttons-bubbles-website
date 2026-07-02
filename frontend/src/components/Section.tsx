// Reusable section wrapper with consistent spacing and background variants.
// Used by every page to keep layout uniform.

import type { ReactNode } from "react";

type SectionBackground = "background" | "muted" | "navy" | "gold";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  background?: SectionBackground;
}

const backgroundClass: Record<SectionBackground, string> = {
  background: "bg-background",
  muted: "bg-muted",
  navy: "bg-navy",
  gold: "bg-gold",
};

const titleClass: Record<SectionBackground, string> = {
  background: "text-foreground",
  muted: "text-foreground",
  navy: "text-gold",
  gold: "text-navy",
};

const subtitleClass: Record<SectionBackground, string> = {
  background: "text-muted-foreground",
  muted: "text-muted-foreground",
  navy: "text-gold/80",
  gold: "text-navy/80",
};

export function Section({
  id,
  title,
  subtitle,
  children,
  background = "background",
}: SectionProps) {
  return (
    <section id={id} className={`${backgroundClass[background]} px-4 py-16 scroll-mt-24`}>
      <div className="mx-auto max-w-6xl">
        <header className="text-center mb-8">
          <h2 className={`text-3xl font-bold ${titleClass[background]}`}>{title}</h2>
          {subtitle && <p className={`mt-2 ${subtitleClass[background]}`}>{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
