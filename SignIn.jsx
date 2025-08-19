import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

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

      const response = await axios.post(
        "https://tommymainoo.pythonanywhere.com/api/signin",
        data
      );

      setLoading("");

      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setSuccess(response.data.welcome || "Welcome back ");

        // Delay redirect by 2 seconds
        setTimeout(() => {
          navigate("/homepage");
        }, 2000);
      } else {
        setError(response.data.message || "Login failed.");
      }
    } catch (err) {
      setLoading("");
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div
      className="signin-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ width: "100%", maxWidth: "400px", padding: "2rem" }}>
        <h2 style={{ textAlign: "center" }}>Welcome Back</h2>
        <p style={{ textAlign: "center" }}>
          Sign in to access TM Style Housing
        </p>

        <form onSubmit={submit}>
          {success && <div className="alert alert-success">{success}{username}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          {loading && <div className="loading ">{loading}</div>}

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
              backgroundColor: "transparent",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "#000",
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
              marginBottom: "1.5rem",
              backgroundColor: "transparent",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "#000",
            }}
          />

          <button className="btn btn-primary w-100" type="submit">
            Sign In
          </button>
        </form>

        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <p>
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
