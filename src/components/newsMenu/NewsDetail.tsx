import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NewsDetail.css";

function NewsDetail() {
  const { id } = useParams(); // id from route
  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try {
        const res = await fetch(
          "https://forexnewsapi.com/api/v1/trending-headlines?&page=1&token=2fy7verxsu14efrjwk4gvrthvaunxddcel5dghen"
        );
        const data = await res.json();

        // find by id (convert id from params to number because API returns number)
        const newsItem = data.data.find((item: any) => item.id === Number(id));
        setNews(newsItem || null);
      } catch (err) {
        setNews(null);
      }
      setLoading(false);
    }
    fetchNews();
  }, [id]);

  if (loading) return <div className="news-detail-loading">Loading...</div>;
  if (!news) return <div className="news-detail-error">News not found.</div>;

  return (
    <div className="news-detail-container">
      <div className="news-detail-card">
        <div className="news-detail-header">
          <h1 className="news-detail-title">{news.headline}</h1>
          {news.sentiment && (
            <span className={`news-detail-sentiment ${news.sentiment?.toLowerCase()}`}>
              {news.sentiment}
            </span>
          )}
        </div>
        <div className="news-detail-meta">
          <span className="news-detail-date">{news.date}</span>
        </div>
        {news.image && (
          <div className="news-detail-image-wrapper">
            <img
              src={news.image}
              alt={news.headline}
              className="news-detail-image"
            />
          </div>
        )}
        <div className="news-detail-content">
          <p className="news-detail-text">{news.text}</p>
          {news.content && <div className="news-detail-body">{news.content}</div>}
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
