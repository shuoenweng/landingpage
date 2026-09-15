import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const title = "Liora — Quiet jewelry for everyday independence";
const description =
  "A jewelry-first smart bracelet for older adults and their families. Elegant moss-green stones and a matte silver bar — with discreet fall and wellbeing care, designed to preserve dignity.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title,
  description,
  keywords: [
    "Liora",
    "smart bracelet",
    "jewelry",
    "older adults",
    "fall detection",
    "family peace of mind",
    "discreet wearable",
  ],
  authors: [{ name: "Liora" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/liora-bracelet.jpg",
        width: 1086,
        height: 1448,
        alt: "Liora bracelet with moss-green stones and a matte silver bar on cream silk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/liora-bracelet.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory font-sans text-ink">
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
