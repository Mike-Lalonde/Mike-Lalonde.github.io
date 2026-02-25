import { useState } from "react";

const resumes = [
  { label: "AI Focused Systems Engineer (Main)", file: "/docs/resume/Mikes_Resume2026.pdf" },
  { label: "AI Systems Engineer", file: "/docs/resume/Mikes_Resume_2026_AI_Systems_Engineer.pdf" },
  { label: "AI Embedded Systems Engineer", file: "/docs/resume/Mikes_Resume_2026_AI_Embedded_Systems_Engineer.pdf" },
  { label: "Full-Stack Web Developer", file: "/docs/resume/Mikes_Resume_2026_Full_Stack_Web_Developer.pdf" },
];

export default function Resume() {
  const [selected, setSelected] = useState(resumes[0]);

  return (
    <div className="stack">
      <h2>Resume</h2>

      <div className="card">
        <div className="card-title">Select a resume</div>

        <div className="row wrap">
          {resumes.map((r) => (
            <div key={r.file} className="card" style={{ padding: 14, minWidth: 280 }}>
              <div className="card-title">{r.label}</div>

              <div className="row wrap">
                {/* IMPORTANT: Quick view is a BUTTON, not a link */}
                <button className="btn" type="button" onClick={() => setSelected(r)}>
                  Quick view
                </button>

                {/* Open PDF in new tab */}
                <a className="btn ghost" href={r.file} target="_blank" rel="noreferrer">
                  Open
                </a>

                {/* Force download */}
                <a className="btn ghost" href={r.file} download>
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="muted small" style={{ marginTop: 10 }}>
          Quick view stays on this page. Open/Download are separate.
        </div>
      </div>

      <div className="card">
        <div className="card-title">Quick view: {selected.label}</div>
        <div className="pdf-wrap">
          <iframe title="Resume PDF" src={selected.file} className="pdf-frame" />
        </div>
      </div>
    </div>
  );
}