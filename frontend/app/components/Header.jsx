import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="app-header" role="banner" aria-label="App header">
      <div className="header-inner">
        <div className="status-left" aria-hidden>
          <span className="status-time">8:15</span>
        </div>

        {/* title removed per request - header now shows status areas only */}

        <div className="status-right" aria-hidden>
          <svg
            className="status-icon"
            width="18"
            height="12"
            viewBox="0 0 24 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="3"
              width="18"
              height="6"
              rx="1"
              stroke="#fff"
              strokeWidth="1.2"
              fill="none"
            />
            <rect x="20" y="5" width="2" height="2" rx="0.4" fill="#fff" />
          </svg>
          <svg
            className="status-icon"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9C4 6 7 5 10 5"
              stroke="#fff"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
