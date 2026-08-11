"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, CheckCircle2, Sparkles, Cpu, Layers, Zap, Globe } from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  points: string[];
  color: string;
}

const SERVICES_LEFT: ServiceItem[] = [
  {
    id: "motion",
    name: "Motion Design and Animations",
    tagline: "Crafting fluid visual stories and dynamic motion graphic systems.",
    description: "Our motion team brings brands to life with cutting-edge 2D/3D motion graphic systems, interactive UI animations, and high-impact visual effects for digital platforms.",
    points: ["3D Kinetic Typography", "App & UI Micro-animations", "Branded Motion Systems"],
    color: "#FF2E74",
  },
  {
    id: "immersive",
    name: "Immersive Experience Marketing",
    tagline: "Combining the art of crafting experiences and marketing them strategically.",
    description: "Our Immersive Experience Building takes your audience on a journey beyond reality. Create branded virtual spaces, events, and interactive web experiences that leave a lasting impression.",
    points: ["Virtual Brand Arenas", "Interactive Web3D Portals", "Gamified Product Launch"],
    color: "#22FAFF",
  },
  {
    id: "ai",
    name: "AI Marketing Activations",
    tagline: "The future of content and marketing is here, powered by AI.",
    description: "Our AI Activations leverage machine learning & custom generative models to personalize campaigns, automate documentation workflows, and scale creative output dynamically.",
    points: ["Custom AI Agent Workflows", "Generative Visual Content", "Automated Knowledge Hubs"],
    color: "#34F5FC",
  },
  {
    id: "spatial",
    name: "Spatial Computing / VR",
    tagline: "Step into the future with Vision Pro, Quest 3 & WebXR activations.",
    description: "From Apple Vision Pro to Meta Quest 3, we harness augmented and virtual reality to create spatial applications that blur the lines between physical and digital worlds.",
    points: ["Apple Vision Pro Apps", "WebXR Interactive Canvas", "Virtual Showrooms"],
    color: "#22FF7A",
  },
];

const SERVICES_RIGHT: ServiceItem[] = [
  {
    id: "tech-doc",
    name: "Technical Writing & Docs Strategy",
    tagline: "Clear, precise engineering docs & developer portals.",
    description: "We craft world-class technical documentation, API specifications, developer portals, and system architecture guides designed for rapid engineer onboarding.",
    points: ["API & SDK Documentation", "Developer Experience (DX)", "Architecture Whitepapers"],
    color: "#22FAFF",
  },
  {
    id: "product-3d",
    name: "3D Product Animation",
    tagline: "Transforming products into captivating stories with 3D animation.",
    description: "We breathe life into complex hardware and software offerings, making them leap off the screen with photorealistic 3D renders and exploded product views.",
    points: ["Photorealistic 3D Renders", "Exploded View Animations", "Interactive WebGL Displays"],
    color: "#FF2E74",
  },
  {
    id: "phygital",
    name: "Phygital Marketing",
    tagline: "Break down barriers between physical and digital touchpoints.",
    description: "We seamlessly blend physical events, QR AR experiences, and web portals to create unified brand journeys that engage consumers anywhere.",
    points: ["AR QR Campaigns", "Interactive Kiosks", "Event Live Displays"],
    color: "#8300D7",
  },
  {
    id: "ooh",
    name: "Out-Of-Home (OOH) Digital",
    tagline: "Make a massive statement where it matters most in the real world.",
    description: "Our 3D anamorphic billboards and high-impact digital out-of-home installations ensure your brand takes center stage in global cities.",
    points: ["3D Anamorphic Billboards", "LED Matrix Graphics", "Urban Billboard Displays"],
    color: "#EA2D18",
  },
];

