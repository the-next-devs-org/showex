

import "./TokensPage.css";

function TokensPage() {
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

        {/* Tokens Section */}
        <div className="blocks-section">
          <div className="blocks-section-title">Tokens</div>
          <div className="blocks-section-cards">
            <div className="blocks-section-card">
              <div className="blocks-section-card-label">Total Tokens</div>
              <div className="blocks-section-card-value">2,345</div>
            </div>
            <div className="blocks-section-card">
              <div className="blocks-section-card-label">Total Market Cap</div>
              <div className="blocks-section-card-value">$1,234,567,890</div>
            </div>
            <div className="blocks-section-card">
              <div className="blocks-section-card-label">Top Gainer (24h)</div>
              <div className="blocks-section-card-value">MEX +12.5%</div>
            </div>
            <div className="blocks-section-card">
              <div className="blocks-section-card-label">Top Volume (24h)</div>
              <div className="blocks-section-card-value">EGLD $45,000,000</div>
            </div>
          </div>
        </div>

        {/* Tokens Table Section - as per screenshot */}
        <div className="tokens-table-section">
          <div className="tokens-table-header-row">
            <div className="tokens-table-title">Tokens</div>
            <div className="tokens-table-tabs">
              <button className="tokens-table-tab active">Tokens</button>
              <button className="tokens-table-tab">Meta-ESDT</button>
            </div>
            <div className="tokens-table-search">
              <input type="text" placeholder="Search 6,226 tokens" />
            </div>
            <div className="tokens-table-summary">
              <span><b>6,226</b> Tokens</span>
              <span className="tokens-table-summary-divider">|</span>
              <span>Ecosystem Market Cap: <b>$520,353,315</b></span>
            </div>
          </div>
          <div className="tokens-table-scroll">
            <table className="tokens-table">
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Circulating Supply</th>
                  <th>Market Cap</th>
                  <th>Holders</th>
                  <th>Transactions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    icon: 'https://cryptologos.cc/logos/elrond-egld-egld-logo.png',
                    token: 'EGLD',
                    desc: 'The MultiversX eGold (EGLD) Token is native to the MultiversX Network and will be used for everything from...',
                    name: 'MultiversX EGLD',
                    price: '$14.06',
                    supply: '28,610,747',
                    marketCap: '$402,267,103',
                    holders: '9,068,513',
                    txs: '157,524,206',
                  },
                  {
                    icon: 'https://assets.coingecko.com/coins/images/15714/small/mex.png',
                    token: 'SEGLD',
                    desc: 'sEGLD is a digital token representing EGLD staked on nodes via the Hatom Liquid Staking Protocol. By combin...',
                    name: 'StakedEGLD',
                    price: '$16.16',
                    supply: '1,190,598',
                    marketCap: '$19,242,113',
                    holders: '1,382',
                    txs: '447,708',
                  },
                  {
                    icon: 'https://cryptologos.cc/logos/utrust-utk-logo.png',
                    token: 'HSEGLD',
                    desc: 'HsEGLD is an interest bearing token representing a sEGLD supply position on Hatom’s Lending & Borrowing...',
                    name: 'HatomSEGLD',
                    price: '$16.17',
                    supply: '1,095,903',
                    marketCap: '$17,731,380',
                    holders: '468',
                    txs: '247,663',
                  },
                  {
                    icon: 'https://cryptologos.cc/logos/utrust-utk-logo.png',
                    token: 'UTK',
                    desc: 'Web3 L1 Payments Technology',
                    name: 'xMoney UTK',
                    price: '$0.026',
                    supply: '414,181,335',
                    marketCap: '$11,181,376',
                    holders: '79,133',
                    txs: '4,808,111',
                  },
                  {
                    icon: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
                    token: 'USDC',
                    desc: 'USDC stablecoin originating on Ethereum, bridged as an ESDT token on MultiversX. 1 USDC = 1...',
                    name: 'WrappedUSDC',
                    price: '$0.99',
                    supply: '9,931,128',
                    marketCap: '$9,928,769',
                    holders: '19,692',
                    txs: '10,666,320',
                  },
                ].map((row, i) => (
                  <tr key={i} className="tokens-table-row-animate">
                    <td className="tokens-table-token-cell">
                      <img
                        src={row.icon}
                        alt="icon"
                        className="tokens-table-token-icon"
                        onError={e => {
                          e.currentTarget.onerror = null;
                          const letter = row.token ? row.token[0].toUpperCase() : '?';
                          const bg = '%2300e8cc';
                          const fg = '%23181818';
                          e.currentTarget.src = `data:image/svg+xml,%3Csvg width='44' height='44' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='22' cy='22' r='22' fill='${bg}'/%3E%3Ctext x='50%' y='58%' text-anchor='middle' alignment-baseline='middle' font-size='22' font-family='Arial' font-weight='bold' fill='${fg}'%3E${letter}%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                      <div className="tokens-table-token-info">
                        <div className="tokens-table-token-symbol">{row.token}</div>
                        <div className="tokens-table-token-desc">{row.desc}</div>
                      </div>
                    </td>
                    <td>{row.name}</td>
                    <td>{row.price}</td>
                    <td>{row.supply}</td>
                    <td>{row.marketCap}</td>
                    <td>{row.holders}</td>
                    <td>{row.txs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination Bar */}
          <div className="tokens-table-pagination">
            <span className="pagination-btn disabled">&#60;</span>
            <span className="pagination-page active">1</span>
            <span className="pagination-page">2</span>
            <span className="pagination-page">...</span>
            <span className="pagination-page">250</span>
            <span className="pagination-btn">Next &#62;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokensPage;
