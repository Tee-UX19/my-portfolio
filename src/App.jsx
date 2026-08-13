import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        "languages",
        "achievements",
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
                href="#achievements"
                onClick={() => scrollToSection("achievements")}
                className={activeSection === "achievements" ? "active" : ""}
              >
                Achievements
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
            <h2 className="section-title">About Me</h2>
          </div>
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
          <div className="section-header">
            <span className="section-marker">02 / education</span>
            <h2 className="section-title">Education</h2>
          </div>
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
                    GPA: 3.9/4.25 • Expected First Class
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
                    Average: 85% • Mathematics: 90% • IT: 88% • Extended Project: 72%
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
                  <span className="tech-tag">PySpark</span>
                  <span className="tech-tag">GCP</span>
                  <span className="tech-tag">BigQuery</span>
                  <span className="tech-tag">Apache Airflow</span>
                  <span className="tech-tag">ETL Pipelines</span>
                  <span className="tech-tag">Dataproc</span>
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
                    Cleaned and analysed 2,992 sales records across 499 customers to identify top loyalty tiers and delivery optimisation opportunities (41% delay reduction potential) through 6 data visualisations and strategic analysis
                  </li>
                  <li>
                    Developed Scikit-learn logistic regression model on 1,494 streaming customers achieving 76.6% accuracy, identifying mobile usage and geographic patterns as key churn drivers for targeted retention strategies
                  </li>
                  <li>
                    Created interactive Tableau dashboard integrating 3 datasets (15,822 records) with 6 calculated KPIs, enabling executive strategic planning through geographic mapping and customer segmentation analysis
                  </li>
                </ul>
                <div className="experience-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Pandas</span>
                  <span className="tech-tag">Scikit-learn</span>
                  <span className="tech-tag">Tableau</span>
                  <span className="tech-tag">Data Analysis</span>
                  <span className="tech-tag">Machine Learning</span>
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
              <h3>Data Engineering & ML</h3>
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
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Bootstrap</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud & Databases</h3>
              <div className="skill-items">
                <span className="skill-tag">BigQuery</span>
                <span className="skill-tag">Apache Airflow</span>
                <span className="skill-tag">GCP</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Interests Section - Combined */}
      <section id="languages" className="languages-interests-compact">
        <div className="container">
          <div className="compact-grid">
            <div className="compact-item">
              <h3 className="compact-title">Languages</h3>
              <p className="compact-content">
                <span className="highlight-text">English</span> (C1 - IELTS 8/9) •
                <span className="highlight-text"> Igbo</span> (Native) •
                <span className="highlight-text"> Spanish</span> (A1)
              </p>
            </div>
            <div className="compact-item">
              <h3 className="compact-title">Interests</h3>
              <p className="compact-content">
                Football • AI/ML • App Development • Language Learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <div className="container">
          <div className="section-header">
            <span className="section-marker">05 / achievements</span>
            <h2 className="section-title">Achievements & Awards</h2>
          </div>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <h3>UG Outstanding Achievement Award</h3>
              <p className="achievement-year">2023/24</p>
              <p className="achievement-description">
                Recognized for outstanding academic performance in Computer Science with Software Engineering (SRM Funded)
              </p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🥈</div>
              <h3>Silver Medallist - Physics Olympiad</h3>
              <p className="achievement-year">State Level</p>
              <p className="achievement-description">
                Achieved silver medal in competitive state-level Physics Olympiad competition
              </p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🥈</div>
              <h3>Silver Medallist - Mathematics Olympiad</h3>
              <p className="achievement-year">State Level</p>
              <p className="achievement-description">
                Achieved silver medal in competitive state-level Mathematics Olympiad competition
              </p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">⭐</div>
              <h3>Top 3 Graduating Student</h3>
              <p className="achievement-year">British Spring College</p>
              <p className="achievement-description">
                Graduated among top 3 students in the class with distinction in Further Mathematics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-marker">06 / projects</span>
            <h2 className="section-title">Application Portfolio (Projects)</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>Grocery App</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Grocery App Prototype</h3>
                <p>
                  Collaborated as a team to create a shared grocery shopping app
                  using React and Bootstrap for the frontend with Express for
                  the backend. Implemented version control and CI/CD using
                  GitHub and GitHub Actions.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Bootstrap</span>
                  <span>Express</span>
                  <span>GitHub Actions</span>
                  <span>CI/CD</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    GitHub
                  </a>
                  <a href="#" className="project-link">
                    Documentation
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>Network Security</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Network Firewall Program</h3>
                <p>
                  Designed multithreaded firewall server using pthreads with mutex synchronization, supporting concurrent client connections and dual-mode operation (interactive CLI and IPv6 network server). Implemented rule management system with linked-list data structures for Add/Delete/List/Check operations on IP range and port range filtering rules. Engineered advanced IP validation using inet_pton() and network byte order conversions, enabling precise IP range matching and connection acceptance/rejection decisions.
                </p>
                <div className="project-tech">
                  <span>C</span>
                  <span>Pthreads</span>
                  <span>Networking</span>
                  <span>IPv6</span>
                  <span>System Programming</span>
                  <span>Data Structures</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    GitHub
                  </a>
                  <a href="#" className="project-link">
                    Report
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>Campus Events</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Campus Events App</h3>
                <p>
                  Developed a full-stack web application for university students to discover and review campus events and societies as part of a 7-member team. Led CI/CD pipeline implementation using Azure for deployment, Docker containerization, and GitHub Actions runners. Enhanced user experience by developing responsive design for mobile screen sizes and other accessibility features. Architected RESTful APIs with Spring Boot and resolved database migration issues using Liquibase.
                </p>
                <div className="project-tech">
                  <span>JHipster</span>
                  <span>Spring Boot</span>
                  <span>Angular</span>
                  <span>PostgreSQL</span>
                  <span>Azure</span>
                  <span>Docker</span>
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
          <div className="section-header">
            <span className="section-marker">07 / contact</span>
            <h2 className="section-title">Get In Touch</h2>
          </div>
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
                  href="tel:+447961585772"
                  className="contact-link"
                >
                  <span>📱</span>
                  +44 7961 585 772
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
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
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
