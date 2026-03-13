import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────
  metadataBase: new URL("https://www.proleadlist.com"),
  title: {
    default: "ProLeast — Apollo Lead Generation, Starting at $3",
    template: "%s | ProLeast",
  },
  description:
    "Scrape 1,000+ Apollo leads with no Chrome extension. Starting at just $3. Fast delivery in 8–10 hours.",

  // ── Canonical ─────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  // ── Icons ─────────────────────────────────────────────
  icons: {
    icon: "/icon.png", // 32×32 or 48×48
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png", // 180×180
  },

  // ── Open Graph ────────────────────────────────────────
  openGraph: {
    title: "ProLeast — Apollo Lead Generation, Starting at $3",
    description:
      "Scrape 1,000+ Apollo leads. No Chrome extension needed. From $3.",
    url: "https://www.proleadlist.com",
    siteName: "ProLeast",
    images: [
      {
        url: "/og-image.png", // 1200×630 in /public
        width: 1200,
        height: 630,
        alt: "ProLeast — Apollo Lead Generation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ── Twitter / X ───────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "ProLeast — Apollo Lead Generation, Starting at $3",
    description:
      "Scrape 1,000+ Apollo leads. No Chrome extension needed. From $3.",
    images: ["/og-image.png"],
  },

  // ── Crawling ──────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "ProLeast Apollo Lead Generation",
              url: "https://www.proleadlist.com",
              description:
                "Scrape 1,000+ Apollo leads with no Chrome extension. Starting at $3.",
              provider: {
                "@type": "Person",
                name: "Kowser Ahmed",
                url: "https://www.linkedin.com/in/kowser-ahmed-a5048a3a5/",
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "3",
                availability: "https://schema.org/InStock",
                description: "1,000 Apollo leads starting at $3",
              },
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
