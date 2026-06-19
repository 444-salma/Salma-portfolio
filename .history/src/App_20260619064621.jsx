function App() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">SA.</h2>
        <div>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className="container">
        <section className="hero">
          <p className="small-title">SOFTWARE ENGINEERING STUDENT</p>

          <h1>
            Salma <br />
            <span>Alnoamany</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-text">
            Passionate about building scalable web applications, software
            architecture and modern user experiences using React, Node.js and
            MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#contact" className="btn">
              Contact Me
            </a>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">CX</div>
              <h3>Connextruct</h3>
              <p>
                Construction project management platform that connects
                organizations with qualified companies. Features company
                verification, project publishing, bid management, contract
                handling, and AI-powered company matching.
                <p className="tech-stack">
                  <strong>Tech Stack:</strong> React • Node.js • MongoDB • SOA
                </p>
              </p>
              <a className="btn" href="#">
                View Project
              </a>
            </div>

            <div className="project-card">
              <div className="project-image">SP</div>
              <h3>Study Planner</h3>
              <p>
                Full-stack academic planning platform that helps students manage
                courses, assignments, study schedules, and deadlines through a
                centralized dashboard.
              </p>
              <p className="tech-stack">
                <strong>Tech Stack:</strong> React • Node.js • MongoDB API
              </p>

              <a className="btn" href="https://github.com/444-salma/web.git">
                View Project
              </a>
            </div>

            <div className="project-card">
              <div className="project-image">JS</div>
              <h3>Java E-Commerce System</h3>
              <p>
                Java-based e-commerce application that simulates product
                browsing, order management, and shopping operations using
                advanced data structures.
              </p>
              <p className="tech-stack">
                <strong>Tech Stack:</strong> Java • AVL Tree • Linked List
              </p>
              <a className="btn" href="#">
                View Project
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <h2>About Me</h2>
          <p>
            I am a Software Engineering student interested in Full-Stack
            Development, Software Architecture, and building real-world systems.
          </p>
        </section>

        <section id="education">
          <h2>Education</h2>

          <div className="project-card">
            <h3>King Saud University</h3>

            <p>Bachelor of Software Engineering</p>

            <p>Expected Graduation: 2027</p>
          </div>
        </section>

        <section id="certifications">
          <h2>Certifications</h2>

          <div className="project-card">
            <p>AWS Cloud Practitioner (Planned)</p>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>Email: 444204742@student.ksu.edu.sa</p>
          <div>
            <a href="https://github.com/444-salma">GitHub</a>

            <a href="https://www.linkedin.com/in/salma-alnoamany-208405362/">
              LinkedIn
            </a>
          </div>
        </section>
        <footer className="footer">© 2026 Salma Alnoamany</footer>
      </main>
    </>
  );
}

export default App;
