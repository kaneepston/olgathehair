# Caching Configuration

This project includes caching headers for optimal performance. The static assets (images, CSS, JS) are configured with long-term caching headers.

## Cache Headers

All static assets use: `Cache-Control: public, max-age=31536000, immutable`

This means:
- **public**: Can be cached by browsers and CDNs
- **max-age=31536000**: Cache for 1 year (31536000 seconds)
- **immutable**: Content won't change, so no revalidation needed

## Versioning

Static assets are versioned using query parameters:
- `styles.css?v=1.0.0`
- `script.js?v=1.0.0`
- `translations.js?v=1.0.0`

**Important**: When updating CSS or JS files, increment the version number to force browsers to fetch the new version.

## Platform-Specific Configuration

### Apache (.htaccess)
The `.htaccess` file configures caching for Apache servers.

### Netlify (_headers)
The `_headers` file configures caching for Netlify deployments.

### Vercel (vercel.json)
The `vercel.json` file configures caching for Vercel deployments.

### GitHub Pages
GitHub Pages doesn't support custom headers directly. Consider:
1. Using a CDN (Cloudflare, etc.) in front of GitHub Pages
2. Migrating to Netlify or Vercel for better control
3. Using a service worker for cache management

## Updating Assets

When you update CSS or JavaScript:
1. Change the version number in `index.html` (e.g., `?v=1.0.1`)
2. Commit and push the changes
3. Browsers will automatically fetch the new version
