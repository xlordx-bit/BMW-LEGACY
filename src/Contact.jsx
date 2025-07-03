import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.scss';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredModel: '',
    preferredContact: 'email'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    
    if (formData.phone && !/^\+?[0-9]{8,15}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      newErrors.phone = "Invalid phone number";
    }
    
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Clear any previous errors
    setErrors({});
    
    // Submit form logic would go here (API call, etc.)
    // For now, just simulate success
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredModel: '',
        preferredContact: 'email'
      });
      
      // Reset submission state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  // Simple loading animation
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="simple-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="contact-container">
      {/* Header */}      <motion.div 
        className="contact-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Contact <span className="yellow-text">Us</span></h1>
        <p className="contact-subtitle">Fan-made BMW appreciation website</p>
        <div className="disclaimer">
          <i className="fas fa-info-circle"></i>
          <p>This is a fan website created to showcase appreciation for BMW. Not affiliated with BMW Group.</p>
        </div>
      </motion.div>

      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >          <div className="info-block">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info-text">
              <h3>About This Project</h3>
              <p>This is a fan project created</p>
              <p>to showcase BMW design</p>
              <p>and present a modern UI experience</p>
            </div>
          </div>
          
          <div className="info-block">
            <div className="info-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="info-text">
              <h3>Technologies Used</h3>
              <p>React.js + Framer Motion</p>
              <p>SCSS for styling</p>
              <p>Optimized for performance</p>
            </div>
          </div>
          
          <div className="info-block">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>            <div className="info-text">
              <h3>Creator Email</h3>
              <p>rakagarwal098@gmail.com</p>
              <p>Feel free to contact</p>
              <p>for project inquiries</p>
            </div>
          </div>
            <div className="social-links">
            <h3>Project Links</h3>
            <div className="social-icons">              <a href="https://github.com/xlordx-bit" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>              <a href="https://x.com/Pranjalxlordx" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/pranjal-agarwal-a90371309" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {isSubmitted ? (
            <div className="form-success">
              <i className="fas fa-check-circle"></i>
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. Our team will contact you shortly.</p>
            </div>
          ) : (            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Share Your Feedback</h2>
              <div className="form-note">
                <i className="fas fa-info-circle"></i>
                <p>This is a demo form for the fan project. No data will be sent or stored.</p>
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Your Name<span className="required">*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email<span className="required">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="Optional"
                  />
                  {errors.phone && <p className="error-text">{errors.phone}</p>}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange}
                  placeholder="Website feedback"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="preferredModel">Favorite BMW Model</label>
                <select 
                  id="preferredModel" 
                  name="preferredModel" 
                  value={formData.preferredModel} 
                  onChange={handleChange}
                >
                  <option value="">Select Your Favorite Model</option>
                  <option value="1 Series">BMW 1 Series</option>
                  <option value="2 Series">BMW 2 Series</option>
                  <option value="3 Series">BMW 3 Series</option>
                  <option value="4 Series">BMW 4 Series</option>
                  <option value="5 Series">BMW 5 Series</option>
                  <option value="7 Series">BMW 7 Series</option>
                  <option value="8 Series">BMW 8 Series</option>
                  <option value="X Series">BMW X Series</option>
                  <option value="M Series">BMW M Series</option>
                  <option value="i Series">BMW i Series</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="preferredContact">Preferred Contact Method</label>
                <div className="radio-group">
                  <div className="radio-option">
                    <input 
                      type="radio" 
                      id="preferEmail" 
                      name="preferredContact" 
                      value="email" 
                      checked={formData.preferredContact === 'email'} 
                      onChange={handleChange}
                    />
                    <label htmlFor="preferEmail">Email</label>
                  </div>
                  
                  <div className="radio-option">
                    <input 
                      type="radio" 
                      id="preferPhone" 
                      name="preferredContact" 
                      value="phone" 
                      checked={formData.preferredContact === 'phone'} 
                      onChange={handleChange}
                    />
                    <label htmlFor="preferPhone">Phone</label>
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message<span className="required">*</span></label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <p className="error-text">{errors.message}</p>}
              </div>
              
              <div className="form-footer">
                <button type="submit" className="submit-button">
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>      {/* Project Showcase Section */}
      <motion.div 
        className="project-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2>About This Project</h2>
        <div className="project-container">
          <div className="project-details">
            <div className="project-info">
              <i className="fas fa-laptop-code"></i>
              <h3>Educational Purpose</h3>
              <p>This website was created as a practice project for showcasing modern web development techniques.</p>
            </div>
            <div className="project-info">
              <i className="fas fa-palette"></i>
              <h3>Design Inspiration</h3>
              <p>The design is inspired by BMW's luxury aesthetic while exploring creative UI implementations.</p>
            </div>
            <div className="project-info">
              <i className="fas fa-edit"></i>
              <p>All content on this website is fictional and for demonstration purposes only.</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Disclaimer CTA */}
      <motion.div 
        className="disclaimer-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="cta-content">
          <h2>Fan Made Website</h2>
          <p>This is a fan project for educational purposes. For official BMW information, please visit the official BMW website.</p>
          <a href="https://www.bmw.com" target="_blank" rel="noopener noreferrer" className="cta-button">
            <span>Official BMW Website</span>
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
