import React, { useState, useEffect, useMemo, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.scss';

// Memoized image component for better performance
const LazyImage = memo(({ src, alt, onClick }) => {
  return (
    <img 
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E"
      data-src={src} 
      alt={alt} 
      className="gallery-image"
      loading="lazy"
      width="300"
      height="200"
      onClick={onClick}
    />
  );
});

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  // Observer ref for image lazy loading
  const imagesObserverRef = useRef(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Even shorter loading time
    
    return () => clearTimeout(timer);
  }, []);
  
  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (!isLoading) {
      imagesObserverRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              const dataSrc = img.getAttribute('data-src');
              if (dataSrc) {
                img.src = dataSrc;
                img.removeAttribute('data-src');
                imagesObserverRef.current.unobserve(img);
              }
            }
          });
        },
        { rootMargin: '200px 0px' }
      );
      
      // Observe all gallery images
      document.querySelectorAll('.gallery-image[data-src]').forEach(img => {
        imagesObserverRef.current.observe(img);
      });
      
      return () => {
        if (imagesObserverRef.current) {
          imagesObserverRef.current.disconnect();
        }
      };
    }
  }, [isLoading, activeCategory, searchQuery]);
  // Gallery categories - memoized for performance
  const categories = useMemo(() => [
    { id: 'all', name: 'All Photos' },
    { id: 'sedan', name: 'Sedans' },
    { id: 'sports', name: 'Sports Cars' },
    { id: 'concept', name: 'Concepts' }
  ], []);
  // Ultra-optimized gallery with minimal, carefully selected images for maximum performance
  const galleryImages = useMemo(() => [
    {
      id: 1,
      src: '/Gallery/alireza-rostami-FnlpjbFNQQA-unsplash.jpg',
      alt: 'BMW M4 Front View',
      categories: ['sedan', 'sports'],
      title: 'BMW M4 Competition',
      description: 'The BMW M4 Competition Coupé in striking frozen dark gray.',
      photographer: 'Alireza Rostami',
      year: '2022'
    },
    {
      id: 2,
      src: '/Gallery/martin-katler-e3gVocvZ-g0-unsplash.jpg',
      alt: 'BMW M2 Racing Blue',
      categories: ['sports'],
      title: 'BMW M2 Competition',
      description: 'The BMW M2 Competition in iconic racing blue finish.',
      photographer: 'Martin Katler',
      year: '2022'
    },
    {
      id: 3,
      src: '/Gallery/marcel-hoberg-jNBX4B7mljI-unsplash.jpg',
      alt: 'BMW 8 Series Convertible',
      categories: ['sedan', 'sports'],
      title: 'BMW 8 Series Convertible',
      description: 'The luxurious BMW 8 Series Convertible in dravit grey metallic.',
      photographer: 'Marcel Hoberg',
      year: '2022'
    },
    {
      id: 4,
      src: '/Gallery/isaac-maffeis-Fbc6_d1R6Ao-unsplash.jpg',
      alt: 'BMW i8 Roadster',
      categories: ['concept', 'sports'],
      title: 'BMW i8 Roadster',
      description: 'The futuristic BMW i8 Roadster hybrid sports car.',
      photographer: 'Isaac Maffeis',
      year: '2021'
    },
    {
      id: 5,
      src: '/Gallery/josh-berquist-_4sWbzH5fp8-unsplash.jpg',
      alt: 'BMW M3 Classic',
      categories: ['sedan', 'sports'],
      title: 'BMW M3 E46',
      description: 'The legendary BMW M3 E46, a modern classic.',
      photographer: 'Josh Berquist',
      year: '2020'
    },
    {
      id: 6,
      src: '/Gallery/penta-sathwik-fQPd85I1uSE-unsplash.jpg',
      alt: 'BMW M4 Detail',
      categories: ['sports'],
      title: 'BMW M4 in Motion',
      description: 'The sleek lines of the BMW M4 captured in motion.',
      photographer: 'Penta Sathwik',
      year: '2022'
    }
  ], []);

  // Filter images based on active category and search query
  const filteredImages = useMemo(() => {
    return galleryImages.filter(image => {
      const matchesCategory = activeCategory === 'all' || image.categories.includes(activeCategory);
      const matchesSearch = searchQuery === '' || 
                          image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          image.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);
  // Optimized download function with debounce to prevent multiple clicks
  const downloadImage = useMemo(() => {
    let downloading = false;
    
    return (src, title) => {
      if (downloading) return;
      
      downloading = true;
      
      // Create an anchor element
      const link = document.createElement('a');
      link.href = src;
      link.download = `BMW-${title.replace(/\s+/g, '-')}.jpg`;
      link.click();
      
      // Reset flag after a short delay
      setTimeout(() => {
        downloading = false;
      }, 800);
    };
  }, []);
  // Ultra-optimized animation variants for maximum performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05, // Faster staggering
        delayChildren: 0.05
      }
    }
  };

  // Minimal animation for maximum performance
  const getItemVariant = (index) => {
    // Alternate between fade-up and fade-in for optimal performance
    const isEven = index % 3 === 0;  // Every third item gets a different animation
    return {
      hidden: { 
        opacity: 0, 
        y: isEven ? 5 : 0,  // Extremely minimal movement
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.2,  // Faster animation
          ease: 'easeOut'
        }
      }
    };
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.15 }  // Faster transition
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.15 }
    }
  };

  // Ultra simple loading animation
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="simple-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="gallery-container">      {/* Header - adjusted position */}
      <motion.div 
        className="gallery-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ marginTop: "2rem", paddingTop: "1rem" }}
      >
        <h1>BMW <span className="yellow-text">Gallery</span></h1>
        <p className="gallery-subtitle">Premium images of Ultimate Driving Machines</p>
      </motion.div>

      {/* Search and Filter Controls */}
      <div className="gallery-controls">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search gallery..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <i className="fas fa-search search-icon"></i>
        </div>
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid - optimized with fewer images */}
      <motion.div 
        className="gallery-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeCategory + searchQuery} // Force re-render on filter change
      >
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <motion.div 
              key={image.id} 
              className="gallery-item"
              variants={getItemVariant(index)}
              onClick={() => setSelectedImage(image)}
            >              <div className="gallery-image-container">
                <LazyImage 
                  src={image.src}
                  alt={image.alt}
                  onClick={e => e.stopPropagation()}
                />
                <div className="image-overlay">
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
              <div className="image-info">
                <h3>{image.title}</h3>
                <p className="photographer">By {image.photographer}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="no-results">
            <i className="fas fa-exclamation-circle"></i>
            <h3>No Images Found</h3>
            <p>Try adjusting your search criteria or select a different category.</p>
          </div>
        )}
      </motion.div>

      {/* Image Modal - simplified for performance */}
      <AnimatePresence>
        {selectedImage && (
          <div 
            className="image-modal-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="image-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <button className="close-button" onClick={() => setSelectedImage(null)}>
                <i className="fas fa-times"></i>
              </button>
              
              <div className="modal-image-container">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="modal-image" 
                />
              </div>
              
              <div className="modal-content">
                <div className="modal-info">
                  <h2>{selectedImage.title}</h2>
                  <p className="modal-description">{selectedImage.description}</p>
                  <div className="modal-metadata">
                    <span><i className="fas fa-camera"></i> {selectedImage.photographer}</span>
                    <span><i className="fas fa-calendar"></i> {selectedImage.year}</span>
                    <span>
                      <i className="fas fa-tags"></i> 
                      {selectedImage.categories.map(cat => (
                        <span key={cat} className="category-tag">{cat}</span>
                      ))}
                    </span>
                  </div>
                </div>
                
                <button 
                  className="download-button"
                  onClick={() => downloadImage(selectedImage.src, selectedImage.title)}
                >
                  <i className="fas fa-download"></i> Download Image
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
