"use client";

import React from "react";

const PARTICLES: { top: string; left: string; size: number; opacity: number; dur: string; delay: string; anim?: string }[] = [
  { top: "8%",  left: "15%", size: 3,   opacity: 0.55, dur: "11s", delay: "0s"   },
  { top: "20%", left: "78%", size: 2.5, opacity: 0.48, dur: "13s", delay: "1s"   },
  { top: "36%", left: "91%", size: 3,   opacity: 0.50, dur: "12s", delay: "4s"   },
  { top: "50%", left: "6%",  size: 2.5, opacity: 0.55, dur: "15s", delay: "0.5s" },
  { top: "64%", left: "58%", size: 3,   opacity: 0.48, dur: "10s", delay: "5s"   },
  { top: "76%", left: "28%", size: 2.5, opacity: 0.52, dur: "14s", delay: "2s"   },
  { top: "88%", left: "80%", size: 3,   opacity: 0.44, dur: "11s", delay: "7s"   },
  { top: "42%", left: "44%", size: 2.5, opacity: 0.48, dur: "13s", delay: "1.5s" },
  { top: "14%", left: "53%", size: 3,   opacity: 0.55, dur: "12s", delay: "3s"   },
  { top: "60%", left: "22%", size: 2.5, opacity: 0.50, dur: "10s", delay: "8s"   },
  { top: "30%", left: "36%", size: 3,   opacity: 0.46, dur: "12s", delay: "2.5s" },
  { top: "82%", left: "47%", size: 2.5, opacity: 0.50, dur: "11s", delay: "5s"   },
  { top: "5%",  left: "65%", size: 3,   opacity: 0.44, dur: "14s", delay: "6s"   },
  { top: "25%", left: "32%", size: 2.5, opacity: 0.52, dur: "10s", delay: "3.5s" },
  { top: "72%", left: "70%", size: 3,   opacity: 0.48, dur: "13s", delay: "0.5s" },
  { top: "48%", left: "85%", size: 2.5, opacity: 0.45, dur: "11s", delay: "9s"   },
  { top: "92%", left: "18%", size: 3,   opacity: 0.50, dur: "12s", delay: "4s"   },
  { top: "18%", left: "8%",  size: 2.5, opacity: 0.48, dur: "15s", delay: "7s"   },
  { top: "55%", left: "38%", size: 3,   opacity: 0.52, dur: "10s", delay: "2s"   },
  { top: "38%", left: "62%", size: 2.5, opacity: 0.46, dur: "13s", delay: "6s"   },
  // Additional particles — varied directions via anim field
  { top: "11%", left: "40%", size: 2,   opacity: 0.42, dur: "9s",  delay: "1.2s", anim: "particleDrift2" },
  { top: "33%", left: "72%", size: 2.5, opacity: 0.46, dur: "11s", delay: "4.5s", anim: "particleDrift3" },
  { top: "67%", left: "50%", size: 2,   opacity: 0.40, dur: "8s",  delay: "0.8s", anim: "particleDrift4" },
  { top: "45%", left: "20%", size: 3,   opacity: 0.44, dur: "10s", delay: "3s",   anim: "particleDrift2" },
  { top: "78%", left: "90%", size: 2,   opacity: 0.38, dur: "9s",  delay: "6.5s", anim: "particleDrift3" },
  { top: "22%", left: "55%", size: 2.5, opacity: 0.50, dur: "12s", delay: "2.2s", anim: "particleDrift4" },
  { top: "58%", left: "12%", size: 2,   opacity: 0.43, dur: "8s",  delay: "5.5s", anim: "particleDrift2" },
  { top: "3%",  left: "30%", size: 3,   opacity: 0.47, dur: "11s", delay: "7.5s", anim: "particleDrift3" },
  { top: "85%", left: "60%", size: 2,   opacity: 0.41, dur: "9s",  delay: "1.8s", anim: "particleDrift4" },
  { top: "16%", left: "88%", size: 2.5, opacity: 0.45, dur: "10s", delay: "4s",   anim: "particleDrift2" },
  { top: "70%", left: "35%", size: 2,   opacity: 0.48, dur: "8s",  delay: "9.5s", anim: "particleDrift3" },
  { top: "40%", left: "5%",  size: 3,   opacity: 0.44, dur: "13s", delay: "3.8s", anim: "particleDrift4" },
  { top: "95%", left: "75%", size: 2,   opacity: 0.40, dur: "9s",  delay: "0.3s", anim: "particleDrift2" },
  { top: "28%", left: "48%", size: 2.5, opacity: 0.46, dur: "11s", delay: "6.2s", anim: "particleDrift3" },
  { top: "53%", left: "95%", size: 2,   opacity: 0.42, dur: "8s",  delay: "2.7s", anim: "particleDrift4" },
  { top: "7%",  left: "75%", size: 3,   opacity: 0.50, dur: "10s", delay: "8.5s", anim: "particleDrift2" },
  { top: "80%", left: "22%", size: 2,   opacity: 0.38, dur: "9s",  delay: "1.5s", anim: "particleDrift3" },
  { top: "62%", left: "43%", size: 2.5, opacity: 0.45, dur: "12s", delay: "5.2s", anim: "particleDrift4" },
  { top: "35%", left: "17%", size: 2,   opacity: 0.43, dur: "8s",  delay: "7.8s", anim: "particleDrift2" },
  { top: "47%", left: "68%", size: 3,   opacity: 0.47, dur: "11s", delay: "3.3s", anim: "particleDrift3" },
  { top: "90%", left: "40%", size: 2,   opacity: 0.41, dur: "9s",  delay: "0.6s", anim: "particleDrift4" },
  { top: "12%", left: "22%", size: 2.5, opacity: 0.44, dur: "10s", delay: "4.8s", anim: "particleDrift2" },
  { top: "74%", left: "55%", size: 2,   opacity: 0.40, dur: "8s",  delay: "9.2s", anim: "particleDrift3" },
  { top: "26%", left: "82%", size: 3,   opacity: 0.48, dur: "13s", delay: "2.4s", anim: "particleDrift4" },
  { top: "57%", left: "28%", size: 2,   opacity: 0.42, dur: "9s",  delay: "6.8s", anim: "particleDrift2" },
  // Batch 3 — 30 more particles
  { top: "13%", left: "60%", size: 2.5, opacity: 0.45, dur: "10s", delay: "1.1s", anim: "particleDrift3" },
  { top: "31%", left: "93%", size: 2,   opacity: 0.40, dur: "8s",  delay: "3.6s", anim: "particleDrift4" },
  { top: "44%", left: "33%", size: 3,   opacity: 0.48, dur: "11s", delay: "7.1s", anim: "particleDrift2" },
  { top: "69%", left: "77%", size: 2,   opacity: 0.42, dur: "9s",  delay: "2.3s", anim: "particleDrift3" },
  { top: "84%", left: "14%", size: 2.5, opacity: 0.46, dur: "12s", delay: "5.8s", anim: "particleDrift4" },
  { top: "6%",  left: "48%", size: 2,   opacity: 0.38, dur: "8s",  delay: "9.7s", anim: "particleDrift2" },
  { top: "52%", left: "57%", size: 3,   opacity: 0.50, dur: "11s", delay: "4.2s", anim: "particleDrift3" },
  { top: "77%", left: "39%", size: 2,   opacity: 0.43, dur: "9s",  delay: "0.9s", anim: "particleDrift4" },
  { top: "21%", left: "7%",  size: 2.5, opacity: 0.47, dur: "10s", delay: "6.4s", anim: "particleDrift2" },
  { top: "39%", left: "80%", size: 2,   opacity: 0.41, dur: "8s",  delay: "3.1s", anim: "particleDrift3" },
  { top: "65%", left: "24%", size: 3,   opacity: 0.49, dur: "13s", delay: "8.2s", anim: "particleDrift4" },
  { top: "87%", left: "52%", size: 2,   opacity: 0.40, dur: "9s",  delay: "1.7s", anim: "particleDrift2" },
  { top: "17%", left: "37%", size: 2.5, opacity: 0.44, dur: "10s", delay: "5.3s", anim: "particleDrift3" },
  { top: "73%", left: "66%", size: 2,   opacity: 0.42, dur: "8s",  delay: "2.8s", anim: "particleDrift4" },
  { top: "29%", left: "11%", size: 3,   opacity: 0.46, dur: "11s", delay: "7.6s", anim: "particleDrift2" },
  { top: "46%", left: "74%", size: 2,   opacity: 0.38, dur: "9s",  delay: "4.9s", anim: "particleDrift3" },
  { top: "91%", left: "29%", size: 2.5, opacity: 0.45, dur: "12s", delay: "0.4s", anim: "particleDrift4" },
  { top: "4%",  left: "84%", size: 2,   opacity: 0.43, dur: "8s",  delay: "8.9s", anim: "particleDrift2" },
  { top: "59%", left: "46%", size: 3,   opacity: 0.48, dur: "10s", delay: "3.4s", anim: "particleDrift3" },
  { top: "81%", left: "8%",  size: 2,   opacity: 0.41, dur: "9s",  delay: "6.1s", anim: "particleDrift4" },
  { top: "24%", left: "63%", size: 2.5, opacity: 0.47, dur: "11s", delay: "1.9s", anim: "particleDrift2" },
  { top: "42%", left: "2%",  size: 2,   opacity: 0.39, dur: "8s",  delay: "9.3s", anim: "particleDrift3" },
  { top: "68%", left: "87%", size: 3,   opacity: 0.50, dur: "12s", delay: "4.6s", anim: "particleDrift4" },
  { top: "15%", left: "26%", size: 2,   opacity: 0.44, dur: "9s",  delay: "7.3s", anim: "particleDrift2" },
  { top: "36%", left: "58%", size: 2.5, opacity: 0.46, dur: "10s", delay: "2.1s", anim: "particleDrift3" },
  { top: "79%", left: "72%", size: 2,   opacity: 0.40, dur: "8s",  delay: "5.7s", anim: "particleDrift4" },
  { top: "9%",  left: "17%", size: 3,   opacity: 0.48, dur: "11s", delay: "0.7s", anim: "particleDrift2" },
  { top: "54%", left: "32%", size: 2,   opacity: 0.42, dur: "9s",  delay: "8.4s", anim: "particleDrift3" },
  { top: "96%", left: "55%", size: 2.5, opacity: 0.38, dur: "10s", delay: "3.9s", anim: "particleDrift4" },
  { top: "33%", left: "42%", size: 2,   opacity: 0.45, dur: "8s",  delay: "6.6s", anim: "particleDrift2" },
];

