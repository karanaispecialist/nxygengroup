"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth luxury spring physics for trailing aura
  const springConfig = { damping: 25, stiffness: 300, mass: 0.2 };
  const auraX = useSpring(cursorX, springConfig);
  const auraY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only activate on desktop non-touch devices
    if (window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect hover on interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, input, select, textarea, [role="button"], .cursor-pointer, [data-cursor="pointer"]'
      );
      setIsHovered(Boolean(interactive));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central precision gold pointer dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full bg-nxgen-gold shadow-[0_0_12px_rgba(212,175,55,0.9)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 6 : 8,
          height: isHovered ? 6 : 8,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Luxury smooth trailing aura */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border border-nxgen-gold/40 transition-colors duration-200"
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 52 : 30,
          height: isHovered ? 52 : 30,
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.12)" : "rgba(212, 175, 55, 0.03)",
          backdropFilter: isHovered ? "blur(1px)" : "none",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}

