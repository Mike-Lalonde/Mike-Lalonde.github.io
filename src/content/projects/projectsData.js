export const projects = [
  {
    id: "python-algorithms-suite",
    category: CATEGORY.AI,
    title: "Python Algorithms & Interactive System",
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
      writeup: null,
    },
    media: {
      screenshots: [
        "/projects/python-suite/tic-tac-toe-1.png",
        "/projects/python-suite/tic-tac-toe-2.png",
        "/projects/python-suite/whale-report-1.png",
        "/projects/python-suite/whale-report-2.png",
      ],
      embedUrl: null,
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
      demo: null,
      writeup: null,
    },
    media: {
      screenshots: [],
      embedUrl: null,
    },
  },

  {
    id: "mastermind",
    category: CATEGORY.AI,
    title: "Mastermind",
    subtitle: "Rule evaluation • State management • Modular design",
    summary:
      "Interactive implementation of the Mastermind game demonstrating algorithmic rule evaluation, state management, modular Python architecture, and structured game loop control.",
    status: "Complete",
    skills: [
      "Algorithm Design",
      "State Management",
      "Rule Evaluation",
      "Modular Architecture",
      "Game Loop Control",
    ],
    tech: ["Python"],
    links: {
      repo: "https://github.com/Mike-Lalonde/mastermind",
      demo: "/videos/mastermind-demo.mp4",
      writeup: null,
    },
    media: {
      screenshots: [],
      embedUrl: null,
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
    links: { repo: "https://github.com/Mike-Lalonde/chip8-emulator", demo: null, writeup: null },
    media: { screenshots: [], embedUrl: null },
  },

  {
    id: "mandelbrot",
    category: CATEGORY.AI,
    title: "Mandelbrot Visualizations",
    subtitle: "Numerical computation • Complex plane mapping",
    summary:
      "Implementation of Mandelbrot set visualizations using iterative escape-time algorithms and complex number computation. Demonstrates numerical programming, coordinate transformations, and translating mathematical models into structured Python code and visual output.",
    status: "Complete",
    skills: [
      "Numerical Computation",
      "Complex Numbers",
      "Coordinate Mapping",
      "Visualization",
      "Algorithmic Efficiency",
    ],
    tech: ["Python"],
    links: { repo: "https://github.com/Mike-Lalonde/mandelbrot", demo: null, writeup: null },
    media: { screenshots: [], embedUrl: null },
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
    links: { repo: null, demo: null, writeup: null },
    media: { screenshots: [], embedUrl: null },
  },
];