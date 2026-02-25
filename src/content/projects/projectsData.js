// src/content/projects/projectsData.js

export const CATEGORY = {
  WEB: "web",
  EMBEDDED: "embedded",
  AI: "ai",
};

export const CATEGORY_META = {
  [CATEGORY.WEB]: { label: "Web Development", accent: "web" },
  [CATEGORY.EMBEDDED]: { label: "Embedded / IoT", accent: "embedded" },
  [CATEGORY.AI]: { label: "AI Engineering", accent: "ai" },
};

export const projects = [
 {
  id: "python-algorithms-suite",
  category: "ai",
  title: "Python Algorithms & Interactive Systems",
  subtitle: "CLI Games, String Processing & Text Analytics",
  summary:
    "A multi-part Python project featuring algorithmic string manipulation, a 2D grid-based game engine (Tic-Tac-Toe), and a text analytics pipeline that generates dynamic HTML reports with hidden message extraction.",
  status: "Complete",
  skills: [
    "Algorithm Design",
    "String Processing",
    "2D Data Structures",
    "State Management",
    "File I/O",
    "Text Normalization",
    "Word Frequency Analysis",
    "HTML Generation",
    "CLI Interface Design"
  ],
  tech: ["Python"],
  links: {
    repo: "https://github.com/Mike-Lalonde/python-algorithms-games-text-analytics",
    demo: null,
    writeup: null
  },
  media: {
    screenshots: [
  "/projects/python-suite/tic-tac-toe-1.png",
  "/projects/python-suite/tic-tac-toe-2.png",
  "/projects/python-suite/whale-report-1.png",
  "/projects/python-suite/whale-report-2.png"
    ],
    embedUrl: null
  },
},
  {
    id: "chip8-emulator",
    category: CATEGORY.EMBEDDED,
    title: "CHIP-8 Emulator",
    subtitle: "CPU • Memory • Instruction decoding",
    summary: "Systems-style project demonstrating CPU, memory, instruction decoding, and testing.",
    status: "Write-up + screenshots coming soon",
    skills: ["Instruction decoding", "Memory model", "Testing", "Debugging"],
    tech: ["C/C++", "SDL (optional)", "Unit tests"],
    links: { repo: "", demo: "", writeup: "" },
    media: { screenshots: [], embedUrl: "" },
  },
  {
    id: "ai-search-engine",
    category: CATEGORY.AI,
    title: "AI Search Engine (Placeholder)",
    subtitle: "Semantic search + recommendations",
    summary: "Focus: data scope, architecture, guardrails.",
    status: "Phase-1 artifacts coming soon",
    skills: ["Embeddings", "Retrieval", "Architecture", "Guardrails"],
    tech: ["Python", "Vector search", "NLP"],
    links: { repo: "", demo: "", writeup: "" },
    media: { screenshots: [], embedUrl: "" },
  },
];