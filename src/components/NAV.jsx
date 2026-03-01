// src/components/Nav.jsx
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/quick-glance", label: "Quick Glance" },
  { to: "/projects", label: "Projects" },
  // { to: "/learning", label: "Learning" },
  // { to: "/notebooks", label: "Notebooks" },
  // { to: "/assistant", label: "Assistant" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // Close on route change click (we close in onClick handlers) + ESC key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close on outside click when panel is open
  useEffect(() => {
    if (!open) return;

    const onDown = (e) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target)) setOpen(false);
    };

    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Optional: stop body scrolling while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Brand */}
        <div className="brand">
          <div className="brand-title">Mike Lalonde</div>
          <div className="brand-subtitle">mlalonde@yrmindinsite.ca • Halifax, NS</div>
          <div className="brand-phone">902 225 6527</div>
          {/* If you have meta text you want, swap this line */}
          <div className="brand-meta">AI • Web • Embedded</div>
        </div>

        {/* Desktop nav */}
        <nav className="nav" aria-label="Primary navigation">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
          <a
            href="https://github.com/Mike-Lalonde"
            target="_blank"
            rel="noreferrer"
            className="nav-link nav-github"
          >
            GitHub
          </a>
        {/* Hamburger (shows on <=900px) */}
        <button
          className="nav-burger"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay + panel */}
      {open && (
        <div className="nav-overlay" role="presentation">
          <div className="nav-panel" ref={panelRef} role="dialog" aria-modal="true">
            <div className="nav-panel-head">
              <div className="nav-panel-title">Menu</div>
              <button className="nav-close" type="button" onClick={() => setOpen(false)}>
                ✕
              </button>
            </div>
          <div className="nav-panel-links">
                {LINKS.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) => (isActive ? "nav-m-link active" : "nav-m-link")}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </NavLink>
                ))}

                {/* GitHub Link */}
                <a
                  href="https://github.com/Mike-Lalonde"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-m-link"
                  onClick={() => setOpen(false)}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
      )}
    </header>
  );
}