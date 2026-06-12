// Services page — lists all our offerings with Bubble World intro, service cards,
// and the communities we support. Clicking a service card scrolls you to its details
// and briefly highlights it with a gold ring so you know where you landed.

import { Link } from "react-router-dom";

import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ServiceCard, SimpleServiceCard } from "@/components/ServiceCard";
import { services, supportGroups } from "@/data/services";

export default function ServicesPage() {
  // Click handler for the compact service cards at the top.
  // Scrolls to the matching detail card and flashes a highlight ring.
  const handleServiceClick = (serviceTitle: string) => {
    const serviceId = `service-${serviceTitle.toLowerCase().replace(/\s+/g, "-")}`;
    const element = document.getElementById(serviceId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      // Brief gold highlight so the user can see which card they selected
      element.classList.add("ring-4", "ring-gold", "ring-opacity-50");
      setTimeout(() => {
        element.classList.remove("ring-4", "ring-gold", "ring-opacity-50");
      }, 2000);
    }
  };

  return (
    <div className="relative z-10">
      <PageHero
        title="Our Services"
        subtitle="Placeholder text explaining our comprehensive range of inclusive services, workshops, activity packs, community events, and accessibility support offerings."
      />

      <Section
        id="bubble-world"
        title="Welcome to Bubble World"
        subtitle="Placeholder text about our Bubble World concept and universe."
        background="background"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="mt-4 text-foreground/90 leading-relaxed">
            Bubble World is our "automatically accessible" universe where barriers simply don't
            exist. It's the imaginative heart of everything we do, home to our bespoke characters
            and designed so everyone belongs by default, not as an afterthought.
          </p>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            Best of all, it's not just our world, it's yours. You can create your own characters and
            build your own stories, shaping it in your own way.
          </p>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            You'll see it brought to life through our workshops, activity packs and events, creating
            a space where the focus is on the fun, not the logistics.
          </p>

          {/* Quick-pick grid of all services — click to jump to details */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <SimpleServiceCard
                key={service.title}
                service={service}
                onClick={() => handleServiceClick(service.title)}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="offerings"
        title="Our Offerings"
        subtitle="Placeholder text explaining our comprehensive range of inclusive services."
        background="muted"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
              id={`service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            />
          ))}
        </div>
      </Section>

      <Section
        id="support-groups"
        title="Who We Support"
        subtitle="Placeholder text about the communities we support and work with."
        background="background"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supportGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-card-foreground">{group.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{group.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/get-involved#booking" className="btn-primary">
            Book a Service
          </a>
        </div>
      </Section>
    </div>
  );
}
