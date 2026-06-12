// About page — mission, story, values, approach to disability, team, board, goals,
// characters, and accreditation.
// Characters are displayed as cards with their concept art images.
// TODO: replace placeholder descriptions with real copy once the client provides it.

import { Link } from "react-router-dom";
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

// TODO: replace with actual team member data
const TEAM_MEMBERS = [
  {
    name: "Placeholder Name",
    role: "Placeholder",
    bio: "Placeholder biography text about this team member's background, experience, and what they bring to Buttons & Bubbles.",
  },
  {
    name: "Placeholder Name",
    role: "Placeholder",
    bio: "Placeholder biography text about this team member's background, experience, and what they bring to Buttons & Bubbles.",
  },
  {
    name: "Placeholder Name",
    role: "Placeholder",
    bio: "Placeholder biography text about this team member's background, experience, and what they bring to Buttons & Bubbles.",
  },
  {
    name: "Placeholder Name",
    role: "Placeholder",
    bio: "Placeholder biography text about this team member's background, experience, and what they bring to Buttons & Bubbles.",
  },
];

// TODO: replace with actual board member data
const BOARD_MEMBERS = [
  {
    name: "Placeholder Name",
    role: "Placeholder",
    bio: "Placeholder biography text about this board member's background, expertise, and guidance they provide.",
  },
  {
    name: "Placeholder Name",
    role: "Placeholder",
    bio: "Placeholder biography text about this board member's background, expertise, and guidance they provide.",
  },
  {
    name: "Placeholder Name",
    role: "Placeholder",
    bio: "Placeholder biography text about this board member's background, expertise, and guidance they provide.",
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

function PersonCard({
  person,
}: {
  person: { name: string; role: string; bio: string };
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-left transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-navy">
        <span className="text-3xl font-bold text-gold" aria-hidden="true">
          {person.name.charAt(0)}
        </span>
      </div>
      <h3 className="text-lg font-bold text-card-foreground">{person.name}</h3>
      <p className="text-sm font-bold text-foreground">{person.role}</p>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
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
        id="approach-to-disability"
        title="Our Approach and Perspective to Disability"
        subtitle="Placeholder text about how we think about disability, inclusion, and representation."
        background="muted"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold text-foreground">Our Perspective</h3>
            <p className="mt-3 text-foreground/90 leading-relaxed">
              Placeholder text about our perspective on disability — viewing it as a natural part of
              human diversity, not a deficit. We focus on removing barriers rather than "fixing"
              people.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold text-foreground">Our Approach</h3>
            <p className="mt-3 text-foreground/90 leading-relaxed">
              Placeholder text about our hands-on, participatory approach. We co-create with the
              disability community, ensuring everything we do is shaped by the people it's for.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Co-Creation",
                desc: "Placeholder. We work alongside the community, not at arm's length.",
              },
              {
                title: "Barrier Removal",
                desc: "Placeholder. We identify and remove barriers before they become obstacles.",
              },
              {
                title: "Celebrating Difference",
                desc: "Placeholder. We believe difference is something to be celebrated, not accommodated.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-navy p-6 text-center">
                <h3 className="text-base font-bold text-gold">{item.title}</h3>
                <p className="mt-2 text-sm text-cream/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="values"
        title="Our Values"
        subtitle="Placeholder text about our core values and principles that guide everything we do."
        background="background"
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
        background="muted"
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
        id="meet-our-team"
        title="Meet Our Team"
        subtitle="Placeholder text about the people behind Buttons & Bubbles."
        background="background"
      >
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((person, i) => (
            <PersonCard key={i} person={person} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Interested in joining the team?{" "}
          <Link to="/get-involved#volunteer" className="font-bold text-foreground hover:text-gold transition-colors">
            View our opportunities
          </Link>
        </p>
      </Section>

      <Section
        id="meet-our-board"
        title="Meet Our Board"
        subtitle="Placeholder text about the individuals providing strategic guidance and governance."
        background="muted"
      >
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BOARD_MEMBERS.map((person, i) => (
            <PersonCard key={i} person={person} />
          ))}
        </div>
      </Section>

      <Section
        id="characters"
        title="Our Characters"
        subtitle="Placeholder text about the characters of Bubble World and their role in our inclusive universe."
        background="background"
      >
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CHARACTERS.map((c, i) => (
            <CharacterCard key={i} character={c} />
          ))}
        </div>
      </Section>

      <Section
        id="disability-confident"
        title="Our Accreditations"
        subtitle="Placeholder text about the accreditations and schemes we are proud to be part of."
        background="muted"
      >
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold text-foreground">Disability Confident Scheme</h3>
            <p className="mt-3 text-foreground/90 leading-relaxed">
              Placeholder text explaining our commitment to the Disability Confident scheme, and what
              this means for our team, our partners, and the community we serve.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              {/* TODO: replace with actual Disability Confident logo */}
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-navy p-4">
                <span className="text-center text-xs font-bold text-gold leading-tight">
                  Disability<br />Confident<br />Logo
                </span>
              </div>
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-navy p-4">
                <span className="text-center text-xs font-bold text-gold leading-tight">
                  Placeholder<br />Accreditation
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}