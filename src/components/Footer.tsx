import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaTelegram,
  FaChartLine,
  FaNewspaper,
  FaCalendarAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", path: "/", icon: <FaChartLine /> },
    { label: "Markets", path: "/markets", icon: <FaChartLine /> },
    { label: "News", path: "/news", icon: <FaNewspaper /> },
    { label: "Analytics", path: "/analytics", icon: <FaChartLine /> },
    { label: "Calendar", path: "/calendar", icon: <FaCalendarAlt /> },
    { label: "Analysis", path: "/analysis", icon: <FaChartLine /> },
  ];

  const company = [
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Settings", path: "/settings" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
  ];

  const socialLinks = [
    {
      icon: <FaTelegram />,
      url: "https://t.me/ShoxjahonEshniyozov",
      label: "Telegram",
    },
    // { icon: <FaLinkedin />, url: "https://linkedin.com", label: "LinkedIn" },
    // { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
    {
      icon: <FaTelegram />,
      url: "https://t.me/EshniyozovShohjaxon",
      label: "Telegram",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/@Brat_00815",
      label: "Instagram",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Brand & Description */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-text-white">Shox</span>
              <span className="logo-text-cyan">EZ</span>
            </Link>
            <p className="footer-description">
              Your comprehensive platform for financial markets analysis,
              real-time data, economic indicators, and blockchain insights. Stay
              ahead with ShowEx.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    <span className="link-icon">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              {company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Get in Touch</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:info@showex.com" className="contact-link">
                  info@showex.com
                </a>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+1234567890" className="contact-link">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span className="contact-text">Global Financial Hub</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="copyright">
              © {currentYear} <span className="brand-name">ShowEx</span>. All
              rights reserved.
            </p>
            <p className="disclaimer">
              Market data and analysis are for informational purposes only.
            </p>
          </div>
          <div className="footer-bottom-right">
            <Link to="/privacy" className="footer-bottom-link">
              Privacy Policy
            </Link>
            <span className="separator">|</span>
            <Link to="/terms" className="footer-bottom-link">
              Terms of Service
            </Link>
            <span className="separator">|</span>
            <Link to="/contact" className="footer-bottom-link">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="footer-decoration">
          <div className="decoration-circle decoration-1"></div>
          <div className="decoration-circle decoration-2"></div>
          <div className="decoration-line"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
