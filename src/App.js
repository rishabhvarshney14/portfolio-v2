import React from "react";
import "./App.css";

// Custom Components
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
    </div>
  );
}

export default App;
