import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

function Nftspage() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ hook use

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(
          "https://forexnewsapi.com/api/v1/events?page=1&token=2fy7verxsu14efrjwk4gvrthvaunxddcel5dghen"
        );
        const data = await res.json();
        setNews(data.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <div
      style={{
        background: "#000", // 🔥 Black background
        minHeight: "100vh",
        padding: "20px",
        color: "#fff", // default text white
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* 📢 News Section */}
        <h2
          style={{
            marginTop: "40px",
            fontSize: "22px",
            fontWeight: "bold",
            color: "#00e8cc", // 🔥 heading color
          }}
        >
          Events News
        </h2>

        {loading ? (
          <div style={{ textAlign: "center", padding: "20px" }}>Loading...</div>
        ) : (
          <div style={{ marginTop: "20px" }}>
            {news.map((item) => {
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
                  {/* Date */}
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

                  {/* Title + Description */}
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

                  {/* Arrow Button → Redirect to /single-events */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "#00e8cc",
                    }}
                    onClick={() => navigate(`/event/${item.event_id}`)} // ✅ id pass kiya
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Nftspage;
