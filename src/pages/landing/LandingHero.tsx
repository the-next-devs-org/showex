import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import "./LandingHero.css";

// World map topology
const geoUrl = "https://unpkg.com/world-atlas@2/countries-110m.json";

// Hotspot coordinates (approximate, adjust as needed)
const hotspots = [
  { name: "USA", coordinates: [-100, 40] },
  { name: "Brazil", coordinates: [-51, -10] },
  { name: "Europe", coordinates: [10, 50] },
  { name: "India", coordinates: [78, 22] },
  { name: "China", coordinates: [105, 35] },
  { name: "Australia", coordinates: [133, -25] },
];

// Function to generate random neon stars
type Star = { id: number; top: string; left: string; animationDelay: string };
function generateStars(count: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
    });
  }
  return stars;
}
const starsArray = generateStars(120);

function LandingHero() {
  return (
    <div className="landing-hero-bg">
      {/* Neon Stars */}
      <div className="landing-hero-stars">
        {starsArray.map((s) => (
          <span
            key={s.id}
            className="star"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.animationDelay,
            }}
          />
        ))}
      </div>


      {/* Map */}
      <div className="landing-hero-map-container">
        <ComposableMap
          projectionConfig={{ scale: 150 }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#1b2a3a",
                      stroke: "#00e8cc",
                      strokeWidth: 0.3,
                      outline: "none",
                      filter: "drop-shadow(0 0 6px #00e8cc88)",
                    },
                    hover: { fill: "#223344", outline: "none" },
                    pressed: { fill: "#00e8cc", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Hotspots */}
          {hotspots.map((spot, i) => (
            <Marker key={i} coordinates={spot.coordinates}>
              <circle className="hotspot-circle" r={8} />
            </Marker>
          ))}

          {/* SVG filter for glow */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </ComposableMap>
      </div>
    </div>
  );
}

export default LandingHero;
