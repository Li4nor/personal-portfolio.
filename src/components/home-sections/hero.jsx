import { useEffect } from 'react';
import Typed from 'typed.js';

import HeroBackground from '@/images/hero-bg.jpg';

export const Hero = () => {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: ['Dancer', 'Developer', 'Freelancer', 'Photographer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero section light-background">
      <img src={HeroBackground} alt="Hero Background" />

      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>Lianor Bagaporo</h2>
            <p>
              I'm <span className="typed"></span>
            </p>
            <div className="social-links">
              <a target="_blank" href="https://www.facebook.com/lianbagaporo2/">
                <i className="bi bi-facebook"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/lian.bgpr/">
                <i className="bi bi-instagram"></i>
              </a>
              <a target="_blank" href="https://www.youtube.com/@lianurr">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
