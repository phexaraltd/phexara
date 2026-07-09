"use client";

import { useEffect, useRef, useState } from "react";

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
const LOGO_TEXT = "PHEXARA";

export default function Loader() {
  const [percent, setPercent] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [logoText, setLogoText] = useState(LOGO_TEXT);
  const glitchIntervalRef = useRef(null);

  // Loading bar progress
  useEffect(() => {
    document.body.style.overflow = "hidden";
    let n = 0;
    const interval = setInterval(() => {
      n = Math.min(n + Math.floor(Math.random() * 12) + 4, 100);
      setPercent(n);
      if (n >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setHidden(true);
          document.body.style.overflow = "";
        }, 300);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Glitch text scramble
  const scramble = () => {
    let iterations = 0;
    clearInterval(glitchIntervalRef.current);
    glitchIntervalRef.current = setInterval(() => {
      setLogoText(
        LOGO_TEXT.split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iterations) return LOGO_TEXT[i];
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );
      if (iterations >= LOGO_TEXT.length) clearInterval(glitchIntervalRef.current);
      iterations += 0.5;
    }, 30);
  };

  useEffect(() => {
    const t = setTimeout(scramble, 1200);
    return () => {
      clearTimeout(t);
      clearInterval(glitchIntervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="loader" className={hidden ? "hidden" : ""}>
      <div className="loader-logo" onMouseEnter={scramble}>{logoText}</div>
      <div className="loader-bar-wrap">
        <div className="loader-bar"></div>
      </div>
      <div className="loader-count">{percent}%</div>
    </div>
  );
}
