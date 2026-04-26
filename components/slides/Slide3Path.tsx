"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Slide3Path() {
  const [hovered, setHovered] = useState<number | null>(null);

  const cards = [
    {
      id: "01",
      title: "The Zero to One",
      subtitle: "Cohort 1 // Guided Track",
      tagline: "Absolute confidence. Zero excuses.",
      items: [
        "Guided open-source environments",
        "Mentored first Pull Requests",
        "Git & terminal mastery from scratch",
        "Real contributions. Real merges.",
      ],
      target: "Git scares you. The terminal is foreign. That's fine.",
      accent: "var(--green)",
      accentDim: "rgba(57,211,83,0.08)",
    },
    {
      id: "02",
      title: "The Deep End",
      subtitle: "Cohort 2 // Advanced Track",
      tagline: "High stakes. Global impact.",
      items: [
        "Live massive codebases, day one",
        "Google Summer of Code pathway",
        "Ecosystem grants & bug bounties",
        "Direct maintainer collaboration",
      ],
      target: "You have the reps. You want the big leagues.",
      accent: "var(--blue)",
      accentDim: "rgba(88,166,255,0.08)",
    },
  ];

  return (
    <div className="slide noise grid-bg flex flex-col items-center justify-center relative px-8" style={{ background: "var(--void)" }}>
      <div className="absolute top-6 left-8 section-num">OSC // 03</div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="bento-tag mb-4">CHOOSE YOUR PATH</div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "rgba(255,255,255,0.95)",
          }}
        >
          Two cohorts. One destination.
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "var(--slate)",
            marginTop: "12px",
            fontFamily: "JetBrains Mono",
          }}
        >
          We know jumping into massive codebases is terrifying. We&apos;ve built the ramp.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex gap-6 w-full max-w-5xl">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="flex-1 glass-card rounded-xl p-8 cursor-pointer relative overflow-hidden"
            style={{
              background: hovered === i ? card.accentDim : "var(--glass)",
              borderColor: hovered === i ? card.accent : "var(--glass-border)",
              boxShadow:
                hovered === i
                  ? `0 0 60px ${card.accent}20, 0 24px 64px rgba(0,0,0,0.5)`
                  : "none",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Card number */}
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "72px",
                fontWeight: 700,
                color: hovered === i ? card.accent : "rgba(255,255,255,0.04)",
                lineHeight: 1,
                position: "absolute",
                top: "16px",
                right: "24px",
                letterSpacing: "-0.05em",
                transition: "color 0.3s",
                userSelect: "none",
              }}
            >
              {card.id}
            </div>

            {/* Top glow line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                opacity: hovered === i ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            />

            <div className="relative z-10">
              <div
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "11px",
                  color: card.accent,
                  letterSpacing: "0.2em",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}
              >
                {card.subtitle}
              </div>

              <h3
                style={{
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                  marginBottom: "6px",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontSize: "13px",
                  color: card.accent,
                  fontFamily: "JetBrains Mono",
                  marginBottom: "28px",
                }}
              >
                {card.tagline}
              </p>

              <div
                style={{
                  height: "1px",
                  background: "rgba(255,255,255,0.06)",
                  marginBottom: "24px",
                }}
              />

              <ul style={{ listStyle: "none", marginBottom: "28px" }}>
                {card.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: "10px",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        color: card.accent,
                        fontFamily: "JetBrains Mono",
                        fontSize: "12px",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    >
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  background: `${card.accent}10`,
                  border: `1px solid ${card.accent}25`,
                  borderRadius: "6px",
                  padding: "12px 16px",
                  fontFamily: "JetBrains Mono",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <span style={{ color: card.accent }}>// target: </span>
                {card.target}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
