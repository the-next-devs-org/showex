import { useState } from "react";
import "./TermsPage.css";
import {
  FaFileContract,
  FaGavel,
  FaUserCheck,
  FaExclamationCircle,
  FaBan,
  FaShieldAlt,
} from "react-icons/fa";

function TermsPage() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "acceptance", title: "Acceptance of Terms", icon: <FaUserCheck /> },
    {
      id: "services",
      title: "Description of Services",
      icon: <FaFileContract />,
    },
    { id: "account", title: "User Accounts", icon: <FaUserCheck /> },
    { id: "conduct", title: "User Conduct", icon: <FaGavel /> },
    {
      id: "intellectual",
      title: "Intellectual Property",
      icon: <FaShieldAlt />,
    },
    { id: "disclaimer", title: "Disclaimers", icon: <FaExclamationCircle /> },
    { id: "limitation", title: "Limitation of Liability", icon: <FaBan /> },
    { id: "termination", title: "Termination", icon: <FaBan /> },
    { id: "governing", title: "Governing Law", icon: <FaGavel /> },
    { id: "contact", title: "Contact Information", icon: <FaFileContract /> },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="terms-page">
      <div className="terms-container">
        {/* Header */}
        <div className="terms-header">
          <div className="header-icon">
            <FaFileContract />
          </div>
          <h1>Terms of Service</h1>
          <p className="terms-subtitle">
            Please read these terms carefully before using ShowEx. By accessing
            or using our services, you agree to be bound by these terms.
          </p>
          <div className="last-updated">
            Last Updated: <span>October 18, 2025</span>
          </div>
        </div>

        <div className="terms-content-wrapper">
          {/* Table of Contents */}
          <aside className="terms-sidebar">
            <div className="sidebar-sticky">
              <h3>Table of Contents</h3>
              <nav className="terms-nav">
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
          <main className="terms-main">
            <section id="acceptance" className="terms-section">
              <h2>
                <FaUserCheck className="section-icon" /> Acceptance of Terms
              </h2>
              <div className="section-content">
                <p>
                  Welcome to ShowEx ("Company," "we," "our," or "us"). These
                  Terms of Service ("Terms") govern your access to and use of
                  our website, services, and applications (collectively, the
                  "Services").
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by
                  these Terms and our Privacy Policy. If you do not agree to
                  these Terms, you may not access or use our Services.
                </p>
                <div className="highlight-box">
                  <strong>Important Points:</strong>
                  <ul>
                    <li>
                      These Terms constitute a legally binding agreement between
                      you and ShowEx
                    </li>
                    <li>
                      You must be at least 18 years old to use our Services
                    </li>
                    <li>We may modify these Terms at any time with notice</li>
                    <li>
                      Continued use after modifications means you accept the new
                      Terms
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="services" className="terms-section">
              <h2>
                <FaFileContract className="section-icon" /> Description of
                Services
              </h2>
              <div className="section-content">
                <p>
                  ShowEx provides a comprehensive financial information platform
                  that includes:
                </p>
                <div className="services-grid">
                  <div className="service-card">
                    <h4>Market Data</h4>
                    <p>
                      Real-time and historical data for financial markets,
                      currencies, and commodities
                    </p>
                  </div>
                  <div className="service-card">
                    <h4>Analytics Tools</h4>
                    <p>
                      Advanced charts, technical indicators, and AI-powered
                      predictions
                    </p>
                  </div>
                  <div className="service-card">
                    <h4>News & Analysis</h4>
                    <p>Financial news, market analysis, and expert insights</p>
                  </div>
                  <div className="service-card">
                    <h4>Economic Calendar</h4>
                    <p>Schedule of economic events and indicators</p>
                  </div>
                </div>
                <p>
                  We reserve the right to modify, suspend, or discontinue any
                  aspect of our Services at any time without prior notice.
                </p>
              </div>
            </section>

            <section id="account" className="terms-section">
              <h2>
                <FaUserCheck className="section-icon" /> User Accounts
              </h2>
              <div className="section-content">
                <h3>Registration</h3>
                <p>
                  Some features of our Services may require you to create an
                  account. When creating an account, you agree to:
                </p>
                <ul className="styled-list">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>
                    Accept responsibility for all activities under your account
                  </li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>

                <h3>Account Security</h3>
                <p>
                  You are responsible for maintaining the security of your
                  account credentials. We are not liable for any loss or damage
                  arising from your failure to protect your account information.
                </p>

                <div className="warning-box">
                  <FaExclamationCircle />
                  <div>
                    <strong>Security Notice:</strong> Never share your password
                    with anyone. ShowEx will never ask for your password via
                    email or phone.
                  </div>
                </div>
              </div>
            </section>

            <section id="conduct" className="terms-section">
              <h2>
                <FaGavel className="section-icon" /> User Conduct
              </h2>
              <div className="section-content">
                <p>
                  You agree not to engage in any of the following prohibited
                  activities:
                </p>

                <div className="prohibited-grid">
                  <div className="prohibited-item">
                    <FaBan className="prohibited-icon" />
                    <h4>No Unauthorized Access</h4>
                    <p>
                      Attempting to access areas of the Services not intended
                      for you
                    </p>
                  </div>
                  <div className="prohibited-item">
                    <FaBan className="prohibited-icon" />
                    <h4>No Data Scraping</h4>
                    <p>
                      Using automated tools to extract data without permission
                    </p>
                  </div>
                  <div className="prohibited-item">
                    <FaBan className="prohibited-icon" />
                    <h4>No Malicious Activity</h4>
                    <p>Uploading viruses, malware, or harmful code</p>
                  </div>
                  <div className="prohibited-item">
                    <FaBan className="prohibited-icon" />
                    <h4>No Impersonation</h4>
                    <p>Impersonating others or providing false information</p>
                  </div>
                  <div className="prohibited-item">
                    <FaBan className="prohibited-icon" />
                    <h4>No Spam</h4>
                    <p>Sending unsolicited communications or advertisements</p>
                  </div>
                  <div className="prohibited-item">
                    <FaBan className="prohibited-icon" />
                    <h4>No Illegal Activity</h4>
                    <p>Using Services for any unlawful purpose</p>
                  </div>
                </div>

                <p>
                  Violation of these prohibitions may result in immediate
                  termination of your account and legal action if necessary.
                </p>
              </div>
            </section>

            <section id="intellectual" className="terms-section">
              <h2>
                <FaShieldAlt className="section-icon" /> Intellectual Property
              </h2>
              <div className="section-content">
                <h3>Our Content</h3>
                <p>
                  All content, features, and functionality of the Services,
                  including but not limited to text, graphics, logos, icons,
                  images, audio clips, data compilations, and software, are the
                  exclusive property of ShowEx or its licensors and are
                  protected by international copyright, trademark, and other
                  intellectual property laws.
                </p>

                <h3>Limited License</h3>
                <p>
                  We grant you a limited, non-exclusive, non-transferable,
                  revocable license to access and use our Services for personal,
                  non-commercial purposes, subject to these Terms.
                </p>

                <div className="license-box">
                  <h4>You may:</h4>
                  <ul>
                    <li>View and access content for personal use</li>
                    <li>Print or download content for personal reference</li>
                    <li>Share links to our content on social media</li>
                  </ul>
                  <h4>You may not:</h4>
                  <ul>
                    <li>Reproduce, distribute, or create derivative works</li>
                    <li>Remove or modify copyright notices</li>
                    <li>
                      Use content for commercial purposes without permission
                    </li>
                    <li>Reverse engineer or decompile our software</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="disclaimer" className="terms-section">
              <h2>
                <FaExclamationCircle className="section-icon" /> Disclaimers
              </h2>
              <div className="section-content">
                <div className="disclaimer-box">
                  <FaExclamationCircle />
                  <div>
                    <strong>Investment Disclaimer:</strong>
                    <p>
                      The information provided on ShowEx is for informational
                      purposes only and should not be construed as financial,
                      investment, or legal advice. ShowEx does not provide
                      personalized investment recommendations.
                    </p>
                  </div>
                </div>

                <h3>No Warranties</h3>
                <p>
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT
                  WARRANT THAT:
                </p>
                <ul className="styled-list">
                  <li>
                    The Services will be uninterrupted, secure, or error-free
                  </li>
                  <li>
                    The information provided will be accurate, reliable, or
                    complete
                  </li>
                  <li>Any defects or errors will be corrected</li>
                  <li>The Services will meet your specific requirements</li>
                </ul>

                <h3>Financial Information</h3>
                <p>
                  Market data and financial information are provided for
                  informational purposes only. We do not guarantee the accuracy,
                  timeliness, or completeness of any data. Past performance is
                  not indicative of future results.
                </p>
              </div>
            </section>

            <section id="limitation" className="terms-section">
              <h2>
                <FaBan className="section-icon" /> Limitation of Liability
              </h2>
              <div className="section-content">
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, SHOWEX AND
                  ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES
                  SHALL NOT BE LIABLE FOR:
                </p>

                <div className="liability-grid">
                  <div className="liability-card">
                    <h4>Indirect Damages</h4>
                    <p>
                      Loss of profits, revenue, data, or business opportunities
                    </p>
                  </div>
                  <div className="liability-card">
                    <h4>Consequential Damages</h4>
                    <p>Any indirect or consequential losses or damages</p>
                  </div>
                  <div className="liability-card">
                    <h4>Service Interruptions</h4>
                    <p>
                      Damages resulting from service outages or technical issues
                    </p>
                  </div>
                  <div className="liability-card">
                    <h4>Third-Party Actions</h4>
                    <p>Actions or omissions of third-party service providers</p>
                  </div>
                </div>

                <p>
                  IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES
                  EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS
                  PRECEDING THE CLAIM, OR $100 USD, WHICHEVER IS GREATER.
                </p>

                <p className="small-text">
                  Some jurisdictions do not allow the exclusion or limitation of
                  certain warranties or liabilities, so some of the above
                  limitations may not apply to you.
                </p>
              </div>
            </section>

            <section id="termination" className="terms-section">
              <h2>
                <FaBan className="section-icon" /> Termination
              </h2>
              <div className="section-content">
                <h3>By You</h3>
                <p>
                  You may terminate your account at any time by contacting us at
                  support@showex.com or through your account settings. Upon
                  termination, your right to access and use the Services will
                  immediately cease.
                </p>

                <h3>By Us</h3>
                <p>
                  We reserve the right to suspend or terminate your account and
                  access to the Services at our sole discretion, without notice,
                  for conduct that we believe:
                </p>
                <ul className="styled-list">
                  <li>Violates these Terms or applicable laws</li>
                  <li>Causes harm to other users or ShowEx</li>
                  <li>Exposes us to potential liability</li>
                  <li>Is fraudulent or inappropriate</li>
                </ul>

                <h3>Effect of Termination</h3>
                <p>Upon termination of your account:</p>
                <ul className="styled-list">
                  <li>Your right to use the Services will immediately cease</li>
                  <li>We may delete your account data and content</li>
                  <li>
                    All provisions that should survive termination shall remain
                    in effect
                  </li>
                </ul>
              </div>
            </section>

            <section id="governing" className="terms-section">
              <h2>
                <FaGavel className="section-icon" /> Governing Law
              </h2>
              <div className="section-content">
                <h3>Applicable Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of [Your Jurisdiction], without regard to its
                  conflict of law provisions.
                </p>

                <h3>Dispute Resolution</h3>
                <p>
                  Any disputes arising out of or relating to these Terms or the
                  Services shall be resolved through:
                </p>
                <ol className="styled-list">
                  <li>Good faith negotiations between the parties</li>
                  <li>Mediation if negotiations fail</li>
                  <li>Binding arbitration if mediation is unsuccessful</li>
                </ol>

                <h3>Modifications to Terms</h3>
                <p>
                  We reserve the right to modify these Terms at any time. We
                  will provide notice of material changes by:
                </p>
                <ul className="styled-list">
                  <li>Posting the updated Terms on our website</li>
                  <li>Updating the "Last Updated" date</li>
                  <li>Sending email notification to registered users</li>
                </ul>
                <p>
                  Your continued use of the Services after such modifications
                  constitutes your acceptance of the updated Terms.
                </p>
              </div>
            </section>

            <section id="contact" className="terms-section">
              <h2>
                <FaFileContract className="section-icon" /> Contact Information
              </h2>
              <div className="section-content">
                <p>
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>

                <div className="contact-details">
                  <div className="contact-method">
                    <h4>Email:</h4>
                    <a href="mailto:legal@showex.com">legal@showex.com</a>
                  </div>
                  <div className="contact-method">
                    <h4>Address:</h4>
                    <p>
                      ShowEx Legal Department
                      <br />
                      Global Financial Hub
                    </p>
                  </div>
                  <div className="contact-method">
                    <h4>Response Time:</h4>
                    <p>We respond to all inquiries within 48 hours</p>
                  </div>
                </div>

                <div className="acknowledgment-box">
                  <h3>Acknowledgment</h3>
                  <p>
                    BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ,
                    UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
                  </p>
                </div>
              </div>
            </section>

            <div className="terms-footer">
              <p>
                These Terms of Service constitute the entire agreement between
                you and ShowEx regarding your use of the Services and supersede
                all prior agreements and understandings.
              </p>
              <p>
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision shall be limited or eliminated to the
                minimum extent necessary so that these Terms shall otherwise
                remain in full force and effect.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default TermsPage;
