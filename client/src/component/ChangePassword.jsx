import React, { useState } from "react";
import { useAuth } from "./AuthContext";

const ChangePassword = ({ handleClosePasswordModal }) => { // Receive handleClosePasswordModal as props
  const { isAuthenticated } = useAuth();
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = async () => {
    try {
      // Get user ID from local storage
      const userId = localStorage.getItem("userId");
      if (!userId) {
        throw new Error("User ID not found");
      }
  
      // Send a PUT request to update the password
      const response = await fetch(`http://localhost:3001/api/users/${userId}/password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: newPassword }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update password');
      }
  
      // Password updated successfully
      console.log('Password updated successfully');
  
      // Update password in local storage
      localStorage.setItem("password", newPassword);
  
      // Clear the password field after updating
      setNewPassword('');
      setError('');
  
      // Show success alert
      alert('Password updated successfully!');
      
      // Close the modal
      handleClosePasswordModal();
    } catch (error) {
      console.error('Error updating password:', error.message);
      setError('Failed to update password. Please try again.');
    }
  };
  
  if (!isAuthenticated) {
    return <div>Please log in to change your password.</div>;
  }

  return (
    <div>
      <h2>Change Password</h2>
      <div>
        <label htmlFor="newPassword">New Password:</label>
        <input
          className="form-control"
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      {error && <div className="error">{error}</div>}
      <button className="btn btn-outline-primary mt-3" onClick={handleChangePassword}>Update Password</button>
    </div>
  );
};

export default ChangePassword;
