import React from "react";
import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { FaArrowRight, FaRobot, FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./AnalyticsPage.css";
import { predictionService } from "../../services/api";
import ExportButton from "../../components/ExportButton";

// Placeholder data for charts
const lineData = Array.from({ length: 30 }, (_, i) => ({
  date: `Aug ${i + 1}`,
  value: Math.floor(Math.random() * 10000 + 10000),
}));

// Demo chart data for different ranges (copied from TransactionsPage)
const chartDataAll = Array.from({ length: 730 }, (_, i) => ({
  name: `Day ${i + 1}`,
  total:
    700000000 +
    Math.round(Math.sin(i / 18) * 2000000 + Math.random() * 1000000) +
    i * 500000,
  applications:
    500000000 +
    Math.round(Math.cos(i / 22) * 1500000 + Math.random() * 800000) +
    i * 400000,
  standard:
    400000000 +
    Math.round(Math.sin(i / 30) * 1000000 + Math.random() * 400000) +
    i * 200000,
}));
const chartData365d = chartDataAll.slice(-365); // last 365 days
const chartData30d = chartDataAll.slice(-30); // last 30 days
const chartData7d = chartDataAll.slice(-7); // last 7 days

// Generate mock data for NFTs table
const generateNFTsData = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    Rank: i + 1,
    Token: `NFT Collection ${i + 1}`,
    Items: Math.floor(Math.random() * 10000),
    Holders: Math.floor(Math.random() * 5000),
    "Total Txn": Math.floor(Math.random() * 1000),
  }));
};

// Generate mock data for Tokens table
const generateTokensData = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    Rank: i + 1,
    Token: `Token ${i + 1}`,
    "Total Txn": Math.floor(Math.random() * 10000),
  }));
};

