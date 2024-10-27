import React from 'react';
import { Eye, Building2, Settings } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ProcessRotatingWords from './ProcessRotatingWords';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ProcessStep({ icon, title, description, delay }: ProcessStepProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-element ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center group cursor-pointer">
        <div className="relative mb-6 transform transition-all duration-500 group-hover:scale-110">
          <div className="text-[#80ffdb] transition-transform duration-500 group-hover:rotate-[360deg]">
            {icon}
          </div>
          <div className="absolute inset-0 bg-[#80ffdb]/0 rounded-full filter blur-md 
            transition-all duration-500 group-hover:bg-[#80ffdb]/20 group-hover:scale-150" />
        </div>
        <h3 className="text-2xl font-semibold mb-4 transition-colors duration-500 
          group-hover:text-[#80ffdb]">{title}</h3>
        <p className="text-[#fffcf2]/70 leading-relaxed max-w-sm transition-colors duration-500 
          group-hover:text-[#fffcf2]/90">{description}</p>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl mx-auto relative">
        <div 
          className="absolute w-[45rem] h-[45rem] bg-[#80ffdb] rounded-full filter blur-[160px] opacity-10"
          style={{
            left: '50%',
            top: '75%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        
        <div className="text-center mb-16">
          <span className="text-[#80ffdb] text-lg italic">our process</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-2 relative z-10 flex flex-wrap justify-center items-baseline gap-x-4">
            <ProcessRotatingWords />
            <span>Your AI Advantage</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <ProcessStep
            icon={<Eye className="w-12 h-12" />}
            title="Discover & Analyze"
            description="We conduct a comprehensive analysis of your operations to identify AI opportunities that can deliver immediate ROI and competitive advantages."
            delay={100}
          />
          <ProcessStep
            icon={<Building2 className="w-12 h-12" />}
            title="Build & Deploy"
            description="Our expert team develops and integrates custom AI solutions that seamlessly fit your existing workflows, ensuring minimal disruption and maximum adoption."
            delay={200}
          />
          <ProcessStep
            icon={<Settings className="w-12 h-12" />}
            title="Manage & Refine"
            description="We continuously optimize your AI systems, providing 24/7 support and data-driven refinements to ensure your competitive edge grows stronger over time."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}