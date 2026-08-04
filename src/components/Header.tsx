"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Calendar } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navEl = navRef.current;
    if (!navEl) return;

    const ctx = gsap.context(() => {
      // Continuous GSAP ScrollTrigger timeline interpolation on inner nav pill
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "140px top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })
        .to(navEl, {
          maxWidth: () => (window.innerWidth < 768 ? "92vw" : "620px"),
          marginTop: 12,
          borderRadius: 999,
          backgroundColor: "var(--nav-pill-bg)",
          borderColor: "var(--nav-pill-border)",
          boxShadow: "var(--nav-pill-shadow)",
          backdropFilter: "blur(20px) saturate(180%)",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 22,
          paddingRight: 22,
          ease: "power2.out",
        });
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Lock body scroll when overlay menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const navLinks = [
    { name: "Case Studies", href: "/portfolio", num: "01" },
    { name: "Approach", href: "/about", num: "02" },
    { name: "Services & Capabilities", href: "/services", num: "03" },
    { name: "Contact & Inquiries", href: "/contact", num: "04" },
  ];

  return (
    <>
      {/* STATIC FIXED OUTER WRAPPER (Perpetually Centered) */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center py-2 px-4 select-none">
        
        {/* INNER MORPHING NAV PILL (GSAP Scrub Animated Container) */}
        <nav
          ref={navRef}
          className="pointer-events-auto w-full max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 md:px-10 py-4 select-none border border-transparent will-change-transform min-w-[280px]"
          style={{
            maxWidth: "1280px",
            marginTop: "0px",
            borderRadius: "0px",
            backgroundColor: "rgba(10, 14, 26, 0)",
            backdropFilter: "blur(0px)",
          }}
        >
          {/* LEFT ZONE: Logo Mark */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-[#1F2E8C] via-[#1E8FBF] to-[#12D6C4] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-white dark:bg-[#0A0E1A] rounded-[6.5px] flex items-center justify-center overflow-hidden">
                <Image
                  src="/TecWrites-Logo_Facicon.png"
                  alt="TecWrites Emblem"
                  width={18}
                  height={18}
                  className="object-contain transform transition-transform duration-500 group-hover:rotate-12"
                />
              </div>
            </div>
            <span className="font-syne font-semibold text-base md:text-lg tracking-tight text-[#0B1220] dark:text-white shrink-0">
              Tec<span className="text-gradient-brand">Writes</span>
            </span>
          </Link>

          {/* RIGHT ZONE: Single "Menu" Text Trigger with Animated Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="group flex items-center gap-3 py-1 text-[13px] md:text-[14px] font-medium tracking-[0.05em] uppercase text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-200 shrink-0"
            aria-label="Toggle navigation menu"
          >
            <span className="relative shrink-0">
              {menuOpen ? "Close" : "Menu"}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all duration-200 ease-in-out group-hover:w-full" />
            </span>
            {/* Animated Two Lines Morphing into X */}
            <div className="relative w-4 h-3.5 flex flex-col justify-between items-center py-0.5 shrink-0">
              <span
                className={`w-4 h-[1.5px] bg-current transform transition-all duration-300 ease-in-out ${
                  menuOpen ? "rotate-45 translate-y-[5px]" : "rotate-0"
                }`}
              />
              <span
                className={`w-4 h-[1.5px] bg-current transform transition-all duration-300 ease-in-out ${
                  menuOpen ? "-rotate-45 -translate-y-[5px]" : "rotate-0"
                }`}
              />
            </div>
          </button>
        </nav>
      </header>


      {/* FULL-SCREEN OVERLAY (All Navigation Lives Here) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 text-white flex flex-col justify-between pt-28 pb-12 px-6 md:px-16 overflow-y-auto select-none"
            style={{
              background: "rgba(6, 9, 18, 0.82)",
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
            }}
          >
            {/* Glassmorphism Background Layers */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              {/* Background motif image */}
              <img
                src="/BG/ChatGPT Image Aug 1, 2026, 10_44_38 AM.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.07] scale-110"
              />
              {/* Teal glow — top left */}
              <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.18]" style={{ background: "radial-gradient(circle, #12D6C4 0%, #1F2E8C 70%)" }} />
              {/* Indigo glow — bottom right */}
              <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.14]" style={{ background: "radial-gradient(circle, #1E8FBF 0%, #1F2E8C 70%)" }} />
              {/* Top gradient edge */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#12D6C4]/40 to-transparent" />
              {/* Bottom gradient edge */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E8FBF]/30 to-transparent" />
            </div>
            {/* 3-COLUMN GRID LAYOUT */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 my-auto">
              
              {/* COLUMN 1: "Menu" (Large Scale Nav Links) */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#12D6C4]">
                  01 // NAVIGATION
                </span>

                <nav className="flex flex-col space-y-4 group/menu">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 + idx * 0.08 }}
                    >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      onMouseEnter={() => setHoveredNav(idx)}
                      onMouseLeave={() => setHoveredNav(null)}
                      className={`group flex items-baseline gap-4 font-serif text-3xl md:text-5xl text-white transition-all duration-300 transform ${
                        hoveredNav !== null && hoveredNav !== idx
                          ? "opacity-30"
                          : "opacity-100"
                      } hover:translate-x-4`}
                    >
                      <span className="text-xs font-mono text-[#12D6C4]">
                        {link.num}
                      </span>
                      <span>{link.name}</span>
                    </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* COLUMN 2: "Visit" */}
              <div className="lg:col-span-3 flex flex-col justify-start space-y-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-8">
                <div className="p-5 rounded-2xl space-y-4" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.10)" }}>
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#12D6C4]">02 // VISIT</span>
                  <div className="flex flex-col space-y-3 text-sm text-gray-300 font-sans font-light leading-relaxed">
                    <span className="font-syne font-semibold text-white text-base">TecWrites Studio</span>
                    <a
                      href="https://maps.google.com/?q=10880+Wilshire+Blvd+Suite+1100+Los+Angeles+CA+90024"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-start gap-2 hover:text-[#12D6C4] transition-colors"
                    >
                      <MapPin className="w-4 h-4 text-[#12D6C4] shrink-0 mt-1" />
                      <span>10880 Wilshire Blvd, Suite 1100<br />Los Angeles, CA 90024</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* COLUMN 3: "Work With Us" */}
              <div className="lg:col-span-3 flex flex-col justify-start space-y-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-8">
                <div className="p-5 rounded-2xl space-y-4" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.10)" }}>
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#12D6C4]">03 // WORK WITH US</span>
                  <div className="flex flex-col space-y-4">
                    <a
                      href="mailto:info@tecwrites.com"
                      className="inline-flex items-center gap-2.5 text-sm md:text-base font-sans text-gray-200 hover:text-[#12D6C4] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#12D6C4]" />
                      <span>info@tecwrites.com</span>
                    </a>

                    <a
                      href="#contact"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center justify-between px-5 py-3.5 rounded-full font-syne text-xs uppercase tracking-widest text-white hover:bg-[#12D6C4] hover:text-black transition-all duration-300 shadow-lg group"
                      style={{ background: "rgba(18,214,196,0.12)", border: "1px solid rgba(18,214,196,0.35)", backdropFilter: "blur(6px)" }}
                    >
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Schedule a call</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* OVERLAY FOOTER INFO */}
            <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
              <span>EST. 2021 — AI & WEB ENGINEERING STUDIO</span>
              <span>© {new Date().getFullYear()} TECWRITES. ALL RIGHTS RESERVED.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
