import React from "react";

const Plans = () => {
  return (
    <section id="plans" className="plans">
      <h2>Workout Plans</h2>
      <div className="plan-cards">
        <div className="plan-card">
          <h3>Beginner</h3>
          <p>3 workouts/week</p>
          <p>$30/month</p>
        </div>
        <div className="plan-card">
          <h3>Intermediate</h3>
          <p>5 workouts/week</p>
          <p>$50/month</p>
        </div>
        <div className="plan-card">
          <h3>Advanced</h3>
          <p>Daily workouts</p>
          <p>$70/month</p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
