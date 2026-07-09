"use client";

export default function ResearchContent() {
  return (
    <>

  <section className="page-hero">
    <div className="grid-bg" style={{position: "absolute", inset: "0", pointerEvents: "none"}}></div>
    <div style={{position: "relative", zIndex: "1"}}>
      <p className="section-tag" data-anim="fade-up">Research & Innovation</p>
      <h1 data-anim="fade-up" data-delay="100">At the edge of<br />what&apos;s <em>possible</em></h1>
      <p className="page-hero-sub" data-anim="fade-up" data-delay="200">Our research agenda spans the most critical frontiers of intelligent systems — from agentic AI safety to quantum-resistant security infrastructure.</p>
    </div>
  </section>

  <section className="research-main">
    <div className="research-inner">
      <div data-anim="fade-left">
        <span className="section-tag">Research Areas</span>
        <h2 className="section-title">Ten frontiers<br />we&apos;re <em>exploring</em></h2>
        <div className="ra-list" style={{marginTop: "2.5rem"}}>
          <div className="ra-item"><div><div className="ra-title">Agentic AI & Autonomous Systems</div><div className="ra-sub">Multi-agent reasoning, planning, and safe autonomy</div></div></div>
          <div className="ra-item"><div><div className="ra-title">AI Safety & Alignment</div><div className="ra-sub">Goal specification, value alignment, and safe deployment</div></div></div>
          <div className="ra-item"><div><div className="ra-title">Secure AI Infrastructure</div><div className="ra-sub">Adversarial robustness, model security, and supply chain threats</div></div></div>
          <div className="ra-item"><div><div className="ra-title">AI Governance Frameworks</div><div className="ra-sub">Regulatory compliance, audit mechanisms, and accountability</div></div></div>
          <div className="ra-item"><div><div className="ra-title">Cyber-Physical Security</div><div className="ra-sub">Attack surfaces in connected industrial and IoT environments</div></div></div>
          <div className="ra-item"><div><div className="ra-title">Quantum-Resistant Cryptography</div><div className="ra-sub">Post-quantum algorithms and migration strategies</div></div></div>
          <div className="ra-item"><div><div className="ra-title">Digital Twin Intelligence</div><div className="ra-sub">Fidelity, calibration, and real-time synchronisation</div></div></div>
          <div className="ra-item"><div><div className="ra-title">Human-AI Collaboration</div><div className="ra-sub">Interaction design, trust calibration, and shared agency</div></div></div>
          <div className="ra-item"><div><div className="ra-title">Future Commerce Platforms</div><div className="ra-sub">Predictive commerce, synthetic data, and personalisation ethics</div></div></div>
          <div className="ra-item" style={{borderBottom: "none"}}><div><div className="ra-title">Edge Intelligence Systems</div><div className="ra-sub">Federated learning, distributed inference, and edge security</div></div></div>
        </div>
      </div>
      <div data-anim="fade-right">
        <span className="section-tag">Focus Areas</span>
        <h2 className="section-title">Current <em>focus</em></h2>
        <div className="research-cards" style={{marginTop: "2.5rem"}}>
          <div className="rc">
            <div className="rc-tag">Active Research</div>
            <h4>Autonomous Systems Security</h4>
            <p>Examining threat models and safety constraints for LLM-controlled robotic and autonomous systems in real-world deployments.</p>
          </div>
          <div className="rc">
            <div className="rc-tag">Active Research</div>
            <h4>Responsible AI Deployment</h4>
            <p>Developing practical governance frameworks for high-risk AI system classification, auditing, and continuous compliance.</p>
          </div>
          <div className="rc">
            <div className="rc-tag">In Development</div>
            <h4>Intelligent Digital Infrastructure</h4>
            <p>Secure, self-healing digital twin ecosystems in critical infrastructure and smart environments at scale.</p>
          </div>
          <div className="rc">
            <div className="rc-tag">Exploratory</div>
            <h4>Post-Quantum Security</h4>
            <p>Cryptographic primitives and protocols resilient to quantum computing threats for enterprise systems and protocols.</p>
          </div>
          <div className="rc">
            <div className="rc-tag">Exploratory</div>
            <h4>Adversarial ML</h4>
            <p>Testing AI model robustness against adversarial perturbations, data poisoning attacks, and model inversion.</p>
          </div>
          <div className="rc">
            <div className="rc-tag">In Development</div>
            <h4>Edge AI Safety</h4>
            <p>Ensuring reliable, fair, and secure AI inference on resource-constrained edge devices in safety-critical contexts.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* PUBLICATIONS */}
  <section className="pubs-section">
    <span className="section-tag" data-anim="fade-up">Publications & Insights</span>
    <h2 className="section-title" data-anim="fade-up" data-delay="100">Research <em>output</em></h2>
    <div style={{marginTop: "3rem"}} data-anim="fade-up" data-delay="200">
      <div className="pub-row">
        <div>
          <div className="pub-cat">White Paper · AI Security</div>
          <div className="pub-title">Securing LLM-Controlled Robotic Systems: A Red-Teaming Framework</div>
          <div className="pub-authors">PHEXARA Research Team — Cybersecurity & Autonomous Systems</div>
        </div>
        <div className="pub-status">Forthcoming</div>
      </div>
      <div className="pub-row">
        <div>
          <div className="pub-cat">Research Paper · AI Governance</div>
          <div className="pub-title">Deployer Liability in AI Systems: Governance Failure in Critical Applications</div>
          <div className="pub-authors">PHEXARA Research Team — AI Governance Practice</div>
        </div>
        <div className="pub-status">In Review</div>
      </div>
      <div className="pub-row">
        <div>
          <div className="pub-cat">Technical Report · Cybersecurity</div>
          <div className="pub-title">Autonomous Attack Agents for AI System Red-Teaming: Methodology & Findings</div>
          <div className="pub-authors">PHEXARA Research Team — Offensive Security Division</div>
        </div>
        <div className="pub-status">In Progress</div>
      </div>
      <div className="pub-row" style={{borderBottom: "none"}}>
        <div>
          <div className="pub-cat">Framework · Edge Intelligence</div>
          <div className="pub-title">Security Architecture for Distributed Edge AI Networks in Critical Infrastructure</div>
          <div className="pub-authors">PHEXARA Research Team — Edge Systems Group</div>
        </div>
        <div className="pub-status">Planned</div>
      </div>
    </div>
  </section>

  
      <style jsx>{`
    .page-hero {
      min-height: 60vh; display: flex; flex-direction: column; justify-content: flex-end;
      padding: calc(var(--nav-height) + 5rem) 5% 5rem;
      background: var(--white); border-bottom: 1px solid #e8e8e8;
      position: relative; overflow: hidden;
    }
    .page-hero h1 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(3rem, 7vw, 7rem); font-weight: 700;
      line-height: 0.93; letter-spacing: -0.03em; color: var(--black); margin-bottom: 2rem;
    }
    .page-hero h1 em { font-style: italic; font-weight: 300; color: var(--gray-400); }
    .page-hero-sub { font-size: 16px; color: var(--gray-500); max-width: 520px; line-height: 1.8; font-weight: 300; }

    /* RESEARCH AREAS */
    .research-main { padding: 8rem 5%; }
    .research-inner { display: grid; grid-template-columns: 1fr 1.6fr; gap: 8rem; }
    .ra-list { counter-reset: ra; }
    .ra-item {
      counter-increment: ra;
      padding: 1.5rem 0; border-bottom: 1px solid #e8e8e8;
      display: grid; grid-template-columns: 48px 1fr; gap: 1rem;
      transition: all var(--transition); cursor: default;
    }
    .ra-item:hover .ra-title { color: var(--black); }
    .ra-item::before {
      content: counter(ra, decimal-leading-zero);
      font-family: 'JetBrains Mono', monospace; font-size: 11px;
      color: #ccc; font-weight: 400; padding-top: 3px;
    }
    .ra-title { font-size: 15px; color: var(--gray-600); transition: color var(--transition); }
    .ra-sub { font-size: 12px; color: var(--gray-300); margin-top: 2px; line-height: 1.5; }
    .research-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    .rc { padding: 2.5rem 2rem; border: 1px solid #e8e8e8; transition: border-color var(--transition); }
    .rc:hover { border-color: var(--black); }
    .rc-tag { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gray-400); margin-bottom: 1rem; }
    .rc h4 { font-family: 'Space Grotesk', sans-serif; font-size: 15px; font-weight: 600; color: var(--black); margin-bottom: 0.75rem; line-height: 1.3; }
    .rc p { font-size: 13px; color: var(--gray-400); line-height: 1.65; }

    /* PUBLICATIONS PLACEHOLDER */
    .pubs-section { padding: 8rem 5%; background: var(--gray-50); border-top: 1px solid #e8e8e8; }
    .pub-row {
      padding: 2.5rem 0; border-bottom: 1px solid #e8e8e8;
      display: grid; grid-template-columns: 1fr 200px; align-items: start; gap: 3rem;
      transition: all var(--transition);
    }
    .pub-row:hover .pub-title { color: var(--black); }
    .pub-cat { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gray-400); margin-bottom: 0.5rem; }
    .pub-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.2rem; font-weight: 600; color: var(--gray-600); letter-spacing: -0.01em; transition: color var(--transition); margin-bottom: 0.5rem; }
    .pub-authors { font-size: 12px; color: var(--gray-400); }
    .pub-status { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; padding: 7px 16px; border: 1px solid #e0e0e0; color: var(--gray-400); text-align: center; margin-top: 4px; }

    @media (max-width: 1024px) {
      .research-inner { grid-template-columns: 1fr; gap: 4rem; }
    }
    @media (max-width: 768px) {
      .research-cards { grid-template-columns: 1fr; }
      .pub-row { grid-template-columns: 1fr; gap: 1rem; }
    }
  `}</style>
    </>
  );
}
