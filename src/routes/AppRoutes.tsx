import { Routes, Route } from "react-router-dom";

// Existing pages
import LandingPage from "../pages/landing/LandingPage";
import MarketsPage from "../pages/markets/MarketsPage";
import ContactPage from "../pages/contact/ContactPage";
// New placeholder pages
import NewsDetail from "../components/newsMenu/NewsDetail";
import NewsHistoryPage from "../pages/news/NewsHistoryPage";
import ValidatorsPage from "../pages/validators/ValidatorsPage";
import SettingsPage from "../pages/settings/SettingsPage";
import ProfilePage from "../pages/profile/ProfilePage";
import NewsPage from "../pages/news/NewsPage";
import TransactionsPage from "../pages/transactions/TransactionsPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AccountPage from "../pages/accounts/AccountPage";
import AppsPage from "../pages/apps/AppsPage";
import TokensPage from "../pages/tokens/TokensPage";
import EventsPage from "../pages/nfts/EventsPage";
import SingleEvents from "../pages/nfts/SingleEvents"; // ✅ Corrected import
import Analysis from "../pages/analysis/AnalysisPage";
import LandingTools from "../pages/tools/LandingTools";
import LandingEducation from "../pages/education/LandingEducation";
import AnalyticsPage from "../pages/analytics/AnalyticsPage"; // ✅ added import

function AppRoutes() {
  return (
    <Routes>
      {/* Existing routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/markets" element={<MarketsPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/tools" element={<LandingTools />} />
      <Route path="/education" element={<LandingEducation />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/accounts" element={<AccountPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />

      {/* New routes */}
      <Route path="/apps" element={<AppsPage />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route path="/news-history" element={<NewsHistoryPage />} />
      <Route path="/tokens" element={<TokensPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/event/:id" element={<SingleEvents />} /> {/* ✅ Fixed */}
      <Route path="/validators" element={<ValidatorsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="*"
        element={<h2 className="text-center mt-5">Page Not Found</h2>}
      />
    </Routes>
  );
}

export default AppRoutes;
