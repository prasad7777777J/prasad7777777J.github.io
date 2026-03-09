"use client";

import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    id: "01",
    role: "Data Science & Gen AI Consultant",
    company: "J-Monk Devops",
    location: "United States",
    period: "Jul 2024 – Present",
    type: "Full-time",
    accent: "#D4FF4D",
    bullets: [
      "Architected end-to-end RAG pipelines combining semantic search with LLM generation, delivering context-aware answers over enterprise knowledge bases.",
      "Fine-tuned large language models using LoRA and PEFT techniques for domain-specific tasks, achieving significant accuracy gains on specialised datasets.",
      "Built multi-agent orchestration frameworks enabling autonomous task decomposition, tool use, and decision-making — certified by NVIDIA in AI Agent Fundamentals.",
      "Leveraged AWS cloud infrastructure (S3, Lambda, SageMaker) to deploy and scale production-ready AI systems.",
    ],
    tags: ["Python", "LangChain", "LangGraph", "AWS", "LLM Fine-tuning", "RAG", "PyTorch"],
  },
  {
    id: "02",
    role: "Associate Software Engineer — Data Science",
    company: "Innominds",
    location: "Hyderabad, India",
    period: "Jan 2024 – Jun 2024",
    type: "Full-time",
    accent: "#60A5FA",
    bullets: [
      "Developed data science solutions within a cross-functional engineering team, focusing on NLP pipelines and predictive modelling.",
      "Collaborated with client stakeholders to deliver production-ready ML solutions with robust deployment pipelines.",
      "Optimised model performance and reduced inference latency through systematic experimentation and profiling.",
    ],
    tags: ["Python", "NLP", "Scikit-learn", "Docker", "SQL", "Git"],
  },
  {
    id: "03",
    role: "Data Scientist Trainee",
    company: "Innominds",
    location: "Hyderabad, India",
    period: "Jun 2022 – Dec 2023",
    type: "Trainee",
    accent: "#A78BFA",
    bullets: [
      "Built end-to-end ML pipelines for classification, regression, and clustering tasks across multiple client datasets.",
      "Conducted deep exploratory data analysis and feature engineering, improving downstream model accuracy by 15%.",
      "Deployed models to production using Docker and REST APIs, achieving 99.5% uptime across live systems.",
    ],
    tags: ["Python", "TensorFlow", "SQL", "Pandas", "Docker", "REST APIs"],
  },
];

const EDUCATION = [
  {
    id: "04",
    role: "Master of Science — Data Analytics",
    company: "University of Illinois Springfield",
    location: "Springfield, Illinois",
    period: "Aug 2024 – Dec 2025",
    type: "Education",
    accent: "#FF3B2F",
    bullets: [
      "Advanced coursework in statistical modelling, big data systems, machine learning, and applied AI.",
      "Focusing on real-world data engineering and analytics projects with industry-relevant tooling.",
    ],
    tags: ["Data Analytics", "ML", "Big Data", "Statistics"],
  },
  {
    id: "05",
    role: "Bachelor of Technology — Computer Science",
    company: "National Institute of Technology Mizoram",
    location: "Mizoram, India",
    period: "Jan 2018 – Jul 2022",
    type: "Education",
    accent: "#FF3B2F",
    bullets: [
      "Core curriculum in algorithms, data structures, software engineering, and computer networks.",
      "Built foundation in programming, systems design, and applied mathematics.",
    ],
    tags: ["Computer Science", "Algorithms", "Software Engineering"],
  },
];

function ExperienceCard({ item, index }: { item: typeof EXPERIENCE[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative glass-card rounded-2xl p-7 md:p-9 transition-all duration-500"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${item.accent}60, transparent)` }} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs" style={{ fontFamily: "var(--font-dm-mono)", color: item.accent }}>
              {item.id}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full"
              style={{ fontFamily: "var(--font-dm-mono)", color: item.accent, border: `1px solid ${item.accent}40`, background: `${item.accent}10` }}>
              {item.type}
            </span>
          </div>
          <h3 className="font-black text-xl md:text-2xl leading-tight"
            style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>
            {item.role}
          </h3>
          <p className="mt-1 text-sm" style={{ color: item.accent, fontFamily: "var(--font-dm-mono)" }}>
            {item.company} · {item.location}
          </p>
        </div>
        <span className="shrink-0 text-xs px-3 py-1.5 rounded-full self-start"
          style={{ fontFamily: "var(--font-dm-mono)", color: "var(--text-secondary)", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
          {item.period}
        </span>
      </div>

      {/* Bullets */}
      <ul className="flex flex-col gap-3 mb-6">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
            <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: item.accent }} />
            {b}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ fontFamily: "var(--font-dm-mono)", color: "var(--text-secondary)", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 md:px-10 lg:px-16 py-24 md:py-32 bg-[#0A0A0A]">
      <div className="hr-gradient mb-16" />
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-block text-[10px] tracking-[0.3em] uppercase mb-4 px-3 py-1 rounded-full"
            style={{ fontFamily: "var(--font-dm-mono)", color: "var(--accent-lime)", border: "1px solid rgba(212,255,77,0.3)", background: "rgba(212,255,77,0.05)" }}
          >
            Professional Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-black leading-[0.9] tracking-tight"
            style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(3rem, 7vw, 6rem)", color: "var(--text-primary)" }}
          >
            Experience.
          </motion.h2>
        </div>

        {/* Experience cards */}
        <div className="flex flex-col gap-5 mb-16">
          {EXPERIENCE.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Education sub-header */}
        <motion.h3
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-black text-2xl md:text-3xl mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}
        >
          Education<span style={{ color: "var(--accent-lime)" }}>.</span>
        </motion.h3>

        <div className="flex flex-col gap-5">
          {EDUCATION.map((item, i) => (
            <ExperienceCard key={item.id} item={item as any} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}