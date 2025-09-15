import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ExerciseExplorer from "./components/ExerciseExplorer";
import Plans from "./components/Plans";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <ExerciseExplorer />
      <Plans />
      <Trainers />
      <Contact />
    </div>
  );
}

export default App;
