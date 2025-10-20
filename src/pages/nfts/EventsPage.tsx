import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MiniLoader from "../../components/MiniLoader";

function Nftspage() {
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(15);
  const navigate = useNavigate();
  const API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL || 'https://shoxez.com/api';
  const lang = i18n.language || "en"; // 👈 add lang param

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(`${API_BACKEND_URL}/allEvents?lang=${lang}`);
        const data = await res.json();
        setNews(Array.isArray(data.data?.data) ? data.data.data : []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [lang]); // 👈 refetch when language changes

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            marginTop: "40px",
            fontSize: "22px",
            fontWeight: "bold",
            color: "#00e8cc",
          }}
        >
          {t("events.title")}
        </h2>

        {loading ? (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <MiniLoader />
          </div>
        ) : (
          <div style={{ marginTop: "20px" }}>
            {news.slice(0, visibleCount).map((item) => {
              const dateObj = new Date(item.date);
              const formattedDate = dateObj.toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              });

              return (
                <div
                  key={item.event_id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #222",
                    padding: "15px 0",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "120px",
                      fontSize: "14px",
                      color: "#bbb",
                      fontWeight: "500",
                    }}
                  >
                    {formattedDate}
                  </div>

                  <div style={{ flex: 1, padding: "0 20px" }}>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#00e8cc",
                        cursor: "pointer",
                        margin: 0,
                      }}
                    >
                      {item.event_name}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#aaa",
                        marginTop: "4px",
                      }}
                    >
                      {item.event_text.slice(0, 120)}...
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "#00e8cc",
                    }}
                    onClick={() => navigate(`/event/${item.event_id}`)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              );
            })}

            {news.length > visibleCount && (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button
                  onClick={() => setVisibleCount((prev) => prev + 15)}
                  className="load-more-btn"
                >
                  {t("events.loadMore")}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Nftspage;
