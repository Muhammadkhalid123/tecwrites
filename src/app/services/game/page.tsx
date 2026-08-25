import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke WebGL & Game Development Services | TecWrites",
  description: "TecWrites creates interactive WebGL browser games, immersive 3D portals, gamified marketing, and spatial VR prototypes.",
  alternates: {
    canonical: 'https://tecwrites.com/services/game'
  }
};

export default function GameServicesPage() {
  const sections = [
    {
      title: "1. Game Concept & Mechanics Design",
      description: "Formulating core gameplay mechanics, level designs, and dynamic UI interactions:",
      items: [
        { name: "Mechanics Prototyping", desc: "Scoping core mechanics, user interactions, and visual physics loops before full development." },
        { name: "Storyboarding & Art Direction", desc: "Creating initial vector and sketch assets to establish character style and art vibes." },
        { name: "Game Design Document (GDD)", desc: "Authoring structural design documents to align developers, animators, and sound designers." }
      ]
    },
    {
      title: "2. WebGL & Browser Game Engineering",
      description: "Developing fast, highly optimized 2D/3D games that run instantly inside standard web browsers:",
      items: [
        { name: "Three.js & Pixi.js Engines", desc: "Utilizing lightweight rendering frameworks for high-fidelity 2D/3D hardware-accelerated animations." },
        { name: "Web-Optimized Assets", desc: "Compressing 3D models and textures to ensure instant loading without long downloads." },
        { name: "Responsive Game Canvas", desc: "Scaling resolution and viewports perfectly from mobile screens to desktop displays." }
      ]
    },
    {
      title: "3. Gamified Marketing Activations",
      description: "Designing interactive gaming modules to boost brand engagement and product launches:",
      items: [
        { name: "Branded Game Worlds", desc: "Creating simple, addictive games that feature product integrations or company mascots." },
        { name: "Leaderboards & Share Loops", desc: "Integrating secure, database-driven scoreboards and viral social media sharing mechanics." },
        { name: "Interactive Product Showrooms", desc: "Implementing WebGL features to showcase product models in interactive 3D spaces." }
      ]
    },
    {
      title: "4. Spatial Computing & VR",
      description: "Pioneering new interface paradigms for Meta Quest and Apple Vision Pro platforms:",
      items: [
        { name: "WebXR Interactive Canvas", desc: "Building browser-accessible VR/AR experiences using custom rendering pipelines." },
        { name: "Vision Pro Portals", desc: "Developing spatial layouts and gesture-based touchless interactions for modern VR environments." },
        { name: "Virtual Showrooms", desc: "Creating immersive spaces where users can step inside and manipulate virtual products." }
      ]
    },
    {
      title: "5. Performance Optimizations & Audio",
      description: "Ensuring games run smoothly at stable frame rates and sound incredibly immersive:",
      items: [
        { name: "Frame Rate Audits", desc: "Debugging custom shaders, lighting, and rendering pipelines to target 60+ FPS on all devices." },
        { name: "Interactive Audio Systems", desc: "Integrating dynamic, responsive sound effects and background music tracks." },
        { name: "Cross-Browser QA", desc: "Testing games across Safari, Chrome, Edge, and mobile web views to ensure robust compatibility." }
      ]
    }
  ];

  return (
    <>
      <SchemaMarkup
        type="Service"
        data={{
          name: "Game Development Services",
          description: "Interactive WebGL browser games, immersive 3D portals, gamified marketing, and spatial VR prototypes.",
          provider: {
            "@type": "Organization",
            name: "TecWrites"
          },
          serviceType: "Game Development"
        }}
      />
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-rose-200 to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-[#9E003A] tracking-widest uppercase mb-4 opacity-80">SERVICE DEEP DIVE</p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            Game Development
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
            Merge narrative, design, and hardware-accelerated code into browser games and interactive WebGL worlds that keep users hooked.
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
                    <span className="material-symbols-outlined text-[#9E003A] mt-1 text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
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
              "WebGL",
              "Three.js",
              "Unity",
              "C#",
              "Blender (3D modeling)",
              "WebXR",
              "Pixi.js",
              "GreenSock (GSAP)"
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
            Start Your Game Project
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
