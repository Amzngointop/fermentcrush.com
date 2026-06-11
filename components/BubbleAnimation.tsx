export default function BubbleAnimation() {
  const bubbles = [
    { cx: "8%", r: 5, opacity: 0.08, delay: 0, duration: 12 },
    { cx: "15%", r: 8, opacity: 0.06, delay: 2, duration: 15 },
    { cx: "22%", r: 4, opacity: 0.1, delay: 5, duration: 10 },
    { cx: "30%", r: 10, opacity: 0.07, delay: 1, duration: 18 },
    { cx: "38%", r: 6, opacity: 0.09, delay: 7, duration: 13 },
    { cx: "45%", r: 12, opacity: 0.05, delay: 3, duration: 16 },
    { cx: "52%", r: 5, opacity: 0.11, delay: 9, duration: 11 },
    { cx: "60%", r: 9, opacity: 0.06, delay: 4, duration: 14 },
    { cx: "68%", r: 7, opacity: 0.08, delay: 6, duration: 17 },
    { cx: "75%", r: 4, opacity: 0.12, delay: 1, duration: 9 },
    { cx: "82%", r: 11, opacity: 0.07, delay: 8, duration: 15 },
    { cx: "88%", r: 6, opacity: 0.09, delay: 2, duration: 12 },
    { cx: "93%", r: 8, opacity: 0.06, delay: 10, duration: 16 },
    { cx: "97%", r: 5, opacity: 0.1, delay: 5, duration: 13 },
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", bottom: 0, left: 0 }}
        aria-hidden="true"
      >
        {bubbles.map((b, i) => (
          <circle
            key={i}
            cx={b.cx}
            cy="110%"
            r={b.r}
            fill="#2D5016"
            opacity={b.opacity}
            style={{
              animation: `bubbleRise ${b.duration}s ${b.delay}s infinite ease-in`,
            }}
          />
        ))}
      </svg>
      <style>{`
        @keyframes bubbleRise {
          0% { transform: translateY(0) translateX(0); opacity: var(--op); }
          25% { transform: translateY(-25vh) translateX(8px); }
          50% { transform: translateY(-50vh) translateX(-6px); }
          75% { transform: translateY(-75vh) translateX(10px); }
          100% { transform: translateY(-120vh) translateX(-4px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
