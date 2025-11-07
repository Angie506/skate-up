import React from "react";
import { NavLink } from "react-router";
import { getFigmaManifest } from "../lib/figmaManifest";

function Icon({ name }) {
  // simple placeholder SVG icons matching each tab name
  switch (name) {
    case "home":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 10.5L12 3l9 7.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 21V12h6v9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "routes":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6h6l6 12h6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "forecast":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 16.58A5 5 0 0017 7H16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 20v-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "you":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="8"
            r="3"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M5.5 20a7 7 0 0113 0"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function BottomNav() {
  const [icons, setIcons] = React.useState(null);

  React.useEffect(() => {
    // use cached loader so many instances/components don't refetch repeatedly
    getFigmaManifest()
      .then((m) => {
        const list = m ? (Array.isArray(m) ? m : m.files || []) : [];
        setIcons(list);
      })
      .catch(() => setIcons([]));
  }, []);

  const findIcon = (name) => {
    if (!icons || icons.length === 0) return null;
    const key = name.toLowerCase();
    const match = icons.find((f) => {
      const fname = (f.filename || f).toLowerCase();
      return (
        fname.includes(key) || fname.includes(key.replace("routes", "route"))
      );
    });
    return match ? match.filename || match : null;
  };

  const NavItem = ({ to, name, label }) => {
    const iconFile = findIcon(name);
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          ["bottom-nav__item", isActive && "bottom-nav__item--active"]
            .filter(Boolean)
            .join(" ")
        }
      >
        {iconFile ? (
          <img
            src={`/figma-components/${iconFile}`}
            alt={label}
            className="bottom-nav__icon"
          />
        ) : (
          <Icon name={name} />
        )}
        <span className="bottom-nav__label">{label}</span>
      </NavLink>
    );
  };

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Main">
      <NavItem to="/" name="home" label="Home" />
      <NavItem to="/routes" name="routes" label="Routes" />
      <NavItem to="/forecast" name="forecast" label="Forecast" />
      <NavItem to="/you" name="you" label="You" />
    </nav>
  );
}
