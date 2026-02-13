import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
}

export default UserProfile;