"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "01",
    title: "SQL AI Dashboard",
    subtitle: "Generative AI · Natural Language to SQL",
    tags: ["Python", "LangChain", "OpenAI", "SQLite", "Streamlit"],
    description:
      "Conversational SQL dashboard powered by an LLM — users ask questions in plain English and receive live query results, charts, and data insights without writing a single line of SQL.",
    accent: "#D4FF4D",
    year: "2024",
    link: "https://github.com/prasad7777777J/Gen-AI/tree/main/sql-ai-dashboard",
    size: "large",
    badge: "⚡ NL2SQL · Gen AI",
  },
  {
    id: "02",
    title: "Data Analyst Agent",
    subtitle: "Autonomous Agent · Data Analysis",
    tags: ["Python", "LangChain", "OpenAI", "Pandas", "FastAPI"],
    description:
      "Agentic data analyst that autonomously plans analysis steps, writes and executes code, interprets results, and delivers structured insights — no human prompting in the loop.",
    accent: "#FF3B2F",
    year: "2024",
    link: "https://github.com/prasad7777777J/Gen-AI/tree/main/Data_Analyst_Agent",
    size: "small",
    badge: "🤖 Autonomous Agent",
  },
  {
    id: "03",
    title: "E-Commerce Agent",
    subtitle: "Conversational AI · Retail Automation",
    tags: ["Python", "LangChain", "OpenAI", "FastAPI", "Tools API"],
    description:
      "Multi-tool AI agent for e-commerce workflows — handles product search, order tracking, recommendations, and customer queries end-to-end using function-calling and tool orchestration.",
    accent: "#60A5FA",
    year: "2024",
    link: "https://github.com/prasad7777777J/Gen-AI/tree/main/ecommerce_agent",
    size: "small",
    badge: "🛒 Retail · Tools API",
  },
  {
    id: "04",
    title: "Falcon 7B + LangChain",
    subtitle: "LLM Integration · Open Source Models",
    tags: ["Python", "HuggingFace", "LangChain", "Falcon-7B", "Transformers"],
    description:
      "Production pipeline integrating Falcon-7B open-source LLM with LangChain — enabling custom chains, memory, and retrieval without relying on proprietary APIs, running fully on-premise.",
    accent: "#A78BFA",
    year: "2024",
    link: "https://github.com/prasad7777777J/Gen-AI/tree/main/Falcon_7B_with_LangChain",
    size: "large",
    badge: "🦅 Open Source LLM",
  },
  {
    id: "05",
    title: "LangChain + Pinecone RAG",
    subtitle: "Vector Search · Retrieval-Augmented Generation",
    tags: ["Python", "LangChain", "Pinecone", "OpenAI", "Embeddings"],
    description:
      "Semantic search and Q&A system using Pinecone as the vector store — embeds documents, retrieves top-k relevant chunks, and feeds them into an LLM to produce grounded, citation-backed answers.",
    accent: "#34D399",
    year: "2024",
    link: "https://github.com/prasad7777777J/Gen-AI/tree/main/LangChain_with_pinecone",
    size: "small",
    badge: "📌 Vector Search · RAG",
  },
  {
    id: "06",
    title: "ML Algorithms Suite",
    subtitle: "Machine Learning · End-to-End Pipelines",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    description:
      "Comprehensive ML project covering Regression, Classification (Random Forest ~98% accuracy), Clustering with 3D animated visualisations, and full data preprocessing pipelines on real-world datasets.",
    accent: "#F59E0B",
    year: "2023",
    link: "https://github.com/prasad7777777J/ML",
    size: "small",
    badge: "📊 ML · 98% Accuracy",
  },
] as const;

function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      whileHover="hover"
      className={`group relative rounded-2xl overflow-hidden glass-card transition-all duration-500 cursor-none ${project.size === "large" ? "md:col-span-2" : ""
        }`}
      style={{ minHeight: project.size === "large" ? "400px" : "340px" }}
    >
      {/* Hover glow */}
      <motion.div className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }} variants={{ hover: { opacity: 1 } }} transition={{ duration: 0.3 }}
        style={{ boxShadow: `0 0 80px ${project.accent}18, inset 0 0 0 1px ${project.accent}20` }} />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }} />

      <div className="relative p-7 md:p-9 h-full flex flex-col justify-between gap-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="text-xs tracking-[0.2em]"
                style={{ fontFamily: "var(--font-dm-mono)", color: project.accent }}>
                {project.id}
              </span>
              <span className="text-xs" style={{ fontFamily: "var(--font-dm-mono)", color: "var(--text-secondary)" }}>
                {project.year}
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full self-start"
              style={{ fontFamily: "var(--font-dm-mono)", color: project.accent, border: `1px solid ${project.accent}40`, background: `${project.accent}10` }}>
              {project.badge}
            </span>
          </div>

          {/* Arrow */}
          <motion.div
            variants={{ hover: { x: 0, opacity: 1 } }} initial={{ x: -8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-9 h-9 rounded-full flex items-center justify-center border"
            style={{ borderColor: `${project.accent}40`, color: project.accent, background: `${project.accent}10` }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 12L12 2M12 2H5M12 2V9" />
            </svg>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-end">
          <p className="text-sm mb-3" style={{ fontFamily: "var(--font-dm-mono)", color: "var(--text-secondary)" }}>
            {project.subtitle}
          </p>
          <h3 className="font-black leading-[0.95] mb-4"
            style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}>
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ fontFamily: "var(--font-dm-mono)", color: "var(--text-secondary)", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a href={project.link} target="_blank" rel="noopener noreferrer"
          className="group/link flex items-center gap-2 w-fit pointer-events-auto"
          style={{ color: project.accent }}>
          <span className="text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
            View on GitHub
          </span>
          <motion.span className="inline-block" variants={{ hover: { x: 4 } }} transition={{ duration: 0.2 }}>→</motion.span>
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-5 md:px-10 lg:px-16 py-24 md:py-32 bg-[#0A0A0A]">
      <div className="hr-gradient mb-16" />
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="inline-block text-[10px] tracking-[0.3em] uppercase mb-4 px-3 py-1 rounded-full"
              style={{ fontFamily: "var(--font-dm-mono)", color: "var(--accent-lime)", border: "1px solid rgba(212,255,77,0.3)", background: "rgba(212,255,77,0.05)" }}
            >
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-black leading-[0.9] tracking-tight"
              style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(3rem, 7vw, 6rem)", color: "var(--text-primary)" }}
            >
              Projects.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-xs text-sm leading-relaxed md:text-right"
            style={{ color: "var(--text-secondary)", fontWeight: 300 }}
          >
            Real-world AI systems — from autonomous agents to NL2SQL dashboards — built with Python, LangChain, and open-source LLMs.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }} className="flex justify-center mt-14"
        >
          <a href="https://github.com/prasad7777777J" target="_blank" rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm tracking-widest uppercase overflow-hidden pointer-events-auto"
            style={{ fontFamily: "var(--font-dm-mono)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--text-primary)" }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-full"
              style={{ background: "var(--accent-lime)" }} aria-hidden="true" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-200">View All on GitHub</span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-200">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}