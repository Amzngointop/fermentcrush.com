import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | FermentCrush",
  description: "FermentCrush affiliate disclosure — how we earn commissions, how this affects our editorial independence, and our commitment to honest recommendations.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.5rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>
        Affiliate Disclosure
      </h1>
      <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.8rem", color: "#5C5C5C", marginBottom: "48px" }}>Last updated: January 2026</p>

      <div style={{ backgroundColor: "#F3EDE3", borderLeft: "3px solid #8B4513", padding: "20px 24px", marginBottom: "48px" }}>
        <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.9rem", lineHeight: 1.8, color: "#1A1A1A" }}>
          <strong>Summary:</strong> FermentCrush earns commissions when you buy through our Amazon links. This never affects which products we recommend or how we describe them. Our editorial positions exist independently of our affiliate relationships.
        </p>
      </div>

      {[
        {
          heading: "Amazon Associates Program",
          body: "FermentCrush is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases made through links on this site.",
        },
        {
          heading: "How Affiliate Commissions Work",
          body: "When you click a product link on FermentCrush and make a purchase on Amazon within the commission window, we receive a small percentage of the sale price as a commission. This commission is paid by Amazon and does not increase the price you pay. The commission rate varies by product category and is determined entirely by Amazon's program terms.",
        },
        {
          heading: "Our Editorial Independence",
          body: "Affiliate commission potential does not determine which products we recommend, which products receive positive coverage, or how we rank products within our guides. Our editorial process establishes product selections and assessments based on research, specifications, and community feedback — independent of whether a commission is available. We would make the same recommendations if no affiliate program existed.",
        },
        {
          heading: "What We Do Not Accept",
          body: "We do not accept: free products in exchange for coverage, paid placements, sponsored articles or reviews, or any compensation from manufacturers or retailers in exchange for favorable editorial treatment. If this policy changes, we will disclose it prominently.",
        },
        {
          heading: "FTC Compliance",
          body: "This disclosure is provided in compliance with the Federal Trade Commission's guidelines on endorsements and testimonials (16 C.F.R. § 255). We believe in transparent disclosure and provide this information so you can make fully informed decisions about how to weigh our recommendations.",
        },
        {
          heading: "Questions",
          body: "If you have questions about our affiliate relationships or editorial policies, contact us at info@fermentcrush.com. We're committed to transparency and will respond to genuine inquiries about our practices.",
        },
      ].map((section) => (
        <section key={section.heading} style={{ marginBottom: "36px" }}>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.4rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "12px" }}>
            {section.heading}
          </h2>
          <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.9rem", lineHeight: 1.9, color: "#1A1A1A" }}>
            {section.body}
          </p>
        </section>
      ))}
    </div>
  );
}
