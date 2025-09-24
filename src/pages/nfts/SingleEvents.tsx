import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MiniLoader from "../../components/MiniLoader";

function SingleEventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL;

  useEffect(() => {
    async function fetchEvent() {
      try {
        const res = await fetch(`${API_BACKEND_URL}/eventById/${id}?page=2`);
        const data = await res.json();
        setEvent(data.data);
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchEvent();
  }, [id]);

  if (loading) return <div style={{ color: "#fff" }}><MiniLoader /></div>;
  if (!event) return <div style={{ color: "#fff" }}>Event not found.</div>;

  return (
    <div className="container-fluid" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ minHeight: '100vh', width: '100%', padding: '32px 0' }}>
        <h2 style={{ color: "#00e8cc" }}>{event.event_name}</h2>
        <p style={{ color: "#bbb" }}>{event.event_text}</p>
        <div style={{ marginTop: "30px" }}>
          {event.data && event.data.length > 0 ? (
            event.data.map((article: any, idx: number) => (
              <div
                key={idx}
                style={{
                  borderBottom: "1px solid #222",
                  padding: "15px 0",
                  marginBottom: "10px",
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={article.image_url}
                  alt={article.title}
                  style={{ width: 80, height: 60, objectFit: "cover", borderRadius: 6 }}
                />
                <div>
                  <a
                    href={article.news_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00e8cc", fontWeight: 600, fontSize: 16, textDecoration: "none" }}
                  >
                    {article.title}
                  </a>
                  <div style={{ color: "#aaa", fontSize: 13, margin: "4px 0" }}>
                    {article.source_name} | {new Date(article.date).toLocaleString()}
                  </div>
                  <div style={{ color: "#bbb", fontSize: 14 }}>{article.text}</div>
                  <div style={{ color: "#888", fontSize: 12, marginTop: 4 }}>
                    Sentiment: {article.sentiment}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ color: "#aaa" }}>No articles found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleEventPage;