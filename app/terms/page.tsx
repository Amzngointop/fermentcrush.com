import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | FermentCrush",
  description: "FermentCrush terms of use — the rules governing your use of this website and its content.",
};

export default function TermsPage() {
  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.5rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>
        Terms of Use
      </h1>
      <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.8rem", color: "#5C5C5C", marginBottom: "48px" }}>Last updated: January 2026</p>

      {[
        { heading: "Acceptance of Terms", body: "By accessing and using FermentCrush (fermentcrush.com), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this site." },
        { heading: "Editorial Content", body: "All written content, guides, reviews, and editorial material on FermentCrush is for informational purposes only. While we strive for accuracy and cite authoritative sources where appropriate, we make no warranties about the completeness, reliability, or accuracy of this information. Any action you take based on content found on this site is at your own risk." },
        { heading: "Food Safety Disclaimer", body: "Fermentation involves live microorganisms and carries inherent food safety considerations. FermentCrush provides educational content and equipment recommendations but is not a substitute for professional food safety guidance. Always follow current food safety guidelines from authoritative sources such as the USDA and CDC. If you have questions about food safety, consult a qualified food safety professional." },
        { heading: "Affiliate Links", body: "FermentCrush participates in the Amazon Associates Program and may earn commissions from affiliate links. These links are clearly disclosed. Your product purchases through these links support the site at no additional cost to you. We are not responsible for third-party websites, their content, or their business practices." },
        { heading: "Intellectual Property", body: "All content on FermentCrush — including text, images, graphics, and design — is the property of FermentCrush and protected by applicable copyright law. You may not reproduce, distribute, or create derivative works from our content without prior written permission. Brief quotations with attribution and links to the original content are permitted." },
        { heading: "Limitation of Liability", body: "FermentCrush and its operators are not liable for any damages arising from your use of this site, reliance on its content, or use of products featured in our reviews. This includes but is not limited to direct, indirect, incidental, and consequential damages." },
        { heading: "Governing Law", body: "These terms are governed by the laws of the State of Oregon, United States, without regard to its conflict of law provisions." },
        { heading: "Contact", body: "Questions about these terms? Contact us at info@fermentcrush.com." },
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
