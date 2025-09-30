import React from "react";
import { motion } from "framer-motion";
import "../styles/Section1.css";

const Section1 = () => {
  const features = [
    {
      title: "Advanced Analytics",
      description:
        "Gain deep insights into your business performance with real-time analytics and customizable dashboards.",
      image: "analytics",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks and create efficient workflows that save time and reduce errors.",
      image: "automation",
    },
    {
      title: "Team Collaboration",
      description:
        "Work seamlessly with your team using built-in collaboration tools and project management features.",
      image: "collaboration",
    },
  ];

  return (
    <section
      id="features"
      className="section1 section-padding">
      <div className="container">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`feature-row ${
              index % 2 === 0 ? "left-image" : "right-image"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}>
            <div className="feature-image">
              <div className="laptop-mockup">
                <div className="laptop-frame">
                  <div className="laptop-screen">
                    <div className={`screen-content ${feature.image}`}>
                      {/* Feature-specific screen content */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-text">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section1;
