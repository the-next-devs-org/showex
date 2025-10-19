import { useState, useEffect } from "react";
import LandingHero from "./LandingHero";
import LandingCharts from "./LandingCharts";
// LandingCarousel import removed because the component is currently unused
import BlockchainSlider from "./landingSlider";
import Loading from "../../components/Loading";

interface NewsItem {
  title: string;
  url: string;
  date: string;
  [key: string]: any; // agar extra fields bhi aati ho to ignore na kare
}

function LandingPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(news);

  const VITE_SHOXEZ_API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL;


  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const res = await fetch(`${API_BASE_URL}/category?section=general&items=10&page=1&token=${API_KEY}`);
  //       const data = await res.json();
  //       setNews(data.data || []);
  //     } catch (error) {
  //       console.error("Error fetching news:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchNews();
  // }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${VITE_SHOXEZ_API_BACKEND_URL}/category?section=general&items=10&page=1`);
        const data = await res.json();

        // Data structure ke hisaab se access karo
        setNews(data.data?.data || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="container-fluid" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ minHeight: '100vh', width: '100%', padding: '32px 0' }}>
        {/* Hero Section */}
        <LandingHero />

        {/* Stats & Charts Section */}
        <LandingCharts />

        {/* Most Used Applications (daily) Section - Carousel */}
        {/* <LandingCarousel /> */}

  {/* Most Transacted NFTs & Tokens Section (component currently unused) */}

        <BlockchainSlider />

      </div>
    </div>
  );
}
export default LandingPage;
