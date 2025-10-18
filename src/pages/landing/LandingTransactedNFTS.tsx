import { useEffect, useState } from "react";
import TransactedTable from '../../components/TransactedTable';
import { useTranslation } from 'react-i18next';

function LandingTransactedNFTS() {
  const { t } = useTranslation();
  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const VITE_SHOXEZ_API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL;


  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      try {
        const res = await fetch(`${VITE_SHOXEZ_API_BACKEND_URL}/sentimentAnalysis`);
        const data = await res.json();

        // ✅ data.data is already an array
        const arr = (data.data || [])
          .map((item: any, idx: number) => ({
            rank: idx + 1,
            date: item.date,
            pair: item.pair,
            positive: item.Positive,
            negative: item.Negative,
            neutral: item.Neutral,
            sentiment: item.sentiment_score,
          }))
          .sort((a: any, b: any) => (a.date < b.date ? 1 : -1)); // newest first

        setTableData(arr);
      } catch (err) {
        console.error("Error fetching sentiment data:", err);
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
          title={t('landing.eurUsdDailySentiment')}
          subtitle={t('landing.last30Days')}
          buttonLabel={t('landing.viewDashboard')}
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
