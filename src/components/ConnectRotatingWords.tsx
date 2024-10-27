import React, { useEffect, useState } from 'react';

const ROTATING_PARTS = [
  'Dominate',
  'Redefine',
  'Leverage'
];

export default function ConnectRotatingWords() {
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
    <span className="inline-flex flex-col h-[1.1em] overflow-hidden">
      <span
        className={`text-[#80ffdb] transition-all duration-700 ${
          isAnimating 
            ? 'opacity-0 transform -translate-y-8' 
            : 'opacity-100 transform translate-y-0'
        }`}
      >
        {ROTATING_PARTS[currentIndex]}
      </span>
    </span>
  );
}