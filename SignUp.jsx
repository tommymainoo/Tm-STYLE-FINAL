import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait...");
    setError("");
    setSuccess("");

    try {
      const data = new FormData();
      data.append("username", username);
      data.append("password", password);
      data.append("email", email);
      data.append("phone", phone);

      const response = await axios.post(
        "https://tommymainoo.pythonanywhere.com/api/sign_up",
        data
      );

      setLoading("");
      setSuccess(response.data.message || "Welcome ");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setLoading("");
      setError(err.response?.data?.error || "Failed to sign up.");
    }
  };

  return (
    <div
      className="signin-container"
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <h2
          className="signin-title"
          style={{ textAlign: "center", color: "#080808ff" }}
        >
          Join TM Style Housing
        </h2>
        <p
          className="signin-subtitle"
          style={{ textAlign: "center", color: "#131212ff", marginBottom: "1.5rem" }}
        >
          Create your account to get started
        </p>

        <form onSubmit={submit}>
          {success && <div className="alert alert-success">{success}{username}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          {loading && <div className="loading">{loading}</div>}

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "#fff",
            }}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "#fff",
              
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "#fff",
            }}
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "#fff",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            
          >
            Sign Up
          </button>
        </form>

        <div
          className="signup-link"
          style={{ marginTop: "1rem", textAlign: "center", color: "#ccc" }}
        >
          <p>
            Already have an account?{" "}
            <Link
              to="/"
              style={{ color: "#00acee", textDecoration: "none" }}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;