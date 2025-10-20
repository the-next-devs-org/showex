import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import StarfieldBackground from "./components/StarfieldBackground";
import 'react-toastify/dist/ReactToastify.css';



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

    document.title = `ShoxEz | ${currentTitle}`;
  }, [location]);

  return null;
}

function AppContent() {
  const location = useLocation();

  // Routes where header/footer should be hidden
  const hideHeaderFooterRoutes = ["/signin", "/register"];
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  const shouldHideHeaderFooter =
    hideHeaderFooterRoutes.includes(location.pathname) || isDashboardRoute;

  return (
    <>
      <TitleUpdater />
      {!shouldHideHeaderFooter && <Header />}
      <AppRoutes />
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  const apiBase = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL || '';
  const apigetallreceiveipdate = "/ipdate/save"
  const [ip, setIp] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch((err) => console.log(err));

    const now = new Date();
    const formattedDate = now.toLocaleDateString(); 
    setDate(formattedDate);
  }, []);

  useEffect(() => {
    if(ip && date) {
      fetch(`${apiBase}${apigetallreceiveipdate}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ip: ip,
          date: date
        }),
      })
      .then((res) => res.json())
      .then((data) => console.log("Server Response:", data))
      .catch((err) => console.log("Error sending data:", err));
    }
  }, [ip, date]);
  
  return (
    
    <Router>
      <ScrollToTop />
      <StarfieldBackground />
      <ScrollToTopButton />
      <AppContent />
    </Router>
  );
}

export default App;
