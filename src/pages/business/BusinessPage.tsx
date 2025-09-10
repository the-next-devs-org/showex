import BusinessHero from "./BusinessHero";

function BusinessPage() {
  return (
    <div className="container-fluid" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ minHeight: '100vh', width: '100%', padding: '32px 0' }}>
        <BusinessHero />
      </div>
    </div>
  );
}

export default BusinessPage;
