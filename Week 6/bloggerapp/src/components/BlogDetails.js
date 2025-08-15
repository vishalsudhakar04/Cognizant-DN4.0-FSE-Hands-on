import React from 'react';

function BlogDetails() {
  const blogs = [
    { title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
    { title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' }
  ];

  return (
    <div className="detail-column">
      <h2>Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.title}>
          <h3>{blog.title}</h3>
          <p>{blog.author}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;