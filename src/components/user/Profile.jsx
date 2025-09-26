import React, { useState } from 'react';

const Profile = () => {
  // Initialize profile state
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    email: "john.doe@example.com",
    mobile: "123-456-7890",
  });

  // Track if edit mode is on for names
  const [isEditing, setIsEditing] = useState(false);

  // Temporary state to hold edits before saving
  const [tempProfile, setTempProfile] = useState({ ...profile });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // When Edit clicked
  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  // When Save clicked
  const handleSave = (e) => {
    e.preventDefault();
    setProfile(tempProfile);
    setIsEditing(false);
  };

  // When Cancel clicked (optional)
  const handleCancel = (e) => {
    e.preventDefault();
    setTempProfile(profile); // reset edits
    setIsEditing(false);
  };

  return (
    <div className="card p-4 border bd">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Personal Information</h5>
        {!isEditing ? (
          <a href="#" className="text-primary" onClick={handleEdit}>Edit</a>
        ) : (
          <div>
            <button className="btn btn-sm btn-success me-2" onClick={handleSave}>Save</button>
            <button className="btn btn-sm btn-secondary" onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={tempProfile.firstName}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={tempProfile.lastName}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
      </div>

      {/* Gender */}
      <div className="mb-4">
        <label className="form-label d-block">Your Gender</label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            checked={tempProfile.gender === "Male"}
            onChange={handleChange}
            disabled={!isEditing}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            checked={tempProfile.gender === "Female"}
            onChange={handleChange}
            disabled={!isEditing}
          />
          <label className="form-check-label">Female</label>
        </div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-1">Email Address</h6>
          {!isEditing && (
            <a href="#" className="text-primary" onClick={handleEdit}>Edit</a>
          )}
        </div>
        <input
          type="email"
          name="email"
          className="form-control"
          value={tempProfile.email}
          onChange={handleChange}
          readOnly={!isEditing}
        />
      </div>

      {/* Mobile */}
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-1">Mobile Number</h6>
          {!isEditing && (
            <a href="#" className="text-primary" onClick={handleEdit}>Edit</a>
          )}
        </div>
        <input
          type="text"
          name="mobile"
          className="form-control"
          value={tempProfile.mobile}
          onChange={handleChange}
          readOnly={!isEditing}
        />
      </div>
    </div>
  );
};

export default Profile;
