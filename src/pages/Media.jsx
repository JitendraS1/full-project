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
      link: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
      link: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
          <div className="h-full bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src={item.link} 
                title={item.title} 
                allowFullScreen
                className="w-full h-full rounded-t-lg"
              ></iframe>
            </div>
            <div className="p-5">
              <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
              <p className="text-gray-500 mb-2">
                <small>
                  <i className="fas fa-calendar-alt mr-2"></i>{item.date} | 
                  <i className="fas fa-video ml-2 mr-2"></i>{item.source}
                </small>
              </p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        );
      case 'photo':
        return (
          <div className="h-full bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <img 
              src={item.image} 
              className="w-full rounded-t-lg" 
              alt={item.title} 
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="p-5">
              <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
              <p className="text-gray-500 mb-2">
                <small>
                  <i className="fas fa-calendar-alt mr-2"></i>{item.date} | 
                  <i className="fas fa-camera ml-2 mr-2"></i>{item.source}
                </small>
              </p>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <a href={item.link} className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded transition duration-300">View Full Gallery</a>
            </div>
          </div>
        );
      default: // news and press
        return (
          <div className="h-full bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <img 
              src={item.image} 
              className="w-full rounded-t-lg" 
              alt={item.title} 
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="p-5">
              <div className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white mb-2">
                {item.type === 'news' ? 'News Article' : 'Press Release'}
              </div>
              <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
              <p className="text-gray-500 mb-2">
                <small>
                  <i className="fas fa-calendar-alt mr-2"></i>{item.date} | 
                  <i className="fas fa-newspaper ml-2 mr-2"></i>{item.source}
                </small>
              </p>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <a href={item.link} className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded transition duration-300">Read More</a>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="media-page">
      {/* Page Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="w-full lg:w-2/3">
              <h1 className="text-4xl font-bold mb-4">Media Center</h1>
              <p className="text-xl mb-0">Stay updated with the latest news, press releases, videos, and photos from Nestoria Group and Dholera SIR</p>
            </div>
          </div>
        </div>
      </div>

      {/* Media Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filter Buttons */}
        <div className="mb-10">
          <div className="w-full">
            <div className="text-center">
              <button 
                className={`${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} px-4 py-2 rounded mr-2 mb-2 transition duration-300`}
                onClick={() => setActiveFilter('all')}
              >
                All Media
              </button>
              <button 
                className={`${activeFilter === 'news' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} px-4 py-2 rounded mr-2 mb-2 transition duration-300`}
                onClick={() => setActiveFilter('news')}
              >
                News Articles
              </button>
              <button 
                className={`${activeFilter === 'press' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} px-4 py-2 rounded mr-2 mb-2 transition duration-300`}
                onClick={() => setActiveFilter('press')}
              >
                Press Releases
              </button>
              <button 
                className={`${activeFilter === 'video' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} px-4 py-2 rounded mr-2 mb-2 transition duration-300`}
                onClick={() => setActiveFilter('video')}
              >
                Videos
              </button>
              <button 
                className={`${activeFilter === 'photo' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} px-4 py-2 rounded mb-2 transition duration-300`}
                onClick={() => setActiveFilter('photo')}
              >
                Photo Gallery
              </button>
            </div>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div key={item.id}>
                {renderMediaItem(item)}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div>
                <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
                <h3 className="text-2xl font-semibold mb-2">No media items found</h3>
                <p className="text-gray-500 mb-4">We couldn't find any media items matching your criteria.</p>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300"
                  onClick={() => setActiveFilter('all')}
                >
                  View All Media
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Media Contact Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-2/3 text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
              <p className="text-xl text-gray-600">For press inquiries, interview requests, or additional information about Nestoria Group and Dholera SIR, please contact our media relations team.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="mb-6 lg:mb-0">
              <div className="bg-white h-full rounded-lg shadow-md text-center p-6">
                <div>
                  <div className="mb-4">
                    <i className="fas fa-envelope text-4xl text-blue-600"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Email Us</h4>
                  <p className="text-gray-600 mb-4">Send your media inquiries directly to our press team.</p>
                  <a href="mailto:media@nestoriagroup.com" className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded transition duration-300">media@nestoriagroup.com</a>
                </div>
              </div>
            </div>
            <div className="mb-6 lg:mb-0">
              <div className="bg-white h-full rounded-lg shadow-md text-center p-6">
                <div>
                  <div className="mb-4">
                    <i className="fas fa-phone-alt text-4xl text-blue-600"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Call Us</h4>
                  <p className="text-gray-600 mb-4">Speak directly with our media relations team.</p>
                  <a href="tel:+919876543210" className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded transition duration-300">+91 98765 43210</a>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white h-full rounded-lg shadow-md text-center p-6">
                <div>
                  <div className="mb-4">
                    <i className="fas fa-download text-4xl text-blue-600"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Press Kit</h4>
                  <p className="text-gray-600 mb-4">Download our press kit with company information, logos, and high-resolution images.</p>
                  <a href="#" className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded transition duration-300">Download Press Kit</a>
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
