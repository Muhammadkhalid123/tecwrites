"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Sparkles, ArrowRight } from "lucide-react";

interface Card3DProps {
  title: string;
  subtitle: string;
  description: string;
  accentColor: "#22FAFF" | "#FF2E74" | "#34F5FC";
  type: "target" | "eye" | "shield";
}

function Card3D({ title, subtitle, description, accentColor, type }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt perspective math
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / rect.height) * 20; // 20deg tilt
    const rotateY = (x / rect.width) * 20;

    gsap.to(cardRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.04,
      transformPerspective: 1000,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
    setIsHovered(false);
  };

  // 3D Interactive Canvas Animation inside card header
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let angle = 0;
    const width = (canvas.width = 240);
    const height = (canvas.height = 200);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      angle += isHovered ? 0.04 : 0.015;

      if (type === "target") {
        // 3D Spinning Holographic Target Rings
        ctx.shadowBlur = 20;
        ctx.shadowColor = accentColor;

        for (let r = 20; r <= 60; r += 15) {
          ctx.beginPath();
          const rx = r * Math.abs(Math.cos(angle + r * 0.1));
          const ry = r * Math.abs(Math.sin(angle * 0.8));
          ctx.ellipse(cx, cy, rx + 15, ry + 25, angle, 0, Math.PI * 2);
          ctx.strokeStyle = accentColor;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Glowing Core
        ctx.beginPath();
        ctx.arc(cx, cy, 10 + Math.sin(angle * 2) * 3, 0, Math.PI * 2);
        ctx.fillStyle = accentColor;
        ctx.fill();
      } else if (type === "eye") {
        // 3D Floating Hyper-Torus Eye
        ctx.shadowBlur = 25;
        ctx.shadowColor = accentColor;

        const numDots = 36;
        for (let i = 0; i < numDots; i++) {
          const theta = (i / numDots) * Math.PI * 2 + angle;
          const radius = 45 + Math.sin(theta * 3 + angle) * 10;
          const x = cx + Math.cos(theta) * radius;
          const z = Math.sin(theta * 2 + angle) * 30;
          const y = cy + (z * 0.5);

          const scale = (z + 60) / 90;
          ctx.beginPath();
          ctx.arc(x, y, 3 * scale, 0, Math.PI * 2);
          ctx.fillStyle = accentColor;
          ctx.fill();
        }

        // Center Eye Iris Ring
        ctx.beginPath();
        ctx.ellipse(cx, cy, 30, 15, Math.sin(angle) * 0.5, 0, Math.PI * 2);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      } else if (type === "shield") {
        // 3D Spinning Metallic Shield Cube
        ctx.shadowBlur = 25;
        ctx.shadowColor = accentColor;

        const size = 40;
        const vertices = [
          [-size, -size, -size],
          [size, -size, -size],
          [size, size, -size],
          [-size, size, -size],
          [-size, -size, size],
          [size, -size, size],
          [size, size, size],
          [-size, size, size],
        ];

        // 3D rotation matrix projection
        const projected = vertices.map(([x, y, z]) => {
          const rad = angle;
          // Rotate Y
          const x1 = x * Math.cos(rad) - z * Math.sin(rad);
          const z1 = x * Math.sin(rad) + z * Math.cos(rad);
          // Rotate X
          const y2 = y * Math.cos(rad * 0.7) - z1 * Math.sin(rad * 0.7);
          const z2 = y * Math.sin(rad * 0.7) + z1 * Math.cos(rad * 0.7);

          const fov = 200;
          const scale = fov / (fov + z2 + 100);
          return [cx + x1 * scale, cy + y2 * scale];
        });

        const edges = [
          [0, 1], [1, 2], [2, 3], [3, 0],
          [4, 5], [5, 6], [6, 7], [7, 4],
          [0, 4], [1, 5], [2, 6], [3, 7],
        ];

        edges.forEach(([p1, p2]) => {
          ctx.beginPath();
          ctx.moveTo(projected[p1][0], projected[p1][1]);
          ctx.lineTo(projected[p2][0], projected[p2][1]);
          ctx.strokeStyle = accentColor;
          ctx.lineWidth = 2;
          ctx.stroke();
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [type, accentColor, isHovered]);

  const borderClass =
    accentColor === "#22FAFF"
      ? "hover:border-[#22FAFF] hover:shadow-[0_0_40px_rgba(34,250,255,0.4)]"
      : accentColor === "#FF2E74"
      ? "hover:border-[#FF2E74] hover:shadow-[0_0_40px_rgba(255,46,116,0.4)]"
      : "hover:border-[#34F5FC] hover:shadow-[0_0_40px_rgba(52,245,252,0.4)]";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
      className={`bg-[#161126] border border-white/15 p-8 rounded-3xl transition-all duration-300 relative group cursor-pointer overflow-hidden flex flex-col justify-between ${borderClass}`}
    >
      {/* Dynamic Background Glow */}
      <div
        className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />

      <div>
        {/* 3D Canvas Header Element */}
        <div className="w-full h-48 flex items-center justify-center relative mb-4">
          <canvas ref={canvasRef} className="z-10 pointer-events-none" />
          <div
            className="absolute inset-0 rounded-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-300"
            style={{ backgroundColor: accentColor }}
          />
        </div>

        {/* Card Content */}
        <div style={{ transform: "translateZ(30px)" }}>
          <span
            className="font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border mb-3 inline-block font-semibold"
            style={{ color: accentColor, borderColor: `${accentColor}55`, backgroundColor: "#0d0914" }}
          >
            {subtitle}
          </span>
          <h3 className="text-3xl font-black text-white uppercase font-hero mb-4 tracking-wide group-hover:text-white">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed font-light mb-6">
            {description}
          </p>
        </div>
      </div>

      {/* Interactive Footer CTA */}
      <div
        style={{ transform: "translateZ(20px)" }}
        className="pt-4 border-t border-white/10 flex items-center justify-between font-bold text-xs uppercase tracking-wider"
      >
        <span style={{ color: accentColor }}>EXPLORE 3D CAPABILITY</span>
        <ArrowRight size={18} style={{ color: accentColor }} className="transform group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </div>
  );
}

export default function ThreeDFoundationCards() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center font-hero uppercase mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#22FAFF]/40 bg-[#161126] text-[#22FAFF] text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles size={14} /> SPATIAL 3D CORE
        </div>
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight">
          OUR <span className="text-[#FF2E74]">FOUNDATION</span>
          <span className="text-[#34F5FC]">.</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-base md:text-lg font-light">
          Hover over the 3D spatial cards to interact with our real-time WebGL holographic core models.
        </p>
      </div>

      {/* 3D Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card3D
          title="MISSION"
          subtitle="CORE PURPOSE"
          description="To empower global companies with world-class technical writing, 3D interactive web activations, and AI content systems that captivate modern digital audiences."
          accentColor="#22FAFF"
          type="target"
        />

        <Card3D
          title="VISION"
          subtitle="SPATIAL HORIZON"
          description="To define the international benchmark for spatial computing documentation, motion graphics, and generative AI marketing activations across next-gen platforms."
          accentColor="#FF2E74"
          type="eye"
        />

        <Card3D
          title="VALUES"
          subtitle="ENGINEERING RIGOR"
          description="Uncompromising software engineering quality, visual excellence, continuous technological innovation, and deep collaborative client partnership."
          accentColor="#34F5FC"
          type="shield"
        />
      </div>
    </section>
  );
}
