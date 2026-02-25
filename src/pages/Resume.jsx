const resumes = [
  {
    label: "AI Focused Systems Engineer (Main)",
    file: "/docs/resume/Mikes_Resume2026.pdf",
  },
  {
    label: "AI Systems Engineer",
    file: "/docs/resume/Mikes_Resume_2026_AI_Systems_Engineer.pdf",
  },
  {
    label: "AI Embedded Systems Engineer",
    file: "/docs/resume/Mikes_Resume_2026_AI_Embedded_Systems_Engineer.pdf",
  },
  {
    label: "Full-Stack Web Developer",
    file: "/docs/resume/Mikes_Resume_2026_Full_Stack_Web_Developer.pdf",
  },
];

export default function Resume() {
  const primary = resumes[0];

  return (
    <div className="stack">
      <h2>Resume</h2>

      <div className="card">
        <div className="card-title">Download PDFs</div>
        <div className="row wrap">
          {resumes.map((r) => (
            <a key={r.file} className="btn" href={r.file} target="_blank" rel="noreferrer">
              {r.label}
            </a>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-title">Quick view (main)</div>
        <div className="pdf-wrap">
          <iframe title="Resume PDF" src={primary.file} className="pdf-frame" />
        </div>
      </div>
    </div>
  );
}
