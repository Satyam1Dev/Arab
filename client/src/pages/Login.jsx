import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../component/header';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../component/AuthContext';

const LoginPage = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate(); // For programmatic navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const user = await response.json();
        login(user); // Assuming the API returns the user data upon successful login
        // Store login data in local storage
        localStorage.setItem('loggedInUser', JSON.stringify(formData));
        navigate('/profile'); // Redirect to the profile page
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mt-5 mb-5">
        <h2>Login</h2>
        <div className="row align-items-center">
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
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <div className="position-relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
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
              <button type="submit" className="submit-button">
                Login
              </button>
            </form>

            <p className="mt-5">
              Don't Have Account?{' '}
              <Link className="" to="/signup">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
