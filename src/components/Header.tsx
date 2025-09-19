import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NewsMenu from "./newsMenu/NewsMenu";

function Header() {
  const location = useLocation();
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const isAuthenticated = false;

  const navItems = [
    { label: "Home", to: "/" },
    { label: "News", to: "/news" },
    { label: "Markets", to: "/markets" },
    { label: "Analysis", to: "/analysis" },
    { label: "Currencies", to: "/currencies" },
    // { label: "Education", to: "/education" },
    { label: "Events", to: "/events" },
    // { label: "Validators", to: "/validators" },
    { label: "Analytics", to: "/analytics" },
  ];

  const menuContent: any = {
    News: {
      leftLinks: ["Latest News"],
      rightContent: {
        "Latest News": <NewsMenu />,

      },
    },
    Markets: {
      leftLinks: ["Forex", "Commodities", "Indices", "Crypto"],
      rightContent: {
        Forex: <p>Track live forex & commodity prices</p>,
        Commodities: <p>Commodity market insights</p>,
        Indices: <p>Follow global indices trends</p>,
        Crypto: <p>Crypto trends & charts</p>,
      },
    },
    Analysis: {
      leftLinks: ["Technical Analysis", "Fundamental Analysis", "Market Insights"],
      rightContent: {
        "Technical Analysis": <p>Daily technical analysis reports.</p>,
        "Fundamental Analysis": <p>Macro & fundamental breakdowns.</p>,
        "Market Insights": <p>Market insights and forecasts.</p>,
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

  return (
    <>
      <Navbar
        expand="lg"
        className={`py-2 header-navbar ${scrolled ? "custmhederbg shadow-sm" : "bg-transparent"}`}
        style={{ position: "sticky", top: 0, zIndex: 1000, transition: "background-color 0.3s ease" }}
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
            <span style={{ color: "#fff" }}>Show</span>
            <span style={{ color: "#00E8CC" }}>EX</span>
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
                      if (item.label !== "Home" && item.label !== "Events" && item.label !== "Markets" && item.label !== "Currencies") {
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
                              menuContent[item.label]?.rightContent?.[activeSubTab]}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </Nav>

            <div className="d-flex align-items-center gap-3">
              {isAuthenticated ? (
                <Link
                  to="/profile"
                  className="btn btn-sm px-3 py-1 rounded-pill fw-bold text-white twelveFontSize mainSiteBgColor"
                >
                  Profile
                </Link>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="btn btn-dark btn-sm px-3 py-1 rounded-pill twelveFontSize text-white"
                    style={{ fontSize: "13px" }}
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="btn btn-sm px-3 py-1 rounded-pill fw-bold text-white twelveFontSize mainSiteBgColor"
                  >
                    Register
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
