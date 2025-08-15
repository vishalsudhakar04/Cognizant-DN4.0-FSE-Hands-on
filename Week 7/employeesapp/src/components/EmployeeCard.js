import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function EmployeeCard({ employee }) {
  // Use the useContext hook to get the current theme
  const theme = useContext(ThemeContext);

  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>ID: {employee.id}</p>
      {/* Apply the theme class to the button */}
      <button className={`button ${theme}`}>View Profile</button>
    </div>
  );
}

export default EmployeeCard;