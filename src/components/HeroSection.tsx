"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TextPlugin from "gsap/dist/TextPlugin";
import { ArrowDownRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleLeftRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);

  const projectsRef = useRef<HTMLSpanElement>(null);
  const booksRef = useRef<HTMLSpanElement>(null);
  const clientsRef = useRef<HTMLSpanElement>(null);
  const yearsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    const targetCounts = { projects: 500, books: 200, clients: 50, years: 5 };

    const ctx = gsap.context(() => {
      // Typewriter animation on word CODE using GSAP TextPlugin
      gsap.to(".typewriter-code", {
        text: "CODE",
        duration: 1.6,
        ease: "none",
        delay: 0.6,
      });

      // Animated stat counters via direct DOM mutation (zero React re-renders)
      gsap.to(
        {},
        {
          duration: 2.5,
          ease: "power2.out",
          onUpdate: function () {
            const p = this.progress();
            if (projectsRef.current) projectsRef.current.textContent = `${Math.floor(p * targetCounts.projects)}+`;
            if (booksRef.current) booksRef.current.textContent = `${Math.floor(p * targetCounts.books)}+`;
            if (clientsRef.current) clientsRef.current.textContent = `${Math.floor(p * targetCounts.clients)}+`;
            if (yearsRef.current) yearsRef.current.textContent = `${Math.floor(p * targetCounts.years)}+`;
          },
        }
      );

      // Kinetic typography warp on scroll
      if (titleLeftRef.current) {
        gsap.to(titleLeftRef.current, {
          yPercent: 15,
          opacity: 0.85,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Parallax on bg image
      if (bgImgRef.current) {
        gsap.to(bgImgRef.current, {
          yPercent: 18,
          scale: 1.08,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // Entrance stagger animations
      gsap.fromTo(".hero-badge", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.2 });
      gsap.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.38 });
      gsap.fromTo(".hero-sub", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.0, ease: "power3.out", delay: 0.58 });
      gsap.fromTo(".hero-stats", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.72 });
      gsap.fromTo(".hero-cta", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.85, ease: "back.out(1.7)", delay: 0.9 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen w-full pt-32 pb-16 px-6 md:px-12 flex flex-col justify-between items-center overflow-hidden text-center"
    >

      {/* ── Section-scoped Background Image (parallax) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          ref={bgImgRef}
          src="/BG/hero.png"
          alt=""
          decoding="async"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 opacity-20 transform-gpu translate-z-0"
        />
        {/* Deep vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/10 to-white/85 dark:from-[#0A0E1A]/72 dark:via-[#0A0E1A]/20 dark:to-[#0A0E1A]/90" />
        {/* Radial teal spotlight */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(18,214,196,0.08) 0%, transparent 70%)" }}
        />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(rgba(18,214,196,1) 1px, transparent 1px), linear-gradient(90deg, rgba(18,214,196,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ── Soft Radial Ambient Spotlight ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white dark:from-[#0A0E1A]/40 dark:via-transparent dark:to-[#0A0E1A] z-[1] pointer-events-none" />

      {/* ── Centered Hero Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto flex flex-col items-center justify-center text-center space-y-8">

        {/* Studio Category Badge */}
        <div className="hero-badge inline-flex items-center gap-3 px-5 py-2 rounded-full glass-panel border border-[#12D6C4]/40 shadow-lg shadow-[#12D6C4]/10">
          <Sparkles className="w-4 h-4 text-[#12D6C4] animate-pulse" />
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-gray-800 dark:text-gray-200">
            Hybrid Creative Technology &amp; Publishing Studio
          </span>
        </div>

        <h1
          ref={titleLeftRef}
          className="hero-title font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[0.95] max-w-5xl mx-auto select-none"
        >
          <span className="block text-[#0B1220] dark:text-white">
            WHERE <span className="typewriter-code font-mono inline-block min-w-[3ch] text-[#12D6C4] drop-shadow-[0_0_20px_rgba(18,214,196,0.5)]"></span>
            <span className="typewriter-cursor text-[#12D6C4] animate-pulse font-mono font-light ml-0.5">|</span>
          </span>
          <span className="block italic text-gradient-brand shimmer-text">MEETS CRAFT</span>
        </h1>

        {/* Bespoke Editorial Paragraph */}
        <p className="hero-sub max-w-2xl text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-sans font-light mx-auto">
          We merge high-performance{" "}
          <span className="font-semibold text-gray-900 dark:text-white">AI &amp; Web Engineering</span>{" "}
          with refined{" "}
          <span className="font-serif italic text-[#1E8FBF]">Editorial Publishing</span>.
          Transform your business through custom automation, bespoke web architectures, and publish-ready digital media.
        </p>

        {/* Counter Numbers Grid */}
        <div
          ref={statsRef}
          className="hero-stats grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 py-6 px-8 rounded-3xl glass-panel border border-[#1E8FBF]/20 max-w-3xl mx-auto w-full shadow-xl"
        >
          <div className="flex flex-col items-center">
            <span ref={projectsRef} className="font-syne font-bold text-3xl md:text-4xl text-gradient-brand">0+</span>
            <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Projects Delivered</span>
          </div>
          <div className="flex flex-col items-center">
            <span ref={booksRef} className="font-syne font-bold text-3xl md:text-4xl text-gradient-brand">0+</span>
            <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Books Published</span>
          </div>
          <div className="flex flex-col items-center">
            <span ref={clientsRef} className="font-syne font-bold text-3xl md:text-4xl text-gradient-brand">0+</span>
            <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Active Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span ref={yearsRef} className="font-syne font-bold text-3xl md:text-4xl text-gradient-brand">0+</span>
            <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Years Experience</span>
          </div>
        </div>

        {/* Liquid Hover CTA */}
        <div className="hero-cta pt-2">
          <a
            href="#services"
            className="liquid-cta-btn inline-flex items-center gap-4 px-10 py-5 rounded-full font-syne text-sm uppercase tracking-widest font-bold shadow-2xl shadow-[#1F2E8C]/30 hover:shadow-[#12D6C4]/50 hover:scale-105 transition-all duration-300 group"
          >
            <span>Explore Our Craft</span>
            <ArrowDownRight className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:rotate-45" />
          </a>
        </div>

      </div>

      {/* Hero Bottom Scroll Indicator */}
      <div className="relative z-10 w-full flex items-center justify-between pt-8 border-t border-[#1E8FBF]/15 max-w-7xl mx-auto text-xs font-mono text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#12D6C4] animate-ping" />
          <span>EST. 2021 — LOS ANGELES &amp; GLOBAL</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span>SCROLL TO UNSTACK SERVICES</span>
          <div className="w-4 h-6 rounded-full border border-gray-400 dark:border-gray-600 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#12D6C4] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
