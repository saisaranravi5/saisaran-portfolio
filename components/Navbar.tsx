"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const { href } of [...links].reverse()) {
        const el = document.getElementById(href.slice(1));
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(href.slice(1));
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-xl border-b border-[#e5e5e5]" : "bg-transparent border-b border-transparent"
        }`}
      >
        <div
          className="wrap"
          style={{ height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: scrolled ? "#0a0a0a" : "#ffffff",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
          >
            SSR
          </button>

          <nav className="hidden md:flex items-center" style={{ gap: "2px" }}>
            {links.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = active === id;
              return (
                <button
                  key={href}
                  onClick={() => go(href)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: scrolled ? (isActive ? "#0a0a0a" : "#737373") : (isActive ? "#ffffff" : "rgba(255,255,255,0.55)"),
                    background: isActive && scrolled ? "#f5f5f5" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.15s, background 0.15s",
                  }}
                >
                  {label}
                </button>
              );
            })}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: "16px",
                padding: "8px 22px",
                borderRadius: "999px",
                background: "#0a0a0a",
                color: "#fff",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Resume ↗
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ padding: "8px", borderRadius: "8px", color: "#737373", background: "none", border: "none", cursor: "pointer" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden fixed inset-x-0 z-40 bg-white border-b border-[#e5e5e5] shadow-lg"
            style={{ top: "68px" }}
          >
            <div className="wrap" style={{ paddingTop: "12px", paddingBottom: "16px", display: "flex", flexDirection: "column", gap: "2px" }}>
              {links.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => go(href)}
                  style={{ textAlign: "left", padding: "11px 16px", borderRadius: "10px", fontSize: "0.9rem", color: "#404040", background: "none", border: "none", cursor: "pointer" }}
                >
                  {label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "8px", padding: "12px", borderRadius: "999px", background: "#0a0a0a", color: "#fff", fontSize: "0.875rem", fontWeight: 600, textAlign: "center", textDecoration: "none" }}
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
