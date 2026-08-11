import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesStackSection from "@/components/ServicesStackSection";
import PortfolioHorizontalSection from "@/components/PortfolioHorizontalSection";
import TestimonialsMarqueeSection from "@/components/TestimonialsMarqueeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10 w-full min-h-screen">
        <HeroSection />
        <ServicesStackSection />
        <PortfolioHorizontalSection />
        <TestimonialsMarqueeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

