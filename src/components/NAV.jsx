import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
];

export default function Nav() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <div className="brand-title">Mike Lalonde</div>
          {/* <div className="brand-subtitle">AI Systems • Embedded • Full Stack</div> */}
        </div>

        <nav className="nav">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}