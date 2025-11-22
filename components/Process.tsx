import React from 'react';
import SectionHeading from './SectionHeading';

const STEPS = [
  { number: '01', title: 'Discovery', desc: 'We deconstruct your market position and objectives, establishing a foundation based on data and strategic foresight.' },
  { number: '02', title: 'Strategy', desc: 'Architecting the blueprint. We define high-performance technical stacks and user journeys for maximum authority.' },
  { number: '03', title: 'Execution', desc: 'Precision engineering. We build pixel-perfect interfaces backed by robust, scalable, and secure code structures.' },
  { number: '04', title: 'Deployment', desc: 'Rigorous testing and seamless launch protocols. We ensure your platform dominates from day one.' },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-brand-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-1/3 h-full bg-gradient-to-b from-brand-accent/5 to-transparent opacity-20 pointer-events-none"></div>
      <div className="absolute left-10 top-20 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="The Methodology" subtitle="Orchestrated Perfection" center />

        <div className="relative max-w-6xl mx-auto mt-20">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent md:-translate-x-1/2 border-l border-dashed border-slate-800/50 h-full"></div>

          <div className="space-y-12 md:space-y-24">
            {STEPS.map((step, index) => (
              <div 
                key={step.number} 
                className={`relative flex flex-col md:flex-row items-start md:items-center group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Spacer for alignment on desktop */}
                <div className="hidden md:block w-1/2" />

                {/* Timeline Marker */}
                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-brand-900 border border-slate-700 group-hover:border-brand-accent group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-500 z-10">
                  <span className="text-sm font-serif text-brand-accent font-bold">{step.number}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 hover:border-brand-accent/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm relative group-hover:shadow-2xl">
                    
                    {/* Desktop Horizontal Connector Line */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-r from-brand-accent/50 to-transparent
                      ${index % 2 === 0 ? '-right-16 rotate-180' : '-left-16'}
                    `}></div>

                    {/* Mobile Vertical Connector (Subtle) */}
                    <div className="md:hidden absolute top-8 -left-14 w-8 h-px bg-slate-800"></div>

                    <h3 className={`text-2xl text-white font-serif mb-4 group-hover:text-brand-accent transition-colors ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-slate-400 leading-relaxed ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action/Statement */}
        <div className="text-center mt-24 max-w-2xl mx-auto">
           <p className="text-slate-500 italic font-serif">
             "Systematic precision leads to predictable excellence."
           </p>
        </div>
      </div>
    </section>
  );
};

export default Process;