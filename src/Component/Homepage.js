import React from 'react';
import './Homepage.css'; // You can create this CSS file for styling

function Homepage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="top-left">My Profile</div>
        <div className="top-right">eLearning</div>
      </nav>
      <div className="content">
        <h1>Your Main Heading</h1>
        <p>Your paragraph text goes here.</p>
        <img src="your-image-url.jpg" alt="Image Alt Text" />
      </div>
      <div className="universities">
        <h2>Universities</h2>
        <ul>
          <li>Coursera</li>
          <li>Udemy</li>
          <li>University of Oxford</li>
          <li>Michigan State University</li>
        </ul>
      </div>
      <div className="cta">
        <h2>Get Started Today</h2>
        <p>
          Learn from top universities and experts. Join our platform to start your learning journey.
        </p>
        <button>Start Free Trial</button>
        <button>Contact Us</button>
      </div>
      <footer className="footer">
        <div className="footer-logo">eLearning</div>
        <div className="footer-menu">
          <button>Home</button>
          <button>Features</button>
          <button>Benefits</button>
          <button>Courses</button>
          <button>Blogs</button>
          <button>Login</button>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
