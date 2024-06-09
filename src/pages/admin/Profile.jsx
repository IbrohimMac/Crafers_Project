import React from "react";
import "../../sass/admin/admin.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const Profile = () => {
  // Retrieve user data from local storage
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    // Clear local storage on logout
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    window.location.reload(); // Refresh the page
  };

  return (
    <div>
      <div className="linked">
        <Link className="link" to="/">
          <button className="linkBut">
            <FaArrowLeft className="detaIcon" />
            Orqaga qaytish
          </button>
        </Link>
      </div>
      <div className="profileBody">
        <h1 className="profileH">Profile</h1>
        {username && email ? (
          <div className="profileInfo">
            <div className="profileP">
              <p>Username: {username}</p>
            </div>
            <div className="profilePP">
              <p>Email: {email}</p>
            </div>
            <button className="logoutB" onClick={handleLogout}>
              <h3>Logout</h3>
            </button>
          </div>
        ) : (
          <p>No user information available</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
