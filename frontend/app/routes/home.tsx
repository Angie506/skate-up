// @ts-nocheck
import React from "react";
import { NavLink } from "react-router";
import { ChatMessages, ChatInput } from "../components/Chat.jsx";
import FigmaFrame from "../components/FigmaFrame.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const initialMessages = [];

export default function Home() {
  const [messages, setMessages] = React.useState(initialMessages);

  const addMessage = (content) => {
    const newMessage = { id: messages.length + 1, type: "user", content };
    setMessages([...messages, newMessage]);
  };

  return (
    <main className="chat-container">
      <div className="device-frame">
        <div className="device-inner">
          <Header />

          <header className="home-hero" style={{ textAlign: "center", padding: "0 16px" }}>
            <h1>Hi Sofia Alvarez</h1>
            <p style={{ color: "var(--text-muted)", marginTop: 8 }}>Welcome — preview of the selected Figma frame</p>
            <div style={{ maxWidth: 360, margin: "1rem auto" }}>
              <FigmaFrame credit="Preview image — replace with licensed asset" />
            </div>
            <nav className="routes-top-nav">
              <NavLink to="/routes" className={({ isActive }) => ["nav-link", isActive && "nav-link--active"].filter(Boolean).join(" ") }>
                Routes
              </NavLink>
              <NavLink to="/forecast" className={({ isActive }) => ["nav-link", isActive && "nav-link--active"].filter(Boolean).join(" ") }>
                Forecast
              </NavLink>
              <NavLink to="/you" className={({ isActive }) => ["nav-link", isActive && "nav-link--active"].filter(Boolean).join(" ") }>
                You
              </NavLink>
            </nav>
          </header>

          <ChatMessages messages={messages} />
          <ChatInput onAddMessage={addMessage} />
          <Footer />
        </div>
      </div>
    </main>
  );
}
