import React, { useState, useEffect } from 'react';
import './Auth.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [validationError, setValidationError] = useState(null);

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return; // Prevent submission if the form is not valid
    }

    if (isSignUp) {
      // Check if password and confirmPassword match
      if (password !== confirmPassword) {
        setValidationError("Passwords don't match.");
        return;
      }

      try {
        const response = await axios.post('http://127.0.0.1:5555/signup', {
          username: name,
          password: password,
          email: email,
        });
        alert('Sign Up successful');
        await login();
      } catch (error) {
        alert('Sign Up failed');
      }
    } else {
      try {
        const response = await axios.post('http://127.0.0.1:5555/login', {
          username: email,
          password: password,
        });
        alert('Sign In successful');
        checkSession();
      } catch (error) {
        alert('Sign In failed');
      }
    }
  };

  const checkSession = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5555/check_session');
      const { username } = response.data;
      setLoggedInUser(username);
    } catch (error) {
      setLoggedInUser(null);
    }
  };

  const validateForm = () => {
    if (isSignUp) {
      if (name.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        setValidationError('Please fill in all fields.');
        return false;
      }
    } else {
      if (email.trim() === '' || password.trim() === '') {
        setValidationError('Please fill in all fields.');
        return false;
      }
    }

    if (!isStrongPassword(password)) {
      setValidationError('Password must be at least 8 characters long and include numbers.');
      return false;
    }

    if (isSignUp && password !== confirmPassword) {
      setValidationError("Passwords don't match.");
      return false;
    }

    setValidationError(null);
    return true;
  };

  const isStrongPassword = (value) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
      <div className="form sign-in">
        {isSignUp && (
          <label>
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        )}
        <label>
          <span>{isSignUp ? 'Email' : 'Username'}</span>
          <input
            type="text"
            value={isSignUp ? email : name}
            onChange={(e) =>
              isSignUp ? setEmail(e.target.value) : setName(e.target.value)
            }
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {isSignUp && (
          <label>
            <span>Confirm Password</span>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        )}
        {validationError && <p className="validation-error">{validationError}</p>}
        <Link to="/homepage">
          <button type="button" className="submit" onClick={handleSubmit}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </Link>
        {loggedInUser && (
          <p className="logged-in-message">Logged in as {loggedInUser}</p>
        )}
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h3>Don't have an account? Please Sign up!</h3>
          </div>
          <div className="img__text m--in">
            <h3>If you already have an account, just sign in.</h3>
          </div>
          <div className="img__btn">
            <span className="m--up" onClick={toggleAuthMode}>
              Sign Up
            </span>
            <span className="m--in" onClick={toggleAuthMode}>
              Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
