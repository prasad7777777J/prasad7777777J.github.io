"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  const mouseX = useSpring(0, { damping: 28, stiffness: 400, mass: 0.5 });
  const mouseY = useSpring(0, { damping: 28, stiffness: 400, mass: 0.5 });

  // Dot — snappier
  const dotX = useSpring(0, { damping: 40, stiffness: 600, mass: 0.3 });
  const dotY = useSpring(0, { damping: 40, stiffness: 600, mass: 0.3 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setHidden(false);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onEnterLink = (e: Event) => {
      const t = e.target as HTMLElement;
      if (
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.closest("a") ||
        t.closest("button")
      ) {
        setHovered(true);
      }
    };

    const onLeaveLink = () => setHovered(false);
    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnterLink);
    window.addEventListener("mouseout", onLeaveLink);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnterLink);
      window.removeEventListener("mouseout", onLeaveLink);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY, dotX, dotY]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Outer ring — lagged */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovered ? 52 : clicked ? 28 : 36,
          height: hovered ? 52 : clicked ? 28 : 36,
          border: `1px solid ${hovered ? "var(--accent-lime)" : "rgba(240,237,232,0.4)"}`,
          opacity: hidden ? 0 : 1,
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.15s ease, opacity 0.2s ease",
          mixBlendMode: "normal",
        }}
      />

      {/* Inner dot — precise */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovered ? 6 : 4,
          height: hovered ? 6 : 4,
          background: hovered ? "var(--accent-lime)" : "var(--text-primary)",
          opacity: hidden ? 0 : 1,
          transition: "width 0.15s ease, height 0.15s ease, background 0.15s ease, opacity 0.2s ease",
        }}
      />
    </>
  );
}
