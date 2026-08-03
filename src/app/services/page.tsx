"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundMotionSystem from "@/components/BackgroundMotionSystem";
import LenisProvider from "@/components/LenisProvider";
import { Sparkles, Bot, Code, Smartphone, BookOpen, CheckCircle, ArrowUpRight, Zap, ShieldCheck, Globe } from "lucide-react";

const servicePillars = [
  {
    id: "ai-automation",
    title: "AI & Workflow Automation",
    badge: "PILLAR 01",
    desc: "Custom LLM integrations, autonomous chatbot assistants, data pipeline automation, and Make/Zapier enterprise node connectors.",
    img: "/BG/AI.png",
    icon: Bot,
    features: [
      "Custom Fine-Tuned GPT & Claude Agents",
      "Enterprise Workflow Automation (Make / N8N)",
      "Semantic Vector Search & Knowledge Base",
      "Automated Multi-Channel Content Engines",
    ],
  },
  {
    id: "web-engineering",
    title: "Bespoke Web Engineering",
    badge: "PILLAR 02",
    desc: "High-performance web applications, interactive WebGL experiences, e-commerce architectures, and headless CMS builds.",
    img: "/BG/web.png",
    icon: Code,
    features: [
      "Next.js 16 & Server Actions Architecture",
      "Three.js & GSAP Momentum Physics",
      "Sub-100ms Page Speed Optimization",
      "SEO & Structured Schema Engineering",
    ],
  },
  {
    id: "publishing-services",
    title: "Publishing & Editorial Media",
    badge: "PILLAR 03",
    desc: "Full-service digital and print publishing through Kandle Direct Publishing—book design, interior formatting, editing, and distribution.",
    img: "/BG/ebook.png",
    icon: BookOpen,
    features: [
      "Hardcover & Paperback Interior Layout",
      "Custom Cover Illustration & Typography",
      "Global ISBN & Amazon KDP Distribution",
      "Epub3 & Kindle Interactive E-books",
    ],
  },
];

const pricingTiers = [
  { tier: "Starter", price: "$5kâ€“$15k", desc: "For early-stage brands and solo founders. Scoped deliverable, 4â€“6 week turnaround.", color: "border-gray-700" },
  { tier: "Growth", price: "$15kâ€“$50k", desc: "For scaling companies needing full-stack builds, AI automation, or editorial pipelines.", color: "border-[#1E8FBF]", highlight: true },
  { tier: "Enterprise", price: "$50k+", desc: "Mission-critical systems, retainer-based partnerships, and dedicated engineering teams.", color: "border-[#12D6C4]" },
];

