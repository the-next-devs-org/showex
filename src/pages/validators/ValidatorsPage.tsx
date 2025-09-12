


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
        {/* Validators Table Section - matches screenshot */}
        <div className="validators-table-section">
          <div className="validators-table-tabs">
            <button className="validators-table-tab active">Validators</button>
            <button className="validators-table-tab">Staking Providers</button>
            <button className="validators-table-tab">Nodes</button>
            <button className="validators-table-tab">Statistics</button>
            <button className="validators-table-tab">Auction List</button>
          </div>
          <div className="validators-table-scroll">
            <table className="validators-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Nodes <span className="blocks-table-filter">▲</span></th>
                  <th>% of Total</th>
                  <th>Cumulative Nodes <span className="blocks-table-filter">ℹ️</span></th>
                  <th>Stake <span className="blocks-table-filter">▼</span></th>
                </tr>
              </thead>
              <tbody>
                {/* Example data, replace with real data as needed */}
                {[
                  {
                    logo: 'https://media.elrond.com/providers/multiversx.png',
                    name: 'MultiversX Community Delegation',
                    nodes: 405,
                    percent: 12.52,
                    cumulative: 12.52,
                    stake: '1,719,999.99',
                  },
                  {
                    logo: 'https://media.elrond.com/providers/stakingagency.png',
                    name: 'Staking Agency',
                    nodes: 115,
                    percent: 3.55,
                    cumulative: 16.08,
                    stake: '420,229.093',
                  },
                  {
                    logo: 'https://media.elrond.com/providers/iversevision.png',
                    name: 'iVerse Vision',
                    nodes: 103,
                    percent: 3.18,
                    cumulative: 19.27,
                    stake: '366,875.66',
                  },
                  {
                    logo: 'https://media.elrond.com/providers/truststaking.png',
                    name: 'Trust Staking',
                    nodes: 96,
                    percent: 2.96,
                    cumulative: 22.23,
                    stake: '381,232.86',
                  },
                ].map((row, i) => {
                  const barWidth = `${row.cumulative}%`;
                  return (
                    <tr key={i} className="validators-table-row">
                      <td>{i + 1}</td>
                      <td className="validators-table-name">
                        <img
                          src={row.logo}
                          alt={row.name}
                          className="validators-table-logo"
                          onError={e => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `data:image/svg+xml,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='16' fill='%2300e8cc'/%3E%3Ctext x='50%' y='58%' text-anchor='middle' alignment-baseline='middle' font-size='14' font-family='Arial' font-weight='bold' fill='%23181818'%3E${row.name[0].toUpperCase()}%3C/text%3E%3C/svg%3E`;
                          }}
                        />
                        <span className="validators-table-name-text">{row.name}</span>
                      </td>
                      <td>{row.nodes}</td>
                      <td>{row.percent}%</td>
                      <td>
                        <div className="validators-table-progress-bar-bg">
                          <div className="validators-table-progress-bar" style={{ width: barWidth }}></div>
                        </div>
                        <span className="validators-table-progress-label">{row.cumulative}%</span>
                      </td>
                      <td style={{ textAlign: 'right', fontWeight: 700 }}>
                        × {row.stake} <span style={{ color: '#bdbdbd', fontWeight: 400 }}>EGLD</span>
                        <span style={{ marginLeft: 8, color: '#bdbdbd', fontSize: 18 }}>&#8250;</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nftspage;
