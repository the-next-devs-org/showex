import React from 'react';
import './DashboardTransactions.css';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

const DashboardTransactions: React.FC = () => {
  const transactions = [
    {
      id: 1,
      type: 'received',
      amount: '0.45 BTC',
      usdValue: '$15,678',
      from: '0x1234...5678',
      to: '0x8765...4321',
      time: '2 minutes ago',
      status: 'completed'
    },
    {
      id: 2,
      type: 'sent',
      amount: '1.20 ETH',
      usdValue: '$2,345',
      from: '0x8765...4321',
      to: '0x2468...1357',
      time: '5 hours ago',
      status: 'pending'
    },
  ];

  return (
    <DashboardLayout>
      <div className="dt-root">
        <div className="dt-header">
          <h1 className="dt-title">Transactions</h1>
          <p className="dt-subtitle">View and manage your transactions</p>
        </div>

        <div className="dt-filters">
          <div className="dt-filter-group">
            <select className="dt-select">
              <option value="all">All Types</option>
              <option value="sent">Sent</option>
              <option value="received">Received</option>
            </select>

            <select className="dt-select">
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          <button className="dt-btn-export">Export CSV</button>
        </div>

        <div className="dt-table-container">
          <table className="dt-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>USD Value</th>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(tx => (
                <tr key={tx.id}>
                  <td><span className={`dt-type ${tx.type}`}>{tx.type}</span></td>
                  <td>{tx.amount}</td>
                  <td>{tx.usdValue}</td>
                  <td><span className="dt-address">{tx.from}</span></td>
                  <td><span className="dt-address">{tx.to}</span></td>
                  <td>{tx.time}</td>
                  <td><span className={`dt-status ${tx.status}`}>{tx.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dt-pagination">
          <button className="dt-btn-page">Previous</button>
          <div className="dt-page-numbers">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>10</button>
          </div>
          <button className="dt-btn-page">Next</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardTransactions;
