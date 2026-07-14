"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const PROJECTS = [
  {
    num: "PROJECT 001",
    status: "dev",
    statusLabel: "In Development",
    cat: "dev",
    catLabel: "Cybersecurity · Artificial Intelligence",
    title: "VEEP",
    desc: "An autonomous threat detection and intelligent response infrastructure that combines AI-powered analysis with real-time security orchestration. Designed to reduce mean time to detection and automate incident response at scale.",
    tags: [" HCI & Adaptive Learning."],
    progress: 30,
    launch: "Q3 2026",
  },
  {
    num: "PROJECT 002",
    status: "dev",
    statusLabel: "In Development",
    cat: "dev",
    catLabel: "Applied AI & Vertical Saas.",
    title: "HAGO STAYS",
    desc: "A real-time simulation and predictive maintenance platform for industrial assets. The engine creates living virtual models of physical systems that anticipate failures, optimise performance, and guide operational decisions.",
    tags: ["Real-Time Simulation", "Predictive ML", "IoT Integration", "3D Visualisation", "Anomaly Detection"],
    progress: 15,
    launch: "Q1 2027",
  },
  // {
  //   num: "PROJECT 003",
  //   status: "soon",
  //   statusLabel: "Coming Soon",
  //   cat: "soon",
  //   catLabel: "Commerce · AI · Analytics",
  //   title: "Smart Commerce Suite",
  //   desc: "An end-to-end predictive retail intelligence and fraud prevention platform. Built for brands and marketplaces that need to understand customer intent, automate engagement, and protect transactions — all in one unified platform.",
  //   tags: ["Predictive Analytics", "Fraud Prevention", "Personalisation", "Customer Intelligence"],
  //   progress: 12,
  //   launch: "Q1 2026",
  // },
  // {
  //   num: "PROJECT 004",
  //   status: "soon",
  //   statusLabel: "Coming Soon",
  //   cat: "soon",
  //   catLabel: "AI Governance · Compliance · Auditing",
  //   title: "AI Governance Framework",
  //   desc: "An enterprise-grade responsible AI compliance and auditing platform. Designed to help organisations manage AI risk, demonstrate regulatory compliance, and maintain ongoing assurance as AI systems evolve.",
  //   tags: ["Risk Classification", "Audit Trail", "EU AI Act", "Explainability", "Bias Detection"],
  //   progress: 18,
  //   launch: "Q2 2026",
  // },
  // {
  //   num: "PROJECT 005",
  //   status: "",
  //   statusLabel: "Planned",
  //   cat: "planned",
  //   catLabel: "Edge Computing · IoT · Distributed AI",
  //   title: "Edge Intelligence Network",
  //   desc: "A distributed AI inference and IoT orchestration platform designed to bring intelligent decision-making to environments where latency and connectivity constraints make cloud-only approaches impractical. From smart factories to connected cities.",
  //   tags: ["Distributed Inference", "IoT Orchestration", "Real-Time Decisions", "Federated Learning", "Edge-Cloud Sync", "Smart Cities"],
  //   progress: 5,
  //   launch: "Q3 2026",
  //   wide: true,
  // },
];

const FILTERS = [
  { cat: "all", label: "All Projects" },
  { cat: "dev", label: "In Development" },
  { cat: "soon", label: "Coming Soon" },
  { cat: "planned", label: "Planned" },
];

