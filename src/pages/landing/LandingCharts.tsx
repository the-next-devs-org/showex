import React, { useState } from 'react';

function LandingCharts() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, data: null });

  // Mock data for different time periods (only for bottom chart)
  const mockData = {
    '7d': {
      totalTransactions: 552529562,
      applications: 394967303,
      standard: 157562259,
      chartData: [
        { date: 'Sep 7', applications: 372000000, standard: 148000000 },
        { date: 'Sep 8', applications: 382000000, standard: 153000000 },
        { date: 'Sep 9', applications: 390000000, standard: 155000000 },
        { date: 'Sep 10', applications: 387000000, standard: 153000000 },
        { date: 'Sep 11', applications: 392000000, standard: 156000000 },
        { date: 'Sep 12', applications: 394000000, standard: 156000000 },
        { date: 'Sep 13', applications: 394967303, standard: 157562259 },
      ]
    },
    '30d': {
      totalTransactions: 551980440,
      applications: 394738049,
      standard: 157242391,
      chartData: [
        { date: 'Aug 15', applications: 365000000, standard: 145000000 },
        { date: 'Aug 20', applications: 372000000, standard: 148000000 },
        { date: 'Aug 25', applications: 379000000, standard: 151000000 },
        { date: 'Aug 30', applications: 386000000, standard: 154000000 },
        { date: 'Sep 5', applications: 390000000, standard: 155000000 },
        { date: 'Sep 10', applications: 393000000, standard: 157000000 },
        { date: 'Sep 13', applications: 394738049, standard: 157242391 },
      ]
    },
    '365d': {
      totalTransactions: 498650320,
      applications: 356780240,
      standard: 141870080,
      chartData: [
        { date: 'Q1 2024', applications: 272000000, standard: 108000000 },
        { date: 'Q2 2024', applications: 301000000, standard: 119000000 },
        { date: 'Q3 2024', applications: 329000000, standard: 131000000 },
        { date: 'Q4 2024', applications: 347000000, standard: 138000000 },
        { date: 'Q1 2025', applications: 356780240, standard: 141870080 },
      ]
    },
    'All': {
      totalTransactions: 1250000000,
      applications: 895000000,
      standard: 355000000,
      chartData: [
        { date: '2020', applications: 35000000, standard: 15000000 },
        { date: '2021', applications: 129000000, standard: 51000000 },
        { date: '2022', applications: 322500000, standard: 127500000 },
        { date: '2023', applications: 608500000, standard: 241500000 },
        { date: '2024', applications: 787000000, standard: 313000000 },
        { date: '2025', applications: 895000000, standard: 355000000 },
      ]
    }
  };

  const periods = ['7d', '30d', '365d', 'All'];
  const currentData = mockData[selectedPeriod];

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="container-fluid">
      <div className="row g-4 mb-2">
        {/* Current Price */}
        <div className="col-md-4">
          <div style={{ background: '#000', borderRadius: 16, padding: 24, boxShadow: '0 2px 12px #0008', minHeight: 210, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div style={{ color: '#aaa', fontWeight: 600, fontSize: 15 }}>Current Price</div>
              <button style={{ background: '#23262F', color: '#fff', border: 0, borderRadius: 8, fontSize: 15, fontWeight: 500, padding: '2px 16px' }}>
                30d <span style={{ fontSize: 13 }}>▼</span>
              </button>
            </div>
            <div style={{ fontSize: 28, color: '#00fff0', fontWeight: 700, marginBottom: 2 }}>$14.23</div>
            <div style={{ color: '#ff4d67', fontSize: 15, fontWeight: 500, marginBottom: 8 }}>
              <span style={{ marginRight: 6 }}>🔻</span>-0.32% today
            </div>
            {/* Chart Placeholder */}
            <div style={{ height: 48, marginBottom: 8 }}>
              <svg width="100%" height="48" viewBox="0 0 220 48">
                <polyline points="0,30 20,20 40,32 60,18 80,28 100,24 120,36 140,22 160,32 180,20 200,28 220,18" fill="none" stroke="#00fff0" strokeWidth="2" />
                <circle cx="60" cy="18" r="6" fill="#181A20" stroke="#00fff0" strokeWidth="2" />
                <text x="70" y="22" fill="#00fff0" fontSize="12">Aug 14, 2025 $15.20</text>
              </svg>
            </div>
            <div className="d-flex justify-content-between" style={{ color: '#aaa', fontSize: 15, fontWeight: 500 }}>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 17 }}>$406,831,650</div>
                <div style={{ fontSize: 13, color: '#aaa' }}>Market Cap</div>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 17 }}>$19,910,458</div>
                <div style={{ fontSize: 13, color: '#aaa' }}>24h Volume</div>
              </div>
            </div>
          </div>
        </div>
        {/* Total Staked */}
        <div className="col-md-5">
          <div style={{ background: '#000', borderRadius: 16, padding: 24, boxShadow: '0 2px 12px #0008', minHeight: 210, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div style={{ color: '#aaa', fontWeight: 600, fontSize: 15 }}>Total Staked</div>
              <button style={{ background: '#23262F', color: '#fff', border: 0, borderRadius: 8, fontSize: 15, fontWeight: 500, padding: '2px 16px' }}>
                30d <span style={{ fontSize: 13 }}>▼</span>
              </button>
            </div>
            <div style={{ fontSize: 28, color: '#00fff0', fontWeight: 700, marginBottom: 2 }}>14,418,629 EGLD <span style={{ fontSize: 18, color: '#fff', opacity: 0.7 }}>(50.41%)</span></div>
            {/* Chart Placeholder */}
            <div style={{ height: 48, marginBottom: 8 }}>
              <svg width="100%" height="48" viewBox="0 0 220 48">
                <polyline points="0,30 20,20 40,32 60,18 80,28 100,24 120,36 140,22 160,32 180,20 200,28 220,18" fill="none" stroke="#00fff0" strokeWidth="2" />
              </svg>
            </div>
            <div className="d-flex justify-content-between" style={{ color: '#aaa', fontSize: 15, fontWeight: 500 }}>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 17 }}>28,605,179</div>
                <div style={{ fontSize: 13, color: '#aaa' }}>Circulating Supply</div>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 17 }}>104,832</div>
                <div style={{ fontSize: 13, color: '#aaa' }}>Users Staking</div>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 17 }}>6.45%</div>
                <div style={{ fontSize: 13, color: '#aaa' }}>Average APR</div>
              </div>
            </div>
          </div>
        </div>
        {/* Developer Rewards */}
        <div className="col-md-3">
          <div style={{ background: '#000', borderRadius: 16, padding: 24, boxShadow: '0 2px 12px #0008', minHeight: 210, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ color: '#aaa', fontWeight: 600, fontSize: 15, marginBottom: 8 }}>Developer Rewards</div>
            <div style={{ fontSize: 22, color: '#00fff0', fontWeight: 700, marginBottom: 8 }}>6,532 EGLD</div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 17, marginBottom: 2 }}>65,851 EGLD</div>
            <div style={{ fontSize: 13, color: '#aaa', marginBottom: 8 }}>Fees Captured</div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 17 }}>11,705</div>
            <div style={{ fontSize: 13, color: '#aaa' }}>Applications Deployed</div>
          </div>
        </div>
      </div>
      {/* Total Transactions Chart */}
      <div className="row g-4">
        <div className="col-12">
          <div style={{ background: '#000', borderRadius: 16, padding: 24, boxShadow: '0 2px 12px #0008', minHeight: 300, position: 'relative' }}>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div style={{ color: '#aaa', fontWeight: 600, fontSize: 15 }}>Total Transactions</div>
              <div style={{ position: 'relative' }}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  style={{ 
                    background: '#23262F', 
                    color: '#fff', 
                    border: 0, 
                    borderRadius: 8, 
                    fontSize: 15, 
                    fontWeight: 500, 
                    padding: '6px 16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  }}
                >
                  {selectedPeriod} <span style={{ fontSize: 13 }}>▼</span>
                </button>
                {isDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: 4,
                    background: '#23262F',
                    borderRadius: 8,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    zIndex: 1000,
                    minWidth: 80
                  }}>
                    {periods.map(period => (
                      <button
                        key={period}
                        onClick={() => {
                          setSelectedPeriod(period);
                          setIsDropdownOpen(false);
                        }}
                        style={{
                          display: 'block',
                          width: '100%',
                          padding: '8px 16px',
                          background: selectedPeriod === period ? '#333' : 'transparent',
                          color: '#fff',
                          border: 0,
                          fontSize: 15,
                          fontWeight: 500,
                          cursor: 'pointer',
                          textAlign: 'left',
                          borderRadius: selectedPeriod === period ? 4 : 0
                        }}
                        onMouseEnter={(e) => {
                          if (selectedPeriod !== period) {
                            e.target.style.background = '#2a2a2a';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedPeriod !== period) {
                            e.target.style.background = 'transparent';
                          }
                        }}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div style={{ fontSize: 28, color: '#00fff0', fontWeight: 700, marginBottom: 2 }}>
              {formatNumber(currentData.totalTransactions)}
            </div>
            <div className="d-flex gap-4 mb-2">
              <div style={{ fontSize: 18, color: '#00fff0', fontWeight: 700 }}>
                Applications <span style={{ color: '#00fff0', opacity: 0.7 }}>
                  {formatNumber(currentData.applications)}
                </span>
              </div>
              <div style={{ fontSize: 18, color: '#a78bfa', fontWeight: 700 }}>
                Standard <span style={{ color: '#a78bfa', opacity: 0.7 }}>
                  {formatNumber(currentData.standard)}
                </span>
              </div>
            </div>
            {/* Custom Chart */}
            <div 
              style={{ height: 120, position: 'relative', marginTop: 20 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const width = rect.width;
                const dataIndex = Math.floor((x / width) * currentData.chartData.length);
                
                if (dataIndex >= 0 && dataIndex < currentData.chartData.length) {
                  const data = currentData.chartData[dataIndex];
                  setTooltip({
                    visible: true,
                    x: e.clientX,
                    y: e.clientY - 20,
                    data: data
                  });
                }
              }}
              onMouseLeave={() => setTooltip({ visible: false, x: 0, y: 0, data: null })}
            >
              <svg width="100%" height="120" viewBox="0 0 600 120">
                {/* Applications Area */}
                <defs>
                  <linearGradient id="applicationsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00fff0" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00fff0" stopOpacity={0.05}/>
                  </linearGradient>
                  <linearGradient id="standardGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#a78bfa" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                
                {/* Generate chart paths */}
                {(() => {
                  const maxApps = Math.max(...currentData.chartData.map(d => d.applications));
                  const maxStandard = Math.max(...currentData.chartData.map(d => d.standard));
                  const maxTotal = maxApps + maxStandard;
                  
                  const appsPath = currentData.chartData.map((d, i) => {
                    const x = (i / (currentData.chartData.length - 1)) * 580 + 10;
                    const y = 100 - (d.applications / maxTotal) * 80;
                    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }).join(' ');
                  
                  const standardPath = currentData.chartData.map((d, i) => {
                    const x = (i / (currentData.chartData.length - 1)) * 580 + 10;
                    const y = 100 - ((d.applications + d.standard) / maxTotal) * 80;
                    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }).join(' ');
                  
                  const appsAreaPath = appsPath + ' L 590 100 L 10 100 Z';
                  const standardAreaPath = standardPath + ` L 590 ${100 - (currentData.chartData[currentData.chartData.length - 1].applications / maxTotal) * 80} ` + 
                    currentData.chartData.map((d, i) => {
                      const x = (((currentData.chartData.length - 1 - i) / (currentData.chartData.length - 1)) * 580) + 10;
                      const y = 100 - (d.applications / maxTotal) * 80;
                      return `L ${x} ${y}`;
                    }).reverse().join(' ') + ' Z';
                  
                  return (
                    <>
                      <path d={appsAreaPath} fill="url(#applicationsGradient)" />
                      <path d={standardAreaPath} fill="url(#standardGradient)" />
                      <path d={appsPath} fill="none" stroke="#00fff0" strokeWidth="3" />
                      <path d={standardPath} fill="none" stroke="#a78bfa" strokeWidth="3" />
                    </>
                  );
                })()}
              </svg>
            </div>
            
            {/* Custom Tooltip */}
            {tooltip.visible && tooltip.data && (
              <div 
                style={{
                  position: 'fixed',
                  left: tooltip.x,
                  top: tooltip.y,
                  background: '#1a1a1a',
                  border: '1px solid #333',
                  borderRadius: 8,
                  padding: 12,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                  zIndex: 10000,
                  pointerEvents: 'none',
                  transform: 'translateX(-50%)'
                }}
              >
                <div style={{ color: '#fff', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>
                  {tooltip.data.date}
                </div>
                <div style={{ color: '#00fff0', fontSize: 13, marginBottom: 4 }}>
                  Applications: {formatNumber(tooltip.data.applications)}
                </div>
                <div style={{ color: '#a78bfa', fontSize: 13 }}>
                  Standard: {formatNumber(tooltip.data.standard)}
                </div>
                <div style={{ color: '#fff', fontSize: 13, marginTop: 4, paddingTop: 4, borderTop: '1px solid #333' }}>
                  Total: {formatNumber(tooltip.data.applications + tooltip.data.standard)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999
          }}
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
}

export default LandingCharts;