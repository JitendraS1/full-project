import React from 'react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../components/ParallaxSection';
import ParallaxScroll from '../components/ParallaxScroll';

function Services() {
  return (
    <>
      {/* Page Header */}
      <ParallaxSection 
        backgroundImage="/src/assets/img/parallax-bg-1.svg"
        height="50vh"
        overlayColor="#673a377e"
        speed={0.5}
        className="py-32 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <ParallaxScroll speed={-0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up font-condor">
                Our Services
              </h1>
              <div className="h-1 w-24 bg-blue-500 mx-auto mb-8 animate-slide-up"></div>
              <nav aria-label="breadcrumb" className="animate-slide-in-down">
                <ol className="flex justify-center space-x-2 mb-0">
                  <li><Link className="text-white hover:text-blue-300 transition duration-300" to="/">Home</Link></li>
                  <li><span className="text-white mx-2">/</span></li>
                  <li className="text-blue-300" aria-current="page">Services</li>
                </ol>
              </nav>
            </ParallaxScroll>
          </div>
        </div>
      </ParallaxSection>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ParallaxScroll speed={0.1}>
              <h6 className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wider animate-fade-in font-condor">What We Offer</h6>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up font-condor">Our <span className="text-blue-600">Services</span></h2>
              <div className="h-1 w-24 bg-blue-600 mx-auto mb-6 animate-slide-up"></div>
              <p className="text-gray-600 text-lg animate-fade-in">At Nestoria Group, we offer comprehensive real estate services focused on Dholera SIR. Our expertise spans across residential, commercial, and industrial sectors, providing end-to-end solutions for investors and buyers.</p>
            </ParallaxScroll>
          </div>
          <ParallaxScroll speed={0.05} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-600 h-full">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <i className="fa fa-home fa-2x text-blue-600"></i>
                </div>
                <h4 className="text-xl font-semibold text-center mb-4">Residential Plots</h4>
                <p className="text-gray-600 mb-6 text-center">Premium residential plots in strategic locations within Dholera SIR, perfect for building your dream home or for investment purposes.</p>
                <div className="text-center">
                  <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                    Learn More <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-600 h-full">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <i className="fa fa-building fa-2x text-blue-600"></i>
                </div>
                <h4 className="text-xl font-semibold text-center mb-4">Commercial Properties</h4>
                <p className="text-gray-600 mb-6 text-center">Strategic commercial plots and properties in high-growth areas of Dholera SIR, ideal for businesses looking to establish a presence in this emerging hub.</p>
                <div className="text-center">
                  <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                    Learn More <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-600 h-full">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <i className="fa fa-industry fa-2x text-blue-600"></i>
                </div>
                <h4 className="text-xl font-semibold text-center mb-4">Industrial Plots</h4>
                <p className="text-gray-600 mb-6 text-center">Large industrial plots in designated industrial zones of Dholera SIR, suitable for manufacturing, warehousing, and other industrial operations.</p>
                <div className="text-center">
                  <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                    Learn More <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-600 h-full">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <i className="fa fa-search fa-2x text-blue-600"></i>
                </div>
                <h4 className="text-xl font-semibold text-center mb-4">Property Consultation</h4>
                <p className="text-gray-600 mb-6 text-center">Expert consultation services to help you identify the right property based on your requirements, budget, and investment goals.</p>
                <div className="text-center">
                  <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                    Learn More <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-600 h-full">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <i className="fa fa-file-contract fa-2x text-blue-600"></i>
                </div>
                <h4 className="text-xl font-semibold text-center mb-4">Legal Assistance</h4>
                <p className="text-gray-600 mb-6 text-center">Comprehensive legal assistance for property documentation, registration, and compliance with local regulations and laws.</p>
                <div className="text-center">
                  <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                    Learn More <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-600 h-full">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <i className="fa fa-chart-line fa-2x text-blue-600"></i>
                </div>
                <h4 className="text-xl font-semibold text-center mb-4">Investment Advisory</h4>
                <p className="text-gray-600 mb-6 text-center">Strategic investment advisory services to help you maximize returns on your real estate investments in Dholera SIR.</p>
                <div className="text-center">
                  <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                    Learn More <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </ParallaxScroll>
        </div>
      </section>

      {/* Residential Plots Section */}
      <ParallaxSection 
        backgroundImage="/src/assets/img/residential-plot.svg"
        height="auto"
        overlayColor="rgba(243, 244, 246, 0.92)"
        speed={0.3}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <ParallaxScroll speed={0.1}>
                <h6 className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wider animate-fade-in">Our Specialty</h6>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Residential Plots in Dholera SIR</h2>
                <div className="h-1 w-24 bg-blue-600 mb-6 animate-slide-up"></div>
                <p className="text-gray-600 mb-6 animate-fade-in">Our residential plots in Dholera SIR offer the perfect opportunity to build your dream home in India's first planned smart city. With various plot sizes available, we cater to different needs and budgets.</p>
              </ParallaxScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Prime Locations</h6>
                    <p className="text-gray-500 text-sm">Strategic areas</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Clear Titles</h6>
                    <p className="text-gray-500 text-sm">Legal assurance</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Flexible Payment</h6>
                    <p className="text-gray-500 text-sm">Easy options</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">High Appreciation</h6>
                    <p className="text-gray-500 text-sm">Value growth</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">Our residential plots are strategically located in areas with excellent connectivity, proximity to essential amenities, and planned infrastructure development. Investing in a residential plot in Dholera SIR today means securing a valuable asset for the future.</p>
              <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">Enquire Now</Link>
            </div>
            <div className="w-full lg:w-1/2">
              <ParallaxScroll speed={-0.1}>
                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                  <img 
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    src="/src/assets/img/residential-plot.svg" 
                    alt="Residential Plots in Dholera SIR" 
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-3xl font-bold px-6 py-3 border-2 border-white rounded-md">Premium Plots</span>
                  </div>
                </div>
              </ParallaxScroll>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Commercial Properties Section */}
      <ParallaxSection 
        backgroundImage="/src/assets/img/commercial-property.svg"
        height="auto"
        overlayColor="rgba(255, 255, 255, 0.92)"
        speed={0.3}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <ParallaxScroll speed={-0.1}>
                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                  <img 
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    src="/src/assets/img/commercial-property.svg" 
                    alt="Commercial Properties in Dholera SIR" 
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-3xl font-bold px-6 py-3 border-2 border-white rounded-md">Business Spaces</span>
                  </div>
                </div>
              </ParallaxScroll>
            </div>
            <div className="w-full lg:w-1/2">
              <ParallaxScroll speed={0.1}>
                <h6 className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wider animate-fade-in">Business Opportunities</h6>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Commercial Properties in Dholera SIR</h2>
                <div className="h-1 w-24 bg-blue-600 mb-6 animate-slide-up"></div>
                <p className="text-gray-600 mb-6 animate-fade-in">Our commercial properties in Dholera SIR offer excellent opportunities for businesses looking to establish a presence in this emerging economic hub. From retail spaces to office complexes, we have options to suit various business needs.</p>
              </ParallaxScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Strategic Business Locations</h6>
                    <p className="text-gray-500 text-sm">Prime areas</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">High Footfall Areas</h6>
                    <p className="text-gray-500 text-sm">Customer traffic</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Modern Infrastructure</h6>
                    <p className="text-gray-500 text-sm">Smart facilities</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Growth Potential</h6>
                    <p className="text-gray-500 text-sm">Future value</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">Investing in commercial properties in Dholera SIR offers significant advantages, including proximity to industrial zones, excellent connectivity, and a growing population base. Our team can help you identify the right commercial property based on your business requirements.</p>
              <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">Enquire Now</Link>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Industrial Plots Section */}
      <ParallaxSection 
        backgroundImage="/src/assets/img/industrial-plot.svg"
        height="auto"
        overlayColor="rgba(243, 244, 246, 0.92)"
        speed={0.3}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <ParallaxScroll speed={0.1}>
                <h6 className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wider animate-fade-in">Industrial Growth</h6>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Industrial Plots in Dholera SIR</h2>
                <div className="h-1 w-24 bg-blue-600 mb-6 animate-slide-up"></div>
                <p className="text-gray-600 mb-6 animate-fade-in">Our industrial plots in Dholera SIR are designed to meet the needs of manufacturing, warehousing, and other industrial operations. Located in designated industrial zones, these plots offer excellent infrastructure and connectivity.</p>
              </ParallaxScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Strategic Industrial Locations</h6>
                    <p className="text-gray-500 text-sm">Prime zones</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Excellent Connectivity</h6>
                    <p className="text-gray-500 text-sm">Transport links</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Robust Infrastructure</h6>
                    <p className="text-gray-500 text-sm">Ready utilities</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Government Incentives</h6>
                    <p className="text-gray-500 text-sm">Tax benefits</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">Dholera SIR's status as a key node in the Delhi-Mumbai Industrial Corridor makes it an ideal location for industrial operations. With planned logistics hubs, freight corridors, and an international airport, the region offers excellent connectivity for businesses with national and international operations.</p>
              <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">Enquire Now</Link>
            </div>
            <div className="w-full lg:w-1/2">
              <ParallaxScroll speed={-0.1}>
                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                  <img 
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    src="/src/assets/img/industrial-plot.svg" 
                    alt="Industrial Plots in Dholera SIR" 
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-3xl font-bold px-6 py-3 border-2 border-white rounded-md">Industrial Zones</span>
                  </div>
                </div>
              </ParallaxScroll>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Call to Action Section */}
      <ParallaxSection 
        backgroundImage="/src/assets/img/parallax-bg-2.svg"
        height="500px"
        overlayColor="rgba(17, 24, 39, 0.85)"
        speed={0.5}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <ParallaxScroll direction="up" speed={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Invest in Dholera SIR?</h2>
              <p className="text-xl text-gray-200 mb-8">Our team of experts is ready to guide you through the investment process and help you find the perfect property in Dholera SIR. Contact us today to schedule a consultation.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">Contact Us</Link>
                <Link to="/about" className="inline-block bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-4 px-10 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">Learn More</Link>
              </div>
            </ParallaxScroll>
          </div>
        </div>
      </ParallaxSection>
    </>
  );
}

export default Services;
