// About page — mission, approach to disability, values, goals, team, board, and accreditations.

import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

const values = [
  { title: "Dignity", desc: "Placeholder text about treating everyone with dignity and respect." },
  { title: "Inclusion", desc: "Placeholder text about ensuring everyone can participate fully." },
  { title: "Compassion & Kindness", desc: "Placeholder text about acting with compassion in all interactions." },
  { title: "Individuality & Innovation", desc: "Placeholder text about celebrating uniqueness and creative approaches." },
];

const goals = [
  "Placeholder goal: Provide free resource packs to every children's hospice and hospital ward.",
  "Placeholder goal: Establish work scheme for young people and adults with disabilities.",
  "Placeholder goal: Expand Bubble World into schools across the country.",
  "Placeholder goal: Create accessible training for 500 organisations.",
];

const teamMembers = [
  { name: "Placeholder Name", role: "Placeholder", bio: "Placeholder biography text about this team member's background, experience, and what they bring to Buttons & Bubbles." },
  { name: "Placeholder Name", role: "Placeholder", bio: "Placeholder biography text about this team member's background, experience, and what they bring to Buttons & Bubbles." },
  { name: "Placeholder Name", role: "Placeholder", bio: "Placeholder biography text about this team member's background, experience, and what they bring to Buttons & Bubbles." },
  { name: "Placeholder Name", role: "Placeholder", bio: "Placeholder biography text about this team member's background, experience, and what they bring to Buttons & Bubbles." },
];

const boardMembers = [
  { name: "Placeholder Name", role: "Placeholder", bio: "Placeholder biography text about this board member's background, expertise, and guidance they provide." },
  { name: "Placeholder Name", role: "Placeholder", bio: "Placeholder biography text about this board member's background, expertise, and guidance they provide." },
  { name: "Placeholder Name", role: "Placeholder", bio: "Placeholder biography text about this board member's background, expertise, and guidance they provide." },
];

function PersonCard({ person }: { person: { name: string; role: string; bio: string } }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-navy">
        <span className="text-3xl font-bold text-gold" aria-hidden="true">{person.name.charAt(0)}</span>
      </div>
      <h3 className="text-center text-lg font-bold text-card-foreground">{person.name}</h3>
      <p className="text-center text-sm font-bold text-foreground">{person.role}</p>
      <p className="mt-3 text-left text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="relative z-10">
      <PageHero title="About Us" subtitle="Placeholder subtitle about our story, mission and values." />

      <Section id="mission" title="Mission & Ethos" subtitle="Placeholder text about our mission and ethos, why we exist and what drives us." background="background">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-bold text-card-foreground">Our Mission</h3>
            <p className="mt-2 text-sm text-muted-foreground">Placeholder text about the mission. We are on a mission to increase representation and inclusion around disability for everybody.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-bold text-card-foreground">Our Story</h3>
            <p className="mt-2 text-sm text-muted-foreground">Placeholder text about the founding story, the inspiration behind Buttons & Bubbles, and the journey so far.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-bold text-card-foreground">Our Ethos</h3>
            <p className="mt-2 text-sm text-muted-foreground">Placeholder text describing the ethos. Every bubble blown is unique. We believe in celebrating difference and ensuring everyone feels they belong.</p>
          </div>
        </div>
      </Section>

      <Section id="approach-to-disability" title="Our Approach and Perspective to Disability" subtitle="Placeholder text about how we think about disability, inclusion, and representation." background="muted">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-bold text-card-foreground">Our Perspective</h3>
            <p className="mt-2 text-sm text-muted-foreground">Placeholder text about our perspective on disability — viewing it as a natural part of human diversity, not a deficit. We focus on removing barriers rather than "fixing" people.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-bold text-card-foreground">Our Approach</h3>
            <p className="mt-2 text-sm text-muted-foreground">Placeholder text about our hands-on, participatory approach. We co-create with the disability community, ensuring everything we do is shaped by the people it's for.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: "Co-Creation", desc: "Placeholder. We work alongside the community, not at arm's length." },
              { title: "Barrier Removal", desc: "Placeholder. We identify and remove barriers before they become obstacles." },
              { title: "Celebrating Difference", desc: "Placeholder. We believe difference is something to be celebrated, not accommodated." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-navy p-6 text-center shadow-sm">
                <h3 className="text-base font-bold text-gold">{item.title}</h3>
                <p className="mt-2 text-sm text-cream/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="values" title="Our Values" subtitle="Placeholder text about our core values and principles that guide everything we do." background="background">
        <div className="mx-auto max-w-3xl space-y-6">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-bold text-card-foreground">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="goals" title="Our Goals" subtitle="Placeholder text about our goals and what we are working towards." background="muted">
        <div className="mx-auto max-w-3xl space-y-6">
          {goals.map((goal, index) => (
            <div key={goal} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-lg font-bold text-navy">{index + 1}</span>
              <p className="text-sm text-card-foreground">{goal}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="meet-our-team" title="Meet Our Team" subtitle="Placeholder text about the people behind Buttons & Bubbles." background="background">
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((person) => <PersonCard key={person.name} person={person} />)}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Interested in joining the team?{" "}
          <Link to="/get-involved#volunteer" className="font-bold text-foreground transition-colors hover:text-gold">View our opportunities</Link>
        </p>
      </Section>

      <Section id="meet-our-board" title="Meet Our Board" subtitle="Placeholder text about the individuals providing strategic guidance and governance." background="muted">
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((person) => <PersonCard key={person.name} person={person} />)}
        </div>
      </Section>

      <Section id="disability-confident" title="Our Accreditations" subtitle="Placeholder text about the accreditations and schemes we are proud to be part of." background="background">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-center text-lg font-bold text-card-foreground">Disability Confident Scheme</h3>
            <p className="mt-2 text-center text-sm text-muted-foreground">Placeholder text explaining our commitment to the Disability Confident scheme, and what this means for our team, our partners, and the community we serve.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-navy p-4">
                <span className="text-center text-xs font-bold leading-tight text-gold">Disability<br />Confident<br />Logo</span>
              </div>
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-navy p-4">
                <span className="text-center text-xs font-bold leading-tight text-gold">Placeholder<br />Accreditation</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}