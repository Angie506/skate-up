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
          <div className="system-icons">
            {/* Signal bars */}
            <svg
              className="status-icon icon-signal"
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1" y="9" width="2" height="4" rx="0.4" fill="#fff" />
              <rect x="5" y="6" width="2" height="7" rx="0.4" fill="#fff" />
              <rect x="9" y="3" width="2" height="10" rx="0.4" fill="#fff" />
              <rect x="13" y="1" width="2" height="12" rx="0.4" fill="#fff" />
            </svg>

            {/* Wi‑Fi */}
            <svg
              className="status-icon icon-wifi"
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5c6-4 14-4 20 0"
                stroke="#fff"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 8c4-3 10-3 14 0"
                stroke="#fff"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 12c1-1 3-1 4.5 0"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Battery */}
            <svg
              className="status-icon icon-battery"
              width="30"
              height="14"
              viewBox="0 0 30 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="2"
                width="22"
                height="10"
                rx="2"
                stroke="#fff"
                strokeWidth="1.4"
                fill="none"
              />
              <rect x="24" y="4" width="3" height="6" rx="1" fill="#fff" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
