import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="/"><img src="../../public/logo.png" alt="" /></a>
        <nav className="nav">
          <a target="_blank" href="https://murdock9803.github.io/Ayush-Portfolio/">About-me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
