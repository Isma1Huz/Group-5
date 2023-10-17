import React, { useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
const Profile = () => {
  const [userData, setUserData] = useState({
    username: 'Isma-huz',
    email: 'ismahuz@gmail.com',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {

    const apiUrl = `http://127.0.0.1:5555/users/${user_id}`;

    // Create an object with the updated user data
    const updatedUserData = {
      username: userData.username, 
      email: userData.email,
    };
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData), // Convert the data to JSON
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the response if it's JSON
        } else {
          throw new Error('Failed to update user data');
        }
      })
      .then((data) => {
        // Assuming the API responds with updated user data
        setUserData(data); // Update the state with the new data
        setIsEditing(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
        setIsEditing(false); // Exit edit mode even if there's an error
      });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const [isCoursesExpanded, setIsCoursesExpanded] = useState(false);

  const toggleCourses = () => {
    setIsCoursesExpanded(!isCoursesExpanded);
  };

  return (
    <div className="profile-container">
      <Link to="/homepage" ><h5>eLearning</h5></Link>
      
      <h1 className="profile-title">My Profile</h1>

      <div className="profile-display">
        <div className="profile-image">
          {/* Display the profile image here */}
<img src="data:image/png;base64,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" alt="Profile" />
        </div>
        <div className="profile-text">
          <p>
            <strong>Username:</strong> {userData.username}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Profile
          </button>
        </div>
      </div>

      {isEditing ? (
        <div className="profile-edit">
          <label>
            <span>Username:</span>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Email:</span>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </label>
          <div className="user-actions">
            <button className="save-button" onClick={handleSaveClick}>
              Save
            </button>
            <button className="edit-button" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      {/* My Courses Section */}
      <div className="my-courses">
        <h2 >My Courses</h2>
          <ul>
            <li>
              <a
                href="https://moringa.instructure.com/courses/317"
                target="_blank"
                rel="noopener noreferrer"
              >
                Course 1
              </a>
            </li>
            <li>
              <a
                href="https://moringa.instructure.com/courses/460"
                target="_blank"
                rel="noopener noreferrer"
              >
                Course 2
              </a>
            </li>
            <li>
              <a
                href="https://moringa.instructure.com/courses/479"
                target="_blank"
                rel="noopener noreferrer"
              >
                Course 3
              </a>
            </li>
            <li>
              <a
                href="https://moringa.instructure.com/courses/498"
                target="_blank"
                rel="noopener noreferrer"
              >
                Course 4
              </a>
            </li>
          </ul>
      </div>

    <div className="certificates">
      <h2>Certificates</h2>
      <ul>
        <li>Certificate 1</li>
        <li>Certificate 2</li>
        {/* Add more certificates as needed */}
      </ul>
    </div>

    {/* Footer */}
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All Rights Reserved.</p>
      </div>
  </div>
);
};

export default Profile;



