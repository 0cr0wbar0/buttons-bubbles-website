// Get Involved page — book a session, events, donate, volunteer roles, and log in.
// Forms are UI-only at the moment (preventDefault on submit).
// TODO: wire up booking form, donation, volunteer applications, and login to a backend.

import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";

const VOLUNTEER_ROLES = [
  {
    title: "Placeholder Volunteer Role",
    type: "Volunteer",
    commitment: "Flexible — a few hours per week",
    desc: "Placeholder description of volunteering opportunities. This could involve helping with workshops, events, or administrative support.",
  },
  {
    title: "Placeholder Volunteer Role 2",
    type: "Volunteer",
    commitment: "Flexible — ad hoc",
    desc: "Placeholder description of a second volunteer opportunity. Ideal for those who want to contribute occasionally.",
  },
  {
    title: "Placeholder Team Role",
    type: "Part-time",
    commitment: "Part-time (placeholder hours)",
    desc: "Placeholder description of team opportunities for those looking for a more regular commitment.",
  },
  {
    title: "Placeholder Internship",
    type: "Internship",
    commitment: "Placeholder duration",
    desc: "Placeholder description of internship opportunities for students or career changers.",
  },
];

const EVENTS = [
  {
    title: "Placeholder Event Title",
    date: "Placeholder date",
    time: "Placeholder time",
    location: "Placeholder location",
    desc: "Placeholder description of this event, what to expect, and who it's for.",
  },
  {
    title: "Placeholder Event Title 2",
    date: "Placeholder date",
    time: "Placeholder time",
    location: "Placeholder location",
    desc: "Placeholder description of this event, what to expect, and who it's for.",
  },
  {
    title: "Placeholder Workshop",
    date: "Placeholder date",
    time: "Placeholder time",
    location: "Placeholder location",
    desc: "Placeholder description of this workshop and how to join.",
  },
  {
    title: "Placeholder Community Event",
    date: "Placeholder date",
    time: "Placeholder time",
    location: "Placeholder location",
    desc: "Placeholder description of this community gathering and how to participate.",
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
            <button type="submit" className="btn-primary btn-block">
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>

      {/* Events section */}
      <section id="events" className="bg-muted px-4 py-16 scroll-mt-24">
        <div className="mx-auto max-w-4xl">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Events</h2>
            <p className="mt-2 text-muted-foreground">
              Join us at upcoming workshops, community gatherings, and special events.
            </p>
          </header>
          <div className="space-y-6">
            {EVENTS.map((event, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground">{event.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {event.date} &middot; {event.time} &middot; {event.location}
                    </p>
                  </div>
                  <button className="btn-primary btn-sm shrink-0">
                    Register Interest
                  </button>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Want to host your own event with us?{" "}
            <Link to="/contact" className="font-bold text-foreground hover:text-gold transition-colors">
              Get in touch
            </Link>
          </p>
        </div>
      </section>

      {/* Donation form section */}
      <section id="donate" className="bg-background px-4 py-16 scroll-mt-24">
        <div className="mx-auto max-w-3xl">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Donate</h2>
            <p className="mt-2 text-muted-foreground">Contribute to our cause. Every bit helps!</p>
          </header>
          <form
            className="space-y-6 rounded-2xl border border-border bg-card p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <fieldset>
              <legend className="text-sm font-bold text-card-foreground">Payment Method</legend>
              <div className="mt-2 space-y-2">
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="radio"
                    onChange={() => setPayMethod("PayPal")}
                    name="payment-method"
                    value="PayPal"
                    className="accent-gold"
                    defaultChecked
                  />
                  PayPal
                </label>
                <label className="flex items-center gap-2 text-sm text-foreground">
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
            </fieldset>
            {payMethod === "Credit/Debit Card" ? (
              <div className="mt-2 space-y-2">
                <label htmlFor="card-number" className="block text-sm font-bold text-card-foreground">
                  Card Number
                </label>
                <input
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold focus:border-gold"
                  type="text"
                  maxLength={16}
                  name="card-number"
                  placeholder="0000 0000 0000 0000"
                />

                <label htmlFor="expiry" className="block text-sm font-bold text-card-foreground">
                  Expiry
                </label>
                <input
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-gold focus:border-gold"
                  type="text"
                  maxLength={5}
                  name="expiry"
                  placeholder="00/00"
                />

                <label htmlFor="cvv" className="block text-sm font-bold text-card-foreground">
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
            ) : null}
            <button type="submit" className="btn-primary btn-block">
              Submit Donation
            </button>
          </form>
        </div>
      </section>

      {/* Volunteer section — merges "Our Approach to Volunteering" with actual role listings */}
      <section id="volunteer" className="bg-muted px-4 py-16 scroll-mt-24">
        <div className="mx-auto max-w-4xl">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Volunteer With Us</h2>
            <p className="mt-2 text-muted-foreground">
              Join our community and help us make a difference.
            </p>
          </header>

          {/* Approach to volunteering — intro text merged into this section */}
          <div className="mb-10 max-w-3xl mx-auto rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold text-card-foreground">Our Approach to Volunteering</h3>
            <p className="mt-3 text-foreground/90 leading-relaxed">
              Placeholder text describing our approach to volunteering. We believe volunteering
              should be a rewarding, flexible, and inclusive experience. Whether you can give a few
              hours or a regular commitment, we'll find a way for you to contribute that works with
              your life, not against it.
            </p>
            <p className="mt-3 text-foreground/90 leading-relaxed">
              Placeholder text about training and support. We provide training, mentorship, and a
              welcoming environment where volunteers are valued as part of the team. Your skills,
              experience, and perspective matter to us.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {[
                { title: "Flexible Commitment", desc: "Volunteer on your terms, around your schedule." },
                { title: "Full Support", desc: "Training, guidance, and a friendly team behind you." },
                { title: "Real Impact", desc: "Your time directly helps the disability community." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-navy p-6 text-center">
                  <h3 className="text-base font-bold text-gold">{item.title}</h3>
                  <p className="mt-2 text-sm text-cream/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer role listings */}
          <div className="space-y-6">
            {VOLUNTEER_ROLES.map((role, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground">{role.title}</h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <span className="inline-block rounded-full bg-gold/30 px-3 py-0.5 text-xs font-bold text-foreground">
                        {role.type}
                      </span>
                      <span className="inline-block rounded-full bg-navy-light/30 px-3 py-0.5 text-xs font-medium text-foreground">
                        {role.commitment}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{role.desc}</p>
                {/* TODO: wire up application flow */}
                <button className="btn-secondary mt-4">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Login forms for members and professionals */}
      <section id="members" className="bg-background px-4 py-16 scroll-mt-24">
        <div className="mx-auto grid gap-8 max-w-5xl md:grid-cols-2">
          {/* Member login */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold text-card-foreground text-center">Member Log In</h2>
            <p className="mt-2 text-sm text-muted-foreground text-center">
              Placeholder. Access exclusive content and community features.
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
              <button type="submit" className="btn-primary btn-block">
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
              <button type="submit" className="btn-secondary btn-block">
                Log In
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}