function LandingCarousel() {
  return (
    <div className="container-fluid">
      <div style={{ margin: '10px auto 0 auto', background: '#000', borderRadius: 24, padding: '18px 0 32px 0', boxShadow: '0 2px 12px #0008', position: 'relative', minHeight: 480, overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 32px 8px 32px' }}>
          <div style={{ color: '#fff', fontWeight: 500, fontSize: 20, letterSpacing: 0.1 }}>Most Used Applications <span style={{ color: '#aaa', fontSize: 15, fontWeight: 400 }}>(daily)</span></div>
          <button style={{ background: '#23262F', color: '#fff', border: 0, borderRadius: 8, fontSize: 15, fontWeight: 500, padding: '6px 18px', marginLeft: 12, boxShadow: '0 1px 4px #0004' }}>View Dashboard</button>
        </div>
        <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', minHeight: 320, padding: '0 0' }}>
          {/* Left Arrow */}

          {/* Cards Row */}
          <div style={{ overflowX: 'auto', overflowY: 'hidden', flex: 1, display: 'flex', justifyContent: 'center', scrollbarWidth: 'none', msOverflowStyle: 'none', padding: '0 10px' }}>
            <div style={{ display: 'flex', gap: 24, minWidth: 0 }}>
              {/* Card 1 */}
              <div style={{ background: '#23262F', borderRadius: 20, width: 200, minWidth: 200, height: 260, margin: '0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 2px 12px #0008' }}>
                <div style={{ position: 'absolute', top: 12, left: 16, color: '#aaa', fontWeight: 700, fontSize: 28, opacity: 0.8 }}>1</div>
                <div style={{ position: 'absolute', top: 18, right: 16, color: '#00fff0', fontWeight: 500, fontSize: 15, textAlign: 'right' }}>3,690 <span style={{ fontSize: 12, color: '#6ee7e7' }}>Txn</span></div>
                <div style={{ margin: '38px 0 18px 0' }}>
                  <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle, #00fff0 0%, #23262F 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px #00fff033' }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#181A20" /><path d="M12 24L24 12L36 24L24 36L12 24Z" fill="#00fff0" fillOpacity="0.8" /></svg>
                  </div>
                </div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 16, textAlign: 'center', marginBottom: 2 }}>xPortal: Social<br />Module 2</div>
              </div>
              {/* Card 2 */}
              <div style={{ background: '#23262F', borderRadius: 20, width: 200, minWidth: 200, height: 260, margin: '0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 2px 12px #0008' }}>
                <div style={{ position: 'absolute', top: 12, left: 16, color: '#aaa', fontWeight: 700, fontSize: 28, opacity: 0.8 }}>2</div>
                <div style={{ position: 'absolute', top: 18, right: 16, color: '#00fff0', fontWeight: 500, fontSize: 15, textAlign: 'right' }}>3,690 <span style={{ fontSize: 12, color: '#6ee7e7' }}>Txn</span></div>
                <div style={{ margin: '38px 0 18px 0' }}>
                  <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle, #00fff0 0%, #23262F 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px #00fff033' }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#181A20" /><path d="M12 24L24 12L36 24L24 36L12 24Z" fill="#00fff0" fillOpacity="0.8" /></svg>
                  </div>
                </div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 16, textAlign: 'center', marginBottom: 2 }}>xPortal: Social<br />Module 2</div>
              </div>
              {/* Card 3 */}
              <div style={{ background: '#23262F', borderRadius: 20, width: 200, minWidth: 200, height: 260, margin: '0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 2px 12px #0008' }}>
                <div style={{ position: 'absolute', top: 12, left: 16, color: '#aaa', fontWeight: 700, fontSize: 28, opacity: 0.8 }}>3</div>
                <div style={{ position: 'absolute', top: 18, right: 16, color: '#00fff0', fontWeight: 500, fontSize: 15, textAlign: 'right' }}>3,690 <span style={{ fontSize: 12, color: '#6ee7e7' }}>Txn</span></div>
                <div style={{ margin: '38px 0 18px 0' }}>
                  <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle, #00fff0 0%, #23262F 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px #00fff033' }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#181A20" /><path d="M12 24L24 12L36 24L24 36L12 24Z" fill="#00fff0" fillOpacity="0.8" /></svg>
                  </div>
                </div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 16, textAlign: 'center', marginBottom: 2 }}>xPortal: Social<br />Module 3</div>
              </div>
              {/* Card 4 */}
              <div style={{ background: '#23262F', borderRadius: 20, width: 200, minWidth: 200, height: 260, margin: '0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 2px 12px #0008' }}>
                <div style={{ position: 'absolute', top: 12, left: 16, color: '#aaa', fontWeight: 700, fontSize: 28, opacity: 0.8 }}>4</div>
                <div style={{ position: 'absolute', top: 18, right: 16, color: '#00fff0', fontWeight: 500, fontSize: 15, textAlign: 'right' }}>3,640 <span style={{ fontSize: 12, color: '#6ee7e7' }}>Txn</span></div>
                <div style={{ margin: '38px 0 18px 0' }}>
                  <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle, #00fff0 0%, #23262F 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px #00fff033' }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#181A20" /><path d="M12 24L24 12L36 24L24 36L12 24Z" fill="#00fff0" fillOpacity="0.8" /></svg>
                  </div>
                </div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 16, textAlign: 'center', marginBottom: 2 }}>xPortal: Social<br />Module 1</div>
              </div>
              {/* Card 5 */}
              <div style={{ background: '#23262F', borderRadius: 20, width: 200, minWidth: 200, height: 260, margin: '0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 2px 12px #0008' }}>
                <div style={{ position: 'absolute', top: 12, left: 16, color: '#aaa', fontWeight: 700, fontSize: 28, opacity: 0.8 }}>5</div>
                <div style={{ position: 'absolute', top: 18, right: 16, color: '#00fff0', fontWeight: 500, fontSize: 15, textAlign: 'right' }}>3,088 <span style={{ fontSize: 12, color: '#6ee7e7' }}>Txn</span></div>
                <div style={{ margin: '38px 0 18px 0' }}>
                  <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle, #00fff0 0%, #23262F 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px #00fff033' }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#181A20" /><path d="M12 24L24 12L36 24L24 36L12 24Z" fill="#00fff0" fillOpacity="0.8" /></svg>
                  </div>
                </div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 16, textAlign: 'center', marginBottom: 2 }}>xPortal: Boost<br />Module 3</div>
              </div>
              {/* Card 6 */}
              <div style={{ background: '#23262F', borderRadius: 20, width: 200, minWidth: 200, height: 260, margin: '0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 2px 12px #0008' }}>
                <div style={{ position: 'absolute', top: 12, left: 16, color: '#aaa', fontWeight: 700, fontSize: 28, opacity: 0.8 }}>6</div>
                <div style={{ position: 'absolute', top: 18, right: 16, color: '#00fff0', fontWeight: 500, fontSize: 15, textAlign: 'right' }}>2,951 <span style={{ fontSize: 12, color: '#6ee7e7' }}>Txn</span></div>
                <div style={{ margin: '38px 0 18px 0' }}>
                  <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle, #00fff0 0%, #23262F 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px #00fff033' }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#181A20" /><path d="M12 24L24 12L36 24L24 36L12 24Z" fill="#00fff0" fillOpacity="0.8" /></svg>
                  </div>
                </div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 16, textAlign: 'center', marginBottom: 2 }}>xPortal: Boost<br />Module 1</div>
              </div>
              {/* Card 7 */}
              <div style={{ background: '#23262F', borderRadius: 20, width: 200, minWidth: 200, height: 260, margin: '0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 2px 12px #0008' }}>
                <div style={{ position: 'absolute', top: 12, left: 16, color: '#aaa', fontWeight: 700, fontSize: 28, opacity: 0.8 }}>7</div>
                <div style={{ position: 'absolute', top: 18, right: 16, color: '#00fff0', fontWeight: 500, fontSize: 15, textAlign: 'right' }}>2,926 <span style={{ fontSize: 12, color: '#6ee7e7' }}>Txn</span></div>
                <div style={{ margin: '38px 0 18px 0' }}>
                  <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle, #ff4d67 0%, #23262F 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px #ff4d6733' }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#181A20" /><path d="M24 10L38 38H10L24 10Z" fill="#ff4d67" /><path d="M24 18L32 34H16L24 18Z" fill="#fff" /></svg>
                  </div>
                </div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 16, textAlign: 'center', marginBottom: 2 }}>AshSwap:<br />Aggregator v2</div>
              </div>
              {/* Card 8 (partially visible, for effect) */}
              <div style={{ background: '#23262F', borderRadius: 20, width: 200, minWidth: 200, height: 260, margin: '0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', opacity: 0.5, boxShadow: '0 2px 12px #0008' }}>
                <div style={{ position: 'absolute', top: 12, left: 16, color: '#aaa', fontWeight: 700, fontSize: 28, opacity: 0.8 }}>8</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default LandingCarousel;
