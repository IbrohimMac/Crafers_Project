import React, { useState, useEffect } from "react";
import "../../sass/admin/admin.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Check if user data is stored in local storage
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");

    if (storedUsername && storedEmail) {
      setUsername(storedUsername);
      setEmail(storedEmail);
      onLogin(storedUsername, storedEmail);
    }
  }, [onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to local storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    onLogin(username, email);
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
      <div className="loginBody">
        <h1 className="loginH">Login</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="loginInput">
            <input
              className="loginIn"
              type="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="loginInput">
            <input
              className="loginIn"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button className="loginB" type="submit">
            <h3>Login</h3>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
