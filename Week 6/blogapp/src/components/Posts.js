import React, { useState, useEffect } from 'react';

function Posts() {
  // State to store the list of posts, loading status, and any errors
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect runs after the component mounts
  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data); // Store the fetched posts in state
        setLoading(false); // Set loading to false
      })
      .catch(error => {
        setError(error.message); // Store any error message
        setLoading(false); // Set loading to false
      });
  }, []); // The empty array [] means this effect runs only once

  // Conditional rendering based on the state
  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '20px', paddingBottom: '20px' }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;