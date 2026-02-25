const notebooks = [
  {
    title: "Notebook Example (HTML export)",
    href: "/notebooks/example-notebook.html",
    note: "Place exported HTML into public/notebooks/",
  },
  {
    title: "Notebook Example (nbviewer link)",
    href: "https://nbviewer.org/",
    note: "Later, link to your GitHub-hosted ipynb via nbviewer.",
  },
];

export default function Notebooks() {
  return (
    <div className="stack">
      <h2>Notebooks</h2>
      <div className="muted">
        This section hosts or links to Jupyter notebooks in a clean, readable way.
      </div>

      <div className="grid">
        {notebooks.map((n) => (
          <div key={n.title} className="card">
            <div className="card-title">{n.title}</div>
            <div className="card-subtitle">{n.note}</div>
            <a className="btn" href={n.href} target="_blank" rel="noreferrer">
              Open
            </a>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-title">Export tip</div>
        <p className="muted small">
          Export notebook to HTML with: <code>jupyter nbconvert --to html your_notebook.ipynb</code>
          <br />
          Then copy the generated HTML into <code>public/notebooks/</code>.
        </p>
      </div>
    </div>
  );
}