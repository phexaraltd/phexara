"use client";

import { useState } from "react";

const LOGO_URL = "https://www.phexara.co.uk/phexaraicon.png";

function buildSignatureHtml({ firstName, lastName, jobTitle, email }) {
  const first = firstName.trim() || "First";
  const last = lastName.trim() || "Last";
  const title = jobTitle.trim() || "Job Title";
  const mail = email.trim() || "name@phexara.co.uk";

  return `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, Helvetica, sans-serif; border-collapse: collapse;">
  <tr>
    <td style="padding-right: 16px; border-right: 1px solid #d9d9d9;" valign="middle">
      <img src="${LOGO_URL}" width="40" height="40" alt="PHEXARA" style="display:block; border:0;" />
    </td>
    <td style="padding-left: 16px;" valign="middle">
      <div style="font-size: 15px; font-weight: 700; color: #0a0a0a; line-height: 1.3;">${first} ${last}</div>
      <div style="font-size: 12px; color: #666666; letter-spacing: 0.02em; margin-top: 2px;">${title} &middot; PHEXARA, LTD</div>
      <div style="font-size: 12px; margin-top: 8px;">
        <a href="mailto:${mail}" style="color: #0a0a0a; text-decoration: none;">${mail}</a>
        &nbsp;|&nbsp;
        <a href="https://www.phexara.co.uk" style="color: #0a0a0a; text-decoration: none;">phexara.co.uk</a>
      </div>
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
      // Fallback for browsers that block the modern clipboard API:
      // select the rendered preview and use the older execCommand copy,
      // which works synchronously inside a click handler.
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
      <p className="sub">Fill in your details, then copy your signature into your email client&apos;s signature settings.</p>

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
        <label>Job Title</label>
        <input value={form.jobTitle} onChange={(e) => update("jobTitle", e.target.value)} placeholder="Business Development Manager" />
        <label>Email Address</label>
        <input value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="james@phexara.co.uk" />
      </div>

      <div className="panel">
        <div className="preview-label">Live Preview</div>
        <div className="preview-box">
          <div id="sig-preview" dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <div className="actions">
          <button onClick={handleCopy}>
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
        button {
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