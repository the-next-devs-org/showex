import { useEffect, useState } from "react";

const NewsMenu = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://forexnewsapi.com/api/v1/trending-headlines?&page=1&token=2fy7verxsu14efrjwk4gvrthvaunxddcel5dghen"
    )
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
        <p>Loading news...</p>
      ) : news.length > 0 ? (
        news.slice(0, 6).map((item, i) => (
          <div key={i} className="mb-3">
            <a
              href={item.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00E8CC",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              {item.headline}
            </a>
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
