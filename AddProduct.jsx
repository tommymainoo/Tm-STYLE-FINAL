import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";

const AddProduct = () => {
  const [table, setTable] = useState("table");
  const [productname, setProductName] = useState("");
  const [productdescription, setDescription] = useState("");
  const [productcost, setProductCost] = useState("");
  const [productphoto, setProductPhoto] = useState(null);

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    // Validate
    if (!table) return setError("Please select a location.");

    setLoading("Uploading...");
    setSuccess("");
    setError("");

    try {
      const data = new FormData();
      data.append("product_name", productname);
      data.append("product_description", productdescription);
      data.append("product_cost", productcost);
      data.append("product_photo", productphoto);

      const response = await axios.post(
        `https://tommymainoo.pythonanywhere.com/api/add_products/${table}`,
        data
      );

      setLoading("");
      setSuccess(response.data.message || "Upload successful!");
      setError("");

      // Reset form
      setProductName("");
      setDescription("");
      setProductCost("");
      setProductPhoto(null);
      setTable("");
    } catch (err) {
      console.error(err);
      setLoading("");
      setError(err.response?.data?.error || "Failed to upload.");
    }
  };

  return (
    <div className="">
      <NavBar />
      
      <div className="container my-4 ">
        <div className="row justify-content-center">
          <div className="col-md-6 shadow p-4 rounded bg-light">
            <h3 className="text-dark mb-4">Add House Listing</h3>

            {loading && <div className="text-info">{loading}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={submit}>
              <div className="mb-3">
                <label>
                  <strong>Select Location Table:</strong>
                </label>
                <select
                  className="form-select"
                  value={table}
                  onChange={(e) => setTable(e.target.value)}
                  required
                >
                  <option value="">-- Location --</option>
                  <option value="juja">Juja</option>
                  <option value="parklands">Parklands</option>
                  <option value="imaara_daima">Imaara Daima</option>
                  <option value="karen">Karen</option>
                </select>
              </div>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="House name"
                value={productname}
                onChange={(e) => setProductName(e.target.value)}
                required
              />

              <textarea
                rows={3}
                className="form-control mb-3"
                placeholder="Description"
                value={productdescription}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <input
                type="number"
                className="form-control mb-3"
                placeholder="Price"
                value={productcost}
                onChange={(e) => setProductCost(e.target.value)}
                required
              />

              <div className="mb-2">
                <strong>House Image</strong>
              </div>
              <input
                type="file"
                className="form-control mb-4"
                accept="image/*"
                onChange={(e) => setProductPhoto(e.target.files[0])}
                required
              />

              <button
                className="btn btn-primary w-100"
                type="submit"
                disabled={loading}
              >
                {loading ? "Uploading..." : "Upload House"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AddProduct;
