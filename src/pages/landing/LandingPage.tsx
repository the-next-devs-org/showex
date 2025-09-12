import { useState, useEffect } from "react";
import LandingHero from "./LandingHero";
import LandingCharts from "./LandingCharts";
import LandingCarousel from "./LandingCarousel";
import LandingTransactedNFTS from "./LandingTransactedNFTS";
import BlockchainSlider from "./landingSlider";

interface NewsItem {
  title: string;
  url: string;
  date: string;
  [key: string]: any; // agar extra fields bhi aati ho to ignore na kare
}

function LandingPage() {
  // 2. state ko type karo
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          "https://forexnewsapi.com/api/v1/category?section=general&items=10&page=1&token=2fy7verxsu14efrjwk4gvrthvaunxddcel5dghen"
        );
        const data = await res.json();
        setNews(data.data || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>;

  return (
    <div className="container-fluid" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ minHeight: '100vh', width: '100%', padding: '32px 0' }}>
        {/* Hero Section */}
        <LandingHero />


        {/* <div className="bg-white rounded-2xl p-4 shadow-md mb-6">
          <h2 className="text-lg font-bold mb-4">Latest Forex News</h2>
          <ul className="space-y-2">
            {news.map((item, index) => (
              <li key={index} className="border-b pb-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {item.title}
                </a>
                <p className="text-xs text-gray-500">{item.date}</p>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Stats & Charts Section */}
        <LandingCharts />

        {/* Most Used Applications (daily) Section - Carousel */}
        <LandingCarousel />

        {/* Most Transacted NFTs & Tokens Section */}
        <LandingTransactedNFTS />

        <BlockchainSlider />

      </div>
    </div>
  );
}
export default LandingPage;
