"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollRobotMotion() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const robotWrapperRef = useRef<HTMLDivElement | null>(null);

  // Mouse & render state
  const mousePos = useRef({ targetX: 0, targetY: 0, x: 0, y: 0 });
  const robotState = useRef({
    time: 0,
    lookX: 0,
    lookY: 0,
    floatOffsetY: 0,
    rotation: 0,
    scale: 1,
    glowColor: "#22FAFF",
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.targetX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      mousePos.current.targetY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // ScrollTrigger timeline controlling 3D Robot screen coordinates, scale, and 3D rotation as you scroll!
    if (robotWrapperRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth scroll scrubbing motion!
        },
      });

      // Hero -> Projects
      tl.to(robotWrapperRef.current, {
        top: "25%",
        right: "5%",
        scale: 0.9,
        rotationY: 180,
        ease: "none",
      })
      // Projects -> Services
      .to(robotWrapperRef.current, {
        top: "48%",
        right: "8%",
        scale: 1.15,
        rotationY: 360,
        ease: "none",
      })
      // Services -> Trust Banners
      .to(robotWrapperRef.current, {
        top: "70%",
        right: "4%",
        scale: 0.85,
        rotationY: 540,
        ease: "none",
      })
      // Trust -> Contact Section
      .to(robotWrapperRef.current, {
        top: "88%",
        right: "8%",
        scale: 1,
        rotationY: 720,
        ease: "none",
      });
    }

    // Canvas 3D Robot Engine
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const width = (canvas.width = 240);
    const height = (canvas.height = 300);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const st = robotState.current;
      st.time += 0.035;

      // Mouse look smooth interpolation
      st.lookX += (mousePos.current.targetX - st.lookX) * 0.08;
      st.lookY += (mousePos.current.targetY - st.lookY) * 0.08;
      st.floatOffsetY = Math.sin(st.time * 2.5) * 10;

      const cx = width / 2;
      const cy = height / 2 - 10 + st.floatOffsetY;
      const thrusterPulse = Math.abs(Math.sin(st.time * 6));

      ctx.save();
      ctx.translate(cx, cy);

      // 1. Plasma Jet Flames Underneath Robot Body
      ctx.shadowBlur = 25 + thrusterPulse * 15;
      ctx.shadowColor = "#22FAFF";

      ctx.beginPath();
      ctx.moveTo(-20, 75);
      ctx.lineTo(0, 110 + thrusterPulse * 25);
      ctx.lineTo(20, 75);
      ctx.fillStyle = "#22FAFF";
      ctx.fill();

      ctx.shadowColor = "#FF2E74";
      ctx.beginPath();
      ctx.moveTo(-10, 75);
      ctx.lineTo(0, 95 + thrusterPulse * 18);
      ctx.lineTo(10, 75);
      ctx.fillStyle = "#FF2E74";
      ctx.fill();

      // 2. 3D Orbiting Holographic Rings
      ctx.save();
      ctx.rotate(st.time * 0.9);
      ctx.strokeStyle = "rgba(34, 250, 255, 0.6)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(0, 0, 95, 32, Math.PI / 4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.rotate(-st.time * 0.6);
      ctx.strokeStyle = "rgba(255, 46, 116, 0.5)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(0, 0, 105, 38, -Math.PI / 3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // 3. Cyber Shoulder Armor & Chest Chassis
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#22FAFF";

      // Shoulders
      ctx.fillStyle = "#161126";
      ctx.strokeStyle = "#22FAFF";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(-70 + st.lookX * 5, 35 + st.lookY * 3, 30, 26, 8);
      ctx.roundRect(40 + st.lookX * 5, 35 + st.lookY * 3, 30, 26, 8);
      ctx.fill();
      ctx.stroke();

      // Torso
      ctx.fillStyle = "#0d0914";
      ctx.strokeStyle = "#34F5FC";
      ctx.beginPath();
      ctx.roundRect(-40 + st.lookX * 4, 30 + st.lookY * 3, 80, 58, 12);
      ctx.fill();
      ctx.stroke();

      // Chest Arc Reactor
      ctx.shadowBlur = 25;
      ctx.shadowColor = "#FF2E74";
      ctx.fillStyle = "#FF2E74";
      ctx.beginPath();
      ctx.arc(st.lookX * 4, 55 + st.lookY * 3, 11 + Math.sin(st.time * 4) * 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(st.lookX * 4, 55 + st.lookY * 3, 5, 0, Math.PI * 2);
      ctx.fill();

      // 4. Neck Join
      ctx.fillStyle = "#2a2245";
      ctx.beginPath();
      ctx.roundRect(-12 + st.lookX * 8, 12 + st.lookY * 5, 24, 22, 5);
      ctx.fill();

      // 5. 3D Head Assembly (Tracks Cursor)
      const headX = st.lookX * 18;
      const headY = st.lookY * 12;

      ctx.shadowBlur = 25;
      ctx.shadowColor = "#22FAFF";

      // Outer Helmet
      ctx.fillStyle = "#161126";
      ctx.strokeStyle = "#22FAFF";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(-46 + headX, -60 + headY, 92, 78, 20);
      ctx.fill();
      ctx.stroke();

      // Antennas
      ctx.fillStyle = "#22FAFF";
      ctx.beginPath();
      ctx.roundRect(-55 + headX, -35 + headY, 9, 28, 3);
      ctx.roundRect(46 + headX, -35 + headY, 9, 28, 3);
      ctx.fill();

      ctx.fillStyle = "#FF2E74";
      ctx.shadowColor = "#FF2E74";
      ctx.beginPath();
      ctx.arc(-50.5 + headX, -38 + headY, 4, 0, Math.PI * 2);
      ctx.arc(50.5 + headX, -38 + headY, 4, 0, Math.PI * 2);
      ctx.fill();

      // Cyber Visor
      ctx.shadowBlur = 30;
      ctx.shadowColor = "#22FAFF";
      ctx.fillStyle = "#0d0914";
      ctx.strokeStyle = "#22FAFF";
      ctx.beginPath();
      ctx.roundRect(-34 + headX, -42 + headY, 68, 34, 10);
      ctx.fill();
      ctx.stroke();

      // Laser Eyes
      const eyeDx = st.lookX * 5;
      ctx.fillStyle = "#22FAFF";
      ctx.beginPath();
      ctx.ellipse(-14 + headX + eyeDx, -25 + headY, 8, 5, 0, 0, Math.PI * 2);
      ctx.ellipse(14 + headX + eyeDx, -25 + headY, 8, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(-12 + headX + eyeDx, -26 + headY, 2.5, 0, Math.PI * 2);
      ctx.arc(16 + headX + eyeDx, -26 + headY, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={robotWrapperRef}
      style={{ transformStyle: "preserve-3d" }}
      className="fixed top-[15%] right-[5%] z-40 pointer-events-auto cursor-pointer select-none hidden md:block transition-all duration-300"
      title="Interactive 3D Robot - Scroll down to watch me fly across sections!"
    >
      <div className="relative flex flex-col items-center group">
        {/* Floating Cyber HUD Tag */}
        <div className="bg-[#161126]/90 border border-[#22FAFF]/40 text-[#22FAFF] font-mono text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(34,250,255,0.4)] mb-1 backdrop-blur-md group-hover:border-[#FF2E74] group-hover:text-[#FF2E74] transition-colors">
          🤖 TECTRITES AI ROBOT
        </div>

        {/* 3D Robot Canvas */}
        <canvas ref={canvasRef} className="w-[200px] h-[250px] drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]" />
      </div>
    </div>
  );
}
