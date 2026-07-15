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
        <div className="ra-item"><div><div className="ra-title">Applied AI & Vertical SaaS</div><div className="ra-sub">Fidelity, calibration, and real-time synchronisation</div></div></div>
        <div className="ra-item"><div><div className="ra-title">Human-AI Collaboration</div><div className="ra-sub">Interaction design, trust calibration, and shared agency</div></div></div>
        <div className="ra-item"><div><div className="ra-title">Future Commerce Platforms</div><div className="ra-sub">Predictive commerce, synthetic data, and personalisation ethics</div></div></div>
        <div className="ra-item" style={{borderBottom: "none"}}><div><div className="ra-title">Edge Intelligence Systems</div><div className="ra-sub">Federated learning, distributed inference, and edge security</div></div></div>
      </div>
    </div>
    <div data-anim="fade-right">
      <span className="section-tag">Focus Areas</span>
      <h2 className="section-title">Current <em>focus</em></h2>
      <div className="rc-bar" style={{marginTop: "2.5rem"}}></div>
      <div className="research-cards">
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
.page-hero h1 em { font-style: italic; font-weight: 300; color: #C9A07E; }
.page-hero-sub { font-size: 16px; color: var(--gray-500); max-width: 520px; line-height: 1.8; font-weight: 300; }

    /* RESEARCH AREAS */
.research-main { padding: 8rem 5%; }
.research-inner { display: grid; grid-template-columns: 1fr 1.6fr; gap: 8rem; }

.research-inner .section-title em { font-style: italic; font-weight: 300; color: #C9A07E; }

.ra-list { counter-reset: ra; }
.ra-item {
  counter-increment: ra;
  padding: 1.5rem 0; border-bottom: 1px solid #eee;
  display: grid; grid-template-columns: 30px 1fr; gap: 1rem;
  transition: all var(--transition); cursor: default;
}
.ra-item:hover .ra-title { color: var(--black); }
.ra-item::before {
  content: counter(ra, decimal-leading-zero);
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  color: #ccc; font-weight: 400; padding-top: 3px;
}
.ra-title { font-size: 15px; font-weight: 700; color: var(--black); transition: color var(--transition); margin-bottom: 2px; }
.ra-sub { font-size: 12.5px; color: var(--gray-400); margin-top: 2px; line-height: 1.5; }

.rc-bar {
  height: 44px;
  background: #C9A07E;
  border-radius: 4px;
}

.research-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 3rem;
  border-top: none;
}
.research-cards .rc:nth-child(odd) {
  border-right: 1px solid #eee;
  padding-right: 2.5rem;
}
.research-cards .rc:nth-child(even) {
  padding-left: 2.5rem;
}
.rc {
  padding: 2rem 0;
  border: none;
  border-bottom: 1px solid #eee;
  transition: none;
}
.rc:hover { border-color: #eee; }
.rc-tag { font-size: 9.5px; letter-spacing: 0.15em; text-transform: uppercase; color: #C9A07E; font-weight: 600; margin-bottom: 0.75rem; }
.rc h4 { font-family: 'Space Grotesk', sans-serif; font-size: 15px; font-weight: 700; color: var(--black); margin-bottom: 0.75rem; line-height: 1.3; }
.rc p { font-size: 13px; color: var(--gray-400); line-height: 1.65; }

@media (max-width: 1024px) {
  .research-inner { grid-template-columns: 1fr; gap: 4rem; }
  .research-cards { grid-template-columns: 1fr; }
  .research-cards .rc:nth-child(odd) { border-right: none; padding-right: 0; }
  .research-cards .rc:nth-child(even) { padding-left: 0; }
}

    /* PUBLICATIONS PLACEHOLDER */
  .pubs-section { padding: 8rem 5%; background: #EDE9E1; border-top: none; }

.pubs-section .section-title em { font-style: italic; font-weight: 300; color: #C9A07E; }

.pub-row {
  padding: 2rem 2.5rem; border-bottom: none; margin-bottom: 1rem;
  background: var(--white);
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  display: grid; grid-template-columns: 1fr 160px; align-items: center; gap: 3rem;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.pub-row:hover { box-shadow: 0 12px 28px rgba(0,0,0,0.08); transform: translateY(-2px); }
.pub-row:hover .pub-title { color: var(--black); }

.pub-cat { font-size: 9.5px; letter-spacing: 0.16em; text-transform: uppercase; color: #C9A07E; font-weight: 600; margin-bottom: 0.6rem; }
.pub-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.05rem; font-weight: 700; color: var(--black); letter-spacing: -0.01em; transition: color var(--transition); margin-bottom: 0.4rem; }
.pub-authors { font-size: 12px; color: var(--gray-400); }

.pub-status {
  font-size: 9.5px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600;
  padding: 8px 14px; border: 1px solid #ddd6c8; border-radius: 999px; color: #8a8a8a;
  text-align: center; margin-top: 0;
}

@media (max-width: 1024px) {
  .research-inner { grid-template-columns: 1fr; gap: 4rem; }
}
@media (max-width: 768px) {
  .research-cards { grid-template-columns: 1fr; }
  .pub-row { grid-template-columns: 1fr; gap: 1rem; text-align: left; }
  .pub-status { justify-self: start; }
}
  `}</style>
    </>
  );
}
