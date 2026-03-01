// src/pages/Projects.jsx
import { useMemo, useState, useEffect, useRef } from "react";
import { projects, CATEGORY, CATEGORY_META } from "../content/projects/projectsData.js";
import "../styles/projects.css";

function CategoryTabs({ value, onChange }) {
  const tabs = [CATEGORY.AI, CATEGORY.EMBEDDED, CATEGORY.WEB];

  return (
    <div className="proj-tabs" role="tablist" aria-label="Project categories">
      {tabs.map((k) => {
        const meta = CATEGORY_META[k];
        const active = value === k;
        return (
          <button
            key={k}
            className={active ? `proj-tab active accent-${meta.accent}` : `proj-tab accent-${meta.accent}`}
            onClick={() => onChange(k)}
            type="button"
            role="tab"
            aria-selected={active}
          >
            {meta.label}
          </button>
        );
      })}
    </div>
  );
}

function ProjectList({ items, selectedId, onSelect }) {
  return (
    <div className="proj-grid">
      {items.map((p) => {
        const active = p.id === selectedId;
        return (
          <button
            key={p.id}
            className={active ? "proj-tile active" : "proj-tile"}
            onClick={() => onSelect(p.id)}
            type="button"
          >
            <div className="proj-tile-title">{p.title}</div>
            <div className="proj-tile-sub">{p.subtitle || p.status}</div>
          </button>
        );
      })}
    </div>
  );
}

function Chip({ children, accent }) {
  return <span className={`chip accent-${accent}`}>{children}</span>;
}

function ProjectDetails({ project, category, setCategory }) {
  const accent = CATEGORY_META[project.category]?.accent || "web";
  const [showDemo, setShowDemo] = useState(false);
  const shots = project.media?.screenshots || [];
  const [activeShotIdx, setActiveShotIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveShotIdx(0);
    setLightboxOpen(false);
    setShowDemo(false);
  }, [project.id]);

  return (
    <>
      {/* TITLE / STATUS */}
      <div className="proj-header-block">
        <div className="proj-detail-head">
          <div>
            <div className="card-title">{project.title}</div>
            <div className="card-subtitle">{project.subtitle || project.status}</div>
          </div>
          <div className="proj-detail-status">{project.status}</div>
        </div>
      </div>

      {/* CATEGORY TABS centered ABOVE preview */}
      <div className="proj-tabs-wrap">
        <CategoryTabs value={category} onChange={setCategory} />
      </div>

      {/* PREVIEW CARD */}
      <div className="card proj-preview-card">
        <div className="proj-section-title">Preview</div>

        <div className="proj-preview">
          <div className="preview-main">
            {showDemo && project.links?.demo ? (
              <video controls className="preview-video">
                <source src={project.links.demo} type="video/mp4" />
              </video>
            ) : shots.length > 0 ? (
              <button type="button" className="shot-main" onClick={() => setLightboxOpen(true)}>
                <img src={shots[activeShotIdx]} alt="" className="shot-main-img" />
              </button>
            ) : (
              <div className="muted">Preview coming soon.</div>
            )}
          </div>

          {shots.length > 1 && (
            <div className="shot-strip" aria-label="Preview thumbnails">
              {shots.map((src, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={idx === activeShotIdx ? "shot-thumb active" : "shot-thumb"}
                  onClick={() => {
                    setActiveShotIdx(idx);
                    setShowDemo(false);
                  }}
                >
                  <img src={src} className="shot-thumb-img" alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="proj-actions proj-actions-compact">
          {project.links?.repo ? (
            <a className="btn btn-compact" href={project.links.repo} target="_blank" rel="noreferrer">
              Repo
            </a>
          ) : (
            <span className="btn btn-compact disabled">Repo</span>
          )}

          {project.links?.demo ? (
            <button className="btn btn-compact" type="button" onClick={() => setShowDemo((p) => !p)}>
              {showDemo ? "Hide Demo" : "Live Demo"}
            </button>
          ) : (
            <span className="btn btn-compact disabled">Live Demo</span>
          )}

          {project.links?.writeup ? (
            <a className="btn btn-compact" href={project.links.writeup} target="_blank" rel="noreferrer">
              Case Study
            </a>
          ) : (
            <span className="btn btn-compact disabled">Case Study</span>
          )}
        </div>
      </div>

      {/* DESCRIPTION BELOW preview */}
      <p className="muted proj-summary proj-summary-below">{project.summary}</p>

      {/* SKILLS */}
      <div className="proj-section">
        <div className="proj-section-title">Skills / Knowledge</div>
        <div className="chips chips-compact">
          {(project.skills || []).map((s) => (
            <Chip key={s} accent={accent}>
              {s}
            </Chip>
          ))}
        </div>
      </div>

      {/* TECH */}
      <div className="proj-section">
        <div className="proj-section-title">Tech</div>
        <div className="chips chips-compact">
          {(project.tech || []).map((t) => (
            <span key={t} className="chip subtle">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && shots.length > 0 && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={() => setLightboxOpen(false)}>
              ✕
            </button>
            <img src={shots[activeShotIdx]} alt="" className="lightbox-img" />
          </div>
        </div>
      )}
    </>
  );
}

export default function Projects() {
  const [category, setCategory] = useState(CATEGORY.AI);

  const filtered = useMemo(() => projects.filter((p) => p.category === category), [category]);

  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    setSelectedId(filtered.length > 0 ? filtered[0].id : "");
  }, [filtered]);

  const selected = useMemo(() => filtered.find((p) => p.id === selectedId), [filtered, selectedId]);

  return (
    <div className="stack projects-page">
      <h2 style={{ margin: "20px 0px 0px 0px", lineHeight: 1.05, color: "#9F1D35", marginLeft: "20px"}}>Projects</h2>
      <div className="card"> 
        <p>Select a project to view the skills/knowledge used and supporting evidence without leaving the page.</p>
      </div>
      <div className="proj-vertical">
        <div className="proj-viewport">
          {selected ? (
            <ProjectDetails project={selected} category={category} setCategory={setCategory} />
          ) : (
            <div className="card">No project selected.</div>
          )}
        </div>

        <div className="card proj-left">
          <div className="card-title">{CATEGORY_META[category].label}</div>
          <div className="card-subtitle">Click a project to view details</div>
          <ProjectList items={filtered.slice(0, 12)} selectedId={selected?.id} onSelect={setSelectedId} />
        </div>
      </div>
    </div>
  );
}