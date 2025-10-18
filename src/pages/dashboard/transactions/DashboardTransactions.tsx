import React from 'react';
import './DashboardTransactions.css';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

const DashboardTransactions: React.FC = () => {
  // Sample transaction data
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
    // Add more sample transactions as needed
  ];

  return (
    <DashboardLayout>
      <div className="dashboard-transactions">
      <div className="transactions-header">
        <h1>Transactions</h1>
        <p>View and manage your transactions</p>
      </div>

      <div className="transactions-filters">
        <div className="filter-group">
          <select className="filter-select">
            <option value="all">All Types</option>
            <option value="sent">Sent</option>
            <option value="received">Received</option>
          </select>

          <select className="filter-select">
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        <button className="export-button">
          Export CSV
        </button>
      </div>

      <div className="transactions-table">
        <table>
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
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>
                  <span className={`transaction-type ${transaction.type}`}>
                    {transaction.type}
                  </span>
                </td>
                <td>{transaction.amount}</td>
                <td>{transaction.usdValue}</td>
                <td>
                  <span className="address">{transaction.from}</span>
                </td>
                <td>
                  <span className="address">{transaction.to}</span>
                </td>
                <td>{transaction.time}</td>
                <td>
                  <span className={`status ${transaction.status}`}>
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="transactions-pagination">
        <button className="pagination-button">Previous</button>
        <div className="pagination-numbers">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <span>...</span>
          <button>10</button>
        </div>
        <button className="pagination-button">Next</button>
      </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardTransactions;