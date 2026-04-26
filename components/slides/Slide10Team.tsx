"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const team = [
  {
    role: "Lead",
    domain: "AI / Systems",
    color: "var(--green)",
    tags: ["Symbi-OS Architect", "AI Supply Chain", "Top 2% PyTorch OpenEnv"],
    bio: "Architect of Symbi-OS, an AI Supply Chain Engine. Placed Top 2% globally in the Meta PyTorch OpenEnv Hackathon.",
    handle: "lead.osc",
  },
  {
    role: "Mentorship Head",
    domain: "Open Source",
    color: "var(--blue)",
    tags: ["Core Maintainer", "Architecture Specialist", "PR Reviewer"],
    bio: "Core maintainer of major open-source projects. Specializes in software architecture and guiding first-time contributors through real codebases.",
    handle: "mentor.osc",
  },
  {
    role: "Internal Ops",
    domain: "Systems / Go",
    color: "#a78bfa",
    tags: ["Go Developer", "Systems Engineer", "Campus Tool Maintainer"],
    bio: "Go-based systems developer maintaining campus-wide tooling. Bridges internal operations with production engineering standards.",
    handle: "ops.osc",
  },
  {
    role: "Web3 Lead",
    domain: "Blockchain",
    color: "#9945FF",
    tags: ["Solana VM", "Smart Contract Auditor", "DeFi Contributor"],
    bio: "Solana Virtual Machine specialist and certified Smart Contract Auditor. Deep in the on-chain developer ecosystem.",
    handle: "web3.osc",
  },
  {
    role: "Systems / CP Lead",
    domain: "Algorithms / C++",
    color: "#f59e0b",
    tags: ["CF Expert 1600+", "C++ / Distributed", "Low-Level Specialist"],
    bio: "Codeforces Expert rated 1600+. Specializes in C++ and distributed systems, bridging competitive programming with real engineering.",
    handle: "systems.osc",
  },
  {
    role: "App Lead",
    domain: "Mobile / Hackathons",
    color: "#ef4444",
    tags: ["50k+ Downloads", "MLH Top 10", "Full-Stack Mobile"],
    bio: "50k+ app downloads across stores. MLH Hackathon Top 10 finisher. Leads the mobile and application track with production-grade standards.",
    handle: "app.osc",
  },
];

export default function Slide10Team() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="slide noise flex flex-col items-center justify-center relative px-10 py-8"
      style={{ background: "var(--void)" }}
    >
      <div className="absolute top-6 left-8 section-num">OSC // 10</div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="bento-tag mb-3">THE ENGINEERING CORE</div>
        <h2
          style={{
            fontSize: "clamp(26px, 3.5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Led by engineers in the trenches.
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "var(--slate)",
            marginTop: "8px",
            fontFamily: "JetBrains Mono",
          }}
        >
          Not textbook readers. Actual builders with global receipts.
        </p>
      </motion.div>

      {/* Team grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "12px",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="profile-card"
            style={{
              padding: "20px 16px",
              cursor: "none",
              borderColor:
                hovered === i ? `${member.color}30` : "var(--glass-border)",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Avatar placeholder with initials */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: `${member.color}15`,
                border: `1px solid ${member.color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "14px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Marble texture effect */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${member.color}10, transparent, ${member.color}05)`,
                }}
              />
              <span
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: member.color,
                  zIndex: 1,
                }}
              >
                {member.role.charAt(0)}
              </span>
            </div>

            {/* Role */}
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "9px",
                color: member.color,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              {member.domain}
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "12px",
                lineHeight: 1.3,
              }}
            >
              {member.role}
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "14px" }}>
              {member.tags.map((tag, j) => (
                <div
                  key={j}
                  style={{
                    fontFamily: "JetBrains Mono",
                    fontSize: "9px",
                    color: "rgba(255,255,255,0.45)",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "3px 6px",
                    borderRadius: "3px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Bio — visible on hover */}
            <motion.div
              animate={{ opacity: hovered === i ? 1 : 0, height: hovered === i ? "auto" : 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: "hidden" }}
            >
              <p
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                  marginBottom: "10px",
                }}
              >
                {member.bio}
              </p>
            </motion.div>

            {/* Handle */}
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "10px",
                color: "rgba(255,255,255,0.2)",
                marginTop: "auto",
              }}
            >
              @{member.handle}
            </div>

            {/* Bottom accent line */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: `linear-gradient(90deg, transparent, ${member.color}, transparent)`,
                opacity: hovered === i ? 0.6 : 0,
                transition: "opacity 0.3s",
              }}
            />
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          marginTop: "20px",
          fontSize: "12px",
          color: "var(--slate)",
          fontFamily: "JetBrains Mono",
          textAlign: "center",
        }}
      >
        <span style={{ color: "var(--green)" }}>hover</span> a card to read their full stack
      </motion.p>
    </div>
  );
}
