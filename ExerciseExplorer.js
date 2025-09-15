import React, { useState, useEffect } from 'react';
import './ExerciseExplorer.css'; // We'll create this for styles

const ExerciseExplorer = () => {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [savedExercises, setSavedExercises] = useState([]);

  // Mock data for exercises (replace with API call later)
  const mockExercises = [
    {
  id: 1,
  name: "Push-ups",
  category: "Chest",
  image: process.env.PUBLIC_URL + '/img/push.jpg',
  description: "A classic bodyweight exercise for chest and triceps."
},
    {
      id: 2,
      name: 'Squats',
      category: 'Legs',
       image: process.env.PUBLIC_URL + '/img/leg.jpg',
      description: 'Fundamental lower body exercise targeting quads and glutes.'
    },
    {
      id: 3,
      name: 'Plank',
      category: 'Core',
     image: process.env.PUBLIC_URL + '/img/plank.jpg',
      description: 'Isometric core exercise for abdominal strength.'
    },
    {
      id: 4,
      name: 'Bench Press',
      category: 'Chest',
     image: process.env.PUBLIC_URL + '/img/Bench press.jpg',
      description: 'Compound exercise for chest development.'
    },
    {
      id: 5,
      name: 'Deadlift',
      category: 'Back',
     image: process.env.PUBLIC_URL + '/img/Deat.jpg',
      description: 'Powerful full-body exercise focusing on posterior chain.'
    },
    {
      id: 6,
      name: 'Burpees',
      category: 'Full Body',
       image: process.env.PUBLIC_URL + '/img/full.jpg',
      description: 'High-intensity full-body exercise combining squat, plank, and jump.'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setExercises(mockExercises);
    setFilteredExercises(mockExercises);
  }, []);

  useEffect(() => {
    const filtered = exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExercises(filtered);
  }, [searchTerm, exercises]);

  const handleSave = (exercise) => {
    if (!savedExercises.find(saved => saved.id === exercise.id)) {
      setSavedExercises([...savedExercises, exercise]);
      // In a real app, save to backend or localStorage
      localStorage.setItem('savedExercises', JSON.stringify([...savedExercises, exercise]));
    }
  };

  const handleShare = (exercise) => {
    const shareText = `Check out this exercise: ${exercise.name} - ${exercise.description}`;
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Exercise details copied to clipboard!');
    });
  };

  return (
    <section id="exercises" className="exercise-explorer">
      <h2>Explore Exercises</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search exercises by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="exercise-gallery">
        {filteredExercises.map(exercise => (
          <div key={exercise.id} className="exercise-card">
            <img src={exercise.image} alt={exercise.name} />
            <h3>{exercise.name}</h3>
            <p className="category">{exercise.category}</p>
            <p>{exercise.description}</p>
            <div className="exercise-actions">
              <button onClick={() => handleSave(exercise)} className="btn-save">
                Save
              </button>
              <button onClick={() => handleShare(exercise)} className="btn-share">
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
      {savedExercises.length > 0 && (
        <div className="saved-exercises">
          <h3>Your Saved Exercises</h3>
          <ul>
            {savedExercises.map(exercise => (
              <li key={exercise.id}>{exercise.name}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ExerciseExplorer;
