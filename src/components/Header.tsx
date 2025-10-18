import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import NewsMenu from "./newsMenu/NewsMenu";

function Header() {
  const location = useLocation();
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
    { label: t('nav.analysis'), to: "/analysis" },
    { label: t('nav.currencies'), to: "/currencies" },
    // { label: "Education", to: "/education" },
    { label: t('nav.calendar'), to: "/calendar" },
    { label: t('nav.events'), to: "/events" },
    // { label: "Validators", to: "/validators" },
    { label: t('nav.analytics'), to: "/analytics" },
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
        className={`py-2 header-navbar ${
          scrolled ? "custmhederbg shadow-sm" : "bg-transparent"
        }`}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          transition: "background-color 0.3s ease",
          backgroundColor: "transparent",
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
                    <Dropdown.Item onClick={() => changeLanguage('en')}>
                      🇬🇧 {t('language.english')}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => changeLanguage('ru')}>
                      🇷🇺 {t('language.russian')}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => changeLanguage('uz')}>
                      🇺🇿 {t('language.uzbek')}
                    </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {isAuthenticated ? (
                <>
                  <Link
                    to="/settings"
                    className="btn btn-sm px-3 py-1 rounded-pill fw-bold text-white twelveFontSize mainSiteBgColor"
                  >
                    {t('auth.profile')}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm px-3 py-1 rounded-pill fw-bold text-white twelveFontSize btn-danger"
                  >
                    {t('auth.logout')}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
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
    </>
  );
}

export default Header;
