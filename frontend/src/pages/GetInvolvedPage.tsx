// Get Involved page — book a session, see open roles, and log in for members/professionals.
// Forms are UI-only at the moment (preventDefault on submit).
// TODO: wire up booking form, application buttons, and login to a backend.

import { PageHero } from "@/components/PageHero";
import { useState } from "react";

const ROLES = [
  {
    title: "Placeholder Volunteer Role",
    type: "Volunteer",
    desc: "Placeholder description of volunteering opportunities.",
  },
  {
    title: "Placeholder Team Role",
    type: "Part-time",
    desc: "Placeholder description of team opportunities.",
  },
  {
    title: "Placeholder Internship",
    type: "Internship",
    desc: "Placeholder description of internship opportunities.",
  },
];

type PaymentMethod = "PayPal" | "Credit/Debit Card";

export default function GetInvolvedPage() {
  const [payMethod, setPayMethod] = useState<PaymentMethod>("PayPal");

  return (
    <div className="relative z-10">
      <PageHero
        title="Get Involved"
        subtitle="Placeholder subtitle. Book a session, join our team, or sign in."
      />

      {/* Booking form section */}
      <section id="booking" className="bg-background px-4 py-16 scroll-mt-24">
        <div className="mx-auto max-w-2xl">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Book a Session</h2>
            <p className="mt-2 text-muted-foreground">Request a workshop, event or training.</p>
          </header>
          <form
            className="space-y-6 rounded-2xl border border-border bg-card p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-card-foreground">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold focus:border-gold"
                placeholder="Placeholder name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-card-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold focus:border-gold"
                placeholder="placeholder@example.com"
              />
            </div>
            <div>
              <label htmlFor="org" className="block text-sm font-bold text-card-foreground">
                Organisation (optional)
              </label>
              <input
                id="org"
                type="text"
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold focus:border-gold"
                placeholder="Placeholder organisation"
              />
            </div>
            <fieldset>
              <legend className="text-sm font-bold text-card-foreground">Service Type</legend>
              <div className="mt-2 space-y-2">
                {["Workshop", "Community Event", "Consultancy", "Training", "Other"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm text-foreground">
                    <input type="radio" name="service" value={opt} className="accent-gold" />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-card-foreground">
                Tell us what you need
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold focus:border-gold"
                placeholder="Placeholder message..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gold px-8 py-3 font-bold text-navy hover:bg-gold-light transition-colors"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>

      {/* Donation form section */}
      <section id="donate" className="bg-muted px-4 py-16 scroll-mt-24">
        <div className="mx-auto max-w-3xl">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Donate</h2>
            <p className="mt-2 text-muted-foreground">Contribute to our cause. Every bit helps!</p>
          </header>
          <form
            className="space-y-6 rounded-2xl border border-border bg-card p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <legend className="text-sm font-bold text-card-foreground">Payment Method</legend>
              <div className="mt-2 space-y-2">
                <label key="PayPal" className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="radio"
                    onChange={() => setPayMethod("PayPal")}
                    name="payment-method"
                    value="PayPal"
                    className="accent-gold"
                    defaultChecked={true}
                  />
                  PayPal
                </label>
                <label
                  key="Credit/Debit Card"
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <input
                    type="radio"
                    onChange={() => setPayMethod("Credit/Debit Card")}
                    name="payment-method"
                    value="Credit/Debit Card"
                    className="accent-gold"
                  />
                  Credit/Debit Card
                </label>
              </div>
            </div>
            {payMethod == ("Credit/Debit Card" as PaymentMethod) ? (
              <div className="mt-2 space-y-2">
                <label
                  htmlFor="card-number"
                  key="Card Number"
                  className="block text-sm font-bold text-card-foreground"
                >
                  Card Number
                </label>
                <input
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold focus:border-gold"
                  type="text"
                  maxLength={16}
                  name="card-number"
                  placeholder="0000 0000 0000 0000"
                />

                <label
                  htmlFor="expiry"
                  key="Expiry"
                  className="block text-sm font-bold text-card-foreground"
                >
                  Expiry
                </label>
                <input
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold focus:border-gold"
                  type="text"
                  maxLength={5}
                  name="expiry"
                  placeholder="00/00"
                />

                <label
                  htmlFor="cvv"
                  key="CVV"
                  className="block text-sm font-bold text-card-foreground"
                >
                  CVV
                </label>
                <input
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold focus:border-gold"
                  type="text"
                  maxLength={3}
                  name="cvv"
                  placeholder="000"
                />
              </div>
            ) : (
              <div></div>
            )}
            <button
              type="submit"
              className="w-full rounded-xl bg-gold px-8 py-3 font-bold text-navy hover:bg-gold-light transition-colors"
            >
              Submit Donation
            </button>
          </form>
        </div>
      </section>

      {/* Work with us — roles section */}
      <section id="work-with-us" className="bg-background px-4 py-16 scroll-mt-24">
        <div className="mx-auto max-w-3xl">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Work With Us</h2>
            <p className="mt-2 text-muted-foreground">Roles, volunteering and internships.</p>
          </header>
          <div className="space-y-6">
            {ROLES.map((role, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground">{role.title}</h3>
                    <span className="mt-1 inline-block rounded-full bg-gold/30 px-3 py-0.5 text-xs font-bold text-foreground">
                      {role.type}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{role.desc}</p>
                {/* TODO: wire up application flow */}
                <button className="mt-4 rounded-xl bg-navy px-6 py-2 text-sm font-bold text-gold hover:bg-navy-light transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Login forms for members and professionals */}
      <section id="members" className="bg-muted px-4 py-16 scroll-mt-24">
        <div className="mx-auto grid gap-8 max-w-5xl md:grid-cols-2">
          {/* Member login */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold text-card-foreground text-center">Member Log In</h2>
            <p className="mt-2 text-sm text-muted-foreground text-center">
              Placeholder. Access exclusive content, events and community features.
            </p>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="mem-email" className="block text-sm font-bold text-card-foreground">
                  Email
                </label>
                <input
                  id="mem-email"
                  type="email"
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold"
                  placeholder="placeholder@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="mem-password"
                  className="block text-sm font-bold text-card-foreground"
                >
                  Password
                </label>
                <input
                  id="mem-password"
                  type="password"
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gold px-8 py-3 font-bold text-navy hover:bg-gold-light transition-colors"
              >
                Log In
              </button>
            </form>
          </div>

          {/* Professionals login */}
          <div
            id="professionals"
            className="rounded-2xl border border-border bg-card p-8 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-card-foreground text-center">
              Professionals Log In
            </h2>
            <p className="mt-2 text-sm text-muted-foreground text-center">
              Placeholder. Access training materials, guides and resources.
            </p>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="pro-email" className="block text-sm font-bold text-card-foreground">
                  Email
                </label>
                <input
                  id="pro-email"
                  type="email"
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold"
                  placeholder="placeholder@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="pro-password"
                  className="block text-sm font-bold text-card-foreground"
                >
                  Password
                </label>
                <input
                  id="pro-password"
                  type="password"
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-navy px-8 py-3 font-bold text-gold hover:bg-navy-light transition-colors"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
