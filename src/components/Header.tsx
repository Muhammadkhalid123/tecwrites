"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-margin-mobile md:px-margin-desktop">
      <nav className="bg-surface/80 backdrop-blur-md rounded-full mt-4 mx-auto max-w-fit px-8 py-2 shadow-[0_20px_40px_rgba(0,0,0,0.1),inset_2px_2px_4px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.05)] flex items-center gap-8">
        <Link
          href="/"
          className="hover:scale-105 transition-transform duration-300 flex items-center"
        >
          <img src="/TecWrites-Logo-03.png" alt="TecWrites Logo" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <div className="relative group flex items-center h-full">
            <Link
              href="/capabilities"
              className="text-on-surface-variant hover:text-primary transition-colors text-sm uppercase font-bold tracking-wider hover:scale-105 duration-300 flex items-center gap-1 py-2"
            >
              Capabilities
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max bg-surface/95 backdrop-blur-md rounded-2xl shadow-clay-active p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex gap-8 before:content-[''] before:absolute before:inset-0 before:-top-4 before:h-4 pointer-events-none group-hover:pointer-events-auto z-50">

              <div className="flex flex-col gap-2">
                <span className="text-primary font-label-caps text-[10px] tracking-widest mb-1">WEB & DESIGN</span>
                <Link href="/services/web" className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors py-1">UI/UX Design</Link>
                <Link href="/services/web" className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors py-1">Web App Development</Link>
                <Link href="/services/web" className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors py-1">Static & Dynamic Websites</Link>
                <Link href="/services/web" className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors py-1">SEO Services</Link>
                <Link href="/services/web" className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors py-1">Graphic Design</Link>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-primary font-label-caps text-[10px] tracking-widest mb-1">AI & TECH</span>
                <Link href="/services/ai" className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors py-1">AI Solutions</Link>
                <Link href="/services/ai" className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors py-1">Custom Workflows</Link>

                <span className="text-primary font-label-caps text-[10px] tracking-widest mt-4 mb-1">PUBLISHING</span>
                <Link href="/services/publishing" className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors py-1">eBook Publishing</Link>
                <Link href="/services/publishing" className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors py-1">Formatting & Design</Link>
              </div>
            </div>
          </div>
          <Link
            href="/lab"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm uppercase font-bold tracking-wider hover:scale-105 duration-300"
          >
            Lab
          </Link>
          <Link
            href="/studio"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm uppercase font-bold tracking-wider hover:scale-105 duration-300"
          >
            Studio
          </Link>
          <Link
            href="/blog"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm uppercase font-bold tracking-wider hover:scale-105 duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm uppercase font-bold tracking-wider hover:scale-105 duration-300"
          >
            Contact
          </Link>
        </div>

        <Link href="/lab" className="clay-btn hidden md:block text-on-primary px-8 py-3 text-sm uppercase font-bold tracking-wider">
          Explore Our Craft
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary hover:scale-105 transition-transform duration-300 active:scale-95"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Basic Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-surface/95 backdrop-blur-lg p-6 shadow-clay-base flex flex-col gap-4 text-center z-40 md:hidden">
          <div className="flex flex-col items-center gap-2 max-h-[50vh] overflow-y-auto">
            <Link href="/capabilities" onClick={() => setMenuOpen(false)} className="text-on-surface-variant text-label-caps hover:text-primary py-2">Capabilities</Link>
            <div className="flex flex-col gap-6 bg-surface-container/50 rounded-xl p-6 w-full text-center">
              <div className="flex flex-col gap-2">
                <span className="text-primary font-label-caps text-[10px] tracking-widest">WEB & DESIGN</span>
                <Link href="/services/web" onClick={() => setMenuOpen(false)} className="text-on-surface-variant text-sm hover:text-primary py-1">UI/UX Design</Link>
                <Link href="/services/web" onClick={() => setMenuOpen(false)} className="text-on-surface-variant text-sm hover:text-primary py-1">Web App Development</Link>
                <Link href="/services/web" onClick={() => setMenuOpen(false)} className="text-on-surface-variant text-sm hover:text-primary py-1">Static & Dynamic Websites</Link>
                <Link href="/services/web" onClick={() => setMenuOpen(false)} className="text-on-surface-variant text-sm hover:text-primary py-1">SEO Services</Link>
                <Link href="/services/web" onClick={() => setMenuOpen(false)} className="text-on-surface-variant text-sm hover:text-primary py-1">Graphic Design</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-primary font-label-caps text-[10px] tracking-widest">AI & TECH</span>
                <Link href="/services/ai" onClick={() => setMenuOpen(false)} className="text-on-surface-variant text-sm hover:text-primary py-1">AI Solutions</Link>
                <Link href="/services/ai" onClick={() => setMenuOpen(false)} className="text-on-surface-variant text-sm hover:text-primary py-1">Custom Workflows</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-primary font-label-caps text-[10px] tracking-widest">PUBLISHING</span>
                <Link href="/services/publishing" onClick={() => setMenuOpen(false)} className="text-on-surface-variant text-sm hover:text-primary py-1">eBook Publishing</Link>
                <Link href="/services/publishing" onClick={() => setMenuOpen(false)} className="text-on-surface-variant text-sm hover:text-primary py-1">Formatting & Design</Link>
              </div>
            </div>
          </div>
          <Link href="/lab" onClick={() => setMenuOpen(false)} className="text-on-surface-variant text-label-caps hover:text-primary py-2">Lab</Link>
          <Link href="/studio" onClick={() => setMenuOpen(false)} className="text-on-surface-variant text-label-caps hover:text-primary py-2">Studio</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="text-on-surface-variant text-label-caps hover:text-primary py-2">Blog</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-on-surface-variant text-label-caps hover:text-primary py-2">Contact</Link>
          <Link href="/lab" onClick={() => setMenuOpen(false)} className="clay-btn text-on-primary px-6 py-3 mt-4 text-label-caps inline-block text-center">
            Explore Our Craft
          </Link>
        </div>
      )}
    </header>
  );
}

