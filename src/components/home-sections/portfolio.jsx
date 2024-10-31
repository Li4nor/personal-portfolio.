import React, { useEffect, useState } from 'react';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';

import ProjectImage1 from '@/images/gallery/gallery-img-01.jpg';
import ProjectImage2 from '@/images/gallery/gallery-img-02.jpg';
import ProjectImage3 from '@/images/gallery/gallery-img-03.jpg';
import ProjectImage4 from '@/images/gallery/gallery-img-04.jpg';
import ProjectImage5 from '@/images/gallery/gallery-img-05.jpg';
import ProjectImage6 from '@/images/gallery/gallery-img-06.jpg';
import ProjectImage7 from '@/images/gallery/gallery-img-07.jpg';
import ProjectImage8 from '@/images/gallery/gallery-img-08.jpg';
import ProjectImage9 from '@/images/gallery/gallery-img-09.jpg';

export const Portfolio = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState('*');

  useEffect(() => {
    // Initialize Isotope
    const iso = new Isotope('.isotope-container', {
      itemSelector: '.isotope-item',
      layoutMode: 'masonry',
    });
    setIsotope(iso);

    // Initialize GLightbox
    GLightbox({
      selector: '.glightbox',
    });

    // Cleanup
    return () => {
      if (iso) {
        iso.destroy();
      }
    };
  }, []);

  // Handle filter key change
  useEffect(() => {
    if (isotope) {
      filterKey === '*'
        ? isotope.arrange({ filter: '*' })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  const handleFilterKeyChange = (key) => {
    setFilterKey(key);
  };

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Hello! I’m Lianor Bagaporo—a passionate choreographer, marketer, and researcher with a
          focus on impactful projects and creative solutions. With experience in both dance and data
          analysis, I blend artistry and precision to make meaningful contributions in every role I
          take on. Whether leading a marketing campaign, choreographing dynamic performances, or
          diving into research, I’m driven to create, connect, and inspire.
        </p>
      </div>

      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li
              onClick={() => handleFilterKeyChange('*')}
              className={filterKey === '*' ? 'filter-active' : ''}
            >
              All
            </li>
            <li
              onClick={() => handleFilterKeyChange('filter-app')}
              className={filterKey === 'filter-app' ? 'filter-active' : ''}
            >
              Photography
            </li>
            <li
              onClick={() => handleFilterKeyChange('filter-product')}
              className={filterKey === 'filter-product' ? 'filter-active' : ''}
            >
              Me
            </li>
            <li
              onClick={() => handleFilterKeyChange('filter-branding')}
              className={filterKey === 'filter-branding' ? 'filter-active' : ''}
            >
              Dance
            </li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src={ProjectImage1} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>With LVDT JHS</h4>
                <a
                  href={ProjectImage1}
                  title="App 1"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                ></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src={ProjectImage2} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Independence Day Show</h4>
                <a
                  href={ProjectImage2}
                  title="Product 1"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                ></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src={ProjectImage3} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>AIM Marketing Head</h4>
                <a
                  href={ProjectImage3}
                  title="Branding 1"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                ></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src={ProjectImage4} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>My Sunset Shot</h4>
                <a
                  href={ProjectImage4}
                  title="App 2"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                ></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src={ProjectImage5} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Freelancer</h4>
                <a
                  href={ProjectImage5}
                  title="Product 2"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                ></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src={ProjectImage6} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Stylish</h4>
                <a
                  href={ProjectImage6}
                  title="Branding 2"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                ></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src={ProjectImage7} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Travelling</h4>
                <a
                  href={ProjectImage7}
                  title="App 3"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                ></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src={ProjectImage8} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Kids Having Fun</h4>
                <a
                  href={ProjectImage8}
                  title="Product 3"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                ></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src={ProjectImage9} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Strangers: Father & Daugther</h4>
                <a
                  href={ProjectImage9}
                  title="Branding 2"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
