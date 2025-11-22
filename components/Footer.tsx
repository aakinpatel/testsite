import React from 'react';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  // Shared classes for footer links to ensure consistency
  const linkClasses = "hover:text-brand-accent transition-all duration-300 hover:underline hover:underline-offset-4 decoration-brand-accent/40 cursor-pointer focus:outline-none focus:text-brand-accent focus:underline";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if we are already on home (no hash or hash is section)
    const isHomePage = !['#privacy-policy', '#terms-of-service', '#cookie-policy'].includes(window.location.hash);
    
    if (isHomePage && href.startsWith('#') && !['#privacy-policy', '#terms-of-service', '#cookie-policy'].includes(href)) {
      // If on home and clicking a section link, smooth scroll manually
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  const handleLegalClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    // If we are already on this page, clicking the link should scroll to top
    if (window.location.hash === hash) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Otherwise default anchor behavior triggers hashchange in App.tsx
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-900 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
             <a href="#" onClick={handleLogoClick} className="mb-6 block w-fit group" aria-label="Go to Homepage">
               <Logo className="h-16 w-auto" />
             </a>
             <p className="text-slate-400 max-w-md leading-relaxed mb-8">
               The apex of digital craftsmanship. We deliver strategic web experiences and fortified IT solutions that define industry standards.
             </p>
             <div className="flex space-x-6">
               <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:text-brand-accent" aria-label="LinkedIn"><Linkedin size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:text-brand-accent" aria-label="Twitter"><Twitter size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:text-brand-accent" aria-label="Instagram"><Instagram size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:text-brand-accent" aria-label="GitHub"><Github size={20} /></a>
             </div>
          </div>
          
          <nav aria-label="Footer Sitemap">
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Sitemap</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" onClick={(e) => handleLinkClick(e, '#')} className={linkClasses}>Home</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className={linkClasses}>Services</a></li>
              <li><a href="#work" onClick={(e) => handleLinkClick(e, '#work')} className={linkClasses}>Work</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className={linkClasses}>About</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className={linkClasses}>Contact</a></li>
            </ul>
          </nav>

          <nav aria-label="Legal Links">
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#privacy-policy" onClick={(e) => handleLegalClick(e, '#privacy-policy')} className={linkClasses}>Privacy Policy</a></li>
              <li><a href="#terms-of-service" onClick={(e) => handleLegalClick(e, '#terms-of-service')} className={linkClasses}>Terms of Service</a></li>
              <li><a href="#cookie-policy" onClick={(e) => handleLegalClick(e, '#cookie-policy')} className={linkClasses}>Cookie Policy</a></li>
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} TOCHMOC Inc. All rights reserved. Florida, USA.</p>
          <p className="mt-2 md:mt-0">Engineered for <span className="text-brand-gold font-medium">Excellence</span>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;