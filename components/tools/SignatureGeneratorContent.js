"use client";

import { useEffect, useState } from "react";

const LOGO_URL = "https://www.phexara.co.uk/phexaraicon.png";
const VISION_STATEMENT = "Engineering Intelligent Systems for a Secure Digital Future";

// Official staff titles + emails, matched regardless of which name is typed
// first, so everyone's signature stays consistent without needing to type
// title or email manually.
const STAFF = [
  { names: ["benjamin", "daniel"], title: "Data Product Lead", email: "benjamin.daniel@phexara.co.uk" },
  { names: ["stanley", "akingbola"], title: "Cybersecurity Specialist", email: "stanley@phexara.co.uk" },
  { names: ["anthony", "echem"], title: "ML Engineer", email: "chukwunedumechem@phexara.co.uk" },
  { names: ["boluwatife", "oluwadare"], title: "UI/UX Designer", email: "boluwatifeoluwadare@phexara.co.uk" },
  { names: ["ezekiel", "chikezie"], title: "Software Engineer", email: "ezekielchikezie@phexara.co.uk" },
  { names: ["okparanma", "shiloh"], title: "Digital Marketer", email: "shilohokparanma@phexara.co.uk" },
  { names: ["shiloh", "okparanma"], title: "Digital Marketer", email: "shilohokparanma@phexara.co.uk" },
  { names: ["joshua", "matthew"], title: "Data Analyst", email: "joshuamatthew@phexara.co.uk" },
  { names: ["matthew", "joshua"], title: "Data Analyst", email: "joshuamatthew@phexara.co.uk" },
];

function lookupStaff(first, last) {
  const a = first.trim().toLowerCase();
  const b = last.trim().toLowerCase();
  if (!a || !b) return null;
  const match = STAFF.find((s) => s.names.includes(a) && s.names.includes(b));
  return match || null;
}

// Real channels, "Follow Us" signpost. TikTok intentionally left out until
// a link is provided.
// Uses the permanent production URL directly — same approach as LOGO_URL —
// so the icons work correctly in Gmail/Outlook even while testing on
// localhost, since these files are already deployed to the live site.
const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/phexara-ltd/",
    imgUrl: "https://www.phexara.co.uk/icons/linkedin-icon.png",
  },
  {
    href: "https://x.com/Phexara_LTD",
    imgUrl: "https://www.phexara.co.uk/icons/x-icon.png",
  },
  {
    href: "https://www.instagram.com/phexaraltd?igsh=MXJyZG5heGppbzgxMg==",
    imgUrl: "https://www.phexara.co.uk/icons/instagram-icon.png",
  },
];

function buildSignatureHtml({ firstName, lastName, jobTitle, email }) {
  const first = firstName.trim() || "First";
  const last = lastName.trim() || "Last";
  const title = jobTitle.trim() || "Job Title";
  const mail = email.trim() || "name@phexara.co.uk";

  const socialCells = SOCIAL_LINKS
    .map(
      (s) => `
    <td style="padding-right:14px;">
      <a href="${s.href}" target="_blank" style="text-decoration:none;display:inline-block;">
        <img src="${s.imgUrl}" width="16" height="16" alt="" style="display:block;border:0;" />
      </a>
    </td>
  `
    )
    .join("");

  return `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, Helvetica, sans-serif; border-collapse: collapse;">
  <tr>
    <td style="padding-bottom: 6px;">
      <div style="font-size: 16px; font-weight: 700; color: #0a0a0a; line-height: 1.3;">${first} ${last}</div>
    </td>
  </tr>
  <tr>
    <td style="padding-bottom: 14px;">
      <div style="font-size: 13px; color: #5a5a5a; line-height: 1.3;">${title}</div>
    </td>
  </tr>
  <tr>
    <td style="padding-bottom: 12px;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-right: 8px;" valign="middle">
            <img src="${LOGO_URL}" width="22" height="22" alt="PHEXARA" style="display:block; border:0;" />
          </td>
          <td valign="middle">
            <div style="font-size: 13px; font-weight: 700; color: #0a0a0a; letter-spacing: 0.03em;">PHEXARA</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding-bottom: 16px; border-bottom: 1px solid #e0e0e0;">
      <div style="font-size: 11.5px; color: #8a8a8a; font-style: italic; line-height: 1.4; padding-bottom: 16px;">${VISION_STATEMENT}</div>
    </td>
  </tr>
<tr>
    <td style="padding-top: 16px; padding-bottom: 16px;">
      <div style="font-size: 12px;">
        <a href="https://www.phexara.co.uk" style="color: #0a0a0a; text-decoration: none;">www.phexara.co.uk</a>
        &nbsp;|&nbsp;
        <a href="https://www.phexara.co.uk" style="color: #0a0a0a; text-decoration: none;">phexara.co.uk</a>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-right: 12px;" valign="middle">
            <div style="font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: #999999;">Follow Us</div>
          </td>
          <td valign="middle">
            <table cellpadding="0" cellspacing="0" border="0"><tr>${socialCells}</tr></table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`.trim();
}

export default function SignatureGeneratorContent() {
  const [form, setForm] = useState({ firstName: "", lastName: "", jobTitle: "", email: "" });
  const [copyStatus, setCopyStatus] = useState("idle"); // idle / copied / error
  const [showRaw, setShowRaw] = useState(false);

  // Tracks whether the person has manually typed their own job title/email.
  // Auto-fill only touches a field while it's untouched, so it never
  // clobbers something the person deliberately typed themselves.
  const [jobTitleTouched, setJobTitleTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const html = buildSignatureHtml(form);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function updateJobTitle(value) {
    setJobTitleTouched(true);
    setForm((f) => ({ ...f, jobTitle: value }));
  }

  function updateEmail(value) {
    setEmailTouched(true);
    setForm((f) => ({ ...f, email: value }));
  }

  // Auto-fill (or clear) the official job title and work email as the name
  // is typed. This always recomputes fresh from the current match — no
  // memory of "what was last filled in" — so it can never get stuck with a
  // stale value: match found → fills in; no match (or still typing) →
  // clears back to blank. Fields the person has manually edited themselves
  // are left alone.
  useEffect(() => {
    const match = lookupStaff(form.firstName, form.lastName);
    setForm((f) => {
      const next = { ...f };
      if (!jobTitleTouched) next.jobTitle = match ? match.title : "";
      if (!emailTouched) next.email = match ? match.email : "";
      return next;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.firstName, form.lastName, jobTitleTouched, emailTouched]);

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
        <input value={form.jobTitle} onChange={(e) => updateJobTitle(e.target.value)} placeholder="Software Engineer" />
        <label>Email Address (fills in automatically from your name)</label>
        <input value={form.email} onChange={(e) => updateEmail(e.target.value)} placeholder="jamesokafor@phexara.co.uk" />
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
}3