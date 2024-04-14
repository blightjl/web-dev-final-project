import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { CiShop } from 'react-icons/ci';
import { FaEdit } from "react-icons/fa";

import "./index.css"
import "../ColorScheme.css";


interface EditProfileProps {
    onClose: () => void;
    onUpdateProfile: (updatedInfo: any) => void; // Define prop type for updating profile
  }
  
  function EditProfile(props: EditProfileProps) {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [profilePicture, setProfilePicture] = useState<File | null>(null);
  
    const handleSave = () => {
      const updatedInfo = {
        name: name,
        bio: bio,
        profilePicture: profilePicture ? URL.createObjectURL(profilePicture) : null,
      };
      
      props.onUpdateProfile(updatedInfo);
      props.onClose();
    };
  
    return (
      <div className="edit-profile-modal">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="profilePicture">Profile Picture:</label>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={(e) =>
                setProfilePicture(e.target.files ? e.target.files[0] : null)
              }
            />
          </div>
          <div className="button-container">
            <button type="button" onClick={props.onClose} className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    );
  }
  
  export default EditProfile;