"use client";

import { useEffect, useState } from "react";

const LOGO_URL = "https://www.phexara.co.uk/phexaraicon.png";
const VISION_STATEMENT = "Engineering Intelligent Systems for a Secure Digital Future";

// Official staff titles, matched regardless of which name is typed first,
// so everyone's signature stays consistent without needing to type it manually.
const STAFF_TITLES = [
  { names: ["benjamin", "daniel"], title: "Data Product Lead" },
  { names: ["stanley", "akingbola"], title: "Cybersecurity Specialist" },
  { names: ["anthony", "echem"], title: "ML Engineer" },
  { names: ["boluwatife", "oluwadare"], title: "UI/UX Designer" },
  { names: ["ezekiel", "chikezie"], title: "Software Engineer" },
  { names: ["okparanma", "shiloh"], title: "Digital Marketer" },
  { names: ["shiloh", "okparanma"], title: "Digital Marketer" },
  { names: ["joshua", "matthew"], title: "Data Analyst" },
  { names: ["matthew", "joshua"], title: "Data Analyst" },
];

function lookupTitle(first, last) {
  const a = first.trim().toLowerCase();
  const b = last.trim().toLowerCase();
  if (!a || !b) return null;
  const match = STAFF_TITLES.find((s) => s.names.includes(a) && s.names.includes(b));
  return match ? match.title : null;
}

// Real channels, "Follow Us" signpost. TikTok intentionally left out until
// a link is provided.
const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/phexara-ltd/",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#010101">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
      </svg>
    `,
  },
  {
    href: "https://x.com/Phexara_LTD",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#000000">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    `,
  },
  {
    href: "https://www.instagram.com/phexaraltd?igsh=MXJyZG5heGppbzgxMg==",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#040404">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    `,
  },
];

function buildSignatureHtml({ firstName, lastName, jobTitle, email }) {
  const first = firstName.trim() || "First";
  const last = lastName.trim() || "Last";
  const title = jobTitle.trim() || "Job Title";
  const mail = email.trim() || "name@phexara.co.uk";

const socialCells = SOCIAL_LINKS.map(
  (s) => `
    <td style="padding-right:8px;">
      <a href="${s.href}" target="_blank" style="text-decoration:none;display:inline-block;">
        ${s.icon}
      </a>
    </td>
  `
).join("");

  return `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, Helvetica, sans-serif; border-collapse: collapse;">
  <tr>
    <td style="padding-bottom: 2px;">
      <div style="font-size: 16px; font-weight: 700; c] line-height: 1.3;">${first} ${last}</div>
    </td>
  </tr>
  <tr>
    <td style="padding-bottom: 10px;">
      <div style="font-size: 13px; color: #5a5a5a; line-height: 1.3;">${title}</div>
    </td>
  </tr>
  <tr>
    <td style="padding-bottom: 8px;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-right: 8px;" valign="middle">
            <img src="${LOGO_URL}" width="22" height="22" alt="PHEXARA" style="display:block; border:0;" />
          </td>
          <td valign="middle">
            <div style="font-size: 13px; font-weight: 700; color: #0a0a0a; letter-spacing: 0.03em;">PHEXARA, LTD</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding-bottom: 12px; border-bottom: 1px solid #e0e0e0;">
      <div style="font-size: 11.5px; color: #8a8a8a; font-style: italic; line-height: 1.4; padding-bottom: 12px;">${VISION_STATEMENT}</div>
    </td>
  </tr>
  <tr>
    <td style="padding-top: 10px; padding-bottom: 10px;">
      <div style="font-size: 12px;">
        <a href="mailto:${mail}" style="color: #0a0a0a; text-decoration: none;">${mail}</a>
        &nbsp;|&nbsp;
        <a href="https://www.phexara.co.uk" style="color: #0a0a0a; text-decoration: none;">phexara.co.uk</a>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div style="font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: #999999; margin-bottom: 6px;">Follow Us</div>
      <table cellpadding="0" cellspacing="0" border="0"><tr>${socialCells}</tr></table>
    </td>
  </tr>
</table>`.trim();
}

