"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ExternalLink, Sparkles, Layers } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  techStack: string[];
  description: string;
  gradient: string;
  metrics: string;
  bgImage: string;
}

const projectsList: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Aura Neural Assistant",
    category: "AI & WORKFLOW AUTOMATION",
    techStack: ["Next.js", "OpenAI RAG", "Python API", "Tailwind"],
    description: "Autonomous customer support & document analysis engine handling 50k+ daily queries with 99.4% precision.",
    gradient: "from-[#1F2E8C] via-[#1E8FBF] to-[#12D6C4]",
    metrics: "85% Reduction in Ticket Response Time",
    bgImage: "/BG/ChatGPT Image Aug 1, 2026, 10_45_38 AM.png",
  },
  {
    id: "proj-2",
    title: "Vortex 3D Fintech Suite",
    category: "BESPOKE WEB DESIGN",
    techStack: ["Three.js", "WebGL Shaders", "React", "GSAP"],
    description: "Awwwards-recognized 3D interactive web platform for institutional asset managers.",
    gradient: "from-[#1E8FBF] via-[#12D6C4] to-[#5CF2E0]",
    metrics: "+320% User Session Duration",
    bgImage: "/BG/ChatGPT Image Aug 1, 2026, 10_44_54 AM.png",
  },
  {
    id: "proj-3",
    title: "Chronicle Executive Ebook",
    category: "PUBLISHING & GHOSTWRITING",
    techStack: ["EPUB 3.0", "KDP Print", "Adobe InDesign", "Typography"],
    description: "Bestselling technical strategy book ghostwritten, formatted, and published globally across Amazon & Apple Books.",
    gradient: "from-[#12D6C4] via-[#1F2E8C] to-[#1E8FBF]",
    metrics: "#1 Bestseller in Tech Leadership",
    bgImage: "/BG/ChatGPT Image Aug 1, 2026, 10_45_15 AM.png",
  },
  {
    id: "proj-4",
    title: "Pulse Enterprise AI Hub",
    category: "AI & WORKFLOW AUTOMATION",
    techStack: ["Next.js", "GraphQL", "Node.js", "Python"],
    description: "Enterprise AI workflow hub synchronizing multi-agent data streams and automated document pipelines.",
    gradient: "from-[#1F2E8C] via-[#12D6C4] to-[#5CF2E0]",
    metrics: "1,200 Hours Saved Monthly",
    bgImage: "/BG/Disc.png",
  },
];

export default function PortfolioHorizontalSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = targetRef.current;
    const trigger = triggerRef.current;
    if (!container || !trigger) return;

    const totalWidth = container.scrollWidth - window.innerWidth + 100;

    const pin = gsap.to(container, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section id="work" ref={triggerRef} className="relative w-full min-h-screen bg-[#0A0E1A] text-white overflow-hidden py-20">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#12D6C4]">
            03 / FEATURED WORK
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-white mt-1">
            Horizontal <span className="italic text-gradient-glow">Scroll Gallery</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <Layers className="w-4 h-4 text-[#12D6C4]" />
          <span>DRAG OR SCROLL HORIZONTALLY</span>
        </div>
      </div>

      {/* Horizontal Track Container */}
      <div ref={targetRef} className="flex gap-8 pl-6 md:pl-12 w-max items-center py-6">
        {projectsList.map((project, idx) => (
          <div
            key={project.id}
            className="w-[85vw] sm:w-[480px] h-[540px] rounded-3xl glass-panel p-8 flex flex-col justify-between border border-[#12D6C4]/30 relative overflow-hidden group transition-transform duration-500 hover:-translate-y-3"
            style={{
              background: "linear-gradient(145deg, rgba(18,24,41,0.9) 0%, rgba(10,14,26,0.95) 100%)",
            }}
          >
            {/* Background Kinetic Shader Glow */}
            <div
              className={`absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br ${project.gradient} opacity-15 blur-3xl group-hover:opacity-30 transition-opacity duration-500`}
            />

            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-[#12D6C4]/10 text-[#12D6C4] border border-[#12D6C4]/20">
                  {project.category}
                </span>
                <span className="font-syne font-bold text-sm text-gray-500">0{idx + 1}</span>
              </div>

              <h3 className="font-syne font-bold text-3xl text-white mb-3 tracking-tight group-hover:text-[#12D6C4] transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Middle Preview Card Framing with /BG/ Motif Image */}
            <div className="w-full h-44 rounded-2xl border border-white/15 relative overflow-hidden flex items-center justify-center p-4 bg-black/40 group-hover:border-[#12D6C4]/40 transition-colors">
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent opacity-80" />
              
              <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
                <Sparkles className="w-6 h-6 text-[#12D6C4] mb-2 animate-pulse" />
                <span className="text-xs font-syne font-bold text-white tracking-wider">
                  {project.metrics}
                </span>
              </div>
            </div>

            {/* Bottom Tech Stack Tags & CTA */}
            <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono text-gray-400">
                    #{tech}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="p-2.5 rounded-full bg-[#12D6C4]/10 text-[#12D6C4] hover:bg-[#12D6C4] hover:text-[#0A0E1A] transition-all duration-300"
                aria-label={`View ${project.title} case study`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

