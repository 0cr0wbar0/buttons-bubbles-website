// Home page — the landing page for Buttons & Bubbles CIC.
// Shows a hero section, welcome message, services overview, values, and a CTA.
// Most of the copy is placeholder until the client provides final text.

import { Link } from "react-router-dom";

import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

// TODO: replace placeholder content with real copy from the client
const SERVICE_CARDS = [
  {
    title: "Workshops",
    desc: "Tailored activities and games designed specifically for your group, whether you're a school, charity, or community organization.",
    icon: "🎨",
  },
  {
    title: "Activity Packs",
    desc: "Free downloadable themed packs you can access from anywhere, perfect for home or hospital use.",
    icon: "📦",
  },
  {
    title: "Community Events",
    desc: "Inclusive drop-in experiences where you can join in without pressure or rigid schedules.",
    icon: "🎉",
  },
  {
    title: "Sensory Trail",
    desc: "Multi-sensory guided experiences designed to be explored at your own pace.",
    icon: "🌿",
  },
  {
    title: "Inclusion Consultancy",
    desc: "Helping organizations create genuinely inclusive spaces with practical, real-world solutions.",
    icon: "💼",
  },
  {
    title: "Accessibility Training",
    desc: "Practical training focused on real-life situations and day-to-day confidence building.",
    icon: "📚",
  },
];

const VALUES = [
  { title: "Inclusion", desc: "Placeholder description of the inclusion value." },
  { title: "Representation", desc: "Placeholder description of the representation value." },
  { title: "Belonging", desc: "Placeholder description of the belonging value." },
  { title: "Kindness", desc: "Placeholder description of the kindness value." },
];

export default function HomePage() {
  return (
    <div className="relative z-10">
      <PageHero
        title="Representation Through Imagination & Play"
        subtitle="Placeholder text describing the mission. We are on a mission to increase representation and inclusion around disability for everybody."
      >
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/services" className="btn-primary">
            Explore Our Services
          </Link>
          <Link to="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </div>
      </PageHero>

      <Section
        id="welcome"
        title="Welcome to Buttons & Bubbles"
        subtitle="Placeholder text about our mission and approach to inclusive play and representation."
        background="muted"
      >
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mt-4 text-foreground/90 leading-relaxed">
              Placeholder introduction text. We are a Community Interest Company dedicated to
              creating inclusive, imaginative experiences for the disability community.
            </p>
            <p className="mt-3 text-foreground/90 leading-relaxed">
              Placeholder text about how we bring representation and inclusion to life through
              creative play, workshops, resources and community events.
            </p>
            <Link to="/about" className="btn-secondary mt-6">
              Learn Our Story
            </Link>
          </div>
          {/* TODO: replace placeholder illustration with actual character art */}
          <div className="flex justify-center">
            <div className="flex h-[400px] w-full max-w-xl items-center justify-center rounded-2xl border border-dashed border-border bg-muted p-6 text-center text-muted-foreground shadow-lg">
              <span>Placeholder illustration</span>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="services"
        title="What We Offer"
        subtitle="Placeholder overview of our services and how we support the community."
        background="background"
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((svc) => (
            <div
              key={svc.title}
              className="rounded-2xl border border-border bg-card p-6 text-left transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <span className="text-3xl" aria-hidden="true">
                {svc.icon}
              </span>
              <h3 className="mt-3 text-lg font-bold text-card-foreground">{svc.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </Section>

      <Section id="values" title="Our Values" background="navy">
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl bg-navy-light p-6 text-center">
              <h3 className="text-xl font-bold text-gold">{v.title}</h3>
              <p className="mt-2 text-sm text-cream/80">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="cta"
        title="Ready to Get Involved?"
        subtitle="Placeholder call to action text encouraging engagement with our services and community."
        background="gold"
      >
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/get-involved" className="btn-secondary">
            Book a Session
          </Link>
          <Link to="/get-involved#donate" className="btn-secondary">
            Donate
          </Link>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </Section>
    </div>
  );
}
