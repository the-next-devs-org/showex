import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type ChartPoint = {
  date: string;
  applications: number;
  standard: number;
};

type PeriodData = {
  totalTransactions: number;
  applications: number;
  standard: number;
  chartData: ChartPoint[];
};

type MockData = {
  '7d': PeriodData;
  '30d': PeriodData;
  '365d': PeriodData;
  'All': PeriodData;
};

type TooltipState = {
  visible: boolean;
  x: number;
  y: number;
  data: ChartPoint | null;
};

type NewsItem = {
  news_url: string;
  image_url: string;
  title: string;
  source_name: string;
  date?: string;
  text?: string;
  sentiment?: string;
  currency?: string[];
};

function LandingCharts() {
  const { t } = useTranslation();
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '365d' | 'All'>('30d');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    data: null
  });

  console.log(isDropdownOpen, setIsDropdownOpen,tooltip,setTooltip,setSelectedPeriod);

  // News state
  const [news, setNews] = useState<NewsItem[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const VITE_SHOXEZ_API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL;



  useEffect(() => {
    const fetchNews = async () => {
      setNewsLoading(true);
      try {
        const res = await fetch(`${VITE_SHOXEZ_API_BACKEND_URL}/category?section=allcurrencypairs&items=3&page=1`);
        const data = await res.json();

        setNews(data.data?.data || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setNewsLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Mock data for different time periods
  const mockData: MockData = {
    '7d': {
      totalTransactions: 552529562,
      applications: 394967303,
      standard: 157562259,
      chartData: [
        { date: 'Sep 7', applications: 372000000, standard: 148000000 },
        { date: 'Sep 8', applications: 382000000, standard: 153000000 },
        { date: 'Sep 9', applications: 390000000, standard: 155000000 },
        { date: 'Sep 10', applications: 387000000, standard: 153000000 },
        { date: 'Sep 11', applications: 392000000, standard: 156000000 },
        { date: 'Sep 12', applications: 394000000, standard: 156000000 },
        { date: 'Sep 13', applications: 394967303, standard: 157562259 },
      ]
    },
    '30d': {
      totalTransactions: 551980440,
      applications: 394738049,
      standard: 157242391,
      chartData: [
        { date: 'Aug 15', applications: 365000000, standard: 145000000 },
        { date: 'Aug 20', applications: 372000000, standard: 148000000 },
        { date: 'Aug 25', applications: 379000000, standard: 151000000 },
        { date: 'Aug 30', applications: 386000000, standard: 154000000 },
        { date: 'Sep 5', applications: 390000000, standard: 155000000 },
        { date: 'Sep 10', applications: 393000000, standard: 157000000 },
        { date: 'Sep 13', applications: 394738049, standard: 157242391 },
      ]
    },
    '365d': {
      totalTransactions: 498650320,
      applications: 356780240,
      standard: 141870080,
      chartData: [
        { date: 'Q1 2024', applications: 272000000, standard: 108000000 },
        { date: 'Q2 2024', applications: 301000000, standard: 119000000 },
        { date: 'Q3 2024', applications: 329000000, standard: 131000000 },
        { date: 'Q4 2024', applications: 347000000, standard: 138000000 },
        { date: 'Q1 2025', applications: 356780240, standard: 141870080 },
      ]
    },
    'All': {
      totalTransactions: 1250000000,
      applications: 895000000,
      standard: 355000000,
      chartData: [
        { date: '2020', applications: 35000000, standard: 15000000 },
        { date: '2021', applications: 129000000, standard: 51000000 },
        { date: '2022', applications: 322500000, standard: 127500000 },
        { date: '2023', applications: 608500000, standard: 241500000 },
        { date: '2024', applications: 787000000, standard: 313000000 },
        { date: '2025', applications: 895000000, standard: 355000000 },
      ]
    }
  };

  const periods: Array<'7d' | '30d' | '365d' | 'All'> = ['7d', '30d', '365d', 'All'];
  const currentData = mockData[selectedPeriod];

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  console.log(periods, currentData,formatNumber);

  return (
    <div className="container-fluid">


      {/* Latest Forex News Section */}
      <div className="row mt-4">
        <div className="col-12">
          <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: 18 }}>{t('landing.latestForexNews')}</h3>
          {newsLoading ? (
            <div style={{ color: "#aaa", fontSize: 18, textAlign: "center", padding: 32 }}>{t('landing.loadingNews')}</div>
          ) : (
            <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
              {news.map((item, idx) => (
                <a
                  key={idx}
                  href={item.news_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#181A20",
                    borderRadius: 14,
                    boxShadow: "0 2px 12px #0006",
                    color: "#fff",
                    textDecoration: "none",
                    width: 370,
                    minHeight: 260,
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.2s, transform 0.2s"
                  }}
                  className="news-card"
                >
                  <img
                    src={item.image_url}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: 140,
                      objectFit: "cover",
                      borderRadius: "14px 14px 0 0"
                    }}
                  />
                  <div style={{ padding: 16, flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#00fff0" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: 14, color: "#aaa", marginBottom: 8 }}>
                      {item.source_name} • {item.date?.slice(0, 16)}
                    </div>
                    <div style={{ fontSize: 15, color: "#fff", opacity: 0.85, flex: 1 }}>
                      {item.text?.slice(0, 110)}{item.text && item.text.length > 110 ? "..." : ""}
                    </div>
                    <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                      {item.sentiment && (
                        <span style={{
                          background: item.sentiment === "Positive" ? "#e6f9e6" : item.sentiment === "Negative" ? "#ffeaea" : "#f4f4f4",
                          color: item.sentiment === "Positive" ? "#2e7d32" : item.sentiment === "Negative" ? "#c62828" : "#757575",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 600,
                          padding: "2px 10px"
                        }}>
                          {item.sentiment}
                        </span>
                      )}
                      {item.currency && item.currency.length > 0 && (
                        <span style={{
                          background: "#23262F",
                          color: "#00fff0",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 600,
                          padding: "2px 10px"
                        }}>
                          {item.currency.join(", ")}
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LandingCharts;