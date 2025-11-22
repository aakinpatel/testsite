import React from 'react';
import { ArrowLeft, Shield, Lock, Eye } from 'lucide-react';
import Button from './Button';

const PrivacyPolicy: React.FC = () => {
  const goBack = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-brand-900 pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-800 to-transparent opacity-50 pointer-events-none"></div>
      <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Navigation */}
        <div className="mb-12">
          <Button 
            variant="ghost" 
            onClick={goBack} 
            className="group pl-0 text-slate-400 hover:text-white hover:bg-transparent transition-colors"
            aria-label="Return to Home Page"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="ml-2 text-sm tracking-wider uppercase">Back to Home</span>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-6 text-brand-accent">
              <Shield size={16} />
              <span className="text-xs font-bold tracking-widest uppercase">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-lg md:text-xl border-l-2 border-brand-gold pl-6 italic">
              Your privacy is the foundation of our digital partnership.
            </p>
            <p className="mt-6 text-slate-500 text-sm uppercase tracking-widest font-medium">
              Last Updated: October 27, 2024
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12 text-slate-300 leading-relaxed text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            
            <section className="bg-white/5 border border-white/5 p-8 md:p-10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <div className="flex items-start gap-4 mb-4">
                <Eye className="text-brand-accent mt-1 shrink-0" size={24} />
                <h2 className="text-2xl font-serif text-white">1. Introduction</h2>
              </div>
              <p className="text-slate-400 pl-10">
                TOCHMOC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <span className="text-white font-medium">tochmoc.com</span> and use our web design, development, and IT maintenance services. We operate based in the State of Florida, United States.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-brand-gold"></span> 
                2. Information We Collect
              </h2>
              <p className="mb-6">We may collect information about you in a variety of ways. The information we may collect via the website includes:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="bg-brand-800/50 p-6 rounded-xl border border-white/5">
                  <strong className="text-white block mb-2 font-serif text-xl">Personal Data</strong>
                  <span className="text-slate-400 text-base">Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</span>
                </li>
                <li className="bg-brand-800/50 p-6 rounded-xl border border-white/5">
                  <strong className="text-white block mb-2 font-serif text-xl">Derivative Data</strong>
                  <span className="text-slate-400 text-base">Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                 <span className="w-8 h-px bg-brand-gold"></span>
                 3. Use of Your Information
              </h2>
              <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
              <ul className="space-y-3 pl-6 border-l border-slate-700">
                <li className="pl-4">Compile anonymous statistical data and analysis for use internally.</li>
                <li className="pl-4">Create and manage your account.</li>
                <li className="pl-4">Email you regarding your account or order.</li>
                <li className="pl-4">Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                <li className="pl-4">Improve the efficiency and operation of the Site.</li>
              </ul>
            </section>

            <section className="bg-brand-accent/10 border border-brand-accent/20 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <Lock className="text-brand-gold mt-1 shrink-0" size={24} />
                <h2 className="text-2xl font-serif text-white">4. Florida Privacy Rights</h2>
              </div>
              <p className="text-slate-300 pl-10">
                Under Florida law, we are required to take reasonable measures to protect the security of your personal information. We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice, except as described herein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-brand-gold"></span>
                5. Contact Us
              </h2>
              <p className="mb-8">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-white text-brand-900 p-8 rounded-2xl inline-block">
                <p className="font-serif text-2xl font-bold mb-2">TOCHMOC</p>
                <p className="text-sm font-medium tracking-wide uppercase text-slate-500 mb-4">Elite Digital Architecture</p>
                <p>Florida, USA</p>
                <a href="mailto:hello@tochmoc.com" className="text-brand-accent font-bold hover:underline mt-2 block">hello@tochmoc.com</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;