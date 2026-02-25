const projects = [
  {
    title: "Hydrogen Cost Explorer (MVP)",
    desc: "Flask + ML + SQLite + React. Focus: data pipeline, modeling, and usable UI.",
    status: "Case study coming soon",
  },
  {
    title: "CHIP-8 Emulator",
    desc: "Systems-style project demonstrating CPU, memory, instruction decoding, and testing.",
    status: "Write-up + screenshots coming soon",
  },
  {
    title: "AI Matchmaking Platform (OSC direction)",
    desc: "Semantic search + recommendations. Focus: data scope, architecture, guardrails.",
    status: "Phase-1 artifacts coming soon",
  },
];

export default function Projects() {
  return (
    <div className="stack">
      <h2>Projects</h2>

      <div className="muted">
        These are recruiter-friendly case studies: problem → approach → tools → results → lessons learned.
      </div>

      <div className="grid">
        {projects.map((p) => (
          <div key={p.title} className="card">
            <div className="card-title">{p.title}</div>
            <div className="card-subtitle">{p.status}</div>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-title">Supporting artifacts</div>
        <p className="muted">
          Large lab files, marked rubrics, and extended evidence can be provided upon request.
        </p>
      </div>
    </div>
  );
}