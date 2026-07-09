"use client";

import Link from "next/link";

const DATE_FMT = { year: "numeric", month: "long", day: "numeric" };

export default function BlogPostContent({ post, contentHtml, related }) {
  const dateLabel = post.date
    ? new Date(post.date).toLocaleDateString("en-GB", DATE_FMT)
    : "";

  return (
    <>
      <section className="post-hero">
        <div className="grid-bg-dark grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Link href="/blog" className="back-link">← Back to Blog</Link>
          <p className="post-cat">{post.category}{post.format ? ` · ${post.format}` : ""}</p>
          <h1>{post.title}</h1>
          <div className="post-meta">
            {post.author && <span>{post.author}</span>}
            {dateLabel && <span>{dateLabel}</span>}
            {post.readTime && <span>{post.readTime}</span>}
          </div>
        </div>
      </section>

      {post.coverImage && (
        <div className="post-cover-wrap">
          <img src={post.coverImage} alt="" className="post-cover" />
        </div>
      )}

      <section className="post-body-section">
        <article className="post-body" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <div className="post-cta">
          <p>Want to talk about how this applies to your organisation?</p>
          <Link href="/contact" className="btn btn-filled"><span>Contact Us</span></Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="related-section">
          <p className="section-tag">Related</p>
          <h2 className="section-title">More from <em>{post.category}</em></h2>
          <div className="related-grid">
            {related.map((r) => (
              <Link href={`/blog/${r.slug}`} key={r.slug} className="related-card">
                <div className="related-cat">{r.category}</div>
                <div className="related-title">{r.title}</div>
                <div className="related-arrow">↗</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <style jsx>{`
        :global(.back-link) {
          display: inline-block; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: #4a4a4a; margin-bottom: 2.5rem; text-decoration: none; transition: color var(--transition);
        }
        :global(.back-link:hover) { color: var(--white); }
        .post-hero {
          min-height: 45vh; display: flex; flex-direction: column; justify-content: flex-end;
          padding: calc(var(--nav-height) + 5rem) 5% 5rem;
          background: var(--black); position: relative; overflow: hidden;
        }
        .post-cat { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #3a3a3a; margin-bottom: 1.5rem; }
        .post-hero h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.2rem, 5vw, 4rem); font-weight: 700;
          line-height: 1.08; letter-spacing: -0.02em; color: var(--white); margin-bottom: 2rem; max-width: 900px;
        }
        .post-meta { display: flex; gap: 1.5rem; flex-wrap: wrap; font-size: 12.5px; color: #5a5a5a; }

        .post-cover-wrap { max-width: 900px; margin: 0 auto; padding: 3rem 5% 0; }
        .post-cover { width: 100%; aspect-ratio: 21/9; object-fit: contain; object-position: center; background: var(--gray-50); display: block; }

        .post-body-section { padding: 6rem 5%; max-width: 760px; margin: 0 auto; }
        .post-body :global(h2) {
          font-family: 'Space Grotesk', sans-serif; font-size: 1.6rem; font-weight: 700;
          letter-spacing: -0.015em; color: var(--black); margin: 3rem 0 1.25rem;
        }
        .post-body :global(h2:first-child) { margin-top: 0; }
        .post-body :global(p) { font-size: 16px; line-height: 1.85; color: var(--gray-600); font-weight: 300; margin-bottom: 1.5rem; }
        .post-body :global(ul), .post-body :global(ol) { margin: 0 0 1.5rem 1.25rem; }
        .post-body :global(li) { font-size: 16px; line-height: 1.85; color: var(--gray-600); font-weight: 300; margin-bottom: 0.5rem; }
        .post-body :global(strong) { font-weight: 600; color: var(--black); }
        .post-body :global(a) { color: var(--black); text-decoration: underline; }

        .post-cta {
          margin-top: 4rem; padding-top: 3rem; border-top: 1px solid #e8e8e8;
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem;
        }
        .post-cta p { font-size: 15px; color: var(--gray-500); }

        .related-section { padding: 6rem 5% 8rem; background: var(--gray-50); border-top: 1px solid #e8e8e8; }
        .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: #e8e8e8; margin-top: 3rem; }
        :global(.related-card) {
          background: var(--white); padding: 2.5rem 2rem; text-decoration: none;
          display: flex; flex-direction: column; gap: 1rem; transition: background var(--transition);
        }
        :global(.related-card:hover) { background: var(--white); }
        .related-cat { font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gray-400); }
        .related-title { font-family: 'Space Grotesk', sans-serif; font-size: 1rem; font-weight: 600; color: var(--gray-600); line-height: 1.35; flex: 1; }
        .related-arrow { font-size: 1rem; color: var(--gray-300); }

        @media (max-width: 768px) {
          .related-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}