// Services page — Bubble World intro, character cards, full service listings, and who we support.
// Clicking a compact service card scrolls to the matching detail card with a brief highlight.

import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ServiceCard, SimpleServiceCard } from "@/components/ServiceCard";
import { services, supportGroups } from "@/data/services";
import { characters, characterSlug } from "@/data/characters";

function CharacterCard({ character }: { character: (typeof characters)[number] }) {
  return (
    <Link
      to={`/services/character/${characterSlug(character.name)}`}
      className="block rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1"
    >
      <div className="mx-auto h-32 w-32 rounded-full overflow-hidden border border-border bg-black">
        <video
          src={character.video}
          muted
          loop
          playsInline
          className="h-full w-full object-contain"
          onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
          onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
        />
      </div>
      <h3 className="mt-4 text-lg font-bold text-card-foreground">{character.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{character.desc}</p>
    </Link>
  );
}

export default function ServicesPage() {
  // Scrolls to the matching service card and flashes a gold highlight ring
  const handleServiceClick = (serviceTitle: string) => {
    const serviceId = `service-${serviceTitle.toLowerCase().replace(/\s+/g, "-")}`;
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("ring-4", "ring-gold", "ring-opacity-50");
      setTimeout(() => element.classList.remove("ring-4", "ring-gold", "ring-opacity-50"), 2000);
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
            exist. It's the imaginative heart of everything we do. Home to our bespoke characters.
            Designed so everyone belongs by default, not as an afterthought.
          </p>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            Best of all, it's not just our world, it's yours. You can create your own characters and
            build your own stories, shaping it in your own way.
          </p>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            You'll see it brought to life through our workshops, activity packs and events. Creating
            a space where the focus is on the fun, not the logistics.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <SimpleServiceCard
                key={service.title}
                service={service}
                onClick={() => handleServiceClick(service.title)}
              />
            ))}
          </div>

          <div className="mt-16" id="meet-the-characters">
            <h3 className="text-2xl font-bold text-foreground">Meet the Characters</h3>
            <p className="mt-2 text-muted-foreground">
              The heart of Bubble World — each character is unique, just like every bubble.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {characters.map((c) => (
                <CharacterCard key={c.name} character={c} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="offerings"
        title="Explore our services"
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
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in any of our services? Get in touch to find out more or book a session.
          </p>
          <a href="/get-involved#booking" className="btn-primary">
            Book a Service
          </a>
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
          <p className="text-muted-foreground mb-4">
            Want to work with us? Get in touch to discuss how we can support your community.
          </p>
          <a href="/get-involved#booking" className="btn-primary">
            Book a Service
          </a>
        </div>
      </Section>
    </div>
  );
}
