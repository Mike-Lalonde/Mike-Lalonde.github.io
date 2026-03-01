// src/pages/Resume.jsx
import { useEffect, useRef, useState } from "react";
import "../styles/resume.css";
import { Document as PdfDocument, Page as PdfPage, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs";

const resumes = [
  { label: "AI Focused Systems Engineer (Main)", file: "/docs/resume/Mikes_Resume2026.pdf" },
  { label: "AI Systems Engineer", file: "/docs/resume/Mikes_Resume_2026_AI_Systems_Engineer.pdf" },
  { label: "AI Embedded Systems Engineer", file: "/docs/resume/Mikes_Resume_2026_AI_Embedded_Systems_Engineer.pdf" },
  { label: "Full-Stack Web Developer", file: "/docs/resume/Mikes_Resume_2026_Full_Stack_Web_Developer.pdf" },
];

export default function Resume() {
  const [selected, setSelected] = useState(resumes[0]);

  const headerRef = useRef(null);
  const [pdfHeight, setPdfHeight] = useState(600);

  useEffect(() => {
    const update = () => {
      const headerH = headerRef.current?.offsetHeight || 0;

      // Global footer rendered in App.jsx
      const footerEl = document.querySelector(".footer");
      const footerH = footerEl?.offsetHeight || 60;

      const breathingRoom = 24;
      const available = window.innerHeight - headerH - footerH - breathingRoom;

      setPdfHeight(Math.max(240, Math.floor(available)));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="resume-page container">
      {/* HEADER AREA */}
      <div ref={headerRef}>
        <h2 className="resume-page-title">Resume</h2>
      </div>

      {/* MAIN CARD */}
      <div className="card resume-preview-card">
        <div className="card-title">Resume Selected : {selected.label}</div>

        <div className="resume-layout">
          {/* LEFT: PDF */}
          <div className="resume-pdfcol">
            <div className="paper">
              <PdfDocument
                file={selected.file}
                loading={<div className="muted">Loading…</div>}
                error={<div className="muted">PDF failed to load. Check file path.</div>}
              >
                <PdfPage
                  pageNumber={1}
                  height={pdfHeight}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </PdfDocument>
            </div>
          </div>

          {/* RIGHT: selector cards */}
          <aside className="resume-sidecol">
            <div className="resume-side-title">Select a resume</div>

            <div className="resume-sidegrid">
              {resumes.map((r) => (
                <div key={r.file} className="resume-tile">
                  <div className="resume-tile-title">{r.label}</div>

                  <div className="resume-btn-row">
                    <button className="btn" type="button" onClick={() => setSelected(r)}>
                      Quick view
                    </button>

                    <a className="btn ghost" href={r.file} target="_blank" rel="noreferrer">
                      Open
                    </a>

                    <a className="btn ghost" href={r.file} download>
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}