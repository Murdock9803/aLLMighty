import React from "react";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div>
          <a href="/" className="footer-name"><h1>a<span>LLM</span>ighty</h1></a>
          <p className="muted">AI projects, demos, and experiments. Built by <a target="_blank" href="https://murdock9803.github.io/Ayush-Portfolio/">@Ayush</a>, 2025*</p>
        </div>
        <div className="contact">
          <p>Contact: <a href="mailto:ayushsahu9803@gmail.com">ayushsahu9803@gmail.com</a></p>
          <p>
            GitHub: <a href="https://github.com/Murdock9803" target="_blank" rel="noreferrer">@Murdock9803</a>
          </p>
          <p>
            X (twitter): <a href="https://x.com/Murdock9803" target="_blank" rel="noreferrer">@Murdock9803</a>
          </p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/ayush-sahu-25b329230/" target="_blank" rel="noreferrer">@ayush-sahu-25b329230</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
