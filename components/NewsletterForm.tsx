"use client";

export default function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: "0", maxWidth: "420px" }}>
      <input
        type="email"
        placeholder="your@email.com"
        style={{ flex: 1, padding: "12px 16px", border: "1px dashed #d4d4d4", backgroundColor: "#ffffff", color: "#1A1A1A", fontFamily: "var(--font-lato)", fontSize: "14px", outline: "none", minWidth: 0 }}
      />
      <button
        type="submit"
        style={{ backgroundColor: "#D0021B", color: "#ffffff", fontFamily: "var(--font-lato)", fontWeight: 700, fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 24px", border: "none", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0, boxShadow: "3px 3px 0px #8B0000" }}
      >
        Subscribe
      </button>
    </form>
  );
}
