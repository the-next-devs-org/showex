import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer"; // <-- Footer import karein

function AppContent() {
  const location = useLocation();

  // jin pages par Header hide karna hai
  const hideHeaderRoutes = ["/signin", "/register"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <AppRoutes />
      <Footer /> {/* <-- Footer yahan add karein */}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
