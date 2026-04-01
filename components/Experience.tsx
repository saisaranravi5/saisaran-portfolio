"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

type Job = typeof experience[number];

const typeStyle: Record<string, { color: string; bg: string }> = {
  "Full-time":  { color: "#a3a3a3", bg: "rgba(255,255,255,0.06)" },
  "Internship": { color: "#737373", bg: "rgba(255,255,255,0.04)" },
  "Volunteer":  { color: "#16a34a", bg: "rgba(22,163,74,0.12)"   },
};

function ExperienceCard({ job, i, inView }: { job: Job; i: number; inView: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const ts   = typeStyle[job.type] ?? typeStyle["Full-time"];
  const team = (job as Record<string, unknown>).team as string | undefined;
  const detail = (job as Record<string, unknown>).detail as string[] | undefined;

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
      style={{ position: "relative", paddingLeft: "44px" }}
    >
      {/* Timeline dot */}
      <div style={{
        position: "absolute", left: "0", top: "24px",
        width: "22px", height: "22px", borderRadius: "50%",
        background: "#0a0a0a", border: "1.5px solid rgba(255,170,112,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        animationName: inView ? "dotPulse" : "none",
        animationDuration: "2.4s",
        animationTimingFunction: "ease-out",
        animationIterationCount: "infinite",
        animationDelay: `${i * 0.3}s`,
      }}>
        <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ffaa70" }} />
      </div>

      {/* Card */}
      <div style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "16px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        borderLeft: "2px solid #ffaa70",
        padding: "28px 32px",
      }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "16px", flexWrap: "wrap" }}>
          <div>
            <h3 style={{ color: "#e5e5e5", fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.3 }}>{job.role}</h3>
            <p style={{ color: "#a3a3a3", fontSize: "0.875rem", marginTop: "4px", fontWeight: 500 }}>{job.company}</p>
            {team && <p style={{ color: "#c0c0c0", fontSize: "0.78rem", marginTop: "2px" }}>↳ {team}</p>}
          </div>
          <span style={{ padding: "4px 12px", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 600, background: ts.bg, color: ts.color, border: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
            {job.type}
          </span>
        </div>

        {/* Meta */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#c0c0c0", fontSize: "0.78rem" }}><MapPin size={11} />{job.location}</span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#c0c0c0", fontSize: "0.78rem" }}><Calendar size={11} />{job.period}</span>
        </div>

        {/* Story text with expand/collapse */}
        <div style={{ position: "relative", marginBottom: "16px" }}>
          <div style={{
            overflow: "hidden",
            maxHeight: expanded ? "2000px" : "4.75rem",
            transition: "max-height 0.5s ease",
          }}>
            {(detail ?? job.bullets).map((para, j) => (
              <p key={j} style={{ color: "#c0c0c0", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "14px" }}>
                {para}
              </p>
            ))}
          </div>
          {/* Gradient fade when collapsed */}
          {!expanded && (
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "44px",
              background: "linear-gradient(to bottom, transparent, rgba(10,10,10,0.97))",
              pointerEvents: "none",
            }} />
          )}
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: "none", border: "none", cursor: "pointer", padding: 0,
            color: "#ffaa70", fontSize: "0.8rem", fontWeight: 600,
            display: "flex", alignItems: "center", gap: "5px",
          }}
        >
          {expanded ? "← Collapse" : "Read the full story →"}
        </button>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" ref={ref} style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "96px 0", position: "relative", overflow: "hidden" }}>
      <div className="wrap">
        <div style={{ marginBottom: "64px" }}>
          <motion.span className="eyebrow" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: "easeOut" }}>Experience</motion.span>
          <motion.h2 className="section-heading" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>Where I&apos;ve <span className="gradient-text">made an impact.</span></motion.h2>
        </div>

        <div style={{ position: "relative" }}>
          {/* Glowing timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            style={{
              position: "absolute", left: "10px", top: "12px", bottom: "12px", width: "1px",
              background: "linear-gradient(to bottom, rgba(255,170,112,0.35) 0%, rgba(255,170,112,0.08) 100%)",
              borderRadius: "2px", transformOrigin: "top",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {experience.map((job, i) => (
              <ExperienceCard key={i} job={job} i={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
