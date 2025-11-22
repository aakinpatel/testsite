import React from 'react';
import Button from './Button';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" aria-label="Introduction">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] animate-float-slow opacity-5"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] animate-pulse-slow opacity-10"></div>
        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-xs font-medium tracking-widest uppercase text-slate-300">Accepting New Clients for 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Architecting Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-white to-brand-gold italic pr-2">
              Digital Legacy
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            TOCHMOC fuses elite aesthetic sensibilities with robust technological foundations. We craft bespoke digital ecosystems for brands that demand the extraordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="primary" className="w-full sm:w-auto h-14 text-base">
              Explore Services
            </Button>
            <Button variant="outline" className="w-full sm:w-auto h-14 text-base group">
              View Portfolio <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce" aria-hidden="true">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;