import React from 'react';
import './Login.css'

function Login({ onLogin, isLoggedIn, setIsLoggedIn }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();   
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>


      {isLoggedIn ? (
        <div className='login-back'>
          <h2>Welcome back! </h2>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div className='login'>
          <h1>Please log in</h1>
          <form className='login-form' onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button className='login-button' type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
