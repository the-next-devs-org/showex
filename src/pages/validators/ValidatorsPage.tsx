


import "./ValidatorsPage.css";
import { ResponsiveContainer, LineChart, Line, CircularProgressbar, buildStyles } from "./ValidatorsDashboardLibs";

function Nftspage() {
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

      
          {/* Validators Section - pixel-perfect, compact, library charts only */}
          <div className="validators-dashboard-section">
            <div className="validators-dashboard-title">Validators</div>
            <div className="validators-dashboard-cards">
              {/* Left Card: Total Staked with Line Chart */}
              <div className="validators-dashboard-card validators-dashboard-card-left">
                <div className="validators-dashboard-card-header">
                  <span className="validators-dashboard-card-title">Total Staked</span>
                  <button className="validators-dashboard-card-range">30d ▼</button>
                </div>
                <div className="validators-dashboard-card-value">14,396,874 <span className="egld-unit">EGLD</span></div>
                <div className="validators-dashboard-card-sub">(50.32%)</div>
                <div className="validators-dashboard-card-chart">
                  {/* Line Chart - recharts */}
                  <ResponsiveContainer width="100%" height={38}>
                    <LineChart data={[
                      { day: 1, value: 14.1 },
                      { day: 2, value: 14.2 },
                      { day: 3, value: 14.0 },
                      { day: 4, value: 14.3 },
                      { day: 5, value: 14.4 },
                      { day: 6, value: 14.2 },
                      { day: 7, value: 14.39 },
                    ]} margin={{ top: 8, right: 0, left: 0, bottom: 0 }}>
                      <Line type="monotone" dataKey="value" stroke="#00e8cc" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="validators-dashboard-card-footer">
                  <div>
                    <div className="validators-dashboard-card-footer-label">Circulating Supply</div>
                    <div className="validators-dashboard-card-footer-value">28,610,747</div>
                  </div>
                  <div>
                    <div className="validators-dashboard-card-footer-label">Users Staking</div>
                    <div className="validators-dashboard-card-footer-value">104,732</div>
                  </div>
                  <div>
                    <div className="validators-dashboard-card-footer-label">Average APR</div>
                    <div className="validators-dashboard-card-footer-value">6.46%</div>
                  </div>
                </div>
              </div>
              {/* Right Card: Validators, Shards, Donut Chart, Map */}
              <div className="validators-dashboard-card validators-dashboard-card-right">
                <div className="validators-dashboard-right-flex">
                  <div className="validators-dashboard-right-info">
                    <div className="validators-dashboard-card-value validators-dashboard-card-value-lg">3,232</div>
                    <div className="validators-dashboard-card-label-lg">Validators</div>
                    <div className="validators-dashboard-shards">
                      <div className="validators-dashboard-shard"><span className="shard-dot metachain"></span> Metachain <span className="shard-count">720/720</span></div>
                      <div className="validators-dashboard-shard"><span className="shard-dot shard0"></span> Shard 0 <span className="shard-count">720/720</span></div>
                      <div className="validators-dashboard-shard"><span className="shard-dot shard1"></span> Shard 1 <span className="shard-count">720/720</span></div>
                      <div className="validators-dashboard-shard"><span className="shard-dot shard2"></span> Shard 2 <span className="shard-count">719/720</span></div>
                      <div className="validators-dashboard-shard"><span className="shard-dot auction"></span> Auction Validators <span className="shard-count">352</span></div>
                    </div>
                  </div>
                  <div className="validators-dashboard-right-chart">
                    <div className="validators-dashboard-map">
                      <div className="validators-dashboard-map-img"></div>
                      <div className="validators-dashboard-node-legend">
                        <div className="validators-dashboard-node-legend-title">Stake Weighted Node Version</div>
                        <div className="validators-dashboard-node-legend-row">
                          <div className="validators-dashboard-donut">
                            <CircularProgressbar
                              value={81.85}
                              text={""}
                              styles={buildStyles({
                                pathColor: "#00e8cc",
                                textColor: "#00e8cc",
                                trailColor: "#232323",
                                backgroundColor: "#181818"
                              })}
                              strokeWidth={10}
                            />
                          </div>
                          <div className="validators-dashboard-donut-legend">
                            <div><span className="donut-dot" style={{ background: '#00e8cc' }}></span> v1.10.6.0 <span style={{ color: '#bdbdbd' }}>(81.85%)</span></div>
                            <div><span className="donut-dot" style={{ background: '#11e8a0' }}></span> v1.10.5.0 <span style={{ color: '#bdbdbd' }}>(11.54%)</span></div>
                            <div><span className="donut-dot" style={{ background: '#1e90ff' }}></span> v1.10.4.1 <span style={{ color: '#bdbdbd' }}>(6.44%)</span></div>
                            <div><span className="donut-dot" style={{ background: '#f5c518' }}></span> v1.9.6.2 <span style={{ color: '#bdbdbd' }}>(0.11%)</span></div>
                            <div><span className="donut-dot" style={{ background: '#ff4d4f' }}></span> v1.7.13.1-patch2 <span style={{ color: '#bdbdbd' }}>(0.03%)</span></div>
                            <div><span className="donut-dot" style={{ background: '#bdbdbd' }}></span> v1.9.6.0 <span style={{ color: '#bdbdbd' }}>(0.03%)</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="validators-dashboard-card-footer validators-dashboard-card-footer-row">
                  <span className="validators-dashboard-card-footer-pill">Europe <b>1,703 nodes</b> (59%)</span>
                  <span className="validators-dashboard-card-footer-pill">North America <b>983 nodes</b> (34%)</span>
                  <span className="validators-dashboard-card-footer-pill">Asia <b>180 nodes</b> (6%)</span>
                  <span className="validators-dashboard-card-footer-pill">Others <b>14 nodes</b> (1%)</span>
                </div>
              </div>
            </div>
          </div>

        {/* NFT Collections Table Section - matches screenshot */}
        <div className="nft-collections-section">
          <div className="nft-collections-header-row">
            <div className="nft-collections-filters">
              <button className="nft-collections-filter active">All</button>
              <button className="nft-collections-filter">NFT</button>
              <button className="nft-collections-filter">SFT</button>
            </div>
            <div className="nft-collections-search">
              <input type="text" placeholder="Search 15,708 collections" />
              <span className="nft-collections-search-icon">🔍</span>
            </div>
            <div className="nft-collections-pagination-top">
              <span className="nft-collections-pagination-btn disabled">&#60; Prev</span>
              <span className="nft-collections-pagination-page active">1</span>
              <span className="nft-collections-pagination-page">2</span>
              <span className="nft-collections-pagination-page">...</span>
              <span className="nft-collections-pagination-page">400</span>
              <span className="nft-collections-pagination-btn">Next &#62;</span>
            </div>
          </div>
          <div className="nft-collections-table-scroll">
            <table className="nft-collections-table">
              <thead>
                <tr>
                  <th>Collection</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Items</th>
                  <th>Holders</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {/* Example data, replace with real data as needed */}
                {[
                  {
                    icon: 'https://media.elrond.com/tokens/asset/XACHIEVE/logo.svg',
                    name: 'XPACHIEVE',
                    sft: true,
                    verified: true,
                    displayName: 'xPortalAchievements',
                    age: '927 days 14 hrs',
                    items: 15,
                    holders: '172,297',
                    owner: 'erd1pc6wjh2 ... duchkqhpzu6t',
                  },
                  {
                    icon: 'https://media.elrond.com/tokens/asset/PORTALS/logo.svg',
                    name: 'PORTALS',
                    sft: true,
                    verified: true,
                    displayName: 'PortalsOfInfinity',
                    age: '469 days 0 hr',
                    items: 19,
                    holders: '40,917',
                    owner: 'erd1pc6wjh2 ... duchkqhpzu6t',
                  },
                  {
                    icon: 'https://media.elrond.com/tokens/asset/XPORTALS3/logo.svg',
                    name: 'XPORTALS3',
                    sft: true,
                    verified: true,
                    displayName: 'XPAgeOfIntelligence',
                    age: '74 days 1 hr',
                    items: 29,
                    holders: '24,904',
                    owner: 'erd1pc6wjh2 ... duchkqhpzu6t',
                  },
                  {
                    icon: 'https://media.elrond.com/tokens/asset/CRTMBT/logo.svg',
                    name: 'CRTMBT',
                    sft: true,
                    verified: true,
                    displayName: 'CRTMysteryBoxTicket',
                    age: '1156 days 5 hrs',
                    items: 3,
                    holders: '20,910',
                    owner: 'erd1qqqqqqq ... 8fhneql8e9ee',
                  },
                  {
                    icon: 'https://media.elrond.com/tokens/asset/MMVXDROP/logo.svg',
                    name: 'MMVXDROP',
                    sft: true,
                    verified: true,
                    displayName: 'MemeversXAirdrop',
                    age: '379 days 2 hrs',
                    items: 1,
                    holders: '11,721',
                    owner: 'erd1qqqqqqq ... 3f984s2f46zg',
                  },
                  {
                    icon: 'https://media.elrond.com/tokens/asset/XKEY/logo.svg',
                    name: 'XKEY',
                    sft: true,
                    verified: true,
                    displayName: 'xKEY',
                    age: '56 days 1 hr',
                    items: 1,
                    holders: '10,475',
                    owner: 'erd1rng8ujryx ... vx70zqkmlr7j',
                  },
                  {
                    icon: 'https://media.elrond.com/tokens/asset/VIR/logo.svg',
                    name: 'VIR',
                    sft: true,
                    verified: true,
                    displayName: 'VillerRaffle',
                    age: '187 days 3 hrs',
                    items: 1,
                    holders: '9,572',
                    owner: 'erd12j4gqamt...cejwqcwkzd2',
                  },
                  {
                    icon: 'https://media.elrond.com/tokens/asset/BVSKINS/logo.svg',
                    name: 'BVSKINS',
                    sft: true,
                    verified: true,
                    displayName: 'BunnyVerseSkins',
                    age: '1208 days 16 hrs',
                    items: 7,
                    holders: '8,365',
                    owner: 'erd1fyv2q9sf ... wp6pcaqha9x',
                  },
                  {
                    icon: 'https://media.elrond.com/tokens/asset/MYSTERYBOX/logo.svg',
                    name: 'MYSTERYBOX',
                    sft: true,
                    verified: true,
                    displayName: 'MYSTERYBOX',
                    age: '812 days 14 hrs',
                    items: 5,
                    holders: '8,104',
                    owner: 'erd1pq565pex...79fpzqjhx337',
                  },
                ].map((row, i) => (
                  <tr key={i} className="nft-collections-table-row">
                    <td className="nft-collections-table-collection">
                      <img
                        src={row.icon}
                        alt={row.name}
                        className="nft-collections-table-icon"
                        onError={e => {
                          e.currentTarget.onerror = null;
                          const letter = row.name ? row.name[0].toUpperCase() : '?';
                          const bg = '%2300e8cc';
                          const fg = '%23181818';
                          e.currentTarget.src = `data:image/svg+xml,%3Csvg width='38' height='38' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='19' cy='19' r='19' fill='${bg}'/%3E%3Ctext x='50%' y='58%' text-anchor='middle' alignment-baseline='middle' font-size='18' font-family='Arial' font-weight='bold' fill='${fg}'%3E${letter}%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                      <span className="nft-collections-table-symbol">{row.name}</span>
                      {row.verified && <span className="nft-collections-table-verified">✔️</span>}
                      {row.sft && <span className="nft-collections-table-sft">SFT</span>}
                    </td>
                    <td>{row.displayName}</td>
                    <td>{row.age}</td>
                    <td>{row.items}</td>
                    <td>{row.holders}</td>
                    <td>{row.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
           {/* Footer */}
      <div style={{ textAlign: 'center', color: '#8e8e8e', fontSize: 13, margin: '32px 0 8px 0' }}>
        Made with <span style={{ color: '#ff4d4f' }}>♥</span> by the MultiversX team<br />
        <span style={{ fontSize: 11 }}>All data is demo.</span>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Nftspage;
