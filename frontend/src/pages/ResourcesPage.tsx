// Resources page — free downloads, advocacy documents, sensory guides, animations, videos, and news.

import { PageHero } from "@/components/PageHero";

const DOWNLOADS = [
  { title: "Placeholder Activity Pack 1", type: "Activity Pack", size: "PDF — 5MB" },
  { title: "Placeholder Activity Pack 2", type: "Activity Pack", size: "PDF — 3MB" },
  { title: "Placeholder Colouring Sheet", type: "Printable", size: "PDF — 1MB" },
  { title: "Placeholder Sticker Set", type: "Printable", size: "PDF — 2MB" },
  { title: "Placeholder Story Cards", type: "Activity Pack", size: "PDF — 4MB" },
  { title: "Placeholder Worksheet 1", type: "Printable", size: "PDF — 1MB" },
  { title: "Placeholder Worksheet 2", type: "Printable", size: "PDF — 1MB" },
];

const ADVOCACY = [
  {
    title: "Placeholder Advocacy Guide",
    description: "Guide to understanding your rights and entitlements.",
    size: "PDF — 3MB",
  },
  {
    title: "Placeholder Policy Brief",
    description: "Summary of current policy affecting disabled children.",
    size: "PDF — 2MB",
  },
  {
    title: "Placeholder Template Letter",
    description: "Template for requesting an Education Health & Care Plan assessment.",
    size: "DOCX — 1MB",
  },
  {
    title: "Placeholder Advocacy Factsheet",
    description: "Quick reference factsheet for parents and carers.",
    size: "PDF — 500KB",
  },
];

const SENSORY_GUIDES = [
  {
    title: "Placeholder Sensory Guide — Bubble World",
    description:
      "What to expect during a Bubble World session, including sensory triggers and quiet spaces.",
    size: "PDF — 2MB",
  },
  {
    title: "Placeholder Sensory Guide — Community Events",
    description: "Guide for our larger community events with sensory maps and quiet zones.",
    size: "PDF — 3MB",
  },
  {
    title: "Placeholder Sensory Guide — Online Sessions",
    description: "Tips for preparing your child for online/virtual sessions.",
    size: "PDF — 1MB",
  },
  {
    title: "Placeholder Social Story — First Visit",
    description: "A visual social story to help children prepare for their first visit.",
    size: "PDF — 4MB",
  },
];

const ANIMATIONS = [
  {
    title: "Placeholder Animation — Breathing Exercise",
    description: "A calming guided breathing animation for children.",
    format: "MP4 — 15MB",
  },
  {
    title: "Placeholder Animation — Sensory Break",
    description: "Gentle visuals and sounds for a sensory reset.",
    format: "MP4 — 20MB",
  },
  {
    title: "Placeholder Animation — Story Time",
    description: "An animated short story read aloud.",
    format: "MP4 — 25MB",
  },
  {
    title: "Placeholder Animation — Movement Break",
    description: "Follow-along movement and dance animation.",
    format: "MP4 — 18MB",
  },
];

const NEWS_FEATURES = [
  {
    title: "Beyond the Bubble",
    subtitle: "Current news feature",
    description:
      "Placeholder for the latest news feature highlighting current events, updates and stories from the community.",
    linkLabel: "Find out more →",
  },
  {
    title: "The Bubble Blog",
    subtitle: "Our blog",
    description:
      "Placeholder for The Bubble Blog — regular posts, insights and stories from the Buttons & Bubbles team.",
    linkLabel: "Read the blog →",
  },
  {
    title: "Buttons & Bulletins",
    subtitle: "Our newsletter",
    description:
      "Placeholder for our newsletter sign-up and latest editions. Stay up to date with everything happening at Buttons & Bubbles.",
    linkLabel: "Subscribe →",
  },
];

const POSTS = [
  {
    title: "Placeholder Blog Post Title 1",
    date: "1 January 2026",
    excerpt:
      "Placeholder excerpt for the first blog post. This would contain a brief overview of the article content.",
  },
  {
    title: "Placeholder Blog Post Title 2",
    date: "15 December 2025",
    excerpt:
      "Placeholder excerpt for the second blog post. More details about community activities and updates.",
  },
  {
    title: "Placeholder Blog Post Title 3",
    date: "1 December 2025",
    excerpt: "Placeholder excerpt for the third blog post. Stories and insights from our work.",
  },
];

