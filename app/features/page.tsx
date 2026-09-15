import type { Metadata } from "next";
import { FeaturesContent } from "@/components/FeaturesContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Features — QiLyra",
  description:
    "Fall detection, emergency auto-contact, location peace of mind for families walking with dementia, and everyday wellbeing — designed as jewelry.",
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