export default function ServicesPage() {
  return (
    <LenisProvider>
      <div className="page-accent-top" />
      <BackgroundMotionSystem />
      <Header />

      <main className="relative z-10 min-h-screen pt-36 pb-24 px-6 md:px-12 text-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* PAGE HERO HEADER */}
          <div className="flex flex-col space-y-6 max-w-4xl">
            <div className="page-enter inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#12D6C4]/40 w-fit text-xs font-mono text-[#0D9488] dark:text-[#12D6C4] font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE CAPABILITIES &amp; SERVICE PILLARS</span>
            </div>

            <h1 className="page-enter page-enter-delay-1 font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
              <span className="block text-white">ENGINEERING &amp;</span>
              <span className="block italic shimmer-text">PUBLISHING SERVICES.</span>
            </h1>

            <p className="page-enter page-enter-delay-2 text-gray-700 dark:text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
              Discover our specialized service divisions designed to automate your workflows, power your digital infrastructure, and launch market-leading publications.
            </p>
          </div>

          {/* TRUST DIFFERENTIATORS */}
          <div className="page-enter page-enter-delay-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Fast Delivery", desc: "4â€“12 week sprints with weekly progress reports and milestone demos." },
              { icon: ShieldCheck, title: "Quality Guaranteed", desc: "Every deliverable is tested, optimized, and backed by our satisfaction guarantee." },
              { icon: Globe, title: "Global Reach", desc: "Distributed team across LA, London, and Asia â€” available across all timezones." },
            ].map((d, i) => {
              const DIcon = d.icon;
              return (
                <div key={i} className="p-6 rounded-2xl glass-panel border border-white/10 flex items-start gap-4 hover:border-[#12D6C4]/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#12D6C4]/15 border border-[#12D6C4]/30 flex items-center justify-center shrink-0">
                    <DIcon className="w-5 h-5 text-[#12D6C4]" />
                  </div>
                  <div>
                    <h3 className="font-syne font-semibold text-white text-sm mb-1">{d.title}</h3>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SERVICE PILLARS LIST */}
          <div className="space-y-16 page-enter page-enter-delay-3">
            {servicePillars.map((pillar, idx) => {
              const PIcon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  id={pillar.id}
                  className={`p-8 md:p-12 rounded-3xl glass-panel border border-white/10 flex flex-col ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center justify-between gap-12 hover:border-[#12D6C4]/40 transition-all duration-500`}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#12D6C4]/15 border border-[#12D6C4]/30 flex items-center justify-center">
                        <PIcon className="w-5 h-5 text-[#12D6C4]" />
                      </div>
                      <div className="inline-block text-xs font-mono text-[#12D6C4] bg-[#12D6C4]/10 px-3.5 py-1 rounded-full border border-[#12D6C4]/20">
                        {pillar.badge}
                      </div>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl text-white">{pillar.title}</h2>
                    <p className="text-gray-300 font-light text-base leading-relaxed">{pillar.desc}</p>

                    <ul className="space-y-3 pt-2">
                      {pillar.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-200">
                          <CheckCircle className="w-4 h-4 text-[#12D6C4] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      <a
                        href="/contact"
                        className="liquid-cta-btn inline-flex items-center gap-3 px-6 py-3 rounded-full font-syne text-xs uppercase tracking-widest font-bold shadow-lg"
                      >
                        <span>Inquire About {pillar.title}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Visual Motif Card */}
                  <div className="w-full lg:w-[480px] h-72 md:h-96 rounded-2xl relative overflow-hidden glass-panel border border-[#12D6C4]/30 shrink-0 group p-8 flex flex-col justify-between">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F2E8C]/20 via-[#0A0E1A]/90 to-[#12D6C4]/15 pointer-events-none" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-[#12D6C4]/10 border border-[#12D6C4]/30 text-[#12D6C4]">
                        <PIcon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono text-[#5CF2E0] uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="relative z-10 space-y-3 my-auto">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                        <span className="text-[10px] font-mono text-[#12D6C4] tracking-widest uppercase block">FEATURE SPECIFICATION</span>
                        <p className="text-white font-serif text-lg font-semibold">{pillar.title}</p>
                        <p className="text-gray-400 text-xs font-light">{pillar.desc}</p>
                      </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-gray-400">
                      <span>TECWRITES // CAPABILITY</span>
                      <span className="text-[#12D6C4]">ACTIVE ARCHITECTURE</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* PRICING QUICK REFERENCE */}
          <div className="space-y-10 pt-12 border-t border-gray-800 page-enter page-enter-delay-4">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono tracking-widest text-[#12D6C4] uppercase">INVESTMENT TIERS</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white">Transparent Pricing</h2>
              <p className="text-gray-400 text-base font-light max-w-xl mx-auto">Every project is scoped individually. These ranges are starting guides â€” contact us for a precise proposal.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, i) => (
                <div key={i} className={`p-8 rounded-2xl glass-panel border-2 ${tier.color} space-y-4 text-center relative ${tier.highlight ? "ring-1 ring-[#1E8FBF]/40" : ""}`}>
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1E8FBF] text-xs font-mono font-bold text-white uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-syne font-bold text-white text-lg">{tier.tier}</h3>
                  <p className="font-serif text-3xl text-[#12D6C4]">{tier.price}</p>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{tier.desc}</p>
                  <a href="/contact" className="inline-flex items-center gap-2 text-xs font-mono text-[#12D6C4] hover:text-white transition-colors uppercase tracking-wider group">
                    <span>Get a Quote</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </LenisProvider>
  );
}
