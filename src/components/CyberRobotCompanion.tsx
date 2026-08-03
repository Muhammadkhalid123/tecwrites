"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CyberRobotCompanion() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState("HERO");

  // Mouse & animation state
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const robotAnim = useRef({
    time: 0,
    lookX: 0,
    lookY: 0,
    flyOffsetY: 0,
    thrusterPulse: 0,
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Track mouse position across window
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.targetX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      mousePos.current.targetY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // GSAP ScrollTrigger section jump triggers
    const sections = [
      { id: "hero", label: "HERO AI" },
      { id: "projects", label: "3D CAROUSEL" },
      { id: "services", label: "WHAT WE DO" },
      { id: "trust", label: "TRUST US" },
      { id: "contact", label: "HIT US UP" },
    ];

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id) || document.querySelector(`[data-section='${sec.id}']`);
      if (el) {
        ScrollTrigger.create({
          trigger: el,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => triggerRobotJump(sec.label),
          onEnterBack: () => triggerRobotJump(sec.label),
        });
      }
    });

    function triggerRobotJump(label: string) {
      setActiveSection(label);
      if (!containerRef.current) return;

      // Flying Jump & Spin Animation when jumping sections
      const tl = gsap.timeline();
      tl.to(containerRef.current, {
        y: -40,
        scale: 1.15,
        rotation: 12,
        duration: 0.35,
        ease: "power2.out",
      }).to(containerRef.current, {
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "bounce.out",
      });
    }

    // Real-time WebGL / 3D Canvas Cyber Robot rendering
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    const width = (canvas.width = 180);
    const height = (canvas.height = 240);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const state = robotAnim.current;
      state.time += 0.03;

      // Smooth look interpolations
      state.lookX += (mousePos.current.targetX - state.lookX) * 0.08;
      state.lookY += (mousePos.current.targetY - state.lookY) * 0.08;
      state.flyOffsetY = Math.sin(state.time * 2) * 8;
      state.thrusterPulse = Math.abs(Math.sin(state.time * 6));

      const cx = width / 2;
      const cy = height / 2 - 10 + state.flyOffsetY;

      ctx.save();
      ctx.translate(cx, cy);

      // 1. Thruster Plasma Jet underneath
      ctx.shadowBlur = 20 + state.thrusterPulse * 15;
      ctx.shadowColor = "#22FAFF";

      ctx.beginPath();
      ctx.moveTo(-15, 60);
      ctx.lineTo(0, 85 + state.thrusterPulse * 20);
      ctx.lineTo(15, 60);
      ctx.fillStyle = "#22FAFF";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-8, 60);
      ctx.lineTo(0, 75 + state.thrusterPulse * 15);
      ctx.lineTo(8, 60);
      ctx.fillStyle = "#FF2E74";
      ctx.fill();

      // 2. Orbiting Energy Ring
      ctx.save();
      ctx.rotate(state.time * 0.8);
      ctx.strokeStyle = "rgba(34, 250, 255, 0.5)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, 75, 25, Math.PI / 4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // 3. Cyber Shoulders & Body
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#22FAFF";

      // Shoulders
      ctx.fillStyle = "#161126";
      ctx.strokeStyle = "#22FAFF";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(-55 + state.lookX * 4, 30 + state.lookY * 2, 25, 20, 6);
      ctx.roundRect(30 + state.lookX * 4, 30 + state.lookY * 2, 25, 20, 6);
      ctx.fill();
      ctx.stroke();

      // Torso
      ctx.fillStyle = "#0d0914";
      ctx.strokeStyle = "#34F5FC";
      ctx.beginPath();
      ctx.roundRect(-30 + state.lookX * 3, 25 + state.lookY * 2, 60, 45, 10);
      ctx.fill();
      ctx.stroke();

      // Glowing Arc Core
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#FF2E74";
      ctx.fillStyle = "#FF2E74";
      ctx.beginPath();
      ctx.arc(state.lookX * 3, 45 + state.lookY * 2, 8 + Math.sin(state.time * 4) * 2, 0, Math.PI * 2);
      ctx.fill();

      // 4. Neck
      ctx.fillStyle = "#2a2245";
      ctx.beginPath();
      ctx.roundRect(-10 + state.lookX * 6, 12 + state.lookY * 4, 20, 18, 4);
      ctx.fill();

      // 5. 3D Head Assembly (Tracks Cursor)
      const headX = state.lookX * 14;
      const headY = state.lookY * 10;

      ctx.shadowBlur = 20;
      ctx.shadowColor = "#22FAFF";

      // Outer Helmet
      ctx.fillStyle = "#161126";
      ctx.strokeStyle = "#22FAFF";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(-35 + headX, -45 + headY, 70, 60, 15);
      ctx.fill();
      ctx.stroke();

      // Antennas
      ctx.fillStyle = "#22FAFF";
      ctx.beginPath();
      ctx.roundRect(-42 + headX, -25 + headY, 7, 20, 2);
      ctx.roundRect(35 + headX, -25 + headY, 7, 20, 2);
      ctx.fill();

      ctx.fillStyle = "#FF2E74";
      ctx.beginPath();
      ctx.arc(-38.5 + headX, -28 + headY, 3, 0, Math.PI * 2);
      ctx.arc(38.5 + headX, -28 + headY, 3, 0, Math.PI * 2);
      ctx.fill();

      // Cyber Visor
      ctx.shadowBlur = 25;
      ctx.shadowColor = "#22FAFF";
      ctx.fillStyle = "#0d0914";
      ctx.strokeStyle = "#22FAFF";
      ctx.beginPath();
      ctx.roundRect(-26 + headX, -33 + headY, 52, 26, 8);
      ctx.fill();
      ctx.stroke();

      // Visor Eyes
      const eyeDx = state.lookX * 4;
      ctx.fillStyle = "#22FAFF";
      ctx.beginPath();
      ctx.ellipse(-11 + headX + eyeDx, -20 + headY, 6, 4, 0, 0, Math.PI * 2);
      ctx.ellipse(11 + headX + eyeDx, -20 + headY, 6, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(-9.5 + headX + eyeDx, -21 + headY, 2, 0, Math.PI * 2);
      ctx.arc(12.5 + headX + eyeDx, -21 + headY, 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  // Click Robot to trigger 3D Flip
  const handleRobotClick = () => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current, {
      rotateY: "+=360",
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  };

  return (
    <div
      ref={containerRef}
      onClick={handleRobotClick}
      className="fixed right-4 md:right-10 bottom-8 z-40 cursor-pointer pointer-events-auto flex flex-col items-center select-none group"
      title="Click to interact with your 3D Companion Robot!"
    >
      {/* Active Section HUD Badge above Robot */}
      <div className="bg-[#161126]/90 border border-[#22FAFF]/40 text-[#22FAFF] font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(34,250,255,0.3)] mb-1 backdrop-blur-md group-hover:border-[#FF2E74] group-hover:text-[#FF2E74] transition-colors">
        🤖 {activeSection}
      </div>

      {/* 3D Robot Canvas */}
      <canvas ref={canvasRef} className="w-[140px] h-[180px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]" />
    </div>
  );
}
