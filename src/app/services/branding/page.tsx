import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Identity, Motion Graphic & Design Services | TecWrites",
  description: "TecWrites creates cohesive brand identities, custom UI design systems, vector assets, and premium 2D/3D kinetic animations.",
  alternates: {
    canonical: 'https://tecwrites.com/services/branding'
  }
};

export default function BrandingServicesPage() {
  const sections = [
    {
      title: "1. Brand Strategy & Core Identity",
      description: "Formulating the foundational values, voice, and visual assets of your brand:",
      items: [
        { name: "Brand Core Strategy", desc: "Aligning target audience demographics with brand positioning, messaging tone, and core values." },
        { name: "Logo Design Systems", desc: "Crafting iconic, versatile logo marks, wordmarks, and responsive variations for digital platforms." },
        { name: "Typography & Color Palettes", desc: "Curating high-contrast color palettes and typesetting pairings that establish perfect readability." }
      ]
    },
    {
      title: "2. Graphic Design Systems & Guidelines",
      description: "Structuring design guidelines and component libraries to keep brand updates consistent across teams:",
      items: [
        { name: "Brand Book Guidelines", desc: "Documenting layout rules, spacing, logo placements, and voice templates in digital booklets." },
        { name: "Bespoke Vector Icons", desc: "Drawing custom SVG icons and scalable vector graphics that represent your product features." },
        { name: "UI Kit Design", desc: "Designing reusable layouts, buttons, cards, and interactive visual elements for web implementation." }
      ]
    },
    {
      title: "3. 2D/3D Motion Graphics & Animation",
      description: "Bringing static brands to life with fluid, modern animations:",
      items: [
        { name: "Micro-Animations & UI Physics", desc: "Designing interactive UI feedback, loaders, screen transitions, and button tap animations." },
        { name: "Explainer Motion Graphics", desc: "Directing 2D kinetic typography and motion storyboards to clarify complex software or operations." },
        { name: "3D Product Animations", desc: "Rendering photorealistic product views and hardware/software exploded diagrams." }
      ]
    },
    {
      title: "4. Digital Marketing Collateral",
      description: "Designing high-conversion marketing assets for social media and advertising campaigns:",
      items: [
        { name: "Social Media Kits", desc: "Templatizing layout frames for Instagram, LinkedIn, and YouTube channels." },
        { name: "Pitch Deck & PDF Design", desc: "Formatting slide grids, charts, and diagrams to impress investors and client leads." },
        { name: "Newsletter Layouts", desc: "Designing responsive email templates that match brand visuals on mobile screens." }
      ]
    }
  ];

  return (
    <>
      <SchemaMarkup
        type="Service"
        data={{
          name: "Branding, Design & Animation Services",
          description: "Brand identity systems, vector illustrations, UI design guidelines, and custom 2D/3D motion graphics.",
          provider: {
            "@type": "Organization",
            name: "TecWrites"
          },
          serviceType: "Branding & Animation Design"
        }}
      />
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-200 to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-[#B25E00] tracking-widest uppercase mb-4 opacity-80">SERVICE DEEP DIVE</p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            Branding, Design &amp; Animation
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
            Create an unforgettable visual footprint. We build cohesive design systems, modern vector assets, and fluid brand animations.
          </p>
        </header>

        {/* Services List */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {sections.map((section, idx) => (
            <article key={idx} className="bg-surface rounded-[2rem] p-8 md:p-12 shadow-clay relative group transition-transform duration-300 hover:-translate-y-1">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">{section.title}</h2>
              <p className="text-on-surface-variant font-body-md text-lg mb-8">{section.description}</p>
              
              <ul className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#B25E00] mt-1 text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{item.name}</h3>
                      <p className="font-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Technologies Grid */}
        <section className="mt-24 max-w-4xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-12">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Figma",
              "Adobe Illustrator",
              "Adobe After Effects",
              "Adobe Premiere Pro",
              "Spline (3D Web design)",
              "Blender (3D assets)",
              "GreenSock (GSAP)",
              "Lottie Animation"
            ].map((tech, idx) => (
              <span key={idx} className="px-6 py-3 bg-surface rounded-full shadow-clay-sm text-on-surface font-label-caps text-label-caps border border-white/50">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3">
            Start Your Branding Project
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
