"use client";

import { useEffect, useRef, useState } from "react";

interface WorkImage {
  src: string;
  caption: string;
}

interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string; // "Full-time" | "Internship" | "Freelance" etc.
  description: string;
  highlights: string[];
  images: WorkImage[];
  current?: boolean;
}

// ── UPDATE YOUR WORK EXPERIENCE HERE ─────────────────────────────────────────
const experiences: Experience[] = [
  {
    period: "Jan 2026 — Present",
    role: "Marketing & AI Developer",
    company: "EAGLES ACADEMY FOR PERSONALITY DEVELOPMENT",
    location: "Bengaluru, India",
    type: "Full-Time",
    description:
      "I engineer LLM-integrated workflows and automated pipelines that eliminate manual operational bottlenecks. Using n8n as an orchestration layer, I connect conversational AI, databases, and CRMs to build scalable, zero-touch systems for real-time lead qualification, communication triage, and programmatic content generation.",
    highlights: [
      "Automated Lead Routing: Engineered an n8n and LLM-powered system that classifies inbound intent and instantly routes high-value prospects to sales channels, eliminating manual inbox filtering.",
      "Programmatic Content Generation: Built a scalable content engine using the Google Gemini API to auto-generate brand-aligned marketing copy, drastically reducing manual drafting hours.",
      "Conversational AI Systems: Architecting zero-touch workflows—including WhatsApp bots and voice receptionists—to automate real-time lead qualification and instant meeting bookings.",
    ],
    images: [
      { src: "/images/work/exp1-img1.png", caption: "Dashboard Overview" },
      { src: "/images/work/exp1-img2.png", caption: "AI Pipeline Architecture" },
    ],
    current: true,
  },
  {
    period: "Aug 2023 — Dec 2025",
    role: "Independent Developer & Pre-Sales Consultant",
    company: "Independent Consultancy",
    location: "Remote",
    type: "Self-Employed",
    description:
      "I bridge the gap between business strategy and technical execution. Starting in pre-sales consulting, I mapped technical architectures to solve enterprise bottlenecks. To address these inefficiencies directly, I transitioned into a hands-on developer role—engineering the automated data pipelines, API integrations, and scalable backend workflows I previously scoped for clients.",
    highlights: [
      "Workflow Automation & Processing: Architected asynchronous, multi-step data pipelines in n8n that slashed end-to-end processing turnaround from 7 days to under 24 hours.",
      "API-Driven Systems: Engineered an automated reservation lifecycle utilizing complex conditional logic to strictly enforce tiered cancellation policies with zero manual oversight.",
      "Solutions Architecture & Delivery: Translated enterprise objectives into technical execution across 17+ solution pitches, successfully deploying custom AI agents and logistics workflows for diverse industries.",
    ],
    images: [
      { src: "/images/work/exp2-img1.png", caption: "Vendor Analysis Report" },
      { src: "/images/work/exp2-img2.png", caption: "Tableau Dashboard" },
    ],
    current: false,
  },
  {
    period: "Jul 2025 — Aug 2025",
    role: "Data Analyst",
    company: "AtliQ Technology",
    location: "Remote",
    type: "Internship",
    description:
      "Delivered GenAI projects for clients including RAG-based search systems and chatbot integrations. Focused on LangChain pipelines and Streamlit deployments.",
    highlights: [
      "Built RAG search engine achieving 86.7% Hit Rate@5",
      "Deployed 3 Streamlit applications for client demos",
      "Integrated Groq and OpenAI APIs for low-latency inference",
    ],
    images: [
      { src: "/images/internshipletter.png", caption: "RAG Search Interface" },
    ],
    current: false,
  },
];

