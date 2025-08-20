import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import residentialPlot from '../assets/img/residential-plot.svg';
import commercialProperty from '../assets/img/commercial-property.svg';
import industrialPlot from '../assets/img/industrial-plot.svg';

function LandDeal() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Land deal data
  const landDeals = [
    {
      id: 1,
      title: "Premium Residential Plot",
      location: "Town Planning Scheme 1, Dholera SIR",
      area: "200 sq. yards",
      price: "₹25 Lakhs",
      type: "residential",
      features: ["Corner Plot", "Near Park", "Road Facing", "DMIC Proximity"],
      description: "Prime residential plot in the heart of Dholera SIR with excellent connectivity and future appreciation potential.",
      image: residentialPlot
    },
    {
      id: 2,
      title: "Commercial Land Parcel",
      location: "Central Business District, Dholera SIR",
      area: "500 sq. yards",
      price: "₹75 Lakhs",
      type: "commercial",
      features: ["Main Road Access", "High Visibility", "Corner Property", "Near Metro Station"],
      description: "Strategic commercial land parcel ideal for retail, office space, or mixed-use development in the upcoming business hub of Dholera.",
      image: commercialProperty
    },
    {
      id: 3,
      title: "Industrial Plot",
      location: "Industrial Zone, Dholera SIR",
      area: "1000 sq. yards",
      price: "₹1.2 Crore",
      type: "industrial",
      features: ["Near Port Connectivity", "Power Substation Proximity", "Water Supply", "Waste Management"],
      description: "Large industrial plot with excellent infrastructure support, ideal for manufacturing units, warehouses, or logistics facilities.",
      image: industrialPlot
    },
    {
      id: 4,
      title: "Residential Plot Package",
      location: "Residential Zone 2, Dholera SIR",
      area: "150 sq. yards",
      price: "₹18 Lakhs",
      type: "residential",
      features: ["Gated Community", "Park View", "Near School", "24/7 Security"],
      description: "Affordable residential plot in a planned community with modern amenities and excellent growth potential.",
      image: residentialPlot
    },
    {
      id: 5,
      title: "Premium Commercial Corner",
      location: "Town Center, Dholera SIR",
      area: "300 sq. yards",
      price: "₹60 Lakhs",
      type: "commercial",
      features: ["Prime Location", "High Footfall", "Wide Frontage", "Multiple Access Points"],
      description: "Prime commercial property at a strategic location ideal for retail, showroom, or hospitality ventures with high visibility.",
      image: commercialProperty
    },
    {
      id: 6,
      title: "Industrial Land with Shed",
      location: "Manufacturing Hub, Dholera SIR",
      area: "2000 sq. yards",
      price: "₹2.5 Crore",
      type: "industrial",
      features: ["Pre-built Shed", "Heavy Power Connection", "Effluent Treatment", "Logistics Support"],
      description: "Ready-to-use industrial property with pre-built shed, ideal for immediate business setup with all necessary infrastructure in place.",
      image: industrialPlot
    }
  ];

  // Filter land deals based on active filter
  const filteredDeals = activeFilter === 'all' 
    ? landDeals 
    : landDeals.filter(deal => deal.type === activeFilter);

  return (
    <div className="land-deals-page">
      {/* Page Header */}
      <header className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-blue-700"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-900 opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-up">Land Deals in Dholera SIR</h1>
              <p className="text-xl text-white mb-6 animate-slide-up opacity-0 animation-delay-200">Explore premium land opportunities in India's first planned smart city with excellent appreciation potential</p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0 animate-slide-up opacity-0 animation-delay-300">
              <a href="#contact-section" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg">Contact Us</a>
            </div>
          </div>
        </div>
      </header>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              className={`px-5 py-2 rounded-lg font-medium transition-colors duration-300 ${activeFilter === 'all' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'}`}
              onClick={() => setActiveFilter('all')}
            >
              All Properties
            </button>
            <button 
              className={`px-5 py-2 rounded-lg font-medium transition-colors duration-300 ${activeFilter === 'residential' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'}`}
              onClick={() => setActiveFilter('residential')}
            >
              Residential
            </button>
            <button 
              className={`px-5 py-2 rounded-lg font-medium transition-colors duration-300 ${activeFilter === 'commercial' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'}`}
              onClick={() => setActiveFilter('commercial')}
            >
              Commercial
            </button>
            <button 
              className={`px-5 py-2 rounded-lg font-medium transition-colors duration-300 ${activeFilter === 'industrial' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'}`}
              onClick={() => setActiveFilter('industrial')}
            >
              Industrial
            </button>
          </div>
        </div>

        {/* Land Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeals.length > 0 ? (
            filteredDeals.map(deal => (
              <div key={deal.id} className="animate-fade-in">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative">
                    <img 
                      src={deal.image} 
                      className="w-full h-48 object-cover" 
                      alt={deal.title} 
                    />
                    <span className="absolute top-3 right-3 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {deal.type.charAt(0).toUpperCase() + deal.type.slice(1)}
                    </span>
                  </div>
                  <div className="p-5 flex-grow">
                    <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                    <p className="text-gray-500 mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {deal.location}
                    </p>
                    <div className="flex justify-between mb-4">
                      <span className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                        </svg>
                        {deal.area}
                      </span>
                      <span className="text-blue-600 font-bold">{deal.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{deal.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {deal.features.map((feature, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1.5 rounded flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <a href="#contact-section" className="block w-full text-center bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg py-2.5 transition-colors duration-300">
                      Request Details
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="max-w-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">No properties found</h3>
                <p className="text-gray-500 mb-6">We couldn't find any properties matching your criteria.</p>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 transition-colors duration-300"
                  onClick={() => setActiveFilter('all')}
                >
                  View All Properties
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact-section" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Interested in Our Land Deals?</h2>
              <p className="text-xl text-gray-600">Fill out the form below and our property experts will get in touch with you to provide more details.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200" 
                        placeholder="Your Name" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200" 
                        placeholder="Your Phone" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200" 
                        placeholder="Your Email" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                      <select 
                        id="propertyType" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200" 
                        required 
                        defaultValue=""
                      >
                        <option value="" disabled>Select Property Type</option>
                        <option value="residential">Residential Plot</option>
                        <option value="commercial">Commercial Property</option>
                        <option value="industrial">Industrial Plot</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
                      <select 
                        id="budget" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200" 
                        required 
                        defaultValue=""
                      >
                        <option value="" disabled>Select Budget Range</option>
                        <option value="below-25">Below ₹25 Lakhs</option>
                        <option value="25-50">₹25 Lakhs - ₹50 Lakhs</option>
                        <option value="50-1cr">₹50 Lakhs - ₹1 Crore</option>
                        <option value="above-1cr">Above ₹1 Crore</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Requirements</label>
                      <textarea 
                        id="message" 
                        rows="4" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200" 
                        placeholder="Tell us about your specific requirements"
                      ></textarea>
                    </div>
                    <div className="md:col-span-2 mt-4">
                      <button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                      >
                        Submit Inquiry
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section id="why-invest" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Invest in Dholera SIR Land?</h2>
            <p className="text-xl text-gray-600">Secure your future with strategic land investments in India's first planned smart city</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">High ROI Potential</h3>
                <p className="text-gray-600">With government-backed infrastructure development, land values in Dholera SIR are projected to appreciate significantly over the coming years.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Location</h3>
                <p className="text-gray-600">Located in the Delhi-Mumbai Industrial Corridor with excellent connectivity to major cities, ports, and transportation hubs.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Investment</h3>
                <p className="text-gray-600">Government-approved project with clear titles, proper documentation, and transparent processes ensuring your investment is secure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandDeal;
