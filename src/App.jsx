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
        "experience",
        "skills",
        "languages",
        "interests",
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
                href="#languages"
                onClick={() => scrollToSection("languages")}
                className={activeSection === "languages" ? "active" : ""}
              >
                Languages
              </a>
            </li>
            <li>
              <a
                href="#interests"
                onClick={() => scrollToSection("interests")}
                className={activeSection === "interests" ? "active" : ""}
              >
                Interests
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
          <h2 className="section-title">Experience</h2>
          <div className="experience-content">
            <div className="experience-item">
              <div className="experience-header">
                <h3>Data Analysis Intern/Trainee</h3>
                <span className="experience-period">July 2025 – Aug 2025</span>
              </div>
              <div className="experience-details">
                <p className="experience-company">Uptrail, London, UK</p>
                <ul className="experience-achievements">
                  <li>
                    Cleaned and analyzed over 300 customer sign-ups and 120+ support tickets using Pandas, uncovering acquisition trends, regional gaps, and plan preferences to inform targeted marketing strategies for SaaS and e-commerce clients
                  </li>
                  <li>
                    Built Scikit-learn logistic regression model on 1,494 streaming customers achieving 76.6% accuracy, identifying mobile usage and geographic patterns as key churn drivers for targeted retention strategies
                  </li>
                  <li>
                    Designed interactive Tableau dashboard integrating 3 datasets (15,822 records) with 6 calculated KPIs, enabling executive strategic planning through geographic mapping and customer segmentation analysis
                  </li>
                  <li>
                    Analyzed 2,992 sales records across 499 customers to identify top loyalty tiers and delivery optimization opportunities (41% delay reduction potential) through 6 data visualizations and strategic analysis
                  </li>
                </ul>
                <div className="experience-tech">
                  <span className="tech-tag">Pandas</span>
                  <span className="tech-tag">Scikit-learn</span>
                  <span className="tech-tag">Tableau</span>
                  <span className="tech-tag">Data Analysis</span>
                  <span className="tech-tag">Machine Learning</span>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Medical File Clerk</h3>
                <span className="experience-period">Sept 2022 – Nov 2022</span>
              </div>
              <div className="experience-details">
                <p className="experience-company">Obioma Specialist Hospital, Awka, Nigeria</p>
                <ul className="experience-achievements">
                  <li>
                    Managed efficient retrieval and organization of patient medical records in high-volume healthcare environment
                  </li>
                  <li>
                    Digitized over 100 paper medical records using Microsoft Excel, improving data accessibility and storage
                  </li>
                  <li>
                    Maintained accurate patient file indexes and resolved filing issues, communicating with medical staff where necessary
                  </li>
                </ul>
                <div className="experience-tech">
                  <span className="tech-tag">Microsoft Excel</span>
                  <span className="tech-tag">Data Management</span>
                  <span className="tech-tag">Healthcare Systems</span>
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
                <span className="skill-tag">C</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Haskell</span>
                <span className="skill-tag">PowerShell</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="skill-items">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Angular</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">JHipster</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Data Analysis & ML</h3>
              <div className="skill-items">
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">Scikit-learn</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Tableau</span>
                <span className="skill-tag">Data Visualization</span>
                <span className="skill-tag">Predictive Modeling</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Software</h3>
              <div className="skill-items">
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitLab</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">Vercel</span>
                <span className="skill-tag">WSL</span>
                <span className="skill-tag">DevTools</span>
                <span className="skill-tag">MS Office</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Databases & Cloud</h3>
              <div className="skill-items">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="languages">
        <div className="container">
          <h2 className="section-title">Languages</h2>
          <div className="languages-grid">
            <div className="language-item">
              <div className="language-header">
                <h3>English</h3>
                <span className="language-level fluent">Fluent</span>
              </div>
              <div className="language-details">
                <p>IELTS: 8/9 • Professional proficiency</p>
              </div>
            </div>
            <div className="language-item">
              <div className="language-header">
                <h3>Igbo</h3>
                <span className="language-level basic">Basic</span>
              </div>
              <div className="language-details">
                <p>Conversational level</p>
              </div>
            </div>
            <div className="language-item">
              <div className="language-header">
                <h3>Spanish</h3>
                <span className="language-level learning">Learning</span>
              </div>
              <div className="language-details">
                <p>Basic level • Currently improving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="interests">
        <div className="container">
          <h2 className="section-title">Interests & Hobbies</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <div className="interest-icon">⚽</div>
              <h3>Football</h3>
              <p>Passionate about the sport, both playing and following</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">🎵</div>
              <h3>Singing</h3>
              <p>Musical expression and performance</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">🌍</div>
              <h3>Language Learning</h3>
              <p>Currently learning Spanish and improving linguistic skills</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">🧠</div>
              <h3>Psychology</h3>
              <p>Understanding human behavior and cognitive processes</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">🤖</div>
              <h3>AI/ML</h3>
              <p>
                Exploring artificial intelligence and machine learning concepts
              </p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">📱</div>
              <h3>App Development</h3>
              <p>Building applications and exploring new technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <div className="container">
          <h2 className="section-title">Achievements & Awards</h2>
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
          <h2 className="section-title">Application Portfolio (Projects)</h2>
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
