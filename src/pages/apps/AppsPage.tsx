
import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
import "./TransactionsPage.css";

type TagProps = {
  children: React.ReactNode;
  color?: string;
};
function Tag({ children, color = '#03e8cc' }: TagProps) {
  return <span style={{ background: color + '22', color, borderRadius: 6, padding: '2px 8px', fontSize: 13, fontWeight: 500, marginLeft: 4 }}>{children}</span>;
}

function AppsPage() {
  // Demo data for most used applications
  const mostUsedApps = [
    { rank: 1, name: "xPortal: Social Module 2", txns: 7520, iconType: "xportal" },
    { rank: 2, name: "xPortal: Boost Module 2", txns: 5810, iconType: "xportal" },
    { rank: 3, name: "xPortal: Social Module 3", txns: 3902, iconType: "xportal" },
    { rank: 4, name: "xPortal: Social Module 1", txns: 3805, iconType: "xportal" },
    { rank: 5, name: "AshSwap: Aggregator v2", txns: 3428, iconType: "ashswap" },
    { rank: 6, name: "xPortal: Social Module 4", txns: 3200, iconType: "xportal" },
    { rank: 7, name: "xPortal: Social Module 5", txns: 3100, iconType: "xportal" },
    { rank: 8, name: "xPortal: Social Module 6", txns: 2950, iconType: "xportal" },
    { rank: 9, name: "xPortal: Social Module 7", txns: 2800, iconType: "xportal" },
    { rank: 10, name: "AshSwap: Aggregator v1", txns: 2500, iconType: "ashswap" },
  ];
  // Demo chart data
  // Demo chart data for different ranges
  // Generate more realistic, dense demo data
  const chartDataAll = Array.from({ length: 730 }, (_, i) => ({
    name: `Day ${i + 1}`,
    total: 700000000 + Math.round(Math.sin(i / 18) * 2000000 + Math.random() * 1000000) + i * 500000,
    applications: 500000000 + Math.round(Math.cos(i / 22) * 1500000 + Math.random() * 800000) + i * 400000,
    standard: 400000000 + Math.round(Math.sin(i / 30) * 1000000 + Math.random() * 400000) + i * 200000,
  }));
  const chartData365d = chartDataAll.slice(-365); // last 365 days
  const chartData30d = chartDataAll.slice(-30); // last 30 days
  const chartData7d = chartDataAll.slice(-7); // last 7 days

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [selectedRange, setSelectedRange] = React.useState('30d');

  let chartData = chartData30d;
  if (selectedRange === '7d') chartData = chartData7d;
  else if (selectedRange === '365d') chartData = chartData365d;
  else if (selectedRange === 'All') chartData = chartDataAll;

  // Get the latest stats from the last entry in the current chart data
  const last = chartData[chartData.length - 1] || { total: 0, applications: 0, standard: 0 };
  // Demo data for table
  const txRows = [
    { hash: 'c1e0d2...b7594c', age: '4 secs', shard: 'Shard 1 → Shard 2', from: 'erd1qgw...1b7g5qs', to: 'erd1qqv...ea49d5f4', method: <Tag>Transfer</Tag>, value: '0.00015 EGLD' },
    { hash: '2e6f5d9...a2c9a9', age: '4 secs', shard: 'Metachain', from: <Tag color="#ffb300">Staking Staking Age...</Tag>, to: <Tag color="#03e8cc">Airshwan...</Tag>, method: <Tag color="#7c6fff">ClaimRewards</Tag>, value: 'x0 EGLD' },
    { hash: '2dfb5c8...f2c0e5', age: '4 secs', shard: 'Shard 1 → Shard 2', from: 'erd1kuxl...5na9f6g8', to: <Tag color="#3fffa1">Emorys Game Rew...</Tag>, method: <Tag>Transfer</Tag>, value: 'x0 EGLD' },
    { hash: '7c1e0c...55ac4e', age: '4 secs', shard: 'Shard 2 → Shard 0', from: 'erd1ssau...vyaq3w4t', to: 'erd1y5f8...wsy55f8', method: <Tag>Transfer</Tag>, value: 'x0.01 EGLD' },
    { hash: 'c38777a...f9c9a0', age: '4 secs', shard: 'Shard 1 → Shard 2', from: 'erd1ssau...vyaq3w4t', to: 'erd13ees...n5q8m8m', method: <Tag>Transfer</Tag>, value: 'x0.01 EGLD' },
    { hash: 'c39648e...a2c9a9', age: '4 secs', shard: 'Shard 2 → Shard 1', from: 'erd1qgw...1b7g5qs', to: 'erd1qqv...ea49d5f4', method: <Tag>Transfer</Tag>, value: 'x0.01 EGLD' },
    { hash: '3eb0125...ae4d4f', age: '4 secs', shard: 'Shard 2 → Shard 0', from: 'erd1w9en...3qe9e9d8', to: 'erd1cfp8...3qg0p8m8', method: <Tag>Transfer</Tag>, value: 'x0.01 EGLD' },
    { hash: '88e0a7d...a550d8', age: '4 secs', shard: 'Shard 1 → Shard 2', from: 'erd1ssau...vyaq3w4t', to: 'erd1y5f8...wsy55f8', method: <Tag>Transfer</Tag>, value: 'x0.01 EGLD' },
    { hash: 'c390f80...85cc48', age: '4 secs', shard: 'Shard 2 → Shard 1', from: 'erd1ssau...vyaq3w4t', to: 'erd13ees...n5q8m8m', method: <Tag>Transfer</Tag>, value: 'x0.01 EGLD' },
    { hash: '7bd1817...b0224c', age: '4 secs', shard: 'Shard 0 → Shard 1', from: 'erd1e09d...7d930c', to: 'erd1cuqj...rashe08', method: <Tag>Transfer</Tag>, value: 'x0.01 EGLD' },
    { hash: 'd6800b9...ba5318', age: '10 secs', shard: 'Shard 1 → Shard 2', from: 'erd1qgw...1b7g5qs', to: <Tag color="#7c6fff">minu13</Tag>, method: <Tag>Transfer</Tag>, value: 'x2.33 EGLD' },
    { hash: 'd072db5...b0b0a7', age: '10 secs', shard: 'Shard 2 → Shard 1', from: 'erd1437y...mqzf2dy', to: <Tag color="#7c6fff">EMES Allocation SC</Tag>, method: <Tag color="#7c6fff">Allocations</Tag>, value: 'x0 EGLD' },
    { hash: '741f89f...b0b0a7', age: '10 secs', shard: 'Shard 1 → Shard 0', from: <Tag color="#ffb300">x xoxo</Tag>, to: <Tag color="#7c6fff">xPortal Boost Mod...</Tag>, method: <Tag color="#7c6fff">Claim</Tag>, value: 'x0 EGLD' },
    { hash: 'ead35be...41bc2d', age: '10 secs', shard: 'Metachain', from: 'erd1v7lm...8sm8e8k', to: <Tag color="#7c6fff">Staking SC Me...</Tag>, method: <Tag color="#7c6fff">ReDelegateRewards</Tag>, value: 'x0 EGLD' },
    { hash: '3185c6e...07f09d', age: '10 secs', shard: 'Shard 1 → Shard 1', from: 'erd1ssau...vyaq3w4t', to: <Tag color="#7c6fff">wuc0e8w5...</Tag>, method: <Tag>Transfer</Tag>, value: 'x0.01 EGLD' },
    { hash: '824d4a8...be0e0e', age: '10 secs', shard: 'Shard 2 → Shard 0', from: 'erd1ssau...vyaq3w4t', to: 'erd1qqv...ea49d5f4', method: <Tag>Transfer</Tag>, value: 'x0.01 EGLD' },
    { hash: '2f4f569...b0927d', age: '10 secs', shard: 'Shard 0 → Shard 1', from: 'erd1ssau...vyaq3w4t', to: 'erd1cfp8...3qg0p8m8', method: <Tag>Transfer</Tag>, value: 'x0.01 EGLD' },
    { hash: '2f369b1...b0f9f7', age: '10 secs', shard: 'Shard 1 → Shard 2', from: 'erd1ssau...vyaq3w4t', to: 'erd1w9en...3qe9e9d8', method: <Tag>Transfer</Tag>, value: 'x0.01 EGLD' },
    { hash: '2f369b1...b0f9f7', age: '10 secs', shard: 'Shard 1 → Shard 2', from: 'erd1ssau...vyaq3w4t', to: 'erd1w9en...3qe9e9d8', method: <Tag>Transfer</Tag>, value: 'x0.01 EGLD' },
    { hash: '19381fc...4f095d', age: '10 secs', shard: 'Shard 0', from: 'erd1qgw...3qg0p8m8', to: <Tag color="#7c6fff">erd1cuqj...Qhquzkz</Tag>, method: <Tag>Transfer</Tag>, value: 'x0.01 EGLD' },
  ];
  console.log("Rendering AppsPage with last stats:", txRows);
  return (
    <div className="blocks-container">
   
  {/* ...existing code... */}
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
      {/* Top Transactions Section - pixel-perfect, HTML structure */}
      <div className="page-hero card card-lg card-black mb-3 transactions-stats" style={{ background: '#111', borderRadius: 18, boxShadow: '0 2px 12px #0006', padding: 0, overflow: 'hidden', border: 'none', width: "100%" }}>
        <div style={{ display: 'flex', alignItems: 'stretch', minHeight: 260 }}>
          {/* Stats Left */}
          <div style={{ width: 260, background: 'transparent', padding: '32px 0 32px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ marginBottom: 18 }}>
              <div style={{ color: '#8e8e8e', fontSize: 15, fontWeight: 500, marginBottom: 2 }}>Applications</div>
              <div style={{ color: '#23f7dd', fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: 1 }}>{last.total.toLocaleString()}</div>
            </div>
            <div style={{ marginBottom: 18 }}>
              <div style={{ color: '#8e8e8e', fontSize: 15, fontWeight: 500, marginBottom: 2 }}>Applications</div>
              <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: 1 }}>{last.applications.toLocaleString()}</div>
            </div>
            <div>
              <div style={{ color: '#8e8e8e', fontSize: 15, fontWeight: 500, marginBottom: 2 }}>Standard</div>
              <div style={{ color: '#8b5cf6', fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: 1 }}>{last.standard.toLocaleString()}</div>
            </div>
          </div>
          {/* Chart Right */}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', padding: '0 0 0 0' }}>
            {/* Dropdown */}
            <div style={{ position: 'absolute', top: 18, right: 24, zIndex: 2 }}>
              <div
                style={{ background: '#232325', color: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #0008', padding: '2px 0', minWidth: 64, fontSize: 15, fontWeight: 500, textAlign: 'center', cursor: 'pointer', userSelect: 'none', position: 'relative' }}
                onClick={() => setDropdownOpen((v) => !v)}
                tabIndex={0}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              >
                {selectedRange} <span style={{ fontSize: 12, marginLeft: 4 }}>▼</span>
                {dropdownOpen && (
                  <div style={{ position: 'absolute', top: 32, right: 0, background: '#232325', borderRadius: 8, boxShadow: '0 2px 8px #0008', minWidth: 64, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    {['7d', '30d', '365d', 'All'].map((range) => (
                      <div
                        key={range}
                        style={{ padding: '8px 0', borderBottom: range !== 'All' ? '1px solid #333' : 'none', color: '#fff', background: selectedRange === range ? '#18191b' : 'transparent', cursor: 'pointer' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedRange(range);
                          setDropdownOpen(false);
                        }}
                      >
                        {range}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="bg-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#232325" stopOpacity={0.0} />
                    <stop offset="100%" stopColor="#111" stopOpacity={1} />
                  </linearGradient>
                  <linearGradient id="totalValue-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#23f7dd" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="#23f7dd" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="contractValue-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4ade80" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="#4ade80" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="transactionValue-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                {/* Chart background gradient */}
                <rect x="0" y="0" width="100%" height="100%" fill="url(#bg-gradient)" />
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip contentStyle={{ background: '#232325', border: 'none', borderRadius: 8, color: '#fff' }} />
                <Area type="monotone" dataKey="total" stroke="#23f7dd" fill="url(#totalValue-gradient)" strokeWidth={2.5} dot={false} />
                <Area type="monotone" dataKey="applications" stroke="#4ade80" fill="url(#contractValue-gradient)" strokeWidth={2.5} dot={false} />
                <Area type="monotone" dataKey="standard" stroke="#8b5cf6" fill="url(#transactionValue-gradient)" strokeWidth={2.5} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

         {/* Most Used Applications (daily) - pixel-perfect carousel */}
      <div className="apps-most-used-section">
        <div className="apps-most-used-title-row">
          <span className="apps-most-used-title">Most Used Applications <span className="apps-most-used-title-sub">(daily)</span></span>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={5}
          className="apps-most-used-swiper"
          allowTouchMove={true}
          breakpoints={{
            1200: { slidesPerView: 5 },
            900: { slidesPerView: 3 },
            600: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {mostUsedApps.map((app) => (
            <SwiperSlide key={app.rank}>
              <div className="apps-most-used-card">
                <div className="apps-most-used-rank">{app.rank}</div>
                <div className="apps-most-used-txns">
                  {app.txns.toLocaleString()} <span className="apps-most-used-txns-label">Txn</span>
                </div>
                <div className="apps-most-used-icon-wrap">
                  <div className="apps-most-used-icon-glow" style={{boxShadow: app.iconType === 'xportal' ? '0 0 32px 0 #00fff066' : '0 0 32px 0 #ff4d8b66'}}></div>
                  {app.iconType === 'xportal' ? (
                    <svg className="apps-most-used-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="32" fill="#18191b" />
                      <path d="M16 20L32 44L48 20" stroke="#00fff0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 44L32 20L48 44" stroke="#00fff0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <img src="https://ashswap.io/favicon-192.png" alt={app.name} className="apps-most-used-icon" />
                  )}
                </div>
                <div className="apps-most-used-name">{app.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>          

      {/* Browse all deployed apps table - pixel-perfect as screenshot */}
      <div className="apps-browse-table-section">
        <div className="apps-browse-table-header-row">
          <span className="apps-browse-table-title">Browse all deployed apps</span>
          <input className="apps-browse-table-search" placeholder="Search 11,714 Apps" />
        </div>
        <div className="apps-browse-table-wrapper">
          <table className="apps-browse-table">
            <thead>
              <tr>
                <th>Name/Address</th>
                <th>Owner</th>
                <th>Balance</th>
                <th>Transactions / 24h</th>
                <th>Deployed</th>
              </tr>
            </thead>
            <tbody>
              {/* Demo rows, replace with real data as needed */}
              <tr>
                <td><span className="apps-browse-table-icon-wrap"><svg width="32" height="32" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#18191b" /><path d="M16 20L32 44L48 20" stroke="#00fff0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 44L32 20L48 44" stroke="#00fff0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg></span> xPortal: Social Module 2</td>
                <td>erd1kj7l40r ... 25dl3s85klfd</td>
                <td>× 0 EGLD</td>
                <td className="apps-browse-table-txns">7,520</td>
                <td>480 days ago</td>
              </tr>
              <tr>
                <td><span className="apps-browse-table-icon-wrap"><svg width="32" height="32" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#18191b" /><path d="M16 20L32 44L48 20" stroke="#00fff0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 44L32 20L48 44" stroke="#00fff0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg></span> xPortal: Boost Module 2</td>
                <td>erd135dehdl ... f7y9sz9y2qf</td>
                <td>× 0 EGLD</td>
                <td className="apps-browse-table-txns">5,810</td>
                <td>74 days ago</td>
              </tr>
              <tr>
                <td><span className="apps-browse-table-icon-wrap"><svg width="32" height="32" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#18191b" /><path d="M16 20L32 44L48 20" stroke="#00fff0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 44L32 20L48 44" stroke="#00fff0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg></span> xPortal: Social Module 3</td>
                <td>erd12afks7 ... a6mq82wl6k</td>
                <td>× 0 EGLD</td>
                <td className="apps-browse-table-txns">3,902</td>
                <td>480 days ago</td>
              </tr>
              <tr>
                <td><span className="apps-browse-table-icon-wrap"><svg width="32" height="32" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#18191b" /><path d="M16 20L32 44L48 20" stroke="#00fff0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 44L32 20L48 44" stroke="#00fff0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg></span> xPortal: Social Module 1</td>
                <td>erd1lj5cu2p ... s38juqktl8fg</td>
                <td>× 0 EGLD</td>
                <td className="apps-browse-table-txns">3,805</td>
                <td>480 days ago</td>
              </tr>
              <tr>
                <td><span className="apps-browse-table-icon-wrap"><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#232325" /></svg></span> erd1qqqqqqqqqqqqqq ... sp89eeyaeqpsn5xqg</td>
                <td>erd10acgqk0 ... repqsp35dpt</td>
                <td>× 0 EGLD</td>
                <td className="apps-browse-table-txns">3,737</td>
                <td>46 days ago</td>
              </tr>
              <tr>
                <td><span className="apps-browse-table-icon-wrap"><svg width="32" height="32" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#18191b" /><path d="M16 20L32 44L48 20" stroke="#00fff0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 44L32 20L48 44" stroke="#00fff0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg></span> xPortal: Social Module 5</td>
                <td>erd1xyz...abcd</td>
                <td>× 0 EGLD</td>
                <td className="apps-browse-table-txns">3,100</td>
                <td>100 days ago</td>
              </tr>
            </tbody>
          </table>
          <div className="apps-browse-table-footer">
            <div className="apps-browse-table-pagination">
              <span className="apps-browse-table-pagination-btn disabled">&#60; Prev</span>
              <span className="apps-browse-table-pagination-page active">1</span>
              <span className="apps-browse-table-pagination-page">2</span>
              <span className="apps-browse-table-pagination-page">...</span>
              <span className="apps-browse-table-pagination-page">358</span>
              <span className="apps-browse-table-pagination-btn">Next &#62;</span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div style={{ textAlign: 'center', color: '#8e8e8e', fontSize: 13, margin: '32px 0 8px 0' }}>
        Made with <span style={{ color: '#ff4d4f' }}>♥</span> by the MultiversX team<br />
        <span style={{ fontSize: 11 }}>All data is demo.</span>
      </div>
    </div>
  );
}

export default AppsPage;
