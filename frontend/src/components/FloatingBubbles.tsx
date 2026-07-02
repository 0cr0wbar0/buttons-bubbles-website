// Decorative bubbles animated with CSS — no JS animation libraries needed.
// Generated once outside the component so they don't regenerate on re-renders.

interface Bubble {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  hue: "gold" | "navy" | "orange";
}

const BUBBLE_COLORS: Record<Bubble["hue"], string> = {
  gold: "rgba(255,222,90,0.15)",
  navy: "rgba(25,48,84,0.10)",
  orange: "rgba(253,170,60,0.12)",
};

const BUBBLES: Bubble[] = Array.from({ length: 18 }, (_, i) => {
  const size = 20 + (i % 7) * 10;
  return {
    id: i,
    left: (i * 53 + 11) % 100,
    size,
    duration: 14 + (i % 4) * 5,
    delay: -((i * 1.7) % 20),
    hue: (["gold", "navy", "orange"] as const)[i % 3],
  };
});

export function FloatingBubbles() {
  return (
    <div
      data-bubbles
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-soft-light"
      aria-hidden="true"
    >
      {BUBBLES.map((b) => (
        <span
          key={b.id}
          className="bubble absolute rounded-full"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.55), ${BUBBLE_COLORS[b.hue]} 55%, rgba(255,255,255,0.05) 100%)`,
            boxShadow: `inset 0 0 ${b.size * 0.2}px rgba(255,255,255,0.3)`,
            animation: `bubbleRise ${b.duration}s ease-in-out ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
