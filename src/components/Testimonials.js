import React from "react";
import { motion } from "framer-motion";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "This platform transformed our workflow. We've seen a 40% increase in productivity and our team collaboration has never been better.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      company: "TechCorp",
    },
    {
      text: "The automation features alone have saved us hundreds of hours monthly. The ROI was apparent within the first quarter.",
      author: "Michael Chen",
      role: "Operations Director",
      company: "InnovateCo",
    },
    {
      text: "Outstanding customer support and a platform that truly scales with your business. Highly recommended for growing companies.",
      author: "Emily Davis",
      role: "CTO",
      company: "GrowthLabs",
    },
  ];

  return (
    <section
      id="testimonials"
      className="testimonials section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <h2>Trusted by Industry Leaders</h2>
          <p>See what our customers say about their experience</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                  <span className="company">{testimonial.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
