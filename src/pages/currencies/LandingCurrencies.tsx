import { useEffect, useState } from "react";
import MiniLoader from "../../components/MiniLoader";
import { Link } from "react-router-dom";

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
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL;

<<<<<<< Updated upstream
  useEffect(() => {
    fetch(`${API_BACKEND_URL}/sentimentAnalysis`)
      .then((res) => res.json())
      .then((payload) => {
        console.log("Market news data:", payload);
        const rows: any[] = Array.isArray(payload?.data) ? payload.data : [];

        const toLabel = (score: number) =>
          score > 0.05 ? "Positive" : score < -0.05 ? "Negative" : "Neutral";

        const mapped: NewsItem[] = rows.map((row) => {
          const sentiment = toLabel(Number(row?.sentiment_score ?? 0));
          const pair = String(row?.pair ?? "");
          const date = String(row?.date ?? "");
          const positive = Number(row?.Positive ?? 0);
          const negative = Number(row?.Negative ?? 0);
          const neutral = Number(row?.Neutral ?? 0);
          const score = Number(row?.sentiment_score ?? 0);

          return {
            // No real article link available → use "#" (so <Link> is happy)
            news_url: "#",
            image_url: "",

            // Build a readable title and text from the counts
            title: `${pair} sentiment on ${date}`,
            text: `Positive: ${positive} | Negative: ${negative} | Neutral: ${neutral} | Score: ${score}`,

            source_name: "Forex Sentiment API",
            date,
            sentiment,
            currency: [pair],
          };
        });

        setNews(mapped);
=======

  // useEffect(() => {
  //   fetch(
  //     `${API_BACKEND_URL}/sentimentAnalysis`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data?.data) {
  //         setNews(data.data.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching news:", err);
  //       setError("Failed to load market news.");
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    fetch(`${API_BACKEND_URL}/sentimentAnalysis`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.data) {
          // Cast the object to a known type
          const apiData = data.data.data as Record<
            string,
            Record<
              string,
              {
                Positive: number;
                Negative: number;
                Neutral: number;
                sentiment_score: number;
              }
            >
          >;

          const transformedNews: NewsItem[] = Object.entries(apiData).flatMap(([date, currencies]) =>
            Object.entries(currencies).map(([currency, sentimentData]) => ({
              news_url: "#", // replace with actual URL if available
              image_url: "", // replace with image URL if any
              title: `${currency} Sentiment on ${date}`,
              text: `Positive: ${sentimentData.Positive}, Negative: ${sentimentData.Negative}, Neutral: ${sentimentData.Neutral}`,
              source_name: "ShoXez API",
              date,
              sentiment:
                sentimentData.sentiment_score > 0
                  ? "Positive"
                  : sentimentData.sentiment_score < 0
                    ? "Negative"
                    : "Neutral",
              currency: [currency],
            }))
          );

          setNews(transformedNews);
        }
>>>>>>> Stashed changes
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setError("Failed to load market news.");
      })
      .finally(() => setLoading(false));
  }, []);


  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "Positive":
        return "#28a745";
      case "Negative":
        return "#dc3545";
      default:
        return "#ffc107";
    }
  };

  if (loading) {
    return (
      <div className="text-center text-white py-5">
        <MiniLoader />
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
        <h2 className="mb-4">📈 Market News</h2>

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
                  {/* Image */}
                  {item.image_url && (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="card-img-top"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  )}

                  {/* Body */}
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title mainSiteColor">{item.title}</h6>
                    <p className="small text-white-cstm">{item.text}</p>

                    {/* Sentiment Tag */}
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

                  {/* Footer */}
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

        {/* Load More (future pagination ke liye) */}
        {news.length > visibleCount && (
          <div className="text-center mt-4">
            <button
              className="load-more-btn btn btn-outline-light"
              onClick={() => setVisibleCount((prev) => prev + 9)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingCurrencies;
