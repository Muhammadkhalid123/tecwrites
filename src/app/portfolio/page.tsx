"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundMotionSystem from "@/components/BackgroundMotionSystem";
import LenisProvider from "@/components/LenisProvider";
import { ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    id: "neural-cms",
    title: "Neural Content Engine",
    category: "AI & Automation",
    tag: "AI & AUTOMATION",
    desc: "Autonomous LLM-driven publishing platform automating editorial workflows, multi-channel distribution, and automated SEO translation for global media outlets.",
    metrics: "+340% Production Velocity",
    img: "/BG/ChatGPT Image Aug 1, 2026, 10_44_38 AM.png",
    tech: ["Next.js 16", "OpenAI GPT-4", "Vector DB", "TailwindCSS"],
    link: "#",
  },
  {
    id: "lumina-web",
    title: "Lumina Financial Portal",
    category: "Web Engineering",
    tag: "BESPOKE WEB",
    desc: "Ultra-fast WebGL financial platform with sub-10ms real-time chart rendering, kinetic glass typography, and institutional-grade encryption.",
    metrics: "<10ms Latency | 99.99% Uptime",
    img: "/BG/ChatGPT Image Aug 1, 2026, 10_44_54 AM.png",
    tech: ["React", "Three.js", "WebSockets", "GSAP"],
    link: "#",
  },
  {
    id: "kandle-publishing",
    title: "Kandle Direct Publishing",
    category: "Publishing & Media",
    tag: "EDITORIAL & EBOOKS",
    desc: "Complete digital & print publishing pipeline powering 200+ hardcover book releases, interactive e-readers, and global ISBN distribution.",
    metrics: "200+ Books Released Worldwide",
    img: "/BG/ChatGPT Image Aug 1, 2026, 10_45_03 AM.png",
    tech: ["Epub3", "Adobe InDesign", "Next.js", "Stripe API"],
    link: "#",
  },
  {
    id: "hyper-app",
    title: "Aura Neural Assistant",
    category: "AI & Automation",
    tag: "AI & AUTOMATION",
    desc: "Enterprise generative AI voice & text assistant integrated with real-time vector search, knowledge base streaming, and automated workflow triggers.",
    metrics: "120k Active Enterprise Users",
    img: "/BG/ChatGPT Image Aug 1, 2026, 10_45_15 AM.png",
    tech: ["Next.js 16", "OpenAI GPT-4", "FastAPI", "PostgreSQL"],
    link: "#",
  },
  {
    id: "nexus-automations",
    title: "Nexus Enterprise Workflows",
    category: "AI & Automation",
    tag: "AI & AUTOMATION",
    desc: "Enterprise Zapier & Make custom node integrations replacing manual data entry for a Fortune 500 logistics firm.",
    metrics: "1,200 Hours Saved / Mo",
    img: "/BG/ChatGPT Image Aug 1, 2026, 10_45_22 AM.png",
    tech: ["Python", "Docker", "Node.js", "Redis"],
    link: "#",
  },
  {
    id: "cyber-editorial",
    title: "Verve Fashion Journal",
    category: "Web Engineering",
    tag: "BESPOKE WEB",
    desc: "Horizontal scroll editorial magazine blending high-fashion photography with smooth interactive WebGL particle transitions.",
    metrics: "Awwwards Site of the Day Winner",
    img: "/BG/ChatGPT Image Aug 1, 2026, 10_44_38 AM.png",
    tech: ["Next.js", "GSAP ScrollTrigger", "WebGL", "Lenis"],
    link: "#",
  },
];

const categories = ["All", "AI & Automation", "Web Engineering", "Publishing & Media"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <LenisProvider>
      <div className="page-accent-top" />
      <BackgroundMotionSystem />
      <Header />

      <main className="relative z-10 min-h-screen pt-36 pb-24 px-6 md:px-12 text-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto">
          
          {/* PAGE HERO HEADER */}
          <div className="flex flex-col space-y-6 max-w-4xl mb-12">
            <div className="page-enter inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#12D6C4]/40 w-fit text-xs font-mono text-[#0D9488] dark:text-[#12D6C4] font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED CASE STUDIES &amp; ARCHITECTURES</span>
            </div>

            <h1 className="page-enter page-enter-delay-1 font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
              <span className="block text-white">CRAFTED WITH</span>
              <span className="block italic shimmer-text">ENGINEERING PRECISION.</span>
            </h1>

            <p className="page-enter page-enter-delay-2 text-gray-700 dark:text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Explore our portfolio of high-impact AI systems, bespoke digital platforms, and publish-ready media releases designed for visionary brands.
            </p>
          </div>

          {/* STATS BAR */}
          <div className="page-enter page-enter-delay-2 grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 p-6 rounded-2xl glass-panel border border-[#12D6C4]/20">
            {[
              { label: "Projects Shown", value: "6" },
              { label: "Total Delivered", value: "500+" },
              { label: "Industries Served", value: "12+" },
              { label: "Avg. Satisfaction", value: "4.9★" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-syne font-bold text-2xl text-[#12D6C4]">{s.value}</p>
                <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* FILTER BUTTONS */}
          <div className="page-enter page-enter-delay-3 flex flex-wrap items-center gap-3 pb-12 border-b border-gray-800/80 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-[#12D6C4] text-black font-bold shadow-lg shadow-[#12D6C4]/25 scale-105"
                    : "glass-panel text-gray-400 hover:text-white border border-gray-800 hover:border-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 flex flex-col justify-between hover:border-[#12D6C4]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1F2E8C]/30"
              >
                {/* Visual UI Mockup Container */}
                <div className="relative w-full h-72 md:h-80 overflow-hidden bg-gradient-to-br from-[#1F2E8C]/25 via-[#0A0E1A] to-[#12D6C4]/15 p-6 flex flex-col justify-between select-none border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-[#5CF2E0] uppercase tracking-widest">
                      {project.tag}
                    </div>
                  </div>

                  <div className="my-auto space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="text-[10px] font-mono text-[#12D6C4] tracking-widest uppercase block">CASE STUDY // {project.category.toUpperCase()}</span>
                    <h3 className="font-serif text-xl text-white font-bold">{project.title}</h3>
                    <p className="text-xs text-gray-300 line-clamp-2 font-light">{project.desc}</p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-2">
                    <span>ARCHITECTURE :: VERIFIED</span>
                    <span className="text-[#12D6C4]">{project.metrics}</span>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white group-hover:text-[#12D6C4] transition-colors mb-3">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                      {project.desc}
                    </p>

                    <div className="inline-block text-xs font-mono font-semibold text-[#12D6C4] bg-[#12D6C4]/10 px-3 py-1 rounded-md border border-[#12D6C4]/20">
                      {project.metrics}
                    </div>
                  </div>

                  {/* Tech Stack Tags & CTA */}
                  <div className="pt-6 border-t border-gray-800 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="p-3 rounded-full glass-panel border border-white/20 text-white hover:text-black hover:bg-[#12D6C4] transition-all duration-300 group/btn"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </LenisProvider>
  );
}
