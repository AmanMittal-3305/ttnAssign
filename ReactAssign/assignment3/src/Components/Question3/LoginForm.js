import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import UserProfile from "./UserProfile";
import './LoginForm.css';

function LoginForm() {
  const { login, logout, user } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setError("Username and Password are required");
      return;
    }

    const userData = {
      name: username.trim(),
      email: username.trim() + "@example.com",
    };

    login(userData);
    setUsername("");
    setPassword("");
    setError("");
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
            {error && <p style={{ color: "red" }}>{error}</p>}

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
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </form>

      <UserProfile />
    </div>
  );
}

export default LoginForm;
