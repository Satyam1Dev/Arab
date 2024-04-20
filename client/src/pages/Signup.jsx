import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../component/header";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirmPassword visibility

  const navigate = useNavigate(); // For programmatic navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://arab-server.onrender.com/api/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const newUser = await response.json();
        console.log("Signup successful:", newUser);
        // Perform further actions after successful signup, such as redirecting the user
        navigate("/login"); // Example: Redirect to the login page
      } else {
        const error = await response.json();
        console.error("Signup failed:", error);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };
  return (
    <div>
      <Header />
      <div className="container mt-5 mb-5">
        <h2>Sign Up</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="image-cont"></div>
          </div>
          <div className="col-md-6">
            <div className="d-flex content-cont">
              <div className="circle"></div>
              <h5 className="text-center">APP NAME</h5>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing
                elit.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="mb-3">
                <div className="position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control "
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                  <button
                    className="btn btn-outline-secondary position-absolute bottom-0 end-0 mb-2"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <div className="position-relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                  />
                  <button
                    className="btn btn-outline-secondary position-absolute bottom-0 end-0 mb-2"
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>
              <button type="submit" className="submit-button">
                Sign Up
              </button>
            </form>
            <p className="mt-5">
              Already Have an Account?{" "}
              <Link className="" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
