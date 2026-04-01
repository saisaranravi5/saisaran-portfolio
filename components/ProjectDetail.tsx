"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import type { Project } from "@/lib/data";
import { projectContents, type ContentBlock } from "@/lib/projectContent";

function GitHubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function renderBlock(block: ContentBlock, isHook = false): React.ReactNode {
  if (block.type === "p") {
    return (
      <p style={{ color: "#d4d4d4", fontSize: "1rem", lineHeight: 1.82, marginBottom: "16px" }}>
        {block.text}
      </p>
    );
  }

  if (block.type === "h4") {
    return (
      <h4 style={{
        color: "#ffffff",
        fontWeight: 700,
        fontSize: isHook ? "clamp(1.5rem, 3vw, 2rem)" : "1.05rem",
        lineHeight: isHook ? 1.25 : 1.4,
        letterSpacing: isHook ? "-0.02em" : "normal",
        marginBottom: "16px",
        marginTop: isHook ? "0" : "28px",
      }}>
        {block.text}
      </h4>
    );
  }

  if (block.type === "img") {
    return (
      <figure style={{ margin: "32px 0" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={block.src}
          alt={block.caption}
          style={{ width: "100%", borderRadius: "12px", display: "block" }}
        />
        <figcaption style={{ color: "#a3a3a3", fontSize: "0.8rem", marginTop: "10px", lineHeight: 1.6 }}>
          {block.caption}
        </figcaption>
      </figure>
    );
  }

  if (block.type === "bullets") {
    return (
      <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
        {block.items.map((item, i) => (
          <li key={i} style={{ color: "#d4d4d4", fontSize: "1rem", lineHeight: 1.78, marginBottom: "8px" }}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

export default function ProjectDetail({ project }: { project: Project }) {
  const router = useRouter();
  const richContent = projectContents[project.slug];

  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a" }}>

      {/* Navbar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(10,10,10,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 32px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            onClick={() => router.back()}
            style={{ display: "flex", alignItems: "center", gap: "8px", color: "#a3a3a3", fontSize: "0.875rem", background: "none", border: "none", cursor: "pointer", transition: "color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#e5e5e5")}
            onMouseLeave={e => (e.currentTarget.style.color = "#a3a3a3")}
          >
            <ArrowLeft size={16} /> Back
          </button>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "#a3a3a3", letterSpacing: "0.2em", textTransform: "uppercase" }}>SSR / PROJECTS</span>
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "96px 32px 96px" }}>

        {/* Hero — unchanged */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "2.8rem", fontWeight: 800, color: "rgba(255,255,255,0.12)", letterSpacing: "-0.03em" }}>{project.number}</span>
            <span style={{ padding: "4px 13px", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 600, background: "rgba(255,255,255,0.07)", color: "#c0c0c0", border: "1px solid rgba(255,255,255,0.1)" }}>
              {project.category}
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 800, color: "#f0f0f0", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: "16px" }}>
            {project.title}
          </h1>
          <p style={{ color: "#d4d4d4", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: "28px" }}>{project.tagline}</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "32px" }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", fontWeight: 500, padding: "3px 10px", borderRadius: "20px", background: "rgba(255,255,255,0.07)", color: "#c0c0c0", border: "1px solid rgba(255,255,255,0.1)" }}>
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.github} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 22px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#a3a3a3", fontSize: "0.85rem", fontWeight: 500, textDecoration: "none" }}
          >
            <GitHubIcon size={15} /> View on GitHub <ExternalLink size={12} />
          </a>
        </motion.div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.06)", margin: "0 0 52px" }} />

        {richContent ? (
          <>
            {richContent.sections.map((section, si) => (
              <motion.div
                key={si}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + si * 0.07, duration: 0.5 }}
                style={{ marginBottom: "56px" }}
              >
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#ffaa70",
                  display: "block",
                  marginBottom: "20px",
                }}>
                  {section.label}
                </span>
                {section.blocks.map((block, bi) => (
                  <React.Fragment key={bi}>
                    {renderBlock(block, section.label === "HOOK")}
                  </React.Fragment>
                ))}
              </motion.div>
            ))}

            {/* Bottom nav */}
            <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
              <button
                onClick={() => router.back()}
                style={{ display: "flex", alignItems: "center", gap: "8px", color: "#a3a3a3", fontSize: "0.875rem", background: "none", border: "none", cursor: "pointer" }}
              >
                <ArrowLeft size={15} /> All Projects
              </button>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href={project.github} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 22px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#a3a3a3", fontSize: "0.85rem", fontWeight: 500, textDecoration: "none" }}
                >
                  <GitHubIcon size={14} /> View on GitHub <ExternalLink size={12} />
                </a>
                {richContent.extraButton && (
                  <a
                    href={richContent.extraButton.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 22px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#a3a3a3", fontSize: "0.85rem", fontWeight: 500, textDecoration: "none" }}
                  >
                    {richContent.extraButton.label} <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Fallback: original impact / overview / approach / findings */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} style={{ marginBottom: "56px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a3a3a3", display: "block", marginBottom: "24px" }}>Key Impact</span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                {project.impact.map((item) => (
                  <div key={item.label} style={{ padding: "24px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                    <div style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 800, color: "#f0f0f0", marginBottom: "8px", lineHeight: 1.1, letterSpacing: "-0.025em" }}>{item.value}</div>
                    <div style={{ color: "#c0c0c0", fontSize: "0.8rem", lineHeight: 1.5 }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5 }} style={{ marginBottom: "52px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a3a3a3", display: "block", marginBottom: "16px" }}>Overview</span>
              <p style={{ color: "#d4d4d4", fontSize: "1rem", lineHeight: 1.82 }}>{project.overview}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }} style={{ marginBottom: "52px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a3a3a3", display: "block", marginBottom: "24px" }}>Approach</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {project.approach.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#a3a3a3", fontWeight: 600, flexShrink: 0, paddingTop: "3px", minWidth: "24px" }}>{String(i + 1).padStart(2, "0")}</span>
                    <p style={{ color: "#d4d4d4", fontSize: "0.9rem", lineHeight: 1.78 }}>{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a3a3a3", display: "block", marginBottom: "24px" }}>Key Findings</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {project.findings.map((finding, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 20px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                    <span style={{ color: "#a3a3a3", flexShrink: 0, marginTop: "2px", fontWeight: 600 }}>→</span>
                    <p style={{ color: "#d4d4d4", fontSize: "0.875rem", lineHeight: 1.75 }}>{finding}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button
                onClick={() => router.back()}
                style={{ display: "flex", alignItems: "center", gap: "8px", color: "#a3a3a3", fontSize: "0.875rem", background: "none", border: "none", cursor: "pointer" }}
              >
                <ArrowLeft size={15} /> All Projects
              </button>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#a3a3a3", fontSize: "0.875rem", textDecoration: "none" }}>
                GitHub <ExternalLink size={13} />
              </a>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
