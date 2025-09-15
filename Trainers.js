import React from "react";
import "./Trainers.css"; // Import CSS file

const Trainers = () => {
  return (
    <section id="trainers" className="trainers">
      <h2 className="trainers-title">Our Trainers</h2>
      <p className="trainers-subtitle">
        Meet our expert trainers who will guide you on your fitness journey.
      </p>

      <div className="trainer-cards">
        <div className="trainer-card">
         <img src="/img/gym1.jpg" alt="Trainer 3" />
          <h3>John Doe</h3>
          <p>Strength & Conditioning Coach</p>
        </div>

        <div className="trainer-card">
          <img src="/img/gym2.jpg" alt="Trainer 3" />
          <h3>Jane Smith</h3>
          <p>Yoga & Flexibility Expert</p>
        </div>

        <div className="trainer-card">
       <img src="/img/gym3.jpg" alt="Trainer 3" />
          <h3>Mike Johnson</h3>
          <p>Cardio & Endurance Specialist</p>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
