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
      className="slide noise flex flex-col items-center justify-start relative px-10 pt-12 pb-8"
      style={{ background: "var(--void)" }}
    >
      <div className="absolute top-6 left-8 section-num">DSC // 06</div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          top: "22px",
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
        className="text-center mb-6 mt-3"
        style={{ maxWidth: "860px" }}
      >
        <div className="bento-tag mb-3">PHASE 01 // BIWEEKLY SESSIONS</div>
        <h2
          style={{
            fontSize: "clamp(22px, 3.5vw, 46px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Where You Actually Learn
          <br />
          <span className="text-glow-green">How to Learn</span>
        </h2>
        <p
          style={{
            marginTop: "10px",
            fontSize: "13px",
            color: "var(--slate)",
            fontFamily: "JetBrains Mono",
            lineHeight: 1.6,
          }}
        >
          We train core engineering thinking in structured modules, not scattered framework tutorials.
        </p>
      </motion.div>

      {/* Content split */}
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4 md:gap-[14px] w-full max-w-[980px] items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card"
          style={{
            padding: "20px",
            borderRadius: "10px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="bento-tag mb-3" style={{ color: "var(--green)", borderColor: "rgba(57,211,83,0.25)", background: "rgba(57,211,83,0.1)" }}>
            {bentoItems[0].tag}
          </div>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "12px",
              letterSpacing: "-0.01em",
            }}
          >
            {bentoItems[0].title}
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.65,
              marginBottom: "16px",
            }}
          >
            {bentoItems[0].body}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 md:mt-0">
            {bentoItems.slice(1, 3).map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "12px",
                }}
              >
                <div style={{ fontFamily: "JetBrains Mono", fontSize: "10px", color: item.accent, marginBottom: "6px", letterSpacing: "0.08em" }}>{item.tag}</div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>{item.title}</div>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.56)", lineHeight: 1.5 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "12px" }}
        >
          {bentoItems.slice(3).map((item, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: "18px",
                borderRadius: "10px",
                borderColor: `${item.accent}30`,
              }}
            >
              <div className="bento-tag mb-2" style={{ color: item.accent, borderColor: `${item.accent}35`, background: `${item.accent}10` }}>
                {item.tag}
              </div>
              <h3 style={{ fontSize: "16px", color: "#fff", fontWeight: 700, marginBottom: "8px" }}>{item.title}</h3>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.56)", lineHeight: 1.55 }}>{item.body}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom stats as separate cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          marginTop: "14px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "10px",
          width: "100%",
          maxWidth: "980px",
        }}
      >
        {[
          { val: "Biweekly", label: "session cadence" },
          { val: "Open", label: "to all campus" },
          { val: "3", label: "core meta-skills" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px",
              padding: "10px 8px",
            }}
          >
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--green)",
              }}
            >
              {s.val}
            </div>
            <div style={{ fontSize: "10px", color: "var(--slate)", marginTop: "2px" }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
