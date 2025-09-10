function LandingCharts() {
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
              <svg width="100%" height="48" viewBox="0 0 220 48"><polyline points="0,30 20,20 40,32 60,18 80,28 100,24 120,36 140,22 160,32 180,20 200,28 220,18" fill="none" stroke="#00fff0" strokeWidth="2" /><circle cx="60" cy="18" r="6" fill="#181A20" stroke="#00fff0" strokeWidth="2" /><text x="70" y="22" fill="#00fff0" fontSize="12">Aug 14, 2025 $15.20</text></svg>
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
              <svg width="100%" height="48" viewBox="0 0 220 48"><polyline points="0,30 20,20 40,32 60,18 80,28 100,24 120,36 140,22 160,32 180,20 200,28 220,18" fill="none" stroke="#00fff0" strokeWidth="2" /></svg>
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
          <div style={{ background: '#000', borderRadius: 16, padding: 24, boxShadow: '0 2px 12px #0008', minHeight: 210, marginBottom: 24 }}>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div style={{ color: '#aaa', fontWeight: 600, fontSize: 15 }}>Total Transactions</div>
              <button style={{ background: '#23262F', color: '#fff', border: 0, borderRadius: 8, fontSize: 15, fontWeight: 500, padding: '2px 16px' }}>
                30d <span style={{ fontSize: 13 }}>▼</span>
              </button>
            </div>
            <div style={{ fontSize: 28, color: '#00fff0', fontWeight: 700, marginBottom: 2 }}>551,980,440</div>
            <div className="d-flex gap-4 mb-2">
              <div style={{ fontSize: 18, color: '#00fff0', fontWeight: 700 }}>Applications <span style={{ color: '#00fff0', opacity: 0.7 }}>394,738,049</span></div>
              <div style={{ fontSize: 18, color: '#a78bfa', fontWeight: 700 }}>Standard <span style={{ color: '#a78bfa', opacity: 0.7 }}>157,242,391</span></div>
            </div>
            {/* Chart Placeholder */}
            <div style={{ height: 80 }}>
              <svg width="100%" height="80" viewBox="0 0 600 80">
                <polyline points="0,60 60,40 120,50 180,30 240,60 300,40 360,60 420,30 480,50 540,40 600,60" fill="none" stroke="#00fff0" strokeWidth="3" />
                <polyline points="0,70 60,60 120,65 180,55 240,70 300,60 360,70 420,55 480,65 540,60 600,70" fill="none" stroke="#a78bfa" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingCharts;
