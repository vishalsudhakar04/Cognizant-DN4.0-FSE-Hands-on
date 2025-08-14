import React from 'react';
import '../stylesheets/mystyle.css'; // Import the stylesheet

function CalculateScore(props) {
  const percentage = (props.Total / props.goal) * 100;

  return (
    <div className="student-card">
      <h2>{props.Name}</h2>
      <p>School: {props.School}</p>
      <p>Total Score: {props.Total} / {props.goal}</p>
      <p className="percentage">Percentage: {percentage.toFixed(2)}%</p>
    </div>
  );
}

export default CalculateScore;