// ── Image gallery inside each experience ─────────────────────────────────────
function WorkGallery({ images, isOpen }: { images: WorkImage[]; isOpen: boolean }) {
  const [active, setActive] = useState(0);

  if (!images.length) return null;

  return (
    <div
      style={{
        maxHeight: isOpen ? "400px" : "0px",
        opacity: isOpen ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease",
      }}
    >
      <div className="mt-6 border border-[var(--border)] p-4" style={{ background: "var(--bg)" }}>
        <p className="section-label mb-4">Project Screenshots</p>

        {/* Main image */}
        <div
          className="relative overflow-hidden mb-3"
          style={{ height: "200px", background: "var(--surface)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[active].src}
            alt={images[active].caption}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.3s ease" }}
            loading="lazy"
            onError={(e) => {
              const t = e.currentTarget as HTMLImageElement;
              t.style.display = "none";
              const p = t.parentElement;
              if (p && !p.querySelector(".img-fb")) {
                const fb = document.createElement("div");
                fb.className = "img-fb";
                fb.style.cssText = "width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--border);";
                fb.innerHTML = `<span style="font-family:'DM Mono',monospace;font-size:0.65rem;color:var(--text-muted);letter-spacing:0.1em">No image</span>`;
                p.appendChild(fb);
              }
            }}
          />
          {/* Caption */}
          <div
            className="absolute bottom-0 left-0 right-0 px-3 py-2 font-mono-custom"
            style={{ fontSize: "0.6rem", letterSpacing: "0.08em", background: "rgba(0,0,0,0.5)", color: "rgba(255,255,255,0.8)" }}
          >
            {images[active].caption}
          </div>
        </div>

        {/* Thumbnails row */}
        {images.length > 1 && (
          <div className="flex gap-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className="overflow-hidden"
                style={{
                  width: "60px",
                  height: "42px",
                  border: `1px solid ${active === idx ? "var(--accent)" : "var(--border)"}`,
                  transition: "border-color 0.2s",
                  flexShrink: 0,
                  background: "var(--surface)",
                  cursor: "pointer",
                  padding: 0,
                }}
                aria-label={`View screenshot: ${img.caption}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.caption}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Experience section ───────────────────────────────────────────────────
export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(0); // first one open by default

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-28 md:py-40"
      aria-label="Work experience section"
    >
      <div className="page-padding max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="mb-16 reveal">
          <p className="section-label mb-5">03 · Experience</p>
          <h2
            className="font-display font-light"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            Where I&apos;ve{" "}
            <span style={{ color: "var(--text-secondary)" }}>Worked.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* ── Vertical line ── */}
          <div
            className="absolute hidden md:block"
            style={{
              left: "148px",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, var(--accent), var(--border) 60%, transparent)",
            }}
            aria-hidden="true"
          />

          {/* ── Entries ── */}
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} relative`}
                style={{ paddingBottom: i < experiences.length - 1 ? "0" : "0" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[148px_1fr] gap-0">

                  {/* ── Left: period column ── */}
                  <div
                    className="hidden md:flex flex-col items-end pr-8 pt-6"
                    style={{ minWidth: "148px" }}
                  >
                    <span
                      className="font-mono-custom text-right"
                      style={{ fontSize: "0.62rem", letterSpacing: "0.06em", color: "var(--text-muted)", lineHeight: "1.6" }}
                    >
                      {exp.period.split(" — ").map((p, pi) => (
                        <span key={pi} style={{ display: "block" }}>
                          {p}{pi === 0 && " —"}
                        </span>
                      ))}
                    </span>
                  </div>

                  {/* ── Timeline dot ── */}
                  <div
                    className="hidden md:block absolute"
                    style={{
                      left: "141px",
                      top: "26px",
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      background: exp.current ? "var(--accent)" : "var(--bg)",
                      border: `2px solid ${exp.current ? "var(--accent)" : "var(--border)"}`,
                      boxShadow: exp.current ? "0 0 10px rgba(201,169,110,0.4)" : "none",
                      zIndex: 2,
                      transition: "background 0.3s, border-color 0.3s",
                    }}
                    aria-hidden="true"
                  />

                  {/* ── Right: content ── */}
                  <div
                    className="ml-0 md:ml-10 mb-0 border-b border-[var(--border)] pb-10 pt-6"
                    style={{ borderBottom: i < experiences.length - 1 ? "1px solid var(--border)" : "none" }}
                  >
                    {/* Mobile period */}
                    <p
                      className="md:hidden font-mono-custom mb-2"
                      style={{ fontSize: "0.62rem", letterSpacing: "0.08em", color: "var(--text-muted)" }}
                    >
                      {exp.period}
                    </p>

                    {/* Role + company row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        <h3
                          className="font-display font-medium leading-tight"
                          style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", letterSpacing: "-0.01em", color: "var(--text)" }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className="font-mono-custom mt-1"
                          style={{ fontSize: "0.72rem", letterSpacing: "0.06em", color: "var(--accent)" }}
                        >
                          {exp.company}
                        </p>
                      </div>

                      {/* Type badge */}
                      <div className="flex items-center gap-2 shrink-0">
                        {exp.current && (
                          <span
                            className="font-mono-custom flex items-center gap-1.5"
                            style={{ fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--accent-sage)", padding: "2px 8px", border: "1px solid rgba(122,171,138,0.3)" }}
                          >
                            <span
                              style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--accent-sage)", display: "inline-block", animation: "starPulse 2s infinite" }}
                            />
                            CURRENT
                          </span>
                        )}
                        <span
                          className="font-mono-custom"
                          style={{ fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--text-muted)", padding: "2px 8px", border: "1px solid var(--border)" }}
                        >
                          {exp.type.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Location */}
                    <p
                      className="font-mono-custom mb-4"
                      style={{ fontSize: "0.62rem", letterSpacing: "0.06em", color: "var(--text-muted)" }}
                    >
                      {exp.location}
                    </p>

                    {/* Description */}
                    <p
                      className="text-[var(--text-secondary)] mb-5"
                      style={{ fontSize: "0.88rem", lineHeight: "1.7", maxWidth: "620px" }}
                    >
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5" aria-label="Key highlights">
                      {exp.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          className="flex items-start gap-3"
                          style={{ fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                          <span style={{ color: "var(--accent)", marginTop: "5px", fontSize: "0.5rem", flexShrink: 0 }}>◆</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Toggle screenshots button */}
                    {exp.images.length > 0 && (
                      <button
                        onClick={() => setOpenIdx(openIdx === i ? null : i)}
                        className="flex items-center gap-2 font-mono-custom text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                        style={{ fontSize: "0.62rem", letterSpacing: "0.1em" }}
                        aria-expanded={openIdx === i}
                        aria-label={openIdx === i ? "Hide screenshots" : "Show screenshots"}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            transform: openIdx === i ? "rotate(90deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        >
                          ▶
                        </span>
                        {openIdx === i ? "HIDE SCREENSHOTS" : `VIEW SCREENSHOTS (${exp.images.length})`}
                      </button>
                    )}

                    {/* Expandable gallery */}
                    <WorkGallery images={exp.images} isOpen={openIdx === i} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
