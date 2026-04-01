"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/data";

const FEATURED = 4;

function ProjectCard({ project, delay = 0 }: { project: typeof projects[number]; delay?: number }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.18 } }}
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="card"
      style={{ padding: "26px 28px", cursor: "pointer", display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <span style={{ padding: "3px 11px", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 600, background: "rgba(255,255,255,0.08)", color: "#c0c0c0", border: "1px solid rgba(255,255,255,0.1)" }}>
          {project.category}
        </span>
        <ArrowUpRight size={17} color="rgba(255,255,255,0.3)" />
      </div>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#a3a3a3", marginBottom: "7px" }}>{project.number}</p>
      <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "1rem", lineHeight: 1.4, marginBottom: "10px" }}>{project.title}</h3>
      <p style={{ color: "#c0c0c0", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "18px", flexGrow: 1 }}>{project.tagline}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tags.map((tag) => <span key={tag} className="ptag">{tag}</span>)}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" ref={ref} style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "96px 0", position: "relative", overflow: "hidden" }}>
      <div className="wrap">
        <div style={{ marginBottom: "60px" }}>
          <motion.span className="eyebrow" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: "easeOut" }}>Projects</motion.span>
          <motion.h2 className="section-heading" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>Work that <span className="gradient-text">tells a story.</span></motion.h2>
        </div>

        <div className="grid-projects" style={{ marginBottom: "20px" }}>
          {inView && projects.slice(0, FEATURED).map((p, i) => <ProjectCard key={p.slug} project={p} delay={i * 0.09} />)}
        </div>

        <AnimatePresence>
          {showAll && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35 }} style={{ overflow: "hidden" }}>
              <div className="grid-projects" style={{ marginBottom: "20px" }}>
                {projects.slice(FEATURED).map((p, i) => <ProjectCard key={p.slug} project={p} delay={i * 0.07} />)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 26px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#525252", fontSize: "0.875rem", fontWeight: 500, cursor: "pointer" }}
          >
            {showAll ? <><ChevronUp size={15} /> Show fewer</> : <><ChevronDown size={15} /> View all {projects.length} projects</>}
          </button>
        </div>
      </div>
    </section>
  );
}
