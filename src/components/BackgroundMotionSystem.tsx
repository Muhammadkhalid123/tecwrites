"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function BackgroundMotionSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<HTMLCanvasElement>(null);
  const glassDiscRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Interactive Mesh Network Wave Canvas
    const canvas = meshRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Nodes for neural wave motif
    const cols = Math.floor(width / 90);
    const rows = 12;
    interface Node {
      x: number;
      y: number;
      baseY: number;
      speed: number;
      phase: number;
    }
    const nodes: Node[] = [];

    for (let i = 0; i < cols; i++) {
      const x = (i / (cols - 1)) * width;
      const baseY = height * 0.45 + (Math.sin(i * 0.4) * 80);
      nodes.push({
        x,
        y: baseY,
        baseY,
        speed: 0.0015 + Math.random() * 0.001,
        phase: i * 0.3,
      });
    }

    let time = 0;
    const renderMesh = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle node grid wave with static styles (zero garbage collection overhead)
      ctx.lineWidth = 1;
      ctx.fillStyle = "rgba(92, 242, 224, 0.4)";
      ctx.strokeStyle = "rgba(30, 143, 191, 0.15)";

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.y = node.baseY + Math.sin(time + node.phase) * 35;

        // Draw node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Connect adjacent nodes
        if (i < nodes.length - 1) {
          const nextNode = nodes[i + 1];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(nextNode.x, nextNode.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(renderMesh);
    };

    renderMesh();

    // 2. GSAP Scroll Parallax & Floating Idle Loops
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reducedMotion) {
      // Parallax scroll effects
      if (orbRef.current) {
        gsap.to(orbRef.current, {
          yPercent: 40,
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }

      if (glassDiscRef.current) {
        gsap.to(glassDiscRef.current, {
          yPercent: -30,
          rotation: 45,
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }

      if (ribbonRef.current) {
        gsap.to(ribbonRef.current, {
          xPercent: 10,
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Mesh Canvas Layer */}
      <canvas ref={meshRef} className="absolute inset-0 w-full h-full opacity-50 transform-gpu" />

      {/* Motif 1: Hardware-Accelerated Gradient Orb */}
      <div
        ref={orbRef}
        className="absolute top-[10%] right-[8%] w-[360px] h-[360px] rounded-full opacity-20 pointer-events-none transform-gpu translate-z-0"
        style={{
          background: "radial-gradient(circle, rgba(18,214,196,0.5) 0%, rgba(30,143,191,0.25) 45%, transparent 70%)",
        }}
      >
        <div className="absolute inset-4 rounded-full border border-[#5CF2E0]/20 animate-spin-slow" />
      </div>

      {/* Motif 2: Stacked Glass Discs Motif background */}
      <div
        ref={glassDiscRef}
        className="absolute top-[45%] left-[-5%] w-[420px] h-[260px] rounded-[50%] opacity-15 pointer-events-none transform -rotate-12 transform-gpu translate-z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(31,46,140,0.5) 0%, rgba(18,214,196,0.3) 60%, transparent 80%)",
        }}
      />

      {/* Motif 3: Soft Ribbon Wave Glow */}
      <div
        ref={ribbonRef}
        className="absolute bottom-[15%] right-[-10%] w-[550px] h-[300px] rounded-full opacity-15 pointer-events-none transform-gpu translate-z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(30,143,191,0.4) 0%, rgba(31,46,140,0.2) 70%, transparent 100%)",
        }}
      />

      {/* Ambient Radial Spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] opacity-[0.05] pointer-events-none transform-gpu"
        style={{
          background: "radial-gradient(800px circle at top, rgba(18,214,196,0.3), transparent 80%)",
        }}
      />
    </div>
  );
}
