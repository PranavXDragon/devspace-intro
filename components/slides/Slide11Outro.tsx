"use client";
import { motion } from "framer-motion";
import { useState } from "react";

function QRCode() {
  const size = 21;
  const cells = Array.from({ length: size }, (_, r) =>
    Array.from({ length: size }, (_, c) => {
      const inCorner =
        (r < 7 && c < 7) || (r < 7 && c >= 14) || (r >= 14 && c < 7);
      if (inCorner) {
        const lr = r < 7 ? r : r - 14;
        const lc = c < 7 ? c : c >= 14 ? c - 14 : c;
        const edge = lr === 0 || lr === 6 || lc === 0 || lc === 6;
        const inner = lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4;
        return edge || inner;
      }
      return (r * 13 + c * 7 + r ^ c) % 3 !== 0;
    })
  );

  return (
    <div
      style={{
        display: "inline-grid",
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gap: "2px",
        padding: "18px",
        background: "#fff",
        borderRadius: "10px",
        filter: "drop-shadow(0 0 30px rgba(57,211,83,0.3))",
      }}
    >
      {cells.flat().map((filled, i) => (
        <div
          key={i}
          style={{
            width: "9px",
            height: "9px",
            background: filled ? "#050505" : "#fff",
            borderRadius: "1px",
          }}
        />
      ))}
    </div>
  );
}

export default function Slide11Outro() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<{ text: string; type: string }[]>([
    { text: "Dev space club // Q&A Terminal", type: "system" },
    { text: 'Type a question or feedback. Press Enter.', type: "hint" },
    { text: "", type: "empty" },
  ]);
  const [sent, setSent] = useState(false);

  const responses: Record<string, string> = {
    default: "Query logged. We'll address this in the session. Thank you.",
    cohort: "Cohort selection is part of your onboarding challenge. Scan the QR.",
    git: "No prior git experience needed for Cohort 1. We start from zero.",
    gdsc: "GDSC is a Cohort 2 target. We guide you through the application.",
    when: "Build Days kick off in Week 2. Open Sessions start immediately.",
    help: "Commands: 'cohort', 'git', 'gdsc', 'when', or ask anything.",
  };

  const handleSubmit = () => {
    if (!input.trim()) return;
    const lq = input.toLowerCase();
    const key = Object.keys(responses).find((k) => k !== "default" && lq.includes(k));
    const response = responses[key ?? "default"];

    setLines((prev) => [
      ...prev,
      { text: `$ ${input}`, type: "input" },
      { text: `> ${response}`, type: "output" },
      { text: "", type: "empty" },
    ]);
    setInput("");
    setSent(true);
  };

  return (
    <div
      className="slide noise flex flex-col md:flex-row items-center justify-start md:justify-center relative"
      style={{ background: "var(--void)" }}
    >
      <div className="absolute top-6 left-8 section-num">DSC // 11</div>

      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(57,211,83,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 z-10 w-full max-w-6xl px-6 md:px-12">
        {/* LEFT — Terminal Q&A */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1 }}
        >
          <div className="bento-tag mb-6">QUESTIONS & FEEDBACK</div>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "8px",
            }}
          >
            Let&apos;s build.
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "var(--slate)",
              fontFamily: "JetBrains Mono",
              marginBottom: "24px",
            }}
          >
            Type <span style={{ color: "var(--green)" }}>help</span> to see available commands.
          </p>

          <div className="terminal-window" style={{ width: "100%", maxWidth: "520px" }}>
            <div className="terminal-header">
              <div className="t-dot" style={{ background: "#ff5f56" }} />
              <div className="t-dot" style={{ background: "#ffbd2e" }} />
              <div className="t-dot" style={{ background: "#27c93f" }} />
              <span style={{ fontSize: "11px", color: "var(--slate)", marginLeft: "8px", fontFamily: "JetBrains Mono" }}>
                dsc://qa.terminal
              </span>
            </div>

            {/* Output */}
            <div
              style={{
                padding: "20px",
                height: "220px",
                overflowY: "auto",
                fontFamily: "JetBrains Mono",
              }}
            >
              {lines.map((line, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "12px",
                    lineHeight: "20px",
                    color:
                      line.type === "system"
                        ? "var(--green)"
                        : line.type === "hint"
                        ? "var(--slate)"
                        : line.type === "input"
                        ? "rgba(255,255,255,0.8)"
                        : line.type === "output"
                        ? "var(--blue)"
                        : "transparent",
                    minHeight: "20px",
                  }}
                >
                  {line.text || "\u00A0"}
                </div>
              ))}
            </div>

            {/* Input */}
            <div
              style={{
                borderTop: "1px solid #21262d",
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "12px",
                  color: "var(--green)",
                  flexShrink: 0,
                }}
              >
                $
              </span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="ask anything..."
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontFamily: "JetBrains Mono",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.8)",
                  cursor: "none",
                }}
              />
              <button
                onClick={handleSubmit}
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "11px",
                  color: "var(--green)",
                  background: "transparent",
                  border: "1px solid rgba(57,211,83,0.3)",
                  padding: "4px 10px",
                  borderRadius: "3px",
                  cursor: "none",
                }}
              >
                ↵
              </button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — QR + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flexShrink: 0, textAlign: "center" }}
        >
          <div className="bento-tag mb-6" style={{ display: "inline-block" }}>
            SCAN TO BEGIN
          </div>

          <QRCode />

          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "16px",
                fontWeight: 700,
                color: "var(--green)",
                letterSpacing: "0.05em",
                marginBottom: "4px",
              }}
            >
              dsc.dev/init
            </div>
            <div style={{ fontSize: "12px", color: "var(--slate)", fontFamily: "JetBrains Mono" }}>
              Portal closes in 48 hours
            </div>
          </div>

          {/* Final line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{
              marginTop: "32px",
              padding: "16px 24px",
              background: "rgba(57,211,83,0.06)",
              border: "1px solid rgba(57,211,83,0.15)",
              borderRadius: "8px",
              maxWidth: "280px",
            }}
          >
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "13px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
              }}
            >
              This is the team. This is the pipeline.
              <br />
              The map is on the screen.
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--green)",
                marginTop: "10px",
              }}
            >
              Let&apos;s go build something that matters.
            </div>
          </motion.div>

          {/* exit(0) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{
              marginTop: "24px",
              fontFamily: "JetBrains Mono",
              fontSize: "28px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.12)",
              letterSpacing: "-0.02em",
            }}
          >
            exit(0);
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
