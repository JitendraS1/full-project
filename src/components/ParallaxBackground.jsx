import React, { useEffect, useRef, useState, useCallback } from 'react';

// Throttle function to limit scroll event frequency
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

const ParallaxBackground = ({ 
  children,
  images = [], // Array of image URLs to create parallax layers
  speeds = [], // Array of speeds for each layer (0-1)
  opacities = [], // Array of opacities for each layer (0-1)
  className = ''
}) => {
  const backgroundsRef = useRef([]);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const rafId = useRef();

  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  useEffect(() => {
    const handleScroll = throttle(() => {
      // Use requestAnimationFrame for smoother performance
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      
      rafId.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const scrollPercent = scrollY / (document.body.scrollHeight - windowHeight);
        
        backgroundsRef.current.forEach((bg, index) => {
          if (!bg) return;
          
          // Vertical parallax effect
          const yPos = -scrollY * (speeds[index] || 0.5);
          
          // Add subtle horizontal movement based on scroll position
          const xPos = (scrollPercent * windowWidth * 0.05) * (index % 2 === 0 ? 1 : -1);
          
          // Apply scale effect for depth
          const scale = 1 + (scrollPercent * 0.1) * (index % 2 === 0 ? 1 : -1);
          
          bg.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) scale(${scale})`;
        });
      });
    }, 16); // ~60fps
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [speeds, windowHeight, windowWidth]);
  
  return (
    <div 
      className={`fixed inset-0 z-[-1] overflow-hidden ${className}`}
    >
      {/* Parallax background layers */}
      {images.map((image, index) => (
        <div 
          key={`parallax-layer-${index}`}
          ref={el => backgroundsRef.current[index] = el}
          className="absolute inset-0 w-full h-full transition-transform duration-300"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: opacities[index] || 1,
            zIndex: -10 - index,
            willChange: 'transform',
            transformOrigin: 'center center'
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;