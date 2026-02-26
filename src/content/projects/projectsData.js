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
    category: CATEGORY.AI,
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
      "CLI Interface Design",
    ],
    tech: ["Python"],
    links: {
      repo: "https://github.com/Mike-Lalonde/python-algorithms-games-text-analytics",
      demo: "/projects/python-suite/whale-of-a-tale-demo.mp4",
      writeup: "",
    },
    media: {
      screenshots: [
        "/projects/python-suite/tic-tac-toe-1.png",
        "/projects/python-suite/tic-tac-toe-2.png",
        "/projects/python-suite/whale-report-1.png",
        "/projects/python-suite/whale-report-2.png",
      ],
      embedUrl: "",
    },
  },

  {
    id: "my-first-neural-network",
    category: CATEGORY.AI,
    title: "My First Neural Network (NumPy)",
    subtitle: "Feedforward NN built from scratch on MNIST",
    summary:
      "A from-scratch neural network implemented using NumPy and SciPy to demonstrate forward propagation, backpropagation, weight updates, and model persistence without using high-level frameworks like PyTorch or TensorFlow.",
    status: "Complete",
    skills: [
      "Neural Network Fundamentals",
      "Backpropagation",
      "Matrix Multiplication",
      "Gradient-Based Optimization",
      "Model Persistence",
    ],
    tech: ["Python", "NumPy", "SciPy", "tqdm"],
    links: {
      repo: "https://github.com/Mike-Lalonde/myfirstneuralnetwork",
      demo: "",
      writeup: "",
    },
    media: {
      screenshots: [],
      embedUrl: "",
    },
  },

  {
    id: "chip8-emulator",
    category: CATEGORY.EMBEDDED,
    title: "CHIP-8 Emulator",
    subtitle: "CPU • Memory • Instruction decoding",
    summary:
      "Systems-style project demonstrating CPU, memory, instruction decoding, and testing.",
    status: "Write-up + screenshots coming soon",
    skills: ["Instruction decoding", "Memory model", "Testing", "Debugging"],
    tech: ["C/C++", "SDL (optional)", "Unit tests"],
    links: { repo: "", demo: "", writeup: "" },
    media: { screenshots: [], embedUrl: "" },
  },

  {
    id: "web-placeholder",
    category: CATEGORY.WEB,
    title: "Web Projects (Coming Next)",
    subtitle: "React + Vite portfolio work and web apps",
    summary:
      "Placeholder entry while I migrate and polish my web development projects for reliable demos.",
    status: "In progress",
    skills: ["UI Layout", "Component Design", "Routing", "Responsive Design"],
    tech: ["React", "Vite", "CSS"],
    links: { repo: "", demo: "", writeup: "" },
    media: { screenshots: [], embedUrl: "" },
  },
];