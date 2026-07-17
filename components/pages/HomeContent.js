"use client";

import Link from "next/link";

export default function HomeContent() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-eyebrow">· Technology Innovation Company ·</p>
            <h1 className="hero-h1">
              <span className="hero-line">
                <span className="word-accent">Where</span>{" "}
                <span className="word-bold">AI,</span>
              </span>
              <span className="hero-line">
                <span className="word-bold">Security,</span>
              </span>
              <span className="hero-line">
                <span className="word-accent">&amp;</span>{" "}
                <span className="word-bold">Innovation</span>
              </span>
              <span className="hero-line">
                <span className="word-accent">Converge</span>
              </span>
            </h1>
            <p className="hero-sub">
              PHEXARA develops advanced software, AI ecosystems, cybersecurity
              solutions, Applied AI &amp; Vertical SaaS, and intelligent
              infrastructure that help organizations transform, adapt, and
              build resilience in a connected world.
            </p>
            <div className="hero-actions">
              <Link href="/solutions" className="hero-btn-filled">
                <span>
                  Explore Solutions <span className="btn-arrow">→</span>
                </span>
              </Link>
              <Link href="/contact" className="hero-btn-outline">
                <span>Partner With Us</span>
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-blob" aria-hidden="true"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/lady-hero.png"
              alt="Engineer reviewing data on a tablet"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {["Artificial Intelligence","Cybersecurity","Applied AI & Vertical SaaS","Cloud Security","RAI (Responsible AI) & SbD Systems.","AI Governance","Intelligent IoT","HCI & Adaptive Learning ","Software Engineering","Zero Trust Security","Agentic AI Systems"].flatMap((item, i) => ([
            <span className="ticker-item" key={`a-${i}`}>{item}</span>,
            <span className="ticker-sep" key={`as-${i}`}>✦</span>,
          ]))}
          {["Artificial Intelligence","Cybersecurity","Applied AI & Vertical SaaS","Cloud Security","RAI (Responsible AI) & SbD Systems.","AI Governance","Intelligent IoT","HCI & Adaptive Learning ","Software Engineering","Zero Trust Security","Agentic AI Systems"].flatMap((item, i) => ([
            <span className="ticker-item" key={`b-${i}`}>{item}</span>,
            <span className="ticker-sep" key={`bs-${i}`}>✦</span>,
          ]))}
        </div>
      </div>

      {/* METRICS BAR */}
      <div className="metrics-bar dark-section">
        <div className="metric-cell" data-anim="fade-up">
          <span className="metric-num"><span data-count="10" data-suffix="+">0</span></span>
          <span className="metric-label">Industries Served</span>
        </div>
        <div className="metric-cell" data-anim="fade-up" data-delay="100">
          <span className="metric-num"><span data-count="6">0</span></span>
          <span className="metric-label">Core Disciplines</span>
        </div>
        <div className="metric-cell" data-anim="fade-up" data-delay="200">
          <span className="metric-num"><span data-count="3">0</span></span>
          <span className="metric-label">Founding Experts</span>
        </div>
        <div className="metric-cell" data-anim="fade-up" data-delay="300">
          <span className="metric-num"><span data-count="5" data-suffix="+">0</span></span>
          <span className="metric-label">Projects in Development</span>
        </div>
        <div className="metric-cell" data-anim="fade-up" data-delay="400">
          <span className="metric-num"><span data-count="100" data-suffix="%">0</span></span>
          <span className="metric-label">Security First</span>
        </div>
        <div className="metric-cell" data-anim="fade-up" data-delay="500">
          <span className="metric-num"><span data-count="2024">0</span></span>
          <span className="metric-label">Founded</span>
        </div>
      </div>

      {/* INTRO */}
      <section className="intro-section">
        <div className="intro-inner">
          <div className="intro-left">
            <p className="section-tag" data-anim="fade-up">What we stand for</p>
            <p className="large-statement" data-anim="fade-up" data-delay="100">
              Technology should not merely <strong className="brown-color">automate tasks.</strong><br />
              It should create <strong className="brown-color">trust, intelligence,</strong> and <strong className="brown-color">sustainable value</strong> — at the intersection of AI, security, and human possibility.
            </p>
            <p className="section-body" data-anim="fade-up" data-delay="200">PHEXARA is a next-generation technology company dedicated to creating intelligent, secure, and scalable digital ecosystems. Our purpose is to help organizations navigate complexity through innovation that is both powerful and responsible.</p>
            <div style={{ marginTop: "2.5rem" }} data-anim="fade-up" data-delay="300">
  <Link href="/about" className="btn-story"><span>Our Story →</span></Link>
