import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Plans.css";

const Plans = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      price: { monthly: 29, annual: 24 },
      features: [
        "Up to 5 users",
        "Basic analytics",
        "10GB storage",
        "Email support",
        "Basic automation",
      ],
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: { monthly: 79, annual: 66 },
      features: [
        "Up to 20 users",
        "Advanced analytics",
        "100GB storage",
        "Priority support",
        "Advanced automation",
        "API access",
        "Custom workflows",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: { monthly: 199, annual: 166 },
      features: [
        "Unlimited users",
        "Custom analytics",
        "1TB storage",
        "24/7 dedicated support",
        "Full automation suite",
        "Advanced API",
        "Custom integrations",
        "SLA guarantee",
      ],
    },
  ];

  return (
    <section
      id="plans"
      className="plans section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <h2>Choose Your Plan</h2>
          <p>Flexible pricing that scales with your business</p>

          <div className="billing-toggle">
            <span className={!isAnnual ? "active" : ""}>Monthly</span>
            <button
              className={`toggle-switch ${isAnnual ? "annual" : "monthly"}`}
              onClick={() => setIsAnnual(!isAnnual)}>
              <span className="toggle-slider"></span>
            </button>
            <span className={isAnnual ? "active" : ""}>Annual (Save 20%)</span>
          </div>
        </motion.div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`plan-card ${plan.featured ? "featured" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              {plan.featured && (
                <div className="featured-badge">Most Popular</div>
              )}

              <div className="plan-header">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>

                <div className="plan-price">
                  <span className="price">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="period">/month</span>
                </div>

                {isAnnual && (
                  <div className="annual-savings">Billed annually</div>
                )}
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>

              <button
                className={`btn ${
                  plan.featured ? "btn-primary" : "btn-secondary"
                } plan-button`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
