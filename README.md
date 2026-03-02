# Website Source of Truth

This repository stores all planning, content, branding, and technical information for the company website.

## Structure

- `docs/01-project-brief.md`: Business goals, audience, and success metrics
- `docs/02-sitemap.md`: Site architecture and page-level CTAs
- `docs/03-brand-guidelines.md`: Brand voice, colors, typography, references
- `docs/04-content.md`: Final website copy by page/section
- `docs/05-seo.md`: Keywords, metadata, and schema planning
- `docs/06-integrations.md`: Forms, analytics, CRM, and third-party tools
- `docs/07-lovable-handoff.md`: Build notes for Lovable implementation
- `docs/08-launch-checklist.md`: Pre-launch quality and go-live checks
- `assets/`: Logos, images, brand files, downloadable media

## Suggested workflow

1. Fill `01` and `02` first (strategy and structure).
2. Complete `03` and `04` (brand + copy).
3. Add tracking/integration details in `05` and `06`.
4. Finalize implementation notes in `07`.
5. Validate launch readiness with `08`.

## GitHub setup

After adding your content, run:

```bash
git add .
git commit -m "Initial website information repository"
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

