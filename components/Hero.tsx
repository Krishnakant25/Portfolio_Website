"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Data Analyst",
  "AI Developer",
  "Gen AI Engineer",
  "Python Developer",
  "Automation Expert",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const word = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx <= word.length) {
      setDisplay(word.slice(0, charIdx));
      t = setTimeout(() => setCharIdx((c) => c + 1), 80);
    } else if (!deleting && charIdx > word.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx >= 0) {
      setDisplay(word.slice(0, charIdx));
      t = setTimeout(() => setCharIdx((c) => c - 1), 45);
    } else {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
      setCharIdx(0);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Planet orb ── */}
      <div className="planet-orb" aria-hidden="true" />

      {/* ── Subtle bottom gradient blend ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 page-padding max-w-screen-xl mx-auto w-full pt-24 pb-20">
        {/* Eyebrow */}
        <p className="section-label mb-8 reveal visible">
          Data Analytics &amp; AI Development
        </p>

        {/* Main heading — Cormorant serif, large */}
        <h1
          className="font-display font-light leading-[1.05] mb-6 reveal reveal-delay-1 visible"
          style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)", letterSpacing: "-0.02em" }}
        >
          Hi, I&apos;m
          <br />
          <em
            className="not-italic"
            style={{ color: "var(--text)" }}
          >
            Krishna Kant
          </em>
          <br />
          <span style={{ color: "var(--text-secondary)" }}>Sahu.</span>
        </h1>

        {/* Divider with typewriter */}
        <div className="flex items-center gap-4 mb-10 reveal reveal-delay-2 visible">
          <div className="w-12 h-px bg-[var(--accent)]" />
          <p
            className="font-mono-custom text-sm text-[var(--accent)] type-cursor"
            aria-live="polite"
            aria-label={`Current role: ${display}`}
          >
            {display}
          </p>
        </div>

        {/* Description */}
        <p
          className="max-w-md text-[var(--text-secondary)] leading-relaxed mb-12 reveal reveal-delay-3 visible"
          style={{ fontSize: "0.95rem" }}
        >
          Specializing in{" "}
          <span className="text-[var(--text)]">Generative AI</span>,{" "}
          <span className="text-[var(--text)]">Python</span>,{" "}
          <span className="text-[var(--text)]">SQL</span>, and{" "}
          <span className="text-[var(--text)]">Workflow Automation</span> — turning
          complex data into intelligent, automated solutions.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 reveal reveal-delay-4 visible">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 font-body text-sm font-medium tracking-wide"
            style={{
              background: "var(--accent)",
              color: "#0c0c10",
            }}
            aria-label="View my projects"
          >
            View Projects
            <span aria-hidden="true">↓</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 font-body text-sm font-medium tracking-wide border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[var(--text-muted)] transition-all"
            aria-label="Contact me"
          >
            Contact Me
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[var(--border)]" />
        <p className="section-label" style={{ fontSize: "0.55rem" }}>Scroll</p>
      </div>
    </section>
  );
}
