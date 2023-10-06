import React, { useState, useEffect } from 'react';
import './ContentPage.css';

function ContentPage() {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://devdocs.io/javascript/global_objects/array';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('API response data:', data); // Log the response data
        setContent(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="content-container">
      <h2>Educational Content</h2>
      <ul>
        {content.map((item) => (
          <li key={item.id}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      {/* Add a "Go to Content" link */}
      <a href="https://devdocs.io/javascript/global_objects/array" target="_blank" rel="noopener noreferrer">
        Go to Content
      </a>
    </div>
  );
}

export default ContentPage;
