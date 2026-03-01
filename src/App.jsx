// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/NAV.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import QuickGlance from "./pages/QuickGlance.jsx";
import Projects from "./pages/Projects.jsx";
import Learning from "./pages/Learning.jsx";
import Notebooks from "./pages/Notebooks.jsx";
import Assistant from "./pages/Assistant.jsx";

export default function App() {
  return (
    <div className="app">
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/quick-glance" element={<QuickGlance />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/learning" element={<Learning />} />
          <Route path="/notebooks" element={<Notebooks />} />
          <Route path="/assistant" element={<Assistant />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
