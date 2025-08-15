import React, { useState } from 'react';

function ComplaintRegister() {
  // State for the name input
  const [name, setName] = useState('');
  // State for the complaint textarea
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (event) => {
    // Prevent the default form submission which reloads the page
    event.preventDefault();

    // Generate a random transaction ID
    const transactionId = Math.floor(Math.random() * 100);

    // Create the alert message
    const message = `Thanks ${name}\nYour Complaint was Submitted.\nTransaction ID is: ${transactionId}`;

    // Display the alert
    alert(message);

    // Optional: Clear the form after submission
    setName('');
    setComplaint('');
  };

  return (
    <div className="form-container">
      <h1>Register your complaints here!!!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Complaint:</label>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;