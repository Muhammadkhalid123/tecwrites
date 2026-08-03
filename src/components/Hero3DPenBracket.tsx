"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as THREE from "three";

export default function Hero3DPenBracket() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 550;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x12D6C4, 4, 20);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x1F2E8C, 5, 20);
    pointLight2.position.set(-4, -4, 2);
    scene.add(pointLight2);

    // Shape creation
    const shape = new THREE.Shape();
    shape.moveTo(0, 2.2);
    shape.quadraticCurveTo(0.8, 1.8, 1.3, 0.8);
    shape.lineTo(1.6, -0.6);
    shape.quadraticCurveTo(1.6, -1.8, 0.9, -2.2);
    shape.lineTo(0.3, -2.2);
    shape.lineTo(0.3, -0.2);
    shape.lineTo(0.8, -0.2);
    shape.lineTo(0.8, 0.4);
    shape.quadraticCurveTo(0.6, 1.0, 0, 1.4);
    shape.quadraticCurveTo(-0.6, 1.0, -0.8, 0.4);
    shape.lineTo(-0.8, -0.2);
    shape.lineTo(-0.3, -0.2);
    shape.lineTo(-0.3, -2.2);
    shape.lineTo(-0.9, -2.2);
    shape.quadraticCurveTo(-1.6, -1.8, -1.6, -0.6);
    shape.lineTo(-1.3, 0.8);
    shape.quadraticCurveTo(-0.8, 1.8, 0, 2.2);

    const extrudeSettings = {
      steps: 2,
      depth: 0.45,
      bevelEnabled: true,
      bevelThickness: 0.12,
      bevelSize: 0.12,
      bevelOffset: 0,
      bevelSegments: 8,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1E8FBF,
      transmission: 0.85,
      opacity: 0.95,
      transparent: true,
      roughness: 0.15,
      metalness: 0.1,
      ior: 1.5,
      thickness: 1.2,
      specularIntensity: 1.5,
      clearcoat: 1.0,
      emissive: 0x1F2E8C,
      emissiveIntensity: 0.25,
    });

    const emblemMesh = new THREE.Mesh(geometry, glassMaterial);
    scene.add(emblemMesh);

    const ringGeo = new THREE.TorusGeometry(2.4, 0.03, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x12D6C4,
      emissive: 0x5CF2E0,
      emissiveIntensity: 2.0,
    });
    const seamRing = new THREE.Mesh(ringGeo, ringMat);
    seamRing.rotation.x = Math.PI / 3;
    scene.add(seamRing);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      emblemMesh.rotation.y = elapsedTime * 0.4 + mouseX * 0.5;
      emblemMesh.rotation.x = Math.sin(elapsedTime * 0.5) * 0.15 - mouseY * 0.5;
      emblemMesh.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      seamRing.rotation.z = elapsedTime * 0.2;
      seamRing.rotation.y = elapsedTime * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      geometry.dispose();
      glassMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[600px] flex items-center justify-center">
      {/* Background Hero Motif Image from /BG/hero.png */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full h-full max-w-[500px] max-h-[500px] rounded-3xl overflow-hidden glass-panel border border-[#12D6C4]/30 shadow-2xl group">
          <Image
            src="/BG/hero.png"
            alt="TecWrites Pen-Nib Bracket Kinetic Motif"
            fill
            className="object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity hover:mix-blend-normal"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent opacity-60" />
        </div>
      </div>

      {/* 3D WebGL Canvas Layer Overlay */}
      <div ref={mountRef} className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing" />

      {/* Glossy Backdrop Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-[#1F2E8C]/30 via-[#1E8FBF]/25 to-[#12D6C4]/40 blur-3xl pointer-events-none -z-10 animate-pulse" />
    </div>
  );
}

