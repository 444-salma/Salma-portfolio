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
          <p className="small-title">Portfolio</p>
          <h1>
            Salma <span>Alnoamany</span>
          </h1>
          <h2>Software Engineering Student</h2>
          <p>
            Passionate about building clean, scalable and impactful web
            applications using React, Node.js and Databases.
          </p>
          <a className="btn" href="#projects">
            View Projects
          </a>
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
          <p>GitHub | LinkedIn</p>
        </section>
      </main>
    </>
  );
}

export default App;
