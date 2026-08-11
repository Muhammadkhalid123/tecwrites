"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  pinkWord?: string;
  greenWord?: string;
  blueWord?: string;
  normalWord?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "AI Technical Documentation Engine",
    category: "Developer Experience / AI",
    image: "https://images.ctfassets.net/l62j3y44mu7i/3be80eVEdOzy3UHEInD9o9/aaa6e5ff00989c38f1281c2aac813342/nb__2__2.png?w=1920&q=75",
    pinkWord: "AI Technical ",
    greenWord: "Documentation ",
    blueWord: "Engine",
  },
  {
    id: 2,
    title: "Birmingham City University XR Gallery",
    category: "Spatial Computing / VR",
    image: "https://images.ctfassets.net/l62j3y44mu7i/1ZHEfnMS9J5c5dEgB8Vka7/8f0919e0c8cb11d84b90f3fa5394f8d0/_Inspired_XR_Gallery__2024_on_22.07.24_at_16.15.png?w=1920&q=75",
    pinkWord: "Birmingham City ",
    greenWord: "XR ",
    blueWord: "Gallery",
  },
  {
    id: 3,
    title: "Fernet Branca AR Bar Crawl",
    category: "Augmented Reality / Marketing",
    image: "https://images.ctfassets.net/l62j3y44mu7i/6EDZlk4vgyunYH2W1F9KTp/fb25cc9d59963bbbd115f72cab3d4045/Fernet_quick_shot_-_frame_at_0m1s2_copy.jpg?w=1920&q=75",
    pinkWord: "Fernet ",
    greenWord: "Branca ",
    blueWord: "AR Crawl",
  },
  {
    id: 4,
    title: "Next-Gen API Knowledge Portal",
    category: "Technical Writing / Motion",
    image: "https://images.ctfassets.net/l62j3y44mu7i/5TqmB5uwKR1eyJgjxUzBp0/ba4c61679a0d42788c8ce93208abfd08/1_2.png?w=1920&q=75",
    pinkWord: "Next-Gen ",
    greenWord: "API ",
    blueWord: "Portal",
  },
  {
    id: 5,
    title: "Roblox & Fortnite Interactive World",
    category: "Game Dev / Immersive",
    image: "https://images.ctfassets.net/l62j3y44mu7i/6m2bKvYXAzG4P4D9VKC0eY/61d42e5ecaafc2c0df374a2d8746dd65/thumbnail_jac_copy.png?w=1920&q=75",
    pinkWord: "Roblox ",
    greenWord: "Fortnite ",
    blueWord: "World",
  },
  {
    id: 6,
    title: "GetJoy Immersive Experience",
    category: "Phygital Activations",
    image: "https://images.ctfassets.net/l62j3y44mu7i/5sZxnxtPVPBeGAeD5e2u31/478bfff59ce347ac83e60fef46234b41/Metaverse_2_-_Website_Version_V2__1__-_frame_at_0m2s.jpg?w=1920&q=75",
    pinkWord: "GetJoy ",
    greenWord: "Immersive ",
    blueWord: "Experience",
  },
];

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="projects" className="w-full pt-16 lg:pt-32 pb-24 overflow-hidden relative">
      {/* Morphing Animated Project Title */}
      <div className="w-full h-24 relative font-hero uppercase text-2xl md:text-5xl lg:text-7xl tracking-wide text-center">
        {PROJECTS.map((project, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={project.id}
              className={`absolute top-0 left-0 right-0 text-center font-extrabold transition-all duration-700 ${
                isActive
                  ? "opacity-100 transform translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 transform translate-y-12 scale-90 pointer-events-none"
              }`}
            >
              <p className="my-4">
                <span className="text-[#FF2E74]">{project.pinkWord}</span>
                <span className="text-[#34F5FC]">{project.greenWord}</span>
                <span className="text-[#22FAFF]">{project.blueWord}</span>
              </p>
            </div>
          );
        })}
      </div>

      {/* 3D Stacked Card Deck Container */}
      <div className="w-full px-6 lg:px-12 mt-8 select-none mb-24 max-w-7xl mx-auto">
        <div className="w-full aspect-[16/9] md:aspect-[21/9] relative max-w-6xl mx-auto perspective-container">
          <div className="flex justify-center h-full relative items-center">
            {PROJECTS.map((project, idx) => {
              // Calculate relative offset from active card
              const offset = (idx - activeIndex + PROJECTS.length) % PROJECTS.length;

              // Compute 3D stack transforms matching mpmteam.net
              const scale = 1 - offset * 0.08;
              const translateY = offset * 35;
              const rotateY = offset * -6;
              const zIndex = 10 - offset;
              const opacity = offset > 3 ? 0 : 1 - offset * 0.2;
              const saturate = offset === 0 ? 1 : 0.2;

              return (
                <div
                  key={project.id}
                  onClick={() => handleCardClick(idx)}
                  style={{
                    transform: `perspective(800px) translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    zIndex: zIndex,
                    opacity: opacity,
                    filter: `saturate(${saturate})`,
                    transition: "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  className={`absolute w-[85%] md:w-[70%] h-full rounded-3xl overflow-hidden cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)] border ${
                    offset === 0 ? "border-[#22FAFF]" : "border-white/10"
                  }`}
                >
                  <div className="relative w-full h-full">
                    {/* Project Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full pointer-events-none"
                    />

                    {/* Gradient Overlay & Badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10">
                      <span className="text-[#22FAFF] font-bold text-xs md:text-sm tracking-widest uppercase mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-white text-xl md:text-4xl font-extrabold tracking-wide uppercase font-hero">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dive In CTA Section */}
      <div className="flex items-center flex-col -mt-8">
        <h2 className="font-hero text-3xl md:text-6xl text-white uppercase text-center font-black">
          Think you&apos;ve seen it all?
        </h2>
        <Link
          className="bg-[#FF2E74] hover:bg-[#22FAFF] hover:text-black font-bold px-6 py-3 flex gap-3 items-center text-black text-lg mt-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,46,116,0.5)]"
          href="/portfolio"
        >
          <span>Dive In</span>
          <ArrowUpRight size={24} />
        </Link>
      </div>
    </section>
  );
}

