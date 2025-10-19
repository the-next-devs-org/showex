import { useEffect, useRef, useState } from "react";
import MiniLoader from "../../components/MiniLoader";
import { useTranslation } from 'react-i18next';

function LandingCarousel() {
  const { t } = useTranslation();
  const [stats, setStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const VITE_SHOXEZ_API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL;


  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      try {
        const res = await fetch(
          `${VITE_SHOXEZ_API_BACKEND_URL}/sentimentAnalysis`
        );
        const data = await res.json();
        const arr = Object.entries(data.data || {})
          .map(([date, val]: any) => ({
            date,
            ...val["EUR-USD"],
          }))
          .sort((a, b) => (a.date < b.date ? 1 : -1));
        setStats(arr);
      } catch (err) {
        setStats([]);
      }
      setLoading(false);
    }
    fetchStats();
  }, []);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const mouseDownHandler = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const mouseLeaveHandler = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const mouseUpHandler = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.2; // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", mouseDownHandler);
    slider.addEventListener("mouseleave", mouseLeaveHandler);
    slider.addEventListener("mouseup", mouseUpHandler);
    slider.addEventListener("mousemove", mouseMoveHandler);

    // Touch support
    let touchStartX = 0;
    let touchScrollLeft = 0;
    const touchStartHandler = (e: TouchEvent) => {
      isDown = true;
      touchStartX = e.touches[0].pageX - slider.offsetLeft;
      touchScrollLeft = slider.scrollLeft;
    };
    const touchEndHandler = () => {
      isDown = false;
    };
    const touchMoveHandler = (e: TouchEvent) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - touchStartX) * 1.2;
      slider.scrollLeft = touchScrollLeft - walk;
    };
    slider.addEventListener("touchstart", touchStartHandler);
    slider.addEventListener("touchend", touchEndHandler);
    slider.addEventListener("touchmove", touchMoveHandler);

    return () => {
      slider.removeEventListener("mousedown", mouseDownHandler);
      slider.removeEventListener("mouseleave", mouseLeaveHandler);
      slider.removeEventListener("mouseup", mouseUpHandler);
      slider.removeEventListener("mousemove", mouseMoveHandler);
      slider.removeEventListener("touchstart", touchStartHandler);
      slider.removeEventListener("touchend", touchEndHandler);
      slider.removeEventListener("touchmove", touchMoveHandler);
    };
  }, [loading]);

  return (
    <div className="container-fluid">
      <div
      className="eurusedailydiv"
        style={{
          margin: "10px auto 0 auto",
          background: "#000",
          borderRadius: 24,
          padding: "18px 0 32px 0",
          boxShadow: "0 2px 12px #0008",
          position: "relative",
          minHeight: 480,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 32px 8px 32px",
          }}
        >
          <div
            style={{
              color: "#fff",
              fontWeight: 500,
              fontSize: 20,
              letterSpacing: 0.1,
            }}
          >
            {t('landing.eurUsdDailySentiment')}
            <span
              style={{
                color: "#aaa",
                fontSize: 15,
                fontWeight: 400,
              }}
            >
              ({t('landing.last30Days')})
            </span>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
            minHeight: 320,
            padding: "0 0",
          }}
        >
          {/* Cards Row */}
          <div
            ref={scrollRef}
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              flex: 1,
              display: "flex",
              justifyContent: "center",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              padding: "0 10px",
              cursor: "grab",
              userSelect: "none",
            }}
          >
            <div style={{ display: "flex", gap: 24, minWidth: 0 }}>
              {loading ? (
                <div
                  style={{
                    color: "#aaa",
                    fontSize: 22,
                    padding: 40,
                  }}
                >
                  <MiniLoader />
                </div>
              ) : (
                stats.slice(0, 7).map((item, idx) => (
                  <div
                    key={item.date}
                    style={{
                      background: "#23262F",
                      borderRadius: 20,
                      width: 200,
                      minWidth: 200,
                      height: 260,
                      margin: "0 0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      boxShadow: "0 2px 12px #0008",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 16,
                        color: "#aaa",
                        fontWeight: 700,
                        fontSize: 18,
                        opacity: 0.8,
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: 18,
                        right: 16,
                        color: "#00fff0",
                        fontWeight: 500,
                        fontSize: 13,
                        textAlign: "right",
                      }}
                    >
                      {item.date}
                    </div>
                    <div style={{ margin: "38px 0 18px 0" }}>
                      <div
                        style={{
                          width: 70,
                          height: 70,
                          borderRadius: "50%",
                          background:
                            "radial-gradient(circle, #00e8cc 0%, #23262F 70%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 0 32px #00e8cc33",
                        }}
                      >
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                          <circle cx="24" cy="24" r="24" fill="#181A20" />
                          <path
                            d="M12 24L24 12L36 24L24 36L12 24Z"
                            fill="#00e8cc"
                            fillOpacity="0.8"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: 16,
                        textAlign: "center",
                        marginBottom: 2,
                      }}
                    >
                      Positive:{" "}
                      <span style={{ color: "#2e7d32" }}>{item.Positive}</span>
                    </div>
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: 16,
                        textAlign: "center",
                        marginBottom: 2,
                      }}
                    >
                      Negative:{" "}
                      <span style={{ color: "#c62828" }}>{item.Negative}</span>
                    </div>
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: 16,
                        textAlign: "center",
                        marginBottom: 2,
                      }}
                    >
                      Neutral:{" "}
                      <span style={{ color: "#aaa" }}>{item.Neutral}</span>
                    </div>
                    <div
                      style={{
                        color:
                          item.sentiment_score > 0.2
                            ? "#2e7d32"
                            : item.sentiment_score < -0.2
                              ? "#c62828"
                              : "#aaa",
                        fontWeight: 700,
                        fontSize: 15,
                        textAlign: "center",
                        marginTop: 4,
                      }}
                    >
                      Sentiment: {item.sentiment_score}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingCarousel;
