import { useEffect, useState } from "react";
import TransactedTable from '../../components/TransactedTable';

function LandingTransactedNFTS() {
  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = import.meta.env.VITE_FOREX_API_BASE_URL;
  const API_KEY = import.meta.env.VITE_FOREX_API_KEY;

  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      try {
        const res = await fetch(
          `${API_BASE_URL}/stat?currencypair=EUR-USD&date=last30days&page=1&token=${API_KEY}`
        );
        const data = await res.json();
        // Convert data.data object to array for table
        const arr = Object.entries(data.data || {})
          .map(([date, val]: any, idx) => ({
            rank: idx + 1,
            date,
            positive: val["EUR-USD"].Positive,
            negative: val["EUR-USD"].Negative,
            neutral: val["EUR-USD"].Neutral,
            sentiment: val["EUR-USD"].sentiment_score,
          }))
          .sort((a, b) => (a.date < b.date ? 1 : -1)); 
        setTableData(arr);
      } catch (err) {
        setTableData([]);
      }
      setLoading(false);
    }
    fetchStats();
  }, []);

  return (
    <div className="container-fluid">
      <div
        style={{
          margin: "36px auto 36px auto",
          display: "flex",
          gap: 32,
          flexWrap: "wrap",
          alignItems: "stretch",
        }}
      >
        <TransactedTable
          title="EUR-USD Daily Sentiment"
          subtitle="Last 30 Days"
          buttonLabel="View Dashboard"
          minHeight={480}
          columns={[
            { label: "Rank", key: "rank", width: 60 },
            { label: "Date", key: "date", width: 120 },
            { label: "Positive", key: "positive", width: 90, align: "right" },
            { label: "Negative", key: "negative", width: 90, align: "right" },
            { label: "Neutral", key: "neutral", width: 90, align: "right" },
            { label: "Sentiment", key: "sentiment", width: 100, align: "right" },
          ]}
          data={
            loading
              ? []
              : tableData.map((row) => ({
                  ...row,
                  sentiment: (
                    <span
                      style={{
                        color:
                          row.sentiment > 0.2
                            ? "#2e7d32"
                            : row.sentiment < -0.2
                            ? "#c62828"
                            : "#aaa",
                        fontWeight: 600,
                      }}
                    >
                      {row.sentiment}
                    </span>
                  ),
                }))
          }
        />
      </div>
    </div>
  );
}

export default LandingTransactedNFTS;
