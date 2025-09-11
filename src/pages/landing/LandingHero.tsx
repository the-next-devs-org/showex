
import './LandingHero.css';

function LandingHero() {
  return (
    <div className="container-fluid">
      <div className="bg-black rounded-4 p-4 pb-5 position-relative overflow-hidden" style={{boxShadow: '0 0 0 2px #222', minHeight: 520, padding: '36px 36px 0 36px'}}>
        <h1 className="fw-bold" style={{color: '#fff', fontSize: 36, marginBottom: 28, letterSpacing: '-0.5px', lineHeight: 1.15}}>MultiversX Blockchain Explorer</h1>
        <div className="mb-4" style={{maxWidth: 600, marginBottom: 36}}>
          <div style={{position: 'relative'}}>
            <input className="form-control bg-dark text-light border-0 px-4" style={{borderRadius: 16, fontSize: 16, height: 48, boxShadow: '0 0 0 1.5px #1a2b2b', paddingRight: 44, fontWeight: 500, letterSpacing: '0.1px'}} placeholder="Search for an address, @herotag, transaction/block hash, validator key or token id" />
            <span style={{position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', color: '#6ee7e7'}}>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
          </div>
        </div>
        {/* SVG Grid BG with animation */}
        <div className="landing-hero-bg">
          <svg width="100%" height="100%" viewBox="0 0 1100 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              {[...Array(20)].map((_, row) => (
                [...Array(50)].map((_, col) => (
                  <circle key={row + '-' + col} cx={col*22+10} cy={row*16+10 + Math.sin(col/5+row/2)*10} r={1.5} fill="#00fff0" fillOpacity="0.18" />
                ))
              ))}
            </g>
          </svg>
        </div>
        {/* Stats Cards */}
        <div className="w-100 d-flex flex-row flex-wrap gap-4 position-relative" style={{zIndex: 1, marginTop: 70}}>
          <div className="landing-hero-card">
            <div className="landing-hero-card-title">Block Height</div>
            <div className="landing-hero-card-value">107,514,314</div>
          </div>
          <div className="landing-hero-card">
            <div className="landing-hero-card-title">Total Transactions</div>
            <div className="landing-hero-card-value">551,984,481</div>
            <div className="landing-hero-card-sub">&bull; 234,007 today</div>
          </div>
          <div className="landing-hero-card">
            <div className="landing-hero-card-title">Total Accounts</div>
            <div className="landing-hero-card-value">9,066,561</div>
            <div className="landing-hero-card-sub">&bull; 111,856 active today <svg style={{marginLeft: 4, marginBottom: 2}} width="16" height="16" fill="none" stroke="#00fff0" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="5"/></svg></div>
          </div>
          <div className="landing-hero-card">
            <div className="landing-hero-card-title">Validators</div>
            <div className="landing-hero-card-value">3,229</div>
            <div className="landing-hero-card-sub">
              <svg style={{marginRight: 4}} width="18" height="18" fill="none" stroke="#00fff0" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2" fill="#00fff0"/></svg>
              Europe 1,703 nodes
            </div>
          </div>
          {/* Circles for Epoch and Round Time */}
          <div className="landing-hero-circles">
            <div className="landing-hero-circle round">
              <div style={{fontSize: 20, fontWeight: 700, lineHeight: 1}}>1s</div>
              <div className="landing-hero-circle-sub">Round<br/>Time</div>
            </div>
            <div className="landing-hero-circle epoch">
              <div className="landing-hero-circle-label">Epoch</div>
              <div className="landing-hero-circle-value">1,867</div>
              <div className="landing-hero-circle-sub">1,631 Rounds<br/>Left</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingHero;
