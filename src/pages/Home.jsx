import QRCodeCard from "../components/QRCodeCard.jsx";

export default function Home() {
  const siteUrl = "https://mike-lalonde.github.io/";

  return (
    <div className="stack">
      <section className="hero card">
        <div>
          <h1 className="hero-title"> AI Systems Engineer </h1>
          <p className="hero-subtitle">
            • Embedded Systems • Full-Stack Development
          </p>
          <p className="muted">
            This portfolio is a living workspace: resumes, case studies, notebooks, and what I’m learning.
          </p>

          <div className="row wrap">
            <a className="btn" href="#/resume">View Resume</a>
            <a className="btn ghost" href="#/projects">View Projects</a>
            <a className="btn ghost" href="https://github.com/Mike-Lalonde" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <div className="card-title">Featured</div>
          <ul className="list">
            <li>AI + ML coursework artifacts (cleaned, readable, recruiter-friendly)</li>
            <li>Embedded + IoT labs (sanitized summaries)</li>
            <li>Web apps and APIs (case studies + screenshots)</li>
            <li>Learning notes (short posts, real takeaways)</li>
          </ul>
        </div>

        <QRCodeCard url={siteUrl} />
      </section>
    </div>
  );
}