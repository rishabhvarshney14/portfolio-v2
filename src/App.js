import React from "react";
import "./App.css";

// Custom Components
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
