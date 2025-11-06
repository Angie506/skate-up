Figma integration helper
=======================

This small document explains how to export components from a Figma file into
this project using the bundled Node script `frontend/tools/figma-fetch.js`.

How it works
------------
- The script calls the Figma REST API to list components in a file, then
  requests SVG images for each component and saves them under
  `frontend/public/figma-components/`.
- Saved SVGs are accessible at `/figma-components/<filename>.svg` in the app.

Prerequisites
-------------
- Node 18+ (so `fetch` is available) or update the script to use `node-fetch`.
- A Figma Personal Access Token (create at https://www.figma.com/developers/api).
- The Figma file key (found in the file URL: `https://www.figma.com/file/<FILE_KEY>/...`).

Usage
-----
From your repository root run:

```bash
# example
cd frontend
node ../frontend/tools/figma-fetch.js <FIGMA_FILE_KEY> <FIGMA_PERSONAL_TOKEN>
```

Security
--------
- Never commit your Figma token to git. Use a temporary token for this script or
  store it in an environment variable and pass it as an argument.
- You can remove the token after running the script.

Next steps
----------
- After the SVGs are downloaded you can import them in React via an <img>
  tag (e.g. `/figma-components/my_component.svg`) or inline the SVG contents into
  a React component if you want to manipulate colors and shapes.

Manifest
--------
The fetch script now writes a `manifest.json` into `frontend/public/figma-components/` that looks like:

```json
[
  { "name": "My Component", "filename": "my_component--1234.svg", "node_id": "1234" }
]
```

The app's `Routes` page will attempt to load this manifest at runtime and render a gallery of the downloaded components. If `manifest.json` is missing or empty the page falls back to the original Figma preview card.
