import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

import { Hero, About, Skills, Resume, Portfolio, Contact } from './components/home-sections';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Toggle scroll-to-top button visibility
  useEffect(() => {
    const toggleScrollTop = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleScrollTop);

    return () => {
      window.removeEventListener('scroll', toggleScrollTop); // Cleanup
    };
  }, []);

  // Scroll to top function
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  // Preloader logic
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="index-page">
      <Navbar />

      <main className="main">
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>

      <Footer />

      <a
        href="#"
        className={`scroll-top d-flex align-items-center justify-content-center ${
          showScrollTop ? 'active' : ''
        }`}
        onClick={handleScrollToTop}
        style={{ display: showScrollTop ? 'flex' : 'none' }}
      >
        <i className="bi bi-arrow-up-short" />
      </a>

      <div id={isLoading && 'preloader'}></div>
    </div>
  );
};

export default App;
