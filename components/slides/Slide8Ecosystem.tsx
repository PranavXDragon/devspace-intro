"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const communities = [
  {
    name: "Solana Superteam",
    short: "SOL",
    desc: "Global builder network. Grants, bounties, and IRL builder houses.",
    color: "#9945FF",
    x: 15, y: 25, depth: 1.2,
  },
  {
    name: "Google Developer Groups",
    short: "GDG",
    desc: "Worldwide community of developers building with Google tech.",
    color: "#4285F4",
    x: 72, y: 18, depth: 0.8,
  },
  {
    name: "Major League Hacking",
    short: "MLH",
    desc: "The official student hackathon league. 100k+ hackers globally.",
    color: "#FF0066",
    x: 40, y: 70, depth: 1.5,
  },
  {
    name: "GitHub Campus",
    short: "GH",
    desc: "Student developer program with free tools and global network.",
    color: "var(--green)",
    x: 80, y: 65, depth: 0.6,
  },
  {
    name: "Google Summer of Code",
    short: "GDSC",
    desc: "$3000–$6600 stipends for contributing to dev space orgs.",
    color: "#EA4335",
    x: 28, y: 42, depth: 1.0,
  },
];

const connections = [
  [0, 4], [1, 3], [2, 4], [3, 1], [4, 0],
];

export default function Slide8Ecosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="slide noise relative flex items-center justify-start"
      style={{ background: "var(--void)" }}
    >
      <div className="absolute top-6 left-8 section-num">DSC // 08</div>

      {/* Radial background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(88,166,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* LEFT — Copy */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "360px",
          flexShrink: 0,
          padding: "0 0 0 60px",
          zIndex: 10,
          position: "relative",
        }}
      >
        <div className="bento-tag mb-6">BEYOND THE COMMITS</div>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          Code is{" "}
          <span className="text-glow-green">50%</span>
          <br />
          of the equation.
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75,
            marginBottom: "28px",
          }}
        >
          We actively organize teams to high-stakes hackathons and plug you
          directly into massive global communities. When grants, bounties, or
          IRL builder houses open, our members are first through the door.
        </p>

        {/* Stats */}
        {[
          { val: "3+", label: "global communities" },
          { val: "$1M+", label: "in annual bounties" },
          { val: "First", label: "access to opportunities" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--green)",
                minWidth: "60px",
              }}
            >
              {s.val}
            </span>
            <span style={{ fontSize: "13px", color: "var(--slate)" }}>
              {s.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* RIGHT — Node graph */}
      <div style={{ flex: 1, position: "relative", height: "100%" }}>
        {/* Connection lines SVG */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {connections.map(([a, b], i) => {
            const n1 = communities[a];
            const n2 = communities[b];
            return (
              <motion.line
                key={i}
                x1={`${n1.x}%`}
                y1={`${n1.y}%`}
                x2={`${n2.x}%`}
                y2={`${n2.y}%`}
                stroke="rgba(57,211,83,0.12)"
                strokeWidth="1"
                strokeDasharray="4 6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              />
            );
          })}
        </svg>

        {/* Community nodes */}
        {communities.map((c, i) => {
          const offsetX = useTransform(smoothX, [0, 1], [-10 * c.depth, 10 * c.depth]);
          const offsetY = useTransform(smoothY, [0, 1], [-8 * c.depth, 8 * c.depth]);

          return (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                left: `${c.x}%`,
                top: `${c.y}%`,
                x: offsetX,
                y: offsetY,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12, type: "spring" }}
              whileHover={{ scale: 1.08, zIndex: 20 }}
            >
              {/* Pulse ring */}
              <motion.div
                style={{
                  position: "absolute",
                  inset: "-16px",
                  borderRadius: "50%",
                  border: `1px solid ${c.color}30`,
                }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />

              {/* Card */}
              <div
                style={{
                  background: "rgba(13, 17, 23, 0.9)",
                  border: `1px solid ${c.color}40`,
                  borderRadius: "12px",
                  padding: "16px 20px",
                  width: "160px",
                  backdropFilter: "blur(12px)",
                  boxShadow: `0 0 30px ${c.color}20`,
                  cursor: "none",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: `${c.color}20`,
                    border: `1px solid ${c.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                    fontFamily: "JetBrains Mono",
                    fontWeight: 700,
                    fontSize: "10px",
                    color: c.color,
                  }}
                >
                  {c.short}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "6px",
                    lineHeight: 1.3,
                  }}
                >
                  {c.name}
                </div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>
                  {c.desc}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
