import React from "react";
import "../Loader.css";

const Loading: React.FC = () => {
  const circles = Array.from({ length: 16 }, (_, i) => i);

  return (
    <div className="loading-overlay">
      <div className="loading-wrapper">
        {circles.map((index) => (
          <div
            key={index}
            className="circle"
            style={{ ["--index" as any]: index }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
