import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import UserProfile from "./UserProfile";
import './LoginForm.css';

function LoginForm() {
  const { login, logout, user } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: username,
      email: username + "@example.com",
    };

    login(userData);
    setUsername("");
    setPassword("");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="login-form">
      <h2>{user ? `Welcome, ${user.name}` : "Login"}</h2>

      <form onSubmit={handleSubmit}>
        {!user && (
          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </>
        )}
        {user && (
          <button type="button" onClick={handleLogout}>Logout</button>
        )}
      </form>

      <UserProfile />
    </div>
  );
}

export default LoginForm;
