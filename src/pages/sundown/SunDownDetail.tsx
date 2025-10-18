import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MiniLoader from "../../components/MiniLoader";
import { useTranslation } from 'react-i18next';

interface ApiData {
  id: number;
  headline: string;
  text: string;
  date: string;
}

const SunDownDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const VITE_SHOXEZ_API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL;

  useEffect(() => {
    fetch(`${VITE_SHOXEZ_API_BACKEND_URL}/sundownDigest`) 
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          const found = data.data.find((item: ApiData) => item.id === Number(id));
          setNews(found || null);
        }
      })
      .catch((err) => console.error("Error fetching detail:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>
        <MiniLoader />
      </div>
    );
  }

  if (!news) {
    return (
      <div style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>
        {t('news.newsNotFound')}
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "24px",
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link to="/all-news" style={{ color: "#00e8cc", textDecoration: "none" }}>
          {t('news.backToAllNews')}
        </Link>

        <h1 style={{ marginTop: "16px" }}>{news.headline}</h1>
        <p style={{ color: "#9ca3af", marginBottom: "16px" }}>
          {new Date(news.date).toLocaleString()}
        </p>
        <div
          style={{
            background: "rgba(17, 24, 39, 0.9)",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #00d4ff",
          }}
        >
          <p style={{ fontSize: "16px", lineHeight: "1.6", whiteSpace: "pre-line" }}>
            {news.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SunDownDetail;
