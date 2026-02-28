import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

export default function NAV() {
  return (
    <header className="header">
      <div className="container header-inner">
<div className="brand">
  <div className="brand-title">Mike Lalonde</div>

  <div className="brand-subtitle">
    AI Engineer · Embedded IoT · Full Stack
  </div>

  <div className="brand-meta">
    Halifax, NS · 902-225-6527
  </div>
</div>

        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/resume" className="nav-link">
            Resume
          </NavLink>

          <NavLink to="/quick-glance" className="nav-link">
            Glance
          </NavLink>

          <NavLink to="/projects" className="nav-link">
            Projects
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          <a
            className="nav-link"
            href="https://github.com/Mike-Lalonde"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}