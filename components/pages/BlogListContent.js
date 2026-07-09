"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function BlogListContent({ posts, categories }) {
  const [activeFilter, setActiveFilter] = useState("All");

  // Featured posts simply sort to the front — same card, same size,
  // no special treatment. Order among featured posts and among
  // non-featured posts otherwise stays as passed in (newest first).
  const sorted = useMemo(
    () => [...posts].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)),
    [posts]
  );

  const filtered = useMemo(
    () => (activeFilter === "All" ? sorted : sorted.filter((p) => p.category === activeFilter)),
    [sorted, activeFilter]
  );

  return (
    <>
      <section className="page-hero">
        <div className="grid-bg" style={{ position: "absolute", inset: "0", pointerEvents: "none" }}></div>
        <div style={{ position: "relative", zIndex: "1" }}>
          <p className="section-tag" data-anim="fade-up">Blog</p>
          <h1 data-anim="fade-up" data-delay="100">Updates from the<br /><em>frontier</em></h1>
        </div>
      </section>

      <section className="insights-section">
        <div className="ins-filters" data-anim="fade-up">
          {categories.map((f) => (
            <button
              key={f}
              className={`ins-filter${activeFilter === f ? " active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {posts.length === 0 ? (
          <p className="empty-state">No posts yet — check back soon.</p>
        ) : (
          <div className="ins-grid">
            {filtered.map((post, i) => (
              <Link
                href={`/blog/${post.slug}`}
                className="ins-card"
                key={post.slug}
                data-anim="fade-up"
                data-delay={String((i % 3) * 100)}
              >
                {post.coverImage && (
                  <img src={post.coverImage} alt="" className="ins-cover" />
                )}
                <div className="ins-cat">{post.featured ? `Featured · ${post.category}` : post.category}</div>
                <div className="ins-title">{post.title}</div>
                <div className="ins-excerpt">{post.excerpt}</div>
                <div className="ins-meta">
                  <span className="ins-type">{post.format}</span>
                  <span className="ins-arrow">↗</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <style jsx>{`
        .page-hero {
          min-height: 50vh; display: flex; flex-direction: column; justify-content: flex-end;
          padding: calc(var(--nav-height) + 5rem) 5% 5rem;
          background: var(--white); border-bottom: 1px solid #e8e8e8; position: relative; overflow: hidden;
        }
        .page-hero h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(3rem, 7vw, 7rem); font-weight: 700;
          line-height: 0.93; letter-spacing: -0.03em; color: var(--black); margin-bottom: 2rem;
        }
        .page-hero h1 :global(em) { font-style: italic; font-weight: 300; color: var(--gray-400); }

        .insights-section { padding: 6rem 5%; }
        .ins-filters { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 4rem; }
        .ins-filter {
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 7px 18px; border: 1px solid #e0e0e0; background: transparent;
          color: var(--gray-500); cursor: pointer; transition: all var(--transition); font-family: inherit;
        }
        .ins-filter.active, .ins-filter:hover { background: var(--black); color: var(--white); border-color: var(--black); }
        .empty-state { color: var(--gray-400); font-size: 14px; padding: 4rem 0; text-align: center; }
        .ins-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: #e8e8e8; }
        :global(.ins-card) {
          background: var(--white); padding: 3rem 2.5rem;
          transition: background var(--transition); cursor: pointer;
          display: flex; flex-direction: column; text-decoration: none;
          overflow: hidden;
        }
        :global(.ins-card:hover) { background: var(--gray-50); }
        :global(.ins-card:hover .ins-title) { color: var(--black); }
        .ins-cat { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gray-400); margin-bottom: 1rem; }
        .ins-cover {
          display: block; width: calc(100% + 5rem); aspect-ratio: 16/9;
          object-fit: contain; object-position: center;
          background: var(--gray-50);
          margin: 0 -2.5rem 1.5rem;
        }
        .ins-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 600; color: var(--gray-600); letter-spacing: -0.01em; line-height: 1.3; margin-bottom: 1rem; transition: color var(--transition); flex: 1; }
        .ins-excerpt { font-size: 13px; color: var(--gray-400); line-height: 1.65; margin-bottom: 2rem; font-weight: 300; }
        .ins-meta { display: flex; justify-content: space-between; align-items: center; padding-top: 1.5rem; border-top: 1px solid #e8e8e8; }
        .ins-type { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; padding: 4px 12px; border: 1px solid #e0e0e0; color: var(--gray-400); }
        .ins-arrow { font-size: 1rem; color: var(--gray-300); transition: all var(--transition); }
        :global(.ins-card:hover .ins-arrow) { color: var(--black); transform: translate(3px,-3px); }

        @media (max-width: 1024px) { .ins-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 768px) { .ins-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}