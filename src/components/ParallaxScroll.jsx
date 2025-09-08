import React, { useEffect, useRef, useState } from 'react';

const ParallaxScroll = ({ 
  children, 
  speed = 0.2, // Positive values move slower than normal, negative values move faster
  direction = 'vertical', // 'vertical' or 'horizontal'
  className = '',
  style = {}
}) => {
  const elementRef = useRef(null);
  const initialOffsetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element || isMobile) return; // Skip parallax effect on mobile
    
    // Store the initial position
    const calculateOffset = () => {
      const rect = element.getBoundingClientRect();
      initialOffsetRef.current = {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
      };
    };
    
    // Calculate initial position
    calculateOffset();
    
    // Handle window resize
    window.addEventListener('resize', calculateOffset);
    
    const handleScroll = () => {
      if (!initialOffsetRef.current) return;
      
      const scrollPosition = window.pageYOffset;
      const elementTop = initialOffsetRef.current.top;
      
      // Calculate how far the element is from the top of the viewport
      const distanceFromViewportTop = elementTop - scrollPosition;
      
      // Calculate the parallax offset
      const parallaxOffset = distanceFromViewportTop * speed;
      
      // Apply the transform based on direction
      if (direction === 'vertical') {
        element.style.transform = `translateY(${parallaxOffset}px)`;
      } else if (direction === 'horizontal') {
        element.style.transform = `translateX(${parallaxOffset}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateOffset);
    };
  }, [speed, direction, isMobile]);
  
  return (
    <div 
      ref={elementRef} 
      className={`will-change-transform ${className}`}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxScroll;