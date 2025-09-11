


import "./BlocksPage.css";

function BlocksPage() {
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

        {/* Blocks Section */}
        <div className="blocks-section">
          <div className="blocks-section-title">Blocks</div>
          <div className="blocks-section-cards">
            <div className="blocks-section-card">
              <div className="blocks-section-card-label">Block Height</div>
              <div className="blocks-section-card-value">107,568,639</div>
            </div>
            <div className="blocks-section-card">
              <div className="blocks-section-card-label">Total Applications Deployed</div>
              <div className="blocks-section-card-value">11,708</div>
            </div>
            <div className="blocks-section-card">
              <div className="blocks-section-card-label">Total Developer Rewards</div>
              <div className="blocks-section-card-value">6,535.95 <span className="egld">EGLD</span></div>
            </div>
            <div className="blocks-section-card">
              <div className="blocks-section-card-label">Total Network Fees</div>
              <div className="blocks-section-card-value">65,876.79 <span className="egld">EGLD</span></div>
            </div>
          </div>
        </div>

        {/* Blocks Table */}
        <div className="blocks-table-section">
          {/* Only show table if there is data */}
                {true ? (
            <div className="blocks-table-scroll">
              <table className="blocks-table">
                <thead>
                  <tr>
                    <th>Block</th>
                    <th>Age</th>
                    <th>Txns</th>
                    <th>Shard <span className="blocks-table-filter">&#x25BC;</span></th>
                    <th>Size</th>
                    <th>Gas Used</th>
                    <th>Block Hash</th>
                    <th>Leader</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      block: '26900005', age: '6 secs', txns: 0, shard: 'Shard 0', size: '0.37 kB', gasUsed: 0, gasPercent: 0, hash: '345457a99c3 ... 4276347735', leader: 'XOXNO', avatar: 'https://avatars.githubusercontent.com/u/9919?v=4'
                    },
                    {
                      block: '26887489', age: '6 secs', txns: 0, shard: 'Shard 1', size: '0.37 kB', gasUsed: 0, gasPercent: 0, hash: '9734b7db94 ... 8ea2d5438ed', leader: 'Trust Staking', avatar: 'https://avatars.githubusercontent.com/u/25108?v=4'
                    },
                    {
                      block: '26899718', age: '6 secs', txns: 0, shard: 'Shard 2', size: '0.37 kB', gasUsed: 0, gasPercent: 0, hash: '6bbc01f4936 ... 5a495a03ce5', leader: '⚡ Disruptive Digital ⚡', avatar: 'https://avatars.githubusercontent.com/u/3?v=4'
                    },
                    {
                      block: '26883530', age: '6 secs', txns: 0, shard: 'Metachain', size: '0.93 kB', gasUsed: 0, gasPercent: 0, hash: '36f2f780515 ... e04f18c6aa6', leader: '9f7b8b2015e14 ... b1f0222d7cfa80', avatar: 'https://avatars.githubusercontent.com/u/4?v=4'
                    },
                    {
                      block: '26900004', age: '12 secs', txns: 0, shard: 'Shard 0', size: '0.37 kB', gasUsed: 0, gasPercent: 0, hash: '15ecd7ef131 ... 10b6efa1e7', leader: '$BOBER (0% fees)', avatar: 'https://avatars.githubusercontent.com/u/5?v=4'
                    },
                    // Extra rows for a bigger table
                    {
                      block: '26899999', age: '15 secs', txns: 0, shard: 'Shard 1', size: '0.37 kB', gasUsed: 0, gasPercent: 0, hash: 'a1b2c3d4e5f ... 1234567890', leader: 'XOXNO', avatar: 'https://avatars.githubusercontent.com/u/9919?v=4'
                    },
                    {
                      block: '26899998', age: '18 secs', txns: 0, shard: 'Shard 2', size: '0.37 kB', gasUsed: 0, gasPercent: 0, hash: 'b2c3d4e5f6g ... 2345678901', leader: 'Trust Staking', avatar: 'https://avatars.githubusercontent.com/u/25108?v=4'
                    },
                    {
                      block: '26899997', age: '20 secs', txns: 0, shard: 'Metachain', size: '0.93 kB', gasUsed: 0, gasPercent: 0, hash: 'c3d4e5f6g7h ... 3456789012', leader: '⚡ Disruptive Digital ⚡', avatar: 'https://avatars.githubusercontent.com/u/3?v=4'
                    },
                    {
                      block: '26899996', age: '22 secs', txns: 0, shard: 'Shard 0', size: '0.37 kB', gasUsed: 0, gasPercent: 0, hash: 'd4e5f6g7h8i ... 4567890123', leader: '9f7b8b2015e14 ... b1f0222d7cfa80', avatar: 'https://avatars.githubusercontent.com/u/4?v=4'
                    },
                    {
                      block: '26899995', age: '25 secs', txns: 0, shard: 'Shard 1', size: '0.37 kB', gasUsed: 0, gasPercent: 0, hash: 'e5f6g7h8i9j ... 5678901234', leader: '$BOBER (0% fees)', avatar: 'https://avatars.githubusercontent.com/u/5?v=4'
                    },
                    {
                      block: '26899994', age: '28 secs', txns: 0, shard: 'Shard 2', size: '0.37 kB', gasUsed: 0, gasPercent: 0, hash: 'f6g7h8i9j0k ... 6789012345', leader: 'XOXNO', avatar: 'https://avatars.githubusercontent.com/u/9919?v=4'
                    },
                    {
                      block: '26899993', age: '30 secs', txns: 0, shard: 'Metachain', size: '0.93 kB', gasUsed: 0, gasPercent: 0, hash: 'g7h8i9j0k1l ... 7890123456', leader: 'Trust Staking', avatar: 'https://avatars.githubusercontent.com/u/25108?v=4'
                    },
                    {
                      block: '26899992', age: '32 secs', txns: 0, shard: 'Shard 0', size: '0.37 kB', gasUsed: 0, gasPercent: 0, hash: 'h8i9j0k1l2m ... 8901234567', leader: '⚡ Disruptive Digital ⚡', avatar: 'https://avatars.githubusercontent.com/u/3?v=4'
                    },
                  ].map((row, i) => (
                    <tr key={i} className="blocks-table-row-animate">
                      <td className="blocks-table-block">{row.block}</td>
                      <td>{row.age}</td>
                      <td>{row.txns}</td>
                      <td>{row.shard}</td>
                      <td>{row.size}</td>
                      <td>
                        <span style={{ color: '#fff' }}>{row.gasUsed ? row.gasUsed.toLocaleString() : '0%'}</span>
                        {row.gasPercent > 0 && <span style={{ color: '#8e8e8e', marginLeft: 4 }}>({row.gasPercent}%)</span>}
                        <div className="blocks-table-gas-bar">
                          <div className="blocks-table-gas-bar-inner" style={{ width: `${Math.min(row.gasPercent, 100)}%` }} />
                        </div>
                      </td>
                      <td className="blocks-table-hash">{row.hash}</td>
                      <td className="blocks-table-leader">
                        <img src={row.avatar} alt="avatar" className="blocks-table-leader-avatar" />
                        <span className="blocks-table-leader-name">{row.leader}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
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

export default BlocksPage;
