import React, { useState, useContext, useEffect } from "react";
import UserContext from "./UserContext";
import './LoginForm.css';

function UpdateProfile() {
  const { user, updateUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setMessage("Name and email cannot be empty");
      return;
    }

    const updatedData = {
      ...user,
      name: name.trim(),
      email: email.trim(),
    };

    updateUser(updatedData);
    setMessage("Profile updated successfully!");
  };

  if (!user) {
    return <p>Please login to update your profile.</p>;
  }

  return (
    <div className="update-profile">
      <h2>Update Profile</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default UpdateProfile;
