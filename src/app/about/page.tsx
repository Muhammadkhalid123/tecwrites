"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundMotionSystem from "@/components/BackgroundMotionSystem";
import LenisProvider from "@/components/LenisProvider";
import { Sparkles, Code2, Feather, Cpu, ShieldCheck, Zap, ArrowUpRight, Star } from "lucide-react";

const values = [
  "Creative Precision", "Editorial Craft", "Transparent Process",
  "Scalable Code", "Human-Centered Design", "Zero Compromise",
  "Creative Precision", "Editorial Craft", "Transparent Process",
  "Scalable Code", "Human-Centered Design", "Zero Compromise",
];

export default function AboutApproachPage() {
  return (
    <LenisProvider>
      {/* Top Accent Stripe */}
      <div className="page-accent-top" />

      <BackgroundMotionSystem />
      <Header />

      <main className="relative z-10 min-h-screen pt-36 pb-24 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* ── PAGE HERO HEADER ── */}
          <div className="relative flex flex-col space-y-6 max-w-4xl overflow-hidden rounded-3xl bg-[#0D1322] border border-[#12D6C4]/35 p-8 md:p-12 shadow-2xl">
            {/* Section background image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <img
                src="/BG/ChatGPT Image Aug 1, 2026, 10_45_29 AM.png"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover object-center opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A] via-[#0A0E1A]/85 to-transparent" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="page-enter inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161F33] border border-[#12D6C4]/40 w-fit text-xs font-mono text-[#12D6C4] font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>THE TECWRITES MANIFESTO &amp; APPROACH</span>
              </div>

              <h1 className="page-enter page-enter-delay-1 font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white">
                <span className="block text-white">WHERE THE PEN MEETS</span>
                <span className="block italic shimmer-text">THE ALGORITHM.</span>
              </h1>

              <p className="page-enter page-enter-delay-2 text-gray-200 font-light text-lg md:text-xl leading-relaxed max-w-3xl">
                We bridge the gap between creative storytelling and hard-line software engineering. Every line of code we ship is built with editorial craft, speed, and architectural scalability.
              </p>
            </div>
          </div>

          {/* ── VALUES MARQUEE RIBBON ── */}
          <div className="page-enter page-enter-delay-2 relative overflow-hidden py-4 border-y border-[#12D6C4]/30 bg-[#0D1322]">
            <div className="flex gap-8 w-max" style={{ animation: "marquee-scroll 30s linear infinite" }}>
              {values.map((v, i) => (
                <span key={i} className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-gray-300 whitespace-nowrap font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12D6C4]" />
                  {v}
                </span>
              ))}
            </div>
            <style>{`
              @keyframes marquee-scroll {
                from { transform: translateX(0); }
                to   { transform: translateX(-50%); }
              }
            `}</style>
          </div>

          {/* ── DUAL CORE PHILOSOPHY CARDS ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 page-enter page-enter-delay-3">
            {/* Card 1: Code */}
            <div className="p-10 rounded-3xl bg-[#0D1322] border border-[#12D6C4]/35 space-y-6 relative overflow-hidden group hover:border-[#12D6C4]/60 transition-all duration-500 hover:-translate-y-1 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F2E8C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-[#161F33] border border-[#12D6C4]/40 flex items-center justify-center text-[#12D6C4]">
                <Code2 className="w-7 h-7" />
              </div>
              <h2 className="font-serif text-3xl text-white font-semibold">Engineering Standard</h2>
              <p className="text-gray-200 font-light text-base leading-relaxed">
                We design custom web platforms, multi-model AI workflows, and cross-platform apps using modern serverless architectures, WebGL momentum graphics, and type-safe systems that load under 100ms.
              </p>
              <div className="pt-4 border-t border-gray-700 flex flex-wrap gap-2 text-xs font-mono text-gray-300">
                <span>TypeScript</span> &bull; <span>Next.js 16</span> &bull; <span>Three.js</span> &bull; <span>Python LLMs</span>
              </div>
            </div>

            {/* Card 2: Craft */}
            <div className="p-10 rounded-3xl bg-[#0D1322] border border-[#1E8FBF]/40 space-y-6 relative overflow-hidden group hover:border-[#1E8FBF]/70 transition-all duration-500 hover:-translate-y-1 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E8FBF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-[#161F33] border border-[#1E8FBF]/40 flex items-center justify-center text-[#1E8FBF]">
                <Feather className="w-7 h-7" />
              </div>
              <h2 className="font-serif text-3xl text-white font-semibold">Editorial Craft</h2>
              <p className="text-gray-200 font-light text-base leading-relaxed">
                Code without craft is cold. We treat every layout, typography pair, and brand publication like a luxury print release—ensuring your digital identity feels authoritative, memorable, and human.
              </p>
              <div className="pt-4 border-t border-gray-700 flex flex-wrap gap-2 text-xs font-mono text-gray-300">
                <span>Syne &amp; Fraunces Types</span> &bull; <span>Self Publishing Suite</span> &bull; <span>Grid Systems</span>
              </div>
            </div>
          </div>

          {/* ── METHODOLOGY RIBBON TIMELINE ── */}
          <div className="space-y-12 pt-12 border-t border-gray-800 page-enter page-enter-delay-4">
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-mono tracking-widest text-[#12D6C4] uppercase font-bold">4-STEP METHODOLOGY</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-normal">How We Execute</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery & Blueprint", desc: "We analyze your business architecture, define technical constraints, and map out the user flow and AI data model.", icon: Cpu },
                { step: "02", title: "Prototyping & Motion", desc: "High-fidelity UI designs with smooth momentum physics, micro-interactions, and WebGL ambient motifs.", icon: Zap },
                { step: "03", title: "Production Engineering", desc: "Full-stack development with Next.js, API integrations, LLM fine-tuning, and zero-compromise optimization.", icon: Code2 },
                { step: "04", title: "Deployment & Scale", desc: "Edge server deployment, automated SEO indexing, monitoring, and ongoing publishing support.", icon: ShieldCheck },
              ].map((m, idx) => {
                const IconComp = m.icon;
                return (
                  <div key={idx} className="p-8 rounded-2xl bg-[#0D1322] border border-gray-700 space-y-4 relative group hover:border-[#12D6C4]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl">
                    <span className="font-mono text-3xl font-bold text-[#12D6C4]">{m.step}</span>
                    <IconComp className="w-5 h-5 text-gray-400 group-hover:text-[#12D6C4] transition-colors" />
                    <h3 className="font-serif text-xl text-white font-semibold">{m.title}</h3>
                    <p className="text-gray-300 text-sm font-light leading-relaxed">{m.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── FOUNDER CARD ── */}
          <div className="page-enter page-enter-delay-5 p-10 md:p-14 rounded-3xl bg-[#0D1322] border border-[#12D6C4]/35 flex flex-col md:flex-row items-center gap-10 shadow-2xl">
            <div className="relative w-28 h-28 rounded-2xl shrink-0 bg-gradient-to-br from-[#1F2E8C] via-[#1E8FBF] to-[#12D6C4] p-[2px]">
              <div className="w-full h-full rounded-[14px] bg-[#0A0E1A] flex items-center justify-center">
                <span className="font-serif text-4xl text-white select-none">TW</span>
              </div>
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-xs font-mono tracking-widest text-[#12D6C4] uppercase font-bold">Studio Lead</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#12D6C4] text-[#12D6C4]" />
                  ))}
                </div>
              </div>
              <h3 className="font-serif text-3xl text-white font-semibold">The TecWrites Team</h3>
              <p className="text-gray-200 font-light text-base leading-relaxed max-w-2xl">
                We&apos;re a distributed studio of engineers, designers, and editorial experts. Our founders spent years at the intersection of technology and publishing — which is exactly how TecWrites was born.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs font-mono text-gray-300">
                <span className="px-3 py-1 rounded-full bg-[#161F33] border border-gray-700">Est. 2021</span>
                <span className="px-3 py-1 rounded-full bg-[#161F33] border border-gray-700">Los Angeles, CA</span>
                <span className="px-3 py-1 rounded-full bg-[#161F33] border border-gray-700">Global Remote</span>
              </div>
            </div>
          </div>

          {/* ── CTA STRIP ── */}
          <div className="p-12 rounded-3xl bg-[#0D1322] border border-[#12D6C4]/40 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#1F2E8C]/30 via-[#1E8FBF]/20 to-[#0D1322] page-enter page-enter-delay-5 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-serif text-3xl text-white font-semibold">Ready to elevate your digital presence?</h3>
              <p className="text-gray-200 font-light text-sm">Let&apos;s discuss how code and craft can transform your brand.</p>
            </div>
            <a
              href="/contact"
              className="liquid-cta-btn px-8 py-4 rounded-full font-syne text-xs uppercase tracking-widest font-bold inline-flex items-center gap-3 shrink-0 text-white shadow-xl"
            >
              <span>Schedule a Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </LenisProvider>
  );
}
