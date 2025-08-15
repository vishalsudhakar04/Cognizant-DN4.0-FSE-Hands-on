import React, { useState } from 'react';

function EventExamples() {
  const [counter, setCounter] = useState(0);

  // --- Counter Functions ---
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const decrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  const sayHello = () => {
    alert('Hello! This is the second method.');
  };

  // Function that calls multiple other functions
  const handleIncreaseClick = () => {
    increment();
    sayHello();
  };

  // --- Argument Passing ---
  const sayMessage = (message) => {
    alert(message);
  };

  // --- Synthetic Event ---
  const handleSyntheticEvent = (event) => {
    // React wraps the browser's native event in a "SyntheticEvent"
    // This provides a consistent API across different browsers.
    console.log(event);
    alert('Synthetic Event Clicked! Check the console for the event object.');
  };


  return (
    <div>
      <div className="component-section">
        <h2>Counter</h2>
        <h3>Value: {counter}</h3>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={decrement}>Decrease</button>
      </div>

      <div className="component-section">
        <h2>Argument Passing & Synthetic Events</h2>
        <button onClick={() => sayMessage('Welcome!')}>Say Welcome</button>
        <button onClick={handleSyntheticEvent}>Synthetic Event Click</button>
      </div>
    </div>
  );
}

export default EventExamples;