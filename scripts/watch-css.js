#!/usr/bin/env node
/**
 * Watch input.css, styles.css, tailwind.config.js and run build-css on change.
 */
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const root = path.join(__dirname, "..");
const files = ["input.css", "styles.css", "tailwind.config.js"].map((f) => path.join(root, f));

function run() {
  spawn("npm", ["run", "build-css"], { stdio: "inherit", cwd: root, shell: true });
}

files.forEach((f) => {
  try {
    fs.watch(f, () => run());
  } catch (_) {}
});
console.log("Watching input.css, styles.css, tailwind.config.js → build-css");
run();
