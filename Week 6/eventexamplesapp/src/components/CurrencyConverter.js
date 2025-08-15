import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState(0);
  const [euros, setEuros] = useState(0);
  const exchangeRate = 0.011; // Approx. 1 INR to Euro

  const handleInputChange = (event) => {
    setRupees(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents form from reloading the page
    setEuros(rupees * exchangeRate);
  };

  return (
    <div className="component-section">
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          INR:
          <input type="number" value={rupees} onChange={handleInputChange} />
        </label>
        <button type="submit">Convert</button>
      </form>
      <h3>Euros: €{euros.toFixed(2)}</h3>
    </div>
  );
}

export default CurrencyConverter;