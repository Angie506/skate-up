// @ts-nocheck
import React from "react";
import { NavLink } from "react-router";
import FigmaFrame from "../components/FigmaFrame.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import BottomNav from "../components/BottomNav.jsx";

export default function Forecast() {
  return (
    <main className="chat-container">
      <div className="device-frame">
        <div className="device-inner">
          <Header />

          <div className="forecast-header" style={{ paddingTop: 12 }}>
            <div style={{ maxWidth: 360, margin: "0 auto" }}>
              <h1>Forecast</h1>
              <p className="forecast-sub">Plan your skating session</p>
            </div>
          </div>

          <section className="forecast-hero">
            <div className="forecast-cards" style={{ maxWidth: 360, margin: "0 auto" }}>
              <div className="weather-card" style={{ position: 'relative' }}>
                <div className="weather-card__left">
                  <div className="weather-day">Today</div>
                  <div className="weather-date">Oct 23</div>
                  <div className="weather-temp">18°C</div>
                  <div className="weather-wind"><span className="wind-icon">💨</span>12km/h</div>
                </div>
                <div className="weather-card__icon">
                  <div className="weather-icon-circle">☀️</div>
                </div>
              </div>

              <div className="weather-card" style={{ position: 'relative' }}>
                <div className="weather-card__left">
                  <div className="weather-day">Tomorrow</div>
                  <div className="weather-date">Oct 24</div>
                  <div className="weather-temp">16°C</div>
                  <div className="weather-wind"><span className="wind-icon">💨</span>12km/h</div>
                </div>
                <div className="weather-card__icon">
                  <div className="weather-icon-circle">☁️</div>
                </div>
              </div>
            </div>
            <div style={{ maxWidth: 360, margin: "0 auto", padding: "0 12px" }}>
              <div className="forecast-alert">Lovely day - no need for a jacket!</div>
            </div>
          </section>

          <section className="looks-section" style={{ paddingTop: 6 }}>
            <div style={{ maxWidth: 360, margin: "0 auto", padding: "0 12px 80px" }}>
              <h2 className="looks-title">✨ Skating looks for today</h2>

              <div className="looks-container">
                <div className="looks-grid-small">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div className="look-item" key={i}>
                      <div className="look-thumb" />
                      <button className="view-btn">View</button>
                    </div>
                  ))}
                </div>
                <div className="look-large">
                  <div className="look-large-thumb" />
                </div>
              </div>

              <h2 className="looks-title">✨ Skating looks for tomorrow</h2>

              <div className="looks-container">
                <div className="looks-grid-small">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div className="look-item" key={i}>
                      <div className="look-thumb" />
                      <button className="view-btn">View</button>
                    </div>
                  ))}
                </div>
                <div className="look-large">
                  <div className="look-large-thumb" />
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
