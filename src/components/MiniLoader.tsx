import React from "react";
import "../Loader.css";

const MiniLoader: React.FC = () => {
  const circles = Array.from({ length: 16 }, (_, i) => i);

  return (
    <div className="mini-loading-wrapper">
      <div className="mini-loader">
        {circles.map((index) => (
          <div
            key={index}
            className="mini-circle"
            style={{ ["--index" as any]: index }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MiniLoader;
