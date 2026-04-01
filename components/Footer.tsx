"use client";

import { Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "36px 0" }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.8rem", color: "#2a2a2a" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "#3a3a3a", letterSpacing: "0.2em", fontSize: "0.72rem" }}>SSR</span>
          <span>·</span>
          <span>© {new Date().getFullYear()} Sai Saran Ravi. All rights reserved.</span>
        </div>
        <div style={{ display: "flex", gap: "4px" }}>
          {[
            { href: personalInfo.github,            icon: <GitHubIcon size={16} />,   label: "GitHub" },
            { href: personalInfo.linkedin,          icon: <LinkedInIcon size={16} />, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, icon: <Mail size={16} />,         label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label} href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer" aria-label={label}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "8px", color: "#2a2a2a", textDecoration: "none" }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
