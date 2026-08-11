"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { Compass, Lightbulb, Code2, Rocket, ArrowRight, Sparkles } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Compass;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Alignment",
    subtitle: "DEEP AUDIT & BRAND DISCOVERY",
    description: "We analyze your business architecture, target audience, and editorial vision to formulate an unassailable tech & publishing roadmap.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Strategy & Architecture",
    subtitle: "SYSTEM DESIGN & PROTOTYPING",
    description: "Engineering interactive wireframes, 3D component systems, and AI model orchestration prompts prior to full code execution.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Creation & Engineering",
    subtitle: "CODE & EDITORIAL CRAFT",
    description: "Building production-ready software, high-performance web activations, and print-ready manuscript layouts with rigorous QA testing.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch & Growth",
    subtitle: "DEPLOYMENT & OPTIMIZATION",
    description: "Global cloud deployment, Amazon KDP release, continuous performance monitoring, and automated scaling integrations.",
    icon: Rocket,
  },
];

export default function ProcessRibbonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLButtonElement[]>([]);
  const slideRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const section = sectionRef.current;
    const slides = slideRefs.current.filter(Boolean);
    const navItems = navItemsRef.current.filter(Boolean);
    if (!section || !slides.length || !navItems.length) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      const myST = ScrollTrigger.create({
        animation: tl,
        id: "st",
        trigger: section,
        start: "top top",
        end: `+=${(slides.length - 1) * 150}%`,
        pin: true,
        scrub: 0.8,
        snap: {
          snapTo: 1 / (slides.length - 1 || 1),
          duration: 0.5,
          delay: 0.1,
        },
      });

      // 1. Initial positions: Slide 0 active, Slides 1-3 hidden below (yPercent 125, scale 0.5, opacity 0)
      slides.forEach((slide, idx) => {
        if (idx === 0) {
          gsap.set(slide, { yPercent: 0, opacity: 1, scale: 1, zIndex: 10 });
        } else {
          gsap.set(slide, { yPercent: 125, opacity: 0, scale: 0.5, zIndex: 10 + idx });
        }
      });

      // 2. Initial nav states: Nav 0 active cyan glow
      navItems.forEach((item, idx) => {
        if (idx === 0) {
          gsap.set(item, {
            background: "linear-gradient(135deg, #12D6C4 0%, #1E8FBF 100%)",
            color: "#ffffff",
            boxShadow: "0 0 24px rgba(18, 214, 196, 0.45)",
            borderColor: "rgba(18, 214, 196, 0.8)",
          });
        } else {
          gsap.set(item, {
            background: "rgba(255, 255, 255, 0.05)",
            color: "#94a3b8",
            boxShadow: "0 0 0px transparent",
            borderColor: "rgba(255, 255, 255, 0.1)",
          });
        }

        // Click handler to smooth scroll to label position
        item.addEventListener("click", (e) => {
          e.preventDefault();
          const targetLabel = `our-work-${idx + 1}`;
          if (tl.labels[targetLabel] !== undefined) {
            const percent = tl.labels[targetLabel] / tl.totalDuration();
            const scrollPos = myST.start + (myST.end - myST.start) * percent;
            gsap.to(window, { duration: 1.2, scrollTo: scrollPos, ease: "power2.out" });
          }
        });
      });

      // Label 1 at start
      tl.add("our-work-1", 0);

      // 3. Build sequential timeline steps for slides 1..3
      for (let i = 1; i < slides.length; i++) {
        const item = navItems[i];
        const prevItem = navItems[i - 1];
        const slide = slides[i];
        const prevSlide = slides[i - 1];

        tl.to(
          item,
          {
            background: "linear-gradient(135deg, #12D6C4 0%, #1E8FBF 100%)",
            color: "#ffffff",
            boxShadow: "0 0 24px rgba(18, 214, 196, 0.45)",
            borderColor: "rgba(18, 214, 196, 0.8)",
            duration: 0.8,
          },
          `+=0.3`
        )
          .to(
            slide,
            {
              opacity: 1,
              yPercent: 0,
              scale: 1,
              duration: 0.8,
            },
            "<"
          )
          .to(
            prevItem,
            {
              background: "rgba(255, 255, 255, 0.05)",
              color: "#94a3b8",
              boxShadow: "0 0 0px transparent",
              borderColor: "rgba(255, 255, 255, 0.1)",
              duration: 0.8,
            },
            "<"
          )
          .to(
            prevSlide,
            {
              opacity: 0,
              yPercent: -125,
              scale: 0.5,
              duration: 0.8,
            },
            "<"
          )
          .add("our-work-" + (i + 1));
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="our-work relative w-full h-screen min-h-screen py-16 px-6 md:px-12 overflow-hidden bg-[#0A0E1A] text-white flex flex-col justify-between select-none"
    >
      {/* Background Motif Image */}
      <div className="absolute inset-0 opacity-20 pointer-events-none transform-gpu">
        <Image
          src="/BG/ChatGPT Image Aug 1, 2026, 10_45_29 AM.png"
          alt="Process Motif"
          fill
          className="object-cover object-center brightness-90 transform-gpu translate-z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E1A]/95 via-[#0A0E1A]/85 to-[#0A0E1A]/95 backdrop-blur-[2px]" />
      </div>

      {/* Main Vertical Carousel Area */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center my-auto relative z-10">
        
        {/* Left Column: Heading & Vertical Nav List (carousel__nav) */}
        <div className="lg:col-span-5 flex flex-col space-y-6 max-w-md w-full mx-auto lg:mx-0">
          
          {/* Left-Aligned Bigger Font 'Our Methodology' Heading */}
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#12D6C4]/30 text-xs font-mono text-[#12D6C4] font-semibold uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#12D6C4] animate-pulse" />
              <span>02 // PROCESS</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.05]">
              Our <span className="italic text-gradient-glow">Methodology</span>
            </h2>
          </div>

          {/* Vertical Nav List */}
          <div className="carousel__nav flex flex-col space-y-3.5 w-full">
            {processSteps.map((step, i) => (
              <button
                key={step.number}
                ref={(el) => {
                  if (el) navItemsRef.current[i] = el;
                }}
                data-target={`our-work-${i + 1}`}
                className="carousel__nav__item group w-full text-left px-5 py-4 rounded-2xl border border-white/10 bg-white/5 text-gray-400 font-sans transition-all duration-500 flex items-center justify-between shadow-md cursor-pointer hover:border-[#12D6C4]/50"
              >
                <div className="flex items-center gap-4">
                  <span className="font-syne font-bold text-lg opacity-80 group-hover:text-white">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="font-syne font-bold text-sm md:text-base tracking-wide text-current">
                      {step.title}
                    </h4>
                    <span className="text-[10px] font-mono tracking-widest uppercase opacity-70 block">
                      {step.subtitle}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#12D6C4]" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Pinned Vertical Card Slides (carousel__item) */}
        <div className="lg:col-span-7 relative w-full max-w-2xl h-[380px] md:h-[420px] mx-auto flex items-center justify-center">
          {processSteps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                ref={(el) => {
                  if (el) slideRefs.current[i] = el;
                }}
                className="carousel__item absolute inset-0 w-full h-full p-8 md:p-10 rounded-3xl border border-[#12D6C4]/35 bg-[#0D1322] text-white shadow-2xl flex flex-col justify-between transform-gpu"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-syne font-bold text-4xl text-gradient-glow">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-[#12D6C4]/15 border border-[#12D6C4]/30 text-[#12D6C4]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-xs font-mono tracking-widest uppercase text-[#12D6C4] block mb-2 font-semibold">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-normal text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#12D6C4]">
                    <span className="w-2 h-2 rounded-full bg-[#12D6C4] animate-ping" />
                    <span className="font-semibold uppercase">METHODOLOGY STAGE {i + 1} // ACTIVE</span>
                  </div>
                  <span className="text-gray-400 font-mono text-[10px]">TECWRITES WORKFLOW</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

