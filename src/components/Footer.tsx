import { Link } from "react-router-dom";
import "./Footer.css";
import { useTranslation } from 'react-i18next';
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
import { useEffect, useState } from "react"; // ✅ add this

const Footer = () => {
  // const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  // TODO: Re-enable when implementing authenticated menu items
  const [, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []); // Set authentication state on mount

  const quickLinks = [
    { label: "nav.home", path: "/", icon: <FaChartLine /> },
    { label: "nav.markets", path: "/markets", icon: <FaChartLine /> },
    { label: "nav.news", path: "/news", icon: <FaNewspaper /> },
    { label: "nav.analytics", path: "/analytics", icon: <FaChartLine /> },
    { label: "nav.calendar", path: "/calendar", icon: <FaCalendarAlt /> },
    // { label: "nav.analysis", path: "/analysis", icon: <FaChartLine /> },
  ];

  // ✅ Conditionally add “settings” only if logged in
  const company = [
    { label: "company.about", path: "/about" },
    { label: "company.contact", path: "/contact" },
    // ...(isAuthenticated ? [{ label: "company.settings", path: "/settings" }] : []),
    { label: "company.privacy", path: "/privacy" },
    { label: "company.terms", path: "/terms" },
  ];

  const socialLinks = [
    {
      icon: <FaTelegram />,
      url: "https://t.me/ShoxjahonEshniyozov",
      label: "social.telegram",
    },
    {
      icon: <FaTelegram />,
      url: "https://t.me/EshniyozovShohjaxon",
      label: "social.telegram",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/brat_00815/",
      label: "social.instagram",
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
            <p className="footer-description">{t('footer.description')}</p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={t(social.label)}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.quickLinks')}</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    <span className="link-icon">{link.icon}</span>
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.company')}</h3>
            <ul className="footer-links">
              {company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.getInTouch')}</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:admin@shoxez.com" className="contact-link">
                  admin@shoxez.com
                </a>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+212722239961" className="contact-link">
                  {/* +1 (234) 567-890 */}
                  +212722239961
                </a>
              </div>
              <div className="contact-item" style={{ alignItems: 'baseline' }}>
                <FaMapMarkerAlt className="contact-icon" />
                <span className="contact-text">{t('footer.location')}<svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="15"
                  height="15"
                  viewBox="0 0 7410 3900"
                >
                  <path d="M0,0h7410v3900H0" fill="#B31942" />
                  <path
                    d="M0,450h7410m0,600H0m0,600h7410m0,600H0m0,600h7410m0,600H0"
                    stroke="#FFF"
                    strokeWidth="300"
                  />
                  <path d="M0,0h2964v2100H0" fill="#0A3161" />
                  <rect width="7410" height="3900" fill="#B31942" />
                  <path
                    d="M0,450h7410m0,600H0m0,600h7410m0,600H0m0,600h7410m0,600H0"
                    stroke="#FFF"
                    strokeWidth="300"
                  />
                  <rect width="2964" height="2100" fill="#0A3161" />
                  <path
                    fill="#FFF"
                    d="M247 900l-123.559 90.06h-154.542l123.559 90.06-123.559 90.06h154.542l123.559 90.06 123.559-90.06h154.542l-123.559-90.06 123.559-90.06h-154.542zm494 0l-123.559 90.06h-154.542l123.559 90.06-123.559 90.06h154.542l123.559 90.06 123.559-90.06h154.542l-123.559-90.06 123.559-90.06h-154.542zm-247 300l-123.559 90.06h-154.542l123.559 90.06-123.559 90.06h154.542l123.559 90.06 123.559-90.06h154.542l-123.559-90.06 123.559-90.06h-154.542zm494 0l-123.559 90.06h-154.542l123.559 90.06-123.559 90.06h154.542l123.559 90.06 123.559-90.06h154.542l-123.559-90.06 123.559-90.06h-154.542zm-247 300l-123.559 90.06h-154.542l123.559 90.06-123.559 90.06h154.542l123.559 90.06 123.559-90.06h154.542l-123.559-90.06 123.559-90.06h-154.542zm494 0l-123.559 90.06h-154.542l123.559 90.06-123.559 90.06h154.542l123.559 90.06 123.559-90.06h154.542l-123.559-90.06 123.559-90.06h-154.542zm-247 300l-123.559 90.06h-154.542l123.559 90.06-123.559 90.06h154.542l123.559 90.06 123.559-90.06h154.542l-123.559-90.06 123.559-90.06h-154.542zm494 0l-123.559 90.06h-154.542l123.559 90.06-123.559 90.06h154.542l123.559 90.06 123.559-90.06h154.542l-123.559-90.06 123.559-90.06h-154.542zm-247 300l-123.559 90.06h-154.542l123.559 90.06-123.559 90.06h154.542l123.559 90.06 123.559-90.06h154.542l-123.559-90.06 123.559-90.06h-154.542zm494 0l-123.559 90.06h-154.542l123.559 90.06-123.559 90.06h154.542l123.559 90.06 123.559-90.06h154.542l-123.559-90.06 123.559-90.06h-154.542zm-247 300l-123.559 90.06h-154.542l123.559 90.06-123.559 90.06h154.542l123.559 90.06 123.559-90.06h154.542l-123.559-90.06 123.559-90.06h-154.542zm494 0l-123.559 90.06h-154.542l123.559 90.06-123.559 90.06h154.542l123.559 90.06 123.559-90.06h154.542l-123.559-90.06 123.559-90.06h-154.542zm-247 300l-123.559 90.06h-154.542l123.559 90.06-123.559 90.06h154.542l123.559 90.06 123.559-90.06h154.542l-123.559-90.06 123.559-90.06h-154.542zm494 0l-123.559 90.06h-154.542l123.559 90.06-123.559 90.06h154.542l123.559 90.06 123.559-90.06h154.542l-123.559-90.06 123.559-90.06h-154.542z"
                  />
                </svg></span>
              </div>
              {/* <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span className="contact-text">United States of America, New york</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            width: '100%',
          }}
        >
          <span className="neon-text" style={{ flex: 1, textAlign: 'left' }}>
            <span className="neon-highlight">
              {t('auth.founder')} Eshniyozov Shoxjahon Akmal ogli.
            </span>
          </span>

          <p
            className="copyright"
            style={{
              flex: 1,
              textAlign: 'right',
              margin: 0,
            }}
          >
            {/* © {currentYear} <span className="brand-name">ShoxEz</span>. {t('footer.rightsReserved')} */}
            📜 All rights reserved. WOUFX LLC © Delaware, USA
          </p>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            {/* <p className="disclaimer">{t('footer.disclaimer')}</p> */}
          </div>
          <div className="footer-bottom-right">
            <Link to="/privacy" className="footer-bottom-link">
              {t('company.privacy')}
            </Link>
            <span className="separator">|</span>
            <Link to="/terms" className="footer-bottom-link">
              {t('company.terms')}
            </Link>
            <span className="separator">|</span>
            <Link to="/contact" className="footer-bottom-link">
              {t('company.cookie')}
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
