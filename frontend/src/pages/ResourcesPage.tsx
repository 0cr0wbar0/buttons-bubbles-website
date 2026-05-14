// Resources page — free downloads, videos/impact stats, and latest blog posts.
// Downloads are placeholder buttons (not wired up yet).
// Videos are placeholder cards with a play icon overlay.
// TODO: replace placeholder data with real content when available.

import { PageHero } from "@/components/PageHero";

// TODO: replace with actual downloadable resources
const DOWNLOADS = [
  { title: "Placeholder Activity Pack 1", type: "Activity Pack", size: "PDF — 5MB" },
  { title: "Placeholder Activity Pack 2", type: "Activity Pack", size: "PDF — 3MB" },
  { title: "Placeholder Colouring Sheet", type: "Resource", size: "PDF — 1MB" },
  { title: "Placeholder Sticker Set", type: "Resource", size: "PDF — 2MB" },
  { title: "Placeholder Story Cards", type: "Activity Pack", size: "PDF — 4MB" },
  { title: "Placeholder Sensory Guide", type: "Guide", size: "PDF — 2MB" },
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

export default function ResourcesPage() {
  return (
    <div className="relative z-10">
      <PageHero
        title="Resources"
        subtitle="Placeholder subtitle. Browse our downloads, videos and latest news."
      />

      {/* Downloads section */}
      <section id="downloads" className="bg-background px-4 py-16 scroll-mt-24">
        <div className="mx-auto max-w-4xl">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Free Downloads</h2>
            <p className="mt-2 text-muted-foreground">Activity packs, guides and printables.</p>
          </header>
          <div className="space-y-4">
            {DOWNLOADS.map((r, i) => (
              <div
                key={i}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-md"
              >
                <div>
                  <h3 className="font-bold text-card-foreground">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {r.type} — {r.size}
                  </p>
                </div>
                {/* TODO: wire up actual download links */}
                <button
                  className="shrink-0 rounded-xl bg-gold px-5 py-2 text-sm font-bold text-navy hover:bg-gold-light transition-colors"
                  aria-label={`Download ${r.title}`}
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos and impact stats */}
      <section id="videos" className="bg-muted px-4 py-16 scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Videos & Impact</h2>
            <p className="mt-2 text-muted-foreground">Watch our work and see the impact.</p>
          </header>
          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
                {/* TODO: replace with actual video embeds (YouTube/Vimeo) */}
                <div className="aspect-video bg-navy flex items-center justify-center">
                  <span className="text-4xl text-gold" aria-hidden="true">
                    ▶
                  </span>
                  <span className="sr-only">Placeholder video {i}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-card-foreground">Placeholder Video Title {i}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Placeholder description of this video content.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Impact stats bar */}
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

      {/* Latest news / blog */}
      <section id="blog" className="bg-background px-4 py-16 scroll-mt-24">
        <div className="mx-auto max-w-4xl">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Latest News</h2>
            <p className="mt-2 text-muted-foreground">Stories and updates from the community.</p>
          </header>
          <div className="space-y-6">
            {POSTS.map((post, i) => (
              <article
                key={i}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md"
              >
                <time className="text-xs font-medium text-orange">{post.date}</time>
                <h3 className="mt-2 text-xl font-bold text-card-foreground">{post.title}</h3>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                {/* TODO: link to full blog post when we have one */}
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
