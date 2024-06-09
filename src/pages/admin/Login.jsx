import React, { useState } from "react";
import "../../sass/admin/admin.css";
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, email);
  };

  return (
    <div className="loginBody">
      <h2 className="loginH">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="loginIn"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="loginIn"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="loginB" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
