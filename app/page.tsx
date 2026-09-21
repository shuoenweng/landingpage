import { Comparison } from "@/components/Comparison";
import { Everyday } from "@/components/Everyday";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Lifestyle } from "@/components/Lifestyle";
import { Positioning } from "@/components/Positioning";
import { Testimonials } from "@/components/Testimonials";
import { WaitlistSection } from "@/components/WaitlistSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Positioning />
        <Everyday />
        <Lifestyle />
        <Comparison />
        <WaitlistSection />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
