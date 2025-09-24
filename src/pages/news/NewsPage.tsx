import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NewsPage.css";
import MiniLoader from "../../components/MiniLoader";

function getRandomItems<T>(arr: T[], count: number, excludeIds: Set<number>): T[] {
  const filtered = arr.filter((item: any) => !excludeIds.has(item.id));
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function NewsPage() {
  const [newsList, setNewsList] = useState<any[]>([]);
  const [allNews, setAllNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadedIds, setLoadedIds] = useState<Set<number>>(new Set());
  const API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL;


  useEffect(() => {
  async function fetchNews() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BACKEND_URL}/trendingHeadlines`);
      const data = await res.json();
      console.log("Trending headlines:", data);

      const newsArray = Array.isArray(data?.data?.data) ? data.data.data : [];

      setAllNews(newsArray);

      // Initial random 15
      const initial = getRandomItems(newsArray, 15, new Set());
      setNewsList(initial);
      setLoadedIds(new Set(initial.map((item: any) => item.id)));
    } catch (err) {
      setAllNews([]);
      setNewsList([]);
      setLoadedIds(new Set());
    }
    setLoading(false);
  }
  fetchNews();
}, []);


  const handleLoadMore = () => {
    const next = getRandomItems(allNews, 15, loadedIds);
    setNewsList((prev) => [...prev, ...next]);
    setLoadedIds((prev) => {
      const newSet = new Set(prev);
      next.forEach((item) => newSet.add(item.id));
      return newSet;
    });
  };

  const allLoaded = loadedIds.size >= allNews.length;

  return (
    <div className="news-page-main">
      <h2 className="news-page-title">📰 Latest Financial News</h2>
      {loading ? (
        <div className="news-page-loading">
          <MiniLoader />
        </div>
      ) : (
        <>
          <div className="news-grid">
            {newsList.map((news) => (
              <Link to={`/news/${news.id}`} className="news-card" key={news.id}>
                {news.image && (
                  <img src={news.image} alt={news.headline} className="news-card-image" />
                )}
                <div className="news-card-body">
                  <div className="news-card-header">
                    <span className={`news-card-sentiment ${news.sentiment?.toLowerCase()}`}>
                      {news.sentiment}
                    </span>
                    <span className="news-card-date">{news.date}</span>
                  </div>
                  <h3 className="news-card-title">{news.headline}</h3>
                  <p className="news-card-text">
                    {news.text?.slice(0, 120)}{news.text && news.text.length > 120 ? "..." : ""}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          {!allLoaded && (
            <div style={{ textAlign: "center", margin: "32px 0" }}>
              <button className="load-more-btn" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
          {allLoaded && (
            <div style={{ textAlign: "center", margin: "32px 0", color: "#888" }}>
              
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default NewsPage;
