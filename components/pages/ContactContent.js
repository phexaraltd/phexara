"use client";

import { useState } from "react";

export default function ContactContent() {
  const [submitState, setSubmitState] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitState("sending");
    setTimeout(() => {
      setSubmitState("sent");
      setTimeout(() => {
        setSubmitState("idle");
        e.target.reset();
      }, 3000);
    }, 1200);
  };

  const submitLabel =
    submitState === "sending" ? "Sending..." : submitState === "sent" ? "Message Sent ✓" : "Send Message";

  return (
    <>
<section className="contact-hero">
  <div style={{ position: "relative", zIndex: 1 }}>
    <p className="section-tag" data-anim="fade-up">Contact</p>
    <h1 data-anim="fade-up" data-delay="100">Let&apos;s build the<br />future <em>together</em></h1>
    <p className="contact-hero-sub" data-anim="fade-up" data-delay="200">Whether you&apos;re looking to partner, invest, commission a project, or explore what PHEXARA can build for your organization — we want to hear from you.</p>
  </div>
</section>

      <section className="contact-main dark-section">
        <div className="contact-grid">
          <div data-anim="fade-left">
           <span className="section-tag">Get in touch</span>
            <div style={{ marginTop: "1.5rem" }}>
              <a href="mailto:hello@phexara.com" className="ci-item" style={{ display: "flex", textDecoration: "none" }}>
                <span className="ci-key">General</span>
                <span className="ci-val"> info@phexara.co.uk</span>
              </a>
              <a href="mailto:partners@phexara.com" className="ci-item" id="partner" style={{ display: "flex", textDecoration: "none" }}>
                <span className="ci-key">Partnerships</span>
                <span className="ci-val">partners@phexara.co.uk</span>
              </a>
              <a href="mailto:investors@phexara.com" className="ci-item" id="investor" style={{ display: "flex", textDecoration: "none" }}>
                <span className="ci-key">Investors</span>
                <span className="ci-val">investors@phexara.co.uk</span>
              </a>
              <a href="mailto:media@phexara.com" className="ci-item" id="media" style={{ display: "flex", textDecoration: "none" }}>
                <span className="ci-key">Media</span>
                <span className="ci-val">media@phexara.co.uk</span>
              </a>
              <a href="mailto:careers@phexara.com" className="ci-item" style={{ display: "flex", textDecoration: "none", borderBottom: "none" }}>
                <span className="ci-key">Careers</span>
                <span className="ci-val"> recruitment@phexara.co.uk</span>
              </a>
            </div>
            <div className="inquiry-types" style={{ marginTop: "3.5rem" }}>
              <div className="it-label">Type of enquiry</div>
              <div className="it-grid">
                <div className="it-item">Business Inquiry</div>
                <div className="it-item">Enterprise Consultation</div>
                <div className="it-item">Strategic Partnership</div>
                <div className="it-item">Investor Relations</div>
                <div className="it-item">Media &amp; Press</div>
                <div className="it-item">Research Collaboration</div>
              </div>
            </div>
          </div>
          <div data-anim="fade-right">
           <span className="section-tag">Send a message</span>
            <form style={{ marginTop: "2rem" }} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-input" placeholder="James" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-input" placeholder="Okafor" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="james@company.com" required />
              </div>
              <div className="form-group">
                <label className="form-label">Organisation</label>
                <input type="text" className="form-input" placeholder="Company or institution name" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Country</label>
                  <input type="text" className="form-input" placeholder="United Kingdom" />
                </div>
                <div className="form-group">
                  <label className="form-label">Inquiry Type</label>
                  <select className="form-select" defaultValue="">
                    <option value="">Select type</option>
                    <option>Business Inquiry</option>
                    <option>Enterprise Consultation</option>
                    <option>Strategic Partnership</option>
                    <option>Investor Relations</option>
                    <option>Media &amp; Press</option>
                    <option>Research Collaboration</option>
                    <option>Careers</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Tell us what you're working on, what challenge you're solving, or how we can help..." required></textarea>
              </div>
              <button type="submit" className="form-submit" disabled={submitState !== "idle"} style={{ opacity: submitState === "sent" ? 0.6 : 1 }}>
                {submitLabel}
              </button>
              <p className="form-note">We respond to all enquiries within 2 business days. By submitting this form, you agree to our privacy policy.</p>
            </form>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="locations-section dark-section">
        <span className="section-tag" data-anim="fade-up">Locations</span>
        <h2 className="section-title" data-anim="fade-up" data-delay="100">Where we <em>operate</em></h2>
        <div className="loc-grid">
          <div className="loc-card" data-anim="fade-up">
            <div className="loc-region">Europe</div>
            <div className="loc-city">United Kingdom</div>
            <div className="loc-detail">Headquarters. Research, engineering, and corporate operations. Primary base for all PHEXARA activities.</div>
            <div className="loc-status hq"><span className="status-dot active"></span>Headquarters</div>
          </div>
          <div className="loc-card" data-anim="fade-up" data-delay="100">
            <div className="loc-region">Africa</div>
            <div className="loc-city">Nigeria</div>
            <div className="loc-detail">West Africa operations hub. Fintech, security, and digital infrastructure projects for the African market.</div>
            <div className="loc-status planned"><span className="status-dot"></span>Expansion Planned</div>
          </div>
          <div className="loc-card" data-anim="fade-up" data-delay="200">
            <div className="loc-region">Asia-Pacific</div>
            <div className="loc-city">Australia</div>
            <div className="loc-detail">APAC research collaboration and market entry. Targeting partnerships with leading Australian universities and enterprises.</div>
            <div className="loc-status planned"><span className="status-dot"></span>Expansion Planned</div>
          </div>
        </div>
      </section>

     <style jsx>{`
:global(body) { background: var(--white); }
.contact-hero {
  min-height: 45vh; display: flex; flex-direction: column; justify-content: flex-end;
  padding: calc(var(--nav-height) + 5rem) 5% 5rem;
  background: var(--white);
  position: relative; overflow: hidden;
  border-bottom: 1px solid #e8e8e8;
}
.contact-hero .section-tag { color: #C9A07E; }
.contact-hero h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3rem, 7vw, 7rem); font-weight: 700;
  line-height: 0.93; letter-spacing: -0.03em; color: var(--black); margin-bottom: 2rem;
  
}
.contact-hero h1 :global(em) { font-style: italic; font-weight: 300; color: #C9A07E; }
.contact-hero-sub { font-size: 16px; color: var(--gray-500); max-width: 520px; line-height: 1.8; font-weight: 300; }

.contact-main {
  padding: 7rem 5%;
  background: var(--white);
}
.contact-main .section-tag { color: #C9A07E; }

.contact-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 8rem; }

.ci-item { padding: 2rem 0; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; }
.ci-key { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A07E; font-weight: 600; }
.ci-val { font-size: 13px; color: var(--gray-500); transition: color var(--transition); }
.ci-val:hover { color: var(--black); }

.inquiry-types { margin-top: 4rem; }
.it-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A07E; font-weight: 600; margin-bottom: 1.5rem; }
.it-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
.it-item {
  padding: 1.2rem 1.5rem; border: 1px solid #e3e3e3; border-radius: 10px;
  font-size: 13px; color: var(--gray-600); transition: all var(--transition);
  cursor: pointer;
}
.it-item:hover { border-color: #C9A07E; color: var(--black); background: #faf7f2; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
.form-group { margin-bottom: 1.5rem; }
.form-label { display: block; font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gray-500); margin-bottom: 0.6rem; }
.form-input, .form-textarea, .form-select {
  width: 100%; background: var(--white); border: 1px solid #e0e0e0;
  border-radius: 8px; color: var(--black);
  font-family: inherit; font-size: 14px; padding: 14px 18px;
  outline: none; transition: border-color var(--transition); -webkit-appearance: none;
}
.form-input:focus, .form-textarea:focus, .form-select:focus { border-color: #C9A07E; }
.form-input::placeholder, .form-textarea::placeholder { color: #aaa; }
.form-select option { background: #fff; color: var(--black); }
.form-textarea { resize: vertical; min-height: 140px; }

.form-submit {
  width: 100%; background: var(--black); color: var(--white);
  border: none; border-radius: 8px; font-family: inherit; font-size: 12px; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; padding: 18px;
  cursor: pointer; transition: opacity var(--transition); margin-top: 0.5rem;
}
.form-submit:hover { opacity: 0.85; }
.form-note { font-size: 11px; color: var(--gray-400); margin-top: 1rem; line-height: 1.6; }

.locations-section {
  padding: 8rem 5%;
  background: #EDE9E1;
  border-top: none;
}
.locations-section :global(.section-tag) { color: #C9A07E; }
.locations-section :global(.section-title) { color: var(--black); }
.locations-section :global(.section-title) :global(em) { font-style: italic; font-weight: 300; color: #C9A07E; }

.loc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 4rem; background: transparent; }
.loc-card {
  background: var(--white); padding: 3rem 2.5rem;
  border: none; border-radius: 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.loc-card:hover { box-shadow: 0 12px 28px rgba(0,0,0,0.08); transform: translateY(-3px); }

.loc-region { font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; font-weight: 600; color: #C9A07E; margin-bottom: 1.5rem; }
.loc-city { font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 700; color: var(--black); margin-bottom: 0.5rem; letter-spacing: -0.02em; }
.loc-detail { font-size: 13px; color: var(--gray-500); line-height: 1.65; margin-top: 1rem; }

.loc-status { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; margin-top: 1.5rem; display: flex; align-items: center; gap: 8px; }
.loc-status .status-dot { width: 6px; height: 6px; border-radius: 50%; background: #ccc; flex-shrink: 0; }
.loc-status .status-dot.active { background: #3fae5c; }
.loc-status.hq { color: #B9825A; }
.loc-status.planned { color: var(--gray-500); }

@media (max-width: 1024px) {
  .contact-grid { grid-template-columns: 1fr; gap: 4rem; }
  .loc-grid { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .form-row { grid-template-columns: 1fr; gap: 0; }
  .it-grid { grid-template-columns: 1fr; }
}
`}</style>
    </>
  );
}
