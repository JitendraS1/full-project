import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../components/ParallaxSection';
import ParallaxScroll from '../components/ParallaxScroll';

function Projects() {
  // State for active project filter
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Project data
  const projects = [
    {
      id: 1,
      type: 'residential',
      title: 'Green Valley Residences',
      location: 'Dholera SIR, Sector 7',
      area: '500-1000 sq.ft',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073',
      description: 'Premium residential plots in a prime location with excellent connectivity and amenities.'
    },
    {
      id: 2,
      type: 'commercial',
      title: 'Dholera Business Hub',
      location: 'Dholera SIR, Sector 3',
      area: '1000-5000 sq.ft',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1769',
      description: 'Modern commercial spaces designed for businesses looking to establish presence in Dholera SIR.'
    },
    {
      id: 3,
      type: 'industrial',
      title: 'Tech Manufacturing Zone',
      location: 'Dholera SIR, Sector 9',
      area: '5000-20000 sq.ft',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      description: 'Industrial plots ideal for manufacturing units with excellent infrastructure and connectivity.'
    },
    {
      id: 4,
      type: 'residential',
      title: 'Sunrise Apartments',
      location: 'Dholera SIR, Sector 5',
      area: '800-1200 sq.ft',
      status: 'Upcoming',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974',
      description: 'Luxury apartments with modern amenities and beautiful surroundings in the heart of Dholera SIR.'
    },
    {
      id: 5,
      type: 'commercial',
      title: 'Dholera Retail Plaza',
      location: 'Dholera SIR, Sector 2',
      area: '500-2000 sq.ft',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=1770',
      description: 'Retail spaces in high-footfall areas, perfect for businesses looking to tap into the growing market.'
    },
    {
      id: 6,
      type: 'industrial',
      title: 'Logistics Park',
      location: 'Dholera SIR, Sector 8',
      area: '10000-50000 sq.ft',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070',
      description: 'Strategically located logistics park with excellent connectivity to major transportation routes.'
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  // Status badge color mapping
  const statusColors = {
    'Completed': 'bg-green-600',
    'Ongoing': 'bg-blue-600',
    'Upcoming': 'bg-yellow-600'
  };

  return (
    <div className="projects-page">
      {/* Page Header */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
        height="auto"
        overlayColor="#673a377e"
        speed={0.4}
        className="py-32 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <ParallaxScroll speed={-0.2}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">Our Projects</h1>
              <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Explore our diverse portfolio of residential, commercial, and industrial projects in Dholera SIR
              </p>
              <nav className="flex justify-center">
                <ol className="flex space-x-2 text-gray-300">
                  <li><Link to="/" className="text-white hover:text-blue-400 transition duration-300">Home</Link></li>
                  <li><span className="mx-2">/</span></li>
                  <li className="breadcrumb-item text-blue-200 active">Projects</li>
                </ol>
              </nav>
            </ParallaxScroll>
          </div>
        </div>
      </ParallaxSection>

      {/* Projects Content */}
      <div className="container mx-auto px-4 py-16 relative overflow-hidden">
        {/* Filter Buttons */}
        <div className="mb-12">
          <div className="text-center">
            <button 
              className={`${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} px-6 py-2 rounded-full mr-3 mb-3 transition duration-300 hover:shadow-lg`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`${activeFilter === 'residential' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} px-6 py-2 rounded-full mr-3 mb-3 transition duration-300 hover:shadow-lg`}
              onClick={() => setActiveFilter('residential')}
            >
              Residential
            </button>
            <button 
              className={`${activeFilter === 'commercial' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} px-6 py-2 rounded-full mr-3 mb-3 transition duration-300 hover:shadow-lg`}
              onClick={() => setActiveFilter('commercial')}
            >
              Commercial
            </button>
            <button 
              className={`${activeFilter === 'industrial' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} px-6 py-2 rounded-full mb-3 transition duration-300 hover:shadow-lg`}
              onClick={() => setActiveFilter('industrial')}
            >
              Industrial
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <ParallaxScroll speed={0.05} className="z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative">
                  <img 
                    src={project.image} 
                    className="w-full h-64 object-cover" 
                    alt={project.title} 
                  />
                  <div className={`absolute top-4 right-4 ${statusColors[project.status]} text-white text-sm font-semibold py-1 px-3 rounded-full`}>
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-600 mb-2">
                      <i className="fas fa-map-marker-alt text-blue-600 mr-2"></i>
                      {project.location}
                    </p>
                    <p className="text-gray-600">
                      <i className="fas fa-ruler-combined text-blue-600 mr-2"></i>
                      {project.area}
                    </p>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div>
                <i className="fas fa-search text-5xl text-gray-400 mb-4"></i>
                <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
                <p className="text-gray-600 mb-6">We couldn't find any projects matching your criteria.</p>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300"
                  onClick={() => setActiveFilter('all')}
                >
                  View All Projects
                </button>
              </div>
            </div>
          )}
        </div>
      </ParallaxScroll>
      </div>

      {/* Call to Action Section */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070"
        height="auto"
        overlayColor="#673a377e"
        speed={0.3}
        className="py-32 mb-8  flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 text-center">
          <ParallaxScroll speed={-0.15}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Looking for a Custom Project?</h2>
            <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
              Contact our team to discuss your specific requirements and explore customized property solutions in Dholera SIR.
            </p>
            <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              Contact Our Experts
            </Link>
          </ParallaxScroll>
        </div>
      </ParallaxSection>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100 relative overflow-hidden">
        <ParallaxScroll speed={0.03} className="z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our <span className="text-blue-600">Newsletter</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay updated with our latest projects, property listings, and investment opportunities in Dholera SIR.
              </p>
            </div>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Your Email Address"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        </ParallaxScroll>
      </section>
    </div>
  );
}

export default Projects;
