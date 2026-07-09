"use client";

import Link from "next/link";

export default function CareersContent() {
  return (
    <>

  <section className="page-hero dark-section">
    <div className="grid-bg grid-bg-dark" style={{position: "absolute", inset: "0", pointerEvents: "none"}}></div>
    <div style={{position: "relative", zIndex: "1"}}>
      <p className="section-tag" style={{color: "#3a3a3a"}} data-anim="fade-up">Careers</p>
      <h1 data-anim="fade-up" data-delay="100">Join the builders<br />of <em>tomorrow</em></h1>
      <p className="page-hero-sub" data-anim="fade-up" data-delay="200">PHEXARA is for engineers, researchers, and operators who think in systems, build with purpose, and want their work to create lasting impact in the world.</p>
    </div>
  </section>

  <section className="why-section">
    <div className="why-grid">
      <div data-anim="fade-left">
        <span className="section-tag">Why PHEXARA</span>
        <h2 className="section-title">Work that<br /><em>matters</em></h2>
        <div className="why-reasons">
          <div className="why-item">
            <span className="why-icon">◉</span>
            <div><div className="why-title">Frontier problems</div><div className="why-desc">Work on problems at the intersection of AI, security, and digital infrastructure — some of the most challenging and consequential in technology today.</div></div>
          </div>
          <div className="why-item">
            <span className="why-icon">◈</span>
            <div><div className="why-title">Real ownership</div><div className="why-desc">Small, focused teams with genuine ownership over systems, decisions, and outcomes. No bureaucracy between your work and its impact.</div></div>
          </div>
          <div className="why-item">
            <span className="why-icon">⬡</span>
            <div><div className="why-title">Learning culture</div><div className="why-desc">Research, conferences, certifications, and dedicated learning time. We invest in the growth of every person on the team.</div></div>
          </div>
          <div className="why-item">
            <span className="why-icon">◎</span>
            <div><div className="why-title">Global ambition</div><div className="why-desc">Remote-first with a global outlook. Opportunities to work across markets in the UK, Africa, and Asia-Pacific as we grow.</div></div>
          </div>
          <div className="why-item" style={{borderBottom: "none"}}>
            <span className="why-icon">⊕</span>
            <div><div className="why-title">Transparent equity</div><div className="why-desc">Open and fair compensation frameworks. We believe in rewarding the people who build PHEXARA as it grows.</div></div>
          </div>
        </div>
      </div>
      <div data-anim="fade-right" style={{paddingTop: "5rem"}}>
        <blockquote className="culture-quote">"We&apos;re not building another tech company. We&apos;re building the intelligent infrastructure that future companies run on — and we want the people who help build it to share in what that creates."</blockquote>
        <p style={{fontSize: "12px", color: "var(--gray-400)", marginTop: "1.5rem", letterSpacing: "0.05em"}}>— PHEXARA Founding Team</p>
        <div style={{marginTop: "3rem", padding: "2.5rem", border: "1px solid #e8e8e8"}}>
          <p style={{fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gray-400)", marginBottom: "1rem"}}>Current Status</p>
          <p style={{fontSize: "15px", color: "var(--black)", lineHeight: "1.65"}}>We are in the founding phase. Roles open as we grow. Register your interest now and be the first to know when relevant positions launch.</p>
          <div style={{marginTop: "2rem"}}><Link href="/contact" className="btn btn-filled"><span>Register Interest →</span></Link></div>
        </div>
      </div>
    </div>
  </section>

  <section className="depts-section">
    <span className="section-tag" data-anim="fade-up">Teams</span>
    <h2 className="section-title" data-anim="fade-up" data-delay="100">Where you might <em>fit</em></h2>
    <div className="dept-grid">
      <div className="dept-card" data-anim="fade-up">
        <span className="dept-icon">⬡</span>
        <div className="dept-name">Software Engineering</div>
        <div className="dept-desc">Build the core platforms, APIs, and infrastructure that power PHEXARA&apos;s products and client solutions.</div>
        <div className="dept-status">Roles opening soon</div>
      </div>
      <div className="dept-card" data-anim="fade-up" data-delay="100">
        <span className="dept-icon">◎</span>
        <div className="dept-name">AI Research</div>
        <div className="dept-desc">Investigate frontier AI problems, publish research, and translate findings into production-grade systems.</div>
        <div className="dept-status">Roles opening soon</div>
      </div>
      <div className="dept-card" data-anim="fade-up" data-delay="200">
        <span className="dept-icon">◈</span>
        <div className="dept-name">Cybersecurity</div>
        <div className="dept-desc">Red team, architect defences, and build the security systems that protect PHEXARA and its clients.</div>
        <div className="dept-status">Roles opening soon</div>
      </div>
      <div className="dept-card" data-anim="fade-up" data-delay="100">
        <span className="dept-icon">◉</span>
        <div className="dept-name">Product Design</div>
        <div className="dept-desc">Design the systems, interfaces, and experiences that make complex technology accessible and trustworthy.</div>
        <div className="dept-status">Roles opening soon</div>
      </div>
      <div className="dept-card" data-anim="fade-up" data-delay="200">
        <span className="dept-icon">⊕</span>
        <div className="dept-name">Cloud Engineering</div>
        <div className="dept-desc">Architect and operate the cloud infrastructure that PHEXARA&apos;s intelligent systems run on at scale.</div>
        <div className="dept-status">Roles opening soon</div>
      </div>
      <div className="dept-card" data-anim="fade-up" data-delay="300">
        <span className="dept-icon">⬡</span>
        <div className="dept-name">Business Operations</div>
        <div className="dept-desc">Drive partnerships, strategy, finance, and the operational excellence that lets the technical teams focus.</div>
        <div className="dept-status">Roles opening soon</div>
      </div>
    </div>
  </section>

  <section className="process-section">
    <span className="section-tag" data-anim="fade-up">Our Process</span>
    <h2 className="section-title" data-anim="fade-up" data-delay="100">How we <em>hire</em></h2>
    <div className="process-steps">
      <div className="ps" data-anim="fade-up">
        <div className="ps-num">01</div>
        <div className="ps-title">Application</div>
        <div className="ps-desc">Send your CV and a short note about what you&apos;re building and what excites you about PHEXARA.</div>
      </div>
      <div className="ps" data-anim="fade-up" data-delay="150">
        <div className="ps-num">02</div>
        <div className="ps-title">Intro Call</div>
        <div className="ps-desc">A 30-minute conversation with a founding team member about your background and our work.</div>
      </div>
      <div className="ps" data-anim="fade-up" data-delay="300">
        <div className="ps-num">03</div>
        <div className="ps-title">Technical Review</div>
        <div className="ps-desc">A practical assessment aligned to the role — focused on real problems, not abstract puzzles.</div>
      </div>
      <div className="ps" data-anim="fade-up" data-delay="450">
        <div className="ps-num">04</div>
        <div className="ps-title">Final Interview</div>
        <div className="ps-desc">Meet the full team. Mutual assessment — we want you to leave knowing clearly if this is right for you.</div>
      </div>
    </div>
  </section>

  <section className="career-cta dark-section">
    <span className="section-tag" style={{color: "#3a3a3a"}} data-anim="fade-up">Get Started</span>
    <h2 className="section-title" data-anim="fade-up" data-delay="100">Ready to <em>build?</em></h2>
    <p className="section-body" data-anim="fade-up" data-delay="200">Roles are launching as we grow. Register your interest now and we&apos;ll reach out when a position that fits your background opens.</p>
    <div data-anim="fade-up" data-delay="300" style={{display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap"}}>
      <Link href="/contact" className="btn btn-white"><span>Register Interest</span></Link>
    </div>
  </section>

  
      <style jsx>{`
    .page-hero {
      min-height: 65vh; display: flex; flex-direction: column; justify-content: flex-end;
      padding: calc(var(--nav-height) + 5rem) 5% 5rem;
      background: var(--black); border-bottom: 1px solid #1a1a1a; position: relative; overflow: hidden;
    }
    .page-hero h1 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(3rem, 7vw, 7rem); font-weight: 700;
      line-height: 0.93; letter-spacing: -0.03em; color: var(--white); margin-bottom: 2rem;
    }
    .page-hero h1 em { font-style: italic; font-weight: 300; color: #2a2a2a; }
    .page-hero-sub { font-size: 16px; color: #4a4a4a; max-width: 520px; line-height: 1.8; font-weight: 300; }

    /* WHY */
    .why-section { padding: 8rem 5%; background: var(--white); }
    .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8rem; }
    .why-reasons { margin-top: 3rem; }
    .why-item { padding: 1.5rem 0; border-bottom: 1px solid #e8e8e8; display: flex; gap: 1.5rem; }
    .why-icon { font-size: 1.3rem; flex-shrink: 0; margin-top: 2px; }
    .why-title { font-family: 'Space Grotesk', sans-serif; font-size: 15px; font-weight: 600; color: var(--black); margin-bottom: 4px; }
    .why-desc { font-size: 13px; color: var(--gray-500); line-height: 1.65; }
    .culture-quote {
      font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.5rem, 2.5vw, 2.2rem);
      font-weight: 400; line-height: 1.3; letter-spacing: -0.015em; color: var(--black);
      border-left: 3px solid var(--black); padding-left: 2rem;
    }

    /* DEPARTMENTS */
    .depts-section { padding: 8rem 5%; background: var(--gray-50); border-top: 1px solid #e8e8e8; }
    .dept-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: #e0e0e0; margin-top: 4rem; }
    .dept-card {
      background: var(--white); padding: 3rem 2.5rem;
      transition: background var(--transition), transform var(--transition);
      position: relative; overflow: hidden;
    }
    .dept-card::after {
      content: ''; position: absolute; bottom: 0; left: 0;
      width: 0; height: 3px; background: var(--black);
      transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
    }
    .dept-card:hover::after { width: 100%; }
    .dept-card:hover { background: #fafafa; }
    .dept-icon { font-size: 2rem; margin-bottom: 1.5rem; display: block; }
    .dept-name { font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 700; color: var(--black); margin-bottom: 0.5rem; }
    .dept-desc { font-size: 13px; color: var(--gray-400); line-height: 1.65; margin-bottom: 1.5rem; }
    .dept-status { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gray-300); }

    /* PROCESS */
    .process-section { padding: 8rem 5%; background: var(--white); border-top: 1px solid #e8e8e8; }
    .process-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3rem; margin-top: 4rem; position: relative; }
    .process-steps::before {
      content: ''; position: absolute; top: 24px; left: 10%; right: 10%;
      height: 1px; background: linear-gradient(to right, transparent, #e0e0e0 20%, #e0e0e0 80%, transparent);
    }
    .ps { text-align: center; }
    .ps-num {
      width: 48px; height: 48px; border: 1px solid #e0e0e0;
      display: flex; align-items: center; justify-content: center;
      font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--gray-400);
      background: var(--white); margin: 0 auto 1.5rem; position: relative; z-index: 1;
    }
    .ps-title { font-family: 'Space Grotesk', sans-serif; font-size: 15px; font-weight: 600; color: var(--black); margin-bottom: 0.5rem; }
    .ps-desc { font-size: 12.5px; color: var(--gray-400); line-height: 1.6; }

    /* CTA */
    .career-cta { padding: 8rem 5%; background: var(--black); text-align: center; }
    .career-cta .section-title { color: var(--white); margin: 0 auto 1.5rem; max-width: 600px; }
    .career-cta .section-body { color: #4a4a4a; margin: 0 auto 3rem; text-align: center; }

    @media (max-width: 1024px) {
      .dept-grid { grid-template-columns: 1fr 1fr; }
      .process-steps { grid-template-columns: 1fr 1fr; }
      .process-steps::before { display: none; }
    }
    @media (max-width: 768px) {
      .why-grid { grid-template-columns: 1fr; gap: 3rem; }
      .dept-grid { grid-template-columns: 1fr; }
      .process-steps { grid-template-columns: 1fr 1fr; }
    }
  `}</style>
    </>
  );
}
