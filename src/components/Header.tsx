import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import NewsMenu from "./newsMenu/NewsMenu";
import {
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
function Header() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [language, setLanguage] = useState("EN");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const stored = localStorage.getItem('i18nextLng');
    const lng = stored || (i18n && i18n.language) || 'en';
    setLanguage((lng || 'en').toUpperCase());
  }, [i18n?.language]);

  const navItems = [
    { label: t('nav.home'), to: "/" },
    { label: t('nav.news'), to: "/news" },
    { label: t('nav.markets'), to: "/markets" },
    // { label: t('nav.analysis'), to: "/analysis" },
    { label: t('nav.currencies'), to: "/currencies" },
    // { label: "Education", to: "/education" },
    { label: t('nav.calendar'), to: "/calendar" },
    { label: t('nav.events'), to: "/events" },
    // { label: "Validators", to: "/validators" },
    { label: t('nav.analytics'), to: "/analytics" },
  ];

  const socialLinks = [
    {
      href: "https://t.me/ShoxjahonEshniyozov",
      label: "Telegram 1",
      icon: <FaTelegram />,
    },
    {
      href: "https://t.me/EshniyozovShohjaxon",
      label: "Telegram 2",
      icon: <FaTelegram />,
    },
    {
      href: "https://www.instagram.com/brat_00815/",
      label: "Instagram",
      icon: <FaInstagram />,
    },
  ];

  const menuContent: any = {
    [t('nav.news')]: {
      leftLinks: [t('menu.latestNews')],
      rightContent: {
        [t('menu.latestNews')]: <NewsMenu />,
      },
    },
    [t('nav.markets')]: {
      leftLinks: [t('menu.forex'), t('menu.commodities'), t('menu.indices'), t('menu.crypto')],
      rightContent: {
        [t('menu.forex')]: <p>Track live forex & commodity prices</p>,
        [t('menu.commodities')]: <p>Commodity market insights</p>,
        [t('menu.indices')]: <p>Follow global indices trends</p>,
        [t('menu.crypto')]: <p>Crypto trends & charts</p>,
      },
    },
    [t('nav.analysis')]: {
      leftLinks: [t('menu.technicalAnalysis'), t('menu.fundamentalAnalysis'), t('menu.marketInsights')],
      rightContent: {
        [t('menu.technicalAnalysis')]: <p>Daily technical analysis reports.</p>,
        [t('menu.fundamentalAnalysis')]: <p>Macro & fundamental breakdowns.</p>,
        [t('menu.marketInsights')]: <p>Market insights and forecasts.</p>,
      },
    },
    Tools: {
      leftLinks: ["Currency Converter", "Live Charts", "Historical Data"],
      rightContent: {
        "Currency Converter": <p>Convert currencies easily.</p>,
        "Live Charts": <p>Interactive charts for analysis.</p>,
        "Historical Data": <p>Access historical forex data.</p>,
      },
    },
    Education: {
      leftLinks: ["Trading Guides", "Forex Basics", "Tutorials"],
      rightContent: {
        "Trading Guides": <p>Step by step trading guides.</p>,
        "Forex Basics": <p>Learn forex basics for beginners.</p>,
        Tutorials: <p>Video and text tutorials.</p>,
      },
    },
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/signin");
  };

  // Close navbar when a link is clicked on small screens
  const handleLinkClick = () => {
    try {
      // bootstrap lg breakpoint is 992px; collapse only on small screens
      if (window.innerWidth <= 992) {
        setExpanded(false);
      }
    } catch (e) {
      setExpanded(false);
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem('i18nextLng', lng);
    } catch (e) {
      /* ignore */
    }
    setLanguage(lng.toUpperCase());
  };

  return (
    <>
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={(val: boolean) => setExpanded(val)}
        className={`py-2 header-navbar ${scrolled ? "custmhederbg shadow-sm" : "bg-transparent"
          }`}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          transition: "background-color 0.3s ease",
          backgroundColor: "black",
        }}
      >
        <Container
          className="px-4 d-flex align-items-center"
          style={{ maxWidth: "1200px" }}
        >
          <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold fs-5 d-flex align-items-center"
          >
            <span style={{ color: "#fff" }}>Shox</span>
            <span style={{ color: "#00E8CC" }}>EZ</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" className="border-0" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto d-flex align-items-center">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                const isHovered = hoverItem === item.label;

                return (
                  <div
                    key={item.to}
                    onMouseEnter={() => {
                      // use route paths to decide which items show the mega menu
                      if (
                        item.to !== "/" &&
                        item.to !== "/events" &&
                        item.to !== "/markets" &&
                        item.to !== "/currencies"
                      ) {
                        setHoverItem(item.label);
                        setActiveSubTab(
                          menuContent[item.label]?.leftLinks?.[0] || null
                        );
                      }
                    }}
                    onMouseLeave={() => {
                      setHoverItem(null);
                      setActiveSubTab(null);
                    }}
                    style={{ position: "relative" }}
                  >
                    <Nav.Link
                      as={Link}
                      to={item.to}
                      onClick={handleLinkClick}
                      className="fw-semibold px-3"
                      style={{
                        fontSize: "13px",
                        color: isActive || isHovered ? "#00E8CC" : "#8E8E8E",
                        backgroundColor:
                          isActive || isHovered ? "#111" : "transparent",
                        borderRadius: "6px",
                      }}
                    >
                      {item.label}
                    </Nav.Link>

                    {hoverItem === item.label && item.label !== "Home" && (
                      <div
                        style={{
                          position: "fixed",
                          top: "48px",
                          left: 0,
                          width: "100%",
                          height: "50vh",
                          backgroundColor: "#111111",
                          color: "#fff",
                          zIndex: 999,
                        }}
                      >
                        <div
                          className="container py-4 d-flex gap-5"
                          style={{ maxWidth: "1200px" }}
                        >
                          <div className="d-flex flex-column gap-3">
                            {menuContent[item.label]?.leftLinks?.map(
                              (link: string) => (
                                <span
                                  key={link}
                                  onMouseEnter={() => setActiveSubTab(link)}
                                  style={{
                                    cursor: "pointer",
                                    color:
                                      activeSubTab === link
                                        ? "#00E8CC"
                                        : "#fff",
                                  }}
                                >
                                  {link}
                                </span>
                              )
                            )}
                          </div>

                          <div style={{ flex: 1 }}>
                            {activeSubTab &&
                              menuContent[item.label]?.rightContent?.[
                              activeSubTab
                              ]}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </Nav>

            <div className="d-flex align-items-center gap-3">
              {/* Language Dropdown */}
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="dark"
                  id="dropdown-basic"
                  className="btn-sm rounded-pill"
                  style={{
                    background: "none",
                    border: "1px solid #00e8cc",
                    color: "#00e8cc",
                    fontSize: "13px",
                  }}
                >
                  {language}
                </Dropdown.Toggle>

                <Dropdown.Menu align="end">
                  <Dropdown.Item onClick={() => { changeLanguage('en'); handleLinkClick(); }}>
                    🇬🇧 {t('language.english')}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => { changeLanguage('ru'); handleLinkClick(); }}>
                    🇷🇺 {t('language.russian')}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => { changeLanguage('uz'); handleLinkClick(); }}>
                    🇺🇿 {t('language.uzbek')}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={handleLinkClick}
                    className="btn btn-sm px-3 py-1 rounded-pill fw-bold text-white twelveFontSize mainSiteBgColor"
                  >
                    {t('auth.profile')}
                  </Link>
                  <button
                    onClick={() => { handleLogout(); handleLinkClick(); }}
                    className="btn btn-sm px-3 py-1 rounded-pill fw-bold text-white twelveFontSize btn-danger"
                  >
                    {t('auth.logout')}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    onClick={handleLinkClick}
                    className="btn btn-dark btn-sm px-3 py-1 rounded-pill twelveFontSize"
                    style={{
                      fontSize: "13px !important",
                      border: "none",
                      background: "none",
                      color: "#8e8e8e",
                      transition:
                        "background 0.18s, color 0.18s, transform 0.15s",
                      textDecoration: "none",
                    }}
                    onMouseOver={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "#00e8cc";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#000";
                      (e.currentTarget as HTMLAnchorElement).style.transform =
                        "scale(1.05)";
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "none";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#fff";
                      (e.currentTarget as HTMLAnchorElement).style.transform =
                        "scale(1)";
                    }}
                  >
                    {t('auth.login')}
                  </Link>

                  <Link
                    to="/register"
                    onClick={handleLinkClick}
                    style={{
                      color: "#8e8e8e",
                      padding: "2px 13px",
                      fontSize: "13px",
                      borderRadius: "999px",
                      border: "none",
                      letterSpacing: "1px",
                      transition:
                        "background 0.18s, color 0.18s, transform 0.15s",
                      cursor: "pointer",
                      textDecoration: "none",
                      background: "none",
                    }}
                    onMouseOver={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "#00e8cc";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#000";
                      (e.currentTarget as HTMLAnchorElement).style.transform =
                        "scale(1.05)";
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "none";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#fff";
                      (e.currentTarget as HTMLAnchorElement).style.transform =
                        "scale(1)";
                    }}
                  >
                    {t('auth.register')}
                  </Link>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sub-header row: left lorem ipsum, right social icons (neon style) */}
      <div className="subheader-container">
        <style>{`
          .subheader-container{ background:#071015; color:#cfd8dc; border-bottom:1px solid rgba(255,255,255,0.04); font-size:13px; }
          .subheader-inner{ max-width:1200px; display:flex; align-items:center; justify-content:space-between; padding:10px 0; }
          .neon-text{ color:#9aa7ab; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; font-weight:500; }
          /* animated gradient highlight */
          .neon-highlight{
            display:inline-block;
            background: linear-gradient(90deg, #00E8CC 0%, #7C4DFF 40%, #00A0FF 70%);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: neonMove 4s linear infinite;
            text-shadow: 0 0 8px rgba(0,232,204,0.25), 0 0 18px rgba(124,77,255,0.18);
          }
          @keyframes neonMove{ 0%{ background-position:0% 50%; } 50%{ background-position:100% 50%; } 100%{ background-position:0% 50%; } }

          .social-row{ display:flex; gap:12px; align-items:center; margin-left:16px; }
          .social-icon{ width:36px; height:36px; display:inline-flex; align-items:center; justify-content:center; border-radius:50%; cursor:pointer; transition:transform .18s ease, box-shadow .18s ease; box-shadow: 0 0 8px rgba(0,0,0,0.3); }
          .social-icon svg{ width:18px; height:18px; color:#fff; }
          .social-icon.telegram{ background:linear-gradient(180deg,#00A3D9,#0077B6); box-shadow:0 0 14px rgba(0,163,217,0.18), 0 0 28px rgba(0,120,180,0.08); }
          .social-icon.instagram{ background: linear-gradient(45deg,#feda75 0%,#fa7e1e 25%,#d62976 50%,#962fbf 75%,#4f5bd5 100%); box-shadow:0 0 18px rgba(214,41,118,0.14), 0 0 34px rgba(79,91,213,0.08); }
          .social-icon:hover{ transform:translateY(-3px) scale(1.04); }
          .social-icon.telegram:hover{ box-shadow:0 0 20px rgba(0,163,217,0.28),0 0 40px rgba(0,120,180,0.12); }
          .social-icon.instagram:hover{ box-shadow:0 0 28px rgba(214,41,118,0.28),0 0 48px rgba(79,91,213,0.18); }
          @media(max-width:768px){ .neon-text{ font-size:12px; } .social-icon{ width:30px; height:30px; } }
        `}</style>

        <Container className="px-4 subheader-inner">
          <div style={{ flex: 1, minWidth: 0 }}>
            <span className="neon-text">
              <span className="neon-highlight">{t('auth.founder')} Eshniyozov Shoxjahon Akmal ogli.</span>
            </span>
          </div>

          <div className="social-row">
            {socialLinks.map(({ href, label, icon }) => {
              const isInstagram = /instagram/i.test(href);
              const cls = isInstagram ? 'social-icon instagram' : 'social-icon telegram';
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cls}
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;

