import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Login from "./pages/admin/Login";
import Profile from "./pages/admin/Profile";
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
  });
  const handleLogin = (username, email) => {
    setUserInfo({ username, email });
    setIsAuthenticated(true);
  };

  return (
    <div>
      <div>
        {/* <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              
            </Routes>
            <Footer />
          </div>
        </Router> */}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login onLogin={handleLogin} />
              ) : (
                <div>
                  <h1>Admin</h1>
                  <nav>
                    <button onClick={() => setIsAuthenticated(false)}>
                      Logout
                    </button>
                  </nav>
                  <Profile userInfo={userInfo} />
                </div>
              )
            }
          />
          <Route path="/details/:id" element={<Details />} />
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <Profile userInfo={userInfo} setUserInfo={setUserInfo} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/login" : "/login"} />}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
