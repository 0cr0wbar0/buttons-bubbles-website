// About page — mission, story, values, goals and the Bubble World characters.
// Characters are displayed as cards with their concept art images.
// TODO: replace placeholder descriptions with real copy once the client provides it.

import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

import blossomImg from "../assets/Blossom concept 3.jpeg";
import clementineImg from "../assets/clementine concept 2 - CC.png";
import ralphieImg from "../assets/Ralphie concept 2.jpeg";

const VALUES = [
  { title: "Dignity", desc: "Placeholder text about treating everyone with dignity and respect." },
  { title: "Inclusion", desc: "Placeholder text about ensuring everyone can participate fully." },
  {
    title: "Compassion & Kindness",
    desc: "Placeholder text about acting with compassion in all interactions.",
  },
  {
    title: "Individuality & Innovation",
    desc: "Placeholder text about celebrating uniqueness and creative approaches.",
  },
];

const GOALS = [
  "Placeholder goal: Provide free resource packs to every children's hospice and hospital ward.",
  "Placeholder goal: Establish work scheme for young people and adults with disabilities.",
  "Placeholder goal: Expand Bubble World into schools across the country.",
  "Placeholder goal: Create accessible training for 500 organisations.",
];

// Bubble World characters — each has concept art and a description.
// Images are imported directly so Vite bundles them with hashed filenames.
const CHARACTERS = [
  {
    name: "Blossom",
    desc: "Placeholder description of this character and what they represent.",
    image: blossomImg,
    bg: "rgba(170, 170, 170, 1)",
  },
  {
    name: "Clementine",
    desc: "Placeholder description of this character and what they represent.",
    image: clementineImg,
    bg: "rgba(255, 255, 255, 0)",
  },
  {
    name: "Ralphie",
    desc: "Placeholder description of this character and what they represent.",
    image: ralphieImg,
    bg: "rgba(147, 147, 147, 1)",
  },
  {
    name: "Placeholder Character 4",
    desc: "Placeholder description of this character and what they represent.",
  },
  {
    name: "Placeholder Character 5",
    desc: "Placeholder description of this character and what they represent.",
  },
  {
    name: "Placeholder Character 6",
    desc: "Placeholder description of this character and what they represent.",
  },
];

function CharacterCard({ character }: { character: (typeof CHARACTERS)[number] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1">
      {character.image ? (
        <img
          src={character.image}
          alt={`Illustration of ${character.name}`}
          style={{ backgroundColor: character.bg || "rgba(255, 255, 255, 0)" }}
          className="mx-auto h-32 w-32 rounded-full object-contain border border-border"
        />
      ) : (
        // Fallback placeholder for characters that don't have concept art yet
        <div className="mx-auto h-32 w-32 rounded-full bg-muted border border-border flex items-center justify-center">
          <span className="text-4xl" aria-hidden="true">
            👤
          </span>
        </div>
      )}
      <h3 className="mt-4 text-lg font-bold text-card-foreground">{character.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{character.desc}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="relative z-10">
      <PageHero
        title="About Us"
        subtitle="Placeholder subtitle about our story, mission, values and characters."
      />

      <Section
        id="mission"
        title="Mission & Ethos"
        subtitle="Placeholder text about our mission and ethos, why we exist and what drives us."
        background="background"
      >
        <div className="max-w-3xl space-y-8">
          <div>
            <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
            <p className="mt-2 text-foreground/90 leading-relaxed">
              Placeholder text about the mission. We are on a mission to increase representation and
              inclusion around disability for everybody.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Our Story</h3>
            <p className="mt-2 text-foreground/90 leading-relaxed">
              Placeholder text about the founding story, the inspiration behind Buttons & Bubbles,
              and the journey so far.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Our Ethos</h3>
            <p className="mt-2 text-foreground/90 leading-relaxed">
              Placeholder text describing the ethos. Every bubble blown is unique. We believe in
              celebrating difference and ensuring everyone feels they belong.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="values"
        title="Our Values"
        subtitle="Placeholder text about our core values and principles that guide everything we do."
        background="muted"
      >
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl bg-card p-6 border border-border shadow-sm">
              <h3 className="text-lg font-bold text-card-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="goals"
        title="Our Goals"
        subtitle="Placeholder text about our goals and what we are working towards."
        background="background"
      >
        <div className="max-w-3xl">
          <ul className="mt-8 space-y-4">
            {GOALS.map((g, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl bg-card p-4 border border-border"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
                  {i + 1}
                </span>
                <p className="text-card-foreground">{g}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="characters"
        title="Our Characters"
        subtitle="Placeholder text about the characters of Bubble World and their role in our inclusive universe."
        background="muted"
      >
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CHARACTERS.map((c, i) => (
            <CharacterCard key={i} character={c} />
          ))}
        </div>
      </Section>
    </div>
  );
}
