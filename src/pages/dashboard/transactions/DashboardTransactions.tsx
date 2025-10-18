import React from 'react';
import './DashboardTransactions.css';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import { useTranslation } from 'react-i18next';

const DashboardTransactions: React.FC = () => {
  const { t } = useTranslation();
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
          <h1 className="dt-title">{t('dashboard.transactions.title')}</h1>
          <p className="dt-subtitle">{t('dashboard.transactions.subtitle')}</p>
        </div>

        <div className="dt-filters">
          <div className="dt-filter-group">
            <select className="dt-select">
              <option value="all">{t('dashboard.transactions.filters.allTypes')}</option>
              <option value="sent">{t('dashboard.transactions.filters.sent')}</option>
              <option value="received">{t('dashboard.transactions.filters.received')}</option>
            </select>

            <select className="dt-select">
              <option value="all">{t('dashboard.transactions.filters.allStatus')}</option>
              <option value="completed">{t('dashboard.transactions.filters.completed')}</option>
              <option value="pending">{t('dashboard.transactions.filters.pending')}</option>
              <option value="failed">{t('dashboard.transactions.filters.failed')}</option>
            </select>
          </div>

          <button className="dt-btn-export">{t('dashboard.transactions.buttons.exportCsv')}</button>
        </div>

        <div className="dt-table-container">
          <table className="dt-table">
            <thead>
              <tr>
                <th>{t('dashboard.transactions.table.type')}</th>
                <th>{t('dashboard.transactions.table.amount')}</th>
                <th>{t('dashboard.transactions.table.usdValue')}</th>
                <th>{t('dashboard.transactions.table.from')}</th>
                <th>{t('dashboard.transactions.table.to')}</th>
                <th>{t('dashboard.transactions.table.time')}</th>
                <th>{t('dashboard.transactions.table.status')}</th>
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
          <button className="dt-btn-page">{t('dashboard.transactions.buttons.previous')}</button>
          <div className="dt-page-numbers">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>10</button>
          </div>
          <button className="dt-btn-page">{t('dashboard.transactions.buttons.next')}</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardTransactions;
