import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>YourBrand</h2>
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul>
              <li>
                <a href="#how-it-works">How it works</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#plans">Plans</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </nav>

          <div className="header-buttons">
            <button className="btn btn-secondary">Login</button>
            <button className="btn btn-primary">Get Started</button>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
