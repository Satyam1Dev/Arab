import React, { useState } from "react";
import { useAuth } from "../component/AuthContext"; // Import useAuth hook
import Header from "../component/header";
import { Link } from "react-router-dom";
import TermsAndConditions from "./TermsAndConditions";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const { user, isAuthenticated } = useAuth(); // Use the useAuth hook
  const [showDialog, setShowDialog] = useState(false);
  const [image, setImage] = useState(localStorage.getItem('profileImage') || '');

  // Define the updateHeaderImage function
  const updateHeaderImage = (url) => {
    // Logic to update the header image
    console.log("Updating header image with URL:", url);
    localStorage.setItem('profileImage', url);
  };

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      // Call the updateHeaderImage function from the Profile component
      updateHeaderImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header updateHeaderImage={updateHeaderImage} />
      <div className="container ">
        <h2>Profile Page</h2>
        {isAuthenticated ? (
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center">
              <div className="position-relative">
                <img
                  src={
                    image ||
                    "https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg"
                  }
                  alt="Profile"
                  width={"200"}
                />
              </div>
              <p>Full Name: {user.fullName}</p>
              <p>Email: {user.email}</p>
              <p>Password: {user.password}</p>
              <label htmlFor="profileImage" className="camera-icon">
                <button
                  className="btn btn-outline-primary mt-3"
                  onClick={() =>
                    document.getElementById("profileImage").click()
                  }
                >
                  Update Profile picture
                  <FaCamera />
                  <input
                    type="file"
                    id="profileImage"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </button>
              </label>
            </div>
            <div className="mt-3 d-flex justify-content-center">
              <button
                className="btn btn-outline-primary me-5"
                onClick={handleOpenDialog}
              >
                See T & C
              </button>
              {showDialog && (
                <TermsAndConditions onCancel={() => setShowDialog(false)} />
              )}
              <button className="btn btn-outline-primary">
                Change Password
              </button>
            </div>
            <div className="col-md-3"></div>
          </div>
        ) : (
          <div className="text-center">
            <p>
              Please log in to view your profile. Currently, you are logged out
            </p>
            <Link className="btn btn-outline-primary mt-3" to="/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
