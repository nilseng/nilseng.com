import React, { useState, useEffect } from "react";

function useKeyPress(isRotating, setIsRotating) {
  useEffect(() => {
    const handleKeyPress = event => {
      if (!isRotating && event.key === "Enter") {
        setIsRotating(true);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isRotating, setIsRotating]);
}

export default function Logo() {
  const [isRotating, setIsRotating] = useState(false);
  useKeyPress(isRotating, setIsRotating);

  return (
    <>
      <svg
        id="logo"
        className={isRotating ? "rotate" : ""}
        onAnimationEnd={() => setIsRotating(false)}
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="svg_4" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#343a40" stopOpacity="0.99609" />
            <stop offset="1" stopColor="#007bff" stopOpacity="0.99219" />
          </linearGradient>
          <linearGradient id="svg_8" x1="0.5" x2="0.5" y1="0" y2="1">
            <stop offset="0" stopColor="#343a40" stopOpacity="0.99609" />
            <stop offset="1" stopColor="#007bff" stopOpacity="0.99219" />
          </linearGradient>
        </defs>
        <g className="layer">
          <title>Layer 1</title>
          <rect
            onClick={() => setIsRotating(true)}
            fill="#f8f9fa"
            height="320"
            id="svg_1"
            rx="16"
            ry="16"
            stroke="url(#svg_4)"
            strokeWidth="5"
            transform="rotate(45 240 240)"
            width="320"
            x="80.00013"
            y="79.99992"
          />
          <path
            onClick={() => setIsRotating(true)}
            d="m160.82815,336.83944l33.03826,-194.82399l90.33245,195.99999l35.12929,-184.24"
            fill="#000000"
            fillOpacity="0"
            id="svg_6"
            stroke="url(#svg_8)"
            strokeDasharray="null"
            strokeLinecap="null"
            strokeLinejoin="null"
            strokeWidth="33"
            transform="rotate(0.846079 240.078 240.015)"
          />
        </g>
      </svg>
    </>
  );
}
