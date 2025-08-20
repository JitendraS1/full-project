import React, { useState } from 'react';

function Projects() {
  // State for active project filter
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Projects data
  const projects = [
    {
      id: 1,
      title: "Nestoria Green Valley",
      type: "residential",
      location: "Town Planning Scheme 2, Dholera SIR",
      area: "25 Acres",
      status: "Ongoing",
      completion: "December 2025",
      description: "A premium residential township offering plots of various sizes with world-class amenities including parks, clubhouse, sports facilities, and 24/7 security.",
      features: ["Gated Community", "Landscaped Gardens", "Clubhouse", "Sports Facilities", "24/7 Security", "Underground Utilities"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
      gallery: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
        "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2070",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2296"
      ]
    },
    {
      id: 2,
      title: "Nestoria Business Hub",
      type: "commercial",
      location: "Central Business District, Dholera SIR",
      area: "10 Acres",
      status: "Upcoming",
      completion: "June 2026",
      description: "A state-of-the-art commercial complex featuring office spaces, retail outlets, and entertainment zones designed for modern businesses.",
      features: ["Office Spaces", "Retail Outlets", "Food Court", "Conference Facilities", "Ample Parking", "Smart Building Technology"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
        "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2070",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2296"
      ]
    },
    {
      id: 3,
      title: "Nestoria Industrial Park",
      type: "industrial",
      location: "Industrial Zone, Dholera SIR",
      area: "50 Acres",
      status: "Planning",
      completion: "December 2027",
      description: "A comprehensive industrial park with ready-to-use plots and pre-built sheds for manufacturing, warehousing, and logistics operations.",
      features: ["Ready Industrial Plots", "Pre-built Sheds", "Power Substation", "Water Treatment Plant", "Logistics Support", "Waste Management"],
      image: "https://images.unsplash.com/photo-1565636291267-c03b2a0f8c5e?q=80&w=2070",
      gallery: [
        "https://images.unsplash.com/photo-1565636291267-c03b2a0f8c5e?q=80&w=2070",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2296"
      ]
    },
    {
      id: 4,
      title: "Nestoria Harmony Residences",
      type: "residential",
      location: "Residential Zone 3, Dholera SIR",
      area: "15 Acres",
      status: "Ongoing",
      completion: "March 2026",
      description: "An exclusive residential enclave offering premium plots with a focus on sustainable living and community development.",
      features: ["Eco-friendly Design", "Solar Power Integration", "Rainwater Harvesting", "Community Center", "Jogging Tracks", "Children's Play Area"],
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067",
      gallery: [
        "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2296"
      ]
    },
    {
      id: 5,
      title: "Nestoria Tech Park",
      type: "commercial",
      location: "IT Zone, Dholera SIR",
      area: "20 Acres",
      status: "Upcoming",
      completion: "September 2026",
      description: "A dedicated technology park designed to cater to IT companies, startups, and tech-enabled services with modern infrastructure.",
      features: ["High-speed Internet", "Uninterrupted Power Supply", "Plug-and-Play Offices", "Incubation Center", "Recreational Spaces", "24/7 Access Control"],
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069",
      gallery: [
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069",
        "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2070",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2296"
      ]
    },
    {
      id: 6,
      title: "Nestoria Logistics Hub",
      type: "industrial",
      location: "Transport Hub, Dholera SIR",
      area: "30 Acres",
      status: "Planning",
      completion: "June 2028",
      description: "A strategic logistics and warehousing facility with excellent connectivity to ports, highways, and the upcoming international airport.",
      features: ["Warehousing Facilities", "Container Yard", "Cold Storage", "Transport Management", "Customs Clearance", "24/7 Operations"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
      gallery: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
        "https://images.unsplash.com/photo-1565636291267-c03b2a0f8c5e?q=80&w=2070",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2296"
      ]
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  // State for selected project (for modal)
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-page">
      {/* Page Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold mb-3">Our Projects</h1>
              <p className="text-xl mb-0">Discover Nestoria Group's premium residential, commercial, and industrial projects in Dholera SIR</p>
            </div>
            <div className="lg:w-1/3 lg:text-right mt-4 lg:mt-0">
              <a href="#contact-section" className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition duration-300">Inquire Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filter Buttons */}
        <div className="mb-10">
          <div className="w-full">
            <div className="text-center">
              <button 
                className={`${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} px-4 py-2 rounded mr-2 mb-2 transition duration-300 hover:bg-blue-700 hover:text-white`}
                onClick={() => setActiveFilter('all')}
              >
                All Projects
              </button>
              <button 
                className={`${activeFilter === 'residential' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} px-4 py-2 rounded mr-2 mb-2 transition duration-300 hover:bg-blue-700 hover:text-white`}
                onClick={() => setActiveFilter('residential')}
              >
                Residential
              </button>
              <button 
                className={`${activeFilter === 'commercial' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} px-4 py-2 rounded mr-2 mb-2 transition duration-300 hover:bg-blue-700 hover:text-white`}
                onClick={() => setActiveFilter('commercial')}
              >
                Commercial
              </button>
              <button 
                className={`${activeFilter === 'industrial' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} px-4 py-2 rounded mb-2 transition duration-300 hover:bg-blue-700 hover:text-white`}
                onClick={() => setActiveFilter('industrial')}
              >
                Industrial
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <div key={project.id} className="h-full">
                <div className="h-full bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      className="w-full rounded-t-lg" 
                      alt={project.title} 
                      style={{ height: '220px', objectFit: 'cover' }}
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${project.status === 'Ongoing' ? 'bg-green-500 text-white' : project.status === 'Upcoming' ? 'bg-yellow-400 text-gray-800' : 'bg-blue-400 text-white'}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white">
                        {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
                    <p className="text-gray-500 mb-2">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {project.location}
                    </p>
                    <div className="flex justify-between mb-3">
                      <span><i className="fas fa-ruler-combined mr-2"></i>{project.area}</span>
                      <span><i className="fas fa-calendar-alt mr-2"></i>{project.completion}</span>
                    </div>
                    <p className="text-gray-700">{project.description.substring(0, 120)}...</p>
                    <div className="mt-4 mb-3">
                      <h6 className="font-bold mb-2">Key Features:</h6>
                      <div className="flex flex-wrap">
                        {project.features.slice(0, 4).map((feature, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-1.5 rounded-full">
                            <i className="fas fa-check-circle text-green-500 mr-1"></i>
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 4 && (
                          <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-1.5 rounded-full">
                            +{project.features.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <button 
                      className="w-full py-2 px-4 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
                      onClick={() => setSelectedProject(project)}
                      data-bs-toggle="modal" 
                      data-bs-target="#projectModal"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="empty-state">
                <i className="fas fa-search text-4xl text-gray-400 mb-3"></i>
                <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                <p className="text-gray-500 mb-4">We couldn't find any projects matching your criteria.</p>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                  onClick={() => setActiveFilter('all')}
                >
                  View All Projects
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      <div className="modal fade" id="projectModal" tabIndex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            {selectedProject && (
              <>
                <div className="flex items-center justify-between p-4 border-b">
                  <h5 className="text-xl font-semibold" id="projectModalLabel">{selectedProject.title}</h5>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-bs-dismiss="modal" aria-label="Close">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                </div>
                <div className="p-6">
                  <div id={`project-${selectedProject.id}-carousel`} className="carousel slide mb-6" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      {selectedProject.gallery.map((_, index) => (
                        <button 
                          key={index}
                          type="button" 
                          data-bs-target={`#project-${selectedProject.id}-carousel`} 
                          data-bs-slide-to={index} 
                          className={index === 0 ? "active" : ""}
                          aria-current={index === 0 ? "true" : "false"}
                          aria-label={`Slide ${index + 1}`}
                        ></button>
                      ))}
                    </div>
                    <div className="carousel-inner rounded-lg overflow-hidden">
                      {selectedProject.gallery.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                          <img 
                            src={image} 
                            className="block w-full" 
                            alt={`${selectedProject.title} - Image ${index + 1}`}
                            style={{ height: '400px', objectFit: 'cover' }}
                          />
                        </div>
                      ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#project-${selectedProject.id}-carousel`} data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#project-${selectedProject.id}-carousel`} data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="mb-3 md:mb-0">
                      <h6 className="font-bold mb-3">Project Details</h6>
                      <ul className="space-y-3">
                        <li className="flex justify-between items-center border-b pb-2">
                          <span><i className="fas fa-map-marker-alt mr-2 text-blue-600"></i>Location</span>
                          <span className="text-gray-500">{selectedProject.location}</span>
                        </li>
                        <li className="flex justify-between items-center border-b pb-2">
                          <span><i className="fas fa-ruler-combined mr-2 text-blue-600"></i>Total Area</span>
                          <span className="text-gray-500">{selectedProject.area}</span>
                        </li>
                        <li className="flex justify-between items-center border-b pb-2">
                          <span><i className="fas fa-tag mr-2 text-blue-600"></i>Type</span>
                          <span className="text-gray-500">{selectedProject.type.charAt(0).toUpperCase() + selectedProject.type.slice(1)}</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold mb-3">Project Status</h6>
                      <ul className="space-y-3">
                        <li className="flex justify-between items-center border-b pb-2">
                          <span><i className="fas fa-hourglass-half mr-2 text-blue-600"></i>Current Status</span>
                          <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${selectedProject.status === 'Ongoing' ? 'bg-green-500 text-white' : selectedProject.status === 'Upcoming' ? 'bg-yellow-400 text-gray-800' : 'bg-blue-400 text-white'}`}>
                            {selectedProject.status}
                          </span>
                        </li>
                        <li className="flex justify-between items-center border-b pb-2">
                          <span><i className="fas fa-calendar-alt mr-2 text-blue-600"></i>Expected Completion</span>
                          <span className="text-gray-500">{selectedProject.completion}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h6 className="font-bold mb-2">Project Description</h6>
                    <p className="text-gray-700">{selectedProject.description}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="font-bold mb-3">Key Features</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index}>
                          <div className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            <span>{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-gray-200">
                  <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg mr-2 transition duration-300" data-bs-dismiss="modal">Close</button>
                  <a href="#contact-section" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300" data-bs-dismiss="modal">Inquire Now</a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact-section" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-2/3 text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Interested in Our Projects?</h2>
              <p className="text-xl text-gray-600">Fill out the form below and our project experts will get in touch with you to provide more details.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-6 md:p-8">
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="name" placeholder="Your Name" required />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="phone" placeholder="Your Phone" required />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="email" placeholder="Your Email" required />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="projectType" required defaultValue="">
                          <option value="" disabled>Select Project Type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Requirements</label>
                        <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="message" rows="4" placeholder="Tell us about your specific requirements"></textarea>
                      </div>
                      <div className="md:col-span-2 mt-4">
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300">Submit Inquiry</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
