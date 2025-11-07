// Component: FigmaFrame
// Renders a Figma-selected frame's main image. Default src points to the
// Figma preview asset URL captured earlier in this session. Replace the
// default `src` with a local licensed copy before committing to the repo.

import React from "react";

// Default points to a local public asset you can replace with your photo.
// Place your image at: frontend/public/figma-components/welcome.png
const DEFAULT_SRC = "/figma-components/welcome.png";

// Render a stylized welcome card that mirrors the selected Figma frame.
export default function FigmaFrame({
  src: propSrc,
  alt = "Welcome",
  title = "Welcome to SkateUp",
  body = "Ready to roll? Share your route, outfit, or favourite skating vibe 👇",
  credit,
}) {
  // Fallback sequence: explicit prop -> welcome.png -> welcome.svg -> DEFAULT_SRC
  const fallbacks = [
    propSrc,
    "/figma-components/welcome.png",
    "/figma-components/welcome.svg",
    DEFAULT_SRC,
  ].filter(Boolean);
  const [idx, setIdx] = React.useState(0);
  const src = fallbacks[idx] || DEFAULT_SRC;

  React.useEffect(() => {
    // if a new propSrc arrives, reset to start of sequence with that prop present
    if (propSrc) {
      const arr = [
        propSrc,
        "/figma-components/welcome.png",
        "/figma-components/welcome.svg",
        DEFAULT_SRC,
      ].filter(Boolean);
      // replace fallbacks array by updating idx to 0 and letting src recompute
      setIdx(0);
      // small debug
      console.debug("FigmaFrame: propSrc provided, will try:", arr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propSrc]);

  function handleImgError(e) {
    console.warn("FigmaFrame: image failed to load:", src, e?.type || "error");
    // advance to next fallback if available
    setIdx((i) => {
      const next = i + 1;
      if (next < fallbacks.length) {
        console.debug("FigmaFrame: falling back to", fallbacks[next]);
        return next;
      }
      console.debug("FigmaFrame: no more fallbacks, keeping", fallbacks[i]);
      return i;
    });
  }

  function handleImgLoad() {
    console.debug("FigmaFrame: image loaded successfully:", src);
  }

  return (
    <section className="welcome-card">
      <header className="welcome-card__header">
        <h2 className="welcome-card__title">{title}</h2>
      </header>

      <div className="welcome-card__image-wrap">
        <img
          src={src}
          alt={alt}
          className="welcome-card__image"
          onError={handleImgError}
          onLoad={handleImgLoad}
          data-testid="welcome-image"
        />
      </div>

      <div className="welcome-card__body">
        <p>{body}</p>
      </div>

      <div className="welcome-card__dots" aria-hidden>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {credit ? <div className="welcome-card__credit">{credit}</div> : null}
    </section>
  );
}
