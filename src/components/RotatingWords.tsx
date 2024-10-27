import React, { useEffect, useState } from 'react';

const PREFIX = 'We Build AI that';
const ROTATING_PARTS = [
  'Drives Efficiency',
  'Accelerates Growth',
  'Maximizes Profit',
  'Unlocks Innovation',
  'Reduces Costs',
  'Enhances Decisions',
  'Boosts Productivity',
  'Elevates Experience',
  'Transforms Business'
];

export default function RotatingWords() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ROTATING_PARTS.length);
        setIsAnimating(false);
      }, 750);
    }, 3750);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6 relative">
      {/* Static Text */}
      <div className="text-5xl md:text-6xl font-bold">{PREFIX}</div>

      {/* Rotating Text Container */}
      <div className="h-[1.5em] relative">
        <span
          className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-700 text-5xl md:text-6xl font-bold ${
            isAnimating 
              ? 'opacity-0 transform -translate-y-8' 
              : 'opacity-100 transform translate-y-0'
          }`}
        >
          <span className="text-[#80ffdb]">{ROTATING_PARTS[currentIndex]}</span>
        </span>
      </div>
    </div>
  );
}