"use client";

import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    id: "01",
    role: "GenAI & ML Consultant",
    company: "J-Monk DevOps",
    location: "Remote, United States",
    period: "Aug 2024 – Present",
    type: "Internship",
    accent: "#D4FF4D",
    bullets: [
      "Instructed Data Science and Generative AI training classes, delivering curriculum covering ML fundamentals, deep learning, and LLMs.",
      "Mentored students through end-to-end GenAI projects involving RAG pipelines, prompt engineering, and document search using vector databases.",
      "Evaluated student code and model architectures, resolving technical issues in Python, LangChain, and cloud-based ML environments.",
      "Adapted teaching methodologies to ensure comprehension of tools like GPT, LLaMA, and Stable Diffusion.",
    ],
    tags: ["Python", "LangChain", "LLMs", "RAG", "Prompt Engineering", "Vector DBs", "GPT"],
  },
  {
    id: "02",
    role: "Associate Software Engineer – Data Science",
    company: "Innominds Software Pvt. Ltd",
    location: "Hyderabad, India",
    period: "Jun 2023 – Jun 2024",
    type: "Full-time",
    accent: "#60A5FA",
    bullets: [
      "Executed fine-tuning of open-source LLMs (LLaMA, Falcon) using LoRA-PEFT to reduce computational overhead while preserving domain-specific accuracy.",
      "Constructed an end-to-end Retrieval-Augmented Generation (RAG) pipeline, including document chunking and vector indexing in Pinecone/FAISS.",
      "Launched fine-tuned LLM and RAG systems on Azure Virtual Machines using FastAPI; verified request/response flows via Postman.",
      "Programmed an Azure OpenAI solution to extract structured chemical attributes and regulatory details from unstructured queries.",
      "Established a Custom Context Search application using GPT-3.5 Turbo and Pinecone for semantic search over internal policy documents.",
    ],
    tags: ["Python", "LLaMA", "Falcon", "LoRA-PEFT", "RAG", "Pinecone", "FAISS", "Azure VMs", "FastAPI"],
  },
  {
    id: "03",
    role: "Data Scientist Trainee",
    company: "Innominds Software Pvt. Ltd",
    location: "Hyderabad, India",
    period: "Jun 2022 – Jun 2023",
    type: "Trainee",
    accent: "#A78BFA",
    bullets: [
      "Deployed a Feedback Analysis system on AWS Comprehend for real-time sentiment alerts and built an AI-powered Risk Classification system on Azure ML.",
      "Architected a Data Stewardship application on AWS SageMaker using Decision Tree and XGBoost models to automate profile matching with 95%+ accuracy.",
      "Formulated regression and time-series models using H2O Driverless AI to predict market share and revenue growth.",
      "Created a Python-based conversion pipeline that reduced processing time by over 60% through automated data extraction.",
      "Integrated Google Geolocation, NPI, and Google Custom Links APIs for data enrichment within an ML pipeline.",
    ],
    tags: ["Python", "AWS Comprehend", "Azure ML", "SageMaker", "XGBoost", "H2O Driverless AI", "SQL"],
  },
];

const EDUCATION = [
  {
    id: "04",
    role: "Master of Science – Data Analytics",
    company: "University of Illinois Springfield",
    location: "Springfield, Illinois",
    period: "Aug 2024 – Dec 2025",
    type: "Education",
    accent: "#FF3B2F",
    bullets: [
      "GPA: 3.83 / 4.0 — Advanced coursework in statistical modelling, big data systems, machine learning, and applied AI.",
      "Focusing on real-world data engineering and analytics projects with industry-relevant tooling.",
    ],
    tags: ["Data Analytics", "ML", "Big Data", "Statistics"],
  },
  {
    id: "05",
    role: "Bachelor of Engineering – Computer Science",
    company: "National Institute of Technology Mizoram",
    location: "Mizoram, India",
    period: "2018 – 2022",
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