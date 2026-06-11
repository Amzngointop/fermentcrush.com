import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Write to Us — Contact FermentCrush | FermentCrush",
  description: "Contact the FermentCrush editorial team. Send us a message, ask a fermentation question, or share feedback about our guides and reviews.",
};

export default function WriteToUsPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px" }}>
      <span style={{ display: "inline-block", backgroundColor: "#F3EDE3", color: "#8B4513", fontFamily: "var(--font-lato)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 8px", marginBottom: "16px" }}>
        Contact
      </span>
      <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#1A1A1A", marginBottom: "16px" }}>
        Write to Us
      </h1>
      <p style={{ fontFamily: "var(--font-lato)", fontSize: "1rem", color: "#5C5C5C", lineHeight: 1.8, marginBottom: "48px" }}>
        We read every message. Whether you have a fermentation question, feedback on one of our guides, or want to share what&#39;s bubbling in your kitchen — we&#39;d love to hear from you.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
        {/* Contact form */}
        <div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "24px" }}>
            Send a Message
          </h2>
          <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: "6px" }}>
                Your Name
              </label>
              <input type="text" placeholder="Full name" style={{ width: "100%", padding: "10px 14px", border: "1px solid #E0D8CC", backgroundColor: "#FAFAF7", fontFamily: "var(--font-lato)", fontSize: "0.9rem", color: "#1A1A1A", borderRadius: "2px", outline: "none" }} />
            </div>
            <div>
              <label style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: "6px" }}>
                Email Address
              </label>
              <input type="email" placeholder="your@email.com" style={{ width: "100%", padding: "10px 14px", border: "1px solid #E0D8CC", backgroundColor: "#FAFAF7", fontFamily: "var(--font-lato)", fontSize: "0.9rem", color: "#1A1A1A", borderRadius: "2px", outline: "none" }} />
            </div>
            <div>
              <label style={{ display: "block", fontFamily: "var(--font-lato)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: "6px" }}>
                Message
              </label>
              <textarea rows={6} placeholder="What's on your mind?" style={{ width: "100%", padding: "10px 14px", border: "1px solid #E0D8CC", backgroundColor: "#FAFAF7", fontFamily: "var(--font-lato)", fontSize: "0.9rem", color: "#1A1A1A", borderRadius: "2px", outline: "none", resize: "vertical" }} />
            </div>
            <button type="submit" style={{ backgroundColor: "#2D5016", color: "#FAFAF7", fontFamily: "var(--font-lato)", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 24px", border: "none", borderRadius: "2px", cursor: "pointer", boxShadow: "4px 4px 0px #1A3009", alignSelf: "flex-start", transition: "all 80ms ease" }}>
              Send Message →
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "24px" }}>
            Contact Info
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: "6px" }}>Email</p>
              <a href="mailto:info@fermentcrush.com" style={{ fontFamily: "var(--font-lato)", fontSize: "0.9rem", color: "#2D5016", textDecoration: "none" }}>info@fermentcrush.com</a>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: "6px" }}>Mailing Address</p>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.9rem", color: "#1A1A1A", lineHeight: 1.7 }}>
                FermentCrush Editorial<br />
                4821 Cultures Way<br />
                Portland, OR 97201<br />
                United States
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5C5C5C", marginBottom: "6px" }}>Business Hours</p>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.9rem", color: "#1A1A1A", lineHeight: 1.7 }}>
                Monday–Friday, 9 AM–5 PM PT<br />
                Response time: 1–2 business days
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginTop: "40px" }}>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px" }}>
              Common Questions
            </h3>
            {[
              { q: "Do you accept product submissions?", a: "We don't accept unsolicited product samples, sponsored placements, or paid editorial coverage. Our recommendations are based on independent research." },
              { q: "Can I republish your content?", a: "Our editorial content is copyright FermentCrush. Please reach out via email if you'd like to discuss licensing or partnership opportunities." },
              { q: "How do I update my Amazon affiliate tag?", a: "If you're a site operator: the affiliate tag is stored in data/site.ts and referenced throughout products.ts. Update the tag once and it propagates site-wide." },
              { q: "I found an error in one of your guides.", a: "We take accuracy seriously. Please email us with the specific error and source — we'll review and update promptly." },
            ].map((item) => (
              <div key={item.q} style={{ marginBottom: "16px", borderBottom: "1px solid #F3EDE3", paddingBottom: "16px" }}>
                <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.85rem", fontWeight: 600, color: "#1A1A1A", marginBottom: "6px" }}>{item.q}</p>
                <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.82rem", color: "#5C5C5C", lineHeight: 1.6 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
