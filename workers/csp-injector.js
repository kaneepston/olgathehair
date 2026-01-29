/**
 * Cloudflare Worker: inject CSP nonce into HTML and set Content-Security-Policy header.
 * Deploy via Wrangler; run in front of static site (Pages / custom origin).
 * Use HTML placeholder __CSP_NONCE__ in meta CSP and inline script nonce attributes.
 */

const PLACEHOLDER = "__CSP_NONCE__";

const CSP_TEMPLATE = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "script-src 'self' 'nonce-" + PLACEHOLDER + "' https://www.googletagmanager.com https://connect.facebook.net https://www.googleadservices.com https://googleads.g.doubleclick.net",
  "script-src-elem 'self' 'nonce-" + PLACEHOLDER + "' https://www.googletagmanager.com https://connect.facebook.net https://www.googleadservices.com https://googleads.g.doubleclick.net",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://www.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://connect.facebook.net",
  "img-src 'self' data: https:",
  "style-src 'self' https: 'unsafe-inline'",
  "font-src 'self' data: https:",
  "frame-src 'self' https://www.googletagmanager.com https://www.google.com",
  "manifest-src 'self'",
  "upgrade-insecure-requests"
].join("; ");

function generateNonce() {
  const arr = new Uint8Array(24);
  crypto.getRandomValues(arr);
  const bin = String.fromCharCode.apply(null, arr);
  const b64 = btoa(bin);
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function isHtmlRequest(url) {
  const p = url.pathname;
  if (p.endsWith(".html")) return true;
  if (p === "/" || p === "/pl" || p === "/pl/" || p === "/en" || p === "/en/") return true;
  return false;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (!isHtmlRequest(url)) {
      if (env.ASSETS) return env.ASSETS.fetch(request);
      if (env.ORIGIN_URL) return fetch(new Request(env.ORIGIN_URL + url.pathname + url.search, request));
      return fetch(request);
    }

    let originReq = request;
    if (env.ORIGIN_URL) {
      originReq = new Request(env.ORIGIN_URL + url.pathname + url.search, { method: request.method, headers: request.headers });
    }
    const origin = env.ASSETS ? await env.ASSETS.fetch(request) : await fetch(originReq);
    if (!origin.ok) return origin;

    const ct = origin.headers.get("content-type") || "";
    if (!ct.includes("text/html")) return origin;

    let html = await origin.text();
    if (!html.includes(PLACEHOLDER)) return origin;

    const nonce = generateNonce();
    html = html.split(PLACEHOLDER).join(nonce);
    const csp = CSP_TEMPLATE.split(PLACEHOLDER).join(nonce);

    const headers = new Headers(origin.headers);
    headers.set("Content-Security-Policy", csp);

    return new Response(html, { status: origin.status, statusText: origin.statusText, headers });
  },
};
