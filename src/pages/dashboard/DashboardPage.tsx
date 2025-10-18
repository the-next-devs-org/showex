import React from 'react';
import './DashboardPage.css';
import Sidebar from '../../components/dashboard/Sidebar';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import {
  TransactionIcon,
  UsersIcon,
  RevenueIcon,
  GrowthIcon,
  SendIcon,
  ReceiveIcon,
  AnalyticsIcon,
  SettingsIcon,
  ActivityTransactionIcon,
  NewUserIcon
} from '../../components/dashboard/Icons';

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <DashboardHeader />
        <div className="dashboard-container">
          <div className="dashboard-content">
            <div className="dashboard-welcome">
              <h1>Welcome back, John!</h1>
              <p>Here's what's happening with your projects today.</p>
            </div>
            
            <div className="dashboard-stats">
              <div className="stat-card">
                <div className="stat-icon transactions">
                  <TransactionIcon />
                </div>
                <div className="stat-info">
                  <h3>Total Transactions</h3>
                  <p>2,405</p>
                  <span className="stat-trend positive">+12.5%</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon users">
                  <UsersIcon />
                </div>
                <div className="stat-info">
                  <h3>Active Users</h3>
                  <p>1,245</p>
                  <span className="stat-trend positive">+8.3%</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon revenue">
                  <RevenueIcon />
                </div>
                <div className="stat-info">
                  <h3>Total Revenue</h3>
                  <p>$12,345</p>
                  <span className="stat-trend positive">+15.8%</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon growth">
                  <GrowthIcon />
                </div>
                <div className="stat-info">
                  <h3>Growth Rate</h3>
                  <p>23.5%</p>
                  <span className="stat-trend positive">+5.2%</span>
                </div>
              </div>
            </div>

            {/* <div className="dashboard-grid">
              <div className="dashboard-card recent-activity">
                <h2>Recent Activity</h2>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon transaction">
                      <ActivityTransactionIcon />
                    </div>
                    <div className="activity-details">
                      <h4>New Transaction</h4>
                      <p>John Doe sent 0.5 BTC</p>
                      <span className="activity-time">2 minutes ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon user">
                      <NewUserIcon />
                    </div>
                    <div className="activity-details">
                      <h4>New User</h4>
                      <p>Alice joined the platform</p>
                      <span className="activity-time">15 minutes ago</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard-card quick-actions">
                <h2>Quick Actions</h2>
                <div className="actions-grid">
                  <button className="action-button">
                    <SendIcon />
                    Send
                  </button>
                  <button className="action-button">
                    <ReceiveIcon />
                    Receive
                  </button>
                  <button className="action-button">
                    <AnalyticsIcon />
                    Analytics
                  </button>
                  <button className="action-button">
                    <SettingsIcon />
                    Settings
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;