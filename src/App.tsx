import React from 'react';
import Navbar from './components/Navbar';
import RotatingWords from './components/RotatingWords';
import VapiRecorder from './components/VapiRecorder';
import CustomCursor from './components/CustomCursor';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import ScrollObserver from './components/ScrollObserver';
import Footer from './components/Footer';
import CookieBar from './components/CookieBar';
import TechSlider from './components/TechSlider';
import TestimonialSlider from './components/TestimonialSlider';

export default function App() {
  return (
    <div className="bg-[#0A0B0A] text-[#fffcf2] min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section id="home" className="relative min-h-[calc(100vh+16rem)] flex flex-col justify-center px-4">
          <div 
            className="fixed w-[45rem] h-[45rem] md:w-[60rem] md:h-[60rem] bg-[#80ffdb] rounded-full filter blur-[160px] opacity-10 pointer-events-none"
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 0
            }}
          />
          
          <div className="relative max-w-5xl mx-auto text-center z-10 mt-32">
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <RotatingWords />
            </div>
            
            <div className="mt-32 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <VapiRecorder />
            </div>
          </div>
        </section>

        <div className="space-y-8">
          <div className="py-8">
            <TechSlider />
          </div>
          
          <Services />
          <Process />
          
          <div className="py-8">
            <TestimonialSlider />
          </div>
          <Contact />
        </div>
      </main>
      
      <CustomCursor />
      <ScrollObserver />
      <Footer />
      <CookieBar />
    </div>
  );
}