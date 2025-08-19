import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  RiCloseLine,
  RiDeleteBinLine,
  RiShoppingBagLine,
  RiShoppingCartLine,
} from "@remixicon/react";
import NavBar from "./NavBar";

const CompFive = () => {
  const [houses, setHouses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isOpen, setIsOpen] = useState(false);
  const [table, setTable] = useState("juja");
  const navigate = useNavigate();
  const image_url = "https://tommymainoo.pythonanywhere.com/static/images/";

  const toggleCart = () => setIsOpen(!isOpen);

  const addToCart = (house) => {
    const houseWithCartId = { ...house, cartId: Date.now() };
    setCartItems((prev) => [...prev, houseWithCartId]);
  };

  const removeFromCart = (cartId) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const fetchHouses = async () => {
    setLoading("Loading houses...");
    try {
      const response = await axios.get(
        `https://tommymainoo.pythonanywhere.com/api/get_products/${table}`
      );
      const data = response.data;
      const houseArray = Array.isArray(data)
        ? data
        : Array.isArray(data.houses)
        ? data.houses
        : [];
      setHouses(houseArray);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Error loading houses.");
    } finally {
      setLoading("");
    }
  };

  useEffect(() => {
    fetchHouses();
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) setCartItems(JSON.parse(storedCart));
  }, [table]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const filtered = houses.filter(
    (house) =>
      house.product_name?.toLowerCase().includes(search.toLowerCase()) ||
      house.product_description?.toLowerCase().includes(search.toLowerCase())
  );

  const showMore = () => setVisibleCount((prev) => prev + 4);

  return (
    <div >
        <NavBar />
      <div className="container my-4">
        {/* Top Filters */}
        <div className="row mb-3 align-items-center">
          <div className="col-md-5">
            <input
              type="search"
              className="form-control modern-input"
              placeholder="Search for houses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-4 text-end">
            <button className="cart-toggle-btn" onClick={toggleCart}>
              <RiShoppingCartLine size={28} />
              <span className="cart-count">{cartItems.length}</span>
            </button>
          </div>
        </div>

        {loading && <p className="text-info">{loading}</p>}
        {error && <p className="text-danger">{error}</p>}

        <h2 className="mb-4 modern-heading">
          JUJA
        </h2>

        <div className="row">
          {filtered.slice(0, visibleCount).map((house) => (
            <div className="col-md-3 mb-4" key={house.id}>
              <div className="house-card shadow-sm">
                <img
                  src={image_url + house.product_photo}
                  alt={house.product_name}
                  className="house-img"
                />
                <div className="house-info">
                  <h5 className="house-title">{house.product_name}</h5>
                  <p className="house-desc">
                    {house.product_description?.slice(0, 60)}...
                  </p>
                  <p className="house-price">KES {house.product_cost}</p>
                  <div className="house-actions">
                    <button
                      className="btn btn-rent"
                      onClick={() =>
                        navigate("/mpesapayment", { state: { item: house } })
                      }
                    >
                      Rent Now
                    </button>
                    <RiShoppingBagLine
                      size={28}
                      className="add-cart-icon"
                      onClick={() => addToCart(house)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="text-center mt-3">
            <button className="btn btn-show-more" onClick={showMore}>
              Show More
            </button>
          </div>
        )}

        {/* Cart Drawer */}
        <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
          <header className="cart-header">
            <h4>Your Cart</h4>
            <RiCloseLine onClick={toggleCart} className="cart-close-icon" />
          </header>
          {cartItems.length === 0 ? (
            <p className="mt-3">Your cart is empty.</p>
          ) : (
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.cartId} className="cart-item">
                  <img
                    src={image_url + item.product_photo}
                    alt=""
                    className="cart-item-img"
                  />
                  <div className="cart-item-info">
                    <p className="fw-bold">{item.product_name}</p>
                    <p>KES {item.product_cost}</p>
                    <div className="cart-item-actions">
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() =>
                          navigate("/mpesapayment", { state: { item } })
                        }
                      >
                        Pay
                      </button>
                      <RiDeleteBinLine
                        onClick={() => removeFromCart(item.cartId)}
                        className="delete-icon"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompFive;
