import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/HowItWorks.css";

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Sign Up & Setup",
      description:
        "Create your account and complete the quick setup process in minutes.",
      image: "step1",
    },
    {
      title: "Import Your Data",
      description:
        "Seamlessly import your existing data with our intuitive tools.",
      image: "step2",
    },
    {
      title: "Customize & Automate",
      description:
        "Tailor the platform to your needs and set up automation workflows.",
      image: "step3",
    },
    {
      title: "Grow Your Business",
      description: "Watch your productivity and results improve from day one.",
      image: "step4",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="how-it-works section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <h2>How it works</h2>
          <p>Get started in four simple steps</p>
        </motion.div>

        <div className="how-it-works-content">
          <div className="steps-indicator">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`step-tab ${currentStep === index ? "active" : ""}`}
                onClick={() => setCurrentStep(index)}>
                <span>0{index + 1}</span>
                {step.title}
              </button>
            ))}
          </div>

          <div className="step-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="step-visual">
                <div className="phone-mockup">
                  <div className="phone-frame">
                    <div className="phone-screen">
                      <div
                        className={`screen-content ${steps[currentStep].image}`}>
                        {/* Screen content would go here */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="step-text">
                  <h3>{steps[currentStep].title}</h3>
                  <p>{steps[currentStep].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
