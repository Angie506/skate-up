import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="logo-wrap" aria-hidden>
          <div className="logo-boot">🛼</div>
        </div>
        <div className="site-title">SkateUp</div>
      </div>
    </header>
  );
}
