import React, { useState } from 'react';
import './App.css';
import './Themes.css';
import EmployeesList from './components/EmployeesList';
import ThemeContext from './contexts/ThemeContext';

function App() {
  // State to manage the current theme
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // The Provider makes the 'theme' value available to all child components
    <ThemeContext.Provider value={theme}>
      <div className="app-container">
        <h1>Employee Management</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <hr />
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;