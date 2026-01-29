#!/usr/bin/env node
/**
 * Local CSP nonce (meta fallback): replace __CSP_NONCE__ in HTML.
 * Run before serving locally so meta CSP + nonced inline scripts work.
 * Use fixed local nonce so csp:restore can revert. Production: Cloudflare Worker.
 */

const fs = require("fs");
const path = require("path");
const { PLACEHOLDER } = require("./csp-config.js");

const ROOT = path.join(__dirname, "..");
const LOCAL_NONCE = "local-dev-nonce";
const HTML_GLOBS = [
  "index.html",
  "terms-of-service.html",
  "privacy-policy.html",
  "pl/index.html",
  "pl/terms-of-service.html",
  "pl/privacy-policy.html",
  "en/index.html",
  "en/terms-of-service.html",
  "en/privacy-policy.html"
];

function replaceInFiles(from, to) {
  for (const rel of HTML_GLOBS) {
    const file = path.join(ROOT, rel);
    if (!fs.existsSync(file)) continue;
    let html = fs.readFileSync(file, "utf8");
    if (!html.includes(from)) continue;
    html = html.split(from).join(to);
    fs.writeFileSync(file, html, "utf8");
    console.log("[csp-nonce] Updated", rel);
  }
}

const cmd = process.argv[2];
if (cmd === "restore") {
  replaceInFiles(LOCAL_NONCE, PLACEHOLDER);
  console.log("[csp-nonce] Restored", PLACEHOLDER, "in HTML.");
} else {
  replaceInFiles(PLACEHOLDER, LOCAL_NONCE);
  console.log("[csp-nonce] Injected", LOCAL_NONCE, "for local testing. Run 'npm run csp:restore' to revert.");
}
