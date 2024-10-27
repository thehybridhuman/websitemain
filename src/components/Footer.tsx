import React, { useState, useEffect } from 'react';
import { Twitter, Youtube } from 'lucide-react';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';
import SecurityModal from './SecurityModal';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <footer className={`w-full px-4 py-6 bg-[#0A0B0A] border-t border-[#80ffdb]/10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-[#80ffdb] text-2xl font-bold transition-all duration-300 
                hover:scale-110 hover:rotate-3 cursor-pointer">HH</span>
              <div className="text-[#fffcf2]/60 text-sm">
                <p>Copyright © 2024 Hybrid Human.</p>
                <p>All rights reserved.</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <button 
                onClick={() => setIsTermsOpen(true)}
                className="group relative overflow-hidden"
              >
                <span className="text-[#fffcf2]/60 transition-all duration-300 group-hover:text-[#80ffdb] 
                  relative z-10 inline-block transform group-hover:translate-y-[-2px]">
                  Terms of Service
                </span>
                <span className="absolute inset-0 bg-[#80ffdb]/0 rounded-lg -z-10 transition-all duration-300 
                  group-hover:bg-[#80ffdb]/10 group-hover:scale-110"></span>
                <span className="absolute bottom-0 left-[50%] w-0 h-[2px] bg-[#80ffdb] transition-all duration-300 
                  group-hover:w-full group-hover:left-0"></span>
                <span className="absolute inset-0 -z-20 transition-transform duration-500 group-active:scale-[2] 
                  group-active:opacity-0 bg-[#80ffdb]/20 scale-0 rounded-full"></span>
              </button>
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="group relative overflow-hidden"
              >
                <span className="text-[#fffcf2]/60 transition-all duration-300 group-hover:text-[#80ffdb] 
                  relative z-10 inline-block transform group-hover:translate-y-[-2px]">
                  Privacy Policy
                </span>
                <span className="absolute inset-0 bg-[#80ffdb]/0 rounded-lg -z-10 transition-all duration-300 
                  group-hover:bg-[#80ffdb]/10 group-hover:scale-110"></span>
                <span className="absolute bottom-0 left-[50%] w-0 h-[2px] bg-[#80ffdb] transition-all duration-300 
                  group-hover:w-full group-hover:left-0"></span>
                <span className="absolute inset-0 -z-20 transition-transform duration-500 group-active:scale-[2] 
                  group-active:opacity-0 bg-[#80ffdb]/20 scale-0 rounded-full"></span>
              </button>
              <button 
                onClick={() => setIsSecurityOpen(true)}
                className="group relative overflow-hidden"
              >
                <span className="text-[#fffcf2]/60 transition-all duration-300 group-hover:text-[#80ffdb] 
                  relative z-10 inline-block transform group-hover:translate-y-[-2px]">
                  Security
                </span>
                <span className="absolute inset-0 bg-[#80ffdb]/0 rounded-lg -z-10 transition-all duration-300 
                  group-hover:bg-[#80ffdb]/10 group-hover:scale-110"></span>
                <span className="absolute bottom-0 left-[50%] w-0 h-[2px] bg-[#80ffdb] transition-all duration-300 
                  group-hover:w-full group-hover:left-0"></span>
                <span className="absolute inset-0 -z-20 transition-transform duration-500 group-active:scale-[2] 
                  group-active:opacity-0 bg-[#80ffdb]/20 scale-0 rounded-full"></span>
              </button>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <Twitter className="w-5 h-5 text-[#fffcf2]/60 transition-all duration-300 
                  group-hover:text-[#80ffdb] group-hover:scale-110 group-hover:-translate-y-[2px]" />
                <span className="absolute inset-0 bg-[#80ffdb]/0 rounded-full transition-all duration-300 
                  group-hover:bg-[#80ffdb]/10 group-hover:scale-150"></span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <Youtube className="w-5 h-5 text-[#fffcf2]/60 transition-all duration-300 
                  group-hover:text-[#80ffdb] group-hover:scale-110 group-hover:-translate-y-[2px]" />
                <span className="absolute inset-0 bg-[#80ffdb]/0 rounded-full transition-all duration-300 
                  group-hover:bg-[#80ffdb]/10 group-hover:scale-150"></span>
              </a>
              <button
                className="ml-4 px-4 py-2 bg-[#80ffdb] text-[#0a0908] rounded-full font-medium 
                  transition-all duration-300 transform hover:scale-105 hover:-translate-y-[2px]
                  hover:shadow-lg hover:shadow-[#80ffdb]/20 active:translate-y-0 active:scale-95
                  relative overflow-hidden group"
              >
                <span className="relative z-10">Book A Call</span>
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></span>
                <span className="absolute inset-0 -z-10 transition-transform duration-500 group-active:scale-[2] 
                  group-active:opacity-0 bg-white/20 scale-0 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      <TermsModal 
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
      <PrivacyModal 
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <SecurityModal 
        isOpen={isSecurityOpen}
        onClose={() => setIsSecurityOpen(false)}
      />
    </>
  );
}