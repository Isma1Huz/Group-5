import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '../src/Landingpage/Landing';
import Homepage from '../src/Homepage/Homepage';
import ContentPage from '../src/Contentpage/ContentPage';
import AuthForm from '../src/Login-signup/Auth';
import Profile from '../src/Contentpage/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
