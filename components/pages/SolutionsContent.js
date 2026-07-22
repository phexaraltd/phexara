"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SOL_NAV_LINKS = [
  { id: "software", label: "Software Development" },
  { id: "ai-gov", label: "AI Governance" },
   { id: "security", label: "Cloud Security" },
  { id: "Applied", label: "Applied AI & Vertical SaaS" },
  { id: "HCI", label: "HCI & Adaptive Learning" },
  { id: "RAI", label: "RAI (Responsible AI) & SbD Systems." },
];

export default function SolutionsContent() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".sol-section");
    const onScroll = () => {
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
      });
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>

<section className="page-hero">
  {/* <div className="grid-bg" style={{position: "absolute", inset: "0", pointerEvents: "none"}}></div> */}
  {/* eslint-disable-next-line @next/next/no-img-element */}
  <img src="/node.png" alt="" aria-hidden="true" className="hex-cluster" />
  <div style={{position: "relative", zIndex: "1"}}>
    <p className="section-tag" data-anim="fade-up">Solutions</p>
    <h1 data-anim="fade-up" data-delay="100">Six disciplines.<br />One <em>unified</em> vision.</h1>
    <p className="page-hero-sub" data-anim="fade-up" data-delay="200">PHEXARA delivers across the full stack of intelligent digital infrastructure — from AI systems to cybersecurity, digital twins to edge computing.</p>
  </div>
</section>

  <nav className="sol-nav">
    <div className="sol-nav-inner">
      {SOL_NAV_LINKS.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          className={`sol-nav-link${activeSection === l.id ? " active" : ""}`}
        >
          {l.label}
        </a>
      ))}
    </div>
  </nav>

  {/* 01 SOFTWARE */}
  <section className="sol-section" id="software">
    <div className="sol-inner">
      <div className="sol-meta" data-anim="fade-left">
        <div className="sol-number">01 / 06</div>
        <h2 className="sol-title-lg">Software Development</h2>
        <p className="sol-body">We build scalable, secure digital products designed for enterprise scale. From cloud-native platforms to intelligent automation systems, every line of code is engineered with performance, security, and longevity at its core.</p>
        <p className="sol-body">Our engineering teams work with modern stacks and apply security-by-design principles across the entire development lifecycle — from architecture to deployment.</p>
        <Link href="/contact" className="sol-cta-link">Discuss a project <span>→</span></Link>
      </div>
      <div data-anim="fade-right">
        <ul className="services-list">
          <li>Enterprise Software Platforms</li>
          <li>SaaS Product Development</li>
          <li>Web & Progressive Web Applications</li>
          <li>Mobile Applications (iOS & Android)</li>
          <li>RESTful & GraphQL APIs</li>
          <li>Platform Engineering & DevOps</li>
          <li>Intelligent Process Automation</li>
          <li>Cloud-Native Architecture</li>
          <li>Microservices & Event-Driven Systems</li>
          <li>Legacy System Modernisation</li>
        </ul>
        <div className="tech-tags">
          <span className="badge">Node.js</span><span className="badge">Python</span><span className="badge">React</span>
          <span className="badge">TypeScript</span><span className="badge">PostgreSQL</span><span className="badge">AWS</span>
          <span className="badge">Docker</span><span className="badge">Kubernetes</span><span className="badge">CI/CD</span>
        </div>
      </div>
    </div>
  </section>

  {/* 02 AI GOV */}
  <section className="sol-section" id="ai-gov">
    <div className="sol-inner reverse">
      <div className="sol-meta" data-anim="fade-right">
        <div className="sol-number">02 / 06</div>
        <h2 className="sol-title-lg">AI Governance</h2>
        <p className="sol-body">As AI systems become embedded in critical decisions, the need for robust governance has never been greater. We help organizations deploy AI responsibly — with full auditability, fairness mechanisms, and compliance frameworks.</p>
        <p className="sol-body">Our AI governance practice is built to align with international standards including the EU AI Act, NIST AI RMF, and combined with deep technical AI expertise.</p>
        <Link href="/contact" className="sol-cta-link">Discuss AI governance <span>→</span></Link>
      </div>
      <div data-anim="fade-left">
        <ul className="services-list">
          <li>AI Risk Assessment & Classification</li>
          <li>Responsible AI Frameworks</li>
          <li>AI Compliance Auditing</li>
          <li>Model Explainability & Interpretability</li>
          <li>Bias Detection & Mitigation</li>
          <li>AI Assurance Testing</li>
          <li>EU AI Act Readiness</li>
          <li>AI Incident Response Planning</li>
          <li>Governance Policy Development</li>
          <li>Human Oversight Mechanisms</li>
        </ul>
        <div className="tech-tags">
          <span className="badge">EU AI Act</span><span className="badge">NIST AI RMF</span>
          <span className="badge">SHAP</span><span className="badge">LIME</span><span className="badge">Fairlearn</span>
        </div>
      </div>
    </div>
  </section>
  
  {/* 03 DIGITAL TWINS */}
