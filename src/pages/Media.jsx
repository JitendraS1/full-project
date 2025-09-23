import React, { useState } from 'react';

function Media() {
  // State for active media filter
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Media data
  const mediaItems = [
    {
      id: 1,
      type: 'news',
      title: 'Nestoria Group Announces New Residential Project in Dholera SIR',
      date: 'June 15, 2023',
      source: 'Real Estate Chronicle',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073',
      link: '#',
      description: 'Nestoria Group has announced the launch of a new residential project in Dholera SIR, offering premium plots with world-class amenities.'
    },
    {
      id: 2,
      type: 'press',
      title: 'Dholera SIR Infrastructure Development Accelerates',
      date: 'August 22, 2023',
      source: 'Business Standard',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
      link: '#',
      description: 'The infrastructure development in Dholera SIR is progressing at a rapid pace, with major roads, utilities, and smart city features being implemented.'
    },
    {
      id: 3,
      type: 'video',
      title: 'Dholera SIR: The Future of Urban Development',
      date: 'September 5, 2023',
      source: 'Nestoria Group YouTube Channel',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070',
      link: 'https://www.youtube.com/embed/2pcf-1kqTKk?si=OF3R40EKWNEgWHO8',
      description: 'A comprehensive overview of Dholera SIR and its potential as India\'s first planned smart city.'
    },
    {
      id: 4,
      type: 'photo',
      title: 'Aerial View of Dholera SIR Development',
      date: 'October 10, 2023',
      source: 'Nestoria Group Gallery',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      link: '#',
      description: 'Stunning aerial photographs showcasing the ongoing development and infrastructure projects in Dholera SIR.'
    },
    {
      id: 5,
      type: 'news',
      title: 'Government Announces New Incentives for Dholera SIR Investors',
      date: 'November 18, 2023',
      source: 'Economic Times',
      image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2076',
      link: '#',
      description: 'The government has announced new tax incentives and subsidies for businesses and investors in Dholera SIR to boost economic growth.'
    },
    {
      id: 6,
      type: 'press',
      title: 'Nestoria Group Recognized for Excellence in Real Estate',
      date: 'December 5, 2023',
      source: 'Real Estate Awards 2023',
      image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?q=80&w=2073',
      link: '#',
      description: 'Nestoria Group has been awarded the "Excellence in Real Estate Development" award at the prestigious Real Estate Awards 2023.'
    },
    {
      id: 7,
      type: 'video',
      title: 'Client Testimonials: Investing in Dholera SIR',
      date: 'January 12, 2024',
      source: 'Nestoria Group YouTube Channel',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074',
      link: 'https://www.youtube.com/embed/q_PJPHT7Sa8?si=JLkgqJzwBJq-GRKm',
      description: 'Hear from satisfied clients who have invested in Dholera SIR through Nestoria Group and their success stories.'
    },
    {
      id: 8,
      type: 'photo',
      title: 'Dholera SIR Master Plan Visualization',
      date: 'February 20, 2024',
      source: 'Nestoria Group Gallery',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2296',
      link: '#',
      description: 'Detailed visualizations and 3D renderings of the Dholera SIR master plan, showcasing the future development of the smart city.'
    },
    {
      id: 9,
      type: 'news',
      title: 'International Investors Show Interest in Dholera SIR',
      date: 'March 8, 2024',
      source: 'Financial Express',
      image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069',
      link: '#',
      description: 'International investors and companies are showing significant interest in Dholera SIR, with several major investment deals in the pipeline.'
    }
  ];

  // Filter media items based on active filter
  const filteredItems = activeFilter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === activeFilter);

  // Function to render media item based on type
  const renderMediaItem = (item) => {
    switch(item.type) {
      case 'video':
        return (
          <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="relative">
              <iframe 
                src={item.link} 
                title={item.title} 
                allowFullScreen
                className="w-full rounded-t-2xl"
                style={{ height: '250px', objectFit: 'cover' }}
              ></iframe>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <i className="fas fa-play text-blue-600 text-2xl ml-1"></i>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-video text-white text-sm"></i>
                </div>
                <span className="text-sm font-semibold text-red-600">Video</span>
              </div>
              <h5 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h5>
              <p className="text-gray-500 mb-4 text-sm">
                <i className="fas fa-calendar-alt mr-2"></i>{item.date} | 
                <i className="fas fa-video ml-2 mr-2"></i>{item.source}
              </p>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          </div>
        );
      case 'photo':
        return (
          <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="relative">
              <img 
                src={item.image} 
                className="w-full rounded-t-2xl group-hover:scale-110 transition-transform duration-500" 
                alt={item.title} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <i className="fas fa-expand text-blue-600 text-2xl"></i>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-camera text-white text-sm"></i>
                </div>
                <span className="text-sm font-semibold text-green-600">Photo Gallery</span>
              </div>
              <h5 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h5>
              <p className="text-gray-500 mb-4 text-sm">
                <i className="fas fa-calendar-alt mr-2"></i>{item.date} | 
                <i className="fas fa-camera ml-2 mr-2"></i>{item.source}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
              <a href={item.link} className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <i className="fas fa-images mr-2"></i>View Full Gallery
              </a>
            </div>
          </div>
        );
      default: // news and press
        return (
          <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="relative">
              <img 
                src={item.image} 
                className="w-full rounded-t-2xl group-hover:scale-110 transition-transform duration-500" 
                alt={item.title} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <i className="fas fa-external-link-alt text-blue-600 text-2xl"></i>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className={`w-8 h-8 ${item.type === 'news' ? 'bg-blue-500' : 'bg-purple-500'} rounded-full flex items-center justify-center mr-3`}>
                  <i className={`fas ${item.type === 'news' ? 'fa-newspaper' : 'fa-bullhorn'} text-white text-sm`}></i>
                </div>
                <span className={`text-sm font-semibold ${item.type === 'news' ? 'text-blue-600' : 'text-purple-600'}`}>
                  {item.type === 'news' ? 'News Article' : 'Press Release'}
                </span>
              </div>
              <h5 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h5>
              <p className="text-gray-500 mb-4 text-sm">
                <i className="fas fa-calendar-alt mr-2"></i>{item.date} | 
                <i className="fas fa-newspaper ml-2 mr-2"></i>{item.source}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
              <a href={item.link} className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <i className="fas fa-arrow-right mr-2"></i>Read More
              </a>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="media-page">
      {/* Page Header */}
      <div className="relative bg-blue-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center">
            <div className="w-full lg:w-2/3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Media <span className="text-blue-600">Center</span>
              </h1>
              <div className="w-24 h-1 bg-blue-300 mb-6"></div>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                Stay updated with the latest news, press releases, videos, and photos from Nestoria Group and Dholera SIR
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <i className="fas fa-play mr-2"></i>Watch Videos
                </button>
                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  <i className="fas fa-download mr-2"></i>Download Press Kit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Media Content */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="mb-12">
            <div className="w-full">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Browse Media</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  <button 
                    className={`${activeFilter === 'all' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    onClick={() => setActiveFilter('all')}
                  >
                    <i className="fas fa-th mr-2"></i>All Media
                  </button>
                  <button 
                    className={`${activeFilter === 'news' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    onClick={() => setActiveFilter('news')}
                  >
                    <i className="fas fa-newspaper mr-2"></i>News Articles
                  </button>
                  <button 
                    className={`${activeFilter === 'press' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    onClick={() => setActiveFilter('press')}
                  >
                    <i className="fas fa-bullhorn mr-2"></i>Press Releases
                  </button>
                  <button 
                    className={`${activeFilter === 'video' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    onClick={() => setActiveFilter('video')}
                  >
                    <i className="fas fa-video mr-2"></i>Videos
                  </button>
                  <button 
                    className={`${activeFilter === 'photo' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    onClick={() => setActiveFilter('photo')}
                  >
                    <i className="fas fa-camera mr-2"></i>Photo Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <div key={item.id} className="transform hover:scale-105 transition-all duration-300">
                  {renderMediaItem(item)}
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-search text-3xl text-blue-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">No media items found</h3>
                  <p className="text-gray-600 mb-6">We couldn't find any media items matching your criteria.</p>
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    onClick={() => setActiveFilter('all')}
                  >
                    <i className="fas fa-refresh mr-2"></i>View All Media
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Media Contact Section */}
      <section className="relative bg-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            <div className="w-full lg:w-2/3 text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Media <span className="text-blue-600">Inquiries</span>
              </h2>
              <div className="w-24 h-1 bg-blue-300 mx-auto mb-8"></div>
              <p className="text-xl text-blue-100 leading-relaxed">
                For press inquiries, interview requests, or additional information about Nestoria Group and Dholera SIR, please contact our media relations team.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="mb-8 lg:mb-0">
              <div className="bg-white/10 backdrop-blur-sm h-full rounded-2xl shadow-xl text-center p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-envelope text-2xl text-white"></i>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Email Us</h4>
                  <p className="text-blue-100 mb-6 leading-relaxed">Send your media inquiries directly to our press team.</p>
                  <a href="mailto:media@nestoriagroup.com" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <i className="fas fa-paper-plane mr-2"></i>media@nestoriagroup.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-8 lg:mb-0">
              <div className="bg-white/10 backdrop-blur-sm h-full rounded-2xl shadow-xl text-center p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-phone-alt text-2xl text-white"></i>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Call Us</h4>
                  <p className="text-blue-100 mb-6 leading-relaxed">Speak directly with our media relations team.</p>
                  <a href="tel:+919876543210" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <i className="fas fa-phone mr-2"></i>+91 98765 43210
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white/10 backdrop-blur-sm h-full rounded-2xl shadow-xl text-center p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-download text-2xl text-white"></i>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Press Kit</h4>
                  <p className="text-blue-100 mb-6 leading-relaxed">Download our press kit with company information, logos, and high-resolution images.</p>
                  <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <i className="fas fa-download mr-2"></i>Download Press Kit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Media;
