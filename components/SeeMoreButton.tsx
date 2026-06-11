"use client";

export default function SeeMoreButton() {
  return (
    <button
      onClick={() => {
        const el = document.getElementById("top-rated");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      style={{
        display: "block",
        width: "100%",
        backgroundColor: "#D0021B",
        color: "#ffffff",
        fontFamily: "var(--font-lato)",
        fontWeight: 600,
        fontSize: "13px",
        letterSpacing: "0.06em",
        padding: "10px 16px",
        border: "none",
        cursor: "pointer",
        textAlign: "center",
        boxShadow: "3px 3px 0px #8B0000",
        transition: "all 80ms ease",
        marginTop: "16px",
      }}
      onMouseEnter={(e) => {
        const t = e.currentTarget;
        t.style.boxShadow = "4px 4px 0px #8B0000";
        t.style.transform = "translate(-1px, -1px)";
      }}
      onMouseLeave={(e) => {
        const t = e.currentTarget;
        t.style.boxShadow = "3px 3px 0px #8B0000";
        t.style.transform = "translate(0, 0)";
      }}
      onMouseDown={(e) => {
        const t = e.currentTarget;
        t.style.boxShadow = "1px 1px 0px #8B0000";
        t.style.transform = "translate(2px, 2px)";
      }}
      onMouseUp={(e) => {
        const t = e.currentTarget;
        t.style.boxShadow = "4px 4px 0px #8B0000";
        t.style.transform = "translate(-1px, -1px)";
      }}
    >
      See More Top Picks
    </button>
  );
}
