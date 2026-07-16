"use client";

export default function AboutContent() {
  return (
    <>

<section className="page-hero">
  <div className="grid-bg" style={{position: "absolute", inset: "0", pointerEvents: "none"}}></div>
  <img src="/phexaraicon.png" alt="" aria-hidden="true" className="page-hero-watermark" />
  <div style={{position: "relative", zIndex: "1"}}>
    <p className="page-hero-label" data-anim="fade-up">About PHEXARA</p>
    <h1 data-anim="fade-up" data-delay="100">Built to engineer<br />what comes <em>next</em></h1>
    <p className="page-hero-sub" data-anim="fade-up" data-delay="200">A next-generation technology company bridging the gap between emerging technologies and real-world impact — building systems that create trust, intelligence, and sustainable value.</p>
  </div>
</section>
  {/* STORY */}
  <section className="story-section">
    <div className="story-inner">
      <div data-anim="fade-left">
        <span className="section-tag">Our Story</span>
        <h2 className="section-title">Why PHEXARA <em>exists</em></h2>
        <blockquote className="story-pull">"Technology should not merely automate. It should create trust, resilience, and opportunity — at the intersection of intelligence and security."</blockquote>
      </div>
      <div className="story-body" data-anim="fade-right">
        <p>PHEXARA was founded on a simple but urgent conviction: <strong>the organizations that will thrive in the next decade are those that build on intelligent, secure foundations today.</strong></p>
        <p>We exist at the intersection of three forces reshaping the world — artificial intelligence, cybersecurity, and digital infrastructure. Each one, alone, is transformative. Together, handled correctly, they are civilization-scale opportunities.</p>
        <p>Our founders came together from backgrounds spanning <strong>offensive security, AI research, and enterprise software engineering</strong>, united by the belief that the best technology companies don&apos;t just build products — they build systems that enable others to innovate confidently.</p>
        <p>PHEXARA is that kind of company. We are building the intelligent infrastructure of tomorrow, one system at a time.</p>
        <div className="mission-vision">
          <div className="mv-card">
            <div className="mv-label">Mission</div>
            <div className="mv-text">To engineer secure, intelligent, and transformative technologies that empower organizations to innovate confidently and create sustainable value.</div>
          </div>
          <div className="mv-card">
            <div className="mv-label">Vision</div>
            <div className="mv-text">To become one of the world&apos;s most trusted builders of intelligent infrastructure, secure AI ecosystems, and future-ready digital technologies.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <hr className="divider"/>

  {/* VALUES */}
  <section className="values-section">
    <span className="section-tag" data-anim="fade-up">What we stand for</span>
    <h2 className="section-title" data-anim="fade-up" data-delay="100">Core <em>values</em></h2>
    <div className="values-grid">
      <div className="value-card" data-anim="fade-up">
        <span className="value-icon">◉</span>
        <div className="value-title">Innovation</div>
        <div className="value-desc">Pushing the boundaries of what&apos;s technically possible with purpose and precision</div>
      </div>
      <div className="value-card" data-anim="fade-up" data-delay="100">
        <span className="value-icon">◈</span>
        <div className="value-title">Integrity</div>
        <div className="value-desc">Building with honesty, accountability, and transparency at every layer</div>
      </div>
      <div className="value-card" data-anim="fade-up" data-delay="200">
        <span className="value-icon">⬡</span>
        <div className="value-title">Security</div>
        <div className="value-desc">Security is not a feature — it&apos;s a foundational design principle</div>
      </div>
      <div className="value-card" data-anim="fade-up" data-delay="300">
        <span className="value-icon">◎</span>
        <div className="value-title">Excellence</div>
        <div className="value-desc">Uncompromising quality in engineering, research, and service delivery</div>
      </div>
      <div className="value-card" data-anim="fade-up" data-delay="400">
        <span className="value-icon">⊕</span>
        <div className="value-title">Responsibility</div>
        <div className="value-desc">Deploying AI and technology with fairness, human oversight, and ethical rigor</div>
      </div>
      <div className="value-card" data-anim="fade-up" data-delay="100">
        <span className="value-icon">◉</span>
        <div className="value-title">Human-Centred</div>
        <div className="value-desc">Every system we build serves people, not the other way around</div>
      </div>
      <div className="value-card" data-anim="fade-up" data-delay="200">
        <span className="value-icon">◈</span>
        <div className="value-title">Collaboration</div>
        <div className="value-desc">Great technology is built with partners, clients, and communities</div>
      </div>
      <div className="value-card" data-anim="fade-up" data-delay="300">
        <span className="value-icon">⬡</span>
        <div className="value-title">Global Impact</div>
        <div className="value-desc">Building technologies that create meaningful change at scale</div>
      </div>
      <div className="value-card" data-anim="fade-up" data-delay="400">
        <span className="value-icon">◎</span>
        <div className="value-title">Sustainability</div>
        <div className="value-desc">Creating value that endures — for businesses, societies, and the planet</div>
      </div>
      <div className="value-card" data-anim="fade-up" data-delay="500">
        <span className="value-icon">⊕</span>
        <div className="value-title">Transparency</div>
        <div className="value-desc">Open, explainable systems that clients and users can trust and audit</div>
      </div>
    </div>
  </section>

  {/* LEADERSHIP */}
  <section className="leadership-section" id="leadership">
    <span className="section-tag" data-anim="fade-up">Leadership</span>
    <h2 className="section-title" data-anim="fade-up" data-delay="100">Three founders.<br />One shared <em>mission.</em></h2>
    <p className="section-body" data-anim="fade-up" data-delay="200">PHEXARA was founded by three specialists united by a vision: to build technologies that create meaningful, lasting impact in a rapidly evolving digital world.</p>
    <div className="founders-grid">
      <div className="founder-card" data-anim="fade-up">
        <div className="founder-portrait">
          <div className="founder-portrait-bg"></div>
          <div className="founder-initials">CEO</div>
          <span className="founder-num">01 / 03</span>
        </div>
        <div className="founder-role">Founder & Chief Executive Officer</div>
        {/* <div className="founder-name">Profile Coming Soon</div> */}
        <div className="founder-desc">Leads corporate strategy, business growth, strategic partnerships, investor relations, and global expansion. The commercial and strategic driving force behind PHEXARA&apos;s market position.</div>
        <div className="founder-tags">
          <span className="badge">Strategy</span>
          <span className="badge">Partnerships</span>
          <span className="badge">Investor Relations</span>
          <span className="badge">Growth</span>
        </div>
      </div>
      <div className="founder-card" data-anim="fade-up" data-delay="150">
        <div className="founder-portrait" style={{background: "#f0f0f0"}}>
          <div className="founder-portrait-bg"></div>
          <div className="founder-initials">CTO</div>
          <span className="founder-num">02 / 03</span>
        </div>
        <div className="founder-role">Founder & Chief Technology Officer</div>
        {/* <div className="founder-name">Profile Coming Soon</div> */}
        <div className="founder-desc">Leads software engineering, product development, artificial intelligence, research and innovation, and technology strategy. The technical architect of PHEXARA&apos;s intelligent systems.</div>
        <div className="founder-tags">
          <span className="badge">AI Research</span>
          <span className="badge">Engineering</span>
          <span className="badge">Product</span>
          <span className="badge">Innovation</span>
        </div>
      </div>
      <div className="founder-card" data-anim="fade-up" data-delay="300">
        <div className="founder-portrait" style={{background: "#ebebeb"}}>
          <div className="founder-portrait-bg"></div>
          <div className="founder-initials">CISO</div>
          <span className="founder-num">03 / 03</span>
        </div>
        <div className="founder-role">Founder & CISO / COO</div>
        {/* <div className="founder-name">Profile Coming Soon</div> */}
        <div className="founder-desc">Leads cybersecurity, cloud security, governance, compliance, operations, and risk management. The guardian of PHEXARA&apos;s security posture and operational excellence.</div>
        <div className="founder-tags">
          <span className="badge">Cybersecurity</span>
          <span className="badge">Governance</span>
          <span className="badge">Compliance</span>
          <span className="badge">Operations</span>
        </div>
      </div>
    </div>
  </section>

  {/* TRUST */}
  <section id="trust" className="dark-section">
    <div style={{position: "relative", zIndex: "1"}}>
      <span className="section-tag" data-anim="fade-up">Trust & Governance</span>
      <h2 className="section-title" data-anim="fade-up" data-delay="100">Security and responsibility<br />are not <em>optional</em></h2>
      <div className="trust-cols">
        <div className="trust-col" data-anim="fade-up">
          <h3>Security by Design</h3>
          <p>Security is integrated throughout the entire development lifecycle — not retrofitted at the end. Every system is designed with threat modelling, least privilege, and resilience as first-order concerns.</p>
        </div>
        <div className="trust-col" data-anim="fade-up" data-delay="100">
          <h3>Responsible AI Principles</h3>
          <p>We deploy AI systems under a framework of fairness, accountability, transparency, explainability, privacy preservation, and meaningful human oversight at every decision layer.</p>
        </div>
        <div className="trust-col" data-anim="fade-up" data-delay="200">
          <h3>Standards Alignment</h3>
          <p>All PHEXARA systems are designed around internationally recognized frameworks including ISO 27001, the NIST Cybersecurity Framework, GDPR, PCI DSS, and emerging AI governance standards.</p>
        </div>
      </div>
      <div className="standards-row" data-anim="fade-up" data-delay="200">
        <span className="std-badge">ISO 27001</span>
        <span className="std-badge">NIST CSF</span>
        <span className="std-badge">GDPR</span>
        <span className="std-badge">EU AI Act</span>
        <span className="std-badge">PCI DSS</span>
        <span className="std-badge">Zero Trust</span>
        <span className="std-badge">DevSecOps</span>
        <span className="std-badge">OWASP</span>
      </div>
    </div>
  </section>

  
      <style jsx>{`
.page-hero {
  min-height: 65vh; display: flex; flex-direction: column;
  justify-content: flex-end; padding: calc(var(--nav-height) + 5rem) 5% 6rem;
  background: var(--white); border-bottom: 1px solid #e8e8e8;
  position: relative; overflow: hidden;
}

.page-hero-watermark {
  position: absolute;
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
  width: 30%;
  max-width: 380px;
  min-width: 200px;
  height: auto;
  opacity: 1;
  filter: none;
  pointer-events: none;
  z-index: 0;
  user-select: none;
}

.page-hero-label {
  font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
  color: #C9A07E; margin-bottom: 2rem; position: relative; z-index: 1;
}
.page-hero h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3rem, 7vw, 7rem); font-weight: 700;
  line-height: 0.95; letter-spacing: -0.03em; color: var(--black);
  margin-bottom: 2rem; position: relative; z-index: 1;
}
.page-hero h1 em { font-style: italic; font-weight: 300; color: #C9A07E; }
.page-hero-sub { font-size: 16px; color: var(--gray-500); max-width: 560px; line-height: 1.8; font-weight: 300; position: relative; z-index: 1; }

@media (max-width: 768px) {
  .page-hero-watermark {
    width: 55%;
    opacity: 0.1;
    right: -5%;
  }
  .page-hero h1 {
    letter-spacing: -0.02em;
  }
}

@media (max-width: 480px) {
  .page-hero-watermark {
    width: 70%;
    right: -15%;
    opacity: 0.08;
  }
}
    /* STORY */
.story-section { padding: 9rem 5%; }
.story-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 8rem; }

.story-section .section-title em {
  font-style: italic;
  font-weight: 300;
  color: #C9A07E;
}

.story-body p { font-size: 16px; color: var(--gray-500); line-height: 1.85; font-weight: 300; margin-bottom: 1.5rem; }
.story-body p strong { color: var(--black); font-weight: 600; }

.story-pull {
  font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 400; line-height: 1.25; letter-spacing: -0.015em; color: var(--black);
  border-left: 3px solid #C9A07E; padding-left: 2rem; margin: 3rem 0;
}

.mission-vision { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 3rem; }
.mv-card {
  padding: 2.5rem 2rem; border: 1px solid #d9c3ec;
  transition: border-color var(--transition);
}
.mv-card:hover { border-color: #7C1FB4; }
.mv-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #7C1FB4; margin-bottom: 1rem; font-weight: 600; }
.mv-text { font-size: 14px; color: var(--gray-600); line-height: 1.75; }
    /* VALUES */
 .values-section { padding: 9rem 5%; background: #EDE9E1; border-top: none; }

.values-section .section-title em {
  font-style: italic;
  font-weight: 300;
  color: #C9A07E;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
  border: none;
  margin-top: 4rem;
}

.value-card {
  padding: 2.5rem 1.5rem;
  border: none;
  border-radius: 14px;
  background: var(--white);
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.value-card:hover {
  background: var(--white);
  box-shadow: 0 12px 28px rgba(0,0,0,0.08);
  transform: translateY(-3px);
}
.value-card:hover .value-title,
.value-card:hover .value-desc {
  color: inherit;
}
.value-card:hover .value-icon {
  color: var(--black);
  border-color: transparent;
}

.value-icon {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  display: block;
  color: var(--black);
  transition: color var(--transition);
}
.value-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #B9825A;
  margin-bottom: 0.5rem;
  transition: color var(--transition);
}
.value-desc {
  font-size: 12px;
  color: #6b6b6b;
  line-height: 1.6;
  transition: color var(--transition);
}

@media (max-width: 1024px) {
  .values-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 640px) {
  .values-grid { grid-template-columns: repeat(2, 1fr); }
}
    /* LEADERSHIP */
  .leadership-section { padding: 9rem 5%; }

.leadership-section .section-title em {
  font-style: italic;
  font-weight: 300;
  color: #C9A07E;
}

.founders-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin-top: 5rem; }
.founder-card { position: relative; }

.founder-portrait {
  width: 100%; aspect-ratio: 4/5; background: #f5f5f5;
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden; margin-bottom: 2rem;
  border-radius: 16px;
}
.founder-portrait-bg {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
  background-size: 20px 20px;
}
.founder-initials {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 5rem; font-weight: 700; color: #d5d5d5; letter-spacing: -0.05em;
  position: relative; z-index: 1;
}
.founder-num {
  position: absolute; top: 1.5rem; right: 1.5rem;
  font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #aaa;
}

.founder-role {
  font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--black); font-weight: 600; margin-bottom: 0.75rem;
}
.founder-name { font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em; color: var(--black); margin-bottom: 0.75rem; }
.founder-desc { font-size: 13.5px; color: var(--gray-500); line-height: 1.7; margin-bottom: 1.5rem; }

.founder-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.founder-tags .badge {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #C9A07E;
  background: transparent;
  border: 1px solid #C9A07E;
  border-radius: 5px;
  padding: 5px 10px;
}

@media (max-width: 1024px) {
  .founders-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .founders-grid { grid-template-columns: 1fr; }
}

    /* TRUST */
   #trust { padding: 9rem 5%; background: radial-gradient(ellipse 70% 60% at 10% 0%, #2a2016 0%, #1a1a1a 45%, #0d0d0d 100%); }
#trust .section-tag { color: #C9A07E; }
#trust .section-title { color: var(--white); }
#trust .section-title em { font-style: italic; font-weight: 300; color: #C9A07E; }

.trust-cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin-top: 5rem; }
.trust-col h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 600; color: var(--white); margin-bottom: 1rem; }
.trust-col p { font-size: 13.5px; color: #9a9a9a; line-height: 1.75; }

.standards-row { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 5rem; padding-top: 4rem; border-top: 1px solid rgba(201,160,126,0.25); }
.std-badge {
  font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase;
  color: #C9A07E; border: 1px solid #C9A07E; padding: 10px 22px;
  border-radius: 6px;
  transition: all var(--transition);
}
.std-badge:hover { border-color: #e0b98d; color: #fff; background: rgba(201,160,126,0.08); }

    @media (max-width: 1024px) {
      .values-grid { grid-template-columns: repeat(3, 1fr); }
      .founders-grid { grid-template-columns: 1fr 1fr; }
      .trust-cols { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 768px) {
      .story-inner { grid-template-columns: 1fr; gap: 3rem; }
      .values-grid { grid-template-columns: 1fr 1fr; }
      .founders-grid { grid-template-columns: 1fr; }
    }
  `}</style>
    </>
  );
}
