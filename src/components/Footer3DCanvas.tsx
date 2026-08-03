"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Footer3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x12D6C4, 3.0);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x1F2E8C, 3.0);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    // 3. Single Centerpiece Rotating Wireframe Torus Knot
    const knotGeom = new THREE.TorusKnotGeometry(0.95, 0.22, 120, 20);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x12D6C4,
      wireframe: true,
      roughness: 0.1,
      metalness: 1,
      emissive: 0x053030,
    });
    const knotMesh = new THREE.Mesh(knotGeom, knotMat);
    knotMesh.position.set(3.2, 0, -1.2);
    scene.add(knotMesh);

    // 4. Mouse Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 5. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Mouse parallax camera tracking
      camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.6 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Smooth rotation & floating motion for single Wireframe Torus Knot
      knotMesh.rotation.x = elapsedTime * 0.4;
      knotMesh.rotation.y = elapsedTime * 0.6;
      knotMesh.position.y = Math.sin(elapsedTime * 1.5) * 0.25;

      renderer.render(scene, camera);
    };
    animate();

    // 6. Window Resize Handler
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
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden" />;
}
