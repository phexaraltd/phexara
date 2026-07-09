# PHEXARA — Next.js site

This is the PHEXARA marketing site rebuilt in Next.js (App Router, JavaScript),
converted from the original static HTML/CSS/JS export.

## What changed vs. the static site

- **Routing**: `pages/about.html` → `/about`, `pages/contact.html` → `/contact`, etc.
  (extensionless routes are the Next.js convention and are better for SEO than `.html`).
  Internal links now use `next/link` for fast client-side navigation.
- **Shared chrome**: the nav, footer, loader, custom cursor, and page-transition
  overlay that `js/components.js` used to inject via `innerHTML` are now real React
  components in `components/` and live in `app/layout.js`, so they persist across
  navigations instead of being re-injected on every page load.
- **Per-page behaviour**: things like the projects filter buttons, the contact
  form, the solutions scroll-spy nav, and the animated progress bars were
  rewritten from imperative DOM scripts into small React state / `useEffect`
  hooks (`components/pages/*Content.js`), but the markup, copy, classnames and
  CSS are preserved as closely as possible.
- **Styling**: `css/main.css` → `app/globals.css` (unchanged, still the design
  system, fonts loaded via the same Google Fonts `@import`). Each page's
  `<style>` block is now scoped with `styled-jsx` (built into Next.js) so pages
  can reuse class names without colliding.
- **Metadata**: every route now has a real `<title>` and meta description via
  Next's Metadata API (`export const metadata`), which is better for SEO than
  the original (most sub-pages had no description at all).

## Structure

```
app/
  layout.js          Root layout: fonts, metadata, shared chrome
  page.js             /
  about/page.js       /about
  careers/page.js     /careers
  contact/page.js     /contact
  industries/page.js  /industries
  insights/page.js    /insights
  projects/page.js    /projects
  research/page.js    /research
  solutions/page.js   /solutions
  globals.css
components/
  Header.js, Footer.js, Loader.js, CustomCursor.js,
  PageTransition.js, SiteEffects.js, NeuralCanvas.js
  pages/*Content.js   per-page client components (markup + styled-jsx + state)
```

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production build
```

No environment variables or external services are required — it's a static
marketing site with a couple of client-only forms (contact, project-notify)
that currently simulate a send rather than calling a real API. Wire those up
to your email/CRM provider of choice when you're ready.
