import React from 'react';
import './DashboardAnalytics.css';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import { useTranslation } from 'react-i18next';

const DashboardAnalytics: React.FC = () => {
  const { t } = useTranslation();
  return (
    <DashboardLayout>
      <div className="da-root">
        <div className="da-header">
          <h1 className="da-title">{t('dashboard.analytics.title')}</h1>
          <p className="da-subtitle">{t('dashboard.analytics.subtitle')}</p>
        </div>

        <div className="da-cards-grid">
          <div className="da-card">
            <h3 className="da-card-label">{t('dashboard.analytics.cards.dailyUsers')}</h3>
            <div className="da-value">2,345</div>
            <div className="da-trend da-positive">+15% {t('dashboard.analytics.cards.vsLastWeek')}</div>
          </div>

          <div className="da-card">
            <h3 className="da-card-label">{t('dashboard.analytics.cards.revenue')}</h3>
            <div className="da-value">$12,456</div>
            <div className="da-trend da-positive">+8% {t('dashboard.analytics.cards.vsLastWeek')}</div>
          </div>

          <div className="da-card">
            <h3 className="da-card-label">{t('dashboard.analytics.cards.conversionRate')}</h3>
            <div className="da-value">3.2%</div>
            <div className="da-trend da-negative">-2% {t('dashboard.analytics.cards.vsLastWeek')}</div>
          </div>

          <div className="da-card">
            <h3 className="da-card-label">{t('dashboard.analytics.cards.avgSession')}</h3>
            <div className="da-value">24m</div>
            <div className="da-trend da-positive">+12% {t('dashboard.analytics.cards.vsLastWeek')}</div>
          </div>
        </div>

        <div className="da-charts-grid">
          <div className="da-chart-card">
            <h3 className="da-chart-title">{t('dashboard.analytics.charts.userGrowth')}</h3>
            <div className="da-chart-placeholder">
              <div className="da-placeholder-text">{t('dashboard.analytics.charts.userGrowth')} Chart</div>
            </div>
          </div>

          <div className="da-chart-card">
            <h3 className="da-chart-title">{t('dashboard.analytics.charts.revenueTrend')}</h3>
            <div className="da-chart-placeholder">
              <div className="da-placeholder-text">{t('dashboard.analytics.charts.revenueTrend')} Chart</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardAnalytics;
