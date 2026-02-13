import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import UserProfile from "./UserProfile";
import './LoginForm.css'

function LoginForm() {
  const { login, user } = useContext(UserContext);   
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

  return (
    <div className="login-form">  
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit" disabled={user !== null}>
          Login
        </button>
      </form>

      <UserProfile />
    </div>
  );
}

export default LoginForm;
