import { Routes, Route } from "react-router-dom";

// Existing pages
import LandingPage from "../pages/landing/LandingPage";
import MarketsPage from "../pages/markets/MarketsPage";
import BusinessPage from "../pages/business/BusinessPage";
import TechnologyPage from "../pages/technology/TechnologyPage";
import ContactPage from "../pages/contact/ContactPage";

// New placeholder pages
import NewsPage from "../pages/news/NewsPage";
import NewsDetailPage from "../pages/news/NewsDetailPage";
import NewsHistoryPage from "../pages/news/NewsHistoryPage";
import CalendarPage from "../pages/calendar/CalendarPage";
import IndicatorsPage from "../pages/indicators/IndicatorsPage";
import AnalyticsPage from "../pages/analytics/AnalyticsPage";
import SettingsPage from "../pages/settings/SettingsPage";
import ProfilePage from "../pages/profile/ProfilePage";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

function AppRoutes() {
  return (
    <Routes>
      {/* Existing routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/markets" element={<MarketsPage />} />
      <Route path="/business" element={<BusinessPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* New routes */}
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:id" element={<NewsDetailPage />} />
      <Route path="/news-history" element={<NewsHistoryPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/indicators" element={<IndicatorsPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h2 className="text-center mt-5">Page Not Found</h2>} />
    </Routes>
  );
}

export default AppRoutes;
