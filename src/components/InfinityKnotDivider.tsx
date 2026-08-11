"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function InfinityKnotDivider({ title = "WRITING MEETS CODE" }: { title?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 40%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-20 flex flex-col items-center justify-center overflow-hidden my-6 select-none"
    >
      {/* Full-Bleed Section Background Image (No card box frame) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/BG/ChatGPT Image Aug 1, 2026, 10_44_38 AM.png"
          alt="TecWrites Mesh Motif Background"
          className="w-full h-full object-cover object-center opacity-30 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-[#0A0E1A] dark:via-transparent dark:to-[#0A0E1A]" />
      </div>

      {/* Label Badge Floating in Center */}
      <div
        ref={titleRef}
        className="relative z-10 px-8 py-3 rounded-full glass-panel border border-[#12D6C4]/40 text-xs md:text-sm font-syne font-bold tracking-[0.3em] uppercase text-gradient-glow shadow-xl backdrop-blur-xl"
      >
        {title}
      </div>
    </div>
  );
}



