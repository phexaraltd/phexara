"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function InsightsContent({ posts, categories }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const featured = useMemo(() => posts.find((p) => p.featured), [posts]);

  const rest = useMemo(() => {
    const remaining = posts.filter((p) => !featured || p.slug !== featured.slug);
    // Other featured posts (if more than one exists) still sort to the front
    // of the grid, same behaviour as /blog — just without the hero treatment,
    // which only fits one post at a time.
    return [...remaining].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [posts, featured]);

  const filtered = useMemo(
    () => (activeFilter === "All" ? rest : rest.filter((p) => p.category === activeFilter)),
    [rest, activeFilter]
  );

  const featuredYear = featured?.date ? new Date(featured.date).getFullYear() : "";

  return (
    <>

  <section className="page-hero">
    {/* <div className="grid-bg" style={{position: "absolute", inset: "0", pointerEvents: "none"}}></div> */}
    <div style={{position: "relative", zIndex: "1"}}>
      <p className="section-tag" data-anim="fade-up">Insights Hub</p>
      <h1 data-anim="fade-up" data-delay="100">Ideas from the<br /><em>frontier</em></h1>
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
        {featured && activeFilter === "All" && (
          <Link href={`/blog/${featured.slug}`} className="ins-featured" data-anim="fade-up">
            <div className="ins-featured-content">
              <div>
                <div className="ins-featured-label">Featured · {featured.category}</div>
                <div className="ins-featured-title">{featured.title}</div>
                <div className="ins-featured-excerpt">{featured.excerpt}</div>
                <span className="ins-featured-type">{featured.format}</span>
              </div>
            </div>
            <div className="ins-featured-visual">
              <div className="featured-visual-inner">
                <div className="fv-item"><div className="fv-val">{featured.category}</div><div className="fv-label">Category</div></div>
                <div className="fv-item"><div className="fv-val">{featured.format}</div><div className="fv-label">Format</div></div>
                <div className="fv-item"><div className="fv-val">{featured.author}</div><div className="fv-label">Author</div></div>
                <div className="fv-item"><div className="fv-val">{featuredYear}</div><div className="fv-label">Published</div></div>
              </div>
            </div>
          </Link>
        )}

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
            <div className="ins-meta"><span className="ins-type">{post.format}</span><span className="ins-arrow">↗</span></div>
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
.page-hero .section-tag { color: #C9A07E; }
.page-hero h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3rem, 7vw, 7rem); font-weight: 700;
  line-height: 0.93; letter-spacing: -0.03em; color: var(--black); margin-bottom: 2rem;
}
.page-hero h1 :global(em) { font-style: italic; font-weight: 300; color: #C9A07E; }

 .insights-section { padding: 6rem 5%; }

.ins-filters { display: flex; gap: 0.9rem; flex-wrap: wrap; margin-bottom: 4rem; }
.ins-filter {
  font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600;
  padding: 9px 20px; border: 1.5px solid #d8d0e0; border-radius: 999px; background: transparent;
  color: #333; cursor: pointer; transition: all var(--transition); font-family: inherit;
}
.ins-filter:hover { border-color: #7C1FB4; color: #7C1FB4; background: transparent; }
.ins-filter.active {
  border-color: transparent;
  background: linear-gradient(135deg, #7b2ff7 0%, #9b3fd6 100%);
  color: #fff;
}

.empty-state { color: var(--gray-400); font-size: 14px; padding: 4rem 0; text-align: center; }

.ins-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; background: transparent; }

:global(.ins-card) {
  background: var(--white); padding: 2rem;
  border-radius: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  transition: box-shadow 0.25s ease, transform 0.25s ease; cursor: pointer;
  display: flex; flex-direction: column; text-decoration: none;
  overflow: hidden;
}
:global(.ins-card:hover) { box-shadow: 0 12px 28px rgba(0,0,0,0.08); transform: translateY(-3px); background: var(--white); }
:global(.ins-card:hover .ins-title) { color: var(--black); }

.ins-cat { font-size: 9.5px; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 600; color: #C9A07E; margin-bottom: 1rem; }
.ins-cover {
  display: block; width: calc(100% + 4rem); aspect-ratio: 16/9;
  object-fit: cover; object-position: center;
  background: var(--gray-50);
  margin: -2rem -2rem 1.5rem;
}
.ins-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 700; color: var(--black); letter-spacing: -0.01em; line-height: 1.3; margin-bottom: 1rem; transition: color var(--transition); flex: 1; }
.ins-excerpt { font-size: 13px; color: var(--gray-500); line-height: 1.65; margin-bottom: 2rem; font-weight: 300; }
.ins-meta { display: flex; justify-content: space-between; align-items: center; padding-top: 1.5rem; border-top: 1px solid #eee; }
.ins-type {
  font-size: 9.5px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600;
  padding: 5px 14px; border: 1px solid #C9A07E; border-radius: 999px; color: #C9A07E;
}
.ins-arrow { font-size: 1rem; color: var(--gray-300); transition: all var(--transition); }
:global(.ins-card:hover .ins-arrow) { color: #C9A07E; transform: translate(3px,-3px); }

:global(.ins-featured) {
  grid-column: 1 / -1; display: grid; grid-template-columns: 1fr 1fr; gap: 0; text-decoration: none;
  border-radius: 18px; overflow: hidden;
}
.ins-featured-content {
  padding: 4rem;
  background: radial-gradient(ellipse 80% 80% at 20% 0%, #2a2016 0%, #1a1a1a 45%, #0d0d0d 100%);
  display: flex; flex-direction: column; justify-content: space-between;
}
.ins-featured-visual { background: #0e0e0e; min-height: 320px; display: flex; align-items: center; justify-content: center; }
.ins-featured-label { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 600; color: #C9A07E; margin-bottom: 1.5rem; }
.ins-featured-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.6rem; font-weight: 700; color: var(--white); letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1.5rem; }
.ins-featured-excerpt { font-size: 14px; color: #9a9a9a; line-height: 1.75; font-weight: 300; }
.ins-featured-type {
  font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600;
  padding: 6px 16px; border: 1px solid #C9A07E; border-radius: 999px; color: #f1e6d8; display: inline-block; margin-top: 2.5rem;
}

.featured-visual-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; padding: 3rem; width: 100%; }
.fv-item { border: 1px solid #2a2a2a; border-radius: 10px; padding: 1.5rem; text-align: center; }
.fv-val { font-family: 'Space Grotesk', sans-serif; font-size: 1.4rem; font-weight: 700; color: var(--white); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fv-label { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: #C9A07E; margin-top: 4px; }

@media (max-width: 1024px) { .ins-grid { grid-template-columns: 1fr 1fr; } :global(.ins-featured) { grid-template-columns: 1fr; } }
@media (max-width: 768px) { .ins-grid { grid-template-columns: 1fr; } }
  `}</style>
    </>
  );
}