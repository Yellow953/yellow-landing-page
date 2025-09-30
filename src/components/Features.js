import React from "react";
import { motion } from "framer-motion";
import "../styles/Features.css";

const Features = () => {
  const features = [
    {
      title: "Powerful Analytics",
      description:
        "Gain valuable insights with our advanced analytics dashboard.",
      icon: "📊",
    },
    {
      title: "Seamless Integration",
      description:
        "Connect with your favorite tools and services effortlessly.",
      icon: "🔌",
    },
    {
      title: "Secure Data",
      description:
        "Enterprise-grade security to keep your data safe and protected.",
      icon: "🔒",
    },
    {
      title: "Automated Workflows",
      description:
        "Save time with intelligent automation and custom workflows.",
      icon: "⚡",
    },
    {
      title: "Team Collaboration",
      description:
        "Work together seamlessly with built-in collaboration tools.",
      icon: "👥",
    },
    {
      title: "Customizable",
      description: "Tailor the platform to fit your specific business needs.",
      icon: "🎨",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="features"
      className="features">
      <div className="container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <h2>Everything you need to succeed</h2>
          <p>
            Our comprehensive platform provides all the tools your business
            needs to grow and thrive.
          </p>
        </motion.div>
        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
