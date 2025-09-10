import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FiGrid } from "react-icons/fi";

function Header() {
  const location = useLocation();

  // Navbar ke liye items jo AppRoutes ke sath match karte hain
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Markets", to: "/markets" },
    { label: "Business", to: "/business" },
    { label: "Technology", to: "/technology" },
    { label: "News", to: "/news" },
    { label: "Calendar", to: "/calendar" },
    { label: "Indicators", to: "/indicators" },
    { label: "Analytics", to: "/analytics" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <Navbar expand="lg" className="py-2" style={{ background: "rgb(23 23 23)", position: 'sticky', top: 0, zIndex: 1050,}}>
      <Container className="px-4 d-flex align-items-center" style={{ maxWidth: "1200px"}}>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-5 d-flex align-items-center">
          <span style={{ color: "#fff" }}>Show</span>
          <span style={{ color: "#00E8CC" }}>EX</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" className="border-0" />

        <Navbar.Collapse id="main-navbar">
          {/* Center Menu */}
          <Nav className="mx-auto d-flex align-items-center">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Nav.Link
                  key={item.to}
                  as={Link}
                  to={item.to}
                  className="fw-semibold px-3"
                  style={{
                    fontSize: "13px",
                    color: isActive ? "#00E8CC" : "#8E8E8E",
                    backgroundColor: isActive ? "#111" : "transparent",
                    borderRadius: "6px",
                  }}
                >
                  {item.label}
                </Nav.Link>
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
  );
}

export default Header;
