// Reusable section wrapper — keeps spacing consistent across all pages.
// Drop in a section with a title, optional subtitle, children, and pick
// a background variant to match the design.

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
  const bgClass = backgroundClass[background];

  return (
    <section id={id} className={`${bgClass} px-4 py-16 scroll-mt-24`}>
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
