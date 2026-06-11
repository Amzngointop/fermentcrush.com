import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FermentCrush — Expert Kitchen Tool Guides & Reviews",
  description:
    "Independent buying guides for vacuum sealers, kitchen scales, thermometers, cutting boards, and more — curated Amazon picks for serious home cooks.",
  metadataBase: new URL("https://fermentcrush.com"),
  openGraph: {
    siteName: "FermentCrush",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/icon.svg' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`} style={{ backgroundColor: "#FFFFFF" }}>
      <body
        style={{
          backgroundColor: "#FFFFFF",
          color: "#1A1A1A",
          fontFamily: "var(--font-lato)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
