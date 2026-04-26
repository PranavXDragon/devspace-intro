"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const team = [
  {
    role: "President",
    name: "Abhinav Jha",
    color: "var(--green)",
    tags: ["Vision & Direction", "Decisions & Meetings", "Sponsors & Stakeholders"],
    bio: "Abhinav sets the vision and overall direction of the club and represents it to faculty, management, and external competitions. He leads major decisions, meetings, events, and partnerships, including coordination with sponsors and stakeholders.",
  },
  {
    role: "Vice President",
    name: "Rushabh Mistry",
    color: "var(--blue)",
    tags: ["Daily Operations", "Budget & Expenses", "Approvals & Transparency"],
    bio: "Rushabh manages day-to-day operations to keep activities smooth and on schedule. He manages the club budget and expenses for NPS and outcomes, handles approvals and fund tracking, and coordinates with sponsors or the college when required.",
  },
  {
    role: "Training Head",
    name: "Mehul Agarwal",
    color: "#a78bfa",
    tags: ["Skill Roadmaps", "Weekly Sessions", "Progress Tracking"],
    bio: "Mehul defines skill development plans with clear roadmaps for beginner, intermediate, and advanced members. He plans and runs weekly sessions and peer-learning while tracking member progress and improvement.",
  },
  {
    role: "Mentorship Program & Events Head",
    name: "Prateek Singh",
    color: "#9945FF",
    tags: ["Mentorship Outcomes", "Event Execution", "Logistics & Timelines"],
    bio: "Prateek plans and monitors the mentorship program end-to-end for measurable outcomes. He plans and executes hackathons, contests, and guest sessions from start to finish while managing logistics and participant experience.",
  },
  {
    role: "Repo Maintainer",
    name: "Anant Singh",
    color: "#f59e0b",
    tags: ["Repo Structure", "Contribution Reviews", "Issues / PRs / Releases"],
    bio: "Anant manages and maintains the club's open-source repositories with clean structure, documentation, and code quality. He reviews contributions, guides contributors, and ensures issues, pull requests, and releases are handled smoothly.",
  },
  {
    role: "Tech and Operations Lead",
    name: "Kunal Kumar",
    color: "#ef4444",
    tags: ["Content & Operations", "External Collaborations", "Club Coordination"],
    bio: "Kunal handles tech content and operations, and drives collaborations with outside clubs and organizations to support the club's execution and growth.",
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
        <div className="bento-tag mb-3">THE CORE TEAM</div>
        <h2
          style={{
            fontSize: "clamp(26px, 3.5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          The Team Behind OSC.
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "var(--slate)",
            marginTop: "8px",
            fontFamily: "JetBrains Mono",
          }}
        >
          Leadership, mentorship, operations, and open-source execution.
        </p>
      </motion.div>

      {/* Team grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "14px",
          width: "100%",
          maxWidth: "1080px",
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
              padding: "20px 18px",
              cursor: "none",
              borderColor:
                hovered === i ? `${member.color}30` : "var(--glass-border)",
              minHeight: "290px",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Avatar placeholder with initials */}
            <div
              style={{
                width: "54px",
                height: "54px",
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
                  fontSize: "16px",
                  fontWeight: 700,
                  color: member.color,
                  zIndex: 1,
                }}
              >
                {member.name
                  .split(" ")
                  .slice(0, 2)
                  .map((part) => part.charAt(0))
                  .join("")}
              </span>
            </div>

            {/* Role + Name */}
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "10px",
                color: member.color,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              {member.role}
            </div>
            <div
              style={{
                fontSize: "clamp(20px, 1.6vw, 24px)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "14px",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              {member.name}
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "12px" }}>
              {member.tags.map((tag, j) => (
                <div
                  key={j}
                  style={{
                    fontFamily: "JetBrains Mono",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.62)",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "4px 8px",
                    borderRadius: "3px",
                    letterSpacing: "0.04em",
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
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.56)",
                  lineHeight: 1.55,
                  marginBottom: "8px",
                }}
              >
                {member.bio}
              </p>
            </motion.div>

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
        <span style={{ color: "var(--green)" }}>hover</span> a card to read responsibilities
      </motion.p>
    </div>
  );
}
