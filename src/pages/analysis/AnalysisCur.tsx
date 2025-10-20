import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import MiniLoader from "../../components/MiniLoader";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface SentimentDay {
    date: string;
    sentiment_score: number;
}

interface ApiResponse {
    success: boolean;
    message: string;
    data: {
        total: any;
        data: Record<string, Record<string, { sentiment_score: number }>>;
    };
}

function AnalysisCur() {
    const { currency } = useParams<{ currency: string }>();
    const [news, setNews] = useState<SentimentDay[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL || 'https://shoxez.com/api';

    useEffect(() => {
        fetch(`${API_BACKEND_URL}/sentimentAnalysis`)
            .then((res) => res.json())
            .then((data: ApiResponse) => {
                if (data?.data?.data && currency) {
                    const transformed: SentimentDay[] = Object.keys(data.data.data)
                        .sort((a, b) => (a > b ? 1 : -1))
                        .map((date) => ({
                            date,
                            sentiment_score: data.data.data[date][currency]?.sentiment_score || 0,
                        }));
                    setNews(transformed);
                }
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to load market news.");
            })
            .finally(() => setLoading(false));
    }, [currency]);

    const chartData = {
        labels: news.map((n) => n.date),
        datasets: [
            {
                label: `${currency} Sentiment Score`,
                data: news.map((n) => n.sentiment_score),
                borderColor: "#00e8cc",
                backgroundColor: "#ffffff",
                fill: true,
                tension: 0.3,
                pointRadius: 4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "top" as const, labels: { color: "#ffffff47" } },
            title: { display: true, text: `${currency} Last 30 Days Sentiment Analysis`, color: "#ffffff47" },
        },
        scales: {
            x: { ticks: { color: "#ffffff47" }, grid: { color: "#ffffff47" } },
            y: { suggestedMin: -1, suggestedMax: 1, ticks: { color: "#ffffff47" }, grid: { color: "#ffffff47" } },
        },
    };


    if (loading)
        return <p className="text-gray-500 text-center mt-10"><MiniLoader /></p>;
    if (error)
        return <p className="text-red-500 text-center mt-10 font-medium">{error}</p>;

    return (
        <div className="d-flex justify-content-center px-4 py-6">
            <div className="bgCustom shadow rounded p-4 w-75">
                <p>adeel</p>
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
}

export default AnalysisCur;
