import type { Metadata } from "next";
import { FeaturesContent } from "@/components/FeaturesContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Features — QiLyra",
  description:
    "Cycle tracking, awareness when your pattern drifts, hydration reminders, and personal safety — designed as jewelry.",
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <FeaturesContent />
      <Footer />
    </>
  );
}
