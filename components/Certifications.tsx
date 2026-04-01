"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const certifications = [
  {
    name: "SQL Associate",
    issuer: "DataCamp",
    icon: "🗄️",
    link: "https://www.datacamp.com/certificate/SQA0016221849836",
  },
  {
    name: "Data Analyst Associate",
    issuer: "DataCamp",
    icon: "📊",
    link: "https://www.datacamp.com/certificate/DAA0012850256162",
  },
  {
    name: "Alteryx Designer Core Certification",
    issuer: "Alteryx",
    icon: "⚡",
    link: "https://www.credly.com/badges/ac7b8904-c2a1-4c2c-ad9d-0b776d41e80c/linked_in_profile",
  },
  {
    name: "Excel Advanced User",
    issuer: "Isenberg School of Management",
    icon: "📋",
    link: "https://app.suitable.co/public/achievements/X1IGQQvHrJH0Od",
  },
  {
    name: "Product Management Basics Certification",
    issuer: "Pendo",
    icon: "🚀",
    link: "https://www.credly.com/badges/736272ae-35e4-4a18-bfba-814eb84d58a3/linked_in_profile",
  },
];

const learnings = [
  {
    name: "Deloitte Australia — Data Analytics Job Simulation",
    issuer: "Forage",
    icon: "📈",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_pM2YekR9Z4M8tyGcq_1743290333369_completion_certificate.pdf",
  },
  {
    name: "Financial Analyst Job Simulation",
    issuer: "Forage",
    icon: "💼",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9nvkLZzZEKAdrhjrX/TtC5eCKD3FFzH5xcz_9nvkLZzZEKAdrhjrX_pM2YekR9Z4M8tyGcq_1739467050413_completion_certificate.pdf",
  },
  {
    name: "Financial Accounting",
    issuer: "LinkedIn Learning",
    icon: "📚",
    link: "https://www.linkedin.com/learning/certificates/65522ee70178189441e357ddb096324c8ed243bf8654a5beb1afa82dbb8427da?u=89183898",
  },
  {
    name: "SQL Intermediate",
    issuer: "HackerRank",
    icon: "🗄️",
    link: "https://www.hackerrank.com/certificates/iframe/b6d8a11a80a5",
  },
];

function CertCard({
  item,
  i,
  inView,
  prominent,
}: {
  item: { name: string; issuer: string; icon: string; link: string };
  i: number;
  inView: boolean;
  prominent: boolean;
}) {
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.07, duration: 0.45 }}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        borderRadius: "16px",
        background: "rgba(255, 255, 255, 0.04)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        textDecoration: "none",
        cursor: "pointer",
        transition: "border-color 0.2s, box-shadow 0.2s, transform 0.15s",
        minWidth: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = prominent
          ? "rgba(255, 170, 112, 0.45)"
          : "rgba(255, 170, 112, 0.25)";
        e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", flex: 1 }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "9px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            flexShrink: 0,
          }}
        >
          {item.icon}
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.78rem", lineHeight: 1.35, marginBottom: "3px" }}>
            {item.name}
          </p>
          <p style={{ fontFamily: "var(--font-mono)", color: "#c0c0c0", fontSize: "0.62rem" }}>
            {item.issuer}
          </p>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "3px", marginTop: "12px" }}>
        <span style={{ color: "#ffaa70", fontSize: "0.7rem", fontWeight: 600 }}>View Certificate</span>
        <ArrowUpRight size={11} color="#ffaa70" />
      </div>
    </motion.a>
  );
}

export default function Certifications() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="certifications"
      ref={ref}
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="wrap">
        <div style={{ marginBottom: "32px" }}>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Credentials
          </motion.span>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            Certifications <span className="gradient-text">&amp; learning.</span>
          </motion.h2>
        </div>

        {/* Intro paragraph */}
        <p style={{ color: "#a3a3a3", fontSize: "1rem", lineHeight: 1.78, maxWidth: "720px", marginBottom: "48px" }}>
          I believe credentials matter most when they reflect genuine curiosity, not box-checking. Every certification here came from a real gap I wanted to close — whether that was going deeper on SQL, understanding how enterprise data tools like Alteryx actually work, or getting sharper on the product and finance side of analytics. The learnings below are courses and simulations I completed to broaden my thinking beyond just the technical work.
        </p>

        {/* Certifications row */}
        <div style={{ marginBottom: "40px" }}>
          <p style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: 700, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            Certifications
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "12px",
            }}
          >
            {certifications.map((cert, i) => (
              <CertCard key={cert.name} item={cert} i={i} inView={inView} prominent={true} />
            ))}
          </div>
        </div>

        {/* Learnings row */}
        <div>
          <p style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: 700, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            Learnings
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "12px",
            }}
          >
            {learnings.map((item, i) => (
              <CertCard key={item.name} item={item} i={i} inView={inView} prominent={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
