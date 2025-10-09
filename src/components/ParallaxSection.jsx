import React, { useEffect, useRef, useState } from "react";

const ParallaxSection = ({
  backgroundImage,
  backgroundPosition = "center",
  backgroundSize = "cover",
  backgroundColor= "#673a37",
  overlayColor = "#673a377e",
  height = "100vh",
  children,
  className = "",
  speed = 0.5, // Parallax speed factor
}) => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Apply parallax effect on both mobile and desktop
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      const offset = (scrollPosition - sectionTop) * speed;
      section.style.backgroundPosition = `center ${offset}px`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={`relative ${className} flex items-center justify-center`}
      style={{
        height: isMobile ? 'auto' : height, // Use auto height on mobile to contain the image
        minHeight: isMobile ? 'auto' : 'auto', // Remove 100vh minimum height for mobile
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: isMobile ? 'contain' : backgroundSize, // Use contain on mobile to show full image, prop on desktop
        backgroundPosition: 'center center', // Ensure center positioning
        backgroundAttachment: isMobile ? 'scroll' : 'fixed', // Use scroll on mobile for full image display, fixed for parallax on desktop
        backgroundRepeat: 'no-repeat',
        overflow: "hidden",
      }}
    >
      {overlayColor && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor }}
        />
      )}
      <div className="relative z-10 h-full w-full">{children}</div>
    </section>
  );
};

export default ParallaxSection;
