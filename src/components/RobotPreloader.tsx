"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function RobotPreloader() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const robotCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // 0% to 100% counter
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loadingProgress === 100) {
      const timer = setTimeout(() => {
        if (overlayRef.current) {
          gsap.to(overlayRef.current, {
            yPercent: -100,
            opacity: 0,
            duration: 1,
            ease: "power4.inOut",
            onComplete: () => setIsDone(true),
          });
        }
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [loadingProgress]);

  // Preloader 3D Robot Canvas Animation
  useEffect(() => {
    const canvas = robotCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;
    const width = (canvas.width = 280);
    const height = (canvas.height = 280);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.05;

      const cx = width / 2;
      const cy = height / 2;
      const pulse = Math.sin(time * 3);

      ctx.save();
      ctx.translate(cx, cy);

      // Energy Ring Outer
      ctx.shadowBlur = 30;
      ctx.shadowColor = "#22FAFF";
      ctx.strokeStyle = "rgba(34, 250, 255, 0.6)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, 100 + pulse * 5, 40, time, 0, Math.PI * 2);
      ctx.stroke();

      // Robot Head
      ctx.fillStyle = "#161126";
      ctx.strokeStyle = "#22FAFF";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(-45, -50 + pulse * 4, 90, 80, 20);
      ctx.fill();
      ctx.stroke();

      // Robot Visor
      ctx.shadowColor = "#FF2E74";
      ctx.fillStyle = "#0d0914";
      ctx.strokeStyle = "#FF2E74";
      ctx.beginPath();
      ctx.roundRect(-32, -35 + pulse * 4, 64, 32, 10);
      ctx.fill();
      ctx.stroke();

      // Visor Eye Laser
      ctx.fillStyle = "#22FAFF";
      ctx.shadowColor = "#22FAFF";
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.ellipse(-14, -20 + pulse * 4, 8, 5, 0, 0, Math.PI * 2);
      ctx.ellipse(14, -20 + pulse * 4, 8, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Ears
      ctx.fillStyle = "#22FAFF";
      ctx.beginPath();
      ctx.roundRect(-55, -25 + pulse * 4, 10, 30, 4);
      ctx.roundRect(45, -25 + pulse * 4, 10, 30, 4);
      ctx.fill();

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 w-screen h-screen bg-[#201B35] z-[99999] flex flex-col justify-center items-center text-white pointer-events-auto"
    >
      {/* 3D Preloader Robot */}
      <div className="relative w-72 h-72 flex items-center justify-center mb-6">
        <canvas ref={robotCanvasRef} className="w-full h-full" />
      </div>

      {/* Progress Counter & Brand */}
      <div className="text-center">
        <span className="text-[#22FAFF] font-mono text-xs tracking-widest uppercase mb-2 inline-block">
          TECTRITES CREATIVE TECH STUDIO
        </span>
        <div className="text-6xl md:text-8xl font-black font-hero text-transparent bg-clip-text bg-gradient-to-r from-[#22FAFF] via-[#FF2E74] to-[#22FF7A] tracking-wider">
          {loadingProgress}%
        </div>
        <div className="w-64 h-1.5 bg-[#0d0914] rounded-full overflow-hidden mt-4 mx-auto border border-white/10">
          <div
            className="h-full bg-gradient-to-r from-[#22FAFF] to-[#FF2E74] transition-all duration-200"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
