// Contact page — email, phone, location details plus a contact form.
// The form doesn't actually send anywhere yet (preventDefault on submit).
// TODO: wire up to a form backend (e.g. Formspree, Netlify Forms, or an API endpoint).

import { PageHero } from "@/components/PageHero";

// TODO: replace with real contact details
const CONTACT_DETAILS = [
  { icon: "📧", label: "Email", value: "placeholder@example.com" },
  { icon: "📱", label: "Phone", value: "01234 567890 (placeholder)" },
  { icon: "📍", label: "Location", value: "Placeholder address, City, County, Postcode" },
];

export default function ContactPage() {
  return (
    <div className="relative z-10">
      <PageHero
        title="Contact Us"
        subtitle="Placeholder subtitle. We would love to hear from you."
      />

      <section className="bg-background px-4 py-16">
        <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-2">
          {/* Contact info column */}
          <div>
            <h2 className="text-2xl font-bold text-foreground">Get In Touch</h2>
            <div className="mt-6 space-y-4">
              {CONTACT_DETAILS.map((detail) => (
                <div key={detail.label} className="flex items-start gap-3">
                  <span className="mt-1 text-gold" aria-hidden="true">
                    {detail.icon}
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{detail.label}</p>
                    <p className="text-muted-foreground">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form — not wired up yet, just UI placeholder */}
          <div>
            <form
              className="rounded-2xl border border-border bg-card p-8 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-bold text-foreground">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold"
                  placeholder="Placeholder name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-bold text-foreground">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold"
                  placeholder="placeholder@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-bold text-foreground"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold"
                  placeholder="Placeholder subject"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-bold text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold"
                  placeholder="Placeholder message..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gold px-8 py-3 font-bold text-navy hover:bg-gold-light transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
