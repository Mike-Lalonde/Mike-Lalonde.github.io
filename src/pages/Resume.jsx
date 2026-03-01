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

  // measure the LEFT column width only (so your PDF stays the right size)
  const pdfColRef = useRef(null);
  const [pdfWidth, setPdfWidth] = useState(600);

  useEffect(() => {
    const update = () => {
      if (pdfColRef.current) setPdfWidth(pdfColRef.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="resume-page container">
      <h2 className="resume-page-title">Resume</h2>

      <div className="card resume-preview-card">
        <div className="card-title">Quick view: {selected.label}</div>

        {/* 2-column layout INSIDE the card */}
        <div className="resume-layout">
          {/* LEFT: PDF */}
          <div className="resume-pdfcol" ref={pdfColRef}>
            <div className="paper">
              <PdfDocument file={selected.file} loading={<div className="muted">Loading…</div>}>
                <PdfPage
                  pageNumber={1}
                  width={pdfWidth}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </PdfDocument>
            </div>
          </div>

          {/* RIGHT: selector cards (stacked) */}
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