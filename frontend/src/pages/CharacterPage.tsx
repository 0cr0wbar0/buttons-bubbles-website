// Individual character detail page — shows the character video with header & footer.


import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { getCharacterBySlug } from "@/data/characters";
import { NotFoundPage } from "@/routes/NotFoundPage";
import { FloatingBubbles } from "@/components/FloatingBubbles";

export default function CharacterPage() {
  const { name } = useParams<{ name: string }>();
  const character = name ? getCharacterBySlug(name) : undefined;

  if (!character) {
    return <NotFoundPage />;
  }

  return (
    <div className="relative z-10 flex flex-col min-h-[calc(100vh-4rem)]">
      /* Slim header area — with floating bubbles */
      <div className="relative overflow-hidden bg-navy px-4 py-6 text-center shrink-0">
        <FloatingBubbles />
        <div className="relative z-10">
          <HashLink
            smooth
            to="/services#meet-the-characters"
            className="inline-flex items-center gap-1 text-cream/70 hover:text-cream transition-colors text-sm"
          >
            <span aria-hidden="true">&larr;</span>
            Back to Characters
          </HashLink>
          <h1 className="mt-2 text-2xl font-bold text-cream md:text-3xl">
            {character.name}
          </h1>
          <p className="mt-1 text-sm text-cream/70 max-w-xl mx-auto">
            {character.desc}
          </p>
        </div>
      </div>

      /* Video section — fills remaining space, button at bottom */
      <section className="flex flex-col items-center justify-center bg-black flex-1 px-4 py-6">
        <div className="max-w-lg w-full flex flex-col items-center">
          <video
            src={character.video}
            controls
            autoPlay
            muted
            loop
            className="w-full rounded-lg shadow-xl"
            style={{ maxHeight: "55vh", display: "block" }}
          >
            Your browser does not support the video tag.
          </video>

          <div className="mt-6 text-center">
            <HashLink
              smooth
              to="/services#meet-the-characters"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span aria-hidden="true">&larr;</span>
              Back to Characters
            </HashLink>
          </div>
        </div>
      </section>
    </div>
  );
}