function ProgressBar({ width }) {
  const ref = useRef(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFilled(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pc-bar" ref={ref}>
      <div className="pc-bar-fill" style={{ width: filled ? `${width}%` : 0 }}></div>
    </div>
  );
}

export default function ProjectsContent() {
  const [filter, setFilter] = useState("all");
  const [notifyStatus, setNotifyStatus] = useState("idle");

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    setNotifyStatus("sending");
    setTimeout(() => {
      setNotifyStatus("sent");
      setTimeout(() => {
        setNotifyStatus("idle");
        e.target.reset();
      }, 3000);
    }, 1200);
  };

  return (
    <>
      <section className="page-hero dark-section">
        <div className="grid-bg grid-bg-dark" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="section-tag" style={{ color: "#3a3a3a" }} data-anim="fade-up">Projects</p>
          <h1 data-anim="fade-up" data-delay="100">Five systems.<br />Building <em>now.</em></h1>
          <p className="page-hero-sub" data-anim="fade-up" data-delay="200">PHEXARA is in active development across five transformative projects. Each one is designed to solve a real problem at the intersection of intelligence, security, and infrastructure.</p>
        </div>
      </section>

      <div className="filter-bar">
        <span className="filter-label">Filter:</span>
        {FILTERS.map((f) => (
          <button
            key={f.cat}
            className={`filter-btn${filter === f.cat ? " active" : ""}`}
            onClick={() => setFilter(f.cat)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <section className="projects-main">
        <div className="projects-grid" id="projects-grid">
          {PROJECTS.map((p) => (
            <div
              key={p.num}
              className="project-card"
              data-anim="fade-up"
              data-cat={p.cat}
              style={{
                display: filter === "all" || filter === p.cat ? "" : "none",
                ...(p.wide ? { gridColumn: "1/-1" } : {}),
              }}
            >
              <div className="pc-header">
                <span className="pc-num">{p.num}</span>
                <span className={`pc-status${p.status ? ` ${p.status}` : ""}`}>
                  <span className={`status-dot${p.status === "dev" ? " active" : p.status === "soon" ? " upcoming" : ""}`}></span>
                  {p.statusLabel}
                </span>
              </div>
              <div className="pc-cat">{p.catLabel}</div>
              <h2 className="pc-title" style={p.wide ? { maxWidth: "500px" } : undefined}>{p.title}</h2>
              <p className="pc-desc" style={p.wide ? { maxWidth: "680px" } : undefined}>{p.desc}</p>
              <div className="pc-capabilities">
                {p.tags.map((tag) => (
                  <span className="badge" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="pc-progress" style={p.wide ? { maxWidth: "480px" } : undefined}>
                <div className="pc-progress-label">
                  <span>Development Progress</span>
                  <span>{p.progress}%</span>
                </div>
                <ProgressBar width={p.progress} />
              </div>
              <div className="pc-timeline">
                <span className="pc-timeline-label">Target Launch</span>
                <span className="pc-timeline-val">{p.launch}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISION / ROADMAP */}
      <section className="vision-section">
        <div className="vision-inner">
          <div data-anim="fade-left">
            <span className="section-tag">Roadmap</span>
            <h2 className="section-title">Building toward<br />a <em>larger vision</em></h2>
            <p className="section-body">Each project is not an isolated product — it&apos;s a component of a unified platform ecosystem. As PHEXARA grows, these systems will integrate to form a comprehensive intelligent digital infrastructure stack.</p>
            <div style={{ marginTop: "2.5rem" }}>
              <Link href="/contact" className="btn btn-filled"><span>Discuss Partnerships</span></Link>
            </div>
          </div>
          <div data-anim="fade-right">
            <div className="vision-timeline">
              <div className="vt-item">
                <div className="vt-year">2024-2025</div>
                <div>
                  <div className="vt-content-label">Foundation</div>
                  <div className="vt-content-text">Company formation, team building, core technology stack selection, initial R&amp;D, and security framework design.</div>
                </div>
              </div>
              <div className="vt-item">
                <div className="vt-year"> 2026 Q1/Q2</div>
                <div>
                  <div className="vt-content-label">Launch Phase</div>
                  <div className="vt-content-text"> HCI & Adaptive Learning solution entering production. Documentation and test trials being implemented.</div>
                </div>
              </div>
              <div className="vt-item">
                <div className="vt-year">2026 Q3</div>
                <div>
                  <div className="vt-content-label">Expansion Phase</div>
                  <div className="vt-content-text">MVP launched. Pilot phased rolled out to target audience.</div>
                </div>
              </div>
              <div className="vt-item" >
                <div className="vt-year">2027 Q1</div>
                <div>
                  <div className="vt-content-label">Scale Phase</div>
                  <div className="vt-content-text">Expansion begins. Core tiers of the flagship solution enters expansion to other market demand areas. Applied AI & Vertical SaaS solution commences production. </div>
                </div>
              </div>
                 <div className="vt-item" style={{ borderBottom: "none" }}>
                <div className="vt-year">2027+</div>
                <div>
                  <div className="vt-content-label">Global Market</div>
                  <div className="vt-content-text">Platform integration and unified ecosystem launch. Government and enterprise contracts. International market entry begins. Global operations from multiple regions. </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTIFY */}
      <section className="notify-section dark-section">
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="section-tag" style={{ color: "#3a3a3a" }} data-anim="fade-up">Stay Updated</span>
          <h2 className="section-title" data-anim="fade-up" data-delay="100">Be first to <em>know</em></h2>
          <p className="section-body" data-anim="fade-up" data-delay="200">Register to receive launch announcements, project updates, and early access invitations as each platform goes live.</p>
          <form className="notify-form" data-anim="fade-up" data-delay="300" onSubmit={handleNotifySubmit}>
            <input type="email" className="notify-input" placeholder="your@email.com" required disabled={notifyStatus !== "idle"} />
            <button className="notify-btn" type="submit" disabled={notifyStatus !== "idle"} style={{ opacity: notifyStatus === "sent" ? 0.6 : 1 }}>
              {notifyStatus === "sending" ? "Sending..." : notifyStatus === "sent" ? "Notified ✓" : "Notify Me"}
            </button>
          </form>
        </div>
      </section>

      <style jsx>{`
        .page-hero {
          min-height: 60vh; display: flex; flex-direction: column; justify-content: flex-end;
          padding: calc(var(--nav-height) + 5rem) 5% 5rem;
          background: var(--black); position: relative; overflow: hidden;
        }
        .page-hero h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(3rem, 7vw, 7rem); font-weight: 700;
          line-height: 0.93; letter-spacing: -0.03em; color: var(--white); margin-bottom: 2rem;
        }
        .page-hero h1 :global(em) { font-style: italic; font-weight: 300; color: #3a3a3a; }
        .page-hero-sub { font-size: 16px; color: #4a4a4a; max-width: 520px; line-height: 1.8; font-weight: 300; }

        .filter-bar { padding: 2rem 5%; border-bottom: 1px solid #e8e8e8; display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; }
        .filter-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gray-400); margin-right: 0.5rem; }
        .filter-btn {
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 7px 18px; border: 1px solid #e0e0e0; background: transparent;
          color: var(--gray-500); cursor: pointer; transition: all var(--transition); font-family: inherit;
        }
        .filter-btn.active, .filter-btn:hover { border-color: var(--black); background: var(--black); color: var(--white); }

        .projects-main { padding: 6rem 5%; background: var(--white); }
        .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; background: #e8e8e8; }
        .project-card {
          background: var(--white); padding: 3.5rem 3rem;
          position: relative; overflow: hidden;
          transition: background var(--transition);
        }
        .project-card::before {
          content: ''; position: absolute; top: 0; left: 0;
          width: 3px; height: 0; background: var(--black);
          transition: height 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .project-card:hover::before { height: 100%; }
        .project-card:hover { background: var(--gray-50); }
        .pc-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; }
        .pc-num { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #bbb; letter-spacing: 0.1em; }
        .pc-status {
          font-size: 9.5px; letter-spacing: 0.15em; text-transform: uppercase;
          padding: 5px 14px; border: 1px solid #e0e0e0; color: var(--gray-400);
          display: flex; align-items: center; gap: 6px;
        }
        .pc-status.dev { border-color: #d0d0d0; }
        .pc-status.soon { color: var(--gray-300); border-color: #ebebeb; }
        .pc-cat { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gray-400); margin-bottom: 0.75rem; }
        .pc-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.7rem; font-weight: 700; letter-spacing: -0.02em; color: var(--black); margin-bottom: 1rem; line-height: 1.1; }
        .pc-desc { font-size: 14px; color: var(--gray-500); line-height: 1.75; margin-bottom: 2rem; font-weight: 300; }
        .pc-capabilities { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 2rem; }
        .pc-progress { margin-top: 2.5rem; }
        .pc-progress-label { display: flex; justify-content: space-between; margin-bottom: 8px; }
        .pc-progress-label span { font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gray-400); }
        .pc-bar { height: 1px; background: #e8e8e8; position: relative; }
        .pc-bar :global(.pc-bar-fill) { height: 100%; background: var(--black); transition: width 1.5s cubic-bezier(0.4,0,0.2,1); }
        .pc-timeline { margin-top: 2rem; display: flex; align-items: center; gap: 0.75rem; }
        .pc-timeline-label { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gray-300); }
        .pc-timeline-val { font-size: 10px; color: var(--gray-600); font-family: 'JetBrains Mono', monospace; }

        .vision-section { padding: 8rem 5%; background: var(--gray-50); border-top: 1px solid #e8e8e8; }
        .vision-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 8rem; align-items: start; }
        .vision-timeline { margin-top: 3rem; }
        .vt-item { display: grid; grid-template-columns: 80px 1fr; gap: 2rem; padding: 2rem 0; border-bottom: 1px solid #e8e8e8; }
        .vt-year { font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 700; color: var(--black); }
        .vt-content-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gray-400); margin-bottom: 6px; }
        .vt-content-text { font-size: 14px; color: var(--gray-600); line-height: 1.65; }

        .notify-section {
          padding: 8rem 5%; background: var(--black); text-align: center; position: relative; overflow: hidden;
        }
        .notify-section :global(.section-title) { color: var(--white); margin: 0 auto 1.5rem; max-width: 600px; }
        .notify-section :global(.section-body) { color: #4a4a4a; margin: 0 auto 3rem; text-align: center; }
        .notify-form { display: flex; gap: 0; max-width: 480px; margin: 0 auto; }
        .notify-input {
          flex: 1; background: transparent; border: 1px solid #1e1e1e;
          color: var(--white); font-family: inherit; font-size: 14px; padding: 14px 20px;
          outline: none; transition: border-color var(--transition);
        }
        .notify-input:focus { border-color: #4a4a4a; }
        .notify-input::placeholder { color: #2a2a2a; }
        .notify-btn {
          background: var(--white); color: var(--black); border: none;
          font-family: inherit; font-size: 12px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase; padding: 14px 28px; cursor: pointer;
          transition: opacity var(--transition); white-space: nowrap;
        }
        .notify-btn:hover { opacity: 0.8; }

        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; gap: 1px; }
          .vision-inner { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>
    </>
  );
}
