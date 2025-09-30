import React from "react";
import { motion } from "framer-motion";
import "../styles/Section2.css";

const Section2 = () => {
  const features = [
    {
      title: "Secure Data Management",
      description:
        "Enterprise-grade security ensures your data is protected with advanced encryption and compliance standards.",
      image: "security",
    },
    {
      title: "Custom Integration",
      description:
        "Connect with your favorite tools and services through our extensive API and integration library.",
      image: "integration",
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Grow without limits using our cloud-based infrastructure that scales with your business needs.",
      image: "scalability",
    },
  ];

  return (
    <section className="section2 section-padding">
      <div className="container">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`feature-row ${
              index % 2 === 0 ? "right-image" : "left-image"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}>
            <div className="feature-text">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <button className="btn btn-primary">Learn More</button>
            </div>

            <div className="feature-image">
              <div className="tablet-mockup">
                <div className="tablet-frame">
                  <div className="tablet-screen">
                    <div className={`screen-content ${feature.image}`}>
                      {/* Feature-specific screen content */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
