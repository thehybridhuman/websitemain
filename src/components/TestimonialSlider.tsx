import React, { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  author: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    author: "David Chen",
    role: "Chief Technology Officer",
    company: "FinTech Solutions Global",
    content: "Hybrid Human's document intelligence system has revolutionized our loan processing. What used to take 3 days now takes 2 hours, with 99.9% accuracy. Their AI solutions have given us a competitive edge we didn't think was possible.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    author: "Sarah Martinez",
    role: "VP of Operations",
    company: "Healthcare Innovations Inc",
    content: "The AI voice system Hybrid Human built for our patient care division handles over 10,000 calls daily with a 96% satisfaction rate. It's not just automation - it's genuine intelligence that our patients trust and our staff rely on.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    author: "James Wilson",
    role: "Director of AI Strategy",
    company: "Enterprise Solutions Co",
    content: "Their custom AI agents have automated 78% of our back-office operations, saving us $4.2M annually. But what truly sets them apart is their understanding of our business needs and their ability to deliver solutions that exceed expectations.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const nextSlide = useCallback(() => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section 
      ref={ref}
      id="testimonials" 
      className={`min-h-[40vh] flex items-center justify-center px-4 py-16 transition-all duration-1000 relative ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div 
        className="absolute w-[45rem] h-[45rem] bg-[#80ffdb] rounded-full filter blur-[160px] opacity-10"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#80ffdb] text-lg italic">testimonials</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-2 text-[#fffcf2]">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="relative h-[280px] overflow-hidden">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500
                  ${index === currentIndex ? 'opacity-100 translate-x-0' : 
                    index < currentIndex ? 'opacity-0 -translate-x-full' : 
                    'opacity-0 translate-x-full'}`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative bg-[#0a0908]/40 backdrop-blur-sm rounded-2xl p-6 
                  border border-[#80ffdb]/10 h-full flex flex-col justify-center
                  transition-all duration-500 hover:border-[#80ffdb]/30 hover:shadow-lg 
                  hover:shadow-[#80ffdb]/10 group overflow-hidden">
                  <div className="absolute inset-0 bg-[#80ffdb]/0 transition-all duration-500 
                    group-hover:bg-[#80ffdb]/5" />
                  
                  <div className="relative">
                    <p className="text-[#fffcf2] text-base md:text-lg leading-relaxed mb-6 text-center
                      transition-transform duration-500 group-hover:scale-[1.02]">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center justify-center gap-3 
                      transition-transform duration-500 group-hover:translate-y-[-4px]">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#80ffdb]/20
                        transition-all duration-500 group-hover:border-[#80ffdb]/40 
                        group-hover:shadow-lg group-hover:shadow-[#80ffdb]/20">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover transition-transform duration-500 
                            group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h4 className="text-[#80ffdb] font-semibold text-sm
                          transition-colors duration-500 group-hover:text-[#80ffdb]">
                          {testimonial.author}
                        </h4>
                        <p className="text-[#fffcf2]/70 text-xs transition-colors duration-500 
                          group-hover:text-[#fffcf2]/90">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-3">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                  ${index === currentIndex ? 
                    'bg-[#80ffdb] w-8' : 
                    'bg-[#80ffdb]/30 hover:bg-[#80ffdb]/50'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}