function AnalyticsPage() {
  const { t } = useTranslation();
  // State for dropdown and chart range
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [selectedRange, setSelectedRange] = React.useState("30d");

  // State for AI predictions
  const [predictions, setPredictions] = React.useState<any[]>([]);
  const [loadingPredictions, setLoadingPredictions] = React.useState(true);
  const [predictionError, setPredictionError] = React.useState<string | null>(
    null
  );

  // Load AI predictions on component mount
  React.useEffect(() => {
    loadPredictions();
  }, []);

  const loadPredictions = async () => {
    try {
      setLoadingPredictions(true);
      setPredictionError(null);
      const response = await predictionService.getDefaultPredictions();
      if (response.success && response.data) {
        setPredictions(response.data);
      }
    } catch (error) {
      console.error("Error loading predictions:", error);
      setPredictionError("Failed to load AI predictions");
    } finally {
      setLoadingPredictions(false);
    }
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 70) return "#22c55e"; // green
    if (probability >= 60) return "#84cc16"; // lime
    if (probability >= 50) return "#eab308"; // yellow
    if (probability >= 40) return "#f97316"; // orange
    return "#ef4444"; // red
  };

  const getConfidenceLabel = (confidence: string) => {
    const labels: Record<string, string> = {
      "very-high": "Very High",
      high: "High",
      medium: "Medium",
      low: "Low",
    };
    return labels[confidence] || confidence;
  };

  let chartData = chartData30d;
  if (selectedRange === "7d") chartData = chartData7d;
  else if (selectedRange === "365d") chartData = chartData365d;
  else if (selectedRange === "All") chartData = chartDataAll;

  // Get the latest stats from the last entry in the current chart data
  const last = chartData[chartData.length - 1] || {
    total: 0,
    applications: 0,
    standard: 0,
  };

  return (
    <div className=" container">
      {/* Top Stats Row - pixel-perfect as screenshot */}
      {/* <div className="blocks-top-row-flex">
        <div className="blocks-search-bar blocks-search-bar-right">
          <input
            type="text"
            placeholder={t('analytics.search')}
          />
          <button className="blocks-search-btn">
            <span role="img" aria-label="search">
              🔍
            </span>
          </button>
        </div>
        <div className="blocks-top-stats blocks-top-stats-new">
          <div className="blocks-top-stat-pill blocks-top-stat-pill-epoch">
            <div className="blocks-top-stat-pill-content">
              <div className="blocks-top-stat-pill-main">
                <div className="blocks-top-stat-pill-title">
                  Epoch{" "}
                  <span className="blocks-top-stat-pill-value">1,868</span>
                </div>
                <div className="blocks-top-stat-pill-circle">
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <circle
                      cx="16"
                      cy="16"
                      r="13"
                      stroke="#222"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="13"
                      stroke="#03e8cc"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray="82"
                      strokeDashoffset="20"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="blocks-top-stat-pill-label">
                2,221 Rounds Left
              </div>
            </div>
          </div>
          <div className="blocks-top-stat-pill">
            <div className="blocks-top-stat-pill-content">
              <div className="blocks-top-stat-pill-main">
                <span className="blocks-top-stat-pill-icon">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="#03e8cc"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </span>
                <span className="blocks-top-stat-pill-value">$14.05</span>
              </div>
              <div className="blocks-top-stat-pill-label">Current Price</div>
            </div>
          </div>
          <div className="blocks-top-stat-pill">
            <div className="blocks-top-stat-pill-content">
              <div className="blocks-top-stat-pill-main">
                <span className="blocks-top-stat-pill-icon">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="#03e8cc"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <span className="blocks-top-stat-pill-value">110,272</span>
              </div>
              <div className="blocks-top-stat-pill-label">
                Active Accounts Today
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="blocks-section">
        <div className="blocks-section-title">
          {t('analytics.title')}
        </div>
        <div className="blocks-section-cards">
          <div className="blocks-section-card">
            <div className="blocks-section-card-label">Block Height</div>
            <div className="blocks-section-card-value">107,568,639</div>
          </div>
          <div className="blocks-section-card">
            <div className="blocks-section-card-label">
              Total Applications Deployed
            </div>
            <div className="blocks-section-card-value">11,708</div>
          </div>
          <div className="blocks-section-card">
            <div className="blocks-section-card-label">
              Total Developer Rewards
            </div>
            <div className="blocks-section-card-value">
              6,535.95 <span className="egld">EGLD</span>
            </div>
          </div>
          <div className="blocks-section-card">
            <div className="blocks-section-card-label">Total Network Fees</div>
            <div className="blocks-section-card-value">
              65,876.79 <span className="egld">EGLD</span>
            </div>
          </div>
        </div>
      </div>
      <br></br> */}
      <br></br>
      <div className="analytics-root container">
        {/* <div className="analytics-tabs-row">
          <button className="analytics-tab active">{t('analytics.keyMetrics')}</button>
          <button className="analytics-tab">{t('analytics.compare')}</button>
        </div> */}

        <div className="ai-analytics-section">
          <div className="ai-analytics-header">
            <div className="ai-analytics-title">
              <FaRobot className="ai-icon" />
              <h2>{t('analytics.aiPredictions.title')}</h2>
              <span className="ai-badge">{t('analytics.aiPredictions.beta')}</span>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <ExportButton
                data={predictions}
                filename="ai_predictions"
                sheetName="Predictions"
                variant="secondary"
                buttonText="Export"
                disabled={loadingPredictions || predictions.length === 0}
              />
              <button
                className="ai-refresh-btn"
                onClick={loadPredictions}
                disabled={loadingPredictions}
              >
                {loadingPredictions ? "..." : t('analytics.aiPredictions.refresh')}
              </button>
            </div>
          </div>

          {predictionError && (
            <div className="ai-error-message">{predictionError}</div>
          )}

          {loadingPredictions ? (
            <div className="ai-loading">
              <div className="ai-loading-spinner"></div>
              <p>{t('analytics.aiPredictions.loading')}</p>
            </div>
          ) : (
            <div className="ai-predictions-grid">
              {predictions.map((prediction, index) => (
                <div key={index} className="ai-prediction-card">
                  <div className="ai-prediction-header">
                    <h3 className="ai-prediction-currency">
                      {prediction.currency}
                    </h3>
                    {prediction.trend === "rising" ? (
                      <FaArrowUp className="ai-trend-icon trend-up" />
                    ) : (
                      <FaArrowDown className="ai-trend-icon trend-down" />
                    )}
                  </div>

                  <div className="ai-prediction-body">
                    <div className="ai-prediction-main">
                      <div className="ai-prediction-label">
                        Probability of {prediction.trend}
                      </div>
                      <div
                        className="ai-prediction-value"
                        style={{
                          color: getProbabilityColor(prediction.probability),
                        }}
                      >
                        {prediction.probability}%
                      </div>
                    </div>

                    <div className="ai-prediction-bar-container">
                      <div
                        className="ai-prediction-bar"
                        style={{
                          width: `${prediction.probability}%`,
                          backgroundColor: getProbabilityColor(
                            prediction.probability
                          ),
                        }}
                      ></div>
                    </div>

                    <div className="ai-prediction-meta">
                      <span
                        className={`ai-confidence ai-confidence-${prediction.confidence}`}
                      >
                        {getConfidenceLabel(prediction.confidence)} Confidence
                      </span>
                      <span className="ai-timestamp">
                        {new Date(prediction.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="ai-analytics-footer">
            <p className="ai-disclaimer">
              <strong>Note:</strong> AI predictions are based on sentiment
              analysis and economic indicators. These forecasts are for
              informational purposes only and should not be considered as
              financial advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage;
