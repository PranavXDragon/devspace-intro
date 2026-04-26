"use client";
import { motion } from "framer-motion";

const bentoItems = [
  {
    tag: "<Why>",
    title: "No Tech-Stack Debates",
    body: "Tech evolves faster than curricula. We don't teach React vs Vue. We teach you how to figure things out.",
    size: "col-span-2",
    accent: "var(--green)",
  },
  {
    tag: "<Focus>",
    title: "Object-Oriented Design",
    body: "SOLID principles, design patterns, and system architecture. The fundamentals that don't expire.",
    size: "col-span-1",
    accent: "var(--green)",
  },
  {
    tag: "<Focus>",
    title: "Low-Level Architecture",
    body: "How memory works. How the OS manages processes. Why this matters for every line you write.",
    size: "col-span-1",
    accent: "var(--blue)",
  },
  {
    tag: "<Why>",
    title: "Survive AI FOMO",
    body: "We run dedicated sessions on weaponizing Gen-AI to write production code instead of being replaced by it.",
    size: "col-span-1",
    accent: "var(--blue)",
  },
  {
    tag: "<Outcome>",
    title: "Clarity on What Actually Matters",
    body: "You leave with the mental models that senior engineers use—not a bloated list of frameworks you half-know.",
    size: "col-span-2",
    accent: "var(--green)",
  },
];

export default function Slide6OpenSessions() {
  return (
    <div
      className="slide noise flex flex-col items-center justify-center relative px-10 py-8"
      style={{ background: "var(--void)" }}
    >
      <div className="absolute top-6 left-8 section-num">OSC // 06</div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          top: "20px",
          right: "32px",
          fontFamily: "JetBrains Mono",
          fontSize: "10px",
          color: "var(--green)",
          background: "rgba(57,211,83,0.08)",
          border: "1px solid rgba(57,211,83,0.2)",
          padding: "4px 10px",
          borderRadius: "3px",
          letterSpacing: "0.2em",
        }}
      >
        NO TECH-STACK TEACHING
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="bento-tag mb-3">PHASE 01 // BIWEEKLY SESSIONS</div>
        <h2
          style={{
            fontSize: "clamp(26px, 3.5vw, 46px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Where You Actually Learn
          <br />
          <span className="text-glow-green">How to Learn</span>
        </h2>
      </motion.div>

      {/* Bento Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {bentoItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-card"
            style={{
              gridColumn: item.size,
              padding: "24px",
              borderRadius: "10px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "80px",
                height: "80px",
                background: `radial-gradient(circle, ${item.accent}15 0%, transparent 70%)`,
                pointerEvents: "none",
              }}
            />

            <div className="bento-tag mb-3" style={{ color: item.accent, borderColor: `${item.accent}25`, background: `${item.accent}10` }}>
              {item.tag}
            </div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "10px",
                letterSpacing: "-0.01em",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.65,
              }}
            >
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom stat */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "32px",
          alignItems: "center",
        }}
      >
        {[
          { val: "Biweekly", label: "session cadence" },
          { val: "Open", label: "to all campus" },
          { val: "3", label: "core meta-skills" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--green)",
              }}
            >
              {s.val}
            </div>
            <div style={{ fontSize: "11px", color: "var(--slate)", marginTop: "2px" }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
