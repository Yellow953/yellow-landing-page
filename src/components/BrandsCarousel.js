import React from "react";
import { motion } from "framer-motion";
import "../styles/BrandsCarousel.css";

const BrandsCarousel = () => {
  const brands = [
    "TechCorp",
    "InnovateCo",
    "GrowthLabs",
    "FutureSoft",
    "NextGen",
    "Visionary",
  ];

  return (
    <section className="brands-section">
      <div className="container">
        <motion.div
          className="brands-carousel"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <div className="brands-track">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="brand-item">
                {brand}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
