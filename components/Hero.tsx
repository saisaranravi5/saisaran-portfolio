"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Image from "next/image";
import ParticleBackground from "@/components/ParticleBackground";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const roles = personalInfo.roles;

export default function Hero() {
  const [idx,       setIdx]       = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing,    setTyping]    = useState(true);
  const nameRef  = useRef<HTMLSpanElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    const handleScroll = () => {
      raf = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Name parallax fade
        const nameEl = nameRef.current;
        if (nameEl) {
          const nameStart = 80;
          const nameEnd = window.innerHeight * 0.6;
          const nameP = Math.min(1, Math.max(0, (scrollY - nameStart) / (nameEnd - nameStart)));
          nameEl.style.opacity = String(1 - nameP);
          nameEl.style.transform = `scale(${1 + nameP * 0.06})`;
        }

        // Photo fade
        const photoEl = photoRef.current;
        if (photoEl) {
          const photoStart = 50;
          const photoEnd = window.innerHeight * 0.5;
          const photoP = Math.min(1, Math.max(0, (scrollY - photoStart) / (photoEnd - photoStart)));
          photoEl.style.opacity = String(1 - photoP);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const current = roles[idx];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), 2200);
      return () => clearTimeout(t);
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      }
      setIdx((i) => (i + 1) % roles.length);
      setTyping(true);
    }
  }, [displayed, typing, idx]);

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", background: "#0f0f0f" }}>

      <ParticleBackground />

      {/* Content */}
      <div className="wrap" style={{ paddingTop: "100px", paddingBottom: "80px", position: "relative", zIndex: 1 }}>
        <div className="grid-hero">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 14px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", fontSize: "0.8rem", color: "#c0c0c0", marginBottom: "32px" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
              Open to new opportunities
            </div>

            <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.08, marginBottom: "18px", letterSpacing: "-0.03em" }}>
              <span style={{ color: "#ffffff" }}>Hi, I&apos;m</span><br />
              <span ref={nameRef} style={{ background: "linear-gradient(135deg, #ffffff 0%, #a3a3a3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", display: "inline-block", transformOrigin: "left center" }}>
                Sai Saran Ravi
              </span>
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
              <div style={{ width: "28px", height: "1.5px", background: "rgba(255,255,255,0.3)", borderRadius: "2px", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "#c0c0c0", fontWeight: 500, minHeight: "1.4em" }}>
                {displayed}<span style={{ opacity: 0.3 }}>|</span>
              </span>
            </div>

            <p style={{ color: "#c0c0c0", fontSize: "1rem", lineHeight: 1.78, marginBottom: "28px", maxWidth: "480px" }}>
              I find the story in the data and make sure the right people can act on it.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#c0c0c0", fontSize: "0.8rem", marginBottom: "36px" }}>
              <MapPin size={13} />
              Amherst, MA, United States &nbsp;·&nbsp;
              <strong style={{ color: "#c0c0c0", fontWeight: 600 }}>Open to relocation</strong>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "36px" }}>
              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 28px", borderRadius: "999px", background: "#ffffff", color: "#0a0a0a", fontSize: "0.9rem", fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 24px rgba(255,255,255,0.1)" }}
              >
                View Projects <ArrowRight size={15} />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href={`mailto:${personalInfo.email}`}
                style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", borderRadius: "999px", background: "transparent", color: "#e5e5e5", fontSize: "0.9rem", fontWeight: 500, border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none" }}
              >
                Get in Touch
              </motion.a>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              {[
                { href: personalInfo.github,            icon: <GitHubIcon size={17} />,   label: "GitHub" },
                { href: personalInfo.linkedin,          icon: <LinkedInIcon size={17} />, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: <Mail size={17} />,         label: "Email" },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label} whileHover={{ y: -2 }}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", color: "#c0c0c0", textDecoration: "none" }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div ref={photoRef} style={{ height: "555px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.5)", position: "relative" }}>
              <Image
                src="/picture.jpg"
                fill
                alt="Sai Saran Ravi"
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
