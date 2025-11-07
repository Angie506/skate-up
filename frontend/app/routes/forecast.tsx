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

          <div className="chat-thread-header">
            <h1>Forecast</h1>
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
          <BottomNav />
          <Footer />
        </div>
      </div>
    </main>
  );
}
