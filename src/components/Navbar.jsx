import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

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
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Close dropdown when toggling menu
    if (!isOpen) {
      setIsAboutDropdownOpen(false);
    }
  };
  
  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  return (
    <nav className={`relative bg-white py-3 ${isScrolled ? 'shadow-md sticky top-0 z-50 bg-gray-50' : ''}`}>
      <div ref={navRef} className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img 
            className="h-16 md:h-20 w-auto" 
            src="/logonew.png" 
            alt="Nestoria Group" 
          />
        </Link>
        
        <button 
          type="button" 
          className="md:hidden text-gray-800 hover:text-blue-600 focus:outline-none" 
          onClick={toggleMenu}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414L12 13.414l-4.864 4.864a1 1 0 0 1-1.414-1.414L10.586 12 5.722 7.136a1 1 0 0 1 1.414-1.414L12 10.586l4.864-4.864a1 1 0 0 1 1.414 1.414L13.414 12l4.864 4.864z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
        
        <div 
          className={`md:flex flex-grow items-center ${isOpen ? 'block absolute top-full left-0 right-0 bg-white shadow-lg z-50 pb-4' : 'hidden'} md:static md:bg-transparent md:shadow-none`} 
          id="navbarCollapse"
        >
          <div className="flex flex-col md:flex-row md:ml-auto mt-4 md:mt-0 md:space-x-8 p-4 md:p-0">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md text-sm"
              onClick={() => isMobile && setIsOpen(false)}
            >
              Home
            </Link>

            <div className="relative" onMouseLeave={() => !isMobile && setIsAboutDropdownOpen(false)}>
              <button 
                onClick={() => isMobile && toggleAboutDropdown()}
                onMouseEnter={() => !isMobile && setIsAboutDropdownOpen(true)}
                className="w-full text-left text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md text-sm flex items-center justify-between" 
                aria-expanded={isAboutDropdownOpen ? 'true' : 'false'}
              >
                <span>About</span>
                <svg 
                  className={`ml-1 h-5 w-5 transform ${isAboutDropdownOpen ? 'rotate-180' : ''} transition-transform duration-200`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <ul 
                onMouseEnter={() => !isMobile && setIsAboutDropdownOpen(true)}
                className={`${isMobile ? 'relative' : 'absolute'} ${isAboutDropdownOpen ? 'block' : 'hidden'} ${isMobile ? 'pl-4' : 'bg-gray-50 shadow-lg rounded-md'} py-2 w-48 z-50`}
              >
                <li><Link to="/about" onClick={() => isMobile && setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-600 hover:text-white transition duration-300">About Us</Link></li>
                <li><Link to="/team" onClick={() => isMobile && setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-600 hover:text-white transition duration-300">Team Members</Link></li>
                <li><Link to="/achievements" onClick={() => isMobile && setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-600 hover:text-white transition duration-300">Achievements</Link></li>
                <li><Link to="/media" onClick={() => isMobile && setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-600 hover:text-white transition duration-300">Media Gallery</Link></li>
                <li><Link to="/services" onClick={() => isMobile && setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-600 hover:text-white transition duration-300">Services</Link></li>
                <li><Link to="/testimonial" onClick={() => isMobile && setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-600 hover:text-white transition duration-300">Testimonials</Link></li>
              </ul>
            </div>
            
            <Link 
              to="/aboutDholera" 
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md text-sm"
              onClick={() => isMobile && setIsOpen(false)}
            >
              Dholera SIR
            </Link>
            <Link 
              to="/projects" 
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md text-sm"
              onClick={() => isMobile && setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/land-deals" 
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md text-sm"
              onClick={() => isMobile && setIsOpen(false)}
            >
              Land Deals
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md text-sm"
              onClick={() => isMobile && setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md text-sm"
              onClick={() => isMobile && setIsOpen(false)}
            >
              FAQ
            </Link>
            
            {/* Mobile Contact Button */}
            <Link 
              to="/contact" 
              className="md:hidden bg-blue-800 text-white font-bold py-2 px-4 mx-3 my-2 rounded-lg text-center hover:bg-blue-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
          
          {/* Desktop Contact Button */}
          <Link to="/contact" className="bg-blue-800 text-white font-bold py-2 px-4 mx-3 rounded-lg hidden md:block hover:bg-blue-700 transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
