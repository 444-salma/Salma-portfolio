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
            <a href="https://github.com/444-salma/web.git" className="btn">
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
                Construction project management platform connecting
                organizations and companies.
              </p>
              <a className="btn" href="#">
                View Project
              </a>
            </div>

            <div className="project-card">
              <div className="project-image">SP</div>
              <h3>Study Planner</h3>
              <p>
                Full-Stack study planning system with tasks, schedules and
                progress tracking.
              </p>
              <a className="btn" href="#">
                View Project
              </a>
            </div>

            <div className="project-card">
              <div className="project-image">JS</div>
              <h3>Java E-Commerce System</h3>
              <p>
                E-commerce application implemented using Java Data Structures.
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

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>Email: 444204742@student.ksu.edu.sa</p>
          <p>
            <a href="https://github.com/444-salma">GitHub</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/salma-alnoamany-208405362/">
              LinkedIn
            </a>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
