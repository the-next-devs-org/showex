import LandingHero from './LandingHero';
import LandingCharts from './LandingCharts';
import LandingCarousel from './LandingCarousel';
import LandingTransactedNFTS from './LandingTransactedNFTS';

function LandingPage() {
  return (
    <div className="container-fluid" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ minHeight: '100vh', width: '100%', padding: '32px 0' }}>
        {/* Hero Section */}
        <LandingHero />

        {/* Stats & Charts Section */}
        <LandingCharts />

        {/* Most Used Applications (daily) Section - Carousel */}
        <LandingCarousel />

        {/* Most Transacted NFTs & Tokens Section */}
        <LandingTransactedNFTS />

      </div>
    </div>
  );
}
export default LandingPage;
