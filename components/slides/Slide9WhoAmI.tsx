"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const terminalLines = [
  { text: "$ whoami", delay: 0, color: "var(--green)" },
  { text: "> authenticating identity...", delay: 0.4, color: "var(--slate)" },
  { text: "> credentials verified ✓", delay: 1.0, color: "var(--green)" },
  { text: "", delay: 1.4, color: "transparent" },
  { text: "  entity: Open Source Club", delay: 1.6, color: "#fff" },
  { text: "  mission: ship production code", delay: 2.0, color: "#fff" },
  { text: "  trust: proof_of_work only", delay: 2.4, color: "#fff" },
  { text: "", delay: 2.8, color: "transparent" },
  { text: "$ sudo trust --verify", delay: 3.0, color: "var(--green)" },
  { text: "> reason: receipts, not slides", delay: 3.6, color: "var(--blue)" },
  { text: "> loading core team...", delay: 4.0, color: "var(--slate)" },
];

export default function Slide9WhoAmI() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    terminalLines.forEach((line, i) => {
      const t = setTimeout(() => setVisibleLines(i + 1), line.delay * 1000);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="slide noise flex items-center justify-center relative"
      style={{ background: "var(--void)" }}
    >
      <div className="absolute top-6 left-8 section-num">OSC // 09</div>

      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(57,211,83,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="flex flex-col items-center gap-10 z-10 w-full max-w-3xl px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bento-tag mb-4">BUILDING TRUST</div>
          <p
            style={{
              fontSize: "14px",
              color: "var(--slate)",
              fontFamily: "JetBrains Mono",
              maxWidth: "500px",
            }}
          >
            Talk is cheap in tech. Anyone can stand on a stage and promise you a
            roadmap. The reason you should trust this pipeline is the people
            executing it.
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="terminal-window w-full"
          style={{ maxWidth: "640px" }}
        >
          <div className="terminal-header">
            <div className="t-dot" style={{ background: "#ff5f56" }} />
            <div className="t-dot" style={{ background: "#ffbd2e" }} />
            <div className="t-dot" style={{ background: "#27c93f" }} />
            <span
              style={{
                fontSize: "11px",
                color: "var(--slate)",
                marginLeft: "8px",
                fontFamily: "JetBrains Mono",
              }}
            >
              bash — 80×24
            </span>
          </div>

          <div style={{ padding: "24px", minHeight: "280px" }}>
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "13px",
                  color: line.color,
                  lineHeight: "22px",
                  minHeight: "22px",
                }}
              >
                {line.text || "\u00A0"}
              </motion.div>
            ))}

            {/* Cursor */}
            {visibleLines <= terminalLines.length && (
              <div
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "16px",
                  background: "var(--green)",
                  verticalAlign: "middle",
                  animation: "blink 1s step-end infinite",
                  marginTop: "2px",
                }}
              />
            )}
          </div>
        </motion.div>

        {/* CTA to next slide */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontFamily: "JetBrains Mono",
            fontSize: "13px",
            color: "var(--slate)",
          }}
        >
          <span>scroll to meet the team</span>
          <div className="animate-scroll-hint flex items-center gap-1">
            <div style={{ width: 6, height: 6, background: "var(--green)", borderRadius: "50%" }} />
            <div style={{ width: 4, height: 4, background: "rgba(57,211,83,0.5)", borderRadius: "50%" }} />
            <div style={{ width: 2, height: 2, background: "rgba(57,211,83,0.25)", borderRadius: "50%" }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
