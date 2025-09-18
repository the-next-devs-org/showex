import React from 'react';

interface Column {
  label: string;
  key: string;
  align?: 'left' | 'right' | 'center';
  width?: string | number;
}

interface TransactedTableProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  columns: Column[];
  data: any[];
  minHeight?: number;
}

const TransactedTable: React.FC<TransactedTableProps> = ({
  title,
  subtitle,
  buttonLabel,
  columns,
  data,
}) => (
  <div 
    className='LandingPageTableContent'
   >
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 28px 0 28px',
      minHeight: 64,
    }}>
      <div style={{ color: '#fff', fontWeight: 600, fontSize: 20 }}>
        {title} {subtitle && <span style={{ color: '#aaa', fontSize: 15, fontWeight: 400 }}>({subtitle})</span>}
      </div>
      <button style={{
        background: '#23262F',
        color: '#fff',
        border: 0,
        borderRadius: 8,
        fontSize: 15,
        fontWeight: 600,
        padding: '6px 18px',
        marginLeft: 12,
        boxShadow: '0 1px 4px #0004',
      }}>{buttonLabel}</button>
    </div>
    <table style={{
      width: '100%',
      marginTop: 18,
      borderCollapse: 'separate',
      borderSpacing: 0,
      tableLayout: 'fixed',
    }}>
      <thead>
        <tr style={{ background: 'none', color: '#aaa', fontWeight: 500, fontSize: 15, textAlign: 'left' }}>
          {columns.map((col, idx) => (
            <th
              key={col.key}
              style={{
                padding: idx === 0 ? '8px 18px 8px 28px' : '8px 18px',
                fontWeight: 500,
                textAlign: col.align || 'left',
                width: col.width,
              }}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.04)' }}>
            {columns.map((col, idx) => (
              <td
                key={col.key}
                style={{
                  padding: idx === 0 ? '8px 18px 8px 28px' : '8px 18px',
                  color: '#fff',
                  fontWeight: idx === 0 || col.key === 'total' ? 700 : 500,
                  fontSize: idx === 0 ? 16 : 15,
                  textAlign: col.align || 'left',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TransactedTable;
