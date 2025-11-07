// @ts-nocheck
import React from "react";
import { NavLink } from "react-router";
import FigmaFrame from "../components/FigmaFrame.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import BottomNav from "../components/BottomNav.jsx";

export default function Routes() {
  const [components, setComponents] = React.useState(null);

  React.useEffect(() => {
    // Try to load a manifest of downloaded Figma component SVGs
    fetch("/figma-components/manifest.json")
      .then((r) => {
        if (!r.ok) throw new Error("No manifest");
        return r.json();
      })
      .then((m) => setComponents(m))
      .catch(() => setComponents(null));
  }, []);

  return (
    <main className="chat-container">
      <div className="device-frame">
        <div className="device-inner">
          <Header />

          <div className="chat-thread-header">
            <h2>Routes</h2>
          </div>

          <section className="routes-hero" style={{ padding: "1rem" }}>
        {components === null ? (
          // No manifest or manifest missing: show the single FigmaFrame preview
          <FigmaFrame
            title="Explore Routes"
            body={
              "Browse and share favorite routes, spots, and sessions — pin your go-to lines and photos."
            }
          />
        ) : components.length === 0 ? (
          <p>No Figma components downloaded yet — run the fetch script to populate them.</p>
        ) : (
          <div className="figma-gallery" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "1rem" }}>
            {components.map((c) => (
              <figure key={c.filename} className="figma-card" style={{ background: "#fff", padding: "0.5rem", borderRadius: 12 }}>
                <img
                  src={`/figma-components/${c.filename}`}
                  alt={c.name}
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }}
                />
                <figcaption style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>{c.name}</figcaption>
              </figure>
            ))}
          </div>
        )}
          </section>
          <BottomNav />
          <Footer />
        </div>
      </div>
    </main>
  );
}
