import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./NewsDetail.css";
import MiniLoader from "../MiniLoader";

function NewsDetail() {
  const { t, i18n } = useTranslation(); // ✅ get current language
  const { id } = useParams();
  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [allNews, setAllNews] = useState<any[]>([]);

  const BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL;

  useEffect(() => {
    async function fetchSingleNews() {
      setLoading(true);
      try {
        const lang = i18n.language || "en"; // ✅ get selected language
        const res = await fetch(`${BACKEND_URL}/trending-headlines/${id}?lang=${lang}`);
        const data = await res.json();

        if (data.success) {
          setNews(data.data);
        } else {
          setNews(null);
        }
      } catch (err) {
        console.error("Error fetching single news:", err);
        setNews(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchSingleNews();
  }, [id, i18n.language]); // ✅ re-fetch if language changes

  // ✅ Fetch all news (with language)
  useEffect(() => {
    async function fetchAllNews() {
      try {
        const lang = i18n.language || "en";
        const res = await fetch(`${BACKEND_URL}/trending-headlines?page=1&lang=${lang}`);
        const data = await res.json();
        setAllNews(data.data?.data || []);
      } catch (err) {
        console.error("Error fetching all news:", err);
      }
    }
    fetchAllNews();
  }, [i18n.language]);

  if (loading)
    return (
      <div className="news-detail-loading">
        <MiniLoader />
      </div>
    );

  if (!news) return <div className="news-detail-error">{t('newsDetail.newsNotFound')}</div>;

  const suggestions = allNews
    .filter((item) => item.id !== Number(id))
    .slice(0, 4);

  return (
    <div className="container-fluid" style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ minHeight: "100vh", width: "100%", padding: "32px 0" }}>
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

          {/* ✅ Suggestions Section */}
          <div className="news-suggestions-section">
            <h2 className="suggestions-title">{t('newsDetail.otherNews')}</h2>
            <div className="suggestions-list">
              {suggestions.map((item) => (
                <Link
                  to={`/news/${item.id}`}
                  className="suggestion-card"
                  key={item.id}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.headline}
                      className="suggestion-image"
                    />
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
