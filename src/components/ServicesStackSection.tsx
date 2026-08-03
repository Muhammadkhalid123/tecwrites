"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Observer from "gsap/dist/Observer";
import { ArrowRight, Sparkles, Bot, Code, BookOpen } from "lucide-react";

interface ServicePanel {
  id: string;
  badge: string;
  title: string;
  bgImage: string;
  insetImage: string;
  insetTag: string;
  href: string;
  pills: string[];
  ctaText: string;
  icon: typeof Bot;
}

const servicesData: ServicePanel[] = [
  {
    id: "ai-automation",
    badge: "01 // NEURAL & WORKFLOW INFRASTRUCTURE",
    title: "AI & Automation",
    bgImage: "/BG/AI.png",
    insetImage: "/BG/AI.png",
    insetTag: "AI AGENT // LIVE WORKFLOW",
    href: "/services#ai-automation",
    pills: ["Chatbots", "Workflow Automation", "24/7 Support", "Custom Integrations"],
    ctaText: "Explore AI & Automation",
    icon: Bot,
  },
  {
    id: "web-design",
    badge: "02 // INTERACTIVE DIGITAL PLATFORMS",
    title: "Web Design",
    bgImage: "/BG/web.png",
    insetImage: "/BG/web.png",
    insetTag: "WEBGL // BESPOKE CMS",
    href: "/services#web-engineering",
    pills: ["Responsive", "SEO Optimized", "Custom CMS", "E-commerce Ready"],
    ctaText: "Explore Web Design",
    icon: Code,
  },
  {
    id: "ebook-publishing",
    badge: "03 // EDITORIAL & MEDIA PUBLISHING",
    title: "Self Publishing",
    bgImage: "/BG/ebook.png",
    insetImage: "/BG/ebook.png",
    insetTag: "KANDLE MEDIA // HARDCOVER & EPUB",
    href: "https://www.selfpublishingconsultant.com/",
    pills: ["Cover Design", "Formatting", "Ghostwriting", "Distribution Ready"],
    ctaText: "Explore Self Publishing",
    icon: BookOpen,
  },
];

