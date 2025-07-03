import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.scss';
import About from './About';
import Models from './Models';
import Gallery from './Gallery';
import Contact from './Contact';

// Home page component
const Home = () => {
  // Function to handle scrolling to the achievements section
  const scrollToAchievements = () => {
    // Smooth scroll with a slight delay for visual effect
    setTimeout(() => {
      document.getElementById('bmw-achievements').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 300);
  };
  
  return (
  <div className="home-container">
    <motion.div
      className="hero-bg"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
    
    {/* Overlay with BMW grid pattern */}
    <div className="grid-overlay"></div>
    
    {/* Video container on the left side - fixed to not move */}
    <div className="video-container">
      <div className="video-frame">
        <video autoPlay loop muted playsInline className="bmw-video">
          <source src="/images/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
    </div>
    
    {/* BMW logo animation */}
   
    
    {/* Hero content */}
    <div className="hero-content">
      {/* Key button moved to the top */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <motion.div 
          className="key-button-container"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToAchievements}
        >
          <div className="key-row">
            <img src="/images/key.png" alt="BMW Key" className="key-image" />
            <div className="key-text">
              <span className="click-here">Click here</span>
              <span className="arrow">→</span>
            </div>
          </div>
          <div className="key-pulse"></div>
          <span className="key-cta">Unlock Achievements</span>
        </motion.div>
      </motion.div>
      
      <motion.p
        className="hero-subtitle top-subtitle"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        POWER. PRECISION. PERFORMANCE.
      </motion.p>
      
      <motion.div
        className="cta-container"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <Link to="/models" className="cta-button primary">
          EXPLORE MODELS
          <span className="button-arrow">→</span>
        </Link>
        <Link to="/about" className="cta-button secondary">
          LEARN MORE
        </Link>
      </motion.div>
      
      {/* Ultimate Driving Machine text moved down */}
      <motion.h1
        className="hero-title smaller-title" 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        THE ULTIMATE <br /><span className="yellow-text">DRIVING MACHINE</span>
      </motion.h1>
    </div>
    
    {/* Yellow accent line */}
    <div className="accent-line"></div>
    
    {/* BMW Achievements Section */}
    <section id="bmw-achievements" className="achievements-section">
      <div className="achievements-container">
        <motion.h2 
          className="achievements-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          BMW <span className="yellow-text">ACHIEVEMENTS</span>
        </motion.h2>
        
        <div className="achievements-content">
          {/* Left side: Timeline of achievements */}
          <motion.div 
            className="achievements-timeline"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>1916</h3>
                <p>Founding of Bayerische Motoren Werke GmbH in Munich, Germany</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>1972</h3>
                <p>Introduction of BMW Motorsport GmbH, launching BMW's racing legacy</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>1986</h3>
                <p>First all-wheel drive system introduced in the BMW 325i X</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>2013</h3>
                <p>Launch of the revolutionary BMW i division with the i3 electric vehicle</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>2022</h3>
                <p>Introduction of the BMW iX: Full electric flagship SUV with 600+ km range</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right side: Video */}
          <motion.div 
            className="achievements-video"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="video-wrapper">
              <video autoPlay loop muted playsInline className="achievement-video">
                <source src="/images/3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-shine"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </div>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bmw-footer">
    <div className="footer-bg"></div>
    <div className="footer-content">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>BMW</h3>
          <div className="footer-links">
            <a href="#">Our Heritage</a>
            <a href="#">Innovation</a>
            <a href="#">Sustainability</a>
            <a href="#">Careers</a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>Discover</h3>
          <div className="footer-links">
            <a href="#">Models</a>
            <a href="#">Electric Vehicles</a>
            <a href="#">Concept Cars</a>
            <a href="#">Motorsport</a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>Services</h3>
          <div className="footer-links">
            <a href="#">Financial Services</a>
            <a href="#">Service & Repairs</a>
            <a href="#">Warranty</a>
            <a href="#">Accessories</a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>Contact</h3>
          <div className="footer-links">
            <a href="#">Find a Dealer</a>
            <a href="#">Test Drive</a>
            <a href="#">Support</a>
            <a href="#">Newsletter</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="BMW Logo" />
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} BMW Group. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

// Layout component that conditionally renders the footer
const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-logo">
          <Link to="/">
            <img src="/images/logo.png" alt="BMW Logo" className="nav-logo-image" />
            <span className="nav-logo-text">BMW</span>
          </Link>
        </div>
        
        <div className="nav-links">
          <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
            Home
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>
            About
          </NavLink>
          <NavLink to="/models" className={({isActive}) => isActive ? "active" : ""}>
            Models
          </NavLink>
          <NavLink to="/gallery" className={({isActive}) => isActive ? "active" : ""}>
            Gallery
          </NavLink>
        </div>
        
        <div className="nav-cta">
          <Link to="/contact" className="nav-button">Contact Us</Link>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<Models />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer - only rendered on the home page */}
      {isHomePage && <Footer />}
    </div>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;