import { useState } from "react";
import "./PrivacyPage.css";
import {
  FaShieldAlt,
  FaLock,
  FaEye,
  FaCookie,
  FaUserShield,
  FaExclamationTriangle,
} from "react-icons/fa";

function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "intro", title: "Introduction", icon: <FaShieldAlt /> },
    { id: "collection", title: "Information We Collect", icon: <FaEye /> },
    {
      id: "usage",
      title: "How We Use Your Information",
      icon: <FaUserShield />,
    },
    {
      id: "sharing",
      title: "Information Sharing",
      icon: <FaExclamationTriangle />,
    },
    { id: "security", title: "Data Security", icon: <FaLock /> },
    { id: "cookies", title: "Cookies & Tracking", icon: <FaCookie /> },
    { id: "rights", title: "Your Rights", icon: <FaUserShield /> },
    { id: "contact", title: "Contact Us", icon: <FaShieldAlt /> },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="privacy-page">
      <div className="privacy-container">
        {/* Header */}
        <div className="privacy-header">
          <div className="header-icon">
            <FaShieldAlt />
          </div>
          <h1>Privacy Policy</h1>
          <p className="privacy-subtitle">
            Your privacy is important to us. This policy outlines how we
            collect, use, and protect your personal information.
          </p>
          <div className="last-updated">
            Last Updated: <span>October 18, 2025</span>
          </div>
        </div>

        <div className="privacy-content-wrapper">
          {/* Table of Contents */}
          <aside className="privacy-sidebar">
            <div className="sidebar-sticky">
              <h3>Table of Contents</h3>
              <nav className="privacy-nav">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    className={`nav-item ${
                      activeSection === section.id ? "active" : ""
                    }`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    <span className="nav-icon">{section.icon}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="privacy-main">
            <section id="intro" className="privacy-section">
              <h2>
                <FaShieldAlt className="section-icon" /> Introduction
              </h2>
              <div className="section-content">
                <p>
                  Welcome to ShoxEz ("we," "our," or "us"). We are committed to
                  protecting your personal information and your right to
                  privacy. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our
                  website and use our services.
                </p>
                <p>
                  By accessing or using ShoxEz, you agree to the collection and
                  use of information in accordance with this Privacy Policy. If
                  you do not agree with the terms of this privacy policy, please
                  do not access the site.
                </p>
                <div className="info-box">
                  <strong>Key Points:</strong>
                  <ul>
                    <li>
                      We collect minimal personal information necessary for
                      service delivery
                    </li>
                    <li>Your data is encrypted and securely stored</li>
                    <li>
                      We never sell your personal information to third parties
                    </li>
                    <li>
                      You have full control over your data and privacy settings
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="collection" className="privacy-section">
              <h2>
                <FaEye className="section-icon" /> Information We Collect
              </h2>
              <div className="section-content">
                <h3>Personal Information</h3>
                <p>
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className="styled-list">
                  <li>Register for an account</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us for support</li>
                  <li>Participate in surveys or promotions</li>
                </ul>

                <div className="data-table">
                  <h4>Types of Data Collected:</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Examples</th>
                        <th>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Identity Data</td>
                        <td>Name, username, email</td>
                        <td>Account creation & communication</td>
                      </tr>
                      <tr>
                        <td>Usage Data</td>
                        <td>Pages visited, features used</td>
                        <td>Service improvement</td>
                      </tr>
                      <tr>
                        <td>Device Data</td>
                        <td>IP address, browser type</td>
                        <td>Security & optimization</td>
                      </tr>
                      <tr>
                        <td>Preference Data</td>
                        <td>Settings, favorites</td>
                        <td>Personalization</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>Automatically Collected Information</h3>
                <p>
                  When you access ShoxEz, we may automatically collect certain
                  information about your device, including your IP address,
                  browser type, operating system, referring URLs, and pages
                  visited. This information helps us improve our services and
                  user experience.
                </p>
              </div>
            </section>

            <section id="usage" className="privacy-section">
              <h2>
                <FaUserShield className="section-icon" /> How We Use Your
                Information
              </h2>
              <div className="section-content">
                <p>
                  We use the information we collect for the following purposes:
                </p>

                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Service Delivery</h4>
                    <p>
                      To provide, maintain, and improve our platform and
                      services
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Communication</h4>
                    <p>
                      To send you updates, newsletters, and respond to inquiries
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Personalization</h4>
                    <p>
                      To customize your experience and provide relevant content
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Security</h4>
                    <p>
                      To detect, prevent, and address fraud and security issues
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Analytics</h4>
                    <p>To understand how users interact with our platform</p>
                  </div>
                  <div className="usage-card">
                    <h4>Legal Compliance</h4>
                    <p>
                      To comply with legal obligations and enforce our terms
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="sharing" className="privacy-section">
              <h2>
                <FaExclamationTriangle className="section-icon" /> Information
                Sharing
              </h2>
              <div className="section-content">
                <div className="warning-box">
                  <FaExclamationTriangle />
                  <div>
                    <strong>Important:</strong> We do not sell your personal
                    information to third parties.
                  </div>
                </div>

                <p>
                  We may share your information in the following limited
                  circumstances:
                </p>

                <div className="sharing-list">
                  <div className="sharing-item">
                    <h4>Service Providers</h4>
                    <p>
                      We may share data with trusted third-party service
                      providers who assist us in operating our platform (e.g.,
                      hosting, analytics, customer support). These providers are
                      contractually obligated to protect your data.
                    </p>
                  </div>
                  <div className="sharing-item">
                    <h4>Legal Requirements</h4>
                    <p>
                      We may disclose your information if required by law, court
                      order, or governmental regulation, or if we believe
                      disclosure is necessary to protect our rights or the
                      safety of others.
                    </p>
                  </div>
                  <div className="sharing-item">
                    <h4>Business Transfers</h4>
                    <p>
                      In the event of a merger, acquisition, or sale of assets,
                      your information may be transferred as part of that
                      transaction. We will notify you of any such change.
                    </p>
                  </div>
                  <div className="sharing-item">
                    <h4>With Your Consent</h4>
                    <p>
                      We may share your information for any other purpose with
                      your explicit consent.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="security" className="privacy-section">
              <h2>
                <FaLock className="section-icon" /> Data Security
              </h2>
              <div className="section-content">
                <p>
                  We implement industry-standard security measures to protect
                  your personal information from unauthorized access, use, or
                  disclosure.
                </p>

                <div className="security-features">
                  <div className="security-item">
                    <div className="security-icon">
                      <FaLock />
                    </div>
                    <h4>Encryption</h4>
                    <p>
                      All data transmitted is encrypted using SSL/TLS protocols
                    </p>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">
                      <FaShieldAlt />
                    </div>
                    <h4>Secure Storage</h4>
                    <p>
                      Data is stored on secure servers with restricted access
                    </p>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">
                      <FaUserShield />
                    </div>
                    <h4>Access Control</h4>
                    <p>Strict authentication and authorization protocols</p>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">
                      <FaExclamationTriangle />
                    </div>
                    <h4>Monitoring</h4>
                    <p>24/7 monitoring for suspicious activity</p>
                  </div>
                </div>

                <div className="info-box">
                  <strong>Note:</strong> While we strive to protect your
                  information, no method of transmission over the internet or
                  electronic storage is 100% secure. We cannot guarantee
                  absolute security but continuously work to enhance our
                  security measures.
                </div>
              </div>
            </section>

            <section id="cookies" className="privacy-section">
              <h2>
                <FaCookie className="section-icon" /> Cookies & Tracking
                Technologies
              </h2>
              <div className="section-content">
                <p>
                  We use cookies and similar tracking technologies to enhance
                  your experience on our platform. Cookies are small files
                  stored on your device that help us remember your preferences
                  and understand how you use our services.
                </p>

                <h3>Types of Cookies We Use:</h3>
                <div className="cookies-list">
                  <div className="cookie-type">
                    <h4>Essential Cookies</h4>
                    <p>
                      Required for the website to function properly. Cannot be
                      disabled.
                    </p>
                  </div>
                  <div className="cookie-type">
                    <h4>Performance Cookies</h4>
                    <p>
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <div className="cookie-type">
                    <h4>Functional Cookies</h4>
                    <p>Remember your preferences and settings.</p>
                  </div>
                  <div className="cookie-type">
                    <h4>Marketing Cookies</h4>
                    <p>Track your browsing to show relevant advertisements.</p>
                  </div>
                </div>

                <p>
                  You can control cookies through your browser settings.
                  However, disabling certain cookies may affect the
                  functionality of our services.
                </p>
              </div>
            </section>

            <section id="rights" className="privacy-section">
              <h2>
                <FaUserShield className="section-icon" /> Your Privacy Rights
              </h2>
              <div className="section-content">
                <p>
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>

                <div className="rights-grid">
                  <div className="right-card">
                    <h4>Access</h4>
                    <p>Request a copy of the personal data we hold about you</p>
                  </div>
                  <div className="right-card">
                    <h4>Correction</h4>
                    <p>Request correction of inaccurate or incomplete data</p>
                  </div>
                  <div className="right-card">
                    <h4>Deletion</h4>
                    <p>Request deletion of your personal data</p>
                  </div>
                  <div className="right-card">
                    <h4>Portability</h4>
                    <p>Request transfer of your data to another service</p>
                  </div>
                  <div className="right-card">
                    <h4>Objection</h4>
                    <p>Object to processing of your personal data</p>
                  </div>
                  <div className="right-card">
                    <h4>Restriction</h4>
                    <p>Request restriction of processing your data</p>
                  </div>
                </div>

                <div className="info-box">
                  <strong>How to Exercise Your Rights:</strong>
                  <br />
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:privacy@ShoxEz.com">privacy@ShoxEz.com</a>. We
                  will respond to your request within 30 days.
                </div>
              </div>
            </section>

            <section id="contact" className="privacy-section">
              <h2>
                <FaShieldAlt className="section-icon" /> Contact Us
              </h2>
              <div className="section-content">
                <p>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us:
                </p>

                <div className="contact-details">
                  <div className="contact-method">
                    <h4>Email:</h4>
                    <a href="mailto:privacy@ShoxEz.com">privacy@ShoxEz.com</a>
                  </div>
                  <div className="contact-method">
                    <h4>Address:</h4>
                    <p>
                      ShoxEz Privacy Team
                      <br />
                      Global Financial Hub
                      <br />
                      Privacy Department
                    </p>
                  </div>
                  <div className="contact-method">
                    <h4>Response Time:</h4>
                    <p>We aim to respond to all inquiries within 48 hours</p>
                  </div>
                </div>

                <div className="cta-box">
                  <h3>Questions about your data?</h3>
                  <p>
                    Visit our <a href="/settings">Settings</a> page to manage
                    your privacy preferences
                  </p>
                  <a href="/settings" className="cta-button">
                    Manage Privacy Settings
                  </a>
                </div>
              </div>
            </section>

            <div className="policy-footer">
              <p>
                This Privacy Policy is effective as of October 18, 2025, and
                will remain in effect except with respect to any changes in its
                provisions in the future, which will be in effect immediately
                after being posted on this page.
              </p>
              <p>
                We reserve the right to update or change our Privacy Policy at
                any time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated"
                date.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPage;
