import React, { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Event handlers
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  // Conditionally render the button
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;