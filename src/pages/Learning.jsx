import ReactMarkdown from "react-markdown";
import { learningPosts } from "../services/learningPosts.js";

export default function Learning() {
  const newest = learningPosts[0];

  return (
    <div className="stack">
      <h2>What I’m Learning</h2>
      <div className="muted">
        Short notes and takeaways. Written for clarity, not hype.
      </div>

      <div className="grid">
        <div className="card">
          <div className="card-title">Posts</div>
          <ul className="list">
            {learningPosts.map((p) => (
              <li key={p.slug}>
                <a href={`#/learning?post=${p.slug}`}>{p.title}</a>
                <div className="muted small">{p.date}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <div className="card-title">{newest.title}</div>
          <div className="card-subtitle">{newest.date}</div>
          <ReactMarkdown>{newest.body}</ReactMarkdown>
        </div>
      </div>

      <div className="card">
        <div className="card-title">How to add a new post</div>
        <ol className="list">
          <li>Create a new file in <code>src/content/learning/</code></li>
          <li>Add it to <code>src/services/learningPosts.js</code></li>
          <li>Commit + push</li>
        </ol>
      </div>
    </div>
  );
}