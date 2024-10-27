import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '-50% 0px -50% 0px'
    });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Connect' }
  ];

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 px-4 py-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0a0908]/80 backdrop-blur-sm border border-[#80ffdb]/10 rounded-2xl px-8 py-4 flex items-center">
          <div className="flex-1">
            <span className="text-[#80ffdb] text-2xl font-bold animate-fade-in group cursor-pointer
              transition-all duration-300 hover:scale-110 hover:rotate-3" style={{ animationDelay: '0.9s' }}>
              HH
            </span>
          </div>
          
          <div className="flex-1 flex items-center justify-center space-x-8 text-[#fffcf2]">
            {navItems.map((item, index) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative animate-fade-in overflow-hidden ${
                  activeSection === item.id ? 'text-[#80ffdb]' : ''
                }`}
                style={{ animationDelay: '0.9s' }}
              >
                <span className="relative z-10 transition-all duration-300 group-hover:text-[#80ffdb] 
                  group-hover:translate-y-[-2px] inline-block transform">
                  {item.label}
                </span>
                
                <span className="absolute inset-0 bg-[#80ffdb]/0 rounded-lg -z-10 transition-all duration-300 
                  group-hover:bg-[#80ffdb]/10 group-hover:scale-110"></span>
                
                <span className="absolute bottom-0 left-[50%] w-0 h-[2px] bg-[#80ffdb] transition-all duration-300 
                  group-hover:w-full group-hover:left-0"></span>
                
                <span className="absolute inset-0 -z-20 transition-transform duration-500 group-active:scale-[2] 
                  group-active:opacity-0 bg-[#80ffdb]/20 scale-0 rounded-full"></span>
              </button>
            ))}
          </div>
          
          <div className="flex-1 flex justify-end">
            <button className="px-6 py-2 bg-[#80ffdb] text-[#0a0908] rounded-full font-medium 
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#80ffdb]/20 
              hover:-translate-y-[2px] active:translate-y-0 active:scale-95
              animate-fade-in relative overflow-hidden group" 
              style={{ animationDelay: '0.9s' }}
            >
              <span className="relative z-10">Book a call</span>
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></span>
              <span className="absolute inset-0 -z-10 transition-transform duration-500 group-active:scale-[2] 
                group-active:opacity-0 bg-white/20 scale-0 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}