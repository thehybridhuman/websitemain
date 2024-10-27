import React from 'react';

const TECH_ITEMS = [
  {
    name: 'Hugging Face',
    logo: (
      <svg 
        viewBox="0 0 1000 500" 
        className="w-full h-full"
        fill="currentColor"
      >
        <circle cx="250" cy="250" r="200"/>
        <path d="M500,0c137.4,0,248.9,111.5,248.9,248.9S637.4,497.8,500,497.8S251.1,386.3,251.1,248.9
        S362.6,0,500,0 M500,20C367.8,20,261.1,126.7,261.1,248.9S367.8,477.8,500,477.8S738.9,371.1,738.9,248.9S632.2,20,500,20L500,20z"/>
      </svg>
    )
  }
];

export default function TechSlider() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h3 className="text-center text-lg text-[#80ffdb] font-light tracking-wider mb-8">
        technologies we use
      </h3>
      
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#0A0B0A] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#0A0B0A] to-transparent pointer-events-none" />
        
        <div className="overflow-hidden">
          <div className="flex space-x-24 animate-slide">
            {[...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex-shrink-0 h-16 w-40 relative group flex items-center justify-center"
              >
                <div className="w-32 h-10 text-[#fffcf2] opacity-50 group-hover:opacity-100 
                  transition-all duration-300 group-hover:scale-110">
                  {item.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}