import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('#hero');
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  useEffect(() => {
    const navmenuScrollspy = () => {
      const navmenulinks = document.querySelectorAll('.navmenu a');
      const position = window.scrollY + 200;

      navmenulinks.forEach((navmenulink) => {
        if (!navmenulink.hash) return;

        const section = document.querySelector(navmenulink.hash);
        if (!section) return;

        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          setActiveSection(navmenulink.hash);
        }
      });
    };

    window.addEventListener('scroll', navmenuScrollspy);
    window.addEventListener('load', navmenuScrollspy);

    return () => {
      window.removeEventListener('scroll', navmenuScrollspy);
      window.removeEventListener('load', navmenuScrollspy);
    };
  }, []);

  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  const handleNavLinkClick = () => {
    if (isMobileNavVisible) {
      setMobileNavVisible(false);
    }
  };

  return (
    <header
      id="header"
      className={`header d-flex flex-column justify-content-center ${
        isMobileNavVisible ? 'header-show' : ''
      }`}
    >
      <i
        className={`header-toggle d-xl-none bi ${isMobileNavVisible ? 'bi-x' : 'bi-list'}`}
        onClick={toggleMobileNav}
      ></i>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a
              href="#hero"
              className={activeSection === '#hero' ? 'active' : ''}
              onClick={handleNavLinkClick}
            >
              <i className="bi bi-house navicon"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === '#about' ? 'active' : ''}
              onClick={handleNavLinkClick}
            >
              <i className="bi bi-person navicon"></i>
              <span>About</span>
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={activeSection === '#resume' ? 'active' : ''}
              onClick={handleNavLinkClick}
            >
              <i className="bi bi-file-earmark-text navicon"></i>
              <span>Resume</span>
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={activeSection === '#portfolio' ? 'active' : ''}
              onClick={handleNavLinkClick}
            >
              <i className="bi bi-images navicon"></i>
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === '#contact' ? 'active' : ''}
              onClick={handleNavLinkClick}
            >
              <i className="bi bi-envelope navicon"></i>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
