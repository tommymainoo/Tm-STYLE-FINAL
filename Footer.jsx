import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content container">
        <div className="footer-section brand">
          <h4>TM Style Housing</h4>
          <p>Your gateway to affordable and stylish living spaces in Kenya.</p>
        </div>

        <div className="footer-section links">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/homepage">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contact"></Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h5>Contact Us</h5>
          <p>Email: <a href="mailto:info@tmstylehousing.com">info@tmstylehousing.com</a></p>
          <p>Phone: <a href="tel:+254712345678">+254 712 345 678</a></p>
          <p>Location: Nairobi, Kenya</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TM Style Housing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
