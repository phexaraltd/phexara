"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const [animState, setAnimState] = useState("leaving");

  useEffect(() => {
    if (isFirstRender.current) {
      // Animate out on initial load, same as the original site.
      isFirstRender.current = false;
      setAnimState("leaving");
      return;
    }
    // On every subsequent route change, sweep in then back out.
    setAnimState("entering");
    const t = setTimeout(() => setAnimState("leaving"), 500);
    return () => clearTimeout(t);
  }, [pathname]);

  return <div id="page-transition" className={animState}></div>;
}
