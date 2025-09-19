import { useEffect } from "react";

const StarfieldBackground: React.FC = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.className = "starfield";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d")!;
    let stars: any[] = [], W: number, H: number, tick = 0;
    const mouse = { x: 0, y: 0 };

    function size() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", size, { passive: true });
    size();

    function initStars(n = 140) {
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        z: Math.random() * 1 + 0.2,
        r: Math.random() * 1.2 + 0.2,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      }));
    }
    initStars();

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function loop() {
      tick++;
      ctx.clearRect(0, 0, W, H);
      for (const s of stars) {
        const px = (mouse.x / W - 0.5) * 6 * s.z;
        const py = (mouse.y / H - 0.5) * 6 * s.z;
        s.x += s.vx + px * 0.002;
        s.y += s.vy + py * 0.002;
        if (s.x < -10) s.x = W + 10;
        if (s.x > W + 10) s.x = -10;
        if (s.y < -10) s.y = H + 10;
        if (s.y > H + 10) s.y = -10;

        const glow = 0.4 + Math.sin(tick / 30 + s.x) * 0.3;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${200 + s.z * 80}, 90%, ${70 + glow * 20}%, ${
          0.45 + s.z * 0.3
        })`;
        ctx.fill();
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    return () => {
      document.body.removeChild(canvas);
    };
  }, []);

  return null; // ye component sirf background render karega
};

export default StarfieldBackground;
