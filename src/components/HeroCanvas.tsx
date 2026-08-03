"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const showreelRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    // GSAP Staggered Entrance
    const ctxGsap = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(badgeRef.current, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
        .fromTo(titleRef.current, { opacity: 0, y: 50, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1.2 }, "-=0.4")
        .fromTo(descRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.6")
        .fromTo(showreelRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 }, "-=0.8");
    }, heroRef);

    // Canvas WebGL Spatial Particles rendering
    const canvas = canvasRef.current;
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

    const numParticles = 90;
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? "#22FAFF" : "#FF2E74",
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.fillStyle = "#0d0914";
      ctx.fillRect(0, 0, width, height);

      // Render spatial grid background
      ctx.strokeStyle = "rgba(34, 250, 255, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw & animate particles
      particles.forEach((p, idx) => {
        p.x += p.vx + (mouseX - width / 2) * 0.0001;
        p.y += p.vy + (mouseY - height / 2) * 0.0001;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(34, 250, 255, ${0.25 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      ctxGsap.revert();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="hero" ref={heroRef} className="relative w-full h-[90vh] lg:h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-auto" />

      {/* Hero Content Overlay */}
      <div className="relative z-10 container px-6 md:px-16 text-center flex flex-col items-center pointer-events-none">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div
            ref={badgeRef}
            className="inline-block px-5 py-2 rounded-full border border-[#22FAFF]/40 bg-[#161126]/80 text-[#22FAFF] font-semibold text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(34,250,255,0.2)] opacity-0 backdrop-blur-md"
          >
            ⚡ CREATIVE TECH & CONTENT STUDIO
          </div>

          <h1
            ref={titleRef}
            className="text-5xl md:text-8xl lg:text-9xl font-black uppercase text-white tracking-tight leading-none font-hero opacity-0 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
          >
            MY POWER IS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22FAFF] via-[#FF2E74] to-[#22FF7A] drop-shadow-[0_0_35px_rgba(34,250,255,0.8)]">
              MAKING.
            </span>
          </h1>

          <p
            ref={descRef}
            className="max-w-3xl text-gray-300 text-lg md:text-2xl mt-4 font-light leading-relaxed opacity-0 bg-[#0d0914]/60 p-4 rounded-2xl border border-white/10 backdrop-blur-md"
          >
            TecWrites combines <span className="text-[#FF2E74] font-semibold">Technical Writing</span>,{" "}
            <span className="text-[#22FAFF] font-semibold">3D Interactive Activations</span> &{" "}
            <span className="text-[#22FF7A] font-semibold">AI Marketing Strategies</span> to transform modern brands.
          </p>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute left-1/2 -bottom-20 transform -translate-x-1/2 animate-bounce pointer-events-auto">
          <a href="#projects" aria-label="Scroll to featured projects">
            <svg width="43" height="25" viewBox="0 0 43 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L21.5 22L41 2" stroke="#22FAFF" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Rotating Vertically Positioned Showreel Link */}
      <a
        ref={showreelRef}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:block absolute px-4 uppercase text-2xl tracking-widest font-extrabold transform rotate-90 top-1/2 right-4 -translate-y-1/2 text-white hover:text-[#22FAFF] transition-colors duration-300 z-20 pointer-events-auto opacity-0"
        href="https://youtu.be/8nZdBO8WA7U"
      >
        OUR SHOWREEL →
      </a>
    </div>
  );
}
