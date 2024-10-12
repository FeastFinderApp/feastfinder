import React, { useState } from "react";
import './UserProfile.css';

const UserProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handler to update selected image
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      
      {/* User Photo Section */}
      <div className="profile-photo">
        {selectedImage ? (
          <img src={selectedImage} alt="User Profile" className="profile-photo-preview" />
        ) : (
          <div className="profile-photo-placeholder">No photo uploaded</div>
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      <div className="profile-info">
        <div className="profile-item">
          <label>Username:</label>
          <span>Pogi_si_Mark_123</span>   {/* placeholder */}
        </div>

        <div className="profile-item">
          <label>Bio:</label>
          <span>Yes I am Mark.</span>   {/* placeholder */}
        </div>

        <div className="profile-item">
          <label>Contact Info:</label>
          <span>maruko@example.com</span>   {/* placeholder */}
        </div>

        <div className="profile-item">
          <label>Account Info:</label>
          <span>Premium User since 2024</span>   {/* placeholder */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
