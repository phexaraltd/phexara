"use client";

import { useEffect, useState } from "react";

const CATEGORIES = ["AI Governance", "Cybersecurity", "Digital Twins", "Edge AI", "Smart Commerce", "Research"];
const FORMATS = ["Research Brief", "Technical Insight", "Perspective Paper", "Framework"];

const EMPTY_FORM = {
  originalSlug: "",
  slug: "",
  title: "",
  excerpt: "",
  category: CATEGORIES[0],
  format: FORMATS[0],
  author: "PHEXARA Team",
  date: new Date().toISOString().slice(0, 10),
  readTime: "5 min read",
  coverImage: "",
  featured: false,
  content: "",
};

export default function AdminContent() {
  const [authed, setAuthed] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [view, setView] = useState("list"); // "list" | "edit"
  const [status, setStatus] = useState(""); // saving / saved / error message
  const [imageUploadStatus, setImageUploadStatus] = useState("idle"); // idle / uploading / error
  const [imageUploadError, setImageUploadError] = useState("");

  async function loadPosts() {
    const res = await fetch("/api/admin/posts");
    if (res.status === 401) {
      setAuthed(false);
      return;
    }
    const data = await res.json();
    setPosts(data.posts || []);
    setAuthed(true);
  }

  useEffect(() => {
    loadPosts().finally(() => setCheckingAuth(false));
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    setLoginError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setPassword("");
      loadPosts();
    } else {
      const data = await res.json().catch(() => ({}));
      setLoginError(data.error || "Login failed");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setAuthed(false);
    setPosts([]);
  }

  function startNewPost() {
    setForm(EMPTY_FORM);
    setView("edit");
    setStatus("");
  }

  function startEditPost(post) {
    setForm({ ...EMPTY_FORM, ...post, originalSlug: post.slug });
    setView("edit");
    setStatus("");
  }

  async function handleImageSelect(e) {
    const file = e.target.files[0];
    if (!file) return;

    setImageUploadStatus("uploading");
    setImageUploadError("");

    const body = new FormData();
    body.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");
      setForm((f) => ({ ...f, coverImage: data.url }));
      setImageUploadStatus("idle");
    } catch (err) {
      setImageUploadStatus("error");
      setImageUploadError(err.message);
    }
  }

  async function handleSave(e) {
    e.preventDefault();
    setStatus("saving");
    const res = await fetch("/api/admin/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("saved");
      await loadPosts();
      setTimeout(() => {
        setView("list");
        setStatus("");
      }, 900);
    } else {
      const data = await res.json().catch(() => ({}));
      setStatus("error: " + (data.error || "could not save"));
    }
  }

  async function handleDelete(slug) {
    if (!confirm(`Delete "${slug}"? This can't be undone.`)) return;
    await fetch("/api/admin/posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    loadPosts();
  }

  if (checkingAuth) {
    return <div className="wrap"><p>Loading...</p><Style /></div>;
  }

  if (!authed) {
    return (
      <div className="wrap login-wrap">
        <form onSubmit={handleLogin} className="login-box">
          <h1>PHEXARA Admin</h1>
          <p className="sub">Enter the admin password to manage blog posts.</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          {loginError && <p className="error">{loginError}</p>}
          <button type="submit">Log In</button>
        </form>
        <Style />
      </div>
    );
  }

  if (view === "edit") {
    return (
      <div className="wrap">
        <div className="topbar">
          <button className="link-btn" onClick={() => setView("list")}>← Back to posts</button>
          <button className="link-btn" onClick={handleLogout}>Log out</button>
        </div>
        <form onSubmit={handleSave} className="post-form">
          <h1>{form.originalSlug ? "Edit Post" : "New Post"}</h1>

          <label>Title</label>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Post title"
            required
          />

          <label>URL Slug (leave blank to auto-generate from title)</label>
          <input
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            placeholder="my-post-title"
          />

          <label>Excerpt (shown on the blog listing card)</label>
          <textarea
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            rows={3}
          />

          <div className="row">
            <div>
              <label>Category</label>
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label>Format</label>
              <select value={form.format} onChange={(e) => setForm({ ...form, format: e.target.value })}>
                {FORMATS.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
          </div>

          <div className="row">
            <div>
              <label>Author</label>
              <input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
            </div>
            <div>
              <label>Date</label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </div>
            <div>
              <label>Read Time</label>
              <input value={form.readTime} onChange={(e) => setForm({ ...form, readTime: e.target.value })} />
            </div>
          </div>

          <label>Cover Image (optional)</label>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              onChange={handleImageSelect}
              disabled={imageUploadStatus === "uploading"}
            />
            {imageUploadStatus === "uploading" && (
              <p className="sub" style={{ margin: "0.5rem 0 0" }}>Uploading...</p>
            )}
            {imageUploadStatus === "error" && (
              <p className="error" style={{ margin: "0.5rem 0 0" }}>{imageUploadError}</p>
            )}
            {form.coverImage && imageUploadStatus !== "uploading" && (
              <div style={{ marginTop: "0.75rem" }}>
                <img
                  src={form.coverImage}
                  alt="Cover preview"
                  style={{ maxWidth: "220px", display: "block", border: "1px solid #ddd" }}
                />
                <button
                  type="button"
                  className="link-btn danger"
                  style={{ marginLeft: 0, marginTop: "0.5rem" }}
                  onClick={() => setForm({ ...form, coverImage: "" })}
                >
                  Remove image
                </button>
              </div>
            )}
          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => setForm({ ...form, featured: e.target.checked })}
            />
            Feature this post at the top of the blog page
          </label>

          <label>Content (Markdown — ## headings, **bold**, [link text](https://url), press Enter for a line break, blank line for a new paragraph. For a call-to-action button use [button: Label](https://url))</label>
          <textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            rows={16}
            required
            placeholder="## Section heading&#10;&#10;Write your post here...&#10;&#10;[button: Get More Info](https://phexara.co.uk/contact)"
          />

          <div className="actions">
            <button type="submit" disabled={status === "saving"}>
              {status === "saving" ? "Saving..." : status === "saved" ? "Saved ✓" : "Publish"}
            </button>
            {status.startsWith("error") && <span className="error">{status}</span>}
          </div>
        </form>
        <Style />
      </div>
    );
  }

  return (
    <div className="wrap">
      <div className="topbar">
        <h1>Blog Posts</h1>
        <div>
          <button onClick={startNewPost}>+ New Post</button>
          <button className="link-btn" onClick={handleLogout}>Log out</button>
        </div>
      </div>
      {posts.length === 0 && <p className="sub">No posts yet. Click "New Post" to create one.</p>}
      <div className="post-list">
        {posts.map((p) => (
          <div className="post-row" key={p.slug}>
            <div>
              <div className="post-row-title">{p.title}</div>
              <div className="post-row-meta">{p.category} · {p.date} {p.featured ? "· Featured" : ""}</div>
            </div>
            <div className="post-row-actions">
              <button className="link-btn" onClick={() => startEditPost(p)}>Edit</button>
              <button className="link-btn danger" onClick={() => handleDelete(p.slug)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <Style />
    </div>
  );
}

function Style() {
  return (
    <style jsx global>{`
      body { background: #f7f7f7 !important; cursor: auto !important; }
      #cursor, #cursor-follower, #loader, #page-transition, nav.nav, .mobile-menu, footer { display: none !important; }
      .wrap {
        max-width: 760px; margin: 0 auto; padding: 4rem 1.5rem 6rem;
        font-family: 'Inter', sans-serif; color: #0a0a0a;
      }
      .login-wrap { display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 0 1.5rem; }
      .login-box { width: 100%; max-width: 360px; background: #fff; padding: 2.5rem; border: 1px solid #e0e0e0; }
      .login-box h1 { font-family: 'Space Grotesk', sans-serif; font-size: 1.4rem; margin-bottom: 0.5rem; }
      .sub { color: #6a6a6a; font-size: 14px; margin-bottom: 1.5rem; }
      input, textarea, select {
        width: 100%; padding: 12px 14px; border: 1px solid #ddd; font-family: inherit;
        font-size: 14px; margin-bottom: 1rem; background: #fff; color: #0a0a0a;
      }
      textarea { resize: vertical; }
      label { display: block; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #666; margin-bottom: 6px; }
      .checkbox-label { display: flex; align-items: center; gap: 8px; text-transform: none; letter-spacing: 0; font-size: 14px; color: #333; }
      .checkbox-label input { width: auto; margin: 0; }
      button {
        background: #0a0a0a; color: #fff; border: none; padding: 12px 24px;
        font-family: inherit; font-size: 13px; font-weight: 500; cursor: pointer;
      }
      button:hover { opacity: 0.85; }
      button:disabled { opacity: 0.5; cursor: default; }
      .link-btn { background: none; color: #0a0a0a; text-decoration: underline; padding: 0; font-size: 13px; margin-left: 1rem; }
      .link-btn.danger { color: #b42318; }
      .error { color: #b42318; font-size: 13px; margin: -0.5rem 0 1rem; }
      .topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
      .topbar h1 { font-family: 'Space Grotesk', sans-serif; font-size: 1.6rem; }
      .post-list { background: #fff; border: 1px solid #e5e5e5; }
      .post-row { display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 1.5rem; border-bottom: 1px solid #eee; }
      .post-row:last-child { border-bottom: none; }
      .post-row-title { font-weight: 600; font-size: 14.5px; }
      .post-row-meta { font-size: 12px; color: #888; margin-top: 4px; }
      .post-form { background: #fff; border: 1px solid #e5e5e5; padding: 2.5rem; }
      .post-form h1 { font-family: 'Space Grotesk', sans-serif; font-size: 1.4rem; margin-bottom: 2rem; }
      .row { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; }
      .actions { display: flex; align-items: center; gap: 1rem; margin-top: 1rem; }
    `}</style>
  );
}