

import "./AccountPage.css";             
function AccountPage() {
  return (
    <div className="blocks-container">
      <div className="blocks-inner">
        {/* Top Stats Row - pixel-perfect as screenshot */}
        <div className="blocks-top-row-flex">
          <div className="blocks-search-bar blocks-search-bar-right">
            <input
              type="text"
              placeholder="Search for an address, @herotag, transaction/block hash, validator key or token id"
            />
            <button className="blocks-search-btn">
              <span role="img" aria-label="search">🔍</span>
            </button>
          </div>
          <div className="blocks-top-stats blocks-top-stats-new">
            {/* Epoch Card */}
            <div className="blocks-top-stat-pill blocks-top-stat-pill-epoch">
              <div className="blocks-top-stat-pill-content">
                <div className="blocks-top-stat-pill-main">
                  <div className="blocks-top-stat-pill-title">Epoch <span className="blocks-top-stat-pill-value">1,868</span></div>
                  <div className="blocks-top-stat-pill-circle">
                    <svg width="32" height="32" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="13" stroke="#222" strokeWidth="4" fill="none" />
                      <circle cx="16" cy="16" r="13" stroke="#03e8cc" strokeWidth="4" fill="none" strokeDasharray="82" strokeDashoffset="20" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="blocks-top-stat-pill-label">2,221 Rounds Left</div>
              </div>
            </div>
            {/* Price Card */}
            <div className="blocks-top-stat-pill">
              <div className="blocks-top-stat-pill-content">
                <div className="blocks-top-stat-pill-main">
                  <span className="blocks-top-stat-pill-icon"> 
                    <svg width="18" height="18" fill="none" stroke="#03e8cc" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                  </span>
                  <span className="blocks-top-stat-pill-value">$14.05</span>
                </div>
                <div className="blocks-top-stat-pill-label">Current Price</div>
              </div>
            </div>
            {/* Accounts Card */}
            <div className="blocks-top-stat-pill">
              <div className="blocks-top-stat-pill-content">
                <div className="blocks-top-stat-pill-main">
                  <span className="blocks-top-stat-pill-icon"> 
                    <svg width="18" height="18" fill="none" stroke="#03e8cc" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                  </span>
                  <span className="blocks-top-stat-pill-value">110,272</span>
                </div>
                <div className="blocks-top-stat-pill-label">Active Accounts Today</div>
              </div>
            </div>
          </div>
        </div>

        {/* Accounts Section */}
        <div className="blocks-section">
          <div className="blocks-section-title">Accounts</div>
          <div className="blocks-section-cards">
            <div className="blocks-section-card">
              <div className="blocks-section-card-label">Total Accounts</div>
              <div className="blocks-section-card-value">9,068,363</div>
            </div>
            <div className="blocks-section-card">
              <div className="blocks-section-card-label">Users Staking</div>
              <div className="blocks-section-card-value">104,732</div>
            </div>
            <div className="blocks-section-card">
              <div className="blocks-section-card-label">Accounts Active Today</div>
              <div className="blocks-section-card-value">112,013</div>
            </div>
          </div>      
        </div>

        {/* Accounts Table */}
        <div className="blocks-table-section">
          <div className="blocks-table-scroll">
            <table className="blocks-table">
              <thead>
                <tr>
                  <th>Account</th>
                  <th>Balance</th>
                  <th>Txns</th>
                  <th>Shard</th>
                  <th>Type</th>
                  <th>Last Active</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { account: 'erd1qgw...1b7g5qs', balance: '1,234,567 EGLD', txns: 1200, shard: 'Shard 1', type: 'User', lastActive: '2 min ago', avatar: 'https://avatars.githubusercontent.com/u/9919?v=4' },
                  { account: 'erd1qqv...ea49d5f4', balance: '987,654 EGLD', txns: 980, shard: 'Shard 2', type: 'User', lastActive: '5 min ago', avatar: 'https://avatars.githubusercontent.com/u/25108?v=4' },
                  { account: 'erd1kuxl...5na9f6g8', balance: '543,210 EGLD', txns: 500, shard: 'Shard 0', type: 'Contract', lastActive: '10 min ago', avatar: 'https://avatars.githubusercontent.com/u/3?v=4' },
                  { account: 'erd1ssau...vyaq3w4t', balance: '321,000 EGLD', txns: 300, shard: 'Metachain', type: 'User', lastActive: '20 min ago', avatar: 'https://avatars.githubusercontent.com/u/4?v=4' },
                  { account: 'erd13ees...n5q8m8m', balance: '210,000 EGLD', txns: 150, shard: 'Shard 2', type: 'User', lastActive: '30 min ago', avatar: 'https://avatars.githubusercontent.com/u/5?v=4' },
                  { account: 'erd1cuqj...rashe08', balance: '100,000 EGLD', txns: 80, shard: 'Shard 1', type: 'User', lastActive: '1 hr ago', avatar: 'https://avatars.githubusercontent.com/u/9919?v=4' },
                  { account: 'erd1cfp8...3qg0p8m8', balance: '90,000 EGLD', txns: 60, shard: 'Shard 0', type: 'User', lastActive: '2 hr ago', avatar: 'https://avatars.githubusercontent.com/u/25108?v=4' },
                  { account: 'erd1w9en...3qe9e9d8', balance: '80,000 EGLD', txns: 40, shard: 'Shard 2', type: 'Contract', lastActive: '3 hr ago', avatar: 'https://avatars.githubusercontent.com/u/3?v=4' },
                  { account: 'erd1e09d...7d930c', balance: '70,000 EGLD', txns: 20, shard: 'Metachain', type: 'User', lastActive: '4 hr ago', avatar: 'https://avatars.githubusercontent.com/u/4?v=4' },
                  { account: 'erd1437y...mqzf2dy', balance: '60,000 EGLD', txns: 10, shard: 'Shard 1', type: 'User', lastActive: '5 hr ago', avatar: 'https://avatars.githubusercontent.com/u/5?v=4' },
                ].map((row, i) => (
                  <tr key={i} className="blocks-table-row-animate">
                    <td className="blocks-table-block">
                      <img src={row.avatar} alt="avatar" className="blocks-table-leader-avatar" />
                      <span style={{ marginLeft: 8 }}>{row.account}</span>
                    </td>
                    <td>{row.balance}</td>
                    <td>{row.txns}</td>
                    <td>{row.shard}</td>
                    <td>{row.type}</td>
                    <td>{row.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination Bar */}
          <div className="blocks-table-pagination blocks-table-pagination-new">
            <span className="pagination-btn disabled">&#60;</span>
            <span className="pagination-page active">1</span>
            <span className="pagination-page">2</span>
            <span className="pagination-page">...</span>
            <span className="pagination-page">400</span>
            <span className="pagination-btn">Next &#62;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
