import React from "react";
import "./Contact.css"; // optional CSS file

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>Have questions? Reach out to us!</p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>📍 123 Fitness Street, Chennai, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ support@fitflex.com</p>

          <div className="contact-socials">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
