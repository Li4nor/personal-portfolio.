import ProfileImage from '@/images/profile-img.jpg';

export const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          {' '}
          Passionate about technology and the arts. Aiming to balance my studies in Information
          Systems with my work as a Marketing Officer and Choreographer, all while pursuing
          freelance opportunities in my free time.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={ProfileImage} className="img-fluid" alt="Profile Image" />
          </div>
          <div className="col-lg-8 content">
            <h2>BSIS Student &amp; AIM Marketing Officer &amp; LVDT Choreographer</h2>
            <p className="fst-italic py-3">
              Dedicated to achieving excellence both academically and creatively, whether it's
              through data analysis or dance choreography.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Birthday:</strong>{' '}
                    <span>4 February 2001</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Website:</strong>{' '}
                    <span>lianorbagaporo.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{' '}
                    <span>09367724345</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>City:</strong>{' '}
                    <span>San Jose Del Monte, Bulacan</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Degree:</strong>{' '}
                    <span>Bachelor</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Email:</strong>{' '}
                    <span>lianorbagaporo2001@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Freelance:</strong>{' '}
                    <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Constantly evolving and growing, both in my professional and personal pursuits. I
              believe in dedication, creativity, and being open to new challenges in every aspect of
              life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
