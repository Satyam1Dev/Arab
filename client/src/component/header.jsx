import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from '../component/AuthContext';
import "../style.css";

const Header = ({ cartCount, updateHeaderImage }) => { // Add updateHeaderImage prop
  const { userId } = useParams();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container">
        <div className="logo">
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
        </div>

        <div className="d-flex gap-5 align-items-center">
          <div className="ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-cart2"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
            {cartCount > 0 && (
              <span className="cart-count ml-1">{cartCount}</span>
            )}
          </div>
          <div className="dropdown">
            <a
              className="dropdown-image"
              type=""
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             <img
              src="https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg"
              alt=""
              width={"50px"}
            />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-light"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
              <Link className="dropdown-item" to="/products">
                  My Store
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/login"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
