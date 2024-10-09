import React from "react";
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-info">
        <div className="profile-item">
          <label>Username:</label>
          <span>JohnDoe123</span>   {/* placeholder */}
        </div>

        <div className="profile-item">
          <label>Bio:</label>
          <span>Yes I am Mark.</span>   {/* placeholder */}
        </div>

        <div className="profile-item">
          <label>Contact Info:</label>
          <span>johndoe@example.com</span>   {/* placeholder */}
        </div>

        <div className="profile-item">
          <label>Account Info:</label>
          <span>Premium User since 2020</span>   {/* placeholder */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
