import React from 'react';

export const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Dynamic professional blending expertise in marketing, research, and choreography. Proven
          track record in developing impactful promotional strategies and fostering team creativity.
          Currently completing studies in Statistical Analysis in Information Systems, with a strong
          focus on data-driven decision-making.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>

            <div className="resume-item pb-0">
              <h4>Lianor Bagaporo</h4>
              <p>
                <em>
                  Innovative and adaptable marketing leader and choreographer with experience in
                  strategic planning, brand marketing, and team coordination. Skilled in crafting
                  engaging campaigns and optimizing digital presence. Recognized for strong
                  leadership as a Marketing Committee Head and creative vision as a Choreographer.
                </em>
              </p>
              <ul>
                <li>La Verdad Christian College, Inc.</li>
                <li>09367724345</li>
                <li>lianorbagaporo2001@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor’s Degree in Information Systems</h4>
              <h5>Ongoing - Expected Graduation: 2025</h5>
              <p>
                <em>La Verdad Christian College, Inc.</em>
              </p>
              <p>
                Research Focus: "Achieving Gender Equality in the Workplace: Addressing Gender Bias
                through Inclusive Hiring Practices and Equal Pay Policies for Sustainable Corporate
                Growth."
              </p>
            </div>
            <div className="resume-item">
              <h4>Associate in Computer Technology</h4>
              <h5>Class of 2024</h5>
              <p>
                <em>La Verdad Christian College, Inc.</em>
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>

            <div className="resume-item">
              <h4>Marketing Committee Head</h4>
              <h5>2024 - 2025</h5>
              <p>
                <em>La Verdad Christian College, Inc.</em>
              </p>
              <ul>
                <li>
                  Directed the planning and execution of promotional strategies to increase program
                  visibility and engagement.
                </li>
                <li>
                  Coordinated with teams to streamline content creation, resulting in a [specify
                  percentage or metric] increase in event attendance.
                </li>
                <li>
                  Oversaw digital marketing initiatives and conducted data-driven analyses for
                  campaign optimization.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Choreographer</h4>
              <h5>2024 - 2025</h5>
              <p>
                <em>La Verdad Dance Troupe</em>
              </p>
              <ul>
                <li>
                  Choreographed performances, focusing on artistic expression and technical
                  precision.
                </li>
                <li>
                  Led dance rehearsals, mentoring team members and enhancing their creative skills.
                </li>
                <li>
                  Designed themed performances, aligning with organizational events to bolster
                  audience engagement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button className="cb-btn">
          <a
            target="_blank"
            href="/resume.pdf"
            className="download"
            style={{ color: 'white', fontWeight: '500' }}
          >
            Download CV
          </a>
        </button>
      </div>
    </section>
  );
};
