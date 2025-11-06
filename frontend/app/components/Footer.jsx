// @ts-nocheck
import React from "react";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="app-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo-boot" aria-hidden>🛼</div>
          <div className="site-title" style={{fontSize:14}}>Skate Up</div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <NavLink to="/" className={({ isActive }) => ["footer-link", isActive && "footer-link--active"].filter(Boolean).join(" ")}>Home</NavLink>
          <NavLink to="/routes" className={({ isActive }) => ["footer-link", isActive && "footer-link--active"].filter(Boolean).join(" ")}>Routes</NavLink>
          <NavLink to="/forecast" className={({ isActive }) => ["footer-link", isActive && "footer-link--active"].filter(Boolean).join(" ")}>Forecast</NavLink>
          <NavLink to="/you" className={({ isActive }) => ["footer-link", isActive && "footer-link--active"].filter(Boolean).join(" ")}>You</NavLink>
        </nav>

        <div className="footer-meta">
          <div className="footer-cta">
            <button className="btn-primary" type="button">Get the App</button>
          </div>
          <div className="footer-copy">© {new Date().getFullYear()} Skate Up — Design from Figma</div>
        </div>
      </div>
    </footer>
  );
}
