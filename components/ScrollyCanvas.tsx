"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";
import Overlay from "./Overlay";

// ── Config ────────────────────────────────────────────────────────────────────
const TOTAL_FRAMES = 120;
const DELAY = "0.066s";
const LERP_SPEED = 6; // higher = snappier, lower = more cinematic lag

function getFramePath(i: number) {
  const base = typeof window !== "undefined" && window.location.hostname !== "localhost"
    ? "/Sai-Prasad-Kommineni.github.io"
    : "";
  return `${base}/sequence/frame_${i.toString().padStart(3, "0")}_delay-${DELAY}.webp`;
}
const FRAME_PATHS = Array.from({ length: TOTAL_FRAMES }, (_, i) => getFramePath(i));

// ── Cover-fit helper ──────────────────────────────────────────────────────────
function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  W: number,
  H: number
) {
  if (!img.complete || img.naturalWidth === 0) return;
  const ir = img.naturalWidth / img.naturalHeight;
  const cr = W / H;
  let dw: number, dh: number, ox: number, oy: number;
  if (ir > cr) {
    dh = H; dw = dh * ir;
    ox = (W - dw) / 2; oy = 0;
  } else {
    dw = W; dh = dw / ir;
    ox = 0; oy = (H - dh) / 2;
  }
  ctx.drawImage(img, ox, oy, dw, dh);
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const images       = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));

  // Use refs for animation state — no re-renders inside the loop
  const targetRef  = useRef(0);   // desired frame (float)
  const currentRef = useRef(0);   // smoothed frame (float)
  const lastTimeRef = useRef(0);  // for delta-time lerp
  const rafRef     = useRef<number | null>(null);
  const lastDrawnFrame = useRef(-1); // skip draw if frame unchanged

  const [canvasReady, setCanvasReady] = useState(false);

  // ── Resize ────────────────────────────────────────────────────────────────
  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = window.innerWidth  * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width  = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    // Re-scale context after resize
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
    lastDrawnFrame.current = -1; // force redraw
  }, []);

  // ── Draw exactly one frame (no blending = no flicker) ────────────────────
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const W = canvas.width  / dpr;
    const H = canvas.height / dpr;

    ctx.clearRect(0, 0, W, H);
    drawCover(ctx, img, W, H);
    lastDrawnFrame.current = frameIndex;
  }, []);

  // ── Persistent animation loop (never cancelled after start) ──────────────
  const startLoop = useCallback(() => {
    if (rafRef.current !== null) return; // already running

    const loop = (timestamp: number) => {
      const dt = Math.min((timestamp - lastTimeRef.current) / 1000, 0.05); // cap at 50ms
      lastTimeRef.current = timestamp;

      const current = currentRef.current;
      const target  = targetRef.current;
      const diff    = target - current;

      // Delta-time lerp — frame-rate independent smoothing
      const next = Math.abs(diff) < 0.005
        ? target
        : current + diff * (1 - Math.exp(-LERP_SPEED * dt));

      currentRef.current = next;

      const frameIndex = Math.round(Math.max(0, Math.min(TOTAL_FRAMES - 1, next)));

      // Only redraw if we moved to a different frame
      if (frameIndex !== lastDrawnFrame.current) {
        drawFrame(frameIndex);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
  }, [drawFrame]);

  // ── Preload images ────────────────────────────────────────────────────────
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    // Frame 0 — draw immediately, then reveal canvas
    const f0 = new Image();
    f0.onload = () => {
      images.current[0] = f0;
      drawFrame(0);
      setTimeout(() => {
        setCanvasReady(true);
        startLoop(); // start the persistent loop after first frame is ready
      }, 80);
    };
    f0.src = FRAME_PATHS[0];

    // Frames 1–40 load immediately (fast, no stagger)
    for (let i = 1; i <= 40; i++) {
      const img = new Image();
      img.onload = () => { images.current[i] = img; };
      img.src = FRAME_PATHS[i];
    }

    // Frames 41+ load with a gentle stagger
    for (let i = 41; i < TOTAL_FRAMES; i++) {
      const delay = (i - 40) * 15;
      setTimeout(() => {
        const img = new Image();
        img.onload = () => { images.current[i] = img; };
        img.src = FRAME_PATHS[i];
      }, delay);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [resize, drawFrame, startLoop]);

  // ── Scroll → target frame ─────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    // Just update the target — the loop handles the rest
    targetRef.current = Math.max(0, Math.min(1, p)) * (TOTAL_FRAMES - 1);
  });

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: "500vh" }}
      aria-label="Scrollytelling intro"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Canvas — fades in once frame 0 is painted */}
        <motion.canvas
          ref={canvasRef}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: canvasReady ? 1 : 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          style={{ width: "100%", height: "100%", display: "block" }}
          aria-hidden="true"
        />

        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 45%, rgba(10,10,10,0.6) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Bottom fade → blends into Projects section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0A0A0A)" }}
          aria-hidden="true"
        />

        <Overlay scrollYProgress={scrollYProgress} canvasReady={canvasReady} />
        <ScrollIndicator scrollYProgress={scrollYProgress} canvasReady={canvasReady} />
      </div>
    </section>
  );
}

// ── Scroll indicator ──────────────────────────────────────────────────────────
function ScrollIndicator({
  scrollYProgress,
  canvasReady,
}: {
  scrollYProgress: MotionValue<number>;
  canvasReady: boolean;
}) {
  const opacity = useTransform(scrollYProgress, [0, 0.07], [1, 0]);
  const y       = useTransform(scrollYProgress, [0, 0.07], [0, 16]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      animate={canvasReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
      aria-hidden="true"
    >
      <span
        className="text-[10px] tracking-[0.3em] uppercase"
        style={{ color: "rgba(240,237,232,0.35)", fontFamily: "var(--font-dm-mono)" }}
      >
        Scroll to explore
      </span>
      <div
        className="w-[1px] overflow-hidden"
        style={{ height: "44px", background: "rgba(240,237,232,0.08)" }}
      >
        <motion.div
          className="w-full"
          style={{ height: "50%", background: "var(--accent-lime)" }}
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}