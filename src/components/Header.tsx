import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FiGrid } from "react-icons/fi";
import { useState } from "react";
import NewsMenu from "./newsMenu/NewsMenu";

function Header() {
  const location = useLocation();
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "News", to: "/news" },
    { label: "Markets", to: "/markets" },
    { label: "Analysis", to: "/analysis" },
    { label: "Tools", to: "/tools" },
    { label: "Education", to: "/education" },
    { label: "NFTs", to: "/nfts" },
    { label: "Validators", to: "/validators" },
    { label: "Analytics", to: "/analytics" },
  ];

  const menuContent: any = {
    News: {
      leftLinks: ["Latest News", "Breaking News", "Top Stories"],
      rightContent: {
        "Latest News": <NewsMenu />,
        "Breaking News": <p>Breaking news coming soon...</p>,
        "Top Stories": <p>Top market stories will appear here.</p>,
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

  return (
    <>
      <Navbar
        expand="lg"
        className="py-2 header-navbar"
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
      >
        <Container
          className="px-4 d-flex align-items-center"
          style={{ maxWidth: "1200px" }}
        >
          {/* Logo */}
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
            {/* Center Menu */}
            <Nav className="mx-auto d-flex align-items-center">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                const isHovered = hoverItem === item.label;

                return (
                  <div
                    key={item.to}
                    onMouseEnter={() => {
                      if (item.label !== "Home") {
                        setHoverItem(item.label);
                        setActiveSubTab(
                          menuContent[item.label]?.leftLinks?.[0] || null
                        ); // default first tab
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

                    {/* Hover div */}
                    {hoverItem === item.label && item.label !== "Home" && (
                      <div
                        style={{
                          position: "fixed",
                          top: "55px",
                          left: 0,
                          width: "100%",
                          height: "50vh",
                          backgroundColor: "#111",
                          color: "#fff",
                          zIndex: 999,
                        }}
                      >
                        <div
                          className="container py-4 d-flex gap-5"
                          style={{ maxWidth: "1200px" }}
                        >
                          {/* Left side links */}
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

                          {/* Right side content */}
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

            {/* Right Side */}
            <div className="d-flex align-items-center gap-3">
              {/* Mainnet Dropdown */}
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="dark"
                  className="d-flex align-items-center gap-2 border-0 px-3 py-1"
                  style={{
                    fontSize: "13px",
                    backgroundColor: "#111",
                    borderRadius: "20px",
                    color: "#fff",
                  }}
                >
                  <span
                    className="rounded-circle"
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#00E8CC",
                    }}
                  ></span>
                  Mainnet
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Testnet</Dropdown.Item>
                  <Dropdown.Item>Devnet</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Grid Icon */}
              <button
                className="btn border-0 p-2 rounded-circle"
                style={{ background: "transparent" }}
              >
                <FiGrid size={18} color="white" />
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
