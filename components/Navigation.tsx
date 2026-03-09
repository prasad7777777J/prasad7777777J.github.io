"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setIsScrolled(v > 40));
    return unsub;
  }, [scrollY]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-5 md:px-10 lg:px-16 py-5 flex items-center justify-between transition-all duration-500"
        style={{
          background:    isScrolled ? "rgba(10,10,10,0.88)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom:  isScrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        {/* Logo */}
        <a href="/" className="relative z-10 pointer-events-auto" aria-label="Home">
          <span className="font-black text-xl tracking-tight"
            style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>
            SPK<span style={{ color: "var(--accent-lime)" }}>.</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}
              className="nav-link pointer-events-auto text-sm tracking-wide transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)", color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="mailto:psai28071@gmail.com"
          className="hidden md:inline-flex pointer-events-auto items-center gap-2 px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300"
          style={{ fontFamily: "var(--font-dm-mono)", background: "var(--accent-lime)", color: "#000", fontWeight: 500 }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#c0f000")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent-lime)")}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-black" aria-hidden="true" />
          Hire Me
        </a>

        {/* Hamburger */}
        <button className="md:hidden pointer-events-auto flex flex-col gap-[5px] w-6"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <motion.span animate={menuOpen ? { rotate: 45,  y: 7  } : { rotate: 0, y: 0 }}
            className="block h-[1px] w-full" style={{ background: "var(--text-primary)" }} />
          <motion.span animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
            className="block h-[1px] w-full" style={{ background: "var(--text-primary)" }} />
          <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block h-[1px] w-full" style={{ background: "var(--text-primary)" }} />
        </button>
      </motion.header>

      {/* Mobile overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 flex flex-col justify-center items-center"
        style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)" }}
      >
        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="font-black text-4xl tracking-tight"
              style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a href="mailto:psai28071@gmail.com"
            initial={{ opacity: 0 }} animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm tracking-widest uppercase"
            style={{ fontFamily: "var(--font-dm-mono)", color: "var(--accent-lime)" }}
          >
            psai28071@gmail.com
          </motion.a>
        </nav>
      </motion.div>
    </>
  );
}