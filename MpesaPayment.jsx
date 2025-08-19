import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

const MpesaPayment = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const { Product, item } = location.state || {};
  const productData = Product || item;

  const image_url = "https://tommymainoo.pythonanywhere.com/static/images/";

  const submit = async (e) => {
    e.preventDefault();
    setMessage("Please wait...");
    try {
      const data = new FormData();
      data.append("phone", phone);
      data.append("amount", productData.product_cost);

      const response = await axios.post(
        "https://tommymainoo.pythonanywhere.com/api/mpesa_payment",
        data
      );
      setMessage("Please complete payment on your phone.");
    } catch (error) {
      setMessage("");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <NavBar />
      <div className="container d-flex justify-content-center align-items-center py-5">
        <div
          className="card shadow-lg p-4"
          style={{ maxWidth: "500px", width: "100%", borderRadius: "16px" }}
        >
          <h3 className="text-center mb-3" style={{ color: "#198754" }}>
            <b>LIPA NA MPESA</b>
          </h3>

          <form onSubmit={submit}>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <img
              src={image_url + productData.product_photo}
              alt={productData.product_name}
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "15px",
              }}
            />

            <div className="mb-3">
              <h5>{productData.product_name}</h5>
              <p style={{ fontSize: "18px", color: "#555" }}>
                <strong>Cost:</strong> KES {productData.product_cost}
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="form-label">
                <strong>Phone Number (Safaricom)</strong>
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="07XXXXXXXX"
                className="form-control"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success w-100"
              style={{
                padding: "12px",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "8px",
                transition: "background-color 0.3s",
              }}
            >
              Make Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MpesaPayment;
