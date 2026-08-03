"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin safely on client
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Global ScrollTrigger defaults
      ScrollTrigger.config({ limitCallbacks: true });

      // Animate all elements with data-gsap="reveal"
      const revealElements = document.querySelectorAll("[data-gsap='reveal']");
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
