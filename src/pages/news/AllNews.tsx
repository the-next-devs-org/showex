import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniLoader from "../../components/MiniLoader";

interface ApiData {
    id: number;
    headline: string;
    text: string;
    date: string;
}

const AllNews: React.FC = () => {
    const [news, setNews] = useState<ApiData[]>([]);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(12);
    const API_BASE_URL = import.meta.env.VITE_FOREX_API_BASE_URL;
    const API_KEY = import.meta.env.VITE_FOREX_API_KEY;

    useEffect(() => {
        fetch(`${API_BASE_URL}/sundown-digest?page=1&token=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                if (data?.data) {
                    setNews(data.data);
                }
            })
            .catch((err) => console.error("Error fetching data:", err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>
                <MiniLoader />
            </div>
        );
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "24px",
                fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                <h1 style={{ color: "#fff", marginBottom: "24px" }}>All Forex News</h1>

                {/* GRID layout for 3 cards per row */}
                <div
                    className="news-grid"
                >
                    {news.slice(0, visibleCount).map((item) => (
                        <Link
                            to={`/sundown/${item.id}`}
                            key={item.id}
                            style={{ textDecoration: "none" }}
                        >
                            <div
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(31, 41, 55, 0.7) 100%)",
                                    borderRadius: "12px",
                                    padding: "24px",
                                    border: "1px solid #00d4ff",
                                    backdropFilter: "blur(10px)",
                                    boxShadow: "0 0 20px rgba(0, 212, 255, 0.1)",
                                    cursor: "pointer",
                                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                }}
                                onMouseEnter={(e) =>
                                    ((e.currentTarget.style.transform = "translateY(-5px)"),
                                    (e.currentTarget.style.boxShadow =
                                        "0 0 25px rgba(0, 212, 255, 0.3)"))
                                }
                                onMouseLeave={(e) =>
                                    ((e.currentTarget.style.transform = "translateY(0)"),
                                    (e.currentTarget.style.boxShadow =
                                        "0 0 20px rgba(0, 212, 255, 0.1)"))
                                }
                            >
                                {/* ID */}
                                <div
                                    style={{
                                        color: "#ffffff",
                                        fontSize: "20px",
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        fontWeight: "bold",
                                        marginBottom: "16px",
                                    }}
                                >
                                    #{item.id}
                                </div>

                                {/* Time */}
                                <div
                                    style={{
                                        color: "#9ca3af",
                                        fontSize: "14px",
                                        marginBottom: "24px",
                                    }}
                                >
                                    {new Date(item.date).toLocaleString()}
                                </div>

                                {/* Headline */}
                                <div style={{ borderTop: "1px solid #374151", paddingTop: "16px" }}>
                                    <div style={{ color: "#9ca3af", fontSize: "12px", marginBottom: "4px" }}>
                                        Headline:
                                    </div>
                                    <div
                                        style={{
                                            color: "#d1d5db",
                                            fontSize: "14px",
                                            fontFamily: 'Monaco, "Courier New", monospace',
                                            wordBreak: "break-word",
                                        }}
                                    >
                                        {item.headline}
                                    </div>
                                </div>

                                {/* Text */}
                                <div style={{ borderTop: "1px solid #374151", paddingTop: "16px" }}>
                                    <div style={{ color: "#9ca3af", fontSize: "12px", marginBottom: "4px" }}>
                                        Text:
                                    </div>
                                    <div
                                        style={{
                                            color: "#d1d5db",
                                            fontSize: "14px",
                                            fontFamily: 'Monaco, "Courier New", monospace',
                                            wordBreak: "break-word",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 4,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        {item.text}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {visibleCount < news.length && (
                    <div style={{ textAlign: "center", marginTop: "32px" }}>
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 12)}
                            style={{
                                backgroundColor: "#00e8cc",
                                color: "#fff",
                                padding: "12px 24px",
                                borderRadius: "40px",
                                border: "none",
                                fontSize: "16px",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllNews;
