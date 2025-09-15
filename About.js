import React from "react";
import "./About.css"; // optional CSS file

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        {/* About text */}
        <div className="about-text">
          <h2>About FitFlex</h2>
          <p>
            FitFlex offers a user-friendly platform for fitness enthusiasts to
            explore, save, and manage workout routines with ease. We aim to make
            fitness simple, fun, and effective for everyone.
          </p>

          {/* Features list */}
          <ul>
            <li>✔ Personalized workout plans</li>
            <li>✔ Track your progress easily</li>
            <li>✔ Expert trainer guidance</li>
          </ul>

          {/* Call to action button */}
          <button className="about-btn">Join Now</button>
        </div>

        {/* About image */}
        <div className="about-image">
          <img src="/img/img.jpg" alt="About FitFlex" />
        </div>
      </div>
    </section>
  );
};

export default About;

