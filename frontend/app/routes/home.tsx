// @ts-nocheck
import React from "react";
import Header from "../components/Header.jsx";
// NavLink removed from Home; footer contains the site links
import { ChatMessages, ChatInput } from "../components/Chat.jsx";
import FigmaFrame from "../components/FigmaFrame.jsx";
import Footer from "../components/Footer.jsx";
import BottomNav from "../components/BottomNav.jsx";
import PostCard from "../components/PostCard.jsx";
import { mockPosts } from "../lib/mockPosts";

const initialMessages = [];


export default function Home() {
  const [messages, setMessages] = React.useState(initialMessages);
  const [fabSvg, setFabSvg] = React.useState(null);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const [composerOpen, setComposerOpen] = React.useState(false);

  const addMessage = (content) => {
    const newMessage = { id: messages.length + 1, type: "user", content };
    setMessages([...messages, newMessage]);
  };

  // Try to load a FAB icon exported from Figma (manifest populated by tools/figma-fetch.js)
  React.useEffect(() => {
    let mounted = true;
    // use cached manifest loader
    import("../lib/figmaManifest").then(({ getFigmaManifest }) => {
      getFigmaManifest()
        .then((manifest) => {
          if (!mounted || !manifest) return;
          // normalize possible manifest shapes
          let entries = [];
          if (Array.isArray(manifest)) entries = manifest;
          else if (manifest.files && Array.isArray(manifest.files)) entries = manifest.files;
          else if (manifest.assets && Array.isArray(manifest.assets)) entries = manifest.assets;
          else if (typeof manifest === 'object') entries = Object.values(manifest);

          // map to filename/url pairs
          const filenames = entries.map(e => (typeof e === 'string' ? e : (e.name || e.filename || e.src || e.url || '')));
          const urls = entries.map(e => (typeof e === 'string' ? e : (e.url || e.src || e.path || '')));

          // find likely fab file by name
          const idx = filenames.findIndex(f => /fab|floating|action|plus|add|create|new/i.test(f));
          let found = null;
          if (idx !== -1) found = urls[idx] || filenames[idx];
          if (!found) {
            const idx2 = filenames.findIndex(f => /plus|new|add/i.test(f));
            if (idx2 !== -1) found = urls[idx2] || filenames[idx2];
          }
          if (found) {
            // ensure path is public-relative when needed
            const url = found.startsWith('http') ? found : (found.startsWith('/figma-components') ? found : `/figma-components/${found}`);
            setFabSvg(url);
          }
        })
        .catch(() => {});
    });

    return () => { mounted = false };
  }, []);

  // Tooltip entrance timing
  React.useEffect(() => {
    const t = setTimeout(() => setTooltipVisible(true), 420);
    const t2 = setTimeout(() => setTooltipVisible(false), 5600);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <main className="chat-container">
      <div className="device-frame">
        <div className="device-inner">
          <Header />
          <div className="home-top">
            <h1 className="home-greeting">Hi Sofia Alvarez!</h1>
            <button
              className="fab-add"
              aria-label="New post"
              aria-expanded={composerOpen}
              onClick={() => setComposerOpen((s) => !s)}
            >
              {fabSvg ? <img src={fabSvg} className="fab-icon" alt="Create new" /> : <span className="fab-fallback">+</span>}
            </button>
            <div className={"fab-tooltip" + (tooltipVisible ? " fab-tooltip--visible" : "")} role="note">
              Create your first post
            </div>
          </div>

          <main className="home-hero" style={{ textAlign: "center", padding: "0 16px" }}>
            <div style={{ maxWidth: 360, margin: "1rem auto" }}>
              <FigmaFrame />
            </div>
          </main>

          {/* Posts feed below the welcome card */}
          <section className="post-list" aria-label="Feed">
            {mockPosts.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </section>

          <ChatMessages messages={messages} />
          {composerOpen && <ChatInput autoFocus={composerOpen} />}
          <Footer />
        </div>
        <BottomNav />
      </div>
    </main>
  );
}
