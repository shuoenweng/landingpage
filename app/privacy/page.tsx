import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy — Liora",
  description: "How Liora uses waitlist emails before launch.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <PrivacyContent />
      <Footer />
    </>
  );
}
