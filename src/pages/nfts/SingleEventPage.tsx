import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleEventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = import.meta.env.VITE_FOREX_API_BASE_URL;
  const API_KEY = import.meta.env.VITE_FOREX_API_KEY;

  useEffect(() => {
    async function fetchEvent() {
      try {
        const res = await fetch(`${API_BASE_URL}/events?eventid=${id}&page=1&token=${API_KEY}`);
        const data = await res.json();
        setEvent(data.data[0]);
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchEvent();
  }, [id]);

  if (loading) return <div style={{ color: "#fff" }}>Loading...</div>;
  if (!event) return <div style={{ color: "#fff" }}>Event not found.</div>;

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff", padding: "20px" }}>
      <h2 style={{ color: "#00e8cc" }}>{event.event_name}</h2>
      <p style={{ color: "#bbb" }}>{event.event_text}</p>
      <div style={{ color: "#aaa", marginTop: "10px" }}>
        Date: {new Date(event.date).toLocaleString()}
      </div>
    </div>
  );
}

export default SingleEventPage;