"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Slide1Hero from "@/components/slides/Slide1Hero";
import Slide2Reality from "@/components/slides/Slide2Reality";
import Slide3Path from "@/components/slides/Slide3Path";
import Slide4Gateway from "@/components/slides/Slide4Gateway";
import Slide5Pipeline from "@/components/slides/Slide5Pipeline";
import Slide6OpenSessions from "@/components/slides/Slide6OpenSessions";
import Slide7BuildDays from "@/components/slides/Slide7BuildDays";
import Slide8Ecosystem from "@/components/slides/Slide8Ecosystem";
import Slide9WhoAmI from "@/components/slides/Slide9WhoAmI";
import Slide10Team from "@/components/slides/Slide10Team";
import Slide11Outro from "@/components/slides/Slide11Outro";

const SLIDES = [
  { id: 1, label: "Hook", component: Slide1Hero },
  { id: 2, label: "Reality", component: Slide2Reality },
  { id: 3, label: "Path", component: Slide3Path },
  { id: 4, label: "Gateway", component: Slide4Gateway },
  { id: 5, label: "Pipeline", component: Slide5Pipeline },
  { id: 6, label: "Sessions", component: Slide6OpenSessions },
  { id: 7, label: "Build Days", component: Slide7BuildDays },
  { id: 8, label: "Ecosystem", component: Slide8Ecosystem },
  { id: 9, label: "whoami", component: Slide9WhoAmI },
  { id: 10, label: "Team", component: Slide10Team },
  { id: 11, label: "Exit", component: Slide11Outro },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 22 });
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const move = (e: MouseEvent) => { cursorX.set(e.clientX); cursorY.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  const goTo = useCallback((index: number) => {
    if (isAnimating || index < 0 || index >= SLIDES.length) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const goNext = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translateX(${-current * 100}vw)`;
    trackRef.current.style.transition = "transform 0.75s cubic-bezier(0.77, 0, 0.175, 1)";
  }, [current]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, goTo]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (e.deltaY > 0 || e.deltaX > 0) goTo(current + 1);
        else goTo(current - 1);
      }, 50);
    };
    const el = containerRef.current;
    el?.addEventListener("wheel", handler, { passive: false });
    return () => { el?.removeEventListener("wheel", handler); clearTimeout(timeout); };
  }, [current, goTo]);

  useEffect(() => {
    let startX = 0;
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? goTo(current + 1) : goTo(current - 1);
    };
    window.addEventListener("touchstart", onStart);
    window.addEventListener("touchend", onEnd);
    return () => { window.removeEventListener("touchstart", onStart); window.removeEventListener("touchend", onEnd); };
  }, [current, goTo]);

  return (
    <>
      <motion.div className="cursor-dot" style={{ left: springX, top: springY }} />
      <motion.div className="cursor-ring" style={{ left: ringX, top: ringY }} />

      <div ref={containerRef} style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}>
        <div ref={trackRef} style={{ display: "flex", width: `${SLIDES.length * 100}vw`, height: "100vh" }}>
          {SLIDES.map(({ id, component: SlideComponent }) => (
            id === 7 ? <SlideComponent key={id} onNextSlide={goNext} /> : <SlideComponent key={id} />
          ))}
        </div>

        {/* Slide counter */}
        <div style={{ position: "fixed", bottom: "24px", left: "32px", fontFamily: "JetBrains Mono", fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em", zIndex: 100 }}>
          <span style={{ color: "var(--green)" }}>{String(current + 1).padStart(2, "0")}</span>
          {" "}/ {String(SLIDES.length).padStart(2, "0")}
        </div>

        {/* Dot nav */}
        <div style={{ position: "fixed", bottom: "24px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px", zIndex: 100 }}>
          {SLIDES.map((s, i) => (
            <button key={s.id} onClick={() => goTo(i)} title={s.label}
              style={{ width: i === current ? "24px" : "6px", height: "6px", borderRadius: "3px", background: i === current ? "var(--green)" : "rgba(255,255,255,0.15)", border: "none", cursor: "none", transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)", boxShadow: i === current ? "0 0 10px rgba(57,211,83,0.6)" : "none" }}
            />
          ))}
        </div>

        {/* Arrow nav */}
        <div className="hidden md:flex" style={{ position: "fixed", right: "24px", top: "50%", transform: "translateY(-50%)", flexDirection: "column", gap: "8px", zIndex: 100 }}>
          {[{ dir: -1, label: "←" }, { dir: 1, label: "→" }].map(({ dir, label }) => {
            const disabled = dir === -1 ? current === 0 : current === SLIDES.length - 1;
            const active = !disabled && dir === 1;
            return (
              <button key={dir} onClick={() => goTo(current + dir)} disabled={disabled}
                style={{ width: "36px", height: "36px", background: active ? "rgba(57,211,83,0.1)" : "rgba(255,255,255,0.04)", border: `1px solid ${active ? "rgba(57,211,83,0.3)" : "rgba(255,255,255,0.08)"}`, borderRadius: "6px", color: disabled ? "rgba(255,255,255,0.1)" : active ? "var(--green)" : "rgba(255,255,255,0.5)", fontSize: "14px", cursor: disabled ? "not-allowed" : "none", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
                {label}
              </button>
            );
          })}
        </div>

        {/* Slide label */}
        <motion.div key={current} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          style={{ position: "fixed", top: "24px", left: "50%", transform: "translateX(-50%)", fontFamily: "JetBrains Mono", fontSize: "11px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.25em", textTransform: "uppercase", zIndex: 100, pointerEvents: "none" }}>
          {SLIDES[current].label}
        </motion.div>

        {/* Progress bar */}
        <div style={{ position: "fixed", top: 0, left: 0, height: "1px", background: "var(--green)", width: `${((current + 1) / SLIDES.length) * 100}%`, transition: "width 0.75s cubic-bezier(0.77,0,0.175,1)", zIndex: 200, boxShadow: "0 0 8px rgba(57,211,83,0.6)" }} />
      </div>
    </>
  );
}
