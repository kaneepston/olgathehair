# CSP nonce injector (Cloudflare Worker)

Inject a per-request CSP nonce into HTML and set the `Content-Security-Policy` header. No `unsafe-inline` / `unsafe-eval` for scripts.

## Setup

- HTML uses placeholder `__CSP_NONCE__` in the CSP meta and in `nonce="__CSP_NONCE__"` on inline `<script>` tags.
- The Worker replaces it with a random nonce and sends the same value in the CSP header.

## Deploy

### Option A: Worker on your domain (e.g. in front of Netlify/origin)

1. `npm install -g wrangler` then `wrangler login`.
2. In `wrangler.toml`, set `routes` for your zone, or add a route via Dashboard.
3. Set your origin fetch: either use a Custom Domain + Worker route, or Proxy flex + Worker. The Worker must `fetch` your static site (Netlify URL, etc.). If the Worker receives requests directly, `fetch(request)` will hit your configured origin.
4. From `workers/`: `npx wrangler deploy`.

### Option B: Cloudflare Pages

1. Deploy the site to Pages. Attach a Worker to the Pages project (Dashboard → Pages → your project → Settings → Functions & Worker).
2. Use this Worker as the attached Worker. Pages injects `env.ASSETS`; the Worker fetches from it, rewrites HTML, and returns the response with the CSP header.

### Option C: Transform Rules (no Worker)

You cannot inject a **per-request** nonce via Transform Rules alone (no response body modification). Use the Worker.

## Local testing (meta fallback)

Without the Worker, use the meta CSP and a fixed nonce:

```bash
npm run csp:local    # replace __CSP_NONCE__ with local-dev-nonce in HTML
# serve site locally, then:
npm run csp:restore  # restore __CSP_NONCE__ before committing
```

## Report-Only (optional)

To log violations before enforcing, use a Report-Only policy first. Add `Content-Security-Policy-Report-Only` with the same directive string (and `report-uri` or `report-to`), then switch to enforcing `Content-Security-Policy` once clean.

## Verification

1. Open Chrome DevTools → Console. Confirm no CSP violations for:
   - `https://connect.facebook.net/en_US/fbevents.js`
   - `https://www.google.com/ccm/collect`
   - `https://googleads.g.doubleclick.net/...`
2. DevTools → Network: verify GA/Ads/Meta requests (e.g. `collect`, `page_view`, pixel) fire after consent.
3. Accept cookies (GTM loads); reload and re-check Network for third-party script loads.