const ORBS: { pos: React.CSSProperties; size: string; color: string; opacity: number; anim: string }[] = [
  { pos: { top: "-100px", right: "-80px" }, size: "540px", color: "#ff8c42", opacity: 0.30, anim: "blob1 20s ease-in-out infinite" },
  { pos: { bottom: "-80px", left: "10%" }, size: "420px", color: "#ffaa70", opacity: 0.25, anim: "blob2 26s ease-in-out infinite" },
  { pos: { top: "38%", left: "-100px"  }, size: "380px", color: "#ff8c42", opacity: 0.20, anim: "blob3 30s ease-in-out infinite" },
];

export default function ParticleBackground() {
  return (
    <>
      {PARTICLES.map((p, i) => (
        <div
          key={`p-${i}`}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "#ffffff",
            opacity: p.opacity,
            animation: `${p.anim ?? "particleDrift"} ${p.dur} ease-in-out infinite`,
            animationDelay: p.delay,
            pointerEvents: "none",
          }}
        />
      ))}
      {ORBS.map((o, i) => (
        <div
          key={`o-${i}`}
          style={{
            position: "absolute",
            ...o.pos,
            width: o.size,
            height: o.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${o.color} 0%, transparent 65%)`,
            opacity: o.opacity,
            animation: o.anim,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}
