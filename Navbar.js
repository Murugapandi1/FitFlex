import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FitFlex</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exercises">Exercises</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#trainers">Trainers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
