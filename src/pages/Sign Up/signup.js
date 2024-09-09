import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; 
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("login-user")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send user data to the server
      const response = await axios.post("http://localhost:4444/user/register", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        alert("Registration successful!");
        navigate("/login"); // Navigate to login page
      } else {
        alert(response.data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      alert(error.response?.data.message || "An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="col2">
            <div className="col2-header">Register</div>
            <div className="register-body">
              <form onSubmit={handleSubmit}>
                <div className="register-form">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="register-form">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="register-form">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
