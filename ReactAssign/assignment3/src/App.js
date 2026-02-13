import React, { useState, useContext } from 'react';
import './App.css';
import ThemePage from './Components/Question2/Q2';
import Login from './Components/Question1/Login';
import { Routes, Route, Link } from 'react-router-dom';
import { ThemeContext } from "./Components/Question2/ThemeProvider";
import LoginForm from './Components/Question3/LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const { theme } = useContext(ThemeContext);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className={`App ${theme}`}>

      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/second-login-form">Login using useContext</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ThemePage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />} />
        <Route path="/second-login-form" element={<LoginForm onLogin={handleLogin} isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />} />

      </Routes>
    </div>
  );
}

export default App;