export default function SignatureGeneratorContent() {
  const [form, setForm] = useState({ firstName: "", lastName: "", jobTitle: "", email: "" });
  const [copyStatus, setCopyStatus] = useState("idle"); // idle / copied / error
  const [showRaw, setShowRaw] = useState(false);

  const html = buildSignatureHtml(form);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  // Auto-fill the official job title once both names are typed and match
  // the staff list, so everyone's title stays consistent without typing it.
  useEffect(() => {
    const matchedTitle = lookupTitle(form.firstName, form.lastName);
    if (matchedTitle && form.jobTitle !== matchedTitle) {
      setForm((f) => ({ ...f, jobTitle: matchedTitle }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.firstName, form.lastName]);

  async function handleCopy() {
    try {
      const plain = html.replace(/<[^>]+>/g, "");
      const item = new ClipboardItem({
        "text/html": new Blob([html], { type: "text/html" }),
        "text/plain": new Blob([plain], { type: "text/plain" }),
      });
      await navigator.clipboard.write([item]);
      setCopyStatus("copied");
    } catch {
      const el = document.getElementById("sig-preview");
      const range = document.createRange();
      range.selectNodeContents(el);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      const ok = document.execCommand("copy");
      selection.removeAllRanges();
      setCopyStatus(ok ? "copied" : "error");
    }
    setTimeout(() => setCopyStatus("idle"), 3000);
  }

  return (
    <div className="wrap">
      <h1>PHEXARA Email Signature Generator</h1>
      <p className="sub">Type your name and email — your official job title fills in automatically. Then copy your signature into your email client&apos;s signature settings.</p>

      <div className="panel">
        <div className="row">
          <div>
            <label>First Name</label>
            <input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} placeholder="James" />
          </div>
          <div>
            <label>Last Name</label>
            <input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} placeholder="Okafor" />
          </div>
        </div>
        <label>Job Title (fills in automatically from your name)</label>
        <input value={form.jobTitle} onChange={(e) => update("jobTitle", e.target.value)} placeholder="Software Engineer" />
        <label>Email Address</label>
        <input value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jamesokafor@phexara.co.uk" />
      </div>

      <div className="panel">
        <div className="preview-label">Live Preview</div>
        <div className="preview-box">
          <div id="sig-preview" dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <div className="actions">
          <button className="btn" onClick={handleCopy}>
            {copyStatus === "copied" ? "Copied ✓" : copyStatus === "error" ? "Copy failed — try Show Raw HTML" : "Copy Signature"}
          </button>
          <button className="secondary" onClick={() => setShowRaw((v) => !v)}>Show/Copy Raw HTML</button>
        </div>

        <p className="hint">
          <strong>Gmail:</strong> Settings → See all settings → Signature → paste directly into the box.<br />
          <strong>Outlook (web/new):</strong> Settings → Mail → Compose and reply → Signature → paste directly.<br />
          <strong>Outlook (desktop):</strong> use &quot;Show/Copy Raw HTML&quot; and paste into the signature editor, or use the HTML import option if your version supports it.
        </p>

        {showRaw && <textarea className="raw" readOnly value={html} onFocus={(e) => e.target.select()} />}
      </div>

      <style jsx>{`
        .wrap { max-width: 720px; margin: 0 auto; padding: calc(var(--nav-height) + 3rem) 1.5rem 6rem; font-family: Arial, Helvetica, sans-serif; color: #0a0a0a; }
        h1 { font-size: 1.5rem; margin-bottom: 0.25rem; }
        .sub { color: #666; font-size: 14px; margin-bottom: 2rem; }
        .panel { background: #fff; border: 1px solid #e5e5e5; padding: 2rem; margin-bottom: 1.5rem; }
        label { display: block; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #666; margin-bottom: 6px; margin-top: 1rem; }
        label:first-child { margin-top: 0; }
        input {
          width: 100%; padding: 10px 12px; border: 1px solid #ddd; font-size: 14px; font-family: inherit;
        }
        .row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .preview-label { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #666; margin-bottom: 0.75rem; }
        .preview-box { border: 1px dashed #ccc; padding: 1.5rem; background: #fafafa; }
        .actions { display: flex; gap: 0.75rem; margin-top: 1.5rem; flex-wrap: wrap; }
        .btn {
          background: #0a0a0a; color: #fff; border: none; padding: 11px 20px;
          font-size: 13px; font-weight: 500; cursor: pointer; font-family: inherit;
        }
        button:hover { opacity: 0.85; }
        .secondary { background: #fff; color: #0a0a0a; border: 1px solid #ccc; }
        .hint { font-size: 12px; color: #888; margin-top: 1rem; line-height: 1.6; }
        .raw {
          width: 100%; height: 140px; font-family: monospace; font-size: 11px;
          padding: 12px; border: 1px solid #ddd; margin-top: 0.75rem; resize: vertical;
        }
      `}</style>
    </div>
  );
}