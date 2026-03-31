

## Update Sitemap and Robots.txt to Use Custom Domain

### What will change

Both `public/sitemap.xml` and `public/robots.txt` currently reference the Lovable subdomain (`corex-operate-strong.lovable.app`). This means search engines following the sitemap are seeing the wrong domain, which hurts SEO.

### Changes

**1. `public/sitemap.xml`**
- Replace all instances of `https://corex-operate-strong.lovable.app` with `https://www.corexoperations.com` across all 16 URL entries
- Update all `lastmod` dates from `2025-02-05` to `2026-02-22` to signal fresh content

**2. `public/robots.txt`**
- Update the Sitemap directive from `https://corex-operate-strong.lovable.app/sitemap.xml` to `https://www.corexoperations.com/sitemap.xml`

### After publishing
Once published, your sitemap will be accessible at `https://www.corexoperations.com/sitemap.xml` and search engines will be directed to the correct domain.
