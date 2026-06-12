// Contact page — email, phone, location details plus a contact form.
// The form doesn't actually send anywhere yet (preventDefault on submit).
// TODO: wire up to a form backend (e.g. Formspree, Netlify Forms, or an API endpoint).

import { Link } from "react-router-dom";
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

      <section id="contact-details" className="bg-background px-4 py-16 scroll-mt-24">
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
              <button type="submit" className="btn-primary btn-block">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Feedback form */}
      <section id="feedback" className="bg-muted px-4 py-16 scroll-mt-24">
        <div className="mx-auto max-w-2xl">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Feedback Form</h2>
            <p className="mt-2 text-muted-foreground">
              We'd love to hear your thoughts, suggestions, and experiences. Your feedback helps us
              improve and grow.
            </p>
          </header>
          <form
            className="space-y-6 rounded-2xl border border-border bg-card p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="feedback-name" className="block text-sm font-bold text-card-foreground">
                Name (optional)
              </label>
              <input
                id="feedback-name"
                type="text"
                className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold"
                placeholder="Placeholder name"
              />
            </div>
            <div>
              <label htmlFor="feedback-email" className="block text-sm font-bold text-card-foreground">
                Email (optional)
              </label>
              <input
                id="feedback-email"
                type="email"
                className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold"
                placeholder="placeholder@example.com"
              />
            </div>
            <fieldset>
              <legend className="text-sm font-bold text-card-foreground">
                How would you rate your experience?
              </legend>
              <div className="mt-2 flex flex-wrap gap-4">
                {["Excellent", "Good", "Average", "Poor"].map((rating) => (
                  <label key={rating} className="flex items-center gap-2 text-sm text-foreground">
                    <input type="radio" name="rating" value={rating} className="accent-gold" />
                    {rating}
                  </label>
                ))}
              </div>
            </fieldset>
            <div>
              <label htmlFor="feedback-message" className="block text-sm font-bold text-card-foreground">
                Your Feedback
              </label>
              <textarea
                id="feedback-message"
                rows={5}
                className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold"
                placeholder="Placeholder feedback..."
              />
            </div>
            <button type="submit" className="btn-primary btn-block">
              Submit Feedback
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Prefer to get in touch another way?{" "}
            <Link to="/get-involved" className="font-bold text-foreground hover:text-gold transition-colors">
              Visit our Get Involved page
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}