import { useState } from 'react';

interface Block {
  id: string;
  age: string;
  txn: number;
  reward: string;
  size: string;
  gasUsed: string;
  blockHash: string;
  gasLimit: string;
  validator: string;
}

const mockBlocks: Block[] = [
  {
    id: "20897345",
    age: "12 secs",
    txn: 11,
    reward: "Sherd 0",
    size: "4.33 kB",
    gasUsed: "19,337,523 (64.3%)",
    blockHash: "0x6ca2fee622...74e7d760874",
    gasLimit: "30M",
    validator: "🎯"
  },
  {
    id: "20897345",
    age: "12 secs",
    txn: 35,
    reward: "Sherd 1",
    size: "7010.19",
    gasUsed: "145,548,479 (4.79%)",
    blockHash: "0x228af1734...68158b6ae85",
    gasLimit: "🎯 BoostBoost",
    validator: ""
  },
  {
    id: "20897342",
    age: "12 secs",
    txn: 11,
    reward: "Sherd 2",
    size: "4.28 kB",
    gasUsed: "24,845,548 (0.82%)",
    blockHash: "8221f305d10...2d7d0c5194",
    gasLimit: "🎯 Multisend Community Delegation P",
    validator: ""
  },
  {
    id: "20871883",
    age: "12 secs",
    txn: 3,
    reward: "Mastereth",
    size: "2.83 kB",
    gasUsed: "1,118,000 (0.01%)",
    blockHash: "562a4b6621...e06a65d7e47",
    gasLimit: "P2P Validator",
    validator: ""
  },
  {
    id: "20891344",
    age: "8 secs",
    txn: 1713,
    reward: "Sherd 0",
    size: "137.35 kB",
    gasUsed: "0%",
    blockHash: "0516abd7fac...8cc4bc239e0",
    gasLimit: "Valid Blocks",
    validator: ""
  },
  {
    id: "20879419",
    age: "8 secs",
    txn: 3729,
    reward: "Sherd 1",
    size: "1,342.12 kB",
    gasUsed: "3,993,440 (0.26%)",
    blockHash: "2b4a3e67fac...2ed4ae86e50",
    gasLimit: "Staked",
    validator: ""
  },
  {
    id: "20887341",
    age: "8 secs",
    txn: 3739,
    reward: "Sherd 2",
    size: "137.85 kB",
    gasUsed: "0%",
    blockHash: "d344abe0bde...4aaab9b267b",
    gasLimit: "Stake-X",
    validator: ""
  }
];

function MarketsHero() {
  // const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const customStyles = {
    darkTheme: {
      backgroundColor: '#1a1a1a',
      minHeight: '100vh',
      color: 'white'
    },
    darkCard: {
      backgroundColor: '#2d2d2d',
      border: '1px solid #404040',
      borderRadius: '8px'
    },
    searchContainer: {
      position: 'relative' as const
    },
    searchIcon: {
      position: 'absolute' as const,
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#888',
      zIndex: 10
    },
    searchInput: {
      backgroundColor: '#2d2d2d',
      border: '1px solid #404040',
      color: 'white',
      paddingLeft: '40px'
    },
    tableHover: {
      backgroundColor: '#404040'
    },
    blueLink: {
      color: '#4a90e2',
      textDecoration: 'none',
      fontFamily: 'monospace'
    },
    greenText: {
      color: '#28a745'
    },
    grayText: {
      color: '#888'
    },
    statusIndicator: {
      width: '8px',
      height: '8px',
      backgroundColor: '#28a745',
      borderRadius: '50%',
      display: 'inline-block',
      marginLeft: '8px'
    }
  };

  return (
    <div style={customStyles.darkTheme}>
      {/* Header */}
      <div className="border-bottom border-secondary py-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div style={customStyles.searchContainer}>
                <span style={customStyles.searchIcon}>🔍</span>
                <input
                  type="text"
                  className="form-control custom-input"
                  style={customStyles.searchInput}
                  placeholder="Search for an address, transaction hash, contract etc. to 96% of AI"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-end">
                <span style={customStyles.greenText} className="me-2">Epoch Latest</span>
                <span style={customStyles.statusIndicator}></span>
                <span style={customStyles.grayText} className="ms-3">ETH:</span>
                <span style={customStyles.greenText} className="ms-1">$3,423</span>
                <span style={customStyles.grayText} className="ms-3">Gas:</span>
                <span className="text-info ms-1">19 GWEI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="container-fluid py-4">
        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <div className="card h-100" style={customStyles.darkCard}>
              <div className="card-body">
                <small style={customStyles.grayText}>Block Height</small>
                <h2 className="card-title mb-0 mt-2 mainSiteColor">21,708,826</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100" style={customStyles.darkCard}>
              <div className="card-body">
                <small style={customStyles.grayText}>Total Transactions Deployed</small>
                <h2 className="card-title mb-0 mt-2 mainSiteColor">
                  6,532.49<small>ETH</small>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100" style={customStyles.darkCard}>
              <div className="card-body">
                <small style={customStyles.grayText}>Med Gas Price</small>
                <h2 className="card-title mb-0 mt-2 mainSiteColor" style={customStyles.greenText}>
                  65,850.96<small>GWEI</small>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Blocks Table */}
        <div className="card" style={customStyles.darkCard}>
          <div className="card-header d-flex justify-content-between align-items-center">
            <h4 className="mb-0 text-white">Blocks</h4>
            <div className="d-flex align-items-center">
              <span>🔍</span>
              <span className="ms-3" style={customStyles.grayText}>Page</span>
              <select className="form-select form-select-sm mx-2" style={{...customStyles.darkCard, width: 'auto'}}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <span style={customStyles.grayText}>of 500</span>
              <button className="btn btn-sm btn-outline-secondary ms-2">‹</button>
              <button className="btn btn-sm btn-outline-secondary ms-1">›</button>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-dark table-hover mb-0">
                <thead>
                  <tr style={{borderBottom: '1px solid #404040'}}>
                    <th scope="col" style={customStyles.grayText}>Block</th>
                    <th scope="col" style={customStyles.grayText}>Age</th>
                    <th scope="col" style={customStyles.grayText}>Txn</th>
                    <th scope="col" style={customStyles.grayText}>Reward ↓</th>
                    <th scope="col" style={customStyles.grayText}>Size</th>
                    <th scope="col" style={customStyles.grayText}>Gas Used / Block Hash</th>
                    <th scope="col" style={customStyles.grayText}>Gas Limit</th>
                    <th scope="col" style={customStyles.grayText}>Validator</th>
                  </tr>
                </thead>
                <tbody>
                  {mockBlocks.map((block, index) => (
                    <tr key={index} style={{borderBottom: '1px solid #404040'}}>
                      <td>
                        <a href="#" style={customStyles.blueLink}>{block.id}</a>
                      </td>
                      <td>{block.age}</td>
                      <td>{block.txn}</td>
                      <td>{block.reward}</td>
                      <td>{block.size}</td>
                      <td>
                        <div>
                          <small className="text-light">{block.gasUsed}</small>
                          <br />
                          <small>
                            <a href="#" style={{...customStyles.blueLink, fontSize: '0.75rem'}}>
                              {block.blockHash}
                            </a>
                          </small>
                        </div>
                      </td>
                      <td><small>{block.gasLimit}</small></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span>{block.validator}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketsHero;