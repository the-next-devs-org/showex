import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      particles: THREE.Points,
      material: THREE.PointsMaterial;

    let waveSpeed = 0.5;
    let waveAmplitude = 100;
    let dotSize = 6;

    const SEPARATION = 25;
    const AMOUNTX = 120;
    const AMOUNTY = 80;

    function init() {
      if (!mountRef.current) return;

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.set(0, 800, 1200); // fixed position
      camera.lookAt(0, 0, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000);
      mountRef.current.appendChild(renderer.domElement);

      const numParticles = AMOUNTX * AMOUNTY;
      const positions = new Float32Array(numParticles * 3);
      const colors = new Float32Array(numParticles * 3);

      let i = 0,
        j = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

          positions[i] = x;
          positions[i + 1] = 0;
          positions[i + 2] = z;

          // Set all dots to #00e8cc
          colors[j] = 0 / 255; // R
          colors[j + 1] = 232 / 255; // G
          colors[j + 2] = 204 / 255; // B

          i += 3;
          j += 3;
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      material = new THREE.PointsMaterial({
        size: dotSize,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      window.addEventListener("resize", onWindowResize, false);

      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }

      function animate() {
        requestAnimationFrame(animate);
        render();
      }

      function render() {
        const positions = (
          particles.geometry.attributes.position as THREE.BufferAttribute
        ).array as Float32Array;
        const colors = (
          particles.geometry.attributes.color as THREE.BufferAttribute
        ).array as Float32Array;

        const time = Date.now() * 0.001 * waveSpeed;

        let i = 0,
          j = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
            const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

            const distance = Math.sqrt(x * x + z * z);

            const wave1 = Math.sin(distance * 0.008 + time * 2) * waveAmplitude;
            const wave2 =
              Math.cos(distance * 0.012 + time * 1.5) * waveAmplitude * 0.4;
            const wave3 =
              Math.sin(x * 0.006 + time) *
              Math.cos(z * 0.006 + time) *
              waveAmplitude *
              0.3;

            const finalHeight = wave1 + wave2 + wave3;
            positions[i + 1] = finalHeight;

            // Keep all dots #00e8cc
            colors[j] = 0 / 255; // R
            colors[j + 1] = 232 / 255; // G
            colors[j + 2] = 204 / 255; // B

            i += 3;
            j += 3;
          }
        }

        (particles.geometry.attributes.position as any).needsUpdate = true;
        (particles.geometry.attributes.color as any).needsUpdate = true;

        renderer.render(scene, camera);
      }

      animate();
    }

    init();

    return () => {
      if (mountRef.current) {
        mountRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
    />
  );
};

export default ThreeBackground;
