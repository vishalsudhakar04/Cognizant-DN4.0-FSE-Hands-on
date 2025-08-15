import React, { useState, useEffect } from 'react';

function GetUser() {
  // State for the user data, loading status, and any errors
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the async function to fetch data
    const fetchUser = async () => {
      try {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        
        // Store the first person from the results array in state
        setPerson(data.results[0]);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []); // The empty array ensures this runs only once

  // --- Conditional Rendering ---

  // 1. Show a loading message while fetching
  if (loading) {
    return <div>Loading...</div>;
  }

  // 2. Show an error if the person data wasn't fetched
  if (!person) {
    return <div>Could not retrieve user data.</div>;
  }

  // 3. Display the user data when it's available
  return (
    <div>
      <h2>
        {person.name.title} {person.name.first} {person.name.last}
      </h2>
      <img src={person.picture.large} alt="User" />
    </div>
  );
}

export default GetUser;