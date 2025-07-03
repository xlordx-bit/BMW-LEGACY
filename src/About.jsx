import React from 'react';
import { motion } from 'framer-motion';
import './App.scss';

const About = () => {
  return (
    <div className="about-container">
      {/* Page Header with Animation */}
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About <span className="yellow-text">BMW</span></h1>
        <div className="header-line"></div>
      </motion.div>
      
      {/* Introduction Section */}
      <section className="about-intro">
        <motion.div 
          className="intro-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h2>The Spirit of Excellence</h2>
          <p className="intro-text">
            For over a century, BMW has been at the forefront of automotive excellence, 
            combining German engineering precision with innovative design to create 
            the ultimate driving machines. Our commitment to performance, luxury, 
            and innovation has established BMW as one of the world's most prestigious 
            automotive manufacturers.
          </p>
        </motion.div>
        
        <motion.div 
          className="intro-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="image-container">
            <div className="image-frame"></div>
            <img src="/images/5.webp" alt="BMW Heritage" className="about-img" />
          </div>
        </motion.div>
      </section>
      
      {/* History Timeline Section */}
      <section className="history-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our <span className="yellow-text">History</span>
        </motion.h2>
        
        <div className="history-timeline">
          <motion.div 
            className="timeline-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="timeline-year">1916</div>
            <div className="timeline-content">
              <h3>The Beginning</h3>
              <p>
                Bayerische Motoren Werke GmbH (BMW) was founded in Munich, Germany, 
                initially manufacturing aircraft engines during World War I.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="timeline-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="timeline-year">1923</div>
            <div className="timeline-content">
              <h3>First Motorcycle</h3>
              <p>
                BMW produced its first motorcycle, the R32, featuring the iconic boxer 
                engine design that would become a signature of BMW motorcycles.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="timeline-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="timeline-year">1928</div>
            <div className="timeline-content">
              <h3>Automotive Era Begins</h3>
              <p>
                BMW entered the automobile market after acquiring the Fahrzeugfabrik 
                Eisenach, which produced the Dixi car, based on the Austin 7.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="timeline-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="timeline-year">1972</div>
            <div className="timeline-content">
              <h3>BMW Motorsport</h3>
              <p>
                BMW Motorsport GmbH was established, marking the beginning of 
                BMW's commitment to high-performance engineering and racing.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="timeline-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
          >
            <div className="timeline-year">2022</div>
            <div className="timeline-content">
              <h3>Electric Revolution</h3>
              <p>
                BMW continues to innovate with its expanding electric vehicle lineup, 
                combining sustainable mobility with the performance and luxury 
                that defines the brand.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="values-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our <span className="yellow-text">Values</span>
        </motion.h2>
        
        <div className="values-grid">
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(255,204,0,0.2)" }}
          >
            <div className="value-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Performance</h3>
            <p>Setting the standard for driving dynamics and engineering excellence.</p>
          </motion.div>
          
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(255,204,0,0.2)" }}
          >
            <div className="value-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Innovation</h3>
            <p>Pushing boundaries with forward-thinking technology and design.</p>
          </motion.div>
          
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(255,204,0,0.2)" }}
          >
            <div className="value-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <h3>Excellence</h3>
            <p>Committed to the highest standards in every vehicle we create.</p>
          </motion.div>
          
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(255,204,0,0.2)" }}
          >
            <div className="value-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Sustainability</h3>
            <p>Driving toward a more sustainable future through eco-friendly innovations.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
