import React, { useEffect, useState } from "react";
import ThreeBackground from "../../components/ThreeBackground";

function LandingHero() {
  const [topMentions, setTopMentions] = useState<any[]>([]);
  const [mentionsLoading, setMentionsLoading] = useState(true);

  useEffect(() => {
    async function fetchTopMentions() {
      setMentionsLoading(true);
      try {
        const res = await fetch(
          "https://forexnewsapi.com/api/v1/top-mention?date=last7days&token=2fy7verxsu14efrjwk4gvrthvaunxddcel5dghen"
        );
        const data = await res.json();
        setTopMentions(data.data?.all || []);
      } catch (err) {
        setTopMentions([]);
      }
      setMentionsLoading(false);
    }
    fetchTopMentions();
  }, []);

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
      }}
    >
      {/* Animated Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <ThreeBackground />
      </div>

      {/* Heading Top Left */}
      <h1
        style={{
          position: "absolute",
          top: 24,
          left: 32,
          color: "#fff",
          fontSize: 40,
          fontWeight: 700,
          letterSpacing: "-0.5px",
          lineHeight: 1.15,
          textAlign: "left",
          margin: 0,
          zIndex: 3,
          textShadow: "0 4px 32px #000a",
        }}
      >
        ShowEX Blockchain Explorer
      </h1>

      {/* Cards Bottom Left */}
      <div
        className="MainContentOverlayCards"
      >
        {mentionsLoading ? (
          <div style={{ color: "#aaa", gridColumn: "span 2" }}>Loading...</div>
        ) : (
          topMentions.slice(0, 4).map((item) => (
            <div
              key={item.currency}
              style={{
                background: "#23262Fcc",
                borderRadius: 16,
                padding: "18px 24px",
                minWidth: 180,
                color: "#fff",
                boxShadow: "0 4px 24px #0007",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                backdropFilter: "blur(2px)",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#00fff0",
                  marginBottom: 6,
                }}
              >
                {item.currency}
              </div>
              <div style={{ fontSize: 15, marginBottom: 2 }}>
                Total: <b>{item.total_mentions}</b>
              </div>
              <div style={{ fontSize: 14, color: "#aaa", marginBottom: 2 }}>
                <span style={{ color: "#2e7d32" }}>
                  +{item.positive_mentions}
                </span>{" "}
                /
                <span style={{ color: "#c62828" }}>
                  {" "}
                  -{item.negative_mentions}
                </span>{" "}
                /
                <span style={{ color: "#888" }}>
                  {" "}
                  {item.neutral_mentions}
                </span>
              </div>
              <div
                style={{
                  marginTop: 2,
                  fontSize: 13,
                  fontWeight: 600,
                  color:
                    item.sentiment_score > 0.2
                      ? "#2e7d32"
                      : item.sentiment_score < -0.2
                      ? "#c62828"
                      : "#aaa",
                }}
              >
                Sentiment: {item.sentiment_score}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default LandingHero;