import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    setBMI(bmiValue.toFixed(2));
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div className="form-group">
        <label className="label">Weight (kg):</label>
        <input
          className="input-field"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Height (cm):</label>
        <input
          className="input-field"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button className="button" onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <p className="result">Your BMI is: {bmi}</p>}
    </div>
  );
}

export default App;
