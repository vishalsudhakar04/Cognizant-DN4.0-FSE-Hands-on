import React, { useState } from 'react';

function Register() {
  // A single state object to hold all form values
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  // A state object to hold all validation errors
  const [errors, setErrors] = useState({});

  // Function to validate a single field
  const validate = (name, value) => {
    switch (name) {
      case 'fullName':
        if (value.length < 5) {
          return 'Full Name must be 5 characters long!';
        }
        break;
      case 'email':
        // A simple regex to check for a valid email format
        if (!/\S+@\S+\.\S+/.test(value)) {
          return 'Email is not valid!';
        }
        break;
      case 'password':
        if (value.length < 8) {
          return 'Password must be 8 characters long!';
        }
        break;
      default:
        break;
    }
    // Return an empty string if there are no errors
    return '';
  };

  // This function runs every time the user types in an input field
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update the form value state
    setFormValues({ ...formValues, [name]: value });

    // Validate the field in real-time and update the error state
    const error = validate(name, value);
    setErrors({ ...errors, [name]: error });
  };

  // This function runs when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Perform a final validation on all fields
    const nameError = validate('fullName', formValues.fullName);
    const emailError = validate('email', formValues.email);
    const passwordError = validate('password', formValues.password);

    // If any field has an error, update the error state and show an alert
    if (nameError || emailError || passwordError) {
      setErrors({
        fullName: nameError,
        email: emailError,
        password: passwordError
      });
      alert('Please fix the errors before submitting.');
      return;
    }

    // If everything is valid, show a success message
    alert('Form submitted successfully!');
  };

  return (
    <div className="form-container">
      <h1>Register Here!!!</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
          />
        </div>
        {/* Display the error message for this field */}
        <div className="error-message">{errors.fullName}</div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div className="error-message">{errors.email}</div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div className="error-message">{errors.password}</div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;