"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { allTools, skills } from "@/lib/data";
import { Code2, BarChart3, Database, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Code2:      <Code2 size={20} />,
  BarChart3:  <BarChart3 size={20} />,
  Database:   <Database size={20} />,
  TrendingUp: <TrendingUp size={20} />,
};

export default function Skills() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="skills" ref={ref} style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "96px 0", position: "relative", overflow: "hidden" }}>
      <div className="wrap">
        <div style={{ marginBottom: "60px" }}>
          <motion.span className="eyebrow" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: "easeOut" }}>Skills</motion.span>
          <motion.h2 className="section-heading" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>What I Work <span className="gradient-text">With.</span></motion.h2>
        </div>

        {/* Marquee */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.15 }} style={{ marginBottom: "56px", paddingBottom: "48px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="marquee-wrap">
            <div className="marquee-inner" style={{ gap: "0" }}>
              {[...allTools, ...allTools].map((tool, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "#e5e5e5", letterSpacing: "0.06em", whiteSpace: "nowrap", padding: "14px 0" }}>
                  {tool}
                  <span style={{ margin: "0 20px", color: "#444444", fontSize: "0.75rem" }}>/</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid-four">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="card"
              style={{ padding: "26px" }}
            >
              <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c0c0c0", marginBottom: "14px" }}>
                {iconMap[cat.icon]}
              </div>
              <h3 style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.88rem", marginBottom: "14px" }}>{cat.category}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {cat.items.map((item) => <span key={item} className="tag">{item}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
