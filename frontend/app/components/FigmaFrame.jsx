// Component: FigmaFrame
// Renders a Figma-selected frame's main image. Default src points to the
// Figma preview asset URL captured earlier in this session. Replace the
// default `src` with a local licensed copy before committing to the repo.

import React from "react";

const DEFAULT_SRC =
  "http://localhost:3845/assets/6756fc4d3db13994056940da14b92f0dcb39c1f7.png";

// Render a stylized welcome card that mirrors the selected Figma frame.
export default function FigmaFrame({
  src = DEFAULT_SRC,
  alt = "Welcome",
  title = "Welcome to SkateUp",
  body = "Ready to roll? Share your route, outfit, or favourite skating vibe 👇",
  credit,
}) {
  return (
    <section className="welcome-card">
      <header className="welcome-card__header">
        <h2 className="welcome-card__title">{title}</h2>
      </header>

      <div className="welcome-card__image-wrap">
        <img src={src} alt={alt} className="welcome-card__image" />
      </div>

      <div className="welcome-card__body">
        <p>{body}</p>
      </div>

      <div className="welcome-card__dots" aria-hidden>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {credit ? (
        <div className="welcome-card__credit">{credit}</div>
      ) : null}
    </section>
  );
}