<section className="sol-section" id="security">
    <div className="sol-inner">
      <div className="sol-meta" data-anim="fade-left">
        <div className="sol-number">03 / 06</div>
        <h2 className="sol-title-lg">Cloud Security</h2>
        <p className="sol-body">Cloud security is the discipline of protecting data, workloads, and infrastructure as organisations move from on-premise systems to elastic, provider-managed environments. We design security architectures that scale with your cloud footprint, not against it.</p>
        <p className="sol-body">From identity and access control to data-level protection and compliance monitoring, our cloud security practice closes the gaps that emerge as environments grow across providers, teams, and regions.</p>
        <Link href="/contact" className="sol-cta-link">Explore Cloud Security <span>→</span></Link>
      </div>
      <div data-anim="fade-right">
        <ul className="services-list">
          <li>Cloud Architecture & Migration Security</li>
          <li>Identity & Access Management (IAM)</li>
          <li>Column & Row-Level Data Protection</li>
          <li>VPC & Network Perimeter Controls</li>
          <li>Multi-Cloud Security Posture Management</li>
          <li>Compliance & Audit Readiness</li>
          <li>Data Encryption & Key Management</li>
          <li>Threat Detection & Incident Response</li>
          <li>Zero Trust Architecture</li>
          <li>Cloud Access Security Brokering (CASB)</li>
        </ul>
        <div className="tech-tags">
          <span className="badge">AWS</span><span className="badge">Azure</span>
          <span className="badge">Google Cloud</span><span className="badge">IAM</span><span className="badge">Zero Trust</span>
        </div>
      </div>
    </div>
  </section>

  {/* 04 CLOUD SECURITY */}
