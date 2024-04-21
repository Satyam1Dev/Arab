import React, { useState } from "react";
import { useAuth } from "../component/AuthContext";
import Header from "../component/header";
import { Link, useParams } from "react-router-dom";
import TermsAndConditions from "./TermsAndConditions";
import { FaCamera } from "react-icons/fa";
import ChangePassword from "../component/ChangePassword"; // Import the ChangePassword component

const Profile = () => {
  const { user, isAuthenticated } = useAuth();
  const [showDialog, setShowDialog] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [image, setImage] = useState(localStorage.getItem('profileImage') || '');
  const { id } = useParams(); // Retrieve user ID from URL params
  const updateHeaderImage = (url) => {
    console.log("Updating header image with URL:", url);
    localStorage.setItem('profileImage', url);
  };

  // Handle opening the password modal
  const handleOpenPasswordModal = () => {
    setShowPasswordModal(true);
  };

  // Handle closing the password modal
  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
  };

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      updateHeaderImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header />
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
              <p className="mt-4">{user.email}</p>
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
              <button className="btn btn-outline-primary" onClick={handleOpenPasswordModal}>
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

      {/* Password Update Modal */}
      {showPasswordModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header justify-content-between">
                <h5 className="modal-title">Change Password</h5>
                <button type="button" className="close btn btn-outline-primary" onClick={handleClosePasswordModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ChangePassword handleClosePasswordModal={handleClosePasswordModal} /> {/* Pass handleClosePasswordModal as props */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
