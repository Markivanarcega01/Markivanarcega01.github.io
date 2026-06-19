# Portfolio Site

A static portfolio built with **Next.js 16** (static export) + **Tailwind CSS v4**, deployed free on **GitHub Pages**.

## Editing content

All content lives in plain data files — no need to touch the components:

- `src/data/site.ts` — your name, role, tagline, and social/resume links.
- `src/data/projects.ts` — one entry per deployed project (title, description, live URL, repo, tech stack, and resume-matching `metrics`).

Optional assets to drop in `public/`:

- `public/resume.pdf` — enables the "Resume" link.
- A screenshot per project (e.g. `public/projects/myapp.png`), then set `image` on that project.

## Develop locally

```bash
npm run dev      # http://localhost:3000
npm run build    # produces the static site in ./out
```

## Deploy to GitHub Pages

This site is configured for a **root** deployment (no `basePath`).

1. Create a GitHub repo named **`<your-username>.github.io`** (this exact name is required for root hosting; only one per account).
2. Push this project to its `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Every push to `main` runs `.github/workflows/deploy.yml`, which builds and publishes automatically.

Your site goes live at `https://<your-username>.github.io`.

> Using a normal repo instead (e.g. `username.github.io/portfolio-site`)? Add
> `basePath: "/portfolio-site"` to `next.config.ts` so CSS and images resolve correctly.
