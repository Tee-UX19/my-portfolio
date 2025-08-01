import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (!isLoading) {
      setIsVisible(true);

      // Intersection Observer for section tracking
      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "projects",
        "contact",
      ];
      const observers = sections.map((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setActiveSection(sectionId);
                }
              });
            },
            { threshold: 0.6 }
          );
          observer.observe(element);
          return observer;
        }
        return null;
      });

      return () => {
        observers.forEach((observer) => observer?.disconnect());
      };
    }
  }, [isLoading]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="App">
      <ParticleBackground />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">TJ</div>
          <ul className="nav-menu">
            <li>
              <a
                href="#home"
                onClick={() => scrollToSection("home")}
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => scrollToSection("about")}
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={() => scrollToSection("education")}
                className={activeSection === "education" ? "active" : ""}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => scrollToSection("skills")}
                className={activeSection === "skills" ? "active" : ""}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => scrollToSection("projects")}
                className={activeSection === "projects" ? "active" : ""}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => scrollToSection("contact")}
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`hero ${isVisible ? "fade-in" : ""}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Timothy-Joseph</span>
              <br />
              <span className="gradient-text">Godwin</span>
            </h1>
            <p className="hero-subtitle">
              Computer Science Student & Aspiring Software Engineer
            </p>
            <p className="hero-description">
              M.Eng Computer Science student at University of Birmingham,
              passionate about software engineering and building innovative
              applications
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>
              <button
                className="btn-secondary"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm pursuing an M.Eng in Computer Science with Software
                Engineering at the University of Birmingham, having achieved a
                72% in my first year. My journey includes international study
                experiences and strong academic foundations in mathematics and
                sciences.
              </p>
              <p>
                I enjoy learning new technologies and applying theoretical
                knowledge to practical projects. I'm particularly interested in
                full-stack development, artificial intelligence, and creating
                user-friendly applications that solve real-world problems.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">72%</span>
                  <span className="stat-label">Year 1 Average</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">M.Eng</span>
                  <span className="stat-label">Computer Science</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">97th</span>
                  <span className="stat-label">SAT Percentile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-content">
            <div className="education-item">
              <div className="education-header">
                <h3>M.Eng Computer Science with Software Engineering</h3>
                <span className="education-period">2023 - Present</span>
              </div>
              <div className="education-details">
                <p className="education-institution">
                  University of Birmingham
                </p>
                <div className="education-achievement">
                  <span className="grade-highlight">
                    Expected First Class • Year 1: 72%
                  </span>
                </div>
                <p className="education-description">
                  Master of Engineering programme combining theoretical computer
                  science with practical software engineering applications.
                </p>
                <div className="coursework">
                  <span className="course-tag">Full Stack App Development</span>
                  <span className="course-tag">
                    Object Oriented Programming
                  </span>
                  <span className="course-tag">Data Structures</span>
                  <span className="course-tag">Software Engineering</span>
                  <span className="course-tag">Functional Programming</span>
                  <span className="course-tag">Artificial Intelligence</span>
                </div>
              </div>
            </div>

            <div className="education-item">
              <div className="education-header">
                <h3>Foundation Certificate in Science and Engineering</h3>
                <span className="education-period">2023</span>
              </div>
              <div className="education-details">
                <p className="education-institution">
                  Kaplan International College, London
                </p>
                <div className="education-achievement">
                  <span className="grade-highlight">
                    Mathematics: 90% • IT: 88% • Extended Project: 72%
                  </span>
                </div>
                <p className="education-description">
                  Preparatory programme providing foundation knowledge for
                  engineering and computer science studies.
                </p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-header">
                <h3>IGCSE & Additional Qualifications</h3>
                <span className="education-period">2016 - 2022</span>
              </div>
              <div className="education-details">
                <p className="education-institution">
                  British Spring College, Awka
                </p>
                <div className="education-achievement">
                  <span className="grade-highlight">
                    5 A*/A Grades • SAT: 1390 (97th percentile) • IELTS: 8/9
                  </span>
                </div>
                <div className="coursework">
                  <span className="course-tag">Mathematics A*</span>
                  <span className="course-tag">Biology A*</span>
                  <span className="course-tag">Chemistry A*</span>
                  <span className="course-tag">Physics A*</span>
                  <span className="course-tag">English A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-items">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">C</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Technologies</h3>
              <div className="skill-items">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Currently Learning</h3>
              <div className="skill-items">
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Spring Boot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Academic & Personal Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>Portfolio Website</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Personal Portfolio Website</h3>
                <p>
                  A responsive portfolio website built with React and modern
                  CSS. Features include smooth animations, particle background
                  effects, and a clean, professional design.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    Live Demo
                  </a>
                  <a href="#" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>University Project</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Data Structures Implementation</h3>
                <p>
                  Academic project implementing various data structures and
                  algorithms in Java. Includes binary trees, hash tables, and
                  sorting algorithms with performance analysis.
                </p>
                <div className="project-tech">
                  <span>Java</span>
                  <span>Algorithms</span>
                  <span>Data Structures</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    Report
                  </a>
                  <a href="#" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>Learning Project</span>
                </div>
              </div>
              <div className="project-content">
                <h3>To-Do List Application</h3>
                <p>
                  A simple yet functional to-do list application built while
                  learning React. Features include local storage, task
                  filtering, and a responsive design.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Local Storage</span>
                  <span>CSS3</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    Live Demo
                  </a>
                  <a href="#" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's connect!</h3>
              <p>
                I'm always eager to learn from others and discuss technology,
                programming, or potential collaboration opportunities. Feel free
                to reach out if you'd like to connect!
              </p>
              <div className="contact-links">
                <a
                  href="mailto:tj.godwin1904@gmail.com"
                  className="contact-link"
                >
                  <span>📧</span>
                  tj.godwin1904@gmail.com
                </a>
                <a
                  href="http://www.linkedin.com/in/timothy-joseph-godwin-0b4bb2292"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>💼</span>
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com/Tee-UX19/Tee-UX19"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>🔗</span>
                  GitHub Profile
                </a>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Timothy Joseph Godwin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
