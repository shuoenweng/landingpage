import { Families } from "@/components/Families";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItHelps } from "@/components/HowItHelps";
import { Jewelry } from "@/components/Jewelry";
import { Lifestyle } from "@/components/Lifestyle";
import { WaitlistSection } from "@/components/WaitlistSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <HowItHelps />
        <Jewelry />
        <Lifestyle />
        <Families />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
