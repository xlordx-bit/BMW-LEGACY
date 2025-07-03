import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.scss';

const Models = () => {
  // Model categories state
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedModel, setSelectedModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Model series data
  const modelCategories = [
    { id: 'all', name: 'All Models' },
    { id: 'sedan', name: 'Sedans & Coupes' },
    { id: 'suv', name: 'SUVs & Crossovers' },
    { id: 'electric', name: 'Electric Vehicles' },
    { id: 'luxury', name: 'Luxury Models' },
    { id: 'performance', name: 'M Performance' }
  ];
    // BMW models dataset with local images
  const bmwModels = [
    {
      id: '3-series',
      name: 'BMW 3 Series',
      category: 'sedan',
      year: '2023',
      image: '/images/11.jpg',
      description: 'The iconic sports sedan that combines dynamic performance with luxury comfort.',
      features: [
        'Turbocharged engines with up to 382 horsepower',
        'Available xDrive all-wheel drive system',
        'Live Cockpit Professional with digital displays',
        'Intelligent personal assistant',
        'Active driving assistant with numerous safety features'
      ],
      specs: {
        engine: '2.0L 4-cylinder / 3.0L 6-cylinder',
        horsepower: '255-382 HP',
        acceleration: '5.6-4.1 seconds (0-60 mph)',
        topSpeed: '155 mph (electronically limited)'
      },
      technology: [
        'BMW Intelligent Personal Assistant',
        'Adaptive LED headlights',
        'Driving Assistant Professional',
        'Harman Kardon surround sound system'
      ]
    },
    {      id: '5-series',
      name: 'BMW 5 Series',
      category: 'sedan',
      year: '2023',
      image: '/images/12.jpg',
      description: 'Executive sedan blending business-class comfort with driving pleasure.',
      features: [
        'Mild hybrid technology for enhanced efficiency',
        'Gesture control and voice commands',
        'Remote software upgrades',
        'Parking Assistant Plus with surround view',
        'Adaptive suspension for optimal comfort and handling'
      ],
      specs: {
        engine: '2.0L 4-cylinder / 3.0L 6-cylinder / 4.4L V8',
        horsepower: '248-523 HP',
        acceleration: '6.0-3.6 seconds (0-60 mph)',
        topSpeed: '130-155 mph (electronically limited)'
      },
      technology: [
        'BMW Live Cockpit Professional',
        'Head-Up Display with augmented reality',
        'Driving Assistant Professional',
        'Bowers & Wilkins Diamond surround sound system'
      ]
    },
    {      id: '7-series',
      name: 'BMW 7 Series',
      category: 'luxury',
      year: '2023',
      image: '/images/13.jpg',
      description: 'Flagship luxury sedan with cutting-edge technology and first-class comfort.',
      features: [
        'Executive Lounge seating with massage function',
        'Panoramic Sky Lounge LED roof',
        'Theater Screen with Amazon Fire TV built-in',
        'Automatic doors for convenient entry and exit',
        'Highway Assistant for hands-free driving'
      ],
      specs: {
        engine: '3.0L 6-cylinder / 4.4L V8 / Electric',
        horsepower: '375-650 HP',
        acceleration: '5.2-3.7 seconds (0-60 mph)',
        topSpeed: '130-155 mph (electronically limited)'
      },
      technology: [
        '31.3-inch 8K Theater Screen for rear passengers',
        'Interaction Bar with touch-sensitive controls',
        'Multi-contour seats with massage',
        'Automatic doors with obstacle detection'
      ]
    },
    {      id: 'x5',
      name: 'BMW X5',
      category: 'suv',
      year: '2023',
      image: '/images/14.jpg',
      description: 'Mid-size luxury SUV with versatile performance and spacious premium interior.',
      features: [
        'xDrive intelligent all-wheel drive',
        'Two-axle air suspension for optimal comfort',
        'Off-road package with four driving modes',
        'Split tailgate for convenient loading',
        'Panoramic glass roof Sky Lounge'
      ],
      specs: {
        engine: '3.0L 6-cylinder / 4.4L V8 / PHEV',
        horsepower: '335-617 HP',
        acceleration: '5.3-3.8 seconds (0-60 mph)',
        topSpeed: '130-155 mph (electronically limited)'
      },
      technology: [
        'BMW Digital Key Plus',
        'Parking Assistant Professional',
        'Driver Recorder',
        'Active Protection System'
      ]
    },
    {      id: 'ix',
      name: 'BMW iX',
      category: 'electric',
      year: '2023',
      image: '/images/15.jpg',
      description: 'Flagship electric SUV with innovative technology and sustainable luxury.',
      features: [
        'Electric all-wheel drive with two motors',
        'Range of up to 324 miles (EPA)',
        'Fast charging capability (10-80% in 35 minutes)',
        'Shy Tech - hidden technology that appears when needed',
        'Panoramic electrochromic glass roof'
      ],
      specs: {
        engine: 'Dual Electric Motors',
        horsepower: '516-610 HP',
        acceleration: '4.6-3.6 seconds (0-60 mph)',
        topSpeed: '124-130 mph (electronically limited)'
      },
      technology: [
        'BMW Curved Display with next-gen iDrive',
        'Radiant surface heating',
        'Interior camera for selfies and security',
        'Bowers & Wilkins Diamond surround sound system with speakers integrated into seats'
      ]
    },
    {      id: 'i4',
      name: 'BMW i4',
      category: 'electric',
      year: '2023',
      image: '/images/16.jpg',
      description: 'Electric gran coupé with dynamic performance and extended range.',
      features: [
        'Range of up to 301 miles (EPA)',
        'Fast charging capability (10-80% in 31 minutes)',
        'Dynamic performance with near-50:50 weight distribution',
        'Flexible cargo capacity with fold-down rear seats',
        'BMW IconicSounds Electric by Hans Zimmer'
      ],
      specs: {
        engine: 'Single or Dual Electric Motors',
        horsepower: '335-536 HP',
        acceleration: '5.5-3.7 seconds (0-60 mph)',
        topSpeed: '118-140 mph (electronically limited)'
      },
      technology: [
        'BMW Curved Display with iDrive 8',
        'Augmented reality navigation',
        'Personal eSIM capability',
        'Interior camera'
      ]
    },
    {      id: 'x7',
      name: 'BMW X7',
      category: 'suv',
      year: '2023',
      image: '/images/17.webp',
      description: 'Luxury full-size SUV with three rows of seating and commanding presence.',
      features: [
        'Three full rows of seating for 7 passengers',
        'Executive 2nd-row Captain\'s Chairs option',
        'Six-zone automatic climate control',
        'Panoramic LED roof',
        'Air suspension with adaptive chassis'
      ],
      specs: {
        engine: '3.0L 6-cylinder / 4.4L V8',
        horsepower: '375-523 HP',
        acceleration: '5.8-4.5 seconds (0-60 mph)',
        topSpeed: '130-155 mph (electronically limited)'
      },
      technology: [
        'Driving Assistant Professional',
        'Panoramic Sky Lounge LED roof',
        'BMW Digital Key',
        'Comfort Access with hands-free tailgate operation'
      ]
    },
    {      id: 'm3',
      name: 'BMW M3',
      category: 'performance',
      year: '2023',
      image: '/images/18.jpg',
      description: 'High-performance sports sedan with racing DNA for the everyday enthusiast.',
      features: [
        'M TwinPower Turbo inline 6-cylinder engine',
        'Available xDrive all-wheel drive system',
        'M Drive Professional with Drift Analyzer',
        'Carbon fiber reinforced plastic (CFRP) components',
        'Adaptive M Suspension with electronically controlled dampers'
      ],
      specs: {
        engine: '3.0L Twin-Turbo Inline-6',
        horsepower: '473-503 HP',
        acceleration: '4.1-3.4 seconds (0-60 mph)',
        topSpeed: '155-180 mph (electronically limited)'
      },
      technology: [
        'M Drive Professional with M Drift Analyzer',
        'M Setup for individual configuration',
        'M Traction Control with 10 settings',
        'M Carbon ceramic brakes'
      ]
    },
    {      id: 'm8',
      name: 'BMW M8 Competition',
      category: 'performance',
      year: '2023',
      image: '/images/19.jpg',
      description: 'Ultimate luxury grand tourer with blistering performance and exquisite craftsmanship.',
      features: [
        'Most powerful BMW M production engine ever',
        'M xDrive all-wheel drive with rear-wheel drive mode',
        'Active M Differential for optimal traction',
        'Configurable brake pedal feel',
        'Carbon fiber roof for lower center of gravity'
      ],
      specs: {
        engine: '4.4L Twin-Turbo V8',
        horsepower: '617 HP',
        acceleration: '3.0 seconds (0-60 mph)',
        topSpeed: '190 mph (with M Driver\'s Package)'
      },
      technology: [
        'Setup button for direct access to engine, suspension settings',
        'M-specific Head-Up Display',
        'M Mode for customized performance settings',
        'Track mode for circuit driving'
      ]
    },
    {      id: 'i7',
      name: 'BMW i7',
      category: 'luxury electric',
      year: '2023',
      image: '/images/20.jpg',
      description: 'All-electric flagship sedan redefining luxury with zero emissions and cutting-edge technology.',
      features: [
        'Electric range up to 318 miles',
        'BMW Theater Screen with Amazon Fire TV',
        'Automatic doors for all four doors',
        'Executive Lounge rear seating',
        'Crystal headlights and illuminated kidney grille'
      ],
      specs: {
        engine: 'Dual Electric Motors',
        horsepower: '536 HP',
        acceleration: '4.5 seconds (0-60 mph)',
        topSpeed: '149 mph (electronically limited)'
      },
      technology: [
        '31.3-inch 8K rear Theater Screen',
        'Interaction Bar with touch controls',
        'Digital Art Mode',
        'Great Entrance Moments choreographed welcome experience'
      ]
    },
    {      id: '8-series',
      name: 'BMW 8 Series',
      category: 'luxury',
      year: '2023',
      image: '/images/21.jpg',
      description: 'Luxurious grand tourer blending breathtaking performance with refined elegance.',
      features: [
        'Available as Coupe, Convertible, or Gran Coupe',
        'Merino leather interior and premium finishes',
        'Adaptive M Suspension and active roll stabilization',
        'Glass controls for gear selector and iDrive',
        'Integral Active Steering for improved handling'
      ],
      specs: {
        engine: '3.0L 6-cylinder / 4.4L V8',
        horsepower: '335-617 HP',
        acceleration: '4.7-3.0 seconds (0-60 mph)',
        topSpeed: '155-190 mph (electronically limited)'
      },
      technology: [
        'Digital Cockpit with 12.3-inch display',
        'Driving Assistant Professional',
        'Bowers & Wilkins Diamond surround sound system',
        'Night vision with pedestrian detection'
      ]
    },
    {      id: 'ix3',
      name: 'BMW iX3',
      category: 'electric',
      year: '2023',
      image: '/images/22.webp',
      description: 'All-electric Sports Activity Vehicle with versatility and zero emissions.',
      features: [
        'Electric range up to 286 miles (WLTP)',
        'Aerodynamically optimized design elements',
        'BMW IconicSounds Electric by Hans Zimmer',
        'Adaptive recuperation for enhanced efficiency',
        'Blue accents highlighting electric identity'
      ],
      specs: {
        engine: 'Single Electric Motor (Rear)',
        horsepower: '286 HP',
        acceleration: '6.8 seconds (0-60 mph)',
        topSpeed: '112 mph (electronically limited)'
      },
      technology: [
        'BMW Intelligent Personal Assistant',
        'Wireless software updates',
        'Digital Key Plus',
        'Adaptive LED headlights'
      ]
    }
  ];
  
  // Filter models based on active category
  const filteredModels = activeCategory === 'all' ? 
    bmwModels : 
    bmwModels.filter(model => model.category.includes(activeCategory));
  
  // Handler for clicking on a model card
  const handleModelClick = (model) => {
    setSelectedModel(model);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Handler for closing model details
  const handleCloseDetails = () => {
    setSelectedModel(null);
  };
  
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };
  
  // Create variants for left and right entrance animations
  const leftCardVariants = {
    hidden: { 
      x: -100,
      opacity: 0,
      scale: 0.8
    },
    visible: (custom) => ({ 
      x: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 70,
        mass: 1,
        damping: 10,
        delay: custom * 0.2,
        duration: 0.8
      }
    }),
    hover: {
      y: -15,
      scale: 1.03,
      boxShadow: "0 20px 30px rgba(0,0,0,0.25), 0 0 20px rgba(255,204,0,0.4)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    }
  };
  
  const rightCardVariants = {
    hidden: { 
      x: 100,
      opacity: 0,
      scale: 0.8
    },
    visible: (custom) => ({ 
      x: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 70,
        mass: 1,
        damping: 10,
        delay: custom * 0.2,
        duration: 0.8
      }
    }),
    hover: {
      y: -15,
      scale: 1.03,
      boxShadow: "0 20px 30px rgba(0,0,0,0.25), 0 0 20px rgba(255,204,0,0.4)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    }
  };
  
  const detailsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };
  
  // Loading animation
  if (isLoading) {
    return (
      <div className="loading-container">
        <motion.div 
          className="bmw-logo-loader"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2
          }}
        >
          <svg width="100" height="100" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="#FFCC00" strokeWidth="3" fill="none" />
            <motion.path
              d="M 12,2 A 10,10 0 0 1 22,12"
              fill="none"
              stroke="#FFF"
              strokeWidth="3"
              strokeLinecap="round"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5
          }}
        >
          Loading BMW Models...
        </motion.p>
      </div>
    );
  }
  
  return (
    <div className="models-container">
      <AnimatePresence mode="wait">
        {selectedModel ? (
          // Model Details View
          <motion.div 
            className="model-details"
            key="details"
            variants={detailsVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button className="back-button" onClick={handleCloseDetails}>
              <i className="fas fa-arrow-left"></i> Back to Models
            </button>
            
            <div className="model-details-header">
              <div className="model-info">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedModel.name}
                </motion.h1>
                <motion.div 
                  className="model-badges"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="model-year">{selectedModel.year}</span>
                  <span className="model-category">
                    {modelCategories.find(cat => cat.id === selectedModel.category.split(' ')[0])?.name || 'Special'}
                  </span>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="model-hero-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <img src={selectedModel.image} alt={selectedModel.name} />
              <div className="image-overlay"></div>
            </motion.div>
            
            <motion.p 
              className="model-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {selectedModel.description}
            </motion.p>
            
            <motion.div 
              className="model-specs-grid"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="spec-box">
                <span className="spec-title">Engine</span>
                <span className="spec-value">{selectedModel.specs.engine}</span>
              </div>
              <div className="spec-box">
                <span className="spec-title">Horsepower</span>
                <span className="spec-value">{selectedModel.specs.horsepower}</span>
              </div>
              <div className="spec-box">
                <span className="spec-title">0-60 MPH</span>
                <span className="spec-value">{selectedModel.specs.acceleration}</span>
              </div>
              <div className="spec-box">
                <span className="spec-title">Top Speed</span>
                <span className="spec-value">{selectedModel.specs.topSpeed}</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="features-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h2>Key Features</h2>
              <ul className="features-list">
                {selectedModel.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <i className="fas fa-check"></i>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="technology-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <h2>Technology Highlights</h2>
              <div className="technology-grid">
                {selectedModel.technology.map((tech, index) => (
                  <motion.div 
                    key={index}
                    className="tech-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                  >
                    <div className="tech-icon">
                      <i className={`fas fa-${getTechIcon(tech)}`}></i>
                    </div>
                    <p>{tech}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : (
          // Models Gallery View
          <motion.div 
            key="gallery"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="page-header"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>BMW <span className="yellow-text">Models</span></h1>
              <p className="header-subtitle">Explore the Ultimate Driving Machines</p>
              <div className="header-line"></div>
            </motion.div>
            
            <motion.div 
              className="model-categories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {modelCategories.map(category => (
                <motion.button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
            
            <motion.div 
              className="models-grid"
              variants={containerVariants}
              key={activeCategory} // Add key to force re-render when category changes
            >
              {filteredModels.map((model, index) => (
                <motion.div 
                  key={model.id}
                  className="model-card"
                  custom={index} // Pass index as custom prop for staggered animation
                  variants={index % 2 === 0 ? leftCardVariants : rightCardVariants} // Alternate between left and right variants
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  onClick={() => handleModelClick(model)}
                >
                  <div className="model-image-container">
                    <img src={model.image} alt={model.name} className="model-image" />
                    <div className="model-overlay">
                      <span className="model-category">
                        {modelCategories.find(cat => cat.id === model.category.split(' ')[0])?.name || 'Special'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="model-content">
                    <h3 className="model-name">{model.name}</h3>
                    <p className="model-tagline">{model.description}</p>
                    <div className="model-highlights">
                      <div className="highlight">
                        <span className="highlight-label">Engine</span>
                        <span className="highlight-value">{model.specs.engine.split(' ')[0]}</span>
                      </div>
                      <div className="highlight">
                        <span className="highlight-label">Power</span>
                        <span className="highlight-value">{model.specs.horsepower.split('-').pop()}</span>
                      </div>
                      <div className="highlight">
                        <span className="highlight-label">0-60</span>
                        <span className="highlight-value">{model.specs.acceleration.split('-')[0]}</span>
                      </div>
                    </div>
                    <motion.div 
                      className="view-details"
                      initial={{ x: index % 2 === 0 ? -10 : 10, opacity: 0 }} // Different initial position based on card side
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <span>View Details</span>
                      <motion.i 
                        className="fas fa-arrow-right"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          repeatType: "mirror", 
                          duration: 1.5,
                          repeatDelay: 1 
                        }}
                      ></motion.i>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Helper function to assign appropriate icons to technology features
const getTechIcon = (tech) => {
  const lowercaseTech = tech.toLowerCase();
  
  if (lowercaseTech.includes('display') || lowercaseTech.includes('screen')) return 'display';
  if (lowercaseTech.includes('assistant') || lowercaseTech.includes('personal')) return 'robot';
  if (lowercaseTech.includes('driving') || lowercaseTech.includes('driver')) return 'car';
  if (lowercaseTech.includes('sound') || lowercaseTech.includes('audio')) return 'volume-high';
  if (lowercaseTech.includes('navigation') || lowercaseTech.includes('map')) return 'map-location-dot';
  if (lowercaseTech.includes('camera') || lowercaseTech.includes('recorder')) return 'camera';
  if (lowercaseTech.includes('seat') || lowercaseTech.includes('comfort')) return 'couch';
  if (lowercaseTech.includes('key') || lowercaseTech.includes('access')) return 'key';
  if (lowercaseTech.includes('setup') || lowercaseTech.includes('mode')) return 'sliders';
  if (lowercaseTech.includes('brake')) return 'brake-warning';
  if (lowercaseTech.includes('light') || lowercaseTech.includes('led')) return 'lightbulb';
  
  // Default icon
  return 'microchip';
};

export default Models;
