import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // If it's a legal page, scroll to top immediately
      if (['#privacy-policy', '#terms-of-service', '#cookie-policy'].includes(hash)) {
        window.scrollTo(0, 0);
      }
      // Note: For sections (#services), browser native behavior usually handles the scroll.
      // If needed, we can add logic here, but it often conflicts with smooth scrolling logic in Navbar.
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return null;
};

export default ScrollToTop;