"use client";

import Link from "next/link";
import NeuralCanvas from "@/components/NeuralCanvas";

export default function HomeContent() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <NeuralCanvas />
        <div className="hero-content">
          <p className="hero-eyebrow">Technology Innovation Company</p>
          <h1 className="hero-h1">
            <span className="line"><span>Where AI,</span></span>
            <span className="line"><span>Security, <span className="italic-word">&amp;</span></span></span>
            <span className="line"><span>Innovation</span></span>
            <span className="line"><span className="italic-word">Converge</span></span>
          </h1>
          <p className="hero-sub">PHEXARA develops advanced software, AI ecosystems, cybersecurity solutions, Applied AI & Vertical SaaS, and intelligent infrastructure that help organizations transform, adapt, and build resilience in a connected world.</p>
          <div className="hero-actions">
            <Link href="/solutions" className="btn btn-filled"><span>Explore Solutions</span></Link>
            <Link href="/contact" className="btn"><span>Partner With Us →</span></Link>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <div className="scroll-line"></div>
          <span className="scroll-label">Scroll</span>
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
              Technology should not merely <strong>automate tasks.</strong><br />
              It should create <strong>trust, intelligence,</strong> and <strong>sustainable value</strong> — at the intersection of AI, security, and human possibility.
            </p>
            <p className="section-body" data-anim="fade-up" data-delay="200">PHEXARA is a next-generation technology company dedicated to creating intelligent, secure, and scalable digital ecosystems. Our purpose is to help organizations navigate complexity through innovation that is both powerful and responsible.</p>
            <div style={{ marginTop: "2.5rem" }} data-anim="fade-up" data-delay="300">
              <Link href="/about" className="btn"><span>Our Story →</span></Link>
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
          <Link href="/solutions" className="btn" data-anim="fade-up" data-delay="200"><span>All Solutions →</span></Link>
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
            <div className="sol-title">RAI Responsible AI & SbD Systems</div>
            <div className="sol-desc">Real-time decision systems, autonomous monitoring, smart cities, industrial IoT, and connected sensor networks.</div>
            <div className="sol-arrow">↗</div>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="projects-section dark-section">
        <div className="grid-bg-dark grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}></div>
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
            {/* <Link href="/projects" className="project-row" data-anim="fade-up" data-delay="200">
              <span className="proj-idx">003</span>
              <div className="proj-info">
                <div className="proj-name">HCI & Adaptive Learning</div>
                <div className="proj-sub">End-to-end predictive retail intelligence and fraud prevention platform</div>
              </div>
              <div className="proj-status soon">Coming Soon</div>
              <div className="proj-arrow">↗</div>
            </Link>
            <Link href="/projects" className="project-row" data-anim="fade-up" data-delay="300">
              <span className="proj-idx">004</span>
              <div className="proj-info">
                <div className="proj-name">AI Governance Framework</div>
                <div className="proj-sub">Enterprise-grade responsible AI compliance and auditing tooling</div>
              </div>
              <div className="proj-status soon">Coming Soon</div>
              <div className="proj-arrow">↗</div>
            </Link>
            <Link href="/projects" className="project-row" data-anim="fade-up" data-delay="400" style={{ borderBottom: "none" }}>
              <span className="proj-idx">005</span>
              <div className="proj-info">
                <div className="proj-name">RAI (Responsible AI) & SbD Systems.</div>
                <div className="proj-sub">Distributed AI inference and IoT orchestration at scale</div>
              </div>
              <div className="proj-status">Planned</div>
              <div className="proj-arrow">↗</div>
            </Link> */}
          </div>
          <div style={{ marginTop: "3rem" }} data-anim="fade-up">
            <Link href="/projects" className="btn btn-white"><span>View All Projects →</span></Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <p className="section-tag" data-anim="fade-up">Get In Touch</p>
        <h2 className="section-title" data-anim="fade-up" data-delay="100">Let&apos;s build the<br />future <em>together</em></h2>
        <p className="section-body" data-anim="fade-up" data-delay="200">Whether you&apos;re looking to partner, invest, or explore what PHEXARA can build for your organization — we want to hear from you.</p>
        <div className="cta-buttons" data-anim="fade-up" data-delay="300">
          <Link href="/contact" className="btn btn-filled"><span>Contact Us</span></Link>
          <Link href="/solutions" className="btn"><span>Explore Solutions</span></Link>
        </div>
      </section>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex; flex-direction: column;
          justify-content: flex-end;
          padding: calc(var(--nav-height) + 4rem) 5% 6rem;
          position: relative; overflow: hidden;
          background: #fff;
        }
        :global(#neural-canvas) {
          position: absolute; inset: 0; width: 100%; height: 100%;
          pointer-events: none; z-index: 0;
        }
        .hero-content { position: relative; z-index: 1; max-width: 900px; }
        .hero-eyebrow {
          font-size: 10.5px; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--gray-400);
          margin-bottom: 2rem; display: flex; align-items: center; gap: 1rem;
        }
        .hero-eyebrow::before {
          content: ''; display: inline-block; width: 32px; height: 1px;
          background: var(--gray-300);
        }
        .hero-h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(4rem, 9vw, 9.5rem);
          font-weight: 700; line-height: 0.93;
          letter-spacing: -0.035em; color: var(--black);
          margin-bottom: 3rem;
        }
        .hero-h1 :global(.line) { display: block; overflow: hidden; }
        .hero-h1 :global(.line span) {
          display: block;
          transform: translateY(100%);
          animation: heroLineIn 0.9s cubic-bezier(0.77,0,0.175,1) forwards;
        }
        .hero-h1 :global(.line:nth-child(1) span) { animation-delay: 1.3s; }
        .hero-h1 :global(.line:nth-child(2) span) { animation-delay: 1.45s; }
        .hero-h1 :global(.line:nth-child(3) span) { animation-delay: 1.6s; }
        .hero-h1 :global(.italic-word) { font-style: italic; font-weight: 300; color: var(--gray-400); }
        @keyframes heroLineIn { to { transform: translateY(0); } }
        .hero-sub {
          font-size: 16px; color: var(--gray-500); max-width: 520px;
          line-height: 1.8; font-weight: 300; margin-bottom: 3rem;
          opacity: 0; animation: fadeInUp 0.8s ease 2s forwards;
        }
        .hero-actions {
          display: flex; gap: 1rem; flex-wrap: wrap;
          opacity: 0; animation: fadeInUp 0.8s ease 2.2s forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-scroll-hint {
          position: absolute; bottom: 3rem; right: 5%; z-index: 1;
          display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
          opacity: 0; animation: fadeInUp 0.8s ease 2.5s forwards;
        }
        .scroll-line {
          width: 1px; height: 60px; background: #e0e0e0; position: relative; overflow: hidden;
        }
        .scroll-line::after {
          content: ''; position: absolute; top: -100%; left: 0;
          width: 100%; height: 100%; background: var(--black);
          animation: scrollDown 1.5s ease-in-out infinite 2.5s;
        }
        @keyframes scrollDown {
          0% { top: -100%; } 100% { top: 100%; }
        }
        .scroll-label {
          font-size: 9px; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--gray-400);
          writing-mode: vertical-rl;
        }

        .metrics-bar {
          background: var(--black); padding: 4rem 5%;
          display: grid; grid-template-columns: repeat(6, 1fr);
          gap: 0; border-top: 1px solid #1e1e1e;
        }
        .metric-cell {
          padding: 0 2rem; border-right: 1px solid #1e1e1e;
          text-align: center;
        }
        .metric-cell:first-child { padding-left: 0; }
        .metric-cell:last-child { border-right: none; padding-right: 0; }
        .metric-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 3rem; font-weight: 700; line-height: 1;
          color: var(--white); display: block; margin-bottom: 0.5rem;
        }
        .metric-label { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #3a3a3a; }

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
          width: 34px; height: 34px; border: 1px solid #e8e8e8;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; flex-shrink: 0; transition: border-color var(--transition);
        }
        .cap-item:hover .cap-icon { border-color: var(--black); }

        .sols-section { padding: 9rem 5%; background: var(--gray-50); }
        .sols-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 4rem; flex-wrap: wrap; gap: 2rem; }
        .sols-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 0; border-left: 1px solid #e0e0e0; border-top: 1px solid #e0e0e0;
        }
        .sol-card {
          padding: 2.5rem 2rem; border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0; background: var(--white);
          transition: background var(--transition); position: relative;
          overflow: hidden;
        }
        .sol-card::before {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 100%; height: 3px; background: var(--black);
          transform: scaleX(0); transform-origin: left;
          transition: transform var(--transition);
        }
        .sol-card:hover::before { transform: scaleX(1); }
        .sol-card:hover { background: var(--gray-50); }
        .sol-num { font-size: 10px; color: #ccc; letter-spacing: 0.1em; margin-bottom: 1.5rem; }
        .sol-symbol {
          font-size: 28px; margin-bottom: 1.5rem; color: var(--black); line-height: 1;
        }
        .sol-title {
          font-family: 'Space Grotesk', sans-serif; font-size: 1rem;
          font-weight: 600; margin-bottom: 0.75rem; color: var(--black);
          letter-spacing: -0.01em;
        }
        .sol-desc { font-size: 12.5px; color: var(--gray-400); line-height: 1.65; }
        .sol-arrow {
          position: absolute; bottom: 1.75rem; right: 1.75rem;
          font-size: 1.2rem; color: #d0d0d0;
          transition: all var(--transition); transform: rotate(-45deg);
        }
        .sol-card:hover .sol-arrow { color: var(--black); transform: rotate(0deg); }

        .projects-section {
          padding: 9rem 5%; background: var(--black); position: relative; overflow: hidden;
        }
        .projects-section :global(.section-tag) { color: #3a3a3a; }
        .projects-section :global(.section-title) { color: var(--white); }
        .projects-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 4rem; flex-wrap: wrap; gap: 2rem; }
        .projects-sub { font-size: 16px; color: #4a4a4a; max-width: 380px; line-height: 1.75; font-weight: 300; }
        .project-list { border-top: 1px solid #1a1a1a; }
        :global(.project-row) {
          display: grid; grid-template-columns: 80px 1fr 180px 40px;
          align-items: center; gap: 2rem; padding: 2.5rem 0;
          border-bottom: 1px solid #1a1a1a;
          transition: background var(--transition);
          cursor: pointer; text-decoration: none;
        }
        :global(.project-row:hover) { background: rgba(255,255,255,0.02); }
        :global(.project-row:hover .proj-arrow) { opacity: 1; transform: translate(4px,-4px); }
        .proj-idx {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: #2a2a2a; letter-spacing: 0.08em;
        }
        .proj-name {
          font-family: 'Space Grotesk', sans-serif; font-size: 1.4rem;
          font-weight: 600; color: var(--white); letter-spacing: -0.01em; margin-bottom: 4px;
        }
        .proj-sub { font-size: 12.5px; color: #4a4a4a; }
        .proj-status {
          font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase;
          padding: 6px 16px; border: 1px solid #1e1e1e; color: #3a3a3a;
          text-align: center; white-space: nowrap;
        }
        .proj-status.dev { border-color: #2a2a2a; color: #4a4a4a; }
        .proj-status.soon { border-color: #1e1e1e; color: #2e2e2e; }
        .proj-arrow { font-size: 1.3rem; color: #2a2a2a; opacity: 0; transition: all var(--transition); }

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
        @media (max-width: 768px) {
          .intro-inner { grid-template-columns: 1fr; gap: 3rem; }
          .intro-right { padding-top: 0; }
          .metrics-bar { grid-template-columns: repeat(2, 1fr); }
          .sols-grid { grid-template-columns: 1fr; }
          :global(.project-row) { grid-template-columns: 50px 1fr; }
          .proj-status, .proj-arrow { display: none; }
        }
      `}</style>
    </>
  );
}