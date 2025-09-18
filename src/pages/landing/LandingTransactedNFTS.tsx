import TransactedTable from '../../components/TransactedTable';
function LandingTransactedNFTS() {
  return (
    <div className="container-fluid">
      <div style={{ maxWidth: 1200, margin: '36px auto 36px auto', display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'stretch' }}>
        <TransactedTable
          title="Most Transacted NFTs"
          subtitle="Daily"
          buttonLabel="View Dashboard"
          minHeight={480}
          columns={[
            { label: 'Rank', key: 'rank', width: 60 },
            { label: 'Token', key: 'token', width: 180 },
            { label: 'Items', key: 'items', width: 90, align: 'right' },
            { label: 'Holders', key: 'holders', width: 90, align: 'right' },
            { label: 'Total Txn', key: 'total', width: 90, align: 'right' },
          ]}
          data={[
            { rank: 1, token: <span><span style={{ fontSize: 20 }}>🟤</span> Catheanelnts <span style={{ color: '#ffe066', fontSize: 16, marginLeft: 4 }}>✔️</span></span>, items: '265,531', holders: '8,005', total: 475 },
            { rank: 2, token: <span><span style={{ fontSize: 20 }}>🔵</span> XPAgeOfIntelligence <span style={{ color: '#ffe066', fontSize: 16, marginLeft: 4 }}>✔️</span></span>, items: '29', holders: '24,816', total: 452 },
            { rank: 3, token: <span><span style={{ fontSize: 20 }}>🟣</span> xMEX</span>, items: '3', holders: '198', total: 198 },
            { rank: 4, token: <span><span style={{ fontSize: 20 }}>🦍</span> ELRONDAPESCLUB</span>, items: '10,000', holders: '1,171', total: 87 },
            { rank: 5, token: <span><span style={{ fontSize: 20 }}>🟢</span> xPortalAchievements <span style={{ color: '#ffe066', fontSize: 16, marginLeft: 4 }}>✔️</span></span>, items: '15', holders: '172,298', total: 54 },
            { rank: 6, token: <span><span style={{ fontSize: 20 }}>❓</span> MYSTERYBOX</span>, items: '5', holders: '8,112', total: 26 },
            { rank: 7, token: <span><span style={{ fontSize: 20 }}>🟩</span> xLendAccount</span>, items: '481', holders: '261', total: 23 },
            { rank: 8, token: <span><span style={{ fontSize: 20 }}>🌀</span> PortalsOfInfinity</span>, items: '19', holders: '40,917', total: 19 },
            { rank: 9, token: <span><span style={{ fontSize: 20 }}>🏰</span> xCastle</span>, items: '67', holders: '408', total: 17 },
            { rank: 10, token: <span><span style={{ fontSize: 20 }}>🟡</span> BHAGENTS</span>, items: '8,893', holders: '2,278', total: 13 },
          ]}
        />
        <TransactedTable
          title="Most Transacted Tokens"
          subtitle="Daily"
          buttonLabel="Dashboard"
          minHeight={480}
          columns={[
            { label: 'Rank', key: 'rank', width: 60 },
            { label: 'Token', key: 'token', width: 220 },
            { label: 'Total Txn', key: 'total', width: 90, align: 'right' },
          ]}
          data={[
            { rank: 1, token: <span><span style={{ fontSize: 20 }}>🟡</span> WrappedEGLD (WEGLD)</span>, total: '8,402' },
            { rank: 2, token: <span><span style={{ fontSize: 20 }}>🔵</span> Emorya (EMR)</span>, total: '3,153' },
            { rank: 3, token: <span><span style={{ fontSize: 20 }}>⚪</span> WrappedUSDC (USDC)</span>, total: '3,150' },
            { rank: 4, token: <span><span style={{ fontSize: 20 }}>🟢</span> BOBER (BOBER)</span>, total: '1,709' },
            { rank: 5, token: <span><span style={{ fontSize: 20 }}>🟣</span> HatomUSD (USH)</span>, total: '1,217' },
            { rank: 6, token: <span><span style={{ fontSize: 20 }}>🔵</span> WrappedEmorya (WEMR)</span>, total: '955' },
            { rank: 7, token: <span><span style={{ fontSize: 20 }}>🟢</span> EmoryaSportsX (EMRS)</span>, total: '907' },
            { rank: 8, token: <span><span style={{ fontSize: 20 }}>🟡</span> CatheaneGold (GOG)</span>, total: '835' },
            { rank: 9, token: <span><span style={{ fontSize: 20 }}>🟣</span> Hatom (HTM)</span>, total: '789' },
            { rank: 10, token: <span><span style={{ fontSize: 20 }}>🦊</span> Foxsy (FOXSY)</span>, total: '674' },
          ]}
        />
      </div>
    </div>
  );
}
export default LandingTransactedNFTS;
