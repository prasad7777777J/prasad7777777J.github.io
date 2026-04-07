"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    icon: "🐍",
    title: "Programming & Data",
    accent: "#D4FF4D",
    skills: ["Python", "SQL", "Pandas", "NumPy", "Linux", "Git"],
  },
  {
    icon: "🤖",
    title: "Machine Learning & AI",
    accent: "#60A5FA",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "H2O Driverless AI", "Computer Vision", "CNNs", "Transformers", "GANs"],
  },
  {
    icon: "🚀",
    title: "NLP & Generative AI",
    accent: "#A78BFA",
    skills: ["LangChain", "LangGraph", "RAG Systems", "LLM Fine-tuning (LoRA-PEFT)", "Prompt Engineering", "Stable Diffusion", "DALL-E", "Multi-Agent Systems"],
  },
  {
    icon: "☁️",
    title: "Cloud & Engineering",
    accent: "#FF3B2F",
    skills: ["AWS (S3, SageMaker, Comprehend)", "Azure OpenAI", "Azure ML", "Azure Cognitive Services", "Azure Data Lake", "Azure Form Recognizer", "FastAPI", "REST APIs", "Streamlit", "Postman"],
  },
  {
    icon: "🗄️",
    title: "Databases & Vector Stores",
    accent: "#34D399",
    skills: ["MySQL", "XAMPP", "Pinecone", "FAISS", "Redis", "Astra DB", "Vector Stores", "Data Modelling"],
  },
  {
    icon: "📊",
    title: "Analytics & Visualisation",
    accent: "#F59E0B",
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Statistical Analysis", "Time-Series Forecasting", "Streamlit"],
  },
];

const CERTS = [
  {
    title: "NVIDIA Certified Associate",
    sub: "Generative AI LLMs",
    accent: "#76b900",
  },
  {
    title: "Academy Accreditation",
    sub: "AI Agent Fundamentals",
    accent: "#D4FF4D",
  },
];

function SkillCard({ group, index }: { group: typeof SKILL_GROUPS[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl p-6 md:p-7 transition-all duration-300 group"
    >
      {/* Top accent */}
      <div className="h-[1px] w-full mb-6 rounded-full"
        style={{ background: `linear-gradient(90deg, ${group.accent}80, transparent)` }} />

      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{group.icon}</span>
        <h3 className="font-bold text-sm tracking-wide"
          style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>
          {group.title}
        </h3>
      </div>

      {/* Skills grid */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="text-[11px] px-3 py-1.5 rounded-full transition-all duration-200"
            style={{
              fontFamily: "var(--font-dm-mono)",
              color: "var(--text-secondary)",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = group.accent;
              e.currentTarget.style.borderColor = `${group.accent}50`;
              e.currentTarget.style.background = `${group.accent}0a`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 md:px-10 lg:px-16 py-24 md:py-32 bg-[#0A0A0A]">
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
              Technical Arsenal
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-black leading-[0.9] tracking-tight"
              style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(3rem, 7vw, 6rem)", color: "var(--text-primary)" }}
            >
              Skills.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-xs text-sm leading-relaxed md:text-right"
            style={{ color: "var(--text-secondary)", fontWeight: 300 }}
          >
            Full-stack data science and ML engineering — from raw data to deployed AI systems.
          </motion.p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} />
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-10 md:mt-12">
          <motion.h3
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs tracking-[0.25em] uppercase mb-6"
            style={{ fontFamily: "var(--font-dm-mono)", color: "var(--text-secondary)" }}
          >
            Certifications
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTS.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-xl px-6 py-4 flex items-center gap-4"
              >
                <span className="text-xl">🏆</span>
                <div>
                  <div className="font-bold text-sm" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>
                    {cert.title}
                  </div>
                  <div className="text-xs mt-0.5" style={{ fontFamily: "var(--font-dm-mono)", color: cert.accent }}>
                    {cert.sub}
                  </div>
                </div>
                <div className="ml-auto h-[1px] w-8" style={{ background: cert.accent }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}