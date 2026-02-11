import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams(); // Get the dynamic parameter

  return (
    <div className="page">
      <h1>👤 User Profile</h1>
      <p>Showing profile for User ID: {userId}</p>
    </div>
  );
}

export default UserProfile;
