import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | FermentCrush",
  description: "FermentCrush privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.5rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>
        Privacy Policy
      </h1>
      <p style={{ fontFamily: "var(--font-lato)", fontSize: "0.8rem", color: "#5C5C5C", marginBottom: "48px" }}>Last updated: January 2026</p>

      {[
        {
          heading: "Information We Collect",
          body: "FermentCrush collects minimal information. When you voluntarily submit a contact form or newsletter signup, we collect the email address and name you provide. We do not collect payment information, as no purchases are made through this site. We may collect standard web analytics data (pages visited, referral source, browser type) through anonymous analytics tools.",
        },
        {
          heading: "How We Use Your Information",
          body: "Email addresses collected via newsletter signup are used only to send the newsletter content you requested. Contact form submissions are used only to respond to your inquiry. We do not sell, trade, or share your personal information with third parties for marketing purposes.",
        },
        {
          heading: "Amazon Associates",
          body: "FermentCrush participates in the Amazon Services LLC Associates Program. When you click an affiliate link and make a purchase on Amazon, Amazon may set cookies and collect data according to their privacy policy. We receive a commission on qualifying purchases but do not receive or store any personal purchase data. Please review Amazon's Privacy Policy at amazon.com for details on their data practices.",
        },
        {
          heading: "Cookies",
          body: "This site may use essential cookies for basic site functionality and anonymous analytics. We do not use advertising cookies or tracking cookies for behavioral advertising purposes. You may disable cookies in your browser settings; doing so will not affect your ability to access content on this site.",
        },
        {
          heading: "Data Security",
          body: "We implement reasonable security measures to protect any personal information we collect. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security and encourage you to take precautions with any personal information you share online.",
        },
        {
          heading: "Your Rights",
          body: "You have the right to request access to, correction of, or deletion of any personal information we hold about you. To make such a request, contact us at info@fermentcrush.com. We will respond within 30 days.",
        },
        {
          heading: "Changes to This Policy",
          body: "We may update this privacy policy periodically. We will note the date of the most recent update at the top of this page. Continued use of the site after policy changes constitutes acceptance of the updated terms.",
        },
        {
          heading: "Contact",
          body: "Questions about this privacy policy? Contact us at info@fermentcrush.com or at FermentCrush Editorial, 4821 Cultures Way, Portland, OR 97201.",
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
