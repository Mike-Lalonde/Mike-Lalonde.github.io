// src/pages/About.jsx
import "../styles/about.css";

export default function About() {
  return (
    <div className="stack">
      <h2>About Me</h2>

      <div className="card">
        <div className="card-title">Who I Am</div>
        <p>
          I am an Artificial Intelligence programming student focused on building
          production-ready systems that combine software engineering discipline
          with applied machine learning. My work spans Python algorithm design,
          React-based web systems, and structured AI development.
        </p>
      </div>

      <div className="card">
        <div className="card-title">Technical Focus</div>
        <ul className="list">
          <li>Applied Machine Learning & Model Integration</li>
          <li>Algorithm Design & Mathematical Programming</li>
          <li>Full-Stack Development (React + Backend Systems)</li>
          <li>Data Processing & Analytics Pipelines</li>
          <li>Structured, Maintainable Software Architecture</li>
        </ul>
      </div>

      <div className="card">
        <div className="card-title">Current Direction</div>
        <p>
          I am currently focused on building an AI engineering portfolio that
          demonstrates applied intelligence systems, production deployment,
          and strong foundational mathematics. My goal is to move into
          advanced AI engineering roles where systems thinking and technical
          depth matter.
        </p>
      </div>

      <div className="card">
        <div className="card-title">Philosophy</div>
        <p>
          Clean architecture. Measurable outcomes. Practical intelligence.
          I believe AI systems should be understandable, testable, and
          engineered with the same rigor as any critical software system.
        </p>
      </div>
    </div>
  );
}