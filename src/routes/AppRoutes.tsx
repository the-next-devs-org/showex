

import { Routes, Route } from "react-router-dom";

// Existing pages
import LandingPage from "../pages/landing/LandingPage";
import MarketsPage from "../pages/markets/MarketsPage";
import ContactPage from "../pages/contact/ContactPage";
// New placeholder pages
import NewsDetailPage from "../pages/news/NewsDetailPage";
import NewsHistoryPage from "../pages/news/NewsHistoryPage";
import ValidatorsPage from "../pages/validators/ValidatorsPage";
import SettingsPage from "../pages/settings/SettingsPage";
import ProfilePage from "../pages/profile/ProfilePage";
import BlocksPage from "../pages/blocks/BlocksPage";
import TransactionsPage from "../pages/transactions/TransactionsPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AccountPage from "../pages/accounts/AccountPage";
import AppsPage from "../pages/apps/AppsPage";
import TokensPage from "../pages/tokens/TokensPage";
import Nftspage from "../pages/nfts/NftsPage";
import AnalyticsPage from "../pages/analytics/AnalyticsPage";

function AppRoutes() {
  return (
    <Routes>
      {/* Existing routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/markets" element={<MarketsPage />} />
      <Route path="/transactions" element={<TransactionsPage  />} />
      <Route path="/blocks" element={<BlocksPage />} />
      <Route path="/accounts" element={<AccountPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />

      {/* New routes */}
      <Route path="/apps" element={<AppsPage />} />
      <Route path="/news/:id" element={<NewsDetailPage />} />
      <Route path="/news-history" element={<NewsHistoryPage />} />
      <Route path="/tokens" element={<TokensPage />} />
      <Route path="/nfts" element={<Nftspage />} />
      <Route path="/validators" element={<ValidatorsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h2 className="text-center mt-5">Page Not Found</h2>} />
    </Routes>
  );
}

export default AppRoutes;
