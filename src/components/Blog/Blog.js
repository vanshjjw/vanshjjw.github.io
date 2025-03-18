import React from 'react';
import './Blog.css';


const message = (
  <p className='blog-message'>
    Thoughts, ideas, and insights coming soon...
  </p>
)


const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-content">
        {message}
      </div>
    </div>
  );
};

export default Blog; 