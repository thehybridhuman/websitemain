import React from 'react';

interface TimelineNavProps {
  currentSection: number;
  onDotClick: (index: number) => void;
}

export default function TimelineNav({ currentSection, onDotClick }: TimelineNavProps) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
      {[0, 1, 2, 3].map((index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className="group relative w-3 h-3"
        >
          <div 
            className={`absolute inset-0 rounded-full transition-all duration-300
              ${currentSection === index 
                ? 'bg-[#80ffdb] scale-100' 
                : 'bg-[#80ffdb]/30 scale-75 hover:scale-90 hover:bg-[#80ffdb]/50'}`}
          />
          {currentSection === index && (
            <div className="absolute inset-0 rounded-full bg-[#80ffdb]/30 animate-ping" />
          )}
          <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <span className="text-sm text-[#fffcf2]">
              {index === 0 ? 'Home' : 
               index === 1 ? 'Services' :
               index === 2 ? 'Process' : 'Contact'}
            </span>
          </div>
        </button>
      ))}
      <div className="absolute inset-y-0 w-px left-1/2 -z-10 -translate-x-1/2 bg-gradient-to-b from-transparent via-[#80ffdb]/20 to-transparent" />
    </div>
  );
}