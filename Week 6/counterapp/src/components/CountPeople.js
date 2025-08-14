import React, { useState } from 'react';

function CountPeople() {
  // Create a state variable for entry count, initialized to 0
  const [entryCount, setEntryCount] = useState(0);

  // Create a state variable for exit count, initialized to 0
  const [exitCount, setExitCount] = useState(0);

  // Function to handle the entry button click
  const handleEntry = () => {
    setEntryCount(entryCount + 1);
  };

  // Function to handle the exit button click
  const handleExit = () => {
    setExitCount(exitCount + 1);
  };

  return (
    <div className="counter-container">
      <div className="counter-item">
        <button className="counter-button" onClick={handleEntry}>
          Login
        </button>
        <span>{entryCount} People Entered!!!</span>
      </div>

      <div className="counter-item">
        <button className="counter-button exit" onClick={handleExit}>
          Exit
        </button>
        <span>{exitCount} People Left!!!</span>
      </div>
    </div>
  );
}

export default CountPeople;