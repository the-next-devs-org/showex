import ThreeBackground from "../../components/ThreeBackground";

function LandingHero() {
  return (
    <div className="container-fluid" style={{ position: "relative" }}>
        <div className="bg-black rounded-4 p-4 pb-5 position-relative overflow-hidden" style={{boxShadow: '0 0 0 2px #222', minHeight: 520, padding: '36px 36px 0 36px'}}>
        <ThreeBackground />
          <h1 className="fw-bold" style={{color: '#fff', fontSize: 36, marginBottom: 28, letterSpacing: '-0.5px', lineHeight: 1.15}}>MultiversX Blockchain Explorer</h1>
          <div className="mb-4" style={{maxWidth: 600, marginBottom: 36}}>
            <div style={{position: 'relative'}}>
              <input className="form-control bg-dark text-light border-0 px-4" style={{borderRadius: 16, fontSize: 16, height: 48, boxShadow: '0 0 0 1.5px #1a2b2b', paddingRight: 44, fontWeight: 500, letterSpacing: '0.1px'}} placeholder="Search for an address, @herotag, transaction/block hash, validator key or token id" />
              <span style={{position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', color: '#6ee7e7'}}>
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </span>
            </div>
          </div>
          {/* SVG Grid BG */}
          {/* <div style={{position: 'absolute', left: 0, top: 110, width: '100%', height: 340, zIndex: 0, pointerEvents: 'none', opacity: 0.7}}>
            <svg width="100%" height="100%" viewBox="0 0 1100 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                {[...Array(20)].map((_, row) => (
                  [...Array(50)].map((_, col) => (
                    <circle key={row + '-' + col} cx={col*22+10} cy={row*16+10 + Math.sin(col/5+row/2)*10} r={1.5} fill="#00fff0" fillOpacity="0.18" />
                  ))
                ))}
              </g>
            </svg>
          </div> */}
          {/* Stats Cards */}
          <div className="w-100 d-flex flex-row flex-wrap gap-4 position-relative" style={{zIndex: 1, marginTop: 70}}>
            <div style={{background: '#23262F', borderRadius: 20, padding: '28px 32px', minWidth: 260, minHeight: 120, boxShadow: '0 2px 12px #0008', marginBottom: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <div style={{fontSize: 15, color: '#aaa', fontWeight: 600, marginBottom: 10, letterSpacing: 0.1}}>Block Height</div>
              <div style={{fontSize: 32, color: '#00fff0', fontWeight: 700, letterSpacing: '-0.5px'}}>107,514,314</div>
            </div>
            <div style={{background: '#23262F', borderRadius: 20, padding: '28px 32px', minWidth: 260, minHeight: 120, boxShadow: '0 2px 12px #0008', marginBottom: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <div style={{fontSize: 15, color: '#aaa', fontWeight: 600, marginBottom: 10, letterSpacing: 0.1}}>Total Transactions</div>
              <div style={{fontSize: 32, color: '#00fff0', fontWeight: 700, letterSpacing: '-0.5px'}}>551,984,481</div>
              <div style={{fontSize: 16, color: '#00fff0', opacity: 0.8, marginTop: 6, fontWeight: 500, letterSpacing: 0.1}}>&bull; 234,007 today</div>
            </div>
            <div style={{background: '#23262F', borderRadius: 20, padding: '28px 32px', minWidth: 260, minHeight: 120, boxShadow: '0 2px 12px #0008', marginBottom: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <div style={{fontSize: 15, color: '#aaa', fontWeight: 600, marginBottom: 10, letterSpacing: 0.1}}>Total Accounts</div>
              <div style={{fontSize: 32, color: '#00fff0', fontWeight: 700, letterSpacing: '-0.5px'}}>9,066,561</div>
              <div style={{fontSize: 16, color: '#00fff0', opacity: 0.8, marginTop: 6, fontWeight: 500, letterSpacing: 0.1}}>&bull; 111,856 active today <svg style={{marginLeft: 4, marginBottom: 2}} width="16" height="16" fill="none" stroke="#00fff0" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="5"/></svg></div>
            </div>
            <div style={{background: '#23262F', borderRadius: 20, padding: '28px 32px', minWidth: 260, minHeight: 120, boxShadow: '0 2px 12px #0008', marginBottom: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative'}}>
              <div style={{fontSize: 15, color: '#aaa', fontWeight: 600, marginBottom: 10, letterSpacing: 0.1}}>Validators</div>
              <div style={{fontSize: 32, color: '#00fff0', fontWeight: 700, letterSpacing: '-0.5px'}}>3,229</div>
              <div className="d-flex align-items-center" style={{fontSize: 16, color: '#00fff0', opacity: 0.8, marginTop: 6, fontWeight: 500, letterSpacing: 0.1}}>
                <svg style={{marginRight: 4}} width="18" height="18" fill="none" stroke="#00fff0" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2" fill="#00fff0"/></svg>
                Europe 1,703 nodes
              </div>
            </div>
            {/* Epoch and Round Time - right aligned, stacked, not cut off */}
            <div style={{position: 'absolute', right: 36, bottom: 36, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 18}}>
              <div style={{border: '2px solid #00fff0', borderRadius: '50%', width: 70, height: 70, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#00fff0', background: '#181A20', marginBottom: 8, boxShadow: '0 0 12px #00fff033'}}>
                <div style={{fontSize: 20, fontWeight: 700, lineHeight: 1}}>1s</div>
                <div style={{fontSize: 13, opacity: 0.8, textAlign: 'center', lineHeight: 1.1, fontWeight: 500}}>Round<br/>Time</div>
              </div>
              <div style={{border: '2px solid #00fff0', borderRadius: '50%', width: 100, height: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#00fff0', background: '#181A20', boxShadow: '0 0 18px #00fff033'}}>
                <div style={{fontSize: 18, opacity: 0.8, textAlign: 'center', fontWeight: 500}}>Epoch</div>
                <div style={{fontSize: 34, fontWeight: 700, lineHeight: 1}}>1,867</div>
                <div style={{fontSize: 13, opacity: 0.8, textAlign: 'center', fontWeight: 500}}>1,631 Rounds<br/>Left</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default LandingHero;
