import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const isLegalPage = ['#privacy-policy', '#terms-of-service', '#cookie-policy'].includes(activeHash);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    
    // If we are on a legal page, we let the browser handle the hash change naturally.
    // App.tsx will detect this and render Home + Scroll to section.
    if (isLegalPage) {
      return; 
    }

    // If we are already on Home, we manually smooth scroll to avoid page reload feel
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    } else {
      window.location.hash = href;
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Always reset hash to trigger App listener
    window.location.hash = ''; 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav border-b border-white/5 py-4' : 'bg-transparent py-6'}`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={handleLogoClick} 
          className="flex items-center gap-2 z-50 transition-transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg p-1"
          aria-label="TOCHMOC Home"
        >
          <Logo className="h-10 md:h-12 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-slate-300 hover:text-white transition-colors font-medium uppercase tracking-wider cursor-pointer focus:outline-none focus:text-brand-accent focus:underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} tabIndex={-1}>
            <Button 
              variant="primary" 
              className="!px-6 !py-2 !text-xs"
              aria-label="Start a project"
            >
              Start a Project
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu" 
            className="fixed inset-0 bg-brand-900 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in-up"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
             {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl text-white font-serif hover:text-brand-accent transition-colors focus:outline-none focus:text-brand-accent"
              >
                {link.label}
              </a>
            ))}
             <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="focus:outline-none">
                <Button variant="primary">
                    Start a Project
                </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;