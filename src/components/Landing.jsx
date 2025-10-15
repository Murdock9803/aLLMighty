import React from "react";

export default function Landing() {
  return (
    <section className="hero container" id="about">
      <div className="hero-left">
        <h1>a<span>LLM</span>ighty — AI experiments & projects</h1>
        <p className="lead">
          Portfolio of small projects, I built while learning LLMs. Browse demos, repos,
          and the AI Summary Plugin (Chrome extension) demo below.
        </p>

        <ul className="quickpoints">
          <li><strong>Focus:</strong> Learning LLM-based technologies and implementations.</li>
          <li><strong>Current project:</strong> aLLMighty Summary Plugin</li>
          <li><strong>Link:</strong> <a target="_blank" href="https://github.com/Murdock9803/aLLMighty-summary-plugin">Github-repository</a></li>
        </ul>
      </div>

      <div className="hero-right">
        <div className="video-wrap">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            aria-label="Demo of aLLMighty AI Summary Plugin"
          >
            <source src="/summary-plugin.mp4" type="video/mp4" />
            Your browser does not support the video tag. View the demo on YouTube or download it.
          </video>
        </div>
        <p className="muted">Demo: the <strong>Chrome extension</strong> generating summaries using AI.</p>
      </div>
    </section>
  );
}
