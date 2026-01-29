/**
 * Strict CSP template for nonce-based policy.
 * Placeholder: __CSP_NONCE__ — replace per-request (Worker) or at build (csp:local).
 * No unsafe-inline / unsafe-eval for scripts. style-src keeps 'unsafe-inline' for Tailwind.
 */
const CSP_TEMPLATE = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "script-src 'self' 'nonce-__CSP_NONCE__' https://www.googletagmanager.com https://connect.facebook.net https://www.googleadservices.com https://googleads.g.doubleclick.net",
  "script-src-elem 'self' 'nonce-__CSP_NONCE__' https://www.googletagmanager.com https://connect.facebook.net https://www.googleadservices.com https://googleads.g.doubleclick.net",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://www.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://connect.facebook.net",
  "img-src 'self' data: https:",
  "style-src 'self' https: 'unsafe-inline'",
  "font-src 'self' data: https:",
  "frame-src 'self' https://www.googletagmanager.com https://www.google.com",
  "manifest-src 'self'",
  "upgrade-insecure-requests"
].join("; ");

const PLACEHOLDER = "__CSP_NONCE__";

function buildCSP(nonce) {
  if (!nonce || typeof nonce !== "string") throw new Error("CSP nonce required");
  return CSP_TEMPLATE.split(PLACEHOLDER).join(nonce);
}

function generateNonce() {
  const crypto = require("crypto");
  const bytes = crypto.randomBytes(24);
  return bytes.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

module.exports = { CSP_TEMPLATE, PLACEHOLDER, buildCSP, generateNonce };
