"use client";
import { motion } from "framer-motion";

const nodes = [
  { id: "scan", label: "Scan QR", sub: "Portal opens", x: 8, y: 50, color: "var(--green)" },
  { id: "cohort", label: "Choose Cohort", sub: "01 or 02", x: 28, y: 50, color: "var(--green)" },
  { id: "engine1", label: "Open Sessions", sub: "Biweekly // All campus", x: 52, y: 22, color: "var(--green)" },
  { id: "engine2", label: "Build Days", sub: "Weekly // Members only", x: 52, y: 78, color: "var(--blue)" },
  { id: "real", label: "Real Codebases", sub: "Live PRs", x: 74, y: 50, color: "var(--green)" },
  { id: "outcome", label: "GSoC / Grants", sub: "Global impact", x: 92, y: 50, color: "#ffd700" },
];

const edges = [
  { from: "scan", to: "cohort" },
  { from: "cohort", to: "engine1" },
  { from: "cohort", to: "engine2" },
  { from: "engine1", to: "real" },
  { from: "engine2", to: "real" },
  { from: "real", to: "outcome" },
];

function getPos(id: string, w: number, h: number) {
  const n = nodes.find((x) => x.id === id)!;
  return { x: (n.x / 100) * w, y: (n.y / 100) * h };
}

export default function Slide5Pipeline() {
  const W = 900;
  const H = 340;

  return (
    <div
      className="slide noise grid-bg flex flex-col items-center justify-center relative"
      style={{ background: "var(--void)" }}
    >
      <div className="absolute top-6 left-8 section-num">OSC // 05</div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="bento-tag mb-4">THE OPERATING SYSTEM</div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          The Pipeline
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "var(--slate)",
            marginTop: "8px",
            fontFamily: "JetBrains Mono",
          }}
        >
          Biweekly Open Sessions · Weekly Build Days · One destination
        </p>
      </motion.div>

      {/* SVG Node Graph */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        style={{ width: "100%", maxWidth: `${W}px`, padding: "0 40px" }}
      >
        <svg
          viewBox={`0 0 ${W} ${H}`}
          style={{ width: "100%", overflow: "visible" }}
        >
          <defs>
            <filter id="glow-green">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-blue">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="rgba(57,211,83,0.6)" />
            </marker>
            <marker id="arrow-blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="rgba(88,166,255,0.6)" />
            </marker>
            <marker id="arrow-gold" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="rgba(255,215,0,0.6)" />
            </marker>
          </defs>

          {/* Edges */}
          {edges.map((e, i) => {
            const f = getPos(e.from, W, H);
            const t = getPos(e.to, W, H);
            const fromNode = nodes.find((n) => n.id === e.from)!;
            const isBlue = e.from === "engine2";
            const color = isBlue ? "rgba(88,166,255,0.4)" : "rgba(57,211,83,0.4)";
            const marker = isBlue ? "arrow-blue" : "arrow-green";
            const mx = (f.x + t.x) / 2;
            return (
              <motion.path
                key={i}
                d={`M ${f.x} ${f.y} C ${mx} ${f.y}, ${mx} ${t.y}, ${t.x} ${t.y}`}
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                strokeDasharray="4 4"
                markerEnd={`url(#${marker})`}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.15 }}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node, i) => {
            const pos = getPos(node.id, W, H);
            const isMain = node.id === "scan" || node.id === "outcome";
            const r = isMain ? 36 : 30;
            return (
              <motion.g
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring" }}
                style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
              >
                {/* Outer ring */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={r + 8}
                  fill="none"
                  stroke={node.color}
                  strokeWidth="0.5"
                  opacity="0.2"
                />
                {/* Node circle */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={r}
                  fill="#0d1117"
                  stroke={node.color}
                  strokeWidth="1.5"
                  filter="url(#glow-green)"
                />
                {/* Label */}
                <text
                  x={pos.x}
                  y={pos.y - 4}
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="600"
                  fontFamily="JetBrains Mono"
                >
                  {node.label.split(" ").map((word, wi) => (
                    <tspan key={wi} x={pos.x} dy={wi === 0 ? 0 : 13}>
                      {word}
                    </tspan>
                  ))}
                </text>
                {/* Sub label */}
                <text
                  x={pos.x}
                  y={pos.y + (node.label.split(" ").length > 1 ? 22 : 14)}
                  textAnchor="middle"
                  fill={node.color}
                  fontSize="9"
                  fontFamily="JetBrains Mono"
                  opacity="0.7"
                >
                  {node.sub}
                </text>
              </motion.g>
            );
          })}
        </svg>
      </motion.div>

      {/* Two track labels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex gap-8 mt-8"
      >
        {[
          { label: "Track 01 // Open Sessions", sub: "Biweekly · All campus · Meta-skills", color: "var(--green)" },
          { label: "Track 02 // Build Days", sub: "Weekly · Members · Real codebases", color: "var(--blue)" },
        ].map((t, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 20px",
              background: "var(--glass)",
              border: "1px solid var(--glass-border)",
              borderRadius: "6px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: t.color,
                boxShadow: `0 0 10px ${t.color}`,
                flexShrink: 0,
              }}
            />
            <div>
              <div style={{ fontSize: "12px", fontFamily: "JetBrains Mono", color: "#fff", fontWeight: 600 }}>
                {t.label}
              </div>
              <div style={{ fontSize: "11px", color: "var(--slate)", fontFamily: "JetBrains Mono" }}>
                {t.sub}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
