"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FAQItem {
  question: string;
  answer: string;
}

export default function CapabilitiesPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const capabilitiesList = [
    {
      title: "End-to-End App Development",
      subtitle: "Full Product Builds",
      icon: "devices",
      image: "/services/Full Product Builds.png",
      colorClass: "text-primary",
      bgGradient: "from-primary-fixed/20 to-transparent",
      badgeBg: "bg-primary-container",
      description: "We handle the entire journey from your raw product blueprint and UX layouts to writing full-stack code and deploying live to App Stores. No fragmented handoffs.",
      points: ["Figma Interactive Prototypes", "Next.js & React Frontend Engineering", "React Native iOS & Android Builds"],
      link: "/services/app"
    },
    {
      title: "AI-Integrated Products",
      subtitle: "AI & Intelligence",
      icon: "smart_toy",
      image: "/services/AI & Intelligence.png",
      colorClass: "text-secondary",
      bgGradient: "from-secondary-fixed/20 to-transparent",
      badgeBg: "bg-secondary-container",
      description: "Embed high-value cognitive capabilities into your systems. We design chat assistants, recommendation systems, and automated pipelines behind tactile, approachable user interfaces.",
      points: ["Custom LLM Integrations", "Retrieval-Augmented Generation (RAG)", "Conversational Chat Assistants"],
      link: "/services/ai"
    },
    {
      title: "Game Development",
      subtitle: "Interactive Games",
      icon: "sports_esports",
      image: "/services/Interactive Games.png",
      colorClass: "text-[#9E003A]",
      bgGradient: "from-[#fff0f5] to-transparent",
      badgeBg: "bg-rose-100/80 dark:bg-rose-950/20",
      description: "A rare in-house game developer and animation director combo. We build 60+ FPS responsive WebGL browser games, native mobile games, and gamified ed-tech tools.",
      points: ["WebGL & Three.js Canvas Graphics", "Gamified Learning Applications", "Branded Marketing Mini-Games"],
      link: "/services/game"
    },
    {
      title: "Branding, Animation & Design",
      subtitle: "Visual Identity",
      icon: "palette",
      image: "/services/Visual Identity (Branding, Animation & Design).png",
      colorClass: "text-[#B25E00]",
      bgGradient: "from-amber-100/40 to-transparent",
      badgeBg: "bg-amber-100/80 dark:bg-amber-950/20",
      description: "We create cohesive brand books, logos, vector asset kits, App Store visual creatives, and custom 2D/3D brand explainer animations that fit developer assets perfectly.",
      points: ["Brand Identity Books & Logos", "Bespoke Vector Illustration Kits", "2D/3D Kinetic Explainer Videos"],
      link: "/services/branding"
    },
    {
      title: "App Store Publishing & ASO",
      subtitle: "Store Optimization",
      icon: "storefront",
      image: "/services/Self Publishing & Formatting.png",
      colorClass: "text-tertiary",
      bgGradient: "from-tertiary-fixed/20 to-transparent",
      badgeBg: "bg-tertiary-container",
      description: "We optimize your storefront assets and release parameters so your app actually ranks. ASO audit strategy, description copywriting, and compliance evaluations.",
      points: ["App Store & Play Store Uploads", "ASO Keyword & Copywriting Audits", "eBook KDP & Distribution Setup"],
      link: "/services/publishing"
    },
    {
      title: "Cloud Infrastructure & DevOps",
      subtitle: "DevOps & Scaling",
      icon: "cloud",
      image: "/services/DevOps & Scaling (Cloud Infrastructure).png",
      colorClass: "text-[#3B4252]",
      bgGradient: "from-slate-200 to-transparent",
      badgeBg: "bg-slate-100/80 dark:bg-slate-800/20",
      description: "Configure automated scaling and secure codebases. We offer cloud scaling audits, CI/CD automated test pipelines, and host bill reduction optimization.",
      points: ["AWS & GCP Cloud Configurations", "Terraform Infrastructure as Code", "Docker Container Scaling"],
      link: "/services/devops"
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "Can we hire TecWrites for standalone DevOps and cloud services?",
      answer: "Yes, absolutely! Our cloud engineer provides DevOps as a standalone service. We can audit your existing cloud setups (AWS/GCP), configure Terraform Infrastructure as Code, set up CI/CD pipeline automations, and optimize your servers to cut monthly host costs."
    },
    {
      question: "What makes your Game Development service unique?",
      answer: "We offer a rare in-house Game Developer + Animator combo. This means we design the game physics, level blueprints, and rich custom animations under one roof. We build lightweight, hardware-accelerated 2D/3D games running at 60+ FPS natively in browsers or mobile stores."
    },
    {
      question: "What is included in App Store Publishing & ASO?",
      answer: "Most dev agencies build an application and dump it on store consoles with no setup. We audit your app against strict Apple & Google guidelines to ensure review approval, construct optimized metadata/keywords, write high-conversion copy, and design store screenshots to drive organic downloads."
    },
    {
      question: "Do you only build full products, or can you integrate features into active codebases?",
      answer: "We do both. We build end-to-end products from raw blueprints ('idea to App Store'). However, we also serve clients who need standalone features, such as bolting custom AI co-pilots, cloud scaling configurations, or brand asset animation packages directly into existing setups."
    },
    {
      question: "How do your pricing models and engagements work?",
      answer: "We align pricing with deliverables. Short-term audits, brand kits, and publishing setups are flat-fee project packages starting at $2.5k. Full-scale product builds and continuous integrations are scoped as fixed MVP cycles starting at $10k or flat monthly retainers."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-24 md:mb-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-fixed to-surface-container-lowest rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-40 -z-10 mix-blend-multiply blur-2xl"></div>
          <p className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 opacity-80">OUR CAPABILITIES</p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-3xl leading-tight text-balance">Services &amp; Pricing Tiers</h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
            Crafting digital experiences with tactile precision. Explore our specialized services tailored for modern startups and forward-thinking enterprises.
          </p>
        </header>

        {/* Detailed Blocks */}
        <section className="mb-32 space-y-24">
          {capabilitiesList.map((service, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div key={idx} className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}>
                <div className="w-full md:w-1/2 relative">
                  <div className="w-full aspect-square bg-surface-container-lowest shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.03)] rounded-lg p-8 flex items-center justify-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient}`}></div>
                    
                    {service.image ? (
                      <img
                        className="relative z-10 w-full h-full object-contain drop-shadow-xl rounded-xl"
                        src={service.image}
                        alt={service.title}
                      />
                    ) : (
                      <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 gap-4 w-full h-full">
                        <div className="w-24 h-24 rounded-full bg-white shadow-clay-sm flex items-center justify-center" style={{ color: service.colorClass.startsWith('text-[') ? service.colorClass.slice(5, -1) : undefined }}>
                          <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                            {service.icon}
                          </span>
                        </div>
                        <span className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wider opacity-60">
                          {service.subtitle}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 bg-surface-container-lowest shadow-[inset_4px_4px_10px_rgba(0,0,0,0.05),inset_-4px_-4px_10px_rgba(255,255,255,1)] rounded-full font-label-caps text-label-caps ${service.colorClass} uppercase`}>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {service.icon}
                    </span>
                    {service.subtitle}
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">{service.title}</h2>
                  <p className="text-on-surface-variant text-lg leading-relaxed">{service.description}</p>
                  <ul className="space-y-4 pt-4">
                    {service.points.map((pt, ptIdx) => (
                      <li key={ptIdx} className="flex items-start gap-3">
                        <span className={`material-symbols-outlined ${service.colorClass} mt-1`} style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span className="text-on-surface-variant">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link href={service.link} className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container text-on-surface font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-colors duration-300 shadow-clay-sm`}>
                      View Full Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Pricing Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Pricing Tiers</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">Transparent investments for premium digital craftsmanship.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
            {/* Tier 1 */}
            <div className="bg-surface-container-lowest shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.03)] rounded-lg p-8 md:p-6 lg:p-10 flex flex-col h-full hover:translate-y-[-4px] transition-transform duration-300">
              <div className="mb-8">
                <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Essential</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg">$2.5k</span>
                  <span className="text-on-surface-variant">/mo</span>
                </div>
                <p className="mt-4 text-sm text-on-surface-variant">Ideal for App Store setup, metadata optimizing, KDP typesetting, or basic brand design kits.</p>
              </div>
              <div className="flex-grow space-y-4 mb-8">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">App Store Publishing</span></div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">ASO Audits &amp; Keywords</span></div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">Basic Branding Assets</span></div>
                <div className="flex items-center gap-3 text-outline"><span className="material-symbols-outlined text-sm">remove</span> <span className="text-sm">Custom code builds</span></div>
              </div>
              <Link href="/contact" className="w-full py-4 bg-surface-container-lowest text-primary shadow-[10px_10px_20px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-2px_-2px_4px_rgba(0,0,0,0.03)] rounded-full font-label-caps text-label-caps uppercase hover:bg-surface-variant transition-all duration-200 inline-block text-center">Get Started</Link>
            </div>
            
            {/* Tier 2 (Elevated) */}
            <div className="bg-surface-container-lowest shadow-[30px_30px_50px_rgba(0,0,0,0.08),inset_2px_2px_4px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.03)] rounded-[3rem] p-10 md:p-8 lg:p-12 flex flex-col h-full relative z-10 md:scale-105 border-2 border-primary/10 hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-primary text-on-primary px-4 py-1 rounded-full text-[10px] font-label-caps uppercase tracking-widest shadow-lg">Recommended</span>
              </div>
              <div className="mb-8">
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">Professional</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-headline-xl text-headline-xl text-primary">$5k</span>
                  <span className="text-on-surface-variant">/mo</span>
                </div>
                <p className="mt-4 text-sm text-on-surface-variant">Full-scale claymorphic web applications, DevOps configurations, or AI automation pilot integrations.</p>
              </div>
              <div className="flex-grow space-y-4 mb-8">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">Bespoke Clay UI</span></div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">AI Agent &amp; RAG Pilots</span></div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">DevOps Scaling &amp; Cloud audits</span></div>
              </div>
              <Link href="/contact" className="w-full py-4 bg-primary text-on-primary shadow-[10px_10px_20px_rgba(0,27,181,0.2),inset_2px_2px_4px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.2)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.2)] rounded-full font-label-caps text-label-caps uppercase hover:brightness-110 active:scale-95 transition-all duration-200 inline-block text-center">Get a Custom Quote</Link>
            </div>
            
            {/* Tier 3 */}
            <div className="bg-surface-container-lowest shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.03)] rounded-lg p-8 md:p-6 lg:p-10 flex flex-col h-full hover:translate-y-[-4px] transition-transform duration-300">
              <div className="mb-8">
                <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Enterprise</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg">Custom</span>
                </div>
                <p className="mt-4 text-sm text-on-surface-variant">Full-scale digital transformation, interactive WebGL games, and complete app codebases.</p>
              </div>
              <div className="flex-grow space-y-4 mb-8">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">End-to-End App Dev</span></div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">60+ FPS Game Development</span></div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">Dedicated Team Retainer</span></div>
              </div>
              <Link href="/contact" className="w-full py-4 bg-surface-container-lowest text-primary shadow-[10px_10px_20px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-2px_-2px_4px_rgba(0,0,0,0.03)] rounded-full font-label-caps text-label-caps uppercase hover:bg-surface-variant transition-all duration-200 inline-block text-center">Contact Us</Link>
            </div>
          </div>
        </section>

        {/* Website Animation & Design Tech Stack Showcase */}
        <section className="mb-32 max-w-5xl mx-auto bg-surface rounded-[2.5rem] p-10 md:p-16 border border-white/60 shadow-clay text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-transparent rounded-full filter blur-3xl -z-10"></div>
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">ENGINEERING STANDARDS</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Designed with Modern Web Technology</h2>
          <p className="text-on-surface-variant font-body-md text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            This digital workspace is a live demonstration of our creative engineering. We utilize hardware-accelerated rendering, smooth scroll decel structures, and tactile claymorphic grids to create fluid user interfaces.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-surface-container-lowest shadow-clay-sm rounded-2xl flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[32px]">animation</span>
              <span className="font-headline-sm text-headline-sm text-on-surface">GSAP Animations</span>
              <span className="text-xs text-on-surface-variant leading-relaxed">ScrollTrigger and dynamic layout micro-interactions.</span>
            </div>
            <div className="p-6 bg-surface-container-lowest shadow-clay-sm rounded-2xl flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[32px]">view_in_ar</span>
              <span className="font-headline-sm text-headline-sm text-on-surface">WebGL Graphics</span>
              <span className="text-xs text-on-surface-variant leading-relaxed">Hardware-accelerated interactive canvas particle grids.</span>
            </div>
            <div className="p-6 bg-surface-container-lowest shadow-clay-sm rounded-2xl flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[32px]">mouse</span>
              <span className="font-headline-sm text-headline-sm text-on-surface">Lenis Smooth Scroll</span>
              <span className="text-xs text-on-surface-variant leading-relaxed">Kinetic, unified smooth scroll physics across platforms.</span>
            </div>
            <div className="p-6 bg-surface-container-lowest shadow-clay-sm rounded-2xl flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[32px]">texture</span>
              <span className="font-headline-sm text-headline-sm text-on-surface">Claymorphism UI</span>
              <span className="text-xs text-on-surface-variant leading-relaxed">High-contrast HSL gradient shadows and tactile borders.</span>
            </div>
          </div>
        </section>

        {/* FAQ Section Accordion */}
        <section className="mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">HAVE QUESTIONS?</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openFAQIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-surface rounded-3xl border border-white/60 shadow-clay overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-8 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span 
                      className={`material-symbols-outlined text-primary transition-transform duration-300 text-[24px]`}
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      keyboard_arrow_down
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-8 pb-8 text-on-surface-variant font-body-md text-lg border-t border-black/5 pt-6 leading-relaxed bg-[#fbf9f5]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
