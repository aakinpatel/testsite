import React, { useEffect } from 'react';
import Hero from './Hero';
import Services from './Services';
import Work from './Work';
import Process from './Process';
import Contact from './Contact';

const Home: React.FC = () => {
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    // Elements to animate would be selected here if we had a generic class
    // For now we are relying on the section-internal animations or the initial load
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Work />
      <Contact />
    </>
  );
};

export default Home;