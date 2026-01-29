#!/usr/bin/env node
/**
 * Append styles.css to styles-tailwind.css so we ship one CSS file.
 * Run after tailwind build: build-css runs tailwind then this.
 */
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const tailwindPath = path.join(root, "styles-tailwind.css");
const customPath = path.join(root, "styles.css");

const tailwind = fs.readFileSync(tailwindPath, "utf8");
const custom = fs.readFileSync(customPath, "utf8");
fs.writeFileSync(tailwindPath, tailwind + "\n" + custom, "utf8");
console.log("[merge-css] Appended styles.css → styles-tailwind.css");
