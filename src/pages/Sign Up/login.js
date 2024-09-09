import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./loginstyle.css"; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // If the user is already logged in, redirect to the home page
    if (localStorage.getItem("login-user")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend for authentication
      const response = await axios.post("http://localhost:4444/user/login", {
        email,
        password,
      });

      // Assuming the response contains a token and user info
      const { token, user } = response.data;

      // Store the token and user info in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("login-user", JSON.stringify(user));

      // Redirect to the genre page after successful login
      navigate("/genre");
    } catch (error) {
      console.log("Login error:", error);
      alert("Invalid email or password");
    }
  };

  // Function to make authenticated requests
  const fetchProtectedData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:4444/protected", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching protected data:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-row">
        <div className="login-col">
          <div className="login-card">
            <div className="login-card-header">Login</div>
            <div className="login-card-body">
              <form onSubmit={handleSubmit}>
                <div className="login-form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="login-form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="login-form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="login-form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="login-btn">
                  Login
                </button>
              </form>
              <button onClick={fetchProtectedData}>Fetch Protected Data</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