export default function WhatWeDo() {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_LEFT[0]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftColumnRef = useRef<HTMLDivElement | null>(null);
  const rightColumnRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const detailBoxRef = useRef<HTMLDivElement | null>(null);

  // GSAP ScrollTrigger Entrance Animation for Pills
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (leftColumnRef.current && rightColumnRef.current) {
      const leftPills = leftColumnRef.current.children;
      const rightPills = rightColumnRef.current.children;

      gsap.fromTo(
        leftPills,
        { opacity: 0, x: -60, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        rightPills,
        { opacity: 0, x: 60, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  // Morph detail card content when service changes
  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    if (detailBoxRef.current) {
      gsap.fromTo(
        detailBoxRef.current,
        { opacity: 0.4, y: 15, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  };

  // Real-time Animated 3D WebGL Matrix visualizer inside detail box
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;
    const width = (canvas.width = 360);
    const height = (canvas.height = 140);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.04;

      const cx = width / 2;
      const cy = height / 2;
      const themeColor = selectedService.color || "#22FAFF";

      ctx.shadowBlur = 15;
      ctx.shadowColor = themeColor;

      // 3D Matrix Node Waves
      const cols = 12;
      const rows = 5;
      const spacingX = 26;
      const spacingY = 20;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = cx + (c - cols / 2) * spacingX;
          const wave = Math.sin(time * 2 + c * 0.4 + r * 0.5);
          const y = cy + (r - rows / 2) * spacingY + wave * 10;
          const radius = Math.max(1, 3 + wave * 2);

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = themeColor;
          ctx.fill();

          // Connect adjacent nodes
          if (c < cols - 1) {
            const nextWave = Math.sin(time * 2 + (c + 1) * 0.4 + r * 0.5);
            const nextY = cy + (r - rows / 2) * spacingY + nextWave * 10;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + spacingX, nextY);
            ctx.strokeStyle = `rgba(34, 250, 255, ${0.15 + wave * 0.1})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [selectedService]);

  return (
    <section ref={sectionRef} className="my-24 lg:my-48 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center font-hero uppercase mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#22FAFF]/40 bg-[#161126] text-[#22FAFF] text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles size={14} /> CORE CAPABILITIES
        </div>
        <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-white tracking-tight">
          What <span className="text-[#FF2E74]">we do</span>
          <span className="text-[#34F5FC]">.</span>
        </h2>
      </div>

      {/* Main Interactive Staggered Pills & Detail Box Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column Services */}
        <div ref={leftColumnRef} className="lg:col-span-4 flex flex-col gap-4">
          {SERVICES_LEFT.map((service, idx) => {
            const isSelected = selectedService.id === service.id;
            return (
              <div
                key={service.id}
                onClick={() => handleSelectService(service)}
                style={{ marginLeft: `${idx * 10}px` }}
                className={`px-8 py-4 border rounded-full text-lg md:text-xl font-bold cursor-pointer select-none transition-all duration-300 transform hover:scale-105 animate-float ${
                  isSelected
                    ? "bg-[#FF2E74] text-black border-[#FF2E74] shadow-[0_0_25px_rgba(255,46,116,0.7)] scale-105"
                    : "bg-[#161126] text-white border-white/20 hover:border-[#22FAFF] hover:text-[#22FAFF]"
                }`}
              >
                {service.name}
              </div>
            );
          })}
        </div>

        {/* Center Dynamic Detail Preview Box with 3D Canvas Visualizer */}
        <div
          ref={detailBoxRef}
          className="lg:col-span-4 bg-[#161126] border border-[#22FAFF]/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(34,250,255,0.2)] flex flex-col justify-between min-h-[420px] relative overflow-hidden"
        >
          {/* Top 3D Canvas Visualizer Header */}
          <div className="w-full h-24 mb-4 relative flex items-center justify-center">
            <canvas ref={canvasRef} className="w-full h-full pointer-events-none" />
          </div>

          <div>
            <span
              className="font-mono text-xs tracking-widest uppercase bg-[#0d0914] px-3 py-1 rounded border inline-block mb-4 font-bold"
              style={{ color: selectedService.color, borderColor: `${selectedService.color}55` }}
            >
              ACTIVE CAPABILITY
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 font-hero uppercase tracking-wide">
              {selectedService.name}
            </h3>
            <p className="font-semibold mb-4 text-sm md:text-base" style={{ color: selectedService.color }}>
              {selectedService.tagline}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
              {selectedService.description}
            </p>
            <div className="space-y-2 mb-6">
              {selectedService.points.map((pt, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs md:text-sm text-gray-200">
                  <CheckCircle2 size={16} style={{ color: selectedService.color }} />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/portfolio"
            className="bg-[#34F5FC] hover:bg-[#FF2E74] hover:text-black text-black font-extrabold px-6 py-3 rounded-xl text-sm inline-flex items-center justify-between gap-2 transition-all duration-300 shadow-lg"
          >
            <span>Explore Projects</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Right Column Services */}
        <div ref={rightColumnRef} className="lg:col-span-4 flex flex-col gap-4">
          {SERVICES_RIGHT.map((service, idx) => {
            const isSelected = selectedService.id === service.id;
            return (
              <div
                key={service.id}
                onClick={() => handleSelectService(service)}
                style={{ marginLeft: `${(3 - idx) * 10}px` }}
                className={`px-8 py-4 border rounded-full text-lg md:text-xl font-bold cursor-pointer select-none transition-all duration-300 transform hover:scale-105 animate-float ${
                  isSelected
                    ? "bg-[#FF2E74] text-black border-[#FF2E74] shadow-[0_0_25px_rgba(255,46,116,0.7)] scale-105"
                    : "bg-[#161126] text-white border-white/20 hover:border-[#22FAFF] hover:text-[#22FAFF]"
                }`}
              >
                {service.name}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

