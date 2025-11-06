// @ts-nocheck
import React from "react";
import { NavLink } from "react-router";
import FigmaFrame from "../components/FigmaFrame.jsx";
import Header from "../components/Header.jsx";

export default function You() {
  return (
    <main className="chat-container">
      <div className="device-frame">
        <div className="device-inner">
          <Header />

          <div className="chat-thread-header">
            <h1>You</h1>
            <nav className="routes-top-nav">
              <NavLink to="/" className={({ isActive }) => ["nav-link", isActive && "nav-link--active"].filter(Boolean).join(" ") }>
                Home
              </NavLink>
              <NavLink to="/routes" className={({ isActive }) => ["nav-link", isActive && "nav-link--active"].filter(Boolean).join(" ") }>
                Routes
              </NavLink>
              <NavLink to="/forecast" className={({ isActive }) => ["nav-link", isActive && "nav-link--active"].filter(Boolean).join(" ") }>
                Forecast
              </NavLink>
            </nav>
          </div>

          <section className="you-hero" style={{ paddingTop: 16 }}>
            <div style={{ maxWidth: 360, margin: "0 auto" }}>
              <FigmaFrame
                title="Your Profile"
                body={"Manage your profile, preferences, and saved routes — keep your skating identity up to date."}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
