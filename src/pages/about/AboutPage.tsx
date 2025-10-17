import { useState } from "react";
import "./AboutPage.css";
import {
  FaRocket,
  FaEye,
  FaHeart,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaGlobe,
  FaAward,
} from "react-icons/fa";

function AboutPage() {
  const [imageError, setImageError] = useState(false);

  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Trust & Transparency",
      description:
        "We believe in complete transparency in all our operations and data reporting.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description:
        "Constantly pushing boundaries with cutting-edge technology and insights.",
    },
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description:
        "Maintaining the highest standards of accuracy and ethical practices.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      description:
        "Serving users worldwide with comprehensive market coverage.",
    },
  ];

  const stats = [
    { icon: <FaUsers />, value: "1M+", label: "Active Users" },
    { icon: <FaChartLine />, value: "500+", label: "Markets Tracked" },
    { icon: <FaGlobe />, value: "150+", label: "Countries" },
    { icon: <FaAward />, value: "24/7", label: "Support" },
  ];

  const team = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image:
        "https://ui-avatars.com/api/?name=John+Doe&size=200&background=23f7dd&color=0a0a0f&bold=true",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image:
        "https://ui-avatars.com/api/?name=Jane+Smith&size=200&background=00e8cc&color=0a0a0f&bold=true",
    },
    {
      name: "Mike Johnson",
      role: "Head of Analytics",
      image:
        "https://ui-avatars.com/api/?name=Mike+Johnson&size=200&background=23f7dd&color=0a0a0f&bold=true",
    },
    {
      name: "Sarah Williams",
      role: "Product Manager",
      image:
        "https://ui-avatars.com/api/?name=Sarah+Williams&size=200&background=00e8cc&color=0a0a0f&bold=true",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="hero-text">
            <h1 className="about-title">
              About <span className="highlight">ShowEx</span>
            </h1>
            <p className="about-subtitle">
              Empowering traders and investors with real-time data, advanced
              analytics, and comprehensive market insights.
            </p>
            <div className="hero-badges">
              <span className="hero-badge">Est. 2020</span>
              <span className="hero-badge">Global Platform</span>
              <span className="hero-badge">Trusted by Millions</span>
            </div>
          </div>

          <div className="hero-image">
            {!imageError ? (
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="Financial Analytics"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="image-placeholder">
                <FaChartLine className="placeholder-icon" />
                <p>Add your company image here</p>
              </div>
            )}
            <div className="image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="mission-container">
          <div className="mission-card">
            <div className="mission-icon">
              <FaRocket />
            </div>
            <h2>Our Mission</h2>
            <p>
              To democratize access to financial markets by providing
              cutting-edge tools, real-time data, and comprehensive analytics
              that empower every trader and investor to make informed decisions.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <FaEye />
            </div>
            <h2>Our Vision</h2>
            <p>
              To become the world's most trusted and comprehensive financial
              information platform, bridging the gap between complex market data
              and actionable insights for users globally.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <FaHeart />
            </div>
            <h2>Our Values</h2>
            <p>
              Built on trust, transparency, and innovation, we strive to
              maintain the highest standards of accuracy and integrity while
              continuously evolving to meet our users' needs.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="values-header">
          <h2>What We Stand For</h2>
          <p>The core principles that guide everything we do</p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="story-container">
          <div className="story-content">
            <h2>Our Story</h2>
            <div className="story-text">
              <p>
                Founded in 2020, ShowEx began with a simple vision: to make
                financial markets accessible to everyone. What started as a
                small team of passionate developers and market analysts has
                grown into a comprehensive platform serving millions of users
                worldwide.
              </p>
              <p>
                We recognized that while financial data was abundant, making
                sense of it was challenging. ShowEx was built to bridge this
                gap, combining advanced technology with intuitive design to
                deliver insights that matter.
              </p>
              <p>
                Today, we track over 500 markets across 150 countries, providing
                real-time data, AI-powered analytics, economic calendars, and
                comprehensive news coverage. Our commitment to innovation drives
                us to continuously enhance our platform with new features and
                capabilities.
              </p>
            </div>
          </div>
          <div className="story-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h4>Founded</h4>
                <p>ShowEx launched with basic market tracking</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h4>Expansion</h4>
                <p>Added analytics and economic calendar</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h4>AI Integration</h4>
                <p>Introduced AI-powered predictions</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h4>Global Leader</h4>
                <p>Serving 1M+ users worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="team-header">
          <h2>Meet Our Team</h2>
          <p>The brilliant minds behind ShowEx</p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="team-overlay">
                  <p>Connect on LinkedIn</p>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>
            Join millions of users who trust ShowEx for their financial insights
          </p>
          <div className="cta-buttons">
            <a href="/register" className="cta-button primary">
              Create Free Account
            </a>
            <a href="/contact" className="cta-button secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