export default function ServicesStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<HTMLDivElement[]>([]);
  const bgImgRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Observer);

    const ctx = gsap.context(() => {
      const panels = panelRefs.current.filter(Boolean);
      const images = bgImgRefs.current.filter(Boolean);
      if (!panels || panels.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(panels.length - 1) * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
        },
      });

      // Set initial panel layering: Panel 0 at base, Panels 1 & 2 positioned below
      panels.forEach((panel, i) => {
        if (i === 0) {
          gsap.set(panel, { zIndex: 10, yPercent: 0 });
        } else {
          gsap.set(panel, { zIndex: 10 + i, yPercent: 100 });
        }
      });

      // Panel 1 (Web Design) slides smoothly over Panel 0
      tl.to(panels[1], { yPercent: 0, ease: "power1.inOut", duration: 1 })
        .fromTo(
          images[1],
          { scale: 1.12, opacity: 0.7 },
          { scale: 1.02, opacity: 0.85, ease: "none", duration: 1 },
          0
        );

      // Panel 2 (Ebook Publishing) slides smoothly over Panel 1
      tl.to(panels[2], { yPercent: 0, ease: "power1.inOut", duration: 1 })
        .fromTo(
          images[2],
          { scale: 1.12, opacity: 0.7 },
          { scale: 1.02, opacity: 0.85, ease: "none", duration: 1 },
          1
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="services-section relative w-full h-screen min-h-screen bg-white select-none overflow-hidden">
      <div className="relative w-full h-full">
        {servicesData.map((service, idx) => {
          const IconComp = service.icon;

          return (
            <div
              key={service.id}
              ref={(el) => {
                if (el) panelRefs.current[idx] = el;
              }}
              className="panel absolute inset-0 w-full h-screen min-h-screen flex flex-col justify-center overflow-hidden bg-white text-gray-900 border-b border-gray-200 shadow-2xl transform-gpu"
            >
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu">
                <img
                  ref={(el) => {
                    if (el) bgImgRefs.current[idx] = el;
                  }}
                  src={service.bgImage}
                  alt={service.title}
                  decoding="async"
                  aria-hidden="true"
                  className="absolute -top-[10%] inset-x-0 w-full h-[120%] object-cover object-center scale-105 opacity-85 brightness-95 transform-gpu translate-z-0"
                />
                <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/85 to-white/40 md:to-transparent pointer-events-none" />
                <div
                  className="absolute inset-0 z-[1] pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 55% 65% at 20% 40%, rgba(31,46,140,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 80% 60%, rgba(18,214,196,0.14) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-[0.03] z-[1]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(31,46,140,1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,46,140,1) 1px, transparent 1px)",
                    backgroundSize: "90px 90px",
                  }}
                />
              </div>

              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16">
                <div className="flex-1 max-w-2xl space-y-8">
                  <div className="panel-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#1F2E8C]/20 text-xs font-mono text-[#1F2E8C] font-semibold uppercase tracking-widest shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#1F2E8C]" />
                    <span>{service.badge}</span>
                  </div>
                  <h2 className="panel-headline font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 tracking-tight leading-[0.95] drop-shadow-sm">
                    {service.title}
                  </h2>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {service.pills.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="panel-pill px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-800 font-sans text-xs md:text-sm font-semibold tracking-wide hover:bg-gray-200 hover:border-[#1F2E8C]/30 transition-all duration-300 shadow-sm cursor-default select-none"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                  <div className="panel-cta pt-4">
                    <a
                      href={service.href}
                      className="group relative inline-flex items-center gap-3 font-syne text-sm md:text-base font-bold uppercase tracking-widest text-gray-900 hover:text-[#1F2E8C] transition-colors duration-300"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-5 h-5 text-[#1F2E8C] transition-transform duration-300 group-hover:translate-x-2" />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#1F2E8C] to-[#1E8FBF] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </div>
                </div>

                {/* ── 2. OFFSET INSET UI MOCKUP FRAME (Elevated Clean UI Card) ── */}
                <div className="panel-inset w-full lg:w-[48%] max-w-xl aspect-[4/3] rounded-3xl relative overflow-hidden bg-white border border-gray-200 shadow-2xl group shrink-0 lg:translate-y-4 p-6 flex flex-col justify-between select-none">

                  {/* Subtle Accent Glow Inside Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1F2E8C]/5 via-transparent to-[#12D6C4]/10 pointer-events-none" />

                  {/* Mockup Top Window Bar */}
                  <div className="relative z-10 flex items-center justify-between pb-3 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-[10px] font-mono text-[#1F2E8C] font-semibold uppercase tracking-widest">
                      {service.insetTag}
                    </div>
                  </div>

                  {/* Mockup Inner Content UI per Service */}
                  <div className="relative z-10 my-auto py-4 flex flex-col space-y-4">
                    {service.id === "ai-automation" && (
                      <div className="space-y-3 font-mono text-xs text-gray-800">
                        <div className="p-3.5 rounded-xl bg-gray-900 text-gray-100 border border-gray-800 flex items-center justify-between shadow-sm">
                          <span className="text-[#12D6C4] font-semibold">&gt; agent.executeWorkflow("audit_data")</span>
                          <span className="text-[10px] px-2.5 py-0.5 rounded bg-[#12D6C4]/20 border border-[#12D6C4]/40 text-[#12D6C4] font-bold">ACTIVE</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
                          <p className="font-semibold text-xs text-gray-900">Response Token Stream:</p>
                          <p className="text-gray-600 font-light text-[11px] leading-relaxed">"Processing 128 data streams... Neural pipeline synchronized with 0.04ms latency."</p>
                        </div>
                      </div>
                    )}

                    {service.id === "web-design" && (
                      <div className="space-y-3 font-sans text-xs">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-center shadow-sm">
                            <span className="block text-xl font-bold text-[#1F2E8C]">99/100</span>
                            <span className="text-[10px] text-gray-500 uppercase font-mono font-semibold">PERFORMANCE</span>
                          </div>
                          <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-center shadow-sm">
                            <span className="block text-xl font-bold text-[#1E8FBF]">60 FPS</span>
                            <span className="text-[10px] text-gray-500 uppercase font-mono font-semibold">3D WEBGL</span>
                          </div>
                          <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-center shadow-sm">
                            <span className="block text-xl font-bold text-gray-900">0.2s</span>
                            <span className="text-[10px] text-gray-500 uppercase font-mono font-semibold">LOAD TIME</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {service.id === "ebook-publishing" && (
                      <div className="space-y-3 font-serif text-xs">
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2 shadow-sm">
                          <span className="text-[10px] font-mono tracking-widest text-[#1F2E8C] font-semibold uppercase block">MANUSCRIPT PREVIEW</span>
                          <h4 className="text-lg text-gray-900 font-serif italic">"Chapter 01: The Algorithmic Craft"</h4>
                          <p className="text-gray-600 font-sans text-[11px] leading-relaxed">Formatted for EPUB3, Amazon KDP, &amp; Hardcover Print Edition.</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mockup Bottom Tag */}
                  <div className="relative z-10 flex items-center justify-between pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-900 font-semibold">
                      <IconComp className="w-4 h-4 text-[#1F2E8C]" />
                      <span className="tracking-wider uppercase">{service.id.toUpperCase()}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 font-semibold">STATUS :: LIVE</span>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
