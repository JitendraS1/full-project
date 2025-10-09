import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../components/ParallaxSection';
import ParallaxScroll from '../components/ParallaxScroll';
import projectbanner from '/src/assets/img/projects-Banner.png';
import NetureNest from '/src/assets/img/NatureNest.png';
import image1 from '/src/assets/img/new-image.jpg';
import industrialImg from '/src/assets/img/Industrial-project.png';
import residentialImg from '/src/assets/img/Residential-project.png';
import commercialImg from '/src/assets/img/COMMERCIAL-project.png';
function Projects() {
  // State for active project filter
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Project data
  const projects = [
    {
      id: 1,
      type: 'residential',
      title: 'Nature Nest',
      location: ' Village Adhelai 0Km DSIR',
      area: '42 Acre',
      // status: 'Completed',
      image: image1,
      description: 'Premium residential plots in a prime location with excellent connectivity and amenities.'
    },
    {
      id: 2,
      type: 'residential',
      title: 'Sunshine Residency-III',
      location: 'Dholera SIR, ',
      area: '1500-10000 sq.yard',
      // status: 'Completed',
      image: image1,
      description: 'Modern residential plots in a prime location with excellent connectivity and amenities.'
    },
    {
      id: 3,
      type: 'industrial',
      title: 'Tech Manufacturing Zone',
      location: 'Dholera SIR, Sector 9',
      area: '5000-20000 sq.yard',
      // status: 'Ongoing',
      image: industrialImg,
      description: 'Industrial plots ideal for manufacturing units with excellent infrastructure and connectivity.'
    },
    {
      id: 4,
      type: 'residential',
      title: 'Sunrise Apartments',
      location: 'Dholera SIR, Sector 5',
      area: '800-1200 sq.yard',
      // status: 'Upcoming',
      image: residentialImg,
      description: 'Luxury apartments with modern amenities and beautiful surroundings in the heart of Dholera SIR.'
    },
    {
      id: 5,
      type: 'commercial',
      title: 'Dholera Retail Plaza',
      location: 'Dholera SIR, Sector 2',
      area: '500-2000 sq.yard',
      // status: 'Completed',
      image: commercialImg,
      description: 'Retail spaces in high-footfall areas, perfect for businesses looking to tap into the growing market.'
    },
    {
      id: 6,
      type: 'industrial',
      title: 'Logistics Park',
      location: 'Dholera SIR, Sector 8',
      area: '10000-50000 sq.yard',
      // status: 'Ongoing',
      image: industrialImg,
      description: 'Strategically located logistics park with excellent connectivity to major transportation routes.'
    },
    {
      id: 7,
      type: 'industrial',
      title: 'Logistics Park',
      location: 'Dholera SIR, Sector 8',
      area: '10000-50000 sq.yard',
      // status: 'Ongoing',
      image: industrialImg,
      description: 'Strategically located logistics park with excellent connectivity to major transportation routes.'
    },
    {
      id: 8,
      type: 'industrial',
      title: 'Logistics Park',
      location: 'Dholera SIR, Sector 8',
      area: '10000-50000 sq.yard',
      // status: 'Ongoing',
      image: industrialImg,
      description: 'Strategically located logistics park with excellent connectivity to major transportation routes.'
    },
    {
      id: 9,
      type: 'industrial',
      title: 'Logistics Park',
      location: 'Dholera SIR, Sector 8',
      area: '10000-50000 sq.yard',
      // status: 'Ongoing',
      image: industrialImg,
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
    <div className="projects-page overflow-hidden bg-[#673a37]">
      {/* Page Header */}
      <ParallaxSection
        backgroundImage={projectbanner}
        height="100vh"
        overlayColor="#673a377e"
        speed={0.4}
        className="flex items-center justify-center text-center"
        backgroundSize="cover"
      >
        <div className="container mx-auto px-4 relative z-10 w-full h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 animate-slide-up font-condor leading-tight">
              Our <span className="text-blue-300">Projects</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-10 animate-slide-up opacity-0 animation-delay-300 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse portfolio of residential, commercial, and industrial projects in Dholera SIR
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-slide-up opacity-0 animation-delay-500">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-lg py-4 px-8 md:px-10 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-search mr-2"></i>
                  Browse Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group bg-transparent hover:bg-white/10 text-white font-bold text-base md:text-lg py-4 px-8 md:px-10 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm">
                <span className="flex items-center justify-center">
                  <i className="fas fa-phone mr-2"></i>
                  Get Consultation
                </span>
              </button>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Projects Content */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="mb-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Browse Our Portfolio</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  className={`${activeFilter === 'all' ? 'bg-blue-700 text-white shadow-lg' : 'bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-50'} px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                  onClick={() => setActiveFilter('all')}
                >
                  <i className="fas fa-th mr-2"></i>All Projects
                </button>
                <button 
                  className={`${activeFilter === 'residential' ? 'bg-blue-700 text-white shadow-lg' : 'bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-50'} px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                  onClick={() => setActiveFilter('residential')}
                >
                  <i className="fas fa-home mr-2"></i>Residential
                </button>
                <button 
                  className={`${activeFilter === 'commercial' ? 'bg-blue-700 text-white shadow-lg' : 'bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-50'} px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                  onClick={() => setActiveFilter('commercial')}
                >
                  <i className="fas fa-building mr-2"></i>Commercial
                </button>
                <button 
                  className={`${activeFilter === 'industrial' ? 'bg-blue-700 text-white shadow-lg' : 'bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-50'} px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                  onClick={() => setActiveFilter('industrial')}
                >
                  <i className="fas fa-industry mr-2"></i>Industrial
                </button>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <ParallaxScroll speed={0.05} className="z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                      alt={project.title} 
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <i className="fas fa-eye text-blue-600 text-2xl"></i>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      {/* <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold py-2 px-4 rounded-full shadow-lg">
                        {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                      </div> */}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                    </div>
                    <div className="mb-6">
                      <p className="text-gray-600 mb-3 flex items-center">
                        <i className="fas fa-map-marker-alt text-blue-600 mr-3 w-5"></i>
                        {project.location}
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <i className="fas fa-ruler-combined text-blue-600 mr-3 w-5"></i>
                        {project.area}
                      </p>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                    <Link to="/contact" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      <i className="fas fa-arrow-right mr-2"></i>Enquire Now
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-search text-3xl text-blue-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">No projects found</h3>
                  <p className="text-gray-600 mb-6">We couldn't find any projects matching your criteria.</p>
                  <button 
                    className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    onClick={() => setActiveFilter('all')}
                  >
                    <i className="fas fa-refresh mr-2"></i>View All Projects
                  </button>
                </div>
              </div>
            )}
          </div>
        </ParallaxScroll>
        </div>
      </div>

      {/* Call to Action Section */}
      <ParallaxSection
        backgroundImage={projectbanner}
        height="auto"
        overlayColor="#673a377e"
        speed={0.3}
        className="py-20 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Looking for a <span className="text-blue-200">Custom Project?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-cyan-300 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Contact our team to discuss your specific requirements and explore customized property solutions in Dholera SIR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <i className="fas fa-phone mr-2"></i>Contact Our Experts
            </Link>
            <Link to="/about" className="inline-block bg-transparent backdrop-blur-sm hover:bg-white/10 text-white border-2 border-white hover:border-blue-300 font-bold py-4 px-10 rounded-lg transition-all duration-300">
              <i className="fas fa-info-circle mr-2"></i>Learn More
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* Newsletter Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <ParallaxScroll speed={0.03} className="z-10">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Subscribe to Our <span className="text-blue-200">Newsletter</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-cyan-300 mx-auto mb-8"></div>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Stay updated with our latest projects, property listings, and investment opportunities in Dholera SIR.
                </p>
              </div>
              <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.elements.email.value;
                fetch('/send-email.php', {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: "Newsletter Subscriber",
                    email,
                    phone: "",
                    subject: "Newsletter Subscription",
                    message: `Please subscribe ${email} to the newsletter.`,
                    formType: 'contact'
                  })
                })
                .then(res => res.json())
                .then(data => {
                  if (data.success) {
                    alert("Thank you for subscribing!");
                    e.target.reset();
                  } else {
                    alert(data.message || "Failed to subscribe.");
                  }
                })
                .catch(() => {
                  alert("Failed to subscribe. Please try again later.");
                });
              }}>
                <input 
                  type="email" 
                  name="email"
                  className="flex-grow px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300" 
                  placeholder="Your Email Address"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <i className="fas fa-paper-plane mr-2"></i>Subscribe
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
