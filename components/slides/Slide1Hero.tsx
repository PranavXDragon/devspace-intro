"use client";
import { motion } from "framer-motion";

export default function Slide1Hero() {
  return (
    <div className="slide noise grid-bg flex flex-col items-center justify-center relative pt-0 md:pt-0" style={{ paddingTop: 0 }}>
      {/* Deep radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(57,211,83,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-6 left-8 section-num">DSC // 01</div>
      <div
        className="absolute top-6 right-8 section-num"
        style={{ color: "var(--green)", fontFamily: "JetBrains Mono" }}
      >
        INITIALIZED
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-6xl mx-auto">
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              letterSpacing: "0.3em",
              color: "var(--slate)",
              textTransform: "uppercase",
            }}
          >
            &gt; what_if_i_told_you.exe
          </span>
        </motion.div>

        {/* The big number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="animate-glow"
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: "clamp(36px, 10vw, 200px)",
            fontWeight: 700,
            color: "var(--green)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            marginBottom: "32px",
          }}
        >
          ₹1,00,00,000
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(57,211,83,0.4), transparent)",
            marginBottom: "40px",
          }}
        />

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          style={{
            fontSize: "clamp(16px, 2vw, 22px)",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7,
            maxWidth: "680px",
            margin: "0 auto 20px",
          }}
        >
          What if I told you that landing a ₹1 Crore package... 
          starts with the code you write outside the classroom?
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          style={{
            fontSize: "clamp(14px, 1.6vw, 18px)",
            color: "var(--slate)",
            lineHeight: 1.7,
            width: "100%", maxWidth: "600px",
            margin: "0 auto",
            fontFamily: "JetBrains Mono",
          }}
        >
          Dev space isn&apos;t charity. It is the most lucrative treasure map 
          to premium placements and remote jobs. We teach you how to read it.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="hidden md:flex absolute bottom-8 right-10 items-center gap-3"
        style={{ fontFamily: "JetBrains Mono", fontSize: "11px", color: "var(--slate)" }}
      >
        <span>scroll to initialize</span>
        <div className="animate-scroll-hint flex items-center gap-1">
          <div style={{ width: 6, height: 6, background: "var(--green)", borderRadius: "50%" }} />
          <div style={{ width: 4, height: 4, background: "rgba(57,211,83,0.5)", borderRadius: "50%" }} />
          <div style={{ width: 2, height: 2, background: "rgba(57,211,83,0.25)", borderRadius: "50%" }} />
        </div>
      </motion.div>

      {/* Background marble silhouette */}
      <div
        className="absolute right-0 bottom-0 opacity-[0.04] pointer-events-none"
        style={{
          width: "40vw",
          height: "80vh",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 600'%3E%3Cellipse cx='150' cy='300' rx='80' ry='250' fill='white'/%3E%3Cellipse cx='150' cy='150' rx='50' ry='80' fill='white'/%3E%3C/svg%3E")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
          filter: "blur(2px)",
        }}
      />

      {/* Floating scan line */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 2 }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(57,211,83,0.3), transparent)",
            animation: "scanLine 4s linear infinite",
          }}
        />
      </div>
    </div>
  );
}
