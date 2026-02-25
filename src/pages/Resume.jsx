const resumes = [
  {
    label: "AI Focused Systems Engineer (Flagship)",
    file: "/docs/resume/Mike_Resume_2026_AI_Focused_Systems_Engineer_Premium_v2.pdf",
  },
  {
    label: "AI Systems Engineer",
    file: "/docs/resume/Mike_Resume_2026_AI_Systems_Engineer_Premium.pdf",
  },
  {
    label: "AI Embedded Systems Engineer",
    file: "/docs/resume/Mike_Resume_2026_AI_Embedded_Systems_Engineer_Premium.pdf",
  },
  {
    label: "Full-Stack Web Developer",
    file: "/docs/resume/Mike_Resume_2026_Full_Stack_Web_Developer_Premium.pdf",
  },
];

export default function Resume() {
  const primary = resumes[0];

  return (
    <div className="stack">
      <h2>Resume</h2>

      <div className="card">
        <div className="card-title">Download My Resumes</div>
        <div className="row wrap">
          {resumes.map((r) => (
            <a key={r.file} className="btn" href={r.file} target="_blank" rel="noreferrer">
              {r.label}
            </a>
          ))}
        </div>
        <div className="muted small">
          These are served directly from <code>public/docs/resume/</code>.
        </div>
      </div>

      <div className="card">
        <div className="card-title">Quick view (flagship)</div>
        <div className="pdf-wrap">
          <iframe title="Resume PDF" src={primary.file} className="pdf-frame" />
        </div>
      </div>
    </div>
  );
}