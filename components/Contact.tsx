"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
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

const contactLinks = [
  { label: "Email",    value: personalInfo.email,                href: `mailto:${personalInfo.email}`, icon: <Mail size={17} /> },
  { label: "LinkedIn", value: "linkedin.com/in/sai-saran-ravi", href: personalInfo.linkedin,          icon: <LinkedInIcon size={17} /> },
  { label: "GitHub",   value: "github.com/saisaranravi5",       href: personalInfo.github,            icon: <GitHubIcon size={17} /> },
];

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" ref={ref} style={{ background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "96px 0", position: "relative", overflow: "hidden" }}>
      <ParticleBackground />
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "60px" }}>
          <motion.span className="eyebrow" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: "easeOut" }}>Contact</motion.span>
          <motion.h2 className="section-heading" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>Let&apos;s work <span className="gradient-text">together.</span></motion.h2>
        </div>

        <div className="grid-two-equal">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1, duration: 0.55 }}>
            <p style={{ color: "#c0c0c0", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "14px" }}>
              I&apos;m looking for Data Analyst, Product Analyst, and BI roles.
            </p>
            <p style={{ color: "#c0c0c0", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "40px" }}>
              If the numbers are there but the decisions aren&apos;t, that&apos;s exactly the problem I want to work on.
            </p>
            <motion.a
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              href={`mailto:${personalInfo.email}`}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 30px", borderRadius: "999px", background: "#ffffff", color: "#0a0a0a", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 24px rgba(255,255,255,0.08)" }}
            >
              <Mail size={16} /> Say Hello →
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.55 }} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                whileHover={{ y: -2, transition: { duration: 0.15 } }}
                className="card"
                style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}
              >
                <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c0c0c0", flexShrink: 0 }}>
                  {link.icon}
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a3a3a3", marginBottom: "3px" }}>{link.label}</p>
                  <p style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{link.value}</p>
                </div>
                <ArrowUpRight size={14} color="rgba(255,255,255,0.3)" style={{ flexShrink: 0 }} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
