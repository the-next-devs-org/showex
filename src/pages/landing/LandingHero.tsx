

// import React, { useEffect, useState } from "react";
// import ThreeBackground from "../../components/ThreeBackground";

// function LandingHero() {
//   // Animated round time state
//  const [roundTime, setRoundTime] = useState(1);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRoundTime(prev => {
//         const newTime = prev >= 7 ? 1 : prev + 1;
//         if (newTime === 1) {
//           setProgress(0); // Reset progress when cycle restarts
//         }
//         return newTime;
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const progressInterval = setInterval(() => {
//       setProgress(prev => {
//         const newProgress = prev + (100/7); // 7 seconds total
//         return newProgress > 100 ? 100 : newProgress;
//       });
//     }, 1000);
//     return () => clearInterval(progressInterval);
//   }, []);

//   return (
//     <div className="container-fluid" style={{ position: "relative" }}>
//       <div className="bg-black rounded-4 p-4 pb-5 position-relative overflow-hidden" style={{ boxShadow: '0 0 0 2px #222', minHeight: 520, padding: '36px 36px 0 36px' }}>
//         <ThreeBackground />
//         <h1 className="fw-bold" style={{ color: '#fff', fontSize: 36, marginBottom: 28, letterSpacing: '-0.5px', lineHeight: 1.15, zIndex: '99999999', position: 'relative' }}>ShowEX Blockchain Explorer</h1>
//         <div className="mb-4" style={{ maxWidth: 600, marginBottom: 36 }}>
//           <div style={{ position: 'relative' }}>
//             <input className="form-control bg-dark text-light border-0 px-4" style={{ borderRadius: 16, fontSize: 16, height: 48, boxShadow: '0 0 0 1.5px #1a2b2b', paddingRight: 44, fontWeight: 500, letterSpacing: '0.1px' }} placeholder="Search for an address, @herotag, transaction/block hash, validator key or token id" />
//             <span style={{ position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', color: '#6ee7e7' }}>
//               <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
//             </span>
//           </div>
//         </div>
//         {/* SVG Grid BG */}
//         {/* <div style={{position: 'absolute', left: 0, top: 110, width: '100%', height: 340, zIndex: 0, pointerEvents: 'none', opacity: 0.7}}>
//           <svg width="100%" height="100%" viewBox="0 0 1100 320" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <g>
//               {[...Array(20)].map((_, row) => (
//                 [...Array(50)].map((_, col) => (
//                   <circle key={row + '-' + col} cx={col*22+10} cy={row*16+10 + Math.sin(col/5+row/2)*10} r={1.5} fill="#00fff0" fillOpacity="0.18" />
//                 ))
//               ))}
//             </g>
//           </svg>
//         </div> */}
//         {/* Stats Cards */}
//         <div className="w-100 position-relative" style={{ zIndex: 1, marginTop: 70, display: 'flex', flexDirection: 'column', gap: 32 }}>
//           {/* Top row: Block Height (full width, original width) */}
//           <div style={{ background: '#23262F', borderRadius: 20, padding: '20px 32px', minWidth: 260, minHeight: 120, boxShadow: '0 2px 12px #0008', marginBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '30%' }}>
//             <div style={{ fontSize: 15, color: '#aaa', fontWeight: 600, letterSpacing: 0.1 }}>Block Height</div>
//             <div style={{ fontSize: 32, color: '#00fff0', fontWeight: 700, letterSpacing: '-0.5px' }}>107,514,314</div>
//           </div>
//           {/* Second row: 2 cards side by side, original widths */}
//           <div style={{ display: 'flex', flexDirection: 'row', gap: 32, width: '66%' }}>
//             <div style={{ background: '#23262F', borderRadius: 20, padding: '20px 32px', minWidth: 260, minHeight: 120, boxShadow: '0 2px 12px #0008', marginBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
//               <div style={{ fontSize: 15, color: '#aaa', fontWeight: 600, letterSpacing: 0.1 }}>Total Transactions</div>
//               <div style={{ fontSize: 32, color: '#00fff0', fontWeight: 700, letterSpacing: '-0.5px' }}>551,984,481</div>
//               <div style={{ fontSize: 16, color: '#00fff0', opacity: 0.8, marginTop: 6, fontWeight: 500, letterSpacing: 0.1 }}>&bull; 234,007 today</div>
//             </div>
//             <div style={{ background: '#23262F', borderRadius: 20, padding: '20px 32px', minWidth: 260, minHeight: 120, boxShadow: '0 2px 12px #0008', marginBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
//               <div style={{ fontSize: 15, color: '#aaa', fontWeight: 600, letterSpacing: 0.1 }}>Total Accounts</div>
//               <div style={{ fontSize: 32, color: '#00fff0', fontWeight: 700, letterSpacing: '-0.5px' }}>9,066,561</div>
//               <div style={{ fontSize: 16, color: '#00fff0', opacity: 0.8, marginTop: 6, fontWeight: 500, letterSpacing: 0.1 }}>&bull; 111,856 active today <svg style={{ marginLeft: 4, marginBottom: 2 }} width="16" height="16" fill="none" stroke="#00fff0" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="12" cy="12" r="5" /></svg></div>
//             </div>
//           </div>
//           {/* Third row: Validators (full width, original width) */}
//           <div style={{
//             background: '#181A20',
//             borderRadius: 20,
//             padding: '10px 26px',
//             minWidth: 600,
//             minHeight: 120,
//             boxShadow: '0 2px 12px #0008',
//             marginBottom: 0,
//             display: 'flex',
//             flexDirection: 'row',
//             alignItems: 'center',
//             position: 'relative',
//             overflow: 'hidden',
//             width: '66%',
//           }}>
//             {/* SVG BG as background */}
//             <div style={{
//               position: 'absolute',
//               right: 0,
//               top: 0,
//               height: '100%',
//               width: 320,
//               zIndex: 1,
//               pointerEvents: 'none',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'flex-end',
//             }}>
//               <svg width="320" height="120" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '100%', width: '100%', opacity: 0.7 }}>
//                 <rect x="0" y="0" width="320" height="120" rx="20" fill="#101217" />
//                 <g>
//                   <circle cx="60" cy="60" r="3" fill="#00fff0" />
//                   <circle cx="90" cy="40" r="2.5" fill="#00fff0" />
//                   <circle cx="120" cy="80" r="2.5" fill="#00fff0" />
//                   <circle cx="180" cy="55" r="3" fill="#00fff0" />
//                   <circle cx="230" cy="35" r="2.5" fill="#00fff0" />
//                   <circle cx="270" cy="60" r="3" fill="#00fff0" />
//                   <circle cx="300" cy="40" r="2.5" fill="#00fff0" />
//                   <circle cx="260" cy="95" r="2.5" fill="#00fff0" />
//                   <circle cx="160" cy="100" r="2.5" fill="#00fff0" />
//                 </g>
//                 <rect x="0" y="0" width="320" height="120" rx="20" fill="none" stroke="#23262F" strokeWidth="2" />
//               </svg>
//             </div>
//             {/* Left: Stats */}
//             <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', gap: 8 }}>
//               <div style={{ fontSize: 15, color: '#aaa', fontWeight: 600, marginBottom: 2, letterSpacing: 0.1 }}>Validators</div>
//               <div style={{ fontSize: 36, color: '#00fff0', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 8 }}>3,232</div>
//               <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
//                 <span style={{ background: '#23262F', color: '#00fff0', borderRadius: 16, padding: '4px 12px', fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center' }}>
//                   <svg width="16" height="16" fill="none" stroke="#00fff0" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 4 }}><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="2.5" fill="#00fff0" /></svg>
//                   America <b style={{ margin: '0 2px' }}>983 nodes</b> <span style={{ color: '#aaa', fontWeight: 400, marginLeft: 4 }}>(34%)</span>
//                 </span>
//                 <span style={{ background: '#23262F', color: '#00fff0', borderRadius: 16, padding: '4px 12px', fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center' }}>
//                   <svg width="16" height="16" fill="none" stroke="#00fff0" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 4 }}><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="2.5" fill="#00fff0" /></svg>
//                   Asia <b style={{ margin: '0 2px' }}>180 nodes</b> <span style={{ color: '#aaa', fontWeight: 400, marginLeft: 4 }}>(6%)</span>
//                 </span>
//                 <span style={{ background: '#23262F', color: '#00fff0', borderRadius: 16, padding: '4px 12px', fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center' }}>
//                   <svg width="16" height="16" fill="none" stroke="#00fff0" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 4 }}><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="2.5" fill="#00fff0" /></svg>
//                   Others <b style={{ margin: '0 2px' }}>14 nodes</b> <span style={{ color: '#aaa', fontWeight: 400, marginLeft: 4 }}>(1%)</span>
//                 </span>
//                 <span style={{ background: '#23262F', color: '#00fff0', borderRadius: 16, padding: '4px 12px', fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center' }}>
//                   <svg width="16" height="16" fill="none" stroke="#00fff0" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 4 }}><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="2.5" fill="#00fff0" /></svg>
//                   Europe <b style={{ margin: '0 2px' }}>1,703 nodes</b> <span style={{ color: '#aaa', fontWeight: 400, marginLeft: 4 }}>(59%)</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//           {/* Epoch and Round Time - right aligned, side by side, spaced further right and down */}
//           <div style={{
//             position: 'absolute',
//             right: 0,
//             bottom: 0,
//             display: 'flex',
//             flexDirection: 'row',
//             alignItems: 'flex-end',
//             gap: 12,
//             zIndex: 3,
//           }}>
//             {/* Round Time (smaller left circle) */}
//             <div
//               style={{
//                 position: "relative",
//                 width: 90,
//                 height: 90,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 borderRadius: "50%",
//                 background: "#181A20",
//                 color: "#00fff0",
//                 marginBottom: 0,
//               }}
//             >
//               {/* Static Outline */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   borderRadius: "50%",
//                   border: "3px solid #00fff0",
//                   opacity: 0.4, // lighter static outline
//                   boxSizing: "border-box",
//                 }}
//               ></div>

//               {/* Rotating Outline */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   borderRadius: "50%",
//                   border: "3px solid transparent",
//                   borderTop: "3px solid #00fff0", // only top side visible
//                   animation: "spin 1.5s linear infinite",
//                   boxSizing: "border-box",
//                 }}
//               >

//               </div>

//               {/* Inside Text */}
//               <div
//                 style={{
//                   fontSize: "1.25rem",
//                   fontWeight: 700,
//                   lineHeight: 1,
//                   color: "#fff",
//                   zIndex: 1,
//                 }}
//               >
//                 {roundTime}s
//               </div>
//               <div
//                 style={{
//                   fontSize: ".688rem",
//                   opacity: 0.8,
//                   textAlign: "center",
//                   lineHeight: 1.1,
//                   fontWeight: 500,
//                   color: "#a3a3a3",
//                   zIndex: 1,
//                 }}
//               >
//                 Round Time
//               </div>

//               {/* Spinner Animation */}
//               <style>
//                 {`
//       @keyframes spin {
//         0% { transform: rotate(0deg); }
//         100% { transform: rotate(360deg); }
//       }
//     `}
//               </style>
//             </div>

//             {/* Epoch (larger right circle) */}
//             <div style={{
//               border: '2.5px solid #00fff0',
//               borderRadius: '50%',
//               width: 150,
//               height: 150,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//               color: '#00fff0',
//               background: '#181A20',
//               boxShadow: '0 0 18px #00fff033',
//               marginBottom: 0,
//             }}>
//               <div style={{ fontSize: '1.25rem', opacity: 0.8, textAlign: 'center', fontWeight: 500, color: '#fff' }}>Epoch</div>
//               <div style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1, color: '#fff' }}>1,870</div>
//               <div style={{ fontSize: '.688rem', opacity: 0.8, textAlign: 'center', fontWeight: 500, color: '#a3a3a3' }}>13,041 Rounds Left</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LandingHero;



import React, { useEffect, useState } from "react";
import ThreeBackground from "../../components/ThreeBackground";

function LandingHero() {
  // Animated round time state
 const [roundTime, setRoundTime] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoundTime(prev => {
        const newTime = prev >= 7 ? 1 : prev + 1;
        return newTime;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Calculate progress based on current round time
    setProgress((roundTime / 7) * 100);
  }, [roundTime]);

  return (
    <div className="container-fluid" style={{ position: "relative" }}>
      <div className="bg-black rounded-4 p-4 pb-5 position-relative overflow-hidden" style={{ boxShadow: '0 0 0 2px #222', minHeight: 520, padding: '36px 36px 0 36px' }}>
        <ThreeBackground />
        <h1 className="fw-bold" style={{ color: '#fff', fontSize: 36, marginBottom: 28, letterSpacing: '-0.5px', lineHeight: 1.15, zIndex: '99999999', position: 'relative' }}>ShowEX Blockchain Explorer</h1>
        <div className="mb-4" style={{ maxWidth: 600, marginBottom: 36 }}>
          <div style={{ position: 'relative' }}>
            <input className="form-control bg-dark text-light border-0 px-4" style={{ borderRadius: 16, fontSize: 16, height: 48, boxShadow: '0 0 0 1.5px #1a2b2b', paddingRight: 44, fontWeight: 500, letterSpacing: '0.1px' }} placeholder="Search for an address, @herotag, transaction/block hash, validator key or token id" />
            <span style={{ position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', color: '#6ee7e7' }}>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
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
        <div className="w-100 position-relative" style={{ zIndex: 1, marginTop: 70, display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* Top row: Block Height (full width, original width) */}
          <div style={{ background: '#23262F', borderRadius: 20, padding: '20px 32px', minWidth: 260, minHeight: 120, boxShadow: '0 2px 12px #0008', marginBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '30%' }}>
            <div style={{ fontSize: 15, color: '#aaa', fontWeight: 600, letterSpacing: 0.1 }}>Block Height</div>
            <div style={{ fontSize: 32, color: '#00fff0', fontWeight: 700, letterSpacing: '-0.5px' }}>107,514,314</div>
          </div>
          {/* Second row: 2 cards side by side, original widths */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: 32, width: '66%' }}>
            <div style={{ background: '#23262F', borderRadius: 20, padding: '20px 32px', minWidth: 260, minHeight: 120, boxShadow: '0 2px 12px #0008', marginBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
              <div style={{ fontSize: 15, color: '#aaa', fontWeight: 600, letterSpacing: 0.1 }}>Total Transactions</div>
              <div style={{ fontSize: 32, color: '#00fff0', fontWeight: 700, letterSpacing: '-0.5px' }}>551,984,481</div>
              <div style={{ fontSize: 16, color: '#00fff0', opacity: 0.8, marginTop: 6, fontWeight: 500, letterSpacing: 0.1 }}>&bull; 234,007 today</div>
            </div>
            <div style={{ background: '#23262F', borderRadius: 20, padding: '20px 32px', minWidth: 260, minHeight: 120, boxShadow: '0 2px 12px #0008', marginBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
              <div style={{ fontSize: 15, color: '#aaa', fontWeight: 600, letterSpacing: 0.1 }}>Total Accounts</div>
              <div style={{ fontSize: 32, color: '#00fff0', fontWeight: 700, letterSpacing: '-0.5px' }}>9,066,561</div>
              <div style={{ fontSize: 16, color: '#00fff0', opacity: 0.8, marginTop: 6, fontWeight: 500, letterSpacing: 0.1 }}>&bull; 111,856 active today <svg style={{ marginLeft: 4, marginBottom: 2 }} width="16" height="16" fill="none" stroke="#00fff0" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="12" cy="12" r="5" /></svg></div>
            </div>
          </div>
          {/* Third row: Validators (full width, original width) */}
          <div style={{
            background: '#181A20',
            borderRadius: 20,
            padding: '10px 26px',
            minWidth: 600,
            minHeight: 120,
            boxShadow: '0 2px 12px #0008',
            marginBottom: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            width: '66%',
          }}>
            {/* SVG BG as background */}
            <div style={{
              position: 'absolute',
              right: 0,
              top: 0,
              height: '100%',
              width: 320,
              zIndex: 1,
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
              <svg width="320" height="120" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '100%', width: '100%', opacity: 0.7 }}>
                <rect x="0" y="0" width="320" height="120" rx="20" fill="#101217" />
                <g>
                  <circle cx="60" cy="60" r="3" fill="#00fff0" />
                  <circle cx="90" cy="40" r="2.5" fill="#00fff0" />
                  <circle cx="120" cy="80" r="2.5" fill="#00fff0" />
                  <circle cx="180" cy="55" r="3" fill="#00fff0" />
                  <circle cx="230" cy="35" r="2.5" fill="#00fff0" />
                  <circle cx="270" cy="60" r="3" fill="#00fff0" />
                  <circle cx="300" cy="40" r="2.5" fill="#00fff0" />
                  <circle cx="260" cy="95" r="2.5" fill="#00fff0" />
                  <circle cx="160" cy="100" r="2.5" fill="#00fff0" />
                </g>
                <rect x="0" y="0" width="320" height="120" rx="20" fill="none" stroke="#23262F" strokeWidth="2" />
              </svg>
            </div>
            {/* Left: Stats */}
            <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 15, color: '#aaa', fontWeight: 600, marginBottom: 2, letterSpacing: 0.1 }}>Validators</div>
              <div style={{ fontSize: 36, color: '#00fff0', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 8 }}>3,232</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <span style={{ background: '#23262F', color: '#00fff0', borderRadius: 16, padding: '4px 12px', fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center' }}>
                  <svg width="16" height="16" fill="none" stroke="#00fff0" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 4 }}><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="2.5" fill="#00fff0" /></svg>
                  America <b style={{ margin: '0 2px' }}>983 nodes</b> <span style={{ color: '#aaa', fontWeight: 400, marginLeft: 4 }}>(34%)</span>
                </span>
                <span style={{ background: '#23262F', color: '#00fff0', borderRadius: 16, padding: '4px 12px', fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center' }}>
                  <svg width="16" height="16" fill="none" stroke="#00fff0" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 4 }}><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="2.5" fill="#00fff0" /></svg>
                  Asia <b style={{ margin: '0 2px' }}>180 nodes</b> <span style={{ color: '#aaa', fontWeight: 400, marginLeft: 4 }}>(6%)</span>
                </span>
                <span style={{ background: '#23262F', color: '#00fff0', borderRadius: 16, padding: '4px 12px', fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center' }}>
                  <svg width="16" height="16" fill="none" stroke="#00fff0" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 4 }}><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="2.5" fill="#00fff0" /></svg>
                  Others <b style={{ margin: '0 2px' }}>14 nodes</b> <span style={{ color: '#aaa', fontWeight: 400, marginLeft: 4 }}>(1%)</span>
                </span>
                <span style={{ background: '#23262F', color: '#00fff0', borderRadius: 16, padding: '4px 12px', fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center' }}>
                  <svg width="16" height="16" fill="none" stroke="#00fff0" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 4 }}><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="2.5" fill="#00fff0" /></svg>
                  Europe <b style={{ margin: '0 2px' }}>1,703 nodes</b> <span style={{ color: '#aaa', fontWeight: 400, marginLeft: 4 }}>(59%)</span>
                </span>
              </div>
            </div>
          </div>
          {/* Epoch and Round Time - right aligned, side by side, spaced further right and down */}
          <div style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            gap: 12,
            zIndex: 3,
          }}>
            {/* Round Time (smaller left circle) */}
            <div
              style={{
                position: "relative",
                width: 90,
                height: 90,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "#181A20",
                color: "#00fff0",
                marginBottom: 0,
              }}
            >
              {/* SVG Progress Circle */}
              <svg
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  transform: "rotate(-90deg)", // Start from top
                }}
                viewBox="0 0 90 90"
              >
                {/* Background circle */}
                <circle
                  cx="45"
                  cy="45"
                  r="42"
                  fill="none"
                  stroke="#00fff0"
                  strokeWidth="3"
                  opacity="0.4"
                />
                {/* Progress circle */}
                <circle
                  cx="45"
                  cy="45"
                  r="42"
                  fill="none"
                  stroke="#00fff0"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 42}`}
                  strokeDashoffset={`${2 * Math.PI * 42 * (1 - progress / 100)}`}
                  style={{
                    transition: "stroke-dashoffset 0.5s ease-in-out",
                  }}
                />
              </svg>

              {/* Inside Text */}
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "#fff",
                  zIndex: 1,
                }}
              >
                {roundTime}s
              </div>
              <div
                style={{
                  fontSize: ".688rem",
                  opacity: 0.8,
                  textAlign: "center",
                  lineHeight: 1.1,
                  fontWeight: 500,
                  color: "#a3a3a3",
                  zIndex: 1,
                }}
              >
                Round Time
              </div>
            </div>

            {/* Epoch (larger right circle) */}
            <div style={{
              border: '2.5px solid #00fff0',
              borderRadius: '50%',
              width: 150,
              height: 150,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00fff0',
              background: '#181A20',
              boxShadow: '0 0 18px #00fff033',
              marginBottom: 0,
            }}>
              <div style={{ fontSize: '1.25rem', opacity: 0.8, textAlign: 'center', fontWeight: 500, color: '#fff' }}>Epoch</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1, color: '#fff' }}>1,870</div>
              <div style={{ fontSize: '.688rem', opacity: 0.8, textAlign: 'center', fontWeight: 500, color: '#a3a3a3' }}>13,041 Rounds Left</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingHero;