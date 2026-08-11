"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface NavigationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationOverlay({ isOpen, onClose }: NavigationOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] w-screen h-screen bg-[#FF2E74] flex flex-col justify-between p-8 md:p-16 transition-all duration-500 animate-in fade-in slide-in-from-right-full">
      {/* Top Close Bar */}
      <div className="flex justify-between items-center w-full">
        <span className="text-black font-extrabold text-2xl tracking-widest uppercase">
          TECTRITES NAVIGATION
        </span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-3 bg-black text-[#22FAFF] rounded-full hover:scale-110 transition-transform duration-300 focus:outline-none"
        >
          <X size={32} />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center justify-center gap-6 my-auto">
        <Link
          onClick={onClose}
          href="/about"
          className="group relative text-5xl md:text-8xl font-black uppercase text-black hover:text-[#34F5FC] transition-colors duration-300 tracking-tight"
        >
          <span className="relative inline-block group-hover:-translate-y-2 transition-transform duration-300">
            THE STUDIO
          </span>
          <span className="absolute -left-4 -top-2 text-[#34F5FC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            THE STUDIO
          </span>
        </Link>

        <Link
          onClick={onClose}
          href="/portfolio"
          className="group relative text-5xl md:text-8xl font-black uppercase text-black hover:text-[#34F5FC] transition-colors duration-300 tracking-tight"
        >
          <span className="relative inline-block group-hover:-translate-y-2 transition-transform duration-300">
            OUR WORK
          </span>
          <span className="absolute -left-4 -top-2 text-[#34F5FC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            OUR WORK
          </span>
        </Link>

        <a
          onClick={onClose}
          href="#contact"
          className="group relative text-5xl md:text-8xl font-black uppercase text-black hover:text-[#34F5FC] transition-colors duration-300 tracking-tight"
        >
          <span className="relative inline-block group-hover:-translate-y-2 transition-transform duration-300">
            CONTACT
          </span>
          <span className="absolute -left-4 -top-2 text-[#34F5FC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            CONTACT
          </span>
        </a>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col md:flex-row justify-between items-center text-black font-semibold uppercase text-sm border-t border-black/20 pt-6">
        <div>San Francisco, CA • Wroclaw, PL • London, UK</div>
        <div className="mt-2 md:mt-0">© {new Date().getFullYear()} TecWrites Studio. All Rights Reserved.</div>
      </div>
    </div>
  );
}

