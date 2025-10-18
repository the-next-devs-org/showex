import { useState } from "react";
import "./ContactPage.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaComments,
  FaTelegram,
  FaInstagram,
  FaClock,
  FaGlobe,
} from "react-icons/fa";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p className="contact-subtitle">
            Have a question or need assistance? We're here to help. Reach out to
            us and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Main Content */}
        <div className="contact-content">
          {/* Contact Information Cards */}
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <p className="info-description">
              Connect with us through any of these channels. Our team is
              available 24/7 to assist you.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="card-icon">
                  <FaEnvelope />
                </div>
                <h3>Email Us</h3>
                <p>Send us an email anytime</p>
                <a href="mailto:support@ShoxEz.com" className="contact-link">
                  support@ShoxEz.com
                </a>
              </div>

              <div className="contact-card">
                <div className="card-icon">
                  <FaPhone />
                </div>
                <h3>Call Us</h3>
                <p>Mon-Fri from 8am to 6pm</p>
                <a href="tel:+1234567890" className="contact-link">
                  +1 (234) 567-890
                </a>
              </div>

              <div className="contact-card">
                <div className="card-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3>Visit Us</h3>
                <p>Come say hello at our office</p>
                <span className="contact-text">Global Financial Hub</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="additional-info">
              <div className="info-item">
                <FaClock className="info-icon" />
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              <div className="info-item">
                <FaGlobe className="info-icon" />
                <div>
                  <h4>Global Support</h4>
                  <p>We provide support in multiple languages</p>
                  <p>Available in 15+ countries worldwide</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a
                  href="https://t.me/ShoxjahonEshniyozov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn telegram"
                >
                  <FaTelegram />
                  <span>Telegram</span>
                </a>
                <a
                  href="https://t.me/EshniyozovShohjaxon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn telegram"
                >
                  <FaTelegram />
                  <span>Telegram</span>
                </a>
                <a
                  href="https://instagram.com/@Brat_00815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn instagram"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>
                Fill out the form below and we'll get back to you within 24
                hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser className="label-icon" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope className="label-icon" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <FaComments className="label-icon" />
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <FaComments className="label-icon" />
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  required
                />
              </div>

              <button
                type="submit"
                className={`submit-btn ${
                  formStatus === "submitting" ? "submitting" : ""
                } ${formStatus === "success" ? "success" : ""}`}
                disabled={formStatus === "submitting"}
              >
                {formStatus === "idle" && (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
                {formStatus === "submitting" && "Sending..."}
                {formStatus === "success" && "Message Sent!"}
                {formStatus === "error" && "Try Again"}
              </button>

              {formStatus === "success" && (
                <div className="form-message success">
                  ✓ Thank you for your message! We'll get back to you soon.
                </div>
              )}
              {formStatus === "error" && (
                <div className="form-message error">
                  ✗ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="map-section">
          <h2>Our Location</h2>
          <div className="map-placeholder">
            <div className="map-overlay">
              <FaMapMarkerAlt className="map-icon" />
              <p>Global Financial Hub</p>
              <span>Interactive map coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
