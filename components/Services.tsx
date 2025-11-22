import React from 'react';
import { SERVICES } from '../constants';
import SectionHeading from './SectionHeading';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-900 relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blue Blob */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-30"></div>
        {/* Gold/Purple Blob */}
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-40" style={{ animationDelay: '2s' }}></div>
        {/* Subtle Gold Accent Blob */}
        <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-brand-gold/5 rounded-full mix-blend-screen filter blur-[120px] animate-blob opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Our Expertise" 
          subtitle="What We Do" 
          center 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-brand-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-500 shadow-lg">
                <service.icon className="text-white w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;