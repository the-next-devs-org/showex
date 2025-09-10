import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function AppContent() {
  const location = useLocation();

  // jin pages par Header hide karna hai
  const hideHeaderRoutes = ["/signin", "/register"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <AppRoutes />
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
