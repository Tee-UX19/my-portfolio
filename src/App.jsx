import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";
import { Analytics } from "@vercel/analytics/react"

const WEB3FORMS_ACCESS_KEY = "726b7bf7-32b6-40f1-b6d1-ef7b71186a42";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");

  useEffect(() => {
    if (!isLoading) {
      setIsVisible(true);

      // Intersection Observer for section tracking
      const sections = [
        "home",
        "about",
        "education",
        "experience",
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
    setIsMenuOpen(false);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.target),
      });
      const result = await response.json();

      if (result.success) {
        setFormStatus("success");
        event.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="App">
      <ParticleBackground />
      <Analytics />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">TJ</div>
          <button
            type="button"
            className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul id="primary-navigation" className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
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
                href="#experience"
                onClick={() => scrollToSection("experience")}
                className={activeSection === "experience" ? "active" : ""}
              >
                Experience
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
            <span className="hero-eyebrow">$ whoami</span>
            <h1 className="hero-title">
              <span className="accent-text">Timothy-Joseph</span>
              <br />
              <span className="accent-text">Godwin</span>
            </h1>
            <p className="hero-subtitle">
              Software Engineer: Data Engineering &amp; Full-Stack Development
            </p>
            <p className="hero-description">
              M.Eng Computer Science with Software Engineering, University of
              Birmingham (final year). Currently open to software
              engineering and other tech roles.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>
              <a
                href="/Timothy-Joseph CV.pdf"
                download="Timothy-Joseph-Godwin-CV.pdf"
                className="btn-secondary"
              >
                Download CV
              </a>
              <button
                className="btn-secondary"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="profile-photo-container">
              <img
                src="/images/profile/profile-photo.jpg"
                alt="Timothy Joseph Godwin"
                className="profile-photo"
              />
            </div>
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
          <div className="section-header">
            <span className="section-marker">01 / about</span>
            <h2 className="section-title">About</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Software engineer focused on data engineering and full-stack
                development. I'm in my final year of an M.Eng in Computer
                Science with Software Engineering at the University of
                Birmingham.
              </p>
              <p>
                I build production data pipelines, distributed processing
                systems, and full-stack web apps. Currently, I'm working on
                AI/ML projects and learning DevOps through AWS certification
                courses.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">73%</span>
                  <span className="stat-label">Third Year Average</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4.0/4.25</span>
                  <span className="stat-label">GPA · Expected First</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Final Year</span>
                  <span className="stat-label">M.Eng Computer Science</span>
                </div>
              </div>
              <p className="about-award">
                <span className="award-label">Award</span>
                2023/24 UG Outstanding Achievement Award (SRM Funded)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <div className="section-header">
            <span className="section-marker">02 / education</span>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="education-content">
            <div className="education-item">
              <div className="education-header">
                <h3>M.Eng Computer Science with Software Engineering</h3>
                <span className="education-period">Sept 2023 – Present</span>
              </div>
              <div className="education-details">
                <p className="education-institution">
                  University of Birmingham · Birmingham, UK
                </p>
                <div className="education-achievement">
                  <span className="grade-highlight">
                    GPA: 4.0/4.25 • Expected First Class • Final Year
                  </span>
                </div>
                <div className="coursework">
                  <span className="course-tag">Data Structures &amp; Algorithms</span>
                  <span className="course-tag">
                    Operating Systems &amp; Systems Programming
                  </span>
                  <span className="course-tag">Machine Learning</span>
                  <span className="course-tag">Neural Computation</span>
                  <span className="course-tag">Natural Language Processing</span>
                  <span className="course-tag">Intelligent Software Engineering</span>
                  <span className="course-tag">Team Project</span>
                </div>
              </div>
            </div>

            <div className="education-item">
              <div className="education-header">
                <h3>Foundation Certificate in Science and Engineering</h3>
                <span className="education-period">Jan 2023 – June 2023</span>
              </div>
              <div className="education-details">
                <p className="education-institution">
                  Kaplan International College, London · London, UK
                </p>
                <div className="education-achievement">
                  <span className="grade-highlight">
                    Average: 85% • Mathematics: 90% • IT: 88% • Extended Project: 72%
                  </span>
                </div>
                <div className="coursework">
                  <span className="course-tag">Mathematics</span>
                  <span className="course-tag">Information Technology</span>
                  <span className="course-tag">Extended Project (Research)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <span className="section-marker">03 / experience</span>
            <h2 className="section-title">Experience</h2>
          </div>
          <div className="experience-content">
            <div className="experience-item">
              <div className="experience-header">
                <h3>Data Engineering Intern</h3>
                <span className="experience-period">Sept 2025 – Oct 2025</span>
              </div>
              <div className="experience-details">
                <p className="experience-company">London Success Academy, London, UK</p>
                <ul className="experience-achievements">
                  <li>
                    Built enterprise-scale ETL pipeline processing 300,000+ records using Python, Apache Spark, and GCP, achieving 80% storage optimisation through Parquet format with real-time API integration
                  </li>
                  <li>
                    Orchestrated production data workflows using Apache Airflow on Google Cloud Composer with automated scheduling, BigQuery metadata tracking, and data validation ensuring 99%+ pipeline reliability
                  </li>
                  <li>
                    Designed BigQuery data warehouse with partitioned/clustered tables processing $15.3M transaction volume across 5 currencies, implementing query optimisation reducing costs by 80% through partition pruning
                  </li>
                  <li>
                    Deployed distributed Apache Spark processing on GCP Dataproc cluster, scaling from single-machine to 3-node architecture, processing 95,000+ clickstream events and 50,000+ financial transactions with zero data loss
                  </li>
                </ul>
                <div className="experience-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Apache Spark</span>
                  <span className="tech-tag">GCP</span>
                  <span className="tech-tag">BigQuery</span>
                  <span className="tech-tag">Dataproc</span>
                  <span className="tech-tag">Apache Airflow</span>
                  <span className="tech-tag">Parquet</span>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Data Analysis Intern</h3>
                <span className="experience-period">July 2025 – Aug 2025</span>
              </div>
              <div className="experience-details">
                <p className="experience-company">Uptrail, London, UK</p>
                <ul className="experience-achievements">
                  <li>
                    Analysed 2,992 sales records across 499 customers to surface loyalty and delivery-optimisation opportunities (41% delay-reduction potential)
                  </li>
                  <li>
                    Built a Scikit-learn logistic regression churn model (76.6% accuracy) identifying mobile usage and geography as key churn drivers
                  </li>
                  <li>
                    Created an interactive Tableau dashboard integrating 3 datasets (15,822 records) with 6 KPIs for executive planning
                  </li>
                </ul>
                <div className="experience-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Scikit-learn</span>
                  <span className="tech-tag">Pandas</span>
                  <span className="tech-tag">Tableau</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-marker">04 / skills</span>
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-items">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">Haskell</span>
                <span className="skill-tag">PowerShell</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Data Engineering &amp; ML</h3>
              <div className="skill-items">
                <span className="skill-tag">PySpark</span>
                <span className="skill-tag">Apache Spark</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Scikit-learn</span>
                <span className="skill-tag">Tableau</span>
                <span className="skill-tag">ETL Pipelines</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Web Technologies</h3>
              <div className="skill-items">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Angular</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud &amp; Infra</h3>
              <div className="skill-items">
                <span className="skill-tag">GCP</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">GitHub Actions</span>
                <span className="skill-tag">Apache Airflow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-marker">05 / projects</span>
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>Campus Events</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Campus Events Web Application</h3>
                <p>
                  Full-stack web app for university students to discover and
                  review campus events and societies, built with a 7-member
                  Agile team.
                </p>
                <ul className="experience-achievements">
                  <li>
                    Owned DevOps: set up the Azure VM, configured GitHub
                    Actions runners, served as repo admin, and tagged commits
                    to deployment versions
                  </li>
                  <li>
                    Handled database migrations (Liquibase/XML) and resolved
                    migration issues
                  </li>
                  <li>
                    Built the backend and frontend for my own JDL entity
                    (Tags) end-to-end
                  </li>
                </ul>
                <div className="project-tech">
                  <span>JHipster</span>
                  <span>Angular</span>
                  <span>Spring Boot</span>
                  <span>PostgreSQL</span>
                  <span>Docker</span>
                  <span>Azure</span>
                  <span>GitHub Actions</span>
                </div>
                <div className="project-links">
                  <span className="project-link-note">Private repository</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>Network Firewall</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Network Firewall Program</h3>
                <p>
                  Multithreaded firewall server in C, built to explore
                  concurrent systems programming and low-level networking.
                </p>
                <ul className="experience-achievements">
                  <li>
                    Built a multithreaded firewall server using pthreads with
                    mutex synchronisation, supporting concurrent clients and
                    dual-mode operation (interactive CLI + IPv6 network
                    server)
                  </li>
                  <li>
                    Implemented a linked-list rule engine for Add/Delete/List/Check
                    on IP and port filtering
                  </li>
                  <li>
                    Wrote IP validation with inet_pton() and byte conversions
                    for precise range matching
                  </li>
                </ul>
                <div className="project-tech">
                  <span>C</span>
                  <span>pthreads</span>
                  <span>Networking</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/Tee-UX19/ex1-OSSP"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub →
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
          <div className="section-header">
            <span className="section-marker">06 / contact</span>
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's connect!</h3>
              <p>
                I'm open to software engineering and any tech roles. Feel
                free to reach out if you'd like to talk about an opportunity
                or a project.
              </p>
              <div className="contact-links">
                <a
                  href="mailto:tj.godwin1904@gmail.com"
                  className="contact-link"
                >
                  <span>Email</span>
                  tj.godwin1904@gmail.com
                </a>
                <a
                  href="tel:+447961585772"
                  className="contact-link"
                >
                  <span>Phone</span>
                  +44 7961 585 772
                </a>
                <a
                  href="https://linkedin.com/in/timothy-joseph-godwin"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span>
                  timothy-joseph-godwin
                </a>
                <a
                  href="https://github.com/Tee-UX19"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span>
                  Tee-UX19
                </a>
                <a
                  href="/Timothy-Joseph CV.pdf"
                  download="Timothy-Joseph-Godwin-CV.pdf"
                  className="contact-link"
                >
                  <span>Résumé</span>
                  Download CV (PDF)
                </a>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleContactSubmit}>
                <input
                  type="hidden"
                  name="access_key"
                  value={WEB3FORMS_ACCESS_KEY}
                />
                <input type="hidden" name="subject" value="New message from portfolio contact form" />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="form-honeypot"
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    disabled={formStatus === "sending"}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    disabled={formStatus === "sending"}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    disabled={formStatus === "sending"}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending" ? "Sending…" : "Send Message"}
                </button>
                {formStatus === "success" && (
                  <p className="form-status form-status-success">
                    Message sent. Thanks, I'll get back to you soon.
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="form-status form-status-error">
                    Something went wrong? Email me directly at{" "}
                    tj.godwin1904@gmail.com instead.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Timothy-Joseph Godwin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
