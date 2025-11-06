// @ts-nocheck
import React from "react";
import { NavLink } from "react-router";
import FigmaFrame from "../components/FigmaFrame.jsx";
import Header from "../components/Header.jsx";

export default function Forecast() {
  return (
    <main className="chat-container">
      <div className="device-frame">
        <div className="device-inner">
          <Header />

          <div className="chat-thread-header">
            <h1>Forecast</h1>
            <nav className="routes-top-nav">
              <NavLink to="/" className={({ isActive }) => ["nav-link", isActive && "nav-link--active"].filter(Boolean).join(" ") }>
                Home
              </NavLink>
              <NavLink to="/routes" className={({ isActive }) => ["nav-link", isActive && "nav-link--active"].filter(Boolean).join(" ") }>
                Routes
              </NavLink>
              <NavLink to="/you" className={({ isActive }) => ["nav-link", isActive && "nav-link--active"].filter(Boolean).join(" ") }>
                You
              </NavLink>
            </nav>
          </div>

          <section className="forecast-hero" style={{ paddingTop: 16 }}>
            <div style={{ maxWidth: 360, margin: "0 auto" }}>
              <FigmaFrame
                title="Weather & Conditions"
                body={
                  "Check local skate-friendly conditions, wind, and surface updates so you can plan the perfect session."
                }
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
