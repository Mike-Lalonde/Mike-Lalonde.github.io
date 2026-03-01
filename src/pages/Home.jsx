import QRCodeCard from "../components/QRCodeCard.jsx";

export default function Home() {
  const siteUrl = "https://mike-lalonde.github.io/";

  return (
    <div className="stack">
      {/* <section className="hero card">
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
      </section> */}
      <div className="card">
      <div className="tech-intro"><h2>Welcome to My Technical Portfolio</h2></div>

        <p className="muted">
          This portfolio is a work in progress and was initiated on <strong>February 18, 2026</strong>.
          It is currently under active development and will continue to evolve over the next two weeks
          as additional projects and documentation are integrated.
        </p>

        <p className="muted">
          My résumé is current and fully up to date.
        </p>

        <p className="muted">
          This site will represent curated samples from more than <strong>120 manually programmed projects</strong> completed across
          three technical programs. The goal is to showcase representative work that demonstrates both
          breadth and depth of applied capability.
        </p>

        <p className="muted">
          Please check back soon, as this portfolio will be fully updated and expanded within the next two weeks.
        </p>

        <div className="muted" style={{ marginTop: 10 }}>
          — Mike Lalonde
        </div>
      </div>

      <section className="grid">
        <div className="card">
          {/* <div className="card-title">Featured</div> */}
          {/* <ul className="list">
            <li>AI + ML coursework artifacts (cleaned, readable, recruiter-friendly)</li>
            <li>Embedded + IoT labs (sanitized summaries)</li>
            <li>Web apps and APIs (case studies + screenshots)</li>
            <li>Learning notes (short posts, real takeaways)</li>
          </ul> */}
          <QRCodeCard url={siteUrl} />
        </div>

      </section>
    </div>
  );
}