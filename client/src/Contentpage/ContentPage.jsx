import React, { useState, useEffect } from 'react';
import './ContentPage.css';
import { Link } from 'react-router-dom';

function ContentPage() {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [contentData, setContentData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleSubtopicClick = (subtopicId) => {
    fetch(`http://127.0.0.1:5555/contents/${subtopicId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('API response data:', data);
        setSelectedSubtopic(data.content_id);
        // Handle the fetched course content data here, e.g., update a state variable
        // to store the content for display in your React component.
      })
      .catch((error) => {
        console.error('Error fetching subtopic data:', error);
      });
  };
  

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:5555/contents';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('API response data:', data);
        setContentData(data);
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

  const subtopics = Object.values(contentData);

  return (
    <>
     <div className="nav1">
            <h1>eLearning</h1>
            <Link to="/profile">
              <button id="btns"><strong>My Profile</strong> </button>
            </Link>

        </div> 

      <div className="content-container">
      
      <div className="left-sidebar">
        <h1 style={{ marginLeft: '20px' }}>Week 1</h1>
        <ul>
          {subtopics.map((subtopic) => (
            <li
              key={subtopic.id}
              onClick={() => handleSubtopicClick(subtopic.content_id)}
              className={selectedSubtopic === subtopic.content_id ? 'active' : ''}
            >
              {subtopic.topic}
            </li>
          ))}
        </ul>
      </div>
      <div className="right-content">
        {selectedSubtopic !== null ? (
          <div>
            <h2>{subtopics.find((subtopic) => subtopic.content_id === selectedSubtopic).topic}</h2>
            <p>{subtopics.find((subtopic) => subtopic.content_id === selectedSubtopic).content}</p>
          </div>
        ) : (
          <>
            <h1 style={{textAlign: 'center'}}>Welcome to eLearning</h1>
            <p>That’s why I decided to ask the leading eLearning industry experts to share their single best tip for creating engaging learning.
              Their responses are awesome and can be summarized into ten practical tips:
              Use scenarios for real world practice
              Hook your audience through compelling writing
              Make the content relevant to the job
              Add context to show the material in action
              Incorporate media to create visual interest
              Incite emotion to connect on a deeper level
              Tell a story about the learner’s world
              Put the learner’s experience first
              Add interactivity to draw the learner in
              Use micro learning to deliver key messages
              The tips and details are delivered below! For addited fun, we also did an example slide makeover for each tip. Put it all together and you’re on your way to a great project that your viewers will love.</p>
          </>

                )}
      </div>
    </div>
    </>
  );
}

export default ContentPage;
