import { useEffect, useState } from "react";
import MiniLoader from "../../components/MiniLoader";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface NewsItem {
  news_url: string;
  image_url: string;
  title: string;
  text: string;
  source_name: string;
  date: string;
  sentiment: string;
  currency: string[];
}

function LandingCurrencies() {
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL || 'https://shoxez.com/api';
  const lang = i18n.language || "en";

  useEffect(() => {
    fetch(`${API_BACKEND_URL}/sentimentAnalysis?lang=${lang}`)
      .then((res) => res.json())
      .then((payload) => {
        console.log("Market news data:", payload);
        const rows: any[] = Array.isArray(payload?.data) ? payload.data : [];

        const toLabel = (score: number) =>
          score > 0.05
            ? t("currencies.sentiment.positive")
            : score < -0.05
            ? t("currencies.sentiment.negative")
            : t("currencies.sentiment.neutral");

        const mapped: NewsItem[] = rows.map((row) => {
          const sentiment = toLabel(Number(row?.sentiment_score ?? 0));
          const pair = String(row?.pair ?? "");
          const date = String(row?.date ?? "");
          const positive = Number(row?.Positive ?? 0);
          const negative = Number(row?.Negative ?? 0);
          const neutral = Number(row?.Neutral ?? 0);
          const score = Number(row?.sentiment_score ?? 0);

          return {
            news_url: "#",
            image_url: "",
            title: `${pair} ${t("currencies.sentiment.title")} ${date}`,
            text: t("currencies.sentiment.details", {
              positive,
              negative,
              neutral,
              score,
            }),
            source_name: "Forex Sentiment API",
            date,
            sentiment,
            currency: [pair],
          };
        });

        setNews(mapped);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setError(t("currencies.error"));
      })
      .finally(() => setLoading(false));
  }, [t, lang]); // 👈 language change hone par refetch

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case t("currencies.sentiment.positive"):
        return "#28a745";
      case t("currencies.sentiment.negative"):
        return "#dc3545";
      default:
        return "#ffc107";
    }
  };

  if (loading) {
    return (
      <div className="text-center text-white py-5">
        <MiniLoader />
        <p>{t("currencies.loading")}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-danger py-5">
        <h5>{error}</h5>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", color: "white" }}>
      <div className="container py-5">
        <h2 className="mb-4">{t("currencies.marketNews")}</h2>

        <div className="row">
          {news.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Link
                to={item.news_url}
                target="_blank"
                style={{ textDecoration: "none" }}
                key={index}
              >
                <div
                  className="card h-100"
                  style={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  {item.image_url && (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="card-img-top"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  )}

                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title mainSiteColor">{item.title}</h6>
                    <p className="small text-white-cstm">{item.text}</p>

                    <span
                      className="badge mt-auto"
                      style={{
                        backgroundColor: getSentimentColor(item.sentiment),
                        alignSelf: "flex-start",
                      }}
                    >
                      {item.sentiment}
                    </span>
                  </div>

                  <div
                    className="card-footer d-flex justify-content-between small"
                    style={{ borderTop: "1px solid #333", color: "#aaa" }}
                  >
                    <span>{item.source_name}</span>
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {news.length > visibleCount && (
          <div className="text-center mt-4">
            <button
              className="load-more-btn"
              onClick={() => setVisibleCount((prev) => prev + 9)}
            >
              {t("currencies.loadMore")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingCurrencies;
