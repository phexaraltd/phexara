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
  <div className="grid-bg" style={{position: "absolute", inset: "0", pointerEvents: "none"}}></div>
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
        <p className="sol-body">Our AI governance practice is built on international standards including the EU AI Act, NIST AI RMF, and ISO/IEC 42001, combined with deep technical AI expertise.</p>
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
          <span className="badge">EU AI Act</span><span className="badge">ISO 42001</span><span className="badge">NIST AI RMF</span>
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
        <p className="sol-body">Digital twins are virtual models of physical systems that enable real-time monitoring, simulation, and prediction. We build twin ecosystems that transform how organizations manage assets, infrastructure, and operations.</p>
        <p className="sol-body">From manufacturing plants to smart buildings, our digital twin platforms close the loop between the physical and digital world.</p>
        <Link href="/contact" className="sol-cta-link">Explore Cloud Security <span>→</span></Link>
      </div>
      <div data-anim="fade-right">
        <ul className="services-list">
          <li>Industrial Digital Twin Development</li>
          <li>Real-Time Asset Monitoring</li>
          <li>Predictive Maintenance Systems</li>
          <li>Simulation & Scenario Modelling</li>
          <li>Smart Infrastructure Twins</li>
          <li>Energy & Utilities Optimisation</li>
          <li>Supply Chain Digital Twins</li>
          <li>Building & Facility Management</li>
          <li>Integration with IoT Sensor Networks</li>
          <li>AI-Powered Anomaly Detection</li>
        </ul>
        <div className="tech-tags">
          <span className="badge">Unity/Unreal</span><span className="badge">Azure Digital Twins</span>
          <span className="badge">MQTT</span><span className="badge">Time Series DB</span><span className="badge">SCADA</span>
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
        <p className="sol-body">Enterprise-grade protection built into every layer of your digital stack. Our security practice combines deep offensive knowledge with robust defensive architecture — providing the full picture that organizations need to stay resilient.</p>
        <p className="sol-body">From penetration testing to zero trust architecture, we build security programs that scale with your organization.</p>
        <Link href="/contact" className="sol-cta-link">Get a Vertical SaaS <span>→</span></Link>
      </div>
      <div data-anim="fade-left">
        <ul className="services-list"> 
          <li>Cloud Security Architecture (AWS, Azure, GCP)</li>
          <li>Penetration Testing & VAPT</li>
          <li>Zero Trust Implementation</li>
          <li>DevSecOps Integration</li>
          <li>Threat Modelling & Risk Assessment</li>
          <li>Identity & Access Management</li>
          <li>Application Security Reviews</li>
          <li>SOC Setup & Managed Security</li>
          <li>Incident Response Planning</li>
          <li>Compliance & Governance (ISO 27001, GDPR)</li>
        </ul>
        <div className="tech-tags">
          <span className="badge">ISO 27001</span><span className="badge">NIST CSF</span><span className="badge">OWASP</span>
          <span className="badge">CIS Benchmarks</span><span className="badge">SIEM</span><span className="badge">EDR</span>
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
        <p className="sol-body">End-to-end infrastructure enabling brands to predict consumer behaviour, automate engagement, and secure transactions. We combine AI-powered analytics with robust commerce platforms to drive measurable business outcomes.</p>
        <p className="sol-body">Built for retailers, marketplaces, and financial service providers navigating the future of intelligent commerce.</p>
        <Link href="/contact" className="sol-cta-link">Explore HCI & Adaptive Learning <span>→</span></Link>
      </div>
      <div data-anim="fade-right">
        <ul className="services-list">
          <li>Predictive Customer Analytics</li>
          <li>Personalisation & Recommendation Engines</li>
          <li>Fraud Detection & Prevention</li>
          <li>Customer Intelligence Platforms</li>
          <li>Marketing Automation Systems</li>
          <li>Retail Intelligence Dashboards</li>
          <li>Payment Security Infrastructure</li>
          <li>Inventory & Supply Chain AI</li>
          <li>Customer Lifetime Value Modelling</li>
          <li>Omnichannel Data Unification</li>
        </ul>
        <div className="tech-tags">
          <span className="badge">ML Pipelines</span><span className="badge">Kafka</span><span className="badge">dbt</span>
          <span className="badge">Snowflake</span><span className="badge">A/B Testing</span><span className="badge">PCI DSS</span>
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
        <p className="sol-body">AI-powered connected environments that process, reason, and act at the edge — where decisions must happen in milliseconds and connectivity cannot be assumed. We build distributed intelligence systems for the physical world.</p>
        <p className="sol-body">From smart cities to industrial manufacturing, our edge AI platforms bring intelligence to the devices, environments, and systems that matter most.</p>
        <Link href="/contact" className="sol-cta-link">Discuss SbD Systems.<span>→</span></Link>
      </div>
      <div data-anim="fade-left">
        <ul className="services-list">
          <li>Edge AI Inference Platforms</li>
          <li>Industrial IoT Architecture</li>
          <li>Smart City Infrastructure</li>
          <li>Autonomous Monitoring Systems</li>
          <li>Connected Sensor Networks</li>
          <li>Real-Time Decision Pipelines</li>
          <li>Edge-to-Cloud Data Architectures</li>
          <li>Predictive Analytics at the Edge</li>
          <li>Healthcare IoT Systems</li>
          <li>Energy Grid Intelligence</li>
        </ul>
        <div className="tech-tags">
          <span className="badge">TensorFlow Lite</span><span className="badge">ONNX</span><span className="badge">MQTT</span>
          <span className="badge">Edge Impulse</span><span className="badge">Raspberry Pi</span><span className="badge">NVIDIA Jetson</span>
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
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.25rem, 5vw, 4.85rem);   /* was: clamp(3rem, 7vw, 7rem) — reduced */
  line-height: 1.05;                          /* was: 0.93 — slightly looser so it doesn't feel cramped */
  letter-spacing: -0.02em;
  color: var(--black);
  margin-bottom: 2rem;
  max-width: 680px;                            /* NEW — stops the text from running under the image */
}
.page-hero h1 em { font-style: italic; font-weight: 300; color: #C9A07E; }
.page-hero-sub {
  font-size: 16px;
  color: var(--gray-500);
  max-width: 480px;                             /* was: 520px — pulled in slightly to match */
  line-height: 1.8;
  font-weight: 300;
}
.page-hero .section-tag { color: #C9A07E; }

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
  .hex-cluster { display: none; }
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
.sol-section:nth-child(even) { background: var(--white); }  /* no more gray alternating — screenshot is consistently white */

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