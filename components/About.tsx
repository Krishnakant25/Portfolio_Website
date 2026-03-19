"use client";

import { useEffect, useRef } from "react";

const certifications = [
  {
    code: "01",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google · Coursera",
    year: "2023",
  },
  {
    code: "02",
    title: "IBM Data Science & AI Professional Certificate",
    issuer: "IBM · Coursera",
    year: "2023",
  },
  {
    code: "03",
    title: "Mathematics for Machine Learning & Data Science",
    issuer: "Imperial College London · DeepLearning.AI",
    year: "2024",
  },
];

const skills = [
  "Python", "SQL", "Pandas", "NumPy",
  "LangChain", "OpenAI API", "Whisper",
  "FastAPI", "PostgreSQL", "SQLite",
  "Power BI", "Tableau", "Excel",
  "n8n", "Make.com", "Zapier",
  "Git", "Docker", "Linux",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 md:py-40"
      aria-label="About section"
    >
      {/* ── Split layout ── */}
      <div className="page-padding max-w-screen-xl mx-auto">

        {/* Top section label + heading */}
        <div className="mb-16 reveal">
          <p className="section-label mb-5">02 · About</p>
          <h2
            className="font-display font-light leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            Every{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>
              weak point
            </em>
            <br />
            is society&apos;s{" "}
            <span style={{ color: "var(--text-secondary)" }}>possibility.</span>
          </h2>
        </div>

        {/* ── Two column ── */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Left — Bio */}
          <div className="reveal reveal-delay-1">
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6" style={{ fontSize: "0.92rem" }}>
              I&apos;m a{" "}
              <span className="text-[var(--text)] font-medium">Data Analyst &amp; AI Developer</span>{" "}
              with a focus on building intelligent systems that solve real business problems.
              My work bridges the gap between raw data and actionable AI-driven decisions.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6" style={{ fontSize: "0.92rem" }}>
              From crafting Generative AI pipelines and voice agents to automating complex
              workflows and building analytics dashboards — I bring a pragmatic,
              results-driven approach to every engagement.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10" style={{ fontSize: "0.92rem" }}>
              My design philosophy: solve the smallest inconvenience to create the biggest impact.
              Turning data complexity into clarity is what drives me every day.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-0 border border-[var(--border)]">
              {[
                { n: "15+", l: "Projects" },
                { n: "3+", l: "Certs" },
                { n: "2+", l: "Yrs Exp." },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className={`p-5 text-center ${i < 2 ? "border-r border-[var(--border)]" : ""}`}
                >
                  <p
                    className="font-display font-light mb-1"
                    style={{ fontSize: "2.2rem", color: "var(--accent)", letterSpacing: "-0.03em" }}
                  >
                    {s.n}
                  </p>
                  <p className="section-label" style={{ fontSize: "0.6rem" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Certifications + Skills */}
          <div className="reveal reveal-delay-2 space-y-12">

            {/* Certifications */}
            <div>
              <p className="section-label mb-6">Certifications</p>
              <ul className="space-y-3" aria-label="Certifications list">
                {certifications.map((c) => (
                  <li
                    key={c.code}
                    className="cert-card p-4 flex gap-4 items-start"
                  >
                    <span
                      className="font-mono-custom shrink-0 mt-0.5"
                      style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}
                    >
                      {c.code}
                    </span>
                    <div>
                      <p className="font-medium text-[var(--text)] mb-1" style={{ fontSize: "0.85rem" }}>
                        {c.title}
                      </p>
                      <p
                        className="font-mono-custom text-[var(--text-muted)]"
                        style={{ fontSize: "0.65rem", letterSpacing: "0.05em" }}
                      >
                        {c.issuer} · {c.year}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <p className="section-label mb-5">Tools &amp; Technologies</p>
              <div
                className="flex flex-wrap gap-2"
                role="list"
                aria-label="Technical skills"
              >
                {skills.map((s) => (
                  <span key={s} className="skill-tag" role="listitem">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
