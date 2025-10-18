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
      <div className="blocks-top-row-flex">
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
          {/* Epoch Card */}
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
          {/* Price Card */}
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
          {/* Accounts Card */}
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
      </div>

      {/* Blocks Section */}
      <div className="blocks-section">
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
      <br></br>
      <div className="analytics-root container">
        {/* Tabs */}
        <div className="analytics-tabs-row">
          <button className="analytics-tab active">{t('analytics.keyMetrics')}</button>
          <button className="analytics-tab">{t('analytics.compare')}</button>
        </div>

        {/* AI Analytics Section */}
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

        {/* Top Transactions Section - pixel-perfect, HTML structure */}
        <div
          className="page-hero card card-lg card-black mb-3 transactions-stats"
          style={{
            background: "#111",
            borderRadius: 18,
            boxShadow: "0 2px 12px #0006",
            padding: 0,
            overflow: "hidden",
            border: "none",
            width: "100%",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "stretch", minHeight: 260 }}
          >
            {/* Stats Left */}
            <div
              style={{
                width: 260,
                background: "transparent",
                padding: "32px 0 32px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ marginBottom: 18 }}>
                <div
                  style={{
                    color: "#8e8e8e",
                    fontSize: 15,
                    fontWeight: 500,
                    marginBottom: 2,
                  }}
                >
                  Total Transactions
                </div>
                <div
                  style={{
                    color: "#23f7dd",
                    fontSize: 32,
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: 1,
                  }}
                >
                  {last.total.toLocaleString()}
                </div>
              </div>
              <div style={{ marginBottom: 18 }}>
                <div
                  style={{
                    color: "#8e8e8e",
                    fontSize: 15,
                    fontWeight: 500,
                    marginBottom: 2,
                  }}
                >
                  Applications
                </div>
                <div
                  style={{
                    color: "#4ade80",
                    fontSize: 32,
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: 1,
                  }}
                >
                  {last.applications.toLocaleString()}
                </div>
              </div>
              <div>
                <div
                  style={{
                    color: "#8e8e8e",
                    fontSize: 15,
                    fontWeight: 500,
                    marginBottom: 2,
                  }}
                >
                  Standard
                </div>
                <div
                  style={{
                    color: "#8b5cf6",
                    fontSize: 32,
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: 1,
                  }}
                >
                  {last.standard.toLocaleString()}
                </div>
              </div>
            </div>
            {/* Chart Right */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                position: "relative",
                padding: "0 0 0 0",
              }}
            >
              {/* Dropdown */}
              <div
                style={{ position: "absolute", top: 18, right: 24, zIndex: 2 }}
              >
                <div
                  style={{
                    background: "#232325",
                    color: "#fff",
                    borderRadius: 8,
                    boxShadow: "0 2px 8px #0008",
                    padding: "2px 0",
                    minWidth: 64,
                    fontSize: 15,
                    fontWeight: 500,
                    textAlign: "center",
                    cursor: "pointer",
                    userSelect: "none",
                    position: "relative",
                  }}
                  onClick={() => setDropdownOpen((v) => !v)}
                  tabIndex={0}
                  onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                >
                  {selectedRange}{" "}
                  <span style={{ fontSize: 12, marginLeft: 4 }}>▼</span>
                  {dropdownOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: 32,
                        right: 0,
                        background: "#232325",
                        borderRadius: 8,
                        boxShadow: "0 2px 8px #0008",
                        minWidth: 64,
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                      }}
                    >
                      {["7d", "30d", "365d", "All"].map((range) => {
                        const translationKey = range === "7d" ? "last7Days" :
                                             range === "30d" ? "last30Days" :
                                             range === "365d" ? "last365Days" : "allTime";
                        return (
                          <div
                            key={range}
                            style={{
                              padding: "8px 0",
                              borderBottom:
                                range !== "All" ? "1px solid #333" : "none",
                              color: "#fff",
                              background:
                                selectedRange === range
                                  ? "#18191b"
                                  : "transparent",
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRange(range);
                              setDropdownOpen(false);
                            }}
                          >
                            {t(`analytics.timeRanges.${translationKey}`)}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="bg-gradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#232325" stopOpacity={0.0} />
                      <stop offset="100%" stopColor="#111" stopOpacity={1} />
                    </linearGradient>
                    <linearGradient
                      id="totalValue-gradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#23f7dd" stopOpacity={0.7} />
                      <stop
                        offset="100%"
                        stopColor="#23f7dd"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                    <linearGradient
                      id="contractValue-gradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#4ade80" stopOpacity={0.7} />
                      <stop
                        offset="100%"
                        stopColor="#4ade80"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                    <linearGradient
                      id="transactionValue-gradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.7} />
                      <stop
                        offset="100%"
                        stopColor="#8b5cf6"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>
                  {/* Chart background gradient */}
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="url(#bg-gradient)"
                  />
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      background: "#232325",
                      border: "none",
                      borderRadius: 8,
                      color: "#fff",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="total"
                    stroke="#23f7dd"
                    fill="url(#totalValue-gradient)"
                    strokeWidth={2.5}
                    dot={false}
                  />
                  <Area
                    type="monotone"
                    dataKey="applications"
                    stroke="#4ade80"
                    fill="url(#contractValue-gradient)"
                    strokeWidth={2.5}
                    dot={false}
                  />
                  <Area
                    type="monotone"
                    dataKey="standard"
                    stroke="#8b5cf6"
                    fill="url(#transactionValue-gradient)"
                    strokeWidth={2.5}
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Row: Token Transactions & NFT Transactions */}
        <div className="analytics-row analytics-row-2col">
          <div className="analytics-card">
            <div className="analytics-card-title">
              Token Transactions{" "}
              <span className="analytics-card-range">30d ▼</span>
            </div>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart
                data={lineData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#00e8cc"
                  strokeWidth={2}
                  dot={false}
                />
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="analytics-card">
            <div className="analytics-card-title">
              NFT Transactions{" "}
              <span className="analytics-card-range">30d ▼</span>
            </div>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart
                data={lineData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#7bffb3"
                  strokeWidth={2}
                  dot={false}
                />
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Total Accounts */}
        <div className="analytics-card">
          <div className="analytics-card-title">
            Total Accounts <span className="analytics-card-range">30d ▼</span>
          </div>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart
              data={lineData}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
              <Line
                type="monotone"
                dataKey="value"
                stroke="#00e8cc"
                strokeWidth={2}
                dot={false}
              />
              <XAxis dataKey="date" hide />
              <YAxis hide />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Daily Active Users */}
        <div className="analytics-card">
          <div className="analytics-card-title">
            Daily Active Users{" "}
            <span className="analytics-card-range">30d ▼</span>
          </div>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart
              data={lineData}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
              <Line
                type="monotone"
                dataKey="value"
                stroke="#a18fff"
                strokeWidth={2}
                dot={false}
              />
              <XAxis dataKey="date" hide />
              <YAxis hide />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Most Used Applications (daily) */}
        <div className="analytics-card analytics-card-apps">
          <div className="analytics-card-title">
            {t('analytics.charts.mostUsedApps')}{" "}
            <button className="analytics-card-btn">
              {t('analytics.charts.viewDashboard')} <FaArrowRight />
            </button>
          </div>
          <div className="analytics-apps-list">
            {[1, 2, 3, 4, 5].map((i) => (
              <div className="analytics-app-card" key={i}>
                <div className="analytics-app-rank">{i}</div>
                <div className="analytics-app-icon">
                  <img
                    src="https://media.elrond.com/providers/multiversx.png"
                    alt="app"
                  />
                </div>
                <div className="analytics-app-title">
                  xPortal: Social Module {i}
                </div>
                <div className="analytics-app-tx">
                  {Math.floor(Math.random() * 8000 + 1000).toLocaleString()} Txn
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Transacted NFTs, Tokens, Table Sections */}
        <div className="analytics-row analytics-row-3col">
          <div className="analytics-card">
            <div className="analytics-card-title">
              Most Transacted NFTs (Daily){" "}
              <ExportButton
                data={generateNFTsData()}
                filename="most_transacted_nfts"
                sheetName="NFTs"
                variant="compact"
                buttonText="Export"
              />
            </div>
            <table className="analytics-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Token</th>
                  <th>Items</th>
                  <th>Holders</th>
                  <th>Total Txn</th>
                </tr>
              </thead>
              <tbody>
                {generateNFTsData().map((row, i) => (
                  <tr key={i}>
                    <td>{row.Rank}</td>
                    <td>{row.Token}</td>
                    <td>{row.Items}</td>
                    <td>{row.Holders}</td>
                    <td>{row["Total Txn"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="analytics-card">
            <div className="analytics-card-title">
              Most Transacted Tokens (Daily){" "}
              <ExportButton
                data={generateTokensData()}
                filename="most_transacted_tokens"
                sheetName="Tokens"
                variant="compact"
                buttonText="Export"
              />
            </div>
            <table className="analytics-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Token</th>
                  <th>Total Txn</th>
                </tr>
              </thead>
              <tbody>
                {generateTokensData().map((row, i) => (
                  <tr key={i}>
                    <td>{row.Rank}</td>
                    <td>{row.Token}</td>
                    <td>{row["Total Txn"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="analytics-card">
            <div className="analytics-card-title">
              Most Transacted NFTs (Daily){" "}
              <ExportButton
                data={generateNFTsData()}
                filename="most_transacted_nfts_2"
                sheetName="NFTs"
                variant="compact"
                buttonText="Export"
              />
            </div>
            <table className="analytics-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Token</th>
                  <th>Items</th>
                  <th>Holders</th>
                  <th>Total Txn</th>
                </tr>
              </thead>
              <tbody>
                {generateNFTsData().map((row, i) => (
                  <tr key={i}>
                    <td>{row.Rank}</td>
                    <td>{row.Token}</td>
                    <td>{row.Items}</td>
                    <td>{row.Holders}</td>
                    <td>{row["Total Txn"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* New Applications Deployed */}
        <div className="analytics-card">
          <div className="analytics-card-title">
            New Applications Deployed{" "}
            <span className="analytics-card-range">30d ▼</span>
          </div>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart
              data={lineData}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
              <Line
                type="monotone"
                dataKey="value"
                stroke="#00e8cc"
                strokeWidth={2}
                dot={false}
              />
              <XAxis dataKey="date" hide />
              <YAxis hide />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
          <div className="analytics-card-btn-row">
            <button className="analytics-card-btn">{t('analytics.buttons.newESDTs')}</button>
            <button className="analytics-card-btn">{t('analytics.buttons.newNFTs')}</button>
            <button className="analytics-card-btn">
              {t('analytics.buttons.newContracts')}
            </button>
          </div>
        </div>

        {/* Staking Metrics, Users Staking, APR Metrics, Fees Metrics */}
        <div className="analytics-row analytics-row-4col">
          <div className="analytics-card">
            <div className="analytics-card-title">
              Staking Metrics{" "}
              <span className="analytics-card-range">30d ▼</span>
            </div>
            <ResponsiveContainer width="100%" height={90}>
              <LineChart
                data={lineData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#00e8cc"
                  strokeWidth={2}
                  dot={false}
                />
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="analytics-card">
            <div className="analytics-card-title">
              Users Staking <span className="analytics-card-range">30d ▼</span>
            </div>
            <ResponsiveContainer width="100%" height={90}>
              <LineChart
                data={lineData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#7bffb3"
                  strokeWidth={2}
                  dot={false}
                />
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="analytics-card">
            <div className="analytics-card-title">
              APR Metrics <span className="analytics-card-range">30d ▼</span>
            </div>
            <ResponsiveContainer width="100%" height={90}>
              <LineChart
                data={lineData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#a18fff"
                  strokeWidth={2}
                  dot={false}
                />
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="analytics-card">
            <div className="analytics-card-title">
              Fees Metrics <span className="analytics-card-range">30d ▼</span>
            </div>
            <ResponsiveContainer width="100%" height={90}>
              <LineChart
                data={lineData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#ff4d4f"
                  strokeWidth={2}
                  dot={false}
                />
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage;
