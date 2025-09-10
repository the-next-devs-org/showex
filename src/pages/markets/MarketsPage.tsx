import MarketsHero from "./MarketsHero";

function MarketsPage() {
  return (
    <div className="container-fluid" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ minHeight: '100vh', width: '100%', padding: '32px 0' }}>
        <MarketsHero />
      </div>
    </div>
  );
}

export default MarketsPage;
