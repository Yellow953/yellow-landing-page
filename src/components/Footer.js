import React from "react";
import { motion } from "framer-motion";
import "../styles/Footer.css";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations", "Updates", "Roadmap"],
    },
    {
      title: "Solutions",
      links: [
        "Small Business",
        "Enterprise",
        "Startups",
        "Agencies",
        "Non-profits",
      ],
    },
    {
      title: "Resources",
      links: ["Documentation", "Tutorials", "Blog", "Webinars", "Community"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "Partners", "Contact"],
    },
    {
      title: "Support",
      links: ["Help Center", "Status", "API Docs", "Security", "Compliance"],
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <div className="footer-brand">
              <h3>YourBrand</h3>
              <p>Powering the future of business software solutions</p>
              <div className="footer-buttons">
                <button className="btn btn-primary">Start Free Trial</button>
                <button className="btn btn-secondary">Contact Sales</button>
              </div>
            </div>

            <div className="footer-links-grid">
              {footerSections.map((section, index) => (
                <div
                  key={index}
                  className="footer-section">
                  <h4>{section.title}</h4>
                  <ul>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={`#${link.toLowerCase()}`}>{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="footer-bottom-content">
              <p>
                &copy; {new Date().getFullYear()} YourBrand. All rights
                reserved.
              </p>
              <div className="footer-legal">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#cookies">Cookie Policy</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
