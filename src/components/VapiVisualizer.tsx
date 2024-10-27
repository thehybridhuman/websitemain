import React from 'react';

interface VapiVisualizerProps {
  isActive: boolean;
  volumeLevel: number;
}

export default function VapiVisualizer({ isActive, volumeLevel }: VapiVisualizerProps) {
  const bars = 12;
  const activeHeight = Math.max(volumeLevel * 100, 30);

  return (
    <div className="flex items-center gap-1 h-16">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className={`w-1 rounded-full transition-all duration-150 ${
            isActive ? 'bg-[#80ffdb]' : 'bg-gray-600'
          }`}
          style={{
            height: isActive ? `${activeHeight * (0.4 + Math.random() * 0.6)}%` : '20%',
            opacity: isActive ? 0.3 + Math.random() * 0.7 : 0.3,
          }}
        />
      ))}
    </div>
  );
}