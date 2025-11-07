import React from "react";
import { getFigmaManifest } from "../lib/figmaManifest";

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return (
      d.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }) +
      " at " +
      d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })
    );
  } catch (e) {
    return iso;
  }
}

export default function PostCard({ post }) {
  const [avatarSrc, setAvatarSrc] = React.useState(post.avatar);

  React.useEffect(() => {
    let mounted = true;
    // try to load avatars from the figma manifest if present (cached loader)
    getFigmaManifest()
      .then((manifest) => {
        if (!mounted || !manifest) return;
        let entries = [];
        if (Array.isArray(manifest)) entries = manifest;
        else if (manifest.files && Array.isArray(manifest.files))
          entries = manifest.files;
        else if (manifest.assets && Array.isArray(manifest.assets))
          entries = manifest.assets;
        else if (typeof manifest === "object")
          entries = Object.values(manifest);

        const items = entries.map((e) => ({
          filename: typeof e === "string" ? e : e.filename || e.name || "",
          url: typeof e === "string" ? e : e.url || e.src || "",
        }));

        const authorKey = (post.author || "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-");

        // prefer explicit avatar files, then match author name
        const avatarItem =
          items.find(
            (it) =>
              /avatar|profile|pic|photo|user/i.test(it.filename) &&
              it.filename.toLowerCase().includes(authorKey),
          ) ||
          items.find((it) =>
            /avatar|profile|pic|photo|user/i.test(it.filename),
          );

        if (avatarItem) {
          const found = avatarItem.url || avatarItem.filename;
          const url = found.startsWith("http")
            ? found
            : found.startsWith("/figma-components")
              ? found
              : `/figma-components/${found}`;
          setAvatarSrc(url);
        }
      })
      .catch(() => {});

    return () => {
      mounted = false;
    };
  }, [post.author, post.avatar]);

  return (
    <article className="post-card" key={post.id}>
      <header className="post-card__header">
        <img src={avatarSrc} alt={post.author} className="post-avatar" />
        <div className="post-meta">
          <div className="post-author">{post.author}</div>
          <div className="post-date">{formatDate(post.date)}</div>
        </div>
      </header>

      <div className="post-body">{post.content}</div>

      <footer className="post-actions">
        <button className="icon-btn" aria-label="Like" title="Like">
          <svg
            className="icon-svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg-outline"
              d="M12.1 21s-7-4.35-9-6.9C-0.15 9.95 5.5 4 12 8.2c6.5-4.2 12.15 1.75 8.95 5.9-2 2.55-8.85 6.9-8.85 6.9z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="svg-fill"
              d="M12.1 21s-7-4.35-9-6.9C-0.15 9.95 5.5 4 12 8.2c6.5-4.2 12.15 1.75 8.95 5.9-2 2.55-8.85 6.9-8.85 6.9z"
              fill="currentColor"
              opacity="0"
            />
          </svg>
        </button>
        <button className="icon-btn" aria-label="Comment" title="Comment">
          <svg
            className="icon-svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg-outline"
              d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="svg-fill"
              d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              fill="currentColor"
              opacity="0"
            />
          </svg>
        </button>
        <button
          className="icon-btn icon-btn--primary"
          aria-label="Share"
          title="Share"
        >
          <svg
            className="icon-svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg-outline"
              d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="svg-outline"
              d="M12 3v14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              className="svg-fill"
              x="8"
              y="8"
              width="8"
              height="6"
              rx="1"
              fill="currentColor"
              opacity="0"
            />
          </svg>
        </button>
      </footer>
    </article>
  );
}
