import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "aLLMighty Summary Plugin (Chrome extension)",
    desc:
      "A Chrome extension that summarizes webpages using Gemini API. Content-aware summariser with formats such as brief, detailed, bullet views.",
    tech: "JavaScript, Chrome Extensions, Gemini API, JSON",
    repo: "https://github.com/Murdock9803/aLLMighty-summary-plugin",
    demo: "/demo.mp4"
  }
  // add more projects later
];

export default function Projects() {
  return (
    <section className="container projects" id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
