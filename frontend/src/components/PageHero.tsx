// Hero banner used at the top of every page.
// Dark navy background with floating bubbles, gold heading, optional subtitle and children.

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

import { FloatingBubbles } from "./FloatingBubbles";

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-16 text-center md:py-24">
      <FloatingBubbles />
      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-gold md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-cream/90 md:text-xl">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
