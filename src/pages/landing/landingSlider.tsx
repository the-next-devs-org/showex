import React, { useState, useEffect } from 'react';

interface Block {
  id: string;
  transactions: number;
  shard: number;
  hash: string;
  timeAgo: string;
}

interface VisibleBlock extends Block {
  animationKey: number;
}

const BlockchainSlider: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<VisibleBlock[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Sample blockchain data matching the image
  const blocks: Block[] = [
    {
      id: '26918646',
      transactions: 3,
      shard: 0,
      hash: '409601c2a81...b233345500',
      timeAgo: '7 secs ago'
    },
    {
      id: '26906112',
      transactions: 6,
      shard: 1,
      hash: '99164d4d4fc...eda30f8276a',
      timeAgo: '7 secs ago'
    },
    {
      id: '26918281',
      transactions: 5,
      shard: 2,
      hash: '3fe0d8558ba...0b94c4d271e',
      timeAgo: '7 secs ago'
    },
    {
      id: '26902135',
      transactions: 4,
      shard: 0,
      hash: 'cbcbc6a891d...f45e8a2b3c1',
      timeAgo: '8 secs ago'
    },
    {
      id: '26901847',
      transactions: 7,
      shard: 3,
      hash: 'aa7f3d9e21b...c88d1f4a6e2',
      timeAgo: '9 secs ago'
    },
    {
      id: '26898632',
      transactions: 2,
      shard: 1,
      hash: 'f12b8c4d7a3...9e5a7b1c4d8',
      timeAgo: '10 secs ago'
    },
    {
      id: '26897419',
      transactions: 8,
      shard: 2,
      hash: 'e8d3a9f1c7b...2f4a8e6c1d9',
      timeAgo: '11 secs ago'
    },
    {
      id: '26896205',
      transactions: 5,
      shard: 0,
      hash: 'd4f7a2b8e5c...1a9f3e7b2c6',
      timeAgo: '12 secs ago'
    }
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const animateCards = () => {
      // Clear existing cards
      setVisibleCards([]);
      
      // Show 3-4 cards with staggered animation
      const cardsToShow = Math.floor(Math.random() * 2) + 3; // 3 or 4 cards
      
      for (let i = 0; i < cardsToShow; i++) {
        setTimeout(() => {
          const blockIndex = (currentIndex + i) % blocks.length;
          setVisibleCards(prev => [...prev, { ...blocks[blockIndex], animationKey: Date.now() + i }]);
        }, i * 800); // Each card appears 0.8 seconds after the previous
      }
      
      // Update current index for next cycle
      setTimeout(() => {
        setCurrentIndex(prev => (prev + cardsToShow) % blocks.length);
      }, cardsToShow * 800);
      
      // Schedule next animation cycle (7-8 seconds after last card appears)
      timeoutId = setTimeout(animateCards, (cardsToShow * 800) + 7000 + Math.random() * 1000);
    };

    // Start first animation after 5 seconds
    timeoutId = setTimeout(animateCards, 5000);
    
    return () => clearTimeout(timeoutId);
  }, [currentIndex, blocks]);

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#000000',
    minHeight: '100vh',
    padding: '24px',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const maxWidthContainer: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px'
  };

  const titleContainer: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const titleStyle: React.CSSProperties = {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '600',
    margin: 0
  };

  const dotStyle: React.CSSProperties = {
    width: '8px',
    height: '8px',
    backgroundColor: '#22d3ee',
    borderRadius: '50%'
  };

  const viewAllButtonStyle: React.CSSProperties = {
    backgroundColor: '#1f2937',
    color: '#9ca3af',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const cardsContainerStyle: React.CSSProperties = {
    position: 'relative'
  };

  const cardsFlexStyle: React.CSSProperties = {
    display: 'flex',
    gap: '24px',
    overflow: 'hidden'
  };

  const getCardStyle = (index: number): React.CSSProperties => ({
    flexShrink: 0,
    width: '320px',
    background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(31, 41, 55, 0.7) 100%)',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #00d4ff',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 0 20px rgba(0, 212, 255, 0.1)',
    animation: 'slideIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
    animationDelay: `${index * 100}ms`,
    opacity: 0,
    transform: 'translateX(100px) translateY(20px)'
  });

  const blockIdStyle: React.CSSProperties = {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Monaco, "Courier New", monospace',
    fontWeight: 'bold',
    marginBottom: '16px'
  };

  const timeStyle: React.CSSProperties = {
    color: '#9ca3af',
    fontSize: '14px',
    marginBottom: '24px'
  };

  const transactionInfoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px'
  };

  const transactionTextStyle: React.CSSProperties = {
    color: '#d1d5db',
    fontSize: '14px'
  };

  const transactionNumberStyle: React.CSSProperties = {
    color: '#ffffff',
    fontWeight: '500'
  };

  const hashContainerStyle: React.CSSProperties = {
    borderTop: '1px solid #374151',
    paddingTop: '16px'
  };

  const hashLabelStyle: React.CSSProperties = {
    color: '#9ca3af',
    fontSize: '12px',
    marginBottom: '4px'
  };

  const hashValueStyle: React.CSSProperties = {
    color: '#d1d5db',
    fontSize: '14px',
    fontFamily: 'Monaco, "Courier New", monospace',
    wordBreak: 'break-all'
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#374151';
    e.currentTarget.style.color = '#ffffff';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#1f2937';
    e.currentTarget.style.color = '#9ca3af';
  };

  return (
    <div style={containerStyle}>
      <div style={maxWidthContainer}>
        {/* Header */}
        <div style={headerStyle}>
          <div style={titleContainer}>
            <h1 style={titleStyle}>Recent Blocks</h1>
            <div style={dotStyle}></div>
          </div>
          <button 
            style={viewAllButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            View All
          </button>
        </div>

        {/* Cards Container */}
        <div style={cardsContainerStyle}>
          <div style={cardsFlexStyle}>
            {visibleCards.map((block, index) => (
              <div
                key={`${block.id}-${block.animationKey}`}
                style={getCardStyle(index)}
              >
                {/* Block ID */}
                <div style={blockIdStyle}>
                  {block.id}
                </div>
                
                {/* Time */}
                <div style={timeStyle}>
                  {block.timeAgo}
                </div>
                
                {/* Transaction Info */}
                <div style={transactionInfoStyle}>
                  <span style={transactionTextStyle}>
                    Transactions: <span style={transactionNumberStyle}>{block.transactions}</span>
                  </span>
                  <span style={transactionTextStyle}>
                    Shard <span style={transactionNumberStyle}>{block.shard}</span>
                  </span>
                </div>
                
                {/* Hash */}
                <div style={hashContainerStyle}>
                  <div style={hashLabelStyle}>Hash:</div>
                  <div style={hashValueStyle}>
                    {block.hash}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(100px) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .blockchain-card-wrapper {
            width: 300px !important;
          }
          .blockchain-card {
            width: 298px !important;
          }
        }
        
        @media (max-width: 640px) {
          .blockchain-card-wrapper {
            width: 280px !important;
          }
          .blockchain-card {
            width: 278px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BlockchainSlider;