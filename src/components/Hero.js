import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>
            <h1>Powerful software that drives your business forward</h1>
            <p>
              Streamline operations, boost productivity, and achieve remarkable
              growth with our all-in-one platform designed for modern
              businesses.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Start Free Trial</button>
              <button className="btn btn-secondary">View Demo</button>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="device-mockup">
              <div className="laptop-frame">
                <div className="laptop-screen">
                  <div className="screen-content">
                    <div className="dashboard-preview">
                      <div className="chart-area"></div>
                      <div className="stats-grid">
                        <div className="stat-card"></div>
                        <div className="stat-card"></div>
                        <div className="stat-card"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
