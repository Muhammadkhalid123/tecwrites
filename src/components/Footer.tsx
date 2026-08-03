"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#070A12] text-white pt-16 pb-12 overflow-hidden border-t border-gray-800/80">

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu">
        <img
          src="/BG/ChatGPT Image Aug 1, 2026, 10_44_38 AM.png"
          alt=""
          decoding="async"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-25 brightness-90 transform-gpu translate-z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070A12]/95 via-[#070A12]/90 to-[#070A12]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-800/80 items-start">

          {/* Brand & Description Column */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1F2E8C] via-[#1E8FBF] to-[#12D6C4] p-[1.5px]">
                <div className="w-full h-full bg-[#0A0E1A] rounded-[10.5px] flex items-center justify-center">
                  <Image
                    src="/TecWrites-Logo_Facicon.png"
                    alt="TecWrites Logo"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="font-syne font-bold text-2xl text-white">
                Tec<span className="text-gradient-glow">Writes</span>
              </span>
            </Link>

            <p className="text-gray-400 font-light text-sm max-w-sm leading-relaxed">
              A hybrid creative technology &amp; publishing studio building next-generation WebGL platforms, autonomous AI pipelines, and bestseller publication suites.
            </p>

            <div className="space-y-3 text-xs font-sans text-gray-300 pt-1">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#12D6C4]" />
                <a href="mailto:writestec@gmail.com" className="hover:text-[#12D6C4] transition-colors">
                  writestec@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#12D6C4]" />
                <span>Los Angeles, CA &amp; Global Remote</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#12D6C4]" />
                <span>+1 (800) TEC-WRITES</span>
              </div>
            </div>
          </div>

          {/* Navigation Column 1: Core Capabilities */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs text-[#12D6C4] uppercase tracking-widest font-semibold">CAPABILITIES</h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-sans">
              <li>
                <Link href="/services#ai-automation" className="hover:text-white transition-colors">
                  AI &amp; Neural Workflows
                </Link>
              </li>
              <li>
                <Link href="/services#web-engineering" className="hover:text-white transition-colors">
                  WebGL &amp; Web Engineering
                </Link>
              </li>
              <li>
                <a href="https://www.selfpublishingconsultant.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Book Design &amp; Publishing
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Studio & Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs text-[#12D6C4] uppercase tracking-widest font-semibold">STUDIO DIRECTORY</h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-sans">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Craft &amp; Methodology
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Selected Work &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services &amp; Pricing Tiers
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Initiate a Project Inquiry
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <p>© {new Date().getFullYear()} TECWRITES STUDIO LLC. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-[#12D6C4] transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/" className="hover:text-[#12D6C4] transition-colors">
              TERMS OF SERVICE
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#12D6C4] transition-colors inline-flex items-center gap-1"
            >
              GITHUB <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
