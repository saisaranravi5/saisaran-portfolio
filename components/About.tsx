"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { personalInfo, education } from "@/lib/data";

const stats = [
  { value: "2",   label: "Years Experience",  note: "Programmer Analyst · Data-focused" },
  { value: "7+",  label: "Data Projects",     note: "SQL · BI · ML" },
  { value: "3.7", label: "MS GPA",            note: "UMass Amherst" },
  { value: "16+", label: "Tools Proficient",  note: "Snowflake to Power BI" },
];

const interests = ["Product Analytics", "Business Intelligence", "SQL and Data Engineering", "Customer Behavior", "Growth Analytics", "KPI Development", "Data Storytelling"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
});

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "96px 0", position: "relative", overflow: "hidden" }}>
      <div className="wrap">
        <div style={{ marginBottom: "64px" }}>
          <motion.span className="eyebrow" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: "easeOut" }}>About</motion.span>
          <motion.h2 className="section-heading" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>The person behind <span className="gradient-text">the data.</span></motion.h2>
        </div>

        <div className="grid-two">
          {/* Left */}
          <div>
            {personalInfo.bio.map((para, i) => (
              <motion.p key={i} {...fadeUp(i * 0.1)} style={{ color: "#c0c0c0", lineHeight: 1.82, marginBottom: "16px", fontSize: "0.95rem" }}>
                {para}
              </motion.p>
            ))}
            <motion.div {...fadeUp(0.4)} style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "28px" }}>
              {interests.map((tag) => (
                <span key={tag} style={{ padding: "5px 14px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "#c0c0c0", fontSize: "0.82rem" }}>
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "28px" }}>
              {stats.map((s, i) => (
                <motion.div key={s.label} {...fadeUp(0.15 + i * 0.08)} className="card" style={{ padding: "22px" }}>
                  <p style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: "4px", color: "#ffffff" }}>{s.value}</p>
                  <p style={{ color: "#ffffff", fontSize: "0.8rem", fontWeight: 600, lineHeight: 1.3 }}>{s.label}</p>
                  <p style={{ color: "#c0c0c0", fontSize: "0.68rem", marginTop: "4px" }}>{s.note}</p>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp(0.5)}>
              <span className="eyebrow" style={{ marginBottom: "14px" }}>Education</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {education.map((edu, i) => (
                  <div key={i} className="card" style={{ padding: "18px 20px", display: "flex", gap: "14px" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <GraduationCap size={16} color="#c0c0c0" />
                    </div>
                    <div>
                      <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.85rem", lineHeight: 1.4 }}>{edu.degree}</p>
                      <p style={{ color: "#c0c0c0", fontSize: "0.78rem", fontWeight: 500, marginTop: "3px" }}>{edu.school}</p>
                      {edu.department && <p style={{ color: "#c0c0c0", fontSize: "0.72rem", marginTop: "2px" }}>{edu.department}</p>}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#c0c0c0", fontSize: "0.7rem" }}><MapPin size={10} />{edu.location}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#c0c0c0", fontSize: "0.7rem" }}><Calendar size={10} />{edu.period}</span>
                        {edu.gpa && <span style={{ padding: "2px 8px", borderRadius: "999px", background: "rgba(255,255,255,0.07)", color: "#c0c0c0", fontSize: "0.68rem", fontWeight: 500, border: "1px solid rgba(255,255,255,0.1)" }}>GPA {edu.gpa}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
