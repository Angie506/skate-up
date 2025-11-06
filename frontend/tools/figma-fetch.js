#!/usr/bin/env node
/**
 * figma-fetch.js
 *
 * Small utility to download all components from a Figma file as SVGs and save
 * them under `public/figma-components/`.
 *
 * Usage:
 *   node frontend/tools/figma-fetch.js <FIGMA_FILE_KEY> <FIGMA_PERSONAL_TOKEN>
 *
 * Notes:
 * - Requires Node.js 18+ (global fetch). If you have an older Node version,
 *   install node-fetch and update the script.
 * - The token should be a Figma Personal Access Token with `file_read` scope.
 * - This script does not commit anything; it writes files into the public
 *   folder so your app can reference them at runtime.
 */

import fs from "fs";
import path from "path";

const [, , FILE_KEY, TOKEN] = process.argv;

if (!FILE_KEY || !TOKEN) {
  console.error("Usage: node figma-fetch.js <FIGMA_FILE_KEY> <FIGMA_PERSONAL_TOKEN>");
  process.exit(1);
}

const OUT_DIR = path.resolve(process.cwd(), "frontend/public/figma-components");
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const API_BASE = "https://api.figma.com/v1";

async function fetchJson(url) {
  const res = await fetch(url, { headers: { Authorization: `Bearer ${TOKEN}` } });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
  return res.json();
}

async function download(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}`);
  const text = await res.text();
  fs.writeFileSync(destPath, text, "utf8");
}

async function run() {
  console.log("Fetching component list from Figma...");
  const comps = await fetchJson(`${API_BASE}/files/${FILE_KEY}/components`);

  const components = comps.meta?.components || comps.components || [];
  if (!components.length) {
    console.log("No components found in the Figma file.");
    return;
  }

  // Map node ids
  const ids = components.map((c) => c.node_id).join(",");
  console.log(`Found ${components.length} components. Requesting SVG images...`);

  const imagesRes = await fetchJson(
    `${API_BASE}/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=svg`,
  );

  const images = imagesRes.images || {};

  for (const comp of components) {
    const url = images[comp.node_id];
    if (!url) {
      console.warn(`No image url for ${comp.name} (${comp.node_id}), skipping.`);
      continue;
    }

    // Slugify name
    const safeName = comp.name.replace(/[^a-z0-9-_]/gi, "_").toLowerCase();
    const filename = `${safeName}--${comp.node_id}.svg`;
    const dest = path.join(OUT_DIR, filename);

    try {
      console.log(`Downloading ${comp.name} -> ${filename}`);
      await download(url, dest);
      // collect metadata for manifest
      manifest.push({ name: comp.name, filename, node_id: comp.node_id });
    } catch (err) {
      console.error(`Failed to download ${comp.name}:`, err.message);
    }
  }

  // Write a manifest so the app can discover available component SVGs at runtime
  try {
    const manifestPath = path.join(OUT_DIR, "manifest.json");
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
    console.log(`Wrote manifest to ${manifestPath}`);
  } catch (err) {
    console.warn("Failed to write manifest.json:", err.message);
  }

  console.log(`Completed. SVGs written to ${OUT_DIR}`);
}

run().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
