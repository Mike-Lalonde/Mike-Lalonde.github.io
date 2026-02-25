import { askAssistant } from "../services/api.js";

export default function Assistant() {
  return (
    <div className="stack">
      <h2>AI Portfolio Assistant</h2>

      <div className="card">
        <div className="card-title">Coming soon</div>
        <p className="muted">
          This will become an interactive assistant that can answer questions about my work,
          projects, and learning notes.
        </p>
        <p className="muted small">
          For now it’s a placeholder with a clean API boundary, so adding a real backend later won’t
          require restructuring the site.
        </p>

        <button
          className="btn"
          onClick={async () => {
            const res = await askAssistant("What can you do?");
            alert(res);
          }}
        >
          Demo placeholder
        </button>
      </div>
    </div>
  );
}