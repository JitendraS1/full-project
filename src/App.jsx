import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/AboutUs';
import AboutDholera from './pages/Aboutdholera';
import TeamNestoria from './pages/Team';
import Blog from './pages/Blog';
import FAQ from './pages/Faq';
import Contact from './pages/Contact';
import Media from './pages/Media';
import Achievements from './pages/Achievements';
import LandDeals from './pages/LandDeal';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Testimonial from './pages/Testimonial';
import NotFound from './pages/NotFound';
import Seo from './components/Seo'; // Import Seo component
import { ThemeProvider } from './contexts/ThemeContext';
import ParallaxBackground from './components/ParallaxBackground';


function App() {
  // Background images for parallax effect
  const parallaxBackgrounds = [
    './src/assets/img/parallax-bg-1.svg',
    './src/assets/img/parallax-div-grid.svg', // Added div-grid pattern
    './src/assets/img/parallax-bg-2.svg',
    './src/assets/img/parallax-bg-3.svg'
  ];

  // Different speeds for each layer
  const parallaxSpeeds = [0.2, 0.15, 0.1, 0.05];

  // Opacity for each layer
  const parallaxOpacities = [0.1, 0.1, 0.05, 0.03];

  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <div className="relative">
            {/* Global parallax background */}
            <ParallaxBackground 
              images={parallaxBackgrounds}
              speeds={parallaxSpeeds}
              opacities={parallaxOpacities}
              className="pointer-events-none"
            />
            <Header />
            <Navbar />
            <main className="relative z-10">
          <Routes>
            <Route path="/" element={<><Seo title="Nestoria Group - Home" description="Your trusted partner for real estate investments in Dholera SIR." keywords="real estate, Dholera SIR, investment" /><Home /></>} />
            <Route path="/about" element={<><Seo title="About Nestoria Group" description="Learn more about Nestoria Group and our mission." keywords="Nestoria Group, real estate developer, Dholera SIR" /><About /></>} />
            <Route path="/aboutDholera" element={<><Seo title="About Dholera SIR" description="Discover Dholera Special Investment Region (SIR), India's first smart city." keywords="Dholera SIR, smart city, investment region" /><AboutDholera /></>} />
            <Route path="/contact" element={<><Seo title="Contact Nestoria Group" description="Contact us for expert advice on real estate investments in Dholera SIR." keywords="contact, Nestoria Group, real estate investment" /><Contact /></>} />
            <Route path="/team" element={<><Seo title="Our Team - Nestoria Group" description="Meet the team of experts at Nestoria Group." keywords="team, Nestoria Group, real estate experts" /><TeamNestoria /></>} />
            <Route path="/blog" element={<><Seo title="Blog - Nestoria Group" description="Read our latest articles on real estate and Dholera SIR." keywords="blog, real estate, Dholera SIR, articles" /><Blog /></>} />
            <Route path="/faq" element={<><Seo title="FAQ - Nestoria Group" description="Frequently asked questions about investing in Dholera SIR." keywords="FAQ, real estate investment, Dholera SIR" /><FAQ /></>} />
            <Route path="/land-deals" element={<><Seo title="Land Deals - Nestoria Group" description="Explore premium land investment opportunities in Dholera SIR." keywords="land deals, real estate, Dholera SIR, investment" /><LandDeals /></>} />
            <Route path="/media" element={<><Seo title="Media - Nestoria Group" description="See our latest media coverage and press releases." keywords="media, Nestoria Group, press releases" /><Media /></>} />
            <Route path="/projects" element={<><Seo title="Projects - Nestoria Group" description="View our featured real estate projects in Dholera SIR." keywords="projects, real estate, Dholera SIR" /><Projects /></>} />
            <Route path="/services" element={<><Seo title="Services - Nestoria Group" description="Learn about our real estate services in Dholera SIR." keywords="services, real estate, Dholera SIR" /><Services /></>} />
            <Route path="/achievements" element={<><Seo title="Achievements - Nestoria Group" description="Our achievements and milestones in real estate development." keywords="achievements, Nestoria Group, real estate" /><Achievements /></>} />
            <Route path="/testimonial" element={<><Seo title="Testimonials - Nestoria Group" description="Hear from our satisfied clients about their investment experience." keywords="testimonials, Nestoria Group, real estate investment" /><Testimonial /></>} />
            <Route path="*" element={<><Seo title="404 - Page Not Found" description="The page you are looking for does not exist." keywords="404, page not found" /><NotFound /></>} />
          </Routes>
            </main>
            <Footer className="relative z-10" />
          </div>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;