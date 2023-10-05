// App.js
import React, { useState } from 'react';
import './App.css';
import ContentPage from './ContentPage';
import Profile from './Profile';

function App() {
  const [currentPage, setCurrentPage] = useState('profile');

  // Function to handle the "Go to Content" button click
  const handleContentClick = () => {
    // Redirect to the specified URL
    window.location.href = 'https://coding-resources-api.up.railway.app/';
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Your header content */}
      </header>
      <nav className="App-nav">
        <button onClick={() => setCurrentPage('profile')}>Go to Profile</button>
        <button onClick={handleContentClick}>Go to Content</button>
      </nav>

      <main className="App-main">
        {/* Render the appropriate page based on the currentPage state */}
        {currentPage === 'profile' && <Profile />}
        {currentPage === 'content' && <ContentPage />}
      </main>

      <footer className="App-footer">
        {/* Your footer content */}
      </footer>
    </div>
  );
}

export default App;


