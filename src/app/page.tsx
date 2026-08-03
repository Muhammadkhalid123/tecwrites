import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesStackSection from "@/components/ServicesStackSection";
import ProcessRibbonSection from "@/components/ProcessRibbonSection";
import PortfolioHorizontalSection from "@/components/PortfolioHorizontalSection";
import TestimonialsMarqueeSection from "@/components/TestimonialsMarqueeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundMotionSystem from "@/components/BackgroundMotionSystem";
import LenisProvider from "@/components/LenisProvider";

export default function Home() {
  return (
    <LenisProvider>
      {/* Persistent Background Motion System (3D WebGL / Parallax Motifs) */}
      <BackgroundMotionSystem />

      <main className="relative z-10 w-full min-h-screen">
        {/* Floating Glass Header & Navigation */}
        <Header />

        {/* 1. Hero — 55/45 Asymmetric Split Kinetic Canvas */}
        <HeroSection />

        {/* 2. Services — Floating Glass Stack */}
        <ServicesStackSection />

        {/* Empty Transition Section */}
        <section className="relative w-full h-[50vh] md:h-[70vh] bg-transparent pointer-events-none" />

        {/* 3. Process — Ribbon Timeline (Our Methodology) */}
        <ProcessRibbonSection />

        {/* 4. Work / Portfolio — Horizontal Scroll Gallery */}
        {/* <PortfolioHorizontalSection /> */}

        {/* 6. Testimonials — Marquee Fragments (Parallax Quotes) */}
        <TestimonialsMarqueeSection />

        {/* 7. Contact Section — Inquiry Form & Direct Studio Details */}
        <ContactSection />

        {/* 8. Footer — Studio Directory & Legal Close */}
        <Footer />
      </main>
    </LenisProvider>
  );
}
