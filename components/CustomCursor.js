"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const pathname = usePathname();

  // Mouse tracking + follower animation: set up once
  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let raf;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    };
    document.addEventListener("mousemove", onMouseMove);

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX + "px";
      follower.style.top = followerY + "px";
      raf = requestAnimationFrame(animateFollower);
    };
    animateFollower();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Hover states + dark-section detection: re-run on every route change
  // since the layout (and this component) persists across navigations.
  useEffect(() => {
    const hoverTargets = "a, button, .card, .sol-card, .project-row, input, textarea, select, .dept-item";
    const onMouseOver = (e) => {
      if (e.target.closest && e.target.closest(hoverTargets)) {
        document.body.classList.add("cursor-hover");
      }
    };
    const onMouseOut = (e) => {
      if (e.target.closest && e.target.closest(hoverTargets)) {
        document.body.classList.remove("cursor-hover");
      }
    };
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    const darkSections = document.querySelectorAll(".dark-section, .projects-section, footer, .contact-section");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            document.body.classList.add("cursor-dark");
          } else {
            const anyDark = [...darkSections].some((s) => {
              const rect = s.getBoundingClientRect();
              return rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
            });
            if (!anyDark) document.body.classList.remove("cursor-dark");
          }
        });
      },
      { threshold: 0.3 }
    );
    darkSections.forEach((s) => io.observe(s));

    return () => {
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      io.disconnect();
      document.body.classList.remove("cursor-dark");
    };
  }, [pathname]);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-follower" ref={followerRef}></div>
    </>
  );
}
