import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import ParallaxSection from '../components/ParallaxSection';
import ParallaxScroll from '../components/ParallaxScroll';
import dholeraBanner from '../assets/img/Home-banner.svg';
import aboutimage from '../assets/img/about.png';

function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <ParallaxSection 
        backgroundImage={dholeraBanner}
        height="100vh"
        overlayColor="#673a377e"
        speed={0.4}
        className="py-32 flex items-center justify-center text-center"
      >
        
        <div className="relative z-10 px-4 w-full mt-80">
          <div className="max-w-4xl mx-auto">
           
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up font-condor">
                Think Dholera Think Nestoria.
              </h1>
              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up font-condor">
                Premium Real Estate in Dholera SIR
              </h1> */}
              <div className="h-1 w-24 bg-blue-500 mx-auto mb-8 animate-slide-up"></div>
              <p className="text-lg md:text-xl text-white mb-8 animate-slide-up opacity-0 animation-delay-300 max-w-2xl mx-auto">
                Discover exclusive properties and investment opportunities in India's first smart city.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up opacity-0 animation-delay-500">
                <Link to="/land-deals" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                  Explore Properties
                </Link>
                <Link to="/contact" className="bg-transparent hover:bg-blue-700 text-white font-bold py-3 px-8 border-2 border-white hover:border-transparent rounded-md transition duration-300 transform hover:-translate-y-1">
                  Contact Us
                </Link>
              </div>
            
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8 animate-bounce">
          <a href="#about" className="text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </ParallaxSection>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                <img 
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  src= {aboutimage}
                  alt="Dholera SIR Overview" 
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-3xl font-bold px-6 py-3 border-2 border-white rounded-md">Discover Nestoria</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="lg:pl-10">
                <h6 className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wider">About Us</h6>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-blue-600">Nestoria Group</span></h2>
                <div className="h-1 w-24 bg-blue-600 mb-6"></div>
                <p className="text-gray-600 mb-6 text-lg">Established in 2010, Nestoria Group has emerged as a leading real estate developer in Dholera SIR. We are committed to excellence, transparency, and client satisfaction.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                      <i className="fa fa-check text-blue-600"></i>
                    </div>
                    <div>
                      <h6 className="text-lg font-semibold">Premium Land Parcels</h6>
                      <p className="text-gray-500 text-sm">High-value properties</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                      <i className="fa fa-check text-blue-600"></i>
                    </div>
                    <div>
                      <h6 className="text-lg font-semibold">Strategic Locations</h6>
                      <p className="text-gray-500 text-sm">Prime investment areas</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                      <i className="fa fa-check text-blue-600"></i>
                    </div>
                    <div>
                      <h6 className="text-lg font-semibold">Legal Documentation</h6>
                      <p className="text-gray-500 text-sm">Transparent process</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                      <i className="fa fa-check text-blue-600"></i>
                    </div>
                    <div>
                      <h6 className="text-lg font-semibold">Investment Advisory</h6>
                      <p className="text-gray-500 text-sm">Expert guidance</p>
                    </div>
                  </div>
                </div>
                <Link to="/about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1" aria-label="Discover More About Nestoria">Discover More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className=" bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <ParallaxSection 
        backgroundImage={dholeraBanner}
        height="auto"
        overlayColor="#673a377e"
        speed={0.4}
        className="py-32 mb-8  flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h6 className="text-blue-300 font-semibold text-lg mb-2 uppercase tracking-wider">What We Offer</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-blue-300">Services</span></h2>
            <div className="h-1 w-24 bg-blue-300 mx-auto mb-6"></div>
            <p className="text-gray-200 text-lg">We offer comprehensive real estate services tailored to meet your investment needs in Dholera SIR.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-800 bg-opacity-50 rounded-lg shadow-xl p-8 border border-blue-700 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <i className="fa fa-building fa-2x text-white"></i>
              </div>
              <h4 className="text-xl font-semibold text-center mb-4">Residential Plots</h4>
              <p className="text-gray-200 mb-6 text-center">Premium residential plots in strategic locations with excellent appreciation potential.</p>
              <div className="text-center">
                <Link to="/services" className="inline-block text-blue-300 hover:text-white font-medium border border-blue-300 hover:border-white rounded-full py-2 px-6 transition duration-300" aria-label="Learn More About Residential Plots">Learn More</Link>
              </div>
            </div>
            <div className="bg-blue-800 bg-opacity-50 rounded-lg shadow-xl p-8 border border-blue-700 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <i className="fa fa-store fa-2x text-white"></i>
              </div>
              <h4 className="text-xl font-semibold text-center mb-4">Commercial Properties</h4>
              <p className="text-gray-200 mb-6 text-center">High-potential commercial properties in Dholera's developing business districts.</p>
              <div className="text-center">
                <Link to="/services" className="inline-block text-blue-300 hover:text-white font-medium border border-blue-300 hover:border-white rounded-full py-2 px-6 transition duration-300" aria-label="Learn More About Commercial Properties">Learn More</Link>
              </div>
            </div>
            <div className="bg-blue-800 bg-opacity-50 rounded-lg shadow-xl p-8 border border-blue-700 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <i className="fa fa-industry fa-2x text-white"></i>
              </div>
              <h4 className="text-xl font-semibold text-center mb-4">Industrial Plots</h4>
              <p className="text-gray-200 mb-6 text-center">Strategic industrial plots in Dholera SIR with excellent connectivity and infrastructure.</p>
              <div className="text-center">
                <Link to="/services" className="inline-block text-blue-300 hover:text-white font-medium border border-blue-300 hover:border-white rounded-full py-2 px-6 transition duration-300" aria-label="Learn More About Industrial Plots">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
    </ParallaxSection>
      </section>
      {/* Why Dholera SIR Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h6 className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wider">Investment Opportunity</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why <span className="text-blue-600">Dholera SIR</span></h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Dholera Special Investment Region (SIR) is India's first planned smart city and a global manufacturing hub.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-xl p-8 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-blue-600">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <i className="fa fa-map-marker-alt fa-2x text-blue-600"></i>
              </div>
              <h5 className="text-xl font-semibold mb-4">Strategic Location</h5>
              <p className="text-gray-600">Located in the Delhi-Mumbai Industrial Corridor with excellent connectivity.</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-blue-600">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <i className="fa fa-cogs fa-2x text-blue-600"></i>
              </div>
              <h5 className="text-xl font-semibold mb-4">World-Class Infrastructure</h5>
              <p className="text-gray-600">Smart transportation, renewable energy, water management, and digital connectivity.</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-blue-600">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <i className="fa fa-chart-line fa-2x text-blue-600"></i>
              </div>
              <h5 className="text-xl font-semibold mb-4">Investment Potential</h5>
              <p className="text-gray-600">Significant appreciation potential with government backing and planned development.</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-blue-600">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <i className="fa fa-leaf fa-2x text-blue-600"></i>
              </div>
              <h5 className="text-xl font-semibold mb-4">Sustainable Development</h5>
              <p className="text-gray-600">Eco-friendly planning with green spaces, renewable energy, and sustainable practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5500<span className="text-blue-300">+</span></div>
              <p className="text-xl">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50<span className="text-blue-300">+</span></div>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">13<span className="text-blue-300">+</span></div>
              <p className="text-xl">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100<span className="text-blue-300">%</span></div>
              <p className="text-xl">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <ParallaxSection 
        backgroundImage={dholeraBanner}
        height="auto"
        overlayColor="#673a377e"
        speed={0.3}
        className="py-20"
      >
        <div className="container mx-auto px-4 text-center">
         
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Invest in Your Future?</h2>
            <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
              Our experts are ready to guide you through the best investment opportunities in Dholera SIR.
            </p>
            <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              Contact Our Experts
            </Link>
          
        </div>
      </ParallaxSection>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h6 className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wider">Testimonials</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-blue-600">Clients Say</span></h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hear from our satisfied clients who have invested in Dholera SIR properties.
            </p>
          </div>
          
          <Carousel />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our <span className="text-blue-600">Newsletter</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest news, property listings, and investment opportunities in Dholera SIR.
              </p>
            </div>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
