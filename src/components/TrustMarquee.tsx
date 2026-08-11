"use client";

import React from "react";

const LOGOS_ROW1 = [
  "New Balance",
  "Relevation",
  "BCU XR Lab",
  "Get Joy",
  "Copernicus Earth",
  "Raising Cane's",
  "New Balance",
  "Relevation",
  "BCU XR Lab",
  "Get Joy",
];

const LOGOS_ROW2 = [
  "Thompson",
  "Oralade",
  "TPXimpact",
  "CTP Brick",
  "Spatial",
  "Thompson",
  "Oralade",
  "TPXimpact",
  "CTP Brick",
  "Spatial",
];

const LOGOS_ROW3 = [
  "School Locker",
  "Halo Media",
  "Roche",
  "Space Rebels",
  "School Locker",
  "Halo Media",
  "Roche",
  "Space Rebels",
];

export default function TrustMarquee() {
  return (
    <section className="my-24 lg:my-48 overflow-hidden relative pb-16">
      {/* Title */}
      <div className="text-center font-hero uppercase mb-16">
        <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-white tracking-tight">
          They <span className="text-[#FF2E74]">trust</span> us
          <span className="text-[#0062D1]">.</span>
        </h2>
      </div>

      {/* Marquee 1: Red Banner -3deg */}
      <div className="w-[105vw] h-20 lg:h-32 transform -rotate-3 bg-[#EA2D18] relative -left-4 flex items-center shadow-lg overflow-hidden my-4">
        <div className="animate-marquee-left flex items-center whitespace-nowrap gap-12 lg:gap-24 font-hero text-2xl lg:text-5xl font-black uppercase text-white tracking-wider">
          {LOGOS_ROW1.concat(LOGOS_ROW1).map((logo, idx) => (
            <div key={idx} className="flex items-center gap-8 px-4 opacity-90 hover:opacity-100 transition-opacity">
              <span>★ {logo}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee 2: Pink Banner +1deg */}
      <div className="w-[105vw] h-20 lg:h-32 transform rotate-1 bg-[#FF2E74] relative -left-4 flex items-center shadow-lg overflow-hidden my-4 z-10">
        <div className="animate-marquee-right flex items-center whitespace-nowrap gap-12 lg:gap-24 font-hero text-2xl lg:text-5xl font-black uppercase text-black tracking-wider">
          {LOGOS_ROW2.concat(LOGOS_ROW2).map((logo, idx) => (
            <div key={idx} className="flex items-center gap-8 px-4 opacity-90 hover:opacity-100 transition-opacity">
              <span>◆ {logo}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee 3: Purple Banner -6deg */}
      <div className="w-[105vw] h-20 lg:h-32 transform -rotate-6 bg-[#8300D7] relative -left-4 flex items-center shadow-lg overflow-hidden my-4 z-0">
        <div className="animate-marquee-left flex items-center whitespace-nowrap gap-12 lg:gap-24 font-hero text-2xl lg:text-5xl font-black uppercase text-white tracking-wider">
          {LOGOS_ROW3.concat(LOGOS_ROW3).map((logo, idx) => (
            <div key={idx} className="flex items-center gap-8 px-4 opacity-90 hover:opacity-100 transition-opacity">
              <span>⚡ {logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

