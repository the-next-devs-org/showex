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
import SingleEvents from "../pages/nfts/SingleEvents";
import Analysis from "../pages/analysis/AnalysisPage";
import LandingEducation from "../pages/education/LandingEducation";
import AnalyticsPage from "../pages/analytics/AnalyticsPage";
import AllNews from "../pages/news/AllNews";
import SunDownDetail from "../pages/sundown/SunDownDetail";
import LandingCurrencies from "../pages/currencies/LandingCurrencies";
import PageNotFound from "../pages/notFound/PageNotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import AnalysisCur from "../pages/analysis/AnalysisCur";
<<<<<<< Updated upstream
import ExportDemo from "../pages/ExportDemo";
import CalendarPage from "../pages/calendar/CalendarPage";
import AboutPage from "../pages/about/AboutPage";
import PrivacyPage from "../pages/privacy/PrivacyPage";
import TermsPage from "../pages/terms/TermsPage";
=======
import DashboardPage from "../pages/dashboard/DashboardPage";
import DashboardAnalytics from "../pages/dashboard/analytics/DashboardAnalytics";
import DashboardTransactions from "../pages/dashboard/transactions/DashboardTransactions";
import DashboardUsers from "../pages/dashboard/users/DashboardUsers";
import DashboardSettings from "../pages/dashboard/settings/DashboardSettings";
>>>>>>> Stashed changes

function AppRoutes() {
  return (
    <Routes>
      {/* Existing routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/markets" element={<MarketsPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/currencies" element={<LandingCurrencies />} />
      <Route path="/education" element={<LandingEducation />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/accounts" element={<AccountPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/export-demo" element={<ExportDemo />} />
      <Route path="/all-news" element={<AllNews />} />
      <Route path="/sundown/:id" element={<SunDownDetail />} />

      {/* Company Pages */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />

      {/* New routes */}
      <Route path="/apps" element={<AppsPage />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route path="/news-history" element={<NewsHistoryPage />} />
      <Route path="/tokens" element={<TokensPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/event/:id" element={<SingleEvents />} />
      <Route path="/validators" element={<ValidatorsPage />} />
      <Route path="/analysis-cur/:currency" element={<AnalysisCur />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
<<<<<<< Updated upstream
      <Route path="*" element={<PageNotFound />} />
=======
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
      <Route path="/dashboard/transactions" element={<DashboardTransactions />} />
      <Route path="/dashboard/users" element={<DashboardUsers />} />
      <Route path="/dashboard/settings" element={<DashboardSettings />} />
      <Route
        path="*"
        element={<PageNotFound />}
      />
>>>>>>> Stashed changes
    </Routes>
  );
}

export default AppRoutes;
