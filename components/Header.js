"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css"

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/industries", label: "Industries" },
  { href: "/careers", label: "Careers" },
  { href: "/insights", label: "Insights" },
];

// Routes whose page opens with a dark hero. Add/remove paths here as needed —
// this list is the single source of truth, so there's no DOM guessing.
const DARK_HERO_ROUTES = ["/about", "/projects", "/careers", "/contact"];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Computed synchronously on every render — no effect, no flash, no race.
  const isDarkHeroPage = DARK_HERO_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );
  // While it's a dark-hero page AND the user hasn't scrolled past it yet,
  // the header stays transparent.
  const transparent = isDarkHeroPage && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <nav
        className={`nav${scrolled ? " scrolled" : ""}${transparent ? " transparent" : ""}`}
        id="main-nav"
      >
        <Link href="/" className="nav-logo">
          <img src="/phexaraicon.png" alt="PHEXARA, LTD" className="nav-logo-img" />
        </Link>

        <ul className="nav-links">
          <li>
            <Link href="/" className={isActive("/") ? "active" : undefined}>
              Home
            </Link>
          </li>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={isActive(link.href) ? "active" : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <Link href="/contact" className="nav-btn">
            <span>Contact Us</span>
          </Link>
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <Link href="/" className={isActive("/") ? "active" : undefined}>
          Home
        </Link>
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className={isActive(link.href) ? "active" : undefined}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact">Contact</Link>
      </div>
    </>
  );
}