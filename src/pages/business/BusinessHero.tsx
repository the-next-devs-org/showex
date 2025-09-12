import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Transaction {
  hash: string;
  age: string;
  from: string;
  to: string;
  value: string;
  method: string;
  txnFee: string;
}

const mockTransactions: Transaction[] = [
  {
    hash: "0xa4c9e2c...a9cc9c9e",
    age: "3 secs",
    from: "Sherd 4",
    to: "Sherd 1",
    value: "0.054242434...434332d9a9f34",
    method: "Deposited",
    txnFee: "+ 0.9983.03"
  },
  {
    hash: "0x14c329d...a9cc9e",
    age: "3 secs",
    from: "Sherd 4",
    to: "Sherd 1",
    value: "Registrar",
    method: "0.0009f6d6...43c0334942df",
    txnFee: "+ 0.9983.05"
  },
  {
    hash: "0x491c94...a8d8cffe",
    age: "3 secs",
    from: "Sherd 4",
    to: "Sherd 1",
    value: "0.05",
    method: "0.0009f6dB...43c033d94d8f",
    txnFee: "+ 0.9983.05"
  },
  {
    hash: "0x390f1c...d0ef3f",
    age: "3 secs",
    from: "Sherd 4",
    to: "Sherd 1",
    value: "0.05",
    method: "0.0009f6dB...43c033d94d8f",
    txnFee: "+ 0.9983.05"
  },
  {
    hash: "0x5ebc6b...341ecd5",
    age: "3 secs",
    from: "Sherd 4",
    to: "Sherd 1",
    value: "0 ETH",
    method: "0.0009f6dB...43c033d94d8f",
    txnFee: "+ 0.9983.05"
  },
  {
    hash: "0xfc9f1dc...7ad34e8",
    age: "8 secs",
    from: "Sherd 1",
    to: "Sherd 1",
    value: "approve",
    method: "0.0009...43c0334",
    txnFee: "0.083.05"
  },
  {
    hash: "0x40d1fc...646de8f",
    age: "8 secs",
    from: "Sherd 1",
    to: "Sherd 1",
    value: "0.0009f6dB...434333",
    method: "0.0009f6dB...5c0334942d8",
    txnFee: "+ 0.9983.05"
  },
  {
    hash: "0x0127d5...bbaf2b6",
    age: "8 secs",
    from: "Sherd 1",
    to: "Sherd 1",
    value: "0 ETH",
    method: "0.0009f6dB...434333333",
    txnFee: "+ 0.9983.05"
  },
  {
    hash: "0x3dea4a...a37dedd",
    age: "8 secs",
    from: "Sherd 1",
    to: "Sherd 1",
    value: "0.05",
    method: "0.0009f6dB...434333d",
    txnFee: "+ 0.9983.05"
  },
  {
    hash: "0x95d9cd...a37d9dd",
    age: "8 secs",
    from: "Sherd 1",
    to: "Sherd 1",
    value: "0.05",
    method: "0.0009f6dB...434333d",
    txnFee: "+ 0.9983.05"
  }
];

function BusinessHero() {
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
    },
    chartContainer: {
      height: '200px',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      position: 'relative' as const,
      overflow: 'hidden'
    },
    chartLine: {
      position: 'absolute' as const,
      bottom: '0',
      left: '0',
      right: '0',
      height: '100%',
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 Q100,30 200,45 T400,40' stroke='%2300ff88' stroke-width='2' fill='none'/%3E%3Cpath d='M0,70 Q100,50 200,65 T400,60' stroke='%234a90e2' stroke-width='2' fill='none'/%3E%3Cpath d='M0,80 Q100,65 200,75 T400,70' stroke='%23ff6b6b' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    methodTag: {
      backgroundColor: '#2d5016',
      color: '#4caf50',
      padding: '2px 6px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      border: '1px solid #4caf50'
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
                  className="form-control"
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

      <div className="container-fluid py-4">
        {/* Page Title */}
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="mb-3">Transactions</h2>
          </div>
        </div>

        {/* Stats Section with Chart */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card" style={customStyles.darkCard}>
              <div className="card-body p-0">
                <div style={customStyles.chartContainer}>
                  <div style={customStyles.chartLine}></div>
                  <div className="position-absolute top-0 start-0 p-3">
                    <div className="mb-2">
                      <h4 className="text-light mb-0">552,012,046</h4>
                      <small style={customStyles.grayText}>Total Transactions</small>
                    </div>
                    <div className="mb-2">
                      <h5 className="text-info mb-0">394,751,535</h5>
                      <small style={customStyles.grayText}>Successful</small>
                    </div>
                    <div>
                      <h5 className="text-danger mb-0">157,260,511</h5>
                      <small style={customStyles.grayText}>Failed</small>
                    </div>
                  </div>
                  <div className="position-absolute top-0 end-0 p-3">
                    <small style={customStyles.grayText}>TPS: 13.42</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Transactions Section */}
        <div className="row">
          <div className="col-12">
            <div className="card" style={customStyles.darkCard}>
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Live Transactions 🔴</h5>
                <div className="d-flex align-items-center">
                  <span style={customStyles.grayText} className="me-2">First</span>
                  <span style={customStyles.grayText} className="me-3">Last</span>
                  <select className="form-select form-select-sm me-2" style={{...customStyles.darkCard, width: 'auto'}}>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                  <button className="btn btn-sm btn-outline-secondary me-1">‹</button>
                  <button className="btn btn-sm btn-outline-secondary">›</button>
                </div>
              </div>
              
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-dark table-hover mb-0">
                    <thead>
                      <tr style={{borderBottom: '1px solid #404040'}}>
                        <th scope="col" style={customStyles.grayText}>Txn Hash</th>
                        <th scope="col" style={customStyles.grayText}>Age</th>
                        <th scope="col" style={customStyles.grayText}>From</th>
                        <th scope="col" style={customStyles.grayText}>To</th>
                        <th scope="col" style={customStyles.grayText}>Value</th>
                        <th scope="col" style={customStyles.grayText}>Method</th>
                        <th scope="col" style={customStyles.grayText}>Txn Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockTransactions.map((txn, index) => (
                        <tr key={index} style={{borderBottom: '1px solid #404040'}}>
                          <td>
                            <a href="#" style={{...customStyles.blueLink, fontSize: '0.85rem'}}>
                              {txn.hash}
                            </a>
                          </td>
                          <td>
                            <small>{txn.age}</small>
                          </td>
                          <td>
                            <span className="badge bg-secondary">{txn.from}</span>
                          </td>
                          <td>
                            <span className="badge bg-secondary">{txn.to}</span>
                          </td>
                          <td>
                            <small style={{fontFamily: 'monospace'}}>
                              {txn.value.includes('ETH') || txn.value === 'approve' || txn.value === 'Registrar' ? 
                                txn.value : 
                                <span style={customStyles.grayText}>{txn.value}</span>
                              }
                            </small>
                          </td>
                          <td>
                            {txn.method === 'Deposited' ? (
                              <span style={customStyles.methodTag}>{txn.method}</span>
                            ) : (
                              <small style={{...customStyles.blueLink, fontSize: '0.75rem'}}>
                                {txn.method}
                              </small>
                            )}
                          </td>
                          <td>
                            <small style={customStyles.greenText}>
                              {txn.txnFee}
                            </small>
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
      </div>
    </div>
  );
}

export default BusinessHero;