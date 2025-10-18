import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';


interface ApiData {
  id: number;
  headline: string;
  text: string;
  date: string;
}

interface VisibleBlock extends ApiData {
  animationKey: number;
}

const BlockchainSlider: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<VisibleBlock[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [blocks, setBlocks] = useState<ApiData[]>([]);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const VITE_SHOXEZ_API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL;

  useEffect(() => {
    fetch(`${VITE_SHOXEZ_API_BACKEND_URL}/sundownDigest`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
       
        if (Array.isArray(data?.data?.data)) {
          setBlocks(data.data.data);
        } else {
          setBlocks([]);
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  useEffect(() => {
    if (blocks.length === 0) return;

    let timeoutId: NodeJS.Timeout;

    const animateCards = () => {
      setVisibleCards([]);

      const cardsToShow = Math.floor(Math.random() * 2) + 3; 

      for (let i = 0; i < cardsToShow; i++) {
        setTimeout(() => {
          const blockIndex = (currentIndex + i) % blocks.length;
          setVisibleCards((prev) => [
            ...prev,
            { ...blocks[blockIndex], animationKey: Date.now() + i },
          ]);
        }, i * 800);
      }

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + cardsToShow) % blocks.length);
      }, cardsToShow * 800);

      timeoutId = setTimeout(
        animateCards,
        cardsToShow * 800 + 7000 + Math.random() * 1000
      );
    };

    timeoutId = setTimeout(animateCards, 5000);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, blocks]);

  // Styles wahi jo tumhare code me hain
  const containerStyle: React.CSSProperties = {
    padding: "24px",
    fontFamily: 'system-ui, -apple-system, sans-serif',
  };

  const maxWidthContainer: React.CSSProperties = {
    maxWidth: "1280px",
    margin: "0 auto",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
  };

  const titleContainer: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const titleStyle: React.CSSProperties = {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "600",
    margin: 0,
  };

  const dotStyle: React.CSSProperties = {
    width: "8px",
    height: "8px",
    backgroundColor: "#22d3ee",
    borderRadius: "50%",
  };

  const viewAllButtonStyle: React.CSSProperties = {
    backgroundColor: "#1f2937",
    color: "#9ca3af",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const cardsContainerStyle: React.CSSProperties = {
    position: "relative",
  };

  const cardsFlexStyle: React.CSSProperties = {
    display: "flex",
    gap: "24px",
    overflow: "hidden",
  };

  const getCardStyle = (index: number): React.CSSProperties => ({
    flexShrink: 0,
    width: "320px",
    height: "400px",
    background:
      "linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(31, 41, 55, 0.7) 100%)",
    borderRadius: "12px",
    padding: "24px",
    border: "1px solid #00d4ff",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 20px rgba(0, 212, 255, 0.1)",
    animation: "slideIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
    animationDelay: `${index * 100}ms`,
    opacity: 0,
    transform: "translateX(100px) translateY(20px)",
  });

  const blockIdStyle: React.CSSProperties = {
    color: "#ffffff",
    fontSize: "20px",
    fontFamily: 'Monaco, "Courier New", monospace',
    fontWeight: "bold",
    marginBottom: "16px",
  };

  const timeStyle: React.CSSProperties = {
    color: "#9ca3af",
    fontSize: "14px",
    marginBottom: "24px",
  };

  const hashContainerStyle: React.CSSProperties = {
    borderTop: "1px solid #374151",
    paddingTop: "16px",
  };

  const hashLabelStyle: React.CSSProperties = {
    color: "#9ca3af",
    fontSize: "12px",
    marginBottom: "4px",
  };

  const hashValueStyle: React.CSSProperties = {
    color: "#d1d5db",
    fontSize: "14px",
    fontFamily: 'Monaco, "Courier New", monospace',
    wordBreak: "break-word",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#374151";
    e.currentTarget.style.color = "#ffffff";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#1f2937";
    e.currentTarget.style.color = "#9ca3af";
  };

  return (
    <div style={containerStyle}>
      <div style={maxWidthContainer}>
        {/* Header */}
        <div style={headerStyle}>
          <div style={titleContainer}>
            <h1 style={titleStyle}>{t('slider.recentBlocks')}</h1>
            <div style={dotStyle}></div>
          </div>
          <button
            style={viewAllButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/all-news")}
          >
            {t('slider.viewAll')}
          </button>
        </div>

        {/* Cards Container */}
        <div style={cardsContainerStyle}>
          <div style={cardsFlexStyle}>
            {visibleCards.map((block, index) => (
              <Link
                  key={`${block.id}-${block.animationKey}`}
                  to={`/sundown/${block.id}`}
                  style={{ textDecoration: "none" }}
                >
              <div
                key={`${block.id}-${block.animationKey}`}
                style={getCardStyle(index)}
              >
                {/* ID */}
                <div style={blockIdStyle}>{block.id}</div>

                {/* Time */}
                <div style={timeStyle}>
                  {new Date(block.date).toLocaleString()}
                </div>

                {/* Headline */}
                <div style={hashContainerStyle}>
                  <div style={hashLabelStyle}>{t('slider.headline')}</div>
                  <div style={hashValueStyle}>{block.headline}</div>
                </div>

                {/* Text */}
                <div style={hashContainerStyle}>
                  <div style={hashLabelStyle}>{t('slider.text')}</div>
                  <div style={hashValueStyle}>{block.text ? block.text.slice(0, 150) : ""}...</div>
                </div>
              </div>
              </Link>
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
      `}</style>
    </div>
  );
};

export default BlockchainSlider;