<section className="sol-section" id="Applied">
    <div className="sol-inner reverse">
      <div className="sol-meta" data-anim="fade-right">
        <div className="sol-number">04 / 06</div>
        <h2 className="sol-title-lg">Applied AI & Vertical SaaS</h2>
        <p className="sol-body">Applied AI & Vertical SaaS is about building AI-native software products purpose-fit for a single industry, not generic tools stretched to cover everyone. We design and build platforms where the AI isn't a bolt-on feature — it's the core of how the product works.</p>
        <p className="sol-body">From first prototype to a scaled, multi-tenant platform, we help organisations turn domain expertise into software that ships, sells, and holds up under real usage.</p>
        <Link href="/contact" className="sol-cta-link">Get a Vertical SaaS <span>→</span></Link>
      </div>
      <div data-anim="fade-left">
        <ul className="services-list"> 
          <li>Vertical SaaS Platform Development</li>
          <li>Custom AI Application Development</li>
          <li>Industry-Specific Model Fine-Tuning</li>
          <li>AI-Native Product Architecture</li>
          <li>Domain-Specific LLM Integration</li>
          <li>Multi-Tenant SaaS Architecture</li>
          <li>Workflow Automation & Orchestration</li>
          <li>API-First Platform Design</li>
          <li>Usage-Based Billing & Metering</li>
          <li>Rapid MVP to Scale Development</li>
        </ul>
        <div className="tech-tags">
         <span className="badge">LangChain</span><span className="badge">OpenAI API</span>
          <span className="badge">Vector DB</span><span className="badge">Multi-Tenant</span><span className="badge">Stripe Billing</span>
        </div>
      </div>
    </div>
  </section>

  {/* 05 SMART COMMERCE */}
  <section className="sol-section" id="HCI">
    <div className="sol-inner">
      <div className="sol-meta" data-anim="fade-left">
        <div className="sol-number">05 / 06</div>
        <h2 className="sol-title-lg">HCI & Adaptive Learning</h2>
        <p className="sol-body">Human-Computer Interaction & Adaptive Learning is about building interfaces that adjust to the person using them, rather than asking people to adjust to the system. We design experiences that learn from behaviour in real time to become more usable, accessible, and effective with every interaction.</p>
        <p className="sol-body">From enterprise software to educational platforms, our HCI practice combines human-centred design research with adaptive systems that personalise the experience for every individual user.</p>
        <Link href="/contact" className="sol-cta-link">Explore HCI & Adaptive Learning <span>→</span></Link>
      </div>
      <div data-anim="fade-right">
        <ul className="services-list">
          <li>Adaptive User Interface Design</li>
          <li>Human-Centred Design Research</li>
          <li>Accessibility & Inclusive Design (WCAG)</li>
          <li>Personalised Learning Systems</li>
          <li>Behavioural UX Analytics</li>
          <li>Cognitive Load Optimisation</li>
          <li>Adaptive Learning Platforms (EdTech)</li>
          <li>Voice & Multimodal Interfaces</li>
          <li>Usability Testing & Research</li>
          <li>User Behaviour Modelling</li>
        </ul>
        <div className="tech-tags">
          <span className="badge">WCAG 2.2</span><span className="badge">Figma</span>
          <span className="badge">Eye-Tracking</span><span className="badge">Reinforcement Learning</span><span className="badge">A/B Testing</span>
        </div>
      </div>
    </div>
  </section>
  {/* 06 EDGE AI */}
 <section className="sol-section" id="RAI">
    <div className="sol-inner reverse">
      <div className="sol-meta" data-anim="fade-right">
        <div className="sol-number">06 / 06</div>
        <h2 className="sol-title-lg">RAI (Responsible AI) & SbD Systems.</h2>
        <p className="sol-body">Responsible AI is the practice of building systems that are fair, transparent, and accountable by design — not audited for these qualities after deployment. We embed governance, oversight, and safety controls directly into the architecture from day one.</p>
        <p className="sol-body">From bias auditing to regulatory alignment, our Responsible AI and Safety-by-Design practice helps organisations deploy AI systems that hold up to scrutiny — from regulators, from users, and from their own teams.</p>
        <Link href="/contact" className="sol-cta-link">Discuss SbD Systems.<span>→</span></Link>
      </div>
      <div data-anim="fade-left">
        <ul className="services-list">
          <li>AI Governance Framework Design</li>
          <li>Bias & Fairness Auditing</li>
          <li>Model Explainability & Transparency</li>
          <li>AI Risk & Impact Assessment</li>
          <li>Safety-by-Design Architecture</li>
          <li>Human-in-the-Loop Oversight Systems</li>
          <li>Regulatory Compliance (EU AI Act, NIST AI RMF)</li>
          <li>Adversarial Robustness Testing</li>
          <li>AI Incident Response Planning</li>
          <li>Ethical AI Review & Audit Boards</li>
        </ul>
        <div className="tech-tags">
          <span className="badge">NIST AI RMF</span><span className="badge">EU AI Act</span>
          <span className="badge">SHAP/LIME</span><span className="badge">Model Cards</span><span className="badge">Fairlearn</span>
        </div>
      </div>
    </div>
  </section>

  
