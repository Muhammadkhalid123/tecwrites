"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Quote } from "lucide-react";

interface TestimonialFragment {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: TestimonialFragment[] = [
  {
    quote: "TecWrites rebuilt our enterprise platform with zero downtime and unprecedented 3D interactive polish.",
    author: "Elena Rostova",
    role: "VP of Digital Engineering",
    company: "Vortex Labs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote: "Their AI workflow automation cut our content processing cycle from 14 days down to 6 hours.",
    author: "Marcus Chen",
    role: "Chief Product Officer",
    company: "OmniTech Global",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote: "The ebook design and Amazon KDP publishing execution surpassed every bestseller benchmark we set.",
    author: "Dr. Sarah Jenkins",
    role: "Author & Tech Strategist",
    company: "Chronicle Press",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote: "Code meets craft isn’t just a slogan for TecWrites — it’s evident in every line of WebGL they write.",
    author: "David Vance",
    role: "Creative Director",
    company: "Aura Studio",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
];

export default function TestimonialsMarqueeSection() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    // Parallax marquee speed driven by scroll (real-time 60FPS)
    gsap.to(row1Ref.current, {
      xPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(row2Ref.current, {
      xPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="testimonials" ref={containerRef} className="relative w-full py-28 overflow-hidden bg-brand-surface dark:bg-[#0B0F1D]">
      
      {/* Section Tag */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#12D6C4] inline-flex items-center gap-2">
          <Quote className="w-4 h-4" /> 04 / CLIENT VOICES
        </span>
        <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#0B1220] dark:text-white mt-2">
          Marquee <span className="italic text-gradient-brand">Fragments</span>
        </h2>
      </div>

      {/* Row 1: Leftward Parallax Marquee */}
      <div className="mb-8 overflow-hidden">
        <div ref={row1Ref} className="marquee-content flex gap-8 whitespace-nowrap items-center">
          {testimonials.concat(testimonials).map((t, idx) => (
            <div
              key={`r1-${idx}`}
              className="inline-flex items-center gap-6 px-8 py-6 rounded-full glass-panel border border-[#12D6C4]/20 shadow-md shrink-0"
            >
              <img
                src={t.avatar}
                alt={t.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#12D6C4]"
              />
              <div className="flex flex-col">
                <span className="font-serif italic text-lg md:text-xl text-[#0B1220] dark:text-white max-w-lg truncate">
                  “{t.quote}”
                </span>
                <span className="text-xs font-mono text-[#1E8FBF] mt-1">
                  {t.author} — {t.role}, {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward Parallax Marquee */}
      <div className="overflow-hidden">
        <div ref={row2Ref} className="marquee-content flex gap-8 whitespace-nowrap items-center -translate-x-1/4">
          {testimonials.concat(testimonials).reverse().map((t, idx) => (
            <div
              key={`r2-${idx}`}
              className="inline-flex items-center gap-6 px-8 py-6 rounded-full glass-panel border border-[#1E8FBF]/20 shadow-md shrink-0"
            >
              <img
                src={t.avatar}
                alt={t.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#1E8FBF]"
              />
              <div className="flex flex-col">
                <span className="font-serif italic text-lg md:text-xl text-[#0B1220] dark:text-white max-w-lg truncate">
                  “{t.quote}”
                </span>
                <span className="text-xs font-mono text-[#12D6C4] mt-1">
                  {t.author} — {t.role}, {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
