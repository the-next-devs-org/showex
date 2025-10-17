import React from "react";
import ExportButton from "../components/ExportButton";
import "./ExportDemo.css";
import "./ExportDemo.css";

/**
 * Demo page showing export functionality
 * This demonstrates where export buttons appear and how they work
 */

const ExportDemo: React.FC = () => {
  // Sample data for demonstration
  const sampleData = [
    { Name: "John Doe", Email: "john@example.com", Age: 30, City: "New York" },
    { Name: "Jane Smith", Email: "jane@example.com", Age: 25, City: "London" },
    { Name: "Bob Johnson", Email: "bob@example.com", Age: 35, City: "Tokyo" },
    { Name: "Alice Brown", Email: "alice@example.com", Age: 28, City: "Paris" },
    {
      Name: "Charlie Wilson",
      Email: "charlie@example.com",
      Age: 32,
      City: "Berlin",
    },
  ];

  const transactionData = [
    {
      Date: "2025-01-15",
      Transaction: "TXN001",
      Amount: 1000,
      Currency: "USD",
      Status: "Completed",
    },
    {
      Date: "2025-01-16",
      Transaction: "TXN002",
      Amount: 1500,
      Currency: "EUR",
      Status: "Completed",
    },
    {
      Date: "2025-01-17",
      Transaction: "TXN003",
      Amount: 2000,
      Currency: "GBP",
      Status: "Pending",
    },
    {
      Date: "2025-01-18",
      Transaction: "TXN004",
      Amount: 2500,
      Currency: "JPY",
      Status: "Completed",
    },
    {
      Date: "2025-01-19",
      Transaction: "TXN005",
      Amount: 3000,
      Currency: "USD",
      Status: "Completed",
    },
  ];

  return (
    <div className="export-demo-page">
      <div className="export-demo-header">
        <h1>📊 Export Functionality Demo</h1>
        <p>Click any "Export" button below to download data as Excel or CSV</p>
      </div>

      {/* Example 1: Primary Variant */}
      <section className="demo-section">
        <div className="demo-section-header">
          <h2>Example 1: Primary Export Button (Large)</h2>
          <ExportButton
            data={sampleData}
            filename="users_list"
            sheetName="Users"
            variant="primary"
            buttonText="Export Data"
          />
        </div>
        <div className="demo-description">
          <p>
            ✨ This is the <strong>primary variant</strong> - bold and prominent
          </p>
          <p>📍 Use this for main export actions</p>
        </div>
        <table className="demo-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((row, i) => (
              <tr key={i}>
                <td>{row.Name}</td>
                <td>{row.Email}</td>
                <td>{row.Age}</td>
                <td>{row.City}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Example 2: Secondary Variant */}
      <section className="demo-section">
        <div className="demo-section-header">
          <h2>Example 2: Secondary Export Button</h2>
          <ExportButton
            data={transactionData}
            filename="transactions"
            sheetName="Transactions"
            variant="secondary"
            buttonText="Export"
          />
        </div>
        <div className="demo-description">
          <p>
            🎨 This is the <strong>secondary variant</strong> - subtle and
            elegant
          </p>
          <p>📍 Use this for secondary actions or dark backgrounds</p>
        </div>
        <table className="demo-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((row, i) => (
              <tr key={i}>
                <td>{row.Date}</td>
                <td>{row.Transaction}</td>
                <td>{row.Amount}</td>
                <td>{row.Currency}</td>
                <td>{row.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Example 3: Compact Variant */}
      <section className="demo-section">
        <div className="demo-section-header">
          <h2>Example 3: Compact Export Button (Table Header)</h2>
          <ExportButton
            data={sampleData}
            filename="compact_export"
            sheetName="Data"
            variant="compact"
            buttonText="Export"
          />
        </div>
        <div className="demo-description">
          <p>
            📦 This is the <strong>compact variant</strong> - small and
            efficient
          </p>
          <p>📍 Perfect for table headers (like in Analytics page)</p>
        </div>
        <table className="demo-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.slice(0, 3).map((row, i) => (
              <tr key={i}>
                <td>{row.Name}</td>
                <td>{row.Email}</td>
                <td>{row.Age}</td>
                <td>{row.City}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Instructions */}
      <section className="demo-instructions">
        <h2>📝 How to Use:</h2>
        <ol>
          <li>
            Click any <strong>"Export"</strong> button above
          </li>
          <li>
            Choose your format:
            <ul>
              <li>
                🟢 <strong>Export to Excel</strong> - Creates .xlsx file
              </li>
              <li>
                🟢 <strong>Export to CSV</strong> - Creates .csv file (UTF-8)
              </li>
            </ul>
          </li>
          <li>File downloads automatically to your Downloads folder</li>
          <li>Open in Excel, LibreOffice, or Google Sheets</li>
        </ol>

        <h2>🎯 Where to Find Export Buttons:</h2>
        <ul>
          <li>
            ✅ <strong>Analytics Page</strong> - All tables have export buttons
          </li>
          <li>
            ✅ <strong>AI Predictions</strong> - Export forecasts data
          </li>
          <li>
            ✅ <strong>NFTs Tables</strong> - Export transaction data
          </li>
          <li>
            ✅ <strong>Tokens Tables</strong> - Export token data
          </li>
        </ul>

        <h2>📱 Mobile Support:</h2>
        <p>
          On mobile devices, the button text is hidden and only the icon shows
          to save space!
        </p>
      </section>
    </div>
  );
};

export default ExportDemo;