<style jsx>{`
.page-hero {
  min-height: 55vh; display: flex; flex-direction: column; justify-content: flex-end;
  padding: calc(var(--nav-height) + 5rem) 5% 5rem;
  background: var(--white); position: relative; overflow: hidden;
  border-bottom: 1px solid #e8e8e8;
}
.page-hero h1 {
  // font-family: 'Space Grotesk', sans-serif;
  // font-size: clamp(2.25rem, 5vw, 4.85rem);
  // line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--black);
  margin-bottom: 2rem;
  max-width: 680px;
  position: relative;
  z-index: 1;
    font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3rem, 7vw, 7rem); font-weight: 700;
  line-height: 0.95; letter-spacing: -0.03em; color: var(--black);
}
.page-hero h1 em { font-style: italic; font-weight: 300; color: #C9A07E; }
.page-hero-sub {
  font-size: 16px;
  color: var(--gray-500);
  max-width: 480px;
  line-height: 1.8;
  font-weight: 300;
  position: relative;
  z-index: 1;
}
.page-hero .section-tag { color: #C9A07E; position: relative; z-index: 1; }

.hex-cluster {
  position: absolute;
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
  width: 34%;
  max-width: 420px;
  min-width: 240px;
  height: auto;
  z-index: 0;
  pointer-events: none;
}

@media (max-width: 900px) {
  .hex-cluster {
    display: block;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    max-width: none;
    min-width: 0;
    transform: none;
    opacity: 0.14;
    object-fit: cover;
    object-position: center;
  }
}
  @media (max-width: 768px) {
  .hex-cluster {
    top: 50%;
    right: -5%;
    transform: translateY(-50%);
    width: 55%;
    max-width: none;
    min-width: 0;
    opacity: 0.1;
  }
}

@media (max-width: 480px) {
  .hex-cluster {
    width: 70%;
    right: -15%;
    opacity: 0.08;
  }
}
    /* SOL NAV */
   .sol-nav { padding: 2.5rem 5%; border-bottom: none; background: #EDE9E1; }

.sol-nav-inner { display: flex; gap: 0.9rem; flex-wrap: wrap; }

.sol-nav-link {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
  color: #4a4a4a;
  padding: 10px 20px;
  border: 1px solid #d3cec2;
  border-radius: 999px;
  background: transparent;
  transition: all var(--transition);
}

.sol-nav-link:hover,
.sol-nav-link.active {
  color: var(--black);
  border-color: #b3ab98;
  background: #fff;
}
    /* SOLUTIONS DETAIL */
  .sol-section { padding: 8rem 5%; border-bottom: 1px solid #eee; }
.sol-section:nth-child(even) { background: var(--white); }

.sol-inner { display: grid; grid-template-columns: 1fr 1.4fr; gap: 8rem; align-items: start; }
.sol-inner.reverse { direction: rtl; }
.sol-inner.reverse > * { direction: ltr; }
.sol-meta { position: sticky; top: calc(var(--nav-height) + 3rem); }

.sol-number { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #bbb; letter-spacing: 0.1em; margin-bottom: 1.5rem; }

.sol-title-lg {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 700; letter-spacing: -0.02em;
  color: #B9825A;
  margin-bottom: 1.5rem; line-height: 1.1;
}

.sol-body { font-size: 15px; color: var(--gray-500); line-height: 1.85; font-weight: 300; margin-bottom: 2rem; }

:global(.sol-cta-link) {
  font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
  color: #111;
  display: inline-flex; align-items: center; gap: 0.5rem;
  border: 1.5px solid #7C1FB4;
  border-radius: 999px;
  padding: 0.85rem 1.7rem;
  background: #fff;
  transition: background 0.25s ease, border-color 0.25s ease;
}
:global(.sol-cta-link:hover) {
  background: #f9f2fc;
  border-color: #6a1a99;
  gap: 0.65rem;
}

.services-list { list-style: none; }
.services-list li {
  padding: 1.1rem 1.5rem; border: 1px solid #e3e3e3; border-radius: 999px; margin-bottom: 0.75rem;
  display: flex; align-items: center; gap: 1rem; font-size: 13.5px; color: var(--gray-600);
  background: var(--white); transition: all var(--transition);
}
.services-list li:hover { border-color: #B9825A; color: var(--black); }
.services-list li::before { content: '—'; color: #bbb; transition: color var(--transition); flex-shrink: 0; }
.services-list li:hover::before { color: #B9825A; }

.tech-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 2rem; }
.tech-tags .badge {
  font-size: 10px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
  color: #C9A07E; background: transparent; border: 1px solid #C9A07E;
  border-radius: 999px; padding: 6px 14px;
}

@media (max-width: 1024px) {
  .sol-inner { grid-template-columns: 1fr; gap: 3rem; }
  .sol-inner.reverse { direction: ltr; }
  .sol-meta { position: static; }
}
`}</style>
    </>
  );
}