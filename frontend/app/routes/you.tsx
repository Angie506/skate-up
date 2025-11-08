// @ts-nocheck
import React from "react";
import { NavLink } from "react-router";
import FigmaFrame from "../components/FigmaFrame.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import BottomNav from "../components/BottomNav.jsx";

export default function You() {
  return (
    <main className="chat-container">
      <div className="device-frame">
        <div className="device-inner">
          <Header />

          <div className="you-header" style={{ paddingTop: 12 }}>
            <div style={{ maxWidth: 360, margin: "0 auto", padding: "12px 16px" }}>
              <h1>You</h1>
            </div>
          </div>

          <section className="you-hero" style={{ paddingTop: 12 }}>
            <div style={{ maxWidth: 360, margin: "0 auto", padding: "0 12px 80px" }}>
              <article className="profile-card">
                <div className="profile-row">
                  <div className="profile-avatar-wrap">
                    <img className="profile-avatar" src="/figma-components/avatar.jpg" alt="Sofia Alvarez" onError={(e)=>{e.currentTarget.src='/figma-components/welcome.svg'}} />
                  </div>
                  <div className="profile-info">
                    <div className="profile-name">Sofia Alvarez</div>
                    <div className="profile-streak">🔥 21 days streak</div>
                  </div>
                  <div className="profile-actions">
                    <button className="icon-btn small" aria-label="notifications">🔔</button>
                    <button className="icon-btn small" aria-label="settings">⚙️</button>
                  </div>
                </div>

                <div className="badges-wrap">
                  <div className="badges-card">
                    <div className="badges-header">
                      <span>Your badges</span>
                      <a className="badges-details">Details ›</a>
                    </div>
                    <div className="badges-row">
                      <div className="badge">
                        <div className="badge-thumb" />
                        <div className="badge-label">Gold<br/>x3</div>
                      </div>
                      <div className="badge">
                        <div className="badge-thumb" />
                        <div className="badge-label">Silver<br/>x7</div>
                      </div>
                      <div className="badge">
                        <div className="badge-thumb" />
                        <div className="badge-label">Bronze<br/>x2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <h2 className="section-title">Community</h2>
              <div className="community-list">
                <div className="community-item">
                  <div className="community-thumb" />
                  <div className="community-title">Lessons</div>
                  <div className="community-action">›</div>
                </div>

                <div className="community-item">
                  <div className="community-thumb" />
                  <div className="community-title">Events</div>
                  <div className="community-action">›</div>
                </div>
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
