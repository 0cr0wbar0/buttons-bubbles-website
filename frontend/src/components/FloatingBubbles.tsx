// Floating decorative bubbles that drift up in the background.
// Pure CSS animation — no JS animation libraries needed.
// The bubbles are generated once (not re-rendered) and sit behind everything.
//
// Each bubble has a randomised position, size, speed and colour hue.
// The colour palette matches the brand: gold, navy, orange.

interface Bubble {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  hue: "gold" | "navy" | "orange";
}

// Generate 18 bubbles with varied properties so they don't all move in sync.
// The maths here is deterministic so the pattern is consistent across renders.
const BUBBLES: Bubble[] = Array.from({ length: 18 }, (_, i) => {
  const size = 20 + (i % 7) * 10;
  return {
    id: i,
    left: (i * 53 + 11) % 100, // Spread across the width
    size,
    duration: 14 + (i % 4) * 5, // Different speeds so they look organic
    delay: -((i * 1.7) % 20), // Staggered start so they're not all synced
    hue: (["gold", "navy", "orange"] as const)[i % 3],
  };
});

export function FloatingBubbles() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[20] overflow-hidden mix-blend-soft-light"
      aria-hidden="true" // Decorative only — screen readers don't need to know about bubbles
    >
      {BUBBLES.map((b) => {
        const colorMap = {
          gold: "rgba(254,221,90,0.15)",
          navy: "rgba(25,48,84,0.10)",
          orange: "rgba(253,170,60,0.12)",
        };
        return (
          <span
            key={b.id}
            className="bubble absolute rounded-full"
            style={{
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
              // Subtle gradient to give a 3D glassy look
              background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.55), ${colorMap[b.hue]} 55%, rgba(255,255,255,0.05) 100%)`,
              boxShadow: `inset 0 0 ${b.size * 0.2}px rgba(255,255,255,0.3)`,
              animation: `bubbleRise ${b.duration}s ease-in-out ${b.delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