</div>
          </div>
          <div className="intro-right">
            <div className="intro-capabilities" data-anim="fade-left" data-delay="100">
              <div className="cap-item">
                <span className="cap-num">01</span>
                <span className="cap-icon">⬡</span>
                <span>Software Engineering &amp; Platform Development</span>
              </div>
              <div className="cap-item">
                <span className="cap-num">02</span>
                <span className="cap-icon">◎</span>
                <span>Artificial Intelligence &amp; AI Governance</span>
              </div>
              <div className="cap-item">
                <span className="cap-num">03</span>
                <span className="cap-icon">◈</span>
                <span>Cybersecurity &amp; Cloud Security Architecture</span>
              </div>
              <div className="cap-item">
                <span className="cap-num">04</span>
                <span className="cap-icon">◉</span>
                <span>Applied AI & &amp; Vertical SaaS</span>
              </div>
              <div className="cap-item">
                <span className="cap-num">05</span>
                <span className="cap-icon">⬡</span>
                <span>RAI (Responsible AI) & SbD Systems.</span>
              </div>
              <div className="cap-item">
                <span className="cap-num">06</span>
                <span className="cap-icon">◈</span>
                <span>HCI & Adaptive Learning &amp; Predictive Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* SOLUTIONS PREVIEW */}
      <section className="sols-section">
        <div className="sols-header">
          <div>
            <p className="section-tag" data-anim="fade-up">Solutions</p>
            <h2 className="section-title" data-anim="fade-up" data-delay="100">What we <em>build</em></h2>
          </div>
         <Link href="/solutions" className="btn-all-solutions" data-anim="fade-up" data-delay="200"><span>All Solutions →</span></Link>
        </div>
        <div className="sols-grid">
          <div className="sol-card" data-anim="fade-up">
            <div className="sol-num">01</div>
            <div className="sol-symbol">⬡</div>
            <div className="sol-title">Software Development</div>
            <div className="sol-desc">Enterprise software, SaaS platforms, web &amp; mobile applications, APIs, and intelligent automation systems built for scale.</div>
            <div className="sol-arrow">↗</div>
          </div>
          <div className="sol-card" data-anim="fade-up" data-delay="100">
            <div className="sol-num">02</div>
            <div className="sol-symbol">◎</div>
            <div className="sol-title">AI Governance</div>
            <div className="sol-desc">Risk management, compliance frameworks, explainability, responsible AI assurance, and independent auditing.</div>
            <div className="sol-arrow">↗</div>
          </div>
          <div className="sol-card" data-anim="fade-up" data-delay="200">
            <div className="sol-num">03</div>
            <div className="sol-symbol">◈</div>
            <div className="sol-title">Applied AI & Vertical SaaS </div>
            <div className="sol-desc">Simulation, predictive maintenance, real-time monitoring, asset intelligence, and smart infrastructure models.</div>
            <div className="sol-arrow">↗</div>
          </div>
          <div className="sol-card" data-anim="fade-up" data-delay="100">
            <div className="sol-num">04</div>
            <div className="sol-symbol">⊕</div>
            <div className="sol-title">Cloud &amp; App Security</div>
            <div className="sol-desc">Cloud security architecture, DevSecOps, vulnerability assessments, zero trust, and identity security at scale.</div>
            <div className="sol-arrow">↗</div>
          </div>
          <div className="sol-card" data-anim="fade-up" data-delay="200">
            <div className="sol-num">05</div>
            <div className="sol-symbol">◉</div>
            <div className="sol-title">HCI & Adaptive Learning</div>
            <div className="sol-desc">Predictive analytics, customer intelligence, recommendation engines, fraud prevention, and retail platforms.</div>
            <div className="sol-arrow">↗</div>
          </div>
          <div className="sol-card" data-anim="fade-up" data-delay="300">
            <div className="sol-num">06</div>
            <div className="sol-symbol">⬡</div>
            <div className="sol-title">RAI (Responsible AI) & SbD Systems.</div>
            <div className="sol-desc">Real-time decision systems, autonomous monitoring, smart cities, industrial IoT, and connected sensor networks.</div>
            <div className="sol-arrow">↗</div>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="projects-section dark-section">
        {/* <div className="grid-bg-dark grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}></div> */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="projects-header">
            <div>
              <p className="section-tag" data-anim="fade-up">Projects</p>
              <h2 className="section-title" data-anim="fade-up" data-delay="100">Coming <em>soon</em></h2>
            </div>
            <p className="projects-sub" data-anim="fade-up" data-delay="200">PHEXARA is in active development. A portfolio of transformative projects launching across our core disciplines.</p>
          </div>
          <div className="project-list">
            <Link href="/projects" className="project-row" data-anim="fade-up">
              <span className="proj-idx">001</span>
              <div className="proj-info">
                <div className="proj-name">VEEP</div>
                <div className="proj-sub">Autonomous threat detection and intelligent response infrastructure</div>
              </div>
              <div className="proj-status dev">In Development</div>
              <div className="proj-arrow">↗</div>
            </Link>
            <Link href="/projects" className="project-row" data-anim="fade-up" data-delay="100">
              <span className="proj-idx">002</span>
              <div className="proj-info">
                <div className="proj-name">HAGO STAYS</div>
                <div className="proj-sub">Real-time simulation and predictive maintenance for industrial assets</div>
              </div>
              <div className="proj-status dev">In Development</div>
              <div className="proj-arrow">↗</div>
            </Link>
          </div>
          <div style={{ marginTop: "3rem" }} data-anim="fade-up">
           <Link href="/projects" className="btn-view-projects"><span>View All Projects →</span></Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <p className="section-tag" data-anim="fade-up">Get In Touch</p>
        <h2 className="section-title" data-anim="fade-up" data-delay="100">Let&apos;s build the<br />future <em>together</em></h2>
        <p className="section-body" data-anim="fade-up" data-delay="200">Whether you&apos;re looking to partner, invest, or explore what PHEXARA can build for your organization — we want to hear from you.</p>
       <div className="cta-buttons" data-anim="fade-up" data-delay="300">
  <Link href="/contact" className="hero-btn-filled"><span>Contact Us</span></Link>
  <Link href="/solutions" className="hero-btn-outline"><span>Explore Solutions</span></Link>
</div>
      </section>

      <style jsx>{`
        /* ============ HERO ========== */
   /* ============ HERO ========== */
.brown-color{
 color: #B0795A;
}
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: stretch;
  padding: calc(var(--nav-height) + 2rem) 5% 0;
  overflow: hidden;
  background: #fff;
}
.hero-glow {
  position: absolute;
  top: 50%;
  right: 6%;
  width: 620px;
  height: 620px;
  transform: translateY(-50%);
  background: radial-gradient(
    circle,
    rgba(196, 150, 214, 0.4) 0%,
    rgba(226, 196, 232, 0.22) 40%,
    rgba(255, 240, 232, 0.12) 60%,
    rgba(255, 255, 255, 0) 72%
  );
  filter: blur(6px);
  pointer-events: none;
  z-index: 0;
}
.hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  align-items: stretch;
  // gap: 2rem;
  // border:2px solid blue;
}
.hero-content {
  max-width: 670px;
  align-self: center;
  padding-bottom: 4rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.2s forwards;
  // border:2px solid red;
}
.hero-eyebrow {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gray-400);
  margin-bottom: 1.5rem;
}
.hero-h1 {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(2.75rem, 5.5vw, 4.5rem);
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin-bottom: 2rem;
}
.hero-h1 .hero-line {
  display: block;
}
.hero-h1 .word-accent {
  font-style: italic;
  font-weight: 500;
  color: #B0795A;
}
.hero-h1 .word-bold {
  font-style: normal;
  font-weight: 700;
  color: var(--black);
}
.hero-sub {
  font-size: 15.5px;
  color: var(--gray-500);
  line-height: 1.8;
  font-weight: 300;
  max-width: 480px;
  margin-bottom: 2.5rem;
}
.hero-actions {
  display: flex;
  gap: 0.6rem;
  flex-wrap: nowrap;
  margin-bottom: 3rem;
}
.hero-btn-filled {
  background: linear-gradient(135deg, #7b2ff7 0%, #9b3fd6 100%);
  color: #fff;
  border: none;
  border-radius: 999px;
  // padding: 0.95rem 1.9rem;
  font-size: 11px;
  font-weight: 600;
  // letter-spacing: 0.04em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform var(--transition), box-shadow var(--transition);
  box-shadow: 0 8px 24px rgba(123, 47, 247, 0.28);
  white-space: nowrap;
}
.hero-btn-filled:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(123, 47, 247, 0.36);
}
.hero-btn-outline {
  white-space: nowrap;
  background: #fff;
  color: var(--black);
  border: 1.5px solid #d8c3dc;
  border-radius: 999px;
  padding: 0.95rem 1.9rem;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: border-color var(--transition), background var(--transition);
}
.hero-btn-outline:hover {
  border-color: #93639b;
  background: #faf7fb;
}
.btn-arrow {
  font-size: 14px;
}
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: 0;
  animation: fadeInUp 0.9s ease 0.4s forwards;
  overflow: visible;
    // border:2px solid blue;
}

.hero-image {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1500px;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  object-position: bottom;
  transform: translateX(6%);
  // border:2px solid yellow;
}
.hero-blob {
  position: absolute;
  inset: 0;
  z-index: 0;
}
  .hero-btn-filled,
.hero-btn-outline {
  padding: 0.85rem 1.4rem;
  font-size: 12px;
  white-space: nowrap;
}
.hero-image {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  object-position: bottom;
  transform: translateX(6%);
  // border:2px solid green;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 900px) {
  .hero {
    min-height: auto;
    padding-top: calc(var(--nav-height) + 3rem);
  }
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  .hero-visual {
    order: -1;
    min-height: 0;
  }
  .hero-image {
    height: auto;
    width: 100%;
  }
  .hero-glow {
    width: 400px;
    height: 400px;
    right: 20%;
  }
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  .hero-btn-filled,
  .hero-btn-outline {
    width: auto;
    padding: 0.85rem 1.8rem;
    font-size: 12px;
  }
}
        /* ============ REST OF PAGE (unchanged) ============ */
       .metrics-bar {
  background: var(--black); padding: 4rem 5%;
  display: grid; grid-template-columns: repeat(6, 1fr);
  gap: 0; border-top: 1px solid #A9A79D;
}
.metric-cell {
  padding: 0 2rem; border-right: 1px solid #A9A79D;
  text-align: center;
}
.metric-cell:first-child { padding-left: 0; }
.metric-cell:last-child { border-right: none; padding-right: 0; }
.metric-num {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem; font-weight: 700; line-height: 1;
  color: var(--white); display: block; margin-bottom: 0.5rem;
}
.metric-label { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #EDEAE3; }

        .intro-section { padding: 9rem 5%; background: var(--white); }
        .intro-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 8rem; align-items: start; }
        .intro-right { padding-top: 5rem; }
        .large-statement {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.5rem, 3vw, 2.6rem);
          font-weight: 400; line-height: 1.25;
          letter-spacing: -0.015em; color: var(--black);
          margin-bottom: 3rem;
        }
        .large-statement :global(strong) { font-weight: 700; }
        .intro-capabilities { margin-top: 3rem; }
        .cap-item {
          display: flex; align-items: center; gap: 1.5rem;
          padding: 1.1rem 0; border-bottom: 1px solid #e8e8e8;
          font-size: 14px; color: var(--gray-600);
          transition: color var(--transition);
        }
        .cap-item:hover { color: var(--black); }
        .cap-num { font-size: 10px; color: var(--gray-300); letter-spacing: 0.1em; min-width: 24px; }
      .cap-icon {
  width: 34px; height: 34px;
  border: 1px solid #C9A07E;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; flex-shrink: 0;
  transition: border-color var(--transition);
}
.cap-item:hover .cap-icon { border-color: #C9A07E; }

     .sols-section {
  padding: 9rem 5%;
  background: #EDE9E1;
}

.sols-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 4rem; flex-wrap: wrap; gap: 2rem;
}

.section-tag {
  font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
  color: #8a8578; margin-bottom: 1rem;
}

.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: var(--black);
}
.section-title :global(em) {
  font-style: italic;
  font-weight: 400;
  color: #B9825A;
}

.btn-all-solutions {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  border: 1.5px solid #7C1FB4;
  border-radius: 999px;
  background: #fff;
  color: #111;
  font-size: 11px; font-weight: 600;
  letter-spacing: 0.08em; text-transform: uppercase;
  text-decoration: none;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.btn-all-solutions:hover {
  background: #f9f2fc;
  border-color: #6a1a99;
}

.sols-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  border: none;
}

.sol-card {
  padding: 2.5rem 2rem;
  background: #fff;
  border: none;
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.sol-card::before {
  display: none;
}
.sol-card:hover {
  background: #fff;
  box-shadow: 0 12px 28px rgba(0,0,0,0.08);
  transform: translateY(-3px);
}

.sol-num {
  display: none;
}

.sol-symbol {
  font-size: 20px;
  color: var(--black);
  margin-bottom: 1.5rem;
  line-height: 1;
}

.sol-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: #B9825A;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
}

.sol-desc {
  font-size: 12.5px;
  color: #6b6b6b;
  line-height: 1.65;
}

.sol-arrow {
  position: static;
  display: block;
  margin-top: 1.5rem;
  font-size: 14px;
  color: #333;
  transform: none;
}
.sol-card:hover .sol-arrow {
  color: #000;
  transform: none;
}

.projects-section {
  padding: 9rem 5%;
  background: radial-gradient(ellipse 80% 60% at 30% 0%, #262626 0%, #141414 45%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
}
.grid-bg-dark {
  display: none;
}

.projects-section :global(.section-tag) {
  color: #C9A07E;
  letter-spacing: 0.2em;
  font-size: 11px;
}
.projects-section :global(.section-title) {
  color: var(--white);
  font-weight: 700;
}
.projects-section :global(.section-title em) {
  font-style: italic;
  font-weight: 400;
  color: #C9A07E;
}

.projects-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  margin-bottom: 5rem; flex-wrap: wrap; gap: 2rem;
}
.projects-sub {
  font-size: 14px; color: #cfcfcf; max-width: 380px;
  line-height: 1.7; font-weight: 300;
}

.project-list {
  border-top: none;
}
:global(.project-row) {
  display: grid; grid-template-columns: 50px 1fr 170px 30px;
  align-items: center; gap: 2rem; padding: 2.2rem 0;
  border-bottom: 2px solid rgba(255,255,255,0.15);   /* was: 1px */
  transition: background 0.25s ease;
  cursor: pointer; text-decoration: none;
}
:global(.project-row:hover) {
  background: rgba(255,255,255,0.02);
}
:global(.project-row:hover .proj-arrow) {
  opacity: 1; transform: translate(4px,-4px);
}

.proj-idx {
  font-size: 11px; color: #7a6a5a; letter-spacing: 0.08em;
}
.proj-name {
  font-size: 1.3rem; font-weight: 700; color: var(--white);
  letter-spacing: -0.01em; margin-bottom: 6px;
}
.proj-sub {
  font-size: 12.5px;
  color: #C9A07E;   /* was: #9a9a9a */
}
.proj-status {
  font-size: 9.5px; letter-spacing: 0.14em; text-transform: uppercase;
  padding: 8px 18px; border: 1px solid #C9A07E; border-radius: 999px;
  color: #e8dcc9; text-align: center; white-space: nowrap;
}
.proj-status.dev {
  border-color: #C9A07E; color: #e8dcc9;
}
.proj-arrow {
  font-size: 1.2rem; color: #C9A07E; opacity: 0; transition: all 0.25s ease;
}

.btn-view-projects {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.85rem 1.8rem;
  border: 1.5px solid #C9A07E;
  border-radius: 999px;
  background: transparent;
  color: #f1e6d8;
  font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
  text-decoration: none;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.btn-view-projects:hover {
  background: rgba(201,160,126,0.08);
  border-color: #e0b98d;
}

        .cta-section {
          padding: 10rem 5%; text-align: center; background: var(--white);
          border-top: 1px solid #e8e8e8; position: relative; overflow: hidden;
        }
        .cta-section :global(.section-title) { margin: 0 auto 2rem; max-width: 700px; }
        .cta-section :global(.section-body) { margin: 0 auto 3rem; text-align: center; }
        .cta-buttons { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }

        @media (max-width: 1024px) {
          .metrics-bar { grid-template-columns: repeat(3, 1fr); gap: 2rem; }
          .metric-cell { border-right: none; border-bottom: 1px solid #1e1e1e; padding: 1.5rem 0; text-align: left; }
          .sols-grid { grid-template-columns: 1fr 1fr; }
        }
                  @media (max-width: 900px) {
  .hero-inner {
    gap: 0.5rem;
  }
     .hero-visual {
    order: -1;
    min-height: 0;
  }
  .hero-image {
    height: auto;
  }
}
        @media (max-width: 768px) {
          .intro-inner { grid-template-columns: 1fr; gap: 3rem; }
          .intro-right { padding-top: 0; }
          .metrics-bar { grid-template-columns: repeat(2, 1fr); }
          .sols-grid { grid-template-columns: 1fr; }
          :global(.project-row) { grid-template-columns: 50px 1fr; }
          .proj-status, .proj-arrow { display: none; }
        }
  

@media (min-width: 1024px) {
  .hero {
    padding-bottom: 0;
  }
}
@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  .hero-btn-filled,
  .hero-btn-outline {
    width: auto;
    padding: 0.85rem 1.8rem;
    font-size: 12px;
  }
}
// @media (max-width: 380px) {
//   .hero-btn-filled,
//   .hero-btn-outline {
//     padding: 0.6rem 0.9rem;
//     font-size: 9.5px;
//   }
//   .hero-actions {
//     gap: 0.5rem;

//   }
// }
      `}</style>
    </>
  );
}