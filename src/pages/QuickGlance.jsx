// src/pages/QuickGlance.jsx
import React, { useEffect } from "react";
import "../styles/quickglance.css";

const SECTIONS = [
  { title: "Languages", items: ["Python", "C", "C++", "SQL", "JavaScript", "PHP", "Bash"] },
  { title: "Frontend", items: ["React", "Router", "Tailwind", "HTML", "CSS", "Responsive"] },
  { title: "Backend", items: ["Node", "Express", "REST APIs", "JWT", "Auth", "MVC"] },
  { title: "Databases", items: ["MySQL", "MongoDB", "SQLite", "Joins", "Indexing", "Normalization"] },
  { title: "AI / ML", items: ["NumPy", "Pandas", "Scikit-learn", "Model Eval", "Neural Nets"] },
  { title: "Data Work", items: ["ETL", "Data Clean", "JSON", "CSV", "API Parse"] },
  { title: "Cloud", items: ["AWS", "Lambda", "S3", "Firehose", "Cloud Design"] },
  { title: "IoT", items: ["AWS IoT", "MQTT", "Node-RED", "Provisioning", "X.509"] },
  { title: "Embedded", items: ["STM32", "ARM Cortex-M", "Bare Metal", "FreeRTOS", "Interrupts"] },
  { title: "Interfaces", items: ["GPIO", "I2C", "UART", "SPI", "ADC", "PWM"] },
  { title: "Build", items: ["Makefiles", "GCC", "Linker", "Toolchain", "ELF"] },
  { title: "Linux", items: ["Embedded Linux", "Yocto", "Buildroot", "Shell", "Permissions"] },
  { title: "Networking", items: ["TCP/IP", "OSI", "Subnetting", "VLANs", "IPv6", "Routing"] },
  { title: "Security", items: ["ACLs", "SSH", "Certificates", "Hashing", "Secure Auth"] },
  { title: "Dev Tooling", items: ["Git", "GitHub", "npm", "VS Code", "Debugging", "CLI"] },
  { title: "Architecture", items: ["Client-Server", "Layered", "Event Driven", "REST Design", "Systems"] },
];

export default function QuickGlance() {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  return (
    <main className="quick-glance-page">
      <div className="quick-glance">
        <header className="quick-glance-header">
          <h2 style={{ margin: "10px 10px 10px 0px", lineHeight: 1.05, color: "#9F1D35" }}>Quick Glance</h2>
          <div className="card">
            <p className="quick-glance-description">
              This section provides a high-level overview of my technical capabilities for quick review.
              Detailed implementations and applied architecture decisions can be explored in the Projects section.
              Portfolio completion target: March 20th, 2026.
            </p>
          </div>
        </header>

        <hr className="quick-glance-divider" />

        <div className="quick-glance-grid">
          {SECTIONS.map((sec) => (
            <section key={sec.title} className="quick-glance-card">
              <h2 className="quick-glance-heading">{sec.title}</h2>
              <ul className="quick-glance-list">
                {sec.items.map((item) => (
                  <li key={item} className="quick-glance-item">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}