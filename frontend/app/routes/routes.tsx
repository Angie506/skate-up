// @ts-nocheck
import React from "react";
import { NavLink } from "react-router";
import FigmaFrame from "../components/FigmaFrame.jsx";
import AarhusMap from "../components/AarhusMap.jsx";
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

          {/* Title removed per user request - keep header area clean for map preview */}

          <section className="routes-hero" style={{ padding: 0 }}>
            <div className="map-container">
              {/* Map background: prefer a figma-exported map, fall back to welcome svg */}
              <AarhusMap className="map-image" />

              {/* Floating Create Route button */}
              <button className="create-route-btn" aria-label="Create Route">
                <span className="create-route-icon">✚</span>
                <span className="create-route-label">Create Route</span>
              </button>

              {/* Bottom overlay card with route preview */}
              <div className="route-card-overlay">
                <article className="route-card">
                  <img
                    className="route-thumb"
                    src="/figma-components/route-thumb.png"
                    alt="Aarhus 1900 Inline"
                    onError={(e) => { e.currentTarget.src = '/figma-components/welcome.svg'; }}
                  />
                  <div className="route-info">
                    <h3 className="route-title">Aarhus 1900 Inline</h3>
                    <div className="route-meta">
                      <span className="route-difficulty">Easy</span>
                      <span className="route-stats">60,3 km · 40 min</span>
                    </div>
                    <div className="route-location">Aarhus Municipality, Central Denmark Region</div>
                    <a className="route-made">Made for you</a>
                  </div>
                </article>
              </div>

              {/* Bottom handle and count bar (above bottom nav) */}
              <div className="route-count-bar">
                <div className="route-handle" aria-hidden></div>
                <div className="route-count">5 routes</div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
        <BottomNav />
      </div>
    </main>
  );
}
