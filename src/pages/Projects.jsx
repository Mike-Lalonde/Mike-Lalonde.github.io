// src/pages/Projects.jsx
import { useMemo, useState } from "react";
import { projects, CATEGORY, CATEGORY_META } from "../content/projects/projectsData";

function CategoryTabs({ value, onChange }) {
  const tabs = [CATEGORY.WEB, CATEGORY.EMBEDDED, CATEGORY.AI];

  return (
    <div className="proj-tabs">
      {tabs.map((k) => {
        const meta = CATEGORY_META[k];
        const active = value === k;
        return (
          <button
            key={k}
            className={active ? `proj-tab active accent-${meta.accent}` : `proj-tab accent-${meta.accent}`}
            onClick={() => onChange(k)}
            type="button"
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
    <div className="proj-list">
      {items.map((p) => {
        const active = p.id === selectedId;
        return (
          <button
            key={p.id}
            className={active ? "proj-item active" : "proj-item"}
            onClick={() => onSelect(p.id)}
            type="button"
          >
            <div className="proj-item-title">{p.title}</div>
            <div className="proj-item-sub">{p.subtitle || p.status}</div>
          </button>
        );
      })}
    </div>
  );
}

function Chip({ children, accent }) {
  return <span className={`chip accent-${accent}`}>{children}</span>;
}

function ProjectDetails({ project }) {
  const accent = CATEGORY_META[project.category]?.accent || "web";

  return (
    <div className={`card proj-detail accent-${accent}`}>
      <div className="proj-detail-head">
        <div>
          <div className="card-title">{project.title}</div>
          <div className="card-subtitle">{project.subtitle || project.status}</div>
        </div>
        <div className="proj-detail-status">{project.status}</div>
      </div>

      <p className="muted" style={{ marginTop: 8 }}>
        {project.summary}
      </p>

      <div className="proj-section">
        <div className="proj-section-title">Skills / Knowledge</div>
        <div className="chips">
          {(project.skills || []).map((s) => (
            <Chip key={s} accent={accent}>
              {s}
            </Chip>
          ))}
        </div>
      </div>

      <div className="proj-section">
        <div className="proj-section-title">Tech</div>
        <div className="chips">
          {(project.tech || []).map((t) => (
            <span key={t} className="chip subtle">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="proj-section">
        <div className="proj-section-title">Preview</div>

        {project.media?.embedUrl ? (
          <div className="proj-preview">
            <iframe title="Project preview" src={project.media.embedUrl} />
          </div>
        ) : project.media?.screenshots?.length ? (
          <div className="proj-preview muted">Screenshot gallery coming next.</div>
        ) : (
          <div className="proj-preview muted">Add screenshots or an embed URL when ready.</div>
        )}
      </div>

      <div className="proj-actions">
        {project.links?.repo ? (
          <a className="btn" href={project.links.repo} target="_blank" rel="noreferrer">
            Repo
          </a>
        ) : (
          <span className="btn disabled">Repo</span>
        )}

        {project.links?.demo ? (
          <a className="btn" href={project.links.demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        ) : (
          <span className="btn disabled">Live Demo</span>
        )}

        {project.links?.writeup ? (
          <a className="btn" href={project.links.writeup} target="_blank" rel="noreferrer">
            Case Study
          </a>
        ) : (
          <span className="btn disabled">Case Study</span>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [category, setCategory] = useState(CATEGORY.WEB);

  const filtered = useMemo(() => projects.filter((p) => p.category === category), [category]);

  const [selectedId, setSelectedId] = useState(() => filtered[0]?.id || "");
  const selected = useMemo(
    () => filtered.find((p) => p.id === selectedId) || filtered[0],
    [filtered, selectedId]
  );

  // keep selection valid when switching tabs
  if (filtered.length && selected && selected.category !== category) {
    // React will re-render; this is fine, but if you prefer we can move this into useEffect.
    setSelectedId(filtered[0].id);
  }

  return (
    <div className="stack">
      <h2>Projects</h2>

      <div className="muted">
        Select a project to view the skills/knowledge used and supporting evidence without leaving the page.
      </div>

      <CategoryTabs value={category} onChange={setCategory} />

      <div className="proj-split">
        <div className="card proj-left">
          <div className="card-title">{CATEGORY_META[category].label}</div>
          <div className="card-subtitle">Click a project to view details</div>
          <ProjectList items={filtered} selectedId={selected?.id} onSelect={setSelectedId} />
        </div>

        <div className="proj-right">{selected ? <ProjectDetails project={selected} /> : null}</div>
      </div>
    </div>
  );
}