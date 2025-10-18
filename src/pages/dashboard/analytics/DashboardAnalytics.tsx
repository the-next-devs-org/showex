import React from 'react';
import './DashboardAnalytics.css';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

const DashboardAnalytics: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-analytics">
      <div className="analytics-header">
        <h1>Analytics Overview</h1>
        <p>Monitor your performance metrics</p>
      </div>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>Daily Active Users</h3>
          <div className="analytics-value">2,345</div>
          <div className="analytics-trend positive">+15% vs last week</div>
        </div>

        <div className="analytics-card">
          <h3>Revenue</h3>
          <div className="analytics-value">$12,456</div>
          <div className="analytics-trend positive">+8% vs last week</div>
        </div>

        <div className="analytics-card">
          <h3>Conversion Rate</h3>
          <div className="analytics-value">3.2%</div>
          <div className="analytics-trend negative">-2% vs last week</div>
        </div>

        <div className="analytics-card">
          <h3>Average Session</h3>
          <div className="analytics-value">24m</div>
          <div className="analytics-trend positive">+12% vs last week</div>
        </div>
      </div>

      <div className="analytics-charts">
        <div className="chart-container">
          <h3>User Growth</h3>
          <div className="chart-placeholder">
            {/* Chart component will go here */}
            <div className="placeholder-text">User Growth Chart</div>
          </div>
        </div>

        <div className="chart-container">
          <h3>Revenue Trend</h3>
          <div className="chart-placeholder">
            {/* Chart component will go here */}
            <div className="placeholder-text">Revenue Chart</div>
          </div>
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardAnalytics;