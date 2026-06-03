import { cp, mkdir, rm, copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import { execFileSync } from "node:child_process";

const requiredFiles = [
  "index.html",
  "src/App.js",
  "src/styles.css",
  "public/vendor/react.production.min.js",
  "public/vendor/react-dom.production.min.js",
];

for (const file of requiredFiles) {
  await access(file, constants.R_OK);
}

execFileSync(process.execPath, ["--check", "src/App.js"], { stdio: "inherit" });

await rm("dist", { recursive: true, force: true });
await mkdir("dist/public/vendor", { recursive: true });

await copyFile("index.html", "dist/index.html");
await cp("src", "dist/src", { recursive: true });
await cp("public/assets", "dist/public/assets", { recursive: true });
await copyFile("public/vendor/react.production.min.js", "dist/public/vendor/react.production.min.js");
await copyFile("public/vendor/react-dom.production.min.js", "dist/public/vendor/react-dom.production.min.js");

console.log("Static build completed: dist/");
