import { ComposableMap, Geographies, Geography } from "react-simple-maps";

function LandingHero() {
  const geoUrl = "https://unpkg.com/world-atlas@2/countries-110m.json";

  // Array of countries to highlight
  const highlightedCountries = ["Pakistan", "India", "China", "United States", "Brazil"];

  return (
    <div
      className="container-fluid"
      style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        overflow: "hidden",
        borderRadius: 24,
        background: "#101010",
      }}
    >
      <ComposableMap projectionConfig={{ scale: 150 }} style={{ width: "100%", height: "100%" }}>
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => {
              const countryName = geo.properties.name;
              const isHighlighted = highlightedCountries.includes(countryName);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: isHighlighted ? "#00e8cc" : "#67788a",
                      outline: "none",
                    },
                    hover: {
                      fill: isHighlighted ? "#00e8cc" : "#67788a",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#00e8cc",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default LandingHero;
