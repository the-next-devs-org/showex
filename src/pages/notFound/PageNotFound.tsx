import { useEffect } from "react";

function PageNotFound() {
    useEffect(() => {
        const script = document.createElement("script");
        script.innerHTML = `
      /* ===== Starfield minimal ===== */
      const canvas = document.querySelector("canvas.starfield");
      const ctx = canvas.getContext("2d");
      let stars = [], W, H, mouse = {x:0,y:0}, tick = 0;

      function size(){ W = canvas.width = innerWidth; H = canvas.height = innerHeight }
      addEventListener("resize", size, {passive:true}); size();

      function initStars(n=140){
        stars = Array.from({length:n}, () => ({
          x: Math.random()*W, y: Math.random()*H, z: Math.random()*1+0.2,
          r: Math.random()*1.2+0.2, vx:(Math.random()-.5)*0.2, vy:(Math.random()-.5)*0.2
        }));
      }
      initStars();

      addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY }, {passive:true});

      function loop(){
        tick++;
        ctx.clearRect(0,0,W,H);
        for(const s of stars){
          const px = (mouse.x/W - .5) * 6 * s.z;
          const py = (mouse.y/H - .5) * 6 * s.z;
          s.x += s.vx + px*0.002; s.y += s.vy + py*0.002;
          if(s.x< -10) s.x=W+10; if(s.x>W+10) s.x=-10;
          if(s.y< -10) s.y=H+10; if(s.y>H+10) s.y=-10;

          const glow = 0.4 + Math.sin((tick/30)+s.x)*0.3;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
          ctx.fillStyle = \`hsla(\${200 + s.z*80}, 90%, \${70 + glow*20}%, \${0.45 + s.z*0.3})\`;
          ctx.fill();
        }
        requestAnimationFrame(loop);
      }
      requestAnimationFrame(loop);
    `;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="palette-aurora" data-theme="dark" aria-live="polite">
            <canvas className="starfield" aria-hidden="true"></canvas>
            <div className="bg-gradient" aria-hidden="true"></div>
            <div className="noise" aria-hidden="true"></div>

            <div className="wrap-cstm">
                <div className="card cstmCardd" role="group" aria-label="Pagina 404">
                    <div className="blob one" aria-hidden="true"></div>
                    <div className="blob two" aria-hidden="true"></div>

                    <div className="inner">
                        <h1 className="code" data-text="404" aria-label="Errore 404">404</h1>
                            <p className="title-cstm">Page not found</p>
                            <p className="muted-cstm">
                            The link may have been moved, renamed, or no longer exists. Go back to the Home page or try a search.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
