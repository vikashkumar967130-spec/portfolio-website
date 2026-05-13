import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Vikash.dev</div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger */}
        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-text">
          <h1>Hello, I'm Vikash Kumar</h1>
          <h2>Frontend Developer | React.js Developer</h2>
          <p>
            I build fast, responsive and pixel-perfect user interfaces using React.js, JavaScript, HTML and CSS.
          </p>

          <button>Hire Me</button>
        </div>

        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="developer"
          />
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <h1>About Me</h1>

        <p>
          B.Voc Web Development graduate and passionate Frontend Developer skilled in React.js, HTML, CSS and JavaScript. I build responsive and accessible web applications with modern UI design and strong problem-solving skills.
        </p>
      </section>

{/* Skills */}
      <section className="skills" id="skills">
        <h1>Skills</h1>

        <div className="skill-boxes">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React.js</div>
          <div className="skill-card">Git & GitHub</div>
          <div className="skill-card">C++</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">API Integration</div>
          <div className="skill-card">Responsive Design</div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects" id="projects">
        <h1>Projects</h1>

        <div className="project-container">
          <div className="project-card">
            <h2>Personal Portfolio Website</h2>
            <p>Fully responsive portfolio using React.js and CSS.</p>
          </div>

          <div className="project-card">
            <h2>Weather App</h2>
            <p>Real-time weather application using API Integration.</p>
          </div>

          <div className="project-card">
            <h2>Ecommerce Frontend</h2>
            <p>Amazon/Flipkart inspired responsive ecommerce UI.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <h1>Contact Me</h1>

        <form>
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="vikash@gmail.com" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      {/* Experience */}
<section className="experience" id="experience">
  <h1>Experience</h1>

  <div className="experience-container">

    <div className="experience-card">
      <div className="experience-top">
        <h2>Personal Portfolio Website</h2>
        <span>2026 - Present</span>
      </div>

      <h3>React.js, HTML, CSS</h3>

      <ul>
        <li>Developed fully responsive portfolio website using React.js.</li>
        <li>Implemented responsive navbar and reusable components.</li>
        <li>Built modern UI with mobile responsive design.</li>
      </ul>
    </div>

    <div className="experience-card">
      <div className="experience-top">
        <h2>Weather App</h2>
        <span>Freelance | 2025</span>
      </div>

      <h3>React.js, API Integration</h3>

      <ul>
        <li>Created real-time weather application using API integration.</li>
        <li>Used React Hooks and Axios for API handling.</li>
        <li>Added city search and temperature conversion features.</li>
      </ul>
    </div>

  </div>
</section>

{/* Education */}
<section className="education" id="education">
  <h1>Education</h1>

  <div className="education-container">

    <div className="education-card">
      <div className="education-top">
        <h2>B.Voc in Web Development</h2>
        <span>2022 - 2025</span>
      </div>

      <p>YMCA University of Science and Technology, Faridabad</p>
      <h3>CGPA: 8.4/10</h3>
    </div>

    <div className="education-card">
      <div className="education-top">
        <h2>Senior Secondary (XII)</h2>
        <span>2022</span>
      </div>

      <p>B.K Senior Secondary School, Palwal</p>
      <h3>79.8%</h3>
    </div>

  </div>
</section>

{/* Achievements */}
<section className="achievements" id="achievements">
  <h1>Achievements</h1>

  <div className="achievement-box">
    <p>Developed 3+ responsive frontend websites using React.js.</p>

    <p>Built Ecommerce UI, Weather App and Portfolio projects.</p>

    <p>Strong understanding of React Hooks and responsive design.</p>
  </div>
</section>
      {/* Footer */}
      <footer>
        <p>© 2026 Vikash Kumar | Frontend Developer Portfolio</p>
      </footer>
    </div>
  );
}