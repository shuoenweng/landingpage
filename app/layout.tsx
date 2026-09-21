import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_SC, Noto_Serif_SC, Source_Sans_3 } from "next/font/google";
import { I18nProvider } from "@/lib/i18n/provider";
import { SkipLink } from "@/components/SkipLink";
import { getSiteUrl } from "@/lib/site";
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

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
  preload: false,
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-noto-serif-sc",
  display: "swap",
  preload: false,
});

const title = "QiLyra — Jewelry you will actually wear";
const description =
  "A jewelry-first, screen-free bracelet for older adults and their families. Discreet fall alerts, family peace of mind, and a piece that looks like jewelry because it is.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title,
  description,
  keywords: [
    "QiLyra",
    "smart bracelet",
    "jewelry",
    "older adults",
    "fall detection",
    "family peace of mind",
    "discreet wearable",
  ],
  authors: [{ name: "QiLyra" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/qilyra-bracelet.png",
        width: 1086,
        height: 1448,
        alt: "QiLyra bracelet with moss-green stones and a matte silver bar on cream silk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/qilyra-bracelet.png"],
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
      className={`${cormorant.variable} ${sourceSans.variable} ${notoSansSC.variable} ${notoSerifSC.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory font-sans text-ink">
        <I18nProvider>
          <SkipLink />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
