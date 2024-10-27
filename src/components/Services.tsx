import React from 'react';
import { FileText, Mic, GitBranch, Bot } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ServicesRotatingWords from './ServicesRotatingWords';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-element ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="group relative bg-[#0a0908]/40 backdrop-blur-sm rounded-3xl p-8 border border-[#80ffdb]/10 
        transition-all duration-500 hover:scale-[1.02] hover:border-[#80ffdb]/30 hover:shadow-lg 
        hover:shadow-[#80ffdb]/20 cursor-pointer">
        <div className="absolute inset-0 rounded-3xl bg-[#80ffdb]/5 opacity-0 
          group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative mb-6 inline-block group-hover:scale-110 transition-transform duration-500">
          <div className="text-[#80ffdb] transition-transform duration-500 group-hover:transform 
            group-hover:rotate-[360deg]">{icon}</div>
          <div className="absolute inset-0 animate-ping opacity-20">{icon}</div>
        </div>

        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-4 text-[#fffcf2] group-hover:text-[#80ffdb] 
            transition-colors duration-500">{title}</h3>
          <p className="text-[#fffcf2]/70 leading-relaxed group-hover:text-[#fffcf2]/90 
            transition-colors duration-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#80ffdb] text-lg italic">our services</span>
          <h2 className="text-5xl font-bold mt-2 flex flex-wrap justify-center items-baseline gap-x-4">
            <span>How can we</span>
            <ServicesRotatingWords />
            <span>your business?</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
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
          
          <ServiceCard
            icon={<FileText size={32} />}
            title="Document Intelligence"
            description="Transform your document workflows with AI that automatically extracts, analyzes, and processes business-critical information. Our solutions reduce manual processing time by 90% while improving accuracy and compliance."
            delay={100}
          />
          <ServiceCard
            icon={<GitBranch size={32} />}
            title="Workflow Automation"
            description="Eliminate operational bottlenecks with AI that learns your business processes and automates complex workflows across departments. Our solutions reduce manual work by 80% while improving accuracy and team satisfaction."
            delay={200}
          />
          <ServiceCard
            icon={<Mic size={32} />}
            title="AI Voice Operations"
            description="Transform your call center with AI agents that sound natural, understand context, and handle complex customer interactions at scale. Our solutions reduce wait times by 95% while cutting operational costs in half."
            delay={300}
          />
          <ServiceCard
            icon={<Bot size={32} />}
            title="Custom AI Agents"
            description="Revolutionize your operations with AI agents that think, learn, and execute complex tasks across your entire business ecosystem. Our solutions automate entire workflows while adapting to your unique processes."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
}