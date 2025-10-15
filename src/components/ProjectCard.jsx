import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <p className="meta"><strong>Tech:</strong> {project.tech}</p>
      <p className="links">
        {" • "}
        <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
        <span className="space"></span>
        {" • "}
        <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
      </p>
    </article>
  );
}
