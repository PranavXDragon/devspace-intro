"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function QRCode() {
  // Generate a visual QR-code-like pattern
  const size = 21;
  const [cells] = useState(() => {
    const c: boolean[][] = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => Math.random() > 0.5)
    );
    // Force finder patterns (corners)
    const addFinder = (r: number, col: number) => {
      for (let i = 0; i < 7; i++)
        for (let j = 0; j < 7; j++) {
          const edge = i === 0 || i === 6 || j === 0 || j === 6;
          const inner = i >= 2 && i <= 4 && j >= 2 && j <= 4;
          if (r + i < size && col + j < size)
            c[r + i][col + j] = edge || inner;
        }
    };
    addFinder(0, 0);
    addFinder(0, size - 7);
    addFinder(size - 7, 0);
    return c;
  });

  return (
    <div
      style={{
        display: "inline-grid",
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gap: "2px",
        padding: "16px",
        background: "#fff",
        borderRadius: "8px",
      }}
    >
      {cells.flat().map((filled, i) => (
        <div
          key={i}
          style={{
            width: "10px",
            height: "10px",
            background: filled ? "#050505" : "#fff",
            borderRadius: "1px",
          }}
        />
      ))}
    </div>
  );
}

export default function Slide4Gateway() {
  const [countdown, setCountdown] = useState({ h: 47, m: 58, s: 32 });
  const [btnHovered, setBtnHovered] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setCountdown((c) => {
        let { h, m, s } = c;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 47; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="slide noise flex items-center justify-center relative"
      style={{ background: "var(--void)" }}
    >
      <div className="absolute top-6 left-8 section-num">OSC // 04</div>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(57,211,83,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="flex items-center gap-20 z-10 max-w-6xl w-full px-12">
        {/* LEFT — Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="bento-tag mb-6">ONBOARDING PROTOCOL</div>

          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Skill is teachable.
            <br />
            <span className="text-glow-green">Intent is not.</span>
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75,
              marginBottom: "32px",
              maxWidth: "440px",
            }}
          >
            We don&apos;t do Google Form sign-ups. We don&apos;t care about your
            GPA. We operate strictly on{" "}
            <span style={{ color: "var(--green)", fontFamily: "JetBrains Mono" }}>
              Proof of Work
            </span>
            . Scan to receive your onboarding challenge.
          </p>

          {/* Countdown */}
          <div className="glass-card" style={{ padding: "20px 28px", borderRadius: "8px", display: "inline-block", marginBottom: "32px" }}>
            <div
              style={{
                fontSize: "11px",
                fontFamily: "JetBrains Mono",
                color: "var(--slate)",
                letterSpacing: "0.2em",
                marginBottom: "8px",
              }}
            >
              PORTAL CLOSES IN
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "40px",
                fontWeight: 700,
                color: "var(--green)",
                letterSpacing: "0.05em",
                textShadow: "0 0 20px rgba(57,211,83,0.5)",
              }}
            >
              {pad(countdown.h)}:{pad(countdown.m)}:{pad(countdown.s)}
            </div>
          </div>

          <div style={{ display: "block" }}>
            <button
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "14px",
                fontWeight: 600,
                color: btnHovered ? "#050505" : "var(--green)",
                background: btnHovered ? "var(--green)" : "transparent",
                border: "1px solid var(--green)",
                padding: "14px 28px",
                borderRadius: "4px",
                cursor: "none",
                letterSpacing: "0.05em",
                transition: "all 0.25s ease",
                boxShadow: btnHovered
                  ? "0 0 40px rgba(57,211,83,0.4)"
                  : "none",
              }}
            >
              &gt; Initialize_Proof_of_Work
            </button>
          </div>
        </motion.div>

        {/* RIGHT — Terminal + QR */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="terminal-window" style={{ width: "340px" }}>
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
                osc://onboarding.portal
              </span>
            </div>

            <div style={{ padding: "24px", textAlign: "center" }}>
              {/* QR Code */}
              <div
                style={{
                  filter: "drop-shadow(0 0 20px rgba(57,211,83,0.25))",
                  display: "inline-block",
                  marginBottom: "16px",
                }}
              >
                <QRCode />
              </div>

              <div
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "11px",
                  color: "var(--slate)",
                  marginBottom: "4px",
                }}
              >
                osc.dev/init
              </div>
              <div
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                <span style={{ color: "var(--green)" }}>■</span> LIVE
              </div>
            </div>
          </div>

          {/* Instruction steps */}
          {["01 Scan QR", "02 Choose Cohort", "03 Complete Challenge", "04 Ship"].map(
            (step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginTop: "12px",
                  padding: "10px 16px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "6px",
                  fontFamily: "JetBrains Mono",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <span style={{ color: "var(--green)", fontWeight: 600 }}>
                  {step.substring(0, 2)}
                </span>
                <span>{step.substring(3)}</span>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
