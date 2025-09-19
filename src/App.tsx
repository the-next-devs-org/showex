import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import StarfieldBackground from "./components/StarfieldBackground";

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const routeTitles: Record<string, string> = {
      "/": "Home",
      "/markets": "Markets",
      "/transactions": "Transactions",
      "/analysis": "Analysis",
      "/currencies": "Currencies",
      "/education": "Education",
      "/news": "News",
      "/accounts": "Accounts",
      "/contact": "Contact",
      "/analytics": "Analytics",
      "/all-news": "All News",
      "/apps": "Apps",
      "/news-history": "News History",
      "/tokens": "Tokens",
      "/events": "Events",
      "/validators": "Validators",
      "/settings": "Settings",
      "/profile": "Profile",
      "/signin": "Login",
      "/register": "Register",
    };

    let currentTitle = "Page Not Found";

    if (routeTitles[location.pathname]) {
      currentTitle = routeTitles[location.pathname];
    } else if (location.pathname.startsWith("/news/")) {
      currentTitle = "News Detail";
    } else if (location.pathname.startsWith("/event/")) {
      currentTitle = "Event Detail";
    } else if (location.pathname.startsWith("/sundown/")) {
      currentTitle = "Sundown Detail";
    }

    document.title = `ShowEX | ${currentTitle}`;
  }, [location]);


  return null;
}

function AppContent() {
  const location = useLocation();
  const hideHeaderRoutes = ["/signin", "/register"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      <TitleUpdater />
      {!shouldHideHeader && <Header />}
      <AppRoutes />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <StarfieldBackground />
      <AppContent />
    </Router>
  );
}

export default App;
