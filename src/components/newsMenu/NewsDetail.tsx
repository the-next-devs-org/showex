import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NewsDetail.css";
import MiniLoader from "../MiniLoader";

function NewsDetail() {
  const { id } = useParams(); // id from route
  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [allNews, setAllNews] = useState<any[]>([]);

  const API_BASE_URL = import.meta.env.VITE_FOREX_API_BASE_URL;
  const API_KEY = import.meta.env.VITE_FOREX_API_KEY;

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/trending-headlines?&page=1&token=${API_KEY}`);
        const data = await res.json();
        setAllNews(data.data || []);
        const newsItem = data.data.find((item: any) => item.id === Number(id));
        setNews(newsItem || null);
      } catch (err) {
        setNews(null);
      }
      setLoading(false);
    }
    fetchNews();
  }, [id]);

  if (loading) return <div className="news-detail-loading"><MiniLoader /></div>;
  if (!news) return <div className="news-detail-error">News not found.</div>;

  // Suggestions: 3 random news except current
  const suggestions = allNews
    .filter((item) => item.id !== Number(id))
    .slice(0, 4);

  return (
    <div className="container-fluid" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ minHeight: '100vh', width: '100%', padding: '32px 0' }}>
        <div className="news-detail-main">
          <div className="news-detail-card news-page-style">
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

          {/* Suggestions Section */}
          <div className="news-suggestions-section">
            <h2 className="suggestions-title">Other News</h2>
            <div className="suggestions-list">
              {suggestions.map((item) => (
                <Link to={`/news/${item.id}`} className="suggestion-card" key={item.id}>
                  {item.image && (
                    <img src={item.image} alt={item.headline} className="suggestion-image" />
                  )}
                  <div className="suggestion-info">
                    <div className="suggestion-headline">{item.headline}</div>
                    <div className="suggestion-date">{item.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;