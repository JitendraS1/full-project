import React, { useEffect, useRef } from 'react';

const ParallaxSection = ({ 
  backgroundImage, 
  backgroundPosition = 'center',
  backgroundSize = 'cover',
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  height = '500px',
  children,
  className = '',
  speed = 0.5 // Parallax speed factor (0 = no parallax, 1 = full parallax)
}) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      const offset = (scrollPosition - sectionTop) * speed;
      
      // Apply the parallax effect by translating the background position
      section.style.backgroundPosition = `center ${offset}px`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return (
    <section
      ref={sectionRef}
      className={`relative ${className}`}
      style={{
        height,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize,
        backgroundPosition,
        backgroundAttachment: 'fixed',
        overflow: 'hidden'
      }}
    >
      {overlayColor && (
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: overlayColor }}
        />
      )}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;