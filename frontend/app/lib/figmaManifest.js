// Cached loader for /figma-components/manifest.json
// Ensures we only fetch once and returns null if not present.
export function getFigmaManifest() {
  // cache on window to survive HMR reloads
  const win = typeof window !== 'undefined' ? window : {};
  if (win.__FIGMA_MANIFEST__) return Promise.resolve(win.__FIGMA_MANIFEST__);
  if (win.__FIGMA_MANIFEST_PROMISE__) return win.__FIGMA_MANIFEST_PROMISE__;

  win.__FIGMA_MANIFEST_PROMISE__ = fetch('/figma-components/manifest.json')
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null)
    .then((m) => {
      win.__FIGMA_MANIFEST__ = m;
      return m;
    });

  return win.__FIGMA_MANIFEST_PROMISE__;
}
