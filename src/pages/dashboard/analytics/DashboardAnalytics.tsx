import React from 'react';
import './DashboardAnalytics.css';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

const DashboardAnalytics: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="da-root">
        <div className="da-header">
          <h1 className="da-title">Analytics Overview</h1>
          <p className="da-subtitle">Monitor your performance metrics</p>
        </div>

        <div className="da-cards-grid">
          <div className="da-card">
            <h3 className="da-card-label">Daily Active Users</h3>
            <div className="da-value">2,345</div>
            <div className="da-trend da-positive">+15% vs last week</div>
          </div>

          <div className="da-card">
            <h3 className="da-card-label">Revenue</h3>
            <div className="da-value">$12,456</div>
            <div className="da-trend da-positive">+8% vs last week</div>
          </div>

          <div className="da-card">
            <h3 className="da-card-label">Conversion Rate</h3>
            <div className="da-value">3.2%</div>
            <div className="da-trend da-negative">-2% vs last week</div>
          </div>

          <div className="da-card">
            <h3 className="da-card-label">Average Session</h3>
            <div className="da-value">24m</div>
            <div className="da-trend da-positive">+12% vs last week</div>
          </div>
        </div>

        <div className="da-charts-grid">
          <div className="da-chart-card">
            <h3 className="da-chart-title">User Growth</h3>
            <div className="da-chart-placeholder">
              <div className="da-placeholder-text">User Growth Chart</div>
            </div>
          </div>

          <div className="da-chart-card">
            <h3 className="da-chart-title">Revenue Trend</h3>
            <div className="da-chart-placeholder">
              <div className="da-placeholder-text">Revenue Chart</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardAnalytics;
