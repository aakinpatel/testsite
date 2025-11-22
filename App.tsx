import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle scroll position on route change
  useEffect(() => {
    const isLegalPage = ['#privacy-policy', '#terms-of-service', '#cookie-policy'].includes(currentRoute);
    
    if (isLegalPage) {
      // When switching to a legal page, hard scroll to top immediately
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      // When going back to home or a section
      if (currentRoute && currentRoute !== '#' && currentRoute !== '') {
        // If there is a specific section hash, wait for render then scroll smoothly
        setTimeout(() => {
          const element = document.querySelector(currentRoute);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      } else {
        // Just home, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [currentRoute]);

  const renderContent = () => {
    switch (currentRoute) {
      case '#privacy-policy':
        return <PrivacyPolicy />;
      case '#terms-of-service':
        return <TermsOfService />;
      case '#cookie-policy':
        return <CookiePolicy />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-900 text-slate-300 font-sans selection:bg-brand-accent selection:text-white overflow-x-hidden flex flex-col">
      {/* Accessibility Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-brand-gold focus:text-brand-900 focus:px-4 focus:py-2 focus:rounded-md focus:font-bold transition-all"
      >
        Skip to main content
      </a>

      <Navbar />
      
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;