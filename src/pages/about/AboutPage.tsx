import { useState } from "react";
import { useTranslation } from 'react-i18next';
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
const analyticsImgabout = "/aboutus.jpg";

function AboutPage() {
  const [imageError, setImageError] = useState(false);
  const { t } = useTranslation();

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
            <h1 className="about-title">{t('about.heroTitle')}</h1>
            <p className="about-subtitle">{t('about.heroSubtitle')}</p>
          </div>

          <div className="hero-image">
            {!imageError ? (
              <img
                src={analyticsImgabout}
                alt="Financial Analytics"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="image-placeholder">
                <FaChartLine className="placeholder-icon" />
                <p>{t('aboutPage.imagePlaceholder')}</p>
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
              <div className="stat-label">
                {index === 0
                  ? t('aboutPage.stats.activeUsers')
                  : index === 1
                  ? t('aboutPage.stats.marketsTracked')
                  : index === 2
                  ? t('aboutPage.stats.countries')
                  : t('aboutPage.stats.support')}
              </div>
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
              <h2>{t('aboutPage.missionTitle')}</h2>
              <p>{t('aboutPage.missionText')}</p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <FaEye />
            </div>
              <h2>{t('aboutPage.visionTitle')}</h2>
              <p>{t('aboutPage.visionText')}</p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <FaHeart />
            </div>
              <h2>{t('aboutPage.valuesTitle')}</h2>
              <p>{t('aboutPage.values.trustText')}</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="values-header">
            <h2>{t('aboutPage.valuesTitle')}</h2>
            <p>{t('aboutPage.values.trustText')}</p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{t(`aboutPage.values.${index === 0 ? 'trustTitle' : index === 1 ? 'innovationTitle' : index === 2 ? 'integrityTitle' : 'globalTitle'}`)}</h3>
              <p>{t(`aboutPage.values.${index === 0 ? 'trustText' : index === 1 ? 'innovationText' : index === 2 ? 'integrityText' : 'globalText'}`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="story-container">
          <div className="story-content">
            <h2>{t('about.storyHeading')}</h2>
            <div className="story-text">
              <p>{t('about.story.p1')}</p>
              <p>{t('about.story.p2')}</p>
              <h3>{t('about.story.sub1')}</h3>
              <p>{t('about.story.p3')}</p>
              <p>{t('about.story.p4')}</p>
              <p>{t('about.story.p5')}</p>
              <p>{t('about.story.p6')}</p>
              <h3>{t('about.story.sub2')}</h3>
              <p>{t('about.story.p7')}</p>
              <p>{t('about.story.p8')}</p>
              <p>{t('about.story.p9')}</p>
              <p>{t('about.story.p10')}</p>
            </div>
          </div>
          <div className="story-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h4>{t('aboutPage.timeline.founded')}</h4>
                <p>{t('aboutPage.timelineDesc.founded')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h4>{t('aboutPage.timeline.expansion')}</h4>
                <p>{t('aboutPage.timelineDesc.expansion')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                  <h4>{t('aboutPage.timeline.ai')}</h4>
                <p>{t('aboutPage.timelineDesc.ai')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                  <h4>{t('aboutPage.timeline.global')}</h4>
                <p>{t('aboutPage.timelineDesc.global')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="team-header">
         <h2>{t('aboutPage.teamTitle')}</h2>
         <p>{t('aboutPage.teamSubtitle')}</p>
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
            Join millions of users who trust ShoxEz for their financial insights
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
