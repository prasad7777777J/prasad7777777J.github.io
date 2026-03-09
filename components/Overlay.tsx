"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
  canvasReady: boolean;
}

function ParallaxText({
  scrollYProgress,
  visibleRange,
  children,
  className = "",
  parallaxAmount = 25,
}: {
  scrollYProgress: MotionValue<number>;
  visibleRange: [number, number, number, number];
  children: React.ReactNode;
  className?: string;
  parallaxAmount?: number;
}) {
  const [a, b, c, d] = visibleRange;
  const opacity = useTransform(scrollYProgress, [a, b, c, d], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [a, b, c, d], [parallaxAmount, 0, 0, -parallaxAmount]);

  return (
    <motion.div style={{ opacity, y }} className={`absolute ${className}`}>
      {children}
    </motion.div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-[10px] tracking-[0.25em] uppercase mb-4 px-3 py-1 rounded-full"
      style={{
        fontFamily: "var(--font-dm-mono)",
        color: "var(--accent-lime)",
        border: "1px solid rgba(212,255,77,0.3)",
        background: "rgba(212,255,77,0.05)",
      }}
    >
      {children}
    </span>
  );
}

export default function Overlay({ scrollYProgress, canvasReady }: OverlayProps) {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>

      {/* Section 1 — CENTER — 0–22% */}
      <ParallaxText
        scrollYProgress={scrollYProgress}
        visibleRange={[0, 0.02, 0.16, 0.22]}
        className="inset-0 flex flex-col items-center justify-center text-center px-6"
        parallaxAmount={20}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={canvasReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Tag>Open to Work · 2025</Tag>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={canvasReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="font-black text-center leading-[0.9] tracking-tight"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(3rem, 9vw, 8rem)",
            color: "var(--text-primary)",
          }}
        >
          <span className="block">Sai Prasad</span>
          <span
            className="block"
            style={{
              WebkitTextStroke: "1px rgba(240,237,232,0.3)",
              WebkitTextFillColor: "transparent",
            }}
          >
            Kommineni.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={canvasReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-lg md:text-xl tracking-wide"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
        >
          Python · ML · NLP · Generative AI
        </motion.p>
      </ParallaxText>

      {/* Section 2 — LEFT — 22–48% */}
      <ParallaxText
        scrollYProgress={scrollYProgress}
        visibleRange={[0.22, 0.28, 0.42, 0.48]}
        className="left-[5vw] md:left-[8vw] top-1/2 -translate-y-1/2 max-w-sm md:max-w-lg"
        parallaxAmount={30}
      >
        <Tag>02 — Expertise</Tag>
        <h2
          className="font-black leading-[1.05] tracking-tight"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2.2rem, 6vw, 5rem)",
            color: "var(--text-primary)",
          }}
        >
          Building with{" "}
          <span style={{ color: "var(--accent-lime)" }}>AI</span>
          <br />& data.
        </h2>
        <p
          className="mt-4 text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)", fontWeight: 300 }}
        >
          RAG pipelines, LLM fine-tuning, and intelligent agents — turning complex data into real-world solutions.
        </p>
        <div className="flex gap-3 mt-6 items-center">
          <div className="h-[1px] w-12" style={{ background: "var(--accent-lime)" }} />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dm-mono)" }}
          >
            Python · AWS · SQL · LLMs
          </span>
        </div>
      </ParallaxText>

      {/* Section 3 — RIGHT — 48–74% */}
      <ParallaxText
        scrollYProgress={scrollYProgress}
        visibleRange={[0.48, 0.54, 0.68, 0.74]}
        className="right-[5vw] md:right-[8vw] top-1/2 -translate-y-1/2 max-w-sm md:max-w-lg text-right"
        parallaxAmount={30}
      >
        <div className="flex justify-end">
          <Tag>03 — Mission</Tag>
        </div>
        <h2
          className="font-black leading-[1.05] tracking-tight"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2.2rem, 6vw, 5rem)",
            color: "var(--text-primary)",
          }}
        >
          Data-driven
          <br />
          <span style={{ color: "var(--accent-lime)" }}>innovation</span>
          <br />at scale.
        </h2>
        <p
          className="mt-4 text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)", fontWeight: 300 }}
        >
          From NIT Mizoram to UIS — combining rigorous engineering with cutting-edge AI research.
        </p>
        <div className="flex justify-end gap-8 mt-8">
          {[
            { val: "3+", label: "Years" },
            { val: "MS", label: "Analytics" },
            { val: "NIT", label: "Alumni" },
          ].map((m) => (
            <div key={m.label} className="text-right">
              <div className="font-black text-3xl" style={{ fontFamily: "var(--font-syne)", color: "var(--accent-lime)" }}>
                {m.val}
              </div>
              <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dm-mono)" }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </ParallaxText>

      {/* Section 4 — CENTER — 74–100% */}
      <ParallaxText
        scrollYProgress={scrollYProgress}
        visibleRange={[0.74, 0.80, 0.94, 1.0]}
        className="inset-0 flex flex-col items-center justify-center text-center px-6"
        parallaxAmount={20}
      >
        <Tag>04 — Selected Work</Tag>
        <h2
          className="font-black leading-[0.95] tracking-tight"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            color: "var(--text-primary)",
          }}
        >
          See what
          <br />
          <span style={{ WebkitTextStroke: "1px rgba(240,237,232,0.3)", WebkitTextFillColor: "transparent" }}>
            I've built.
          </span>
        </h2>
        <p className="mt-6 text-lg" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
          Keep scrolling ↓
        </p>
      </ParallaxText>
    </div>
  );
}