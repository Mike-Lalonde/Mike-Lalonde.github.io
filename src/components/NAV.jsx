// src/components/NAV.jsx
import { NavLink } from "react-router-dom";

export default function NAV() {
  return (
    <div className="header-inner container">
      {/* Brand (your name) */}
      <div>
        <div className="brand-title">Mike Lalonde</div>
        <div className="brand-subtitle">AI Engineering • Embedded IoT • Full-Stack Development</div>
      </div>

      {/* Nav */}
      <nav className="nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          About
        </NavLink>

        {/* External link NEVER gets "active" */}
        <a
          href="https://github.com/Mike-Lalonde"
          className="nav-link"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Projects
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Resume
        </NavLink>
      </nav>
    </div>
  );
}