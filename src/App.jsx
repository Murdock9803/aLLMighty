import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Landing />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
