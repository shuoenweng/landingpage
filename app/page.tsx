import { Care } from "@/components/Care";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Presence } from "@/components/Presence";
import { Statement } from "@/components/Statement";
import { WaitlistSection } from "@/components/WaitlistSection";

export default function Home() {
  return (
    <>
      <Header tone="overlay" />
      <main id="main">
        <Hero />
        <Statement />
        <Presence />
        <Care />
        <Faq />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
