import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MiniLoader from "../../components/MiniLoader";

interface CurrencyTotal {
  "Total Positive": number;
  "Total Negative": number;
  "Total Neutral": number;
  "Sentiment Score": number;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    total: Record<string, CurrencyTotal>;
    data: any;
  };
}

function AnalysisPage() {
  const [totals, setTotals] = useState<Record<string, CurrencyTotal>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL;

  useEffect(() => {
    fetch(`${API_BACKEND_URL}/sentimentAnalysis`)
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        if (data?.data?.total) {
          setTotals(data.data.total);
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load data");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="text-gray-500 text-center mt-10"><MiniLoader /></p>;
  if (error)
    return <p className="text-red-500 text-center mt-10 font-medium">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Currency Sentiment Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.keys(totals).map((currency) => {
          const item = totals[currency];
          return (
            <div
              key={currency}
              className="currency-card"
              onClick={() => navigate(`/analysis-cur/${currency}`)}
            >
              <div className="currency-card-header">
                <div className="currency-icon">
                  <span>
                    $
                  </span>
                </div>
                <div className="currency-info">
                  <div className="price-change">+ ${item["Total Positive"]} ({Math.round(item["Sentiment Score"] * 100)}%)</div>
                  <div className="coin-amount">0.382 coin</div>
                </div>
              </div>
              <div className="currency-card-footer">
                <div className="currency-name">{currency}</div>
                <div className="currency-price">${(item["Sentiment Score"] * 1000 + 1210).toFixed(2)}</div>
              </div>
            </div>

          );
        })}
      </div>
    </div>
  );
}

export default AnalysisPage;