const STATS = [
  { num: "000+", label: "Children Reached" },
  { num: "000+", label: "Resources Downloaded" },
  { num: "000+", label: "Events Held" },
];

function DownloadCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-md">
      <div>
        <h3 className="font-bold text-card-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <button className="btn-primary btn-sm shrink-0" aria-label={`Download ${title}`}>
        Download
      </button>
    </div>
  );
}

function itemSubtitle(item: {
  type?: string;
  size?: string;
  format?: string;
  description?: string;
}) {
  const meta = [item.type, item.size ?? item.format].filter(Boolean).join(" — ");
  return item.description ?? meta;
}

function DownloadSection({
  id,
  title,
  description,
  items,
  bgMuted = false,
}: {
  id: string;
  title: string;
  description: string;
  items: { title: string; size?: string; format?: string; description?: string; type?: string }[];
  bgMuted?: boolean;
}) {
  return (
    <section
      id={id}
      className={`px-4 py-16 scroll-mt-24 ${bgMuted ? "bg-muted" : "bg-background"}`}
    >
      <div className="mx-auto max-w-4xl">
        <header className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </header>
        <div className="space-y-4">
          {items.map((item, i) => (
            <DownloadCard key={i} title={item.title} subtitle={itemSubtitle(item)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ index }: { index: number }) {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="aspect-video bg-navy flex items-center justify-center">
        <span className="text-4xl text-gold" aria-hidden="true">
          ▶
        </span>
        <span className="sr-only">Placeholder video {index}</span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-card-foreground">Placeholder Video Title {index}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Placeholder description of this video content.
        </p>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <div className="relative z-10">
      <PageHero
        title="Resources"
        subtitle="Free downloads, videos, advocacy documents, sensory guides, animations and latest news."
      />

      <DownloadSection
        id="downloads"
        title="Free Downloads"
        description="Activity packs and one-off printables for children and families."
        items={DOWNLOADS}
      />
      <DownloadSection
        id="advocacy"
        title="Advocacy Documents"
        description="Guides, policy briefs and template letters to support your advocacy work."
        items={ADVOCACY}
        bgMuted
      />
      <DownloadSection
        id="sensory-guides"
        title="Sensory Guides for Events"
        description="Download sensory guides and social stories to help prepare for our events and sessions."
        items={SENSORY_GUIDES}
      />
      <DownloadSection
        id="animations"
        title="Downloadable Animations"
        description="Breathing exercises, sensory breaks, story time and movement animations."
        items={ANIMATIONS}
        bgMuted
      />

      <section id="videos" className="bg-background px-4 py-16 scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Videos & Impact</h2>
            <p className="mt-2 text-muted-foreground">Watch our work and see the impact.</p>
          </header>
          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <VideoCard key={i} index={i} />
            ))}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3 text-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-navy p-6">
                <p className="text-3xl font-extrabold text-gold">{stat.num}</p>
                <p className="mt-1 text-sm text-cream">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="bg-muted px-4 py-16 scroll-mt-24">
        <div className="mx-auto max-w-4xl">
          <header className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground">Bubble World News HQ</h2>
            <p className="mt-2 text-muted-foreground">
              Stay connected with the latest from Buttons & Bubbles — news, stories and updates from
              across our community.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-3 mb-10">
            {NEWS_FEATURES.map((feature, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md"
              >
                <p className="text-xs font-medium text-orange">{feature.subtitle}</p>
                <h3 className="mt-1 text-lg font-bold text-card-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                <span className="mt-3 inline-block text-sm font-bold text-foreground hover:text-gold transition-colors cursor-pointer">
                  {feature.linkLabel}
                </span>
              </div>
            ))}
          </div>

          <h3 className="mb-4 text-xl font-bold text-foreground">Recent Posts</h3>
          <div className="space-y-6">
            {POSTS.map((post, i) => (
              <article
                key={i}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md"
              >
                <time className="text-xs font-medium text-orange">{post.date}</time>
                <h3 className="mt-2 text-xl font-bold text-card-foreground">{post.title}</h3>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-bold text-foreground hover:text-gold transition-colors cursor-pointer">
                  Read more →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
