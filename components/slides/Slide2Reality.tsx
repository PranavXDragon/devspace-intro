"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heatData = Array.from({ length: 52 }, (_, week) =>
  Array.from({ length: 7 }, (_, day) => {
    const level = Math.random();
    if (week < 20) return Math.floor(level * 1.5);
    if (week < 35) return Math.floor(level * 3);
    return Math.floor(level * 4);
  })
);

const heatColor = (val: number) => {
  const colors = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];
  return colors[Math.min(val, 4)];
};

const glitchLines = [
  "for i in range(0, 999):",
  "  build('todo-app')",
  "  build('weather-app')",
  "  build('todo-app-v2')",
  "// resume.pdf = undefined",
  "ERROR: no_real_impact",
  "while(true) { tutorial() }",
  "STUCK_IN_LOOP: 404",
  "git commit -m 'same as before'",
  "no_experience_found: true",
];

export default function Slide2Reality() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slide noise flex flex-col md:flex-row relative" style={{ background: "var(--void)" }}>
      <div className="absolute top-6 left-8 section-num">DSC // 02</div>

      {/* LEFT — Tutorial Hell */}
      <div
        className="flex-none md:flex-1 w-full min-h-[60vh] md:min-h-0 py-12 md:py-0 flex flex-col justify-start md:justify-center px-6 md:px-12 relative border-r"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        {/* Red tint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 20% 60%, rgba(255,0,64,0.06) 0%, transparent 70%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="bento-tag mb-6" style={{ color: "#ff0040", background: "rgba(255,0,64,0.1)", borderColor: "rgba(255,0,64,0.2)" }}>
            STATUS: TRAPPED
          </div>

          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 700,
              color: "#ff0040",
              lineHeight: 1,
              marginBottom: "32px",
              letterSpacing: "-0.03em",
              opacity: glitchActive ? 0.7 : 1,
              filter: glitchActive ? "blur(1px)" : "none",
              transition: "all 0.1s",
            }}
          >
            Tutorial<br />Hell
          </div>

          {/* Glitch terminal */}
          <div className="terminal-window" style={{ maxWidth: "400px" }}>
            <div className="terminal-header">
              <div className="t-dot" style={{ background: "#ff5f56" }} />
              <div className="t-dot" style={{ background: "#ffbd2e" }} />
              <div className="t-dot" style={{ background: "#27c93f" }} />
              <span style={{ fontSize: "11px", color: "var(--slate)", marginLeft: "8px" }}>
                resume.pdf
              </span>
            </div>
            <div style={{ padding: "16px", maxHeight: "200px", overflow: "hidden" }}>
              {glitchLines.map((line, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: "JetBrains Mono",
                    fontSize: "11px",
                    color: i % 3 === 0 ? "#ff0040" : i % 3 === 1 ? "var(--slate)" : "rgba(255,255,255,0.4)",
                    lineHeight: "20px",
                    opacity: glitchActive && i % 2 === 0 ? 0.3 : 1,
                    transition: "opacity 0.1s",
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              marginTop: "28px",
              fontSize: "15px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              maxWidth: "380px",
              fontFamily: "JetBrains Mono",
            }}
          >
            Most students are building the same weather apps. Your resume looks
            like a template. <span style={{ color: "rgba(255,255,255,0.3)" }}>// not for long</span>
          </motion.p>
        </motion.div>
      </div>

      {/* RIGHT — Contribution Graph */}
      <div className="flex-none md:flex-1 w-full min-h-[60vh] md:min-h-0 py-12 md:py-0 flex flex-col justify-start md:justify-center px-6 md:px-12 relative pb-24 md:pb-0">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(57,211,83,0.06) 0%, transparent 70%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="bento-tag mb-6">STATUS: SHIPPING</div>

          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 700,
              lineHeight: 1,
              marginBottom: "32px",
              letterSpacing: "-0.03em",
            }}
            className="text-glow-green"
          >
            Real<br />Impact
          </div>

          {/* Heatmap */}
          <div className="glass-card" style={{ padding: "20px", borderRadius: "10px", display: "inline-block", maxWidth: "100%", overflowX: "auto" }}>
            <div style={{ fontSize: "11px", color: "var(--slate)", fontFamily: "JetBrains Mono", marginBottom: "12px" }}>
              2,847 contributions in the last year
            </div>
            <div style={{ display: "flex", gap: "2px" }}>
              {heatData.map((week, wi) => (
                <div key={wi} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  {week.map((val, di) => (
                    <div
                      key={di}
                      className="heat-cell"
                      style={{ background: heatColor(val) }}
                      title={`${val} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "8px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "10px",
                color: "var(--slate)",
                fontFamily: "JetBrains Mono",
              }}
            >
              <span>Less</span>
              {["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"].map((c, i) => (
                <div key={i} className="heat-cell" style={{ background: c }} />
              ))}
              <span>More</span>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              marginTop: "28px",
              marginBottom: "60px",
              fontSize: "15px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              maxWidth: "380px",
            }}
          >
            Stop following tutorials. Start writing code that real users rely on.
            Build a portfolio that recruiters actually stop to read.
          </motion.p>
        </motion.div>
      </div>

      {/* Center divider label */}
      <div
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        style={{
          background: "var(--void)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "8px 16px",
          borderRadius: "4px",
          fontFamily: "JetBrains Mono",
          fontSize: "11px",
          color: "var(--slate)",
          letterSpacing: "0.2em",
          whiteSpace: "nowrap",
        }}
      >
        VS
      </div>

      {/* Spacer for mobile nav dots */}
      <div className="w-full h-24 flex-shrink-0 block md:hidden"></div>
    </div>
  );
}
