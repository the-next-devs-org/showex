import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniLoader from "../MiniLoader";

const NewsMenu = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL;


  useEffect(() => {
    setLoading(true);
    fetch(
      `${API_BACKEND_URL}/trendingHeadlines`)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.data || []);
      })
      .catch((err) => console.error("News API error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
      {loading ? (
        <div className="news-page-loading">
          <MiniLoader />
        </div>
      ) : news.length > 0 ? (
        news.slice(0, 6).map((item, i) => (
          <div key={i} className="mb-3">
            <Link
              to={`/news/${item.id || item.uuid || i}`}
              style={{
                color: "#00E8CC",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              {item.headline}
            </Link>
            {item.text && (
              <p style={{ fontSize: "12px", color: "#aaa" }}>{item.text}</p>
            )}
          </div>
        ))
      ) : (
        <p>No news found.</p>
      )}
    </div>
  );
};

export default NewsMenu;
