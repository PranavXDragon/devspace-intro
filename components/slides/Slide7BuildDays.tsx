"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    week: "01–02",
    title: "Setup & Exploration",
    code: "git clone",
    body: "Pick your repos, configure local environments. Learn to read a codebase and contribution guidelines without getting overwhelmed.",
    tag: "ENV",
    color: "var(--green)",
  },
  {
    week: "03",
    title: "First Attempt",
    code: "issue.assign(me)",
    body: "You tackle your first real issue. Mentors push you to use docs and AI—but will not hand you the answer. Trial-and-error is the lesson.",
    tag: "CODE",
    color: "var(--green)",
  },
  {
    week: "04",
    title: "Debugging Sprint",
    code: "npm run lint",
    body: "Learn to pass CI checks, fix linting errors, and refine your code to meet real repository standards. Nothing ships without a green check.",
    tag: "DEBUG",
    color: "var(--blue)",
  },
  {
    week: "05",
    title: "The PR",
    code: "git push origin pr/feat",
    body: "You ship. Submit your Pull Request, write professional commit descriptions, and communicate directly with maintainers on Slack or Discord.",
    tag: "SHIP",
    color: "#ffd700",
  },
];

type Slide7BuildDaysProps = {
  onNextSlide?: () => void;
};

export default function Slide7BuildDays({ onNextSlide }: Slide7BuildDaysProps) {
  const [active, setActive] = useState(0);

  return (
    <div
      className="slide noise flex flex-col items-center justify-center relative px-4 md:px-10 py-8"
      style={{ background: "var(--void)" }}
    >
      <div className="absolute top-6 left-8 section-num">DSC // 07</div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div className="bento-tag mb-3">PHASE 02 // MEMBER TRACK</div>
        <h2
          style={{
            fontSize: "clamp(22px, 3.5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          The 5-Week Sprint
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "var(--slate)",
            fontFamily: "JetBrains Mono",
            marginTop: "8px",
          }}
        >
          You bring your laptop. You sit with your mentor. You ship to real organizations.
        </p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ width: "100%", maxWidth: "860px", marginBottom: "32px" }}
      >
        {/* Step dots + connector */}
        <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
          {/* Full bar background */}
          <div
            style={{
              position: "absolute",
              top: "18px",
              left: "18px",
              right: "18px",
              height: "1px",
              background: "rgba(255,255,255,0.08)",
            }}
          />
          {/* Filled bar */}
          <motion.div
            style={{
              position: "absolute",
              top: "18px",
              left: "18px",
              height: "1px",
              background: "linear-gradient(90deg, var(--green), var(--blue), #ffd700)",
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: (active + 1) / steps.length }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            // derive width from active
            animate={{ width: `${((active + 1) / steps.length) * (100 - (100 / steps.length))}%` }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                cursor: "none",
                zIndex: 1,
              }}
              onClick={() => setActive(i)}
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: i <= active ? step.color : "#0d1117",
                  border: `2px solid ${i <= active ? step.color : "rgba(255,255,255,0.1)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: i === active ? `0 0 20px ${step.color}60` : "none",
                  transition: "all 0.3s",
                  flexShrink: 0,
                }}
              >
                {i < active ? (
                  <span style={{ color: "#050505", fontSize: "14px", fontWeight: 700 }}>✓</span>
                ) : (
                  <span
                    style={{
                      fontFamily: "JetBrains Mono",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: i <= active ? "#050505" : "rgba(255,255,255,0.3)",
                    }}
                  >
                    {i + 1}
                  </span>
                )}
              </motion.div>
              <div
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "10px",
                  color: i === active ? step.color : "var(--slate)",
                  textAlign: "center",
                  transition: "color 0.3s",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                W{step.week}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Active card */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ width: "100%", maxWidth: "860px" }}
      >
        <div
          className="terminal-window"
          style={{ borderColor: steps[active].color + "40" }}
        >
          <div className="terminal-header" style={{ borderColor: steps[active].color + "20" }}>
            <div className="t-dot" style={{ background: "#ff5f56" }} />
            <div className="t-dot" style={{ background: "#ffbd2e" }} />
            <div className="t-dot" style={{ background: "#27c93f" }} />
            <span
              style={{
                fontSize: "11px",
                fontFamily: "JetBrains Mono",
                color: steps[active].color,
                marginLeft: "8px",
              }}
            >
              week-{steps[active].week} // {steps[active].tag}
            </span>
          </div>

          <div style={{ padding: "28px 32px", display: "flex", gap: "40px", alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "13px",
                  color: steps[active].color,
                  marginBottom: "8px",
                  letterSpacing: "0.1em",
                }}
              >
                $ {steps[active].code}
              </div>
              <h3
                style={{
                  fontSize: "clamp(20px, 2.5vw, 30px)",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "14px",
                  letterSpacing: "-0.02em",
                }}
              >
                {steps[active].title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.7,
                  width: "100%", maxWidth: "520px",
                }}
              >
                {steps[active].body}
              </p>
            </div>

            {/* Step navigation buttons */}
            <div style={{ display: "flex", gap: "8px", alignSelf: "center", flexShrink: 0, flexWrap: "wrap", justifyContent: "flex-end", maxWidth: "240px" }}>
              <button
                onClick={() => setActive(Math.max(0, active - 1))}
                disabled={active === 0}
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "12px",
                  color: active === 0 ? "rgba(255,255,255,0.15)" : "#fff",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: active === 0 ? "not-allowed" : "none",
                }}
              >
                ← prev week
              </button>
              <button
                onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
                disabled={active === steps.length - 1}
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "12px",
                  color: active === steps.length - 1 ? "rgba(255,255,255,0.15)" : steps[active].color,
                  background: "transparent",
                  border: `1px solid ${active === steps.length - 1 ? "rgba(255,255,255,0.1)" : steps[active].color + "40"}`,
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: active === steps.length - 1 ? "not-allowed" : "none",
                }}
              >
                next week →
              </button>
              <button
                onClick={() => onNextSlide?.()}
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "12px",
                  color: "var(--green)",
                  background: "rgba(57,211,83,0.08)",
                  border: "1px solid rgba(57,211,83,0.35)",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "none",
                  width: "100%",
                }}
              >
                next page →
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom convergence note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{
          marginTop: "20px",
          fontSize: "13px",
          color: "var(--slate)",
          fontFamily: "JetBrains Mono",
          textAlign: "center",
        }}
      >
        Both cohorts converge here.{" "}
        <span style={{ color: "var(--green)" }}>
          Real commits. Real PRs. Profiles hunted by GDSC and recruiters.
        </span>
      </motion.p>
    </div>
  );
}
