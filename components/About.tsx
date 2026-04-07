"use client";

import { motion } from "framer-motion";

const STATS = [
  { icon: "🎓", value: "MS Analytics",    sub: "Univ. of Illinois Springfield" },
  { icon: "💼", value: "3+ Years",         sub: "Production AI Systems" },
  { icon: "🏆", value: "NVIDIA Certified", sub: "Generative AI LLMs" },
  { icon: "🚀", value: "Gen AI Expert",    sub: "RAG · LLMs · Agents" },
];

const MARQUEE_ITEMS = [
  "Python", "·", "Machine Learning", "·", "NLP", "·",
  "RAG", "·", "LLM Fine-tuning", "·", "AWS", "·",
  "SQL", "·", "LangChain", "·", "PyTorch", "·", "Generative AI", "·",
];

function Marquee() {
  return (
    <div className="relative overflow-hidden py-4 border-t border-b"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={i} className="text-sm"
            style={{
              fontFamily: "var(--font-dm-mono)",
              color: item === "·" ? "var(--accent-lime)" : "var(--text-secondary)",
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-[#0A0A0A]">
      {/* Marquee ticker */}
      <div className="px-5 md:px-10 lg:px-16 py-10">
        <Marquee />
      </div>

      <div className="px-5 md:px-10 lg:px-16 pb-24 md:pb-32 max-w-7xl mx-auto">

        {/* Section label */}
        <motion.span
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-[10px] tracking-[0.3em] uppercase mb-6 px-3 py-1 rounded-full"
          style={{ fontFamily: "var(--font-dm-mono)", color: "var(--accent-lime)", border: "1px solid rgba(212,255,77,0.3)", background: "rgba(212,255,77,0.05)" }}
        >
          Get to Know Me
        </motion.span>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left – heading + bio */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-black leading-[0.9] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", color: "var(--text-primary)" }}
            >
              About
              <br />
              <span style={{ WebkitTextStroke: "1px rgba(240,237,232,0.25)", WebkitTextFillColor: "transparent" }}>
                Me.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              <p className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
                I&apos;m a Data Scientist and Generative AI Consultant at J-Monk DevOps, specialising in RAG pipelines, LLM fine-tuning, and autonomous AI agents. With a background in Computer Science from NIT Mizoram and an MS in Data Analytics at the University of Illinois Springfield, I combine rigorous engineering with cutting-edge AI research.
              </p>
              <p className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
                My work spans AWS and Azure cloud infrastructure — from deploying fine-tuned LLMs on Azure VMs with FastAPI to building SageMaker-backed ML pipelines — solving complex real-world problems across healthcare, insurance, and FMCG domains.
              </p>
              <p className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
                Currently open to full-time AI Engineer, Data Scientist, ML Engineer, AI Architect, and Data Engineer roles across the USA.
              </p>

              {/* Status */}
              <div className="flex items-center gap-3 mt-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent-lime)" }} />
                <span className="text-sm" style={{ fontFamily: "var(--font-dm-mono)", color: "var(--accent-lime)" }}>
                  Open to Work · Granite City, Illinois
                </span>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                <a href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs tracking-widest uppercase pointer-events-auto transition-all duration-300"
                  style={{ fontFamily: "var(--font-dm-mono)", background: "var(--accent-lime)", color: "#000", fontWeight: 500 }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#c0f000")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent-lime)")}
                >
                  View My Work →
                </a>
                <a href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs tracking-widest uppercase pointer-events-auto transition-all duration-300"
                  style={{ fontFamily: "var(--font-dm-mono)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--text-primary)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent-lime)"; e.currentTarget.style.color = "var(--accent-lime)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "var(--text-primary)"; }}
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right – stat cards */}
          <div className="grid grid-cols-2 gap-4 md:pt-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300"
              >
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <div className="font-black text-lg leading-tight"
                    style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>
                    {s.value}
                  </div>
                  <div className="text-xs mt-1 leading-snug"
                    style={{ fontFamily: "var(--font-dm-mono)", color: "var(--text-secondary)" }}>
                    {s.sub}
                  </div>
                </div>
                <div className="h-[1px] w-8 mt-auto" style={{ background: "var(--accent-lime)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}