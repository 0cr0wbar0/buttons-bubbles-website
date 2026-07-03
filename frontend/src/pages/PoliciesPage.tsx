// Policies page — all organisational policies listed as cards with view/download buttons.

import { PageHero } from "@/components/PageHero";

const POLICIES = [
  {
    id: "accessibility",
    title: "Accessibility Policy",
    description:
      "Our commitment to ensuring our services, website and facilities are accessible to all users, including those with disabilities.",
  },
  {
    id: "cookie",
    title: "Cookie Policy",
    description:
      "Information about how we use cookies on our website and how you can manage your preferences.",
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    description:
      "How we collect, use, store and protect your personal data in accordance with UK data protection legislation.",
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    description:
      "The terms governing use of our website, booking of sessions and purchase of services.",
  },
  {
    id: "complaints",
    title: "Complaints Procedure",
    description:
      "Our process for handling feedback, concerns and formal complaints from service users, families and stakeholders.",
  },
  {
    id: "safeguarding",
    title: "Safeguarding Policy — Adults & Children",
    description:
      "Our procedures and commitments to safeguarding the welfare of children and adults at risk who access our services.",
  },
  {
    id: "modern-slavery",
    title: "Modern Slavery Policy",
    description:
      "Our statement and actions taken to prevent modern slavery and human trafficking in our organisation and supply chain.",
  },
  {
    id: "dei",
    title: "DEI Policy",
    description:
      "Our commitment to diversity, equity and inclusion across our workforce, service delivery and governance.",
  },
  {
    id: "vulnerability",
    title: "Vulnerability Policy",
    description:
      "Our approach to identifying and supporting vulnerable individuals who access our services.",
  },
];

export default function PoliciesPage() {
  return (
    <div className="relative z-10">
      <PageHero
        title="Policies"
        subtitle="Our organisational policies, procedures and commitments — all in one place."
      />

      <section id="policies" className="bg-background px-4 py-16 scroll-mt-24">
        <div className="mx-auto max-w-4xl">
          <header className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground">Our Policies</h2>
            <p className="mt-2 text-muted-foreground">
              Click on any policy below to view or download the full document.
            </p>
          </header>

          <div className="space-y-4">
            {POLICIES.map((policy) => (
              <div
                key={policy.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-md"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-card-foreground">{policy.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{policy.description}</p>
                </div>
                <button className="btn-primary btn-sm shrink-0" aria-label={`View ${policy.title}`}>
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
