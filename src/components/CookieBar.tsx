import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setTimeout(() => setIsAnimating(true), 50);
    } else {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[9998] transition-all duration-500
      ${isClosing ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'}`}>
      <div className={`bg-gradient-to-r from-[#0a0908]/95 via-[#0a0908]/98 to-[#0a0908]/95 
        backdrop-blur-md transition-all duration-500
        ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Cookie bar content */}
        <div className="relative max-w-7xl mx-auto p-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Icon and text section */}
            <div className="flex-1 flex items-center gap-4">
              <div className="relative">
                <Cookie className="w-8 h-8 text-[#80ffdb]" />
                <div className="absolute inset-0 animate-ping opacity-20">
                  <Cookie className="w-8 h-8 text-[#80ffdb]" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-[#80ffdb] font-semibold mb-1">We value your privacy</h3>
                <p className="text-[#fffcf2]/90 text-sm leading-relaxed">
                  We use cookies to enhance your experience and analyze our traffic. By continuing to use our website, you agree to our use of cookies.
                </p>
              </div>
            </div>

            {/* Buttons section */}
            <div className="flex items-center gap-4">
              <button
                onClick={acceptCookies}
                className="px-6 py-2.5 bg-[#80ffdb] text-[#0a0908] rounded-full font-medium 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
                  hover:shadow-[#80ffdb]/20 active:scale-95"
              >
                Accept all cookies
              </button>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-[#80ffdb]/10 rounded-full transition-colors duration-300
                  group relative"
              >
                <X className="w-5 h-5 text-[#fffcf2] transition-transform duration-300 
                  group-hover:rotate-90" />
                <div className="absolute inset-0 rounded-full bg-[#80ffdb]/5 
                  transform scale-0 group-hover:scale-100 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] 
            bg-gradient-to-r from-transparent via-[#80ffdb]/20 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] 
            bg-gradient-to-r from-transparent via-[#80ffdb]/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}