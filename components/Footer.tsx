"use client";

import { motion } from "framer-motion";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sai-prasad-kommineni-01aa51168/" },
  { label: "GitHub",   href: "https://github.com" },
  { label: "Email",    href: "mailto:psai28071@gmail.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0A0A0A] overflow-hidden">
      <div className="hr-gradient" />

      <div className="px-5 md:px-10 lg:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <span
            className="inline-block text-[10px] tracking-[0.3em] uppercase mb-8 px-3 py-1 rounded-full"
            style={{ fontFamily: "var(--font-dm-mono)", color: "var(--accent-lime)", border: "1px solid rgba(212,255,77,0.3)", background: "rgba(212,255,77,0.05)" }}
          >
            Let's Connect
          </span>

          <h2 className="font-black leading-[0.9] tracking-tight max-w-4xl"
            style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(3rem, 9vw, 8rem)", color: "var(--text-primary)" }}>
            Let's build
            <br />
            <span style={{ WebkitTextStroke: "1px rgba(240,237,232,0.2)", WebkitTextFillColor: "transparent" }}>
              something great.
            </span>
          </h2>

          <p className="mt-6 text-base max-w-md" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
            Open to Data Scientist, ML/AI Engineer, Data Analytics, and Data Engineering roles across the USA. Let's discuss how I can contribute to your team.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <motion.a
              href="mailto:psai28071@gmail.com"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-sm tracking-widest uppercase pointer-events-auto"
              style={{ fontFamily: "var(--font-dm-mono)", background: "var(--accent-lime)", color: "#000", fontWeight: 500 }}
            >
              <span>📧 Email Me</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sai-prasad-kommineni-01aa51168/" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-sm tracking-widest uppercase pointer-events-auto transition-all duration-300"
              style={{ fontFamily: "var(--font-dm-mono)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--text-primary)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent-lime)"; e.currentTarget.style.color = "var(--accent-lime)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "var(--text-primary)"; }}
            >
              <span>💼 LinkedIn</span>
            </motion.a>
          </div>

          <p className="mt-5 text-xs" style={{ fontFamily: "var(--font-dm-mono)", color: "var(--text-secondary)" }}>
            or call · 217 572 0681
          </p>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="px-5 md:px-10 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <span className="font-black text-lg" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>
          SPK<span style={{ color: "var(--accent-lime)" }}>.</span>
        </span>
        <div className="flex gap-6">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="pointer-events-auto text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-mono)", color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-lime)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {s.label}
            </a>
          ))}
        </div>
        <span className="text-xs" style={{ fontFamily: "var(--font-dm-mono)", color: "var(--text-secondary)" }}>
          © {new Date().getFullYear()} Sai Prasad Kommineni
        </span>
      </div>
    </footer>
  );
}