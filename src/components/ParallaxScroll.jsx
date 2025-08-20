import React, { useEffect, useRef } from 'react';

const ParallaxScroll = ({ 
  children, 
  speed = 0.2, // Positive values move slower than normal, negative values move faster
  direction = 'vertical', // 'vertical' or 'horizontal'
  className = '',
  style = {}
}) => {
  const elementRef = useRef(null);
  const initialOffsetRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
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
  }, [speed, direction]);
  
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