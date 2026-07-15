"use client";

export default function IndustriesContent() {
  return (
    <>

  <section className="page-hero">
    <div className="grid-bg" style={{position: "absolute", inset: "0", pointerEvents: "none"}}></div>
    <div style={{position: "relative", zIndex: "1"}}>
      <p className="section-tag" data-anim="fade-up">Industries</p>
      <h1 data-anim="fade-up" data-delay="100">Technology for every<br />critical <em>sector</em></h1>
      <p className="page-hero-sub" data-anim="fade-up" data-delay="200">PHEXARA&apos;s solutions are designed to deliver real impact across the industries that shape modern society — from financial services to healthcare, smart cities to energy.</p>
    </div>
  </section>

  <section className="industries-section">
    <div className="ind-grid">
      <div className="ind-card" data-anim="fade-up">
        <div className="ind-num">01</div>
        <span className="ind-icon">◉</span>
        <div className="ind-name">Financial Services</div>
        <div className="ind-desc">Intelligent fraud detection, regulatory compliance automation, AI governance for credit and risk decisions, and secure digital banking infrastructure.</div>
        <div className="ind-cap"><span>AI Risk</span><span>Fraud Prevention</span><span>Compliance</span><span>Cloud Security</span></div>
      </div>
      <div className="ind-card" data-anim="fade-up" data-delay="100">
        <div className="ind-num">02</div>
        <span className="ind-icon">◈</span>
        <div className="ind-name">Healthcare</div>
        <div className="ind-desc">Secure health data infrastructure, clinical AI governance, predictive diagnostics, and Applied AI & Vertical SaaS models for medical device and treatment optimisation.</div>
        <div className="ind-cap"><span>Data Security</span><span>AI Governance</span><span>Applied AI & Vertical SaaS</span><span>IoT</span></div>
      </div>
      <div className="ind-card" data-anim="fade-up">
        <div className="ind-num">03</div>
        <span className="ind-icon">⬡</span>
        <div className="ind-name">Manufacturing</div>
        <div className="ind-desc">Applied AI & Vertical SaaS, predictive maintenance, edge AI for real-time quality control, and OT/IT security for connected factory environments.</div>
        <div className="ind-cap"><span>Applied AI & Vertical SaaS</span><span>Edge AI</span><span>OT Security</span><span>Predictive ML</span></div>
      </div>
      <div className="ind-card" data-anim="fade-up" data-delay="100">
        <div className="ind-num">04</div>
        <span className="ind-icon">◎</span>
        <div className="ind-name">Retail & E-Commerce</div>
        <div className="ind-desc">Predictive commerce infrastructure, customer intelligence platforms, personalisation engines, and end-to-end payment security and fraud prevention.</div>
        <div className="ind-cap"><span>Smart Commerce</span><span>Personalisation</span><span>Fraud Detection</span><span>Analytics</span></div>
      </div>
      <div className="ind-card" data-anim="fade-up">
        <div className="ind-num">05</div>
        <span className="ind-icon">⊕</span>
        <div className="ind-name">Government & Public Sector</div>
        <div className="ind-desc">Secure digital infrastructure, AI governance for public decision-making, cybersecurity operations, and smart city intelligence platforms.</div>
        <div className="ind-cap"><span>AI Governance</span><span>Cybersecurity</span><span>Smart Cities</span><span>Compliance</span></div>
      </div>
      <div className="ind-card" data-anim="fade-up" data-delay="100">
        <div className="ind-num">06</div>
        <span className="ind-icon">◉</span>
        <div className="ind-name">Telecommunications</div>
        <div className="ind-desc">Network security architecture, AI-powered anomaly detection, edge computing for 5G environments, and intelligent customer management platforms.</div>
        <div className="ind-cap"><span>Network Security</span><span>Edge AI</span><span>5G</span><span>Anomaly Detection</span></div>
      </div>
      <div className="ind-card" data-anim="fade-up">
        <div className="ind-num">07</div>
        <span className="ind-icon">◈</span>
        <div className="ind-name">Energy & Utilities</div>
        <div className="ind-desc">Smart grid digital twins, critical infrastructure protection, edge AI for energy optimisation, and OT cybersecurity for power generation assets.</div>
        <div className="ind-cap"><span>Applied AI & Vertical SaaS</span><span>Grid Intelligence</span><span>OT Security</span><span>Optimisation</span></div>
      </div>
      <div className="ind-card" data-anim="fade-up" data-delay="100">
        <div className="ind-num">08</div>
        <span className="ind-icon">⬡</span>
        <div className="ind-name">Smart Cities</div>
        <div className="ind-desc">City-scale digital twin platforms, edge AI for transport and infrastructure, IoT sensor orchestration, and integrated urban intelligence systems.</div>
        <div className="ind-cap"><span>Applied AI & Vertical SaaS</span><span>Edge AI</span><span>IoT</span><span>Urban Intelligence</span></div>
      </div>
      <div className="ind-card" data-anim="fade-up">
        <div className="ind-num">09</div>
        <span className="ind-icon">◎</span>
        <div className="ind-name">Education</div>
        <div className="ind-desc">Responsible AI adoption in education institutions, data governance frameworks, intelligent learning platforms, and institutional cybersecurity.</div>
        <div className="ind-cap"><span>AI Governance</span><span>Data Protection</span><span>Software</span><span>Security</span></div>
      </div>
      <div className="ind-card" data-anim="fade-up" data-delay="100">
        <div className="ind-num">10</div>
        <span className="ind-icon">⊕</span>
        <div className="ind-name">Transport & Logistics</div>
        <div className="ind-desc">Supply chain digital twins, predictive routing, connected fleet intelligence, and end-to-end logistics security and visibility platforms.</div>
        <div className="ind-cap"><span>Digital Twins</span><span>Predictive AI</span><span>Fleet Intelligence</span><span>Supply Chain</span></div>
      </div>
    </div>
  </section>

  
      <style jsx>{`
    .page-hero {
      min-height: 55vh; display: flex; flex-direction: column; justify-content: flex-end;
      padding: calc(var(--nav-height) + 5rem) 5% 5rem;
      background: var(--white); border-bottom: 1px solid #e8e8e8; position: relative; overflow: hidden;
    }
    .page-hero h1 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(3rem, 7vw, 7rem); font-weight: 700;
      line-height: 0.93; letter-spacing: -0.03em; color: var(--black); margin-bottom: 2rem;
    }
   .page-hero h1 em { font-style: italic; font-weight: 300; color: #C9A07E; }
    .page-hero-sub { font-size: 16px; color: var(--gray-500); max-width: 520px; line-height: 1.8; font-weight: 300; }

   .industries-section { padding: 8rem 5%; background: var(--white); }
.ind-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem 4rem; background: transparent; margin-top: 4rem; }

.ind-card {
  background: var(--white); padding: 1.5rem; margin: -1.5rem; border-radius: 14px; position: relative;
  transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
  overflow: visible;
}
.ind-card:hover {
  background: #faf7f2;
  box-shadow: 0 10px 26px rgba(0,0,0,0.06);
  transform: translateY(-3px);
}
.ind-card:hover .ind-icon { border-color: #C9A07E; color: #C9A07E; }
.ind-card:hover .ind-cap span { border-color: #C9A07E; color: #C9A07E; background: #fff; }

.ind-num { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #ccc; margin-bottom: 1.5rem; transition: color var(--transition); }
.ind-card:hover .ind-num { color: #C9A07E; }

.ind-icon {
  font-size: 1.6rem; margin-bottom: 1.25rem; color: var(--black); transition: all var(--transition); display: flex;
  width: 44px; height: 44px; border: 1px solid #e0e0e0; border-radius: 10px;
  align-items: center; justify-content: center;
}
.ind-name { font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 700; color: #B9825A; margin-bottom: 0.85rem; letter-spacing: -0.02em; }
.ind-desc { font-size: 13.5px; color: var(--gray-500); line-height: 1.75; margin-bottom: 1.5rem; font-weight: 300; }
.ind-cap { display: flex; flex-wrap: wrap; gap: 8px; }
.ind-cap span {
  font-size: 9.5px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600;
  padding: 6px 14px; border: 1px solid #C9A07E; border-radius: 999px; color: #C9A07E;
  transition: all var(--transition);
}
@media (max-width: 768px) { .ind-grid { grid-template-columns: 1fr; gap: 3rem; } }
  `}</style>
    </>
  );
}
