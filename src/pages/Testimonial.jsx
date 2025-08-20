import React, { useState } from 'react';

function Testimonial() {
  // Testimonial categories
  const categories = [
    { id: 'all', name: 'All Testimonials' },
    { id: 'residential', name: 'Residential Plots' },
    { id: 'commercial', name: 'Commercial Properties' },
    { id: 'industrial', name: 'Industrial Plots' },
    { id: 'investment', name: 'Investment Advisory' }
  ];

  // State for active category
  const [activeCategory, setActiveCategory] = useState('all');

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Patel",
      position: "Business Owner",
      location: "Ahmedabad",
      category: "commercial",
      rating: 5,
      testimonial: "Investing in a commercial plot in Dholera SIR through Nestoria Group was one of the best business decisions I've made. Their team provided exceptional guidance throughout the process, from selection to documentation. The property has already seen significant appreciation, and I'm planning to develop it into a retail complex soon.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
      date: "December 15, 2023"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "IT Professional",
      location: "Gandhinagar",
      category: "residential",
      rating: 5,
      testimonial: "As a first-time property investor, I was looking for a reliable developer in Dholera SIR. Nestoria Group exceeded my expectations with their transparent processes and customer-centric approach. The residential plot I purchased has excellent infrastructure and connectivity. Their after-sales service has been prompt and helpful. I highly recommend Nestoria to anyone looking for a trustworthy real estate partner.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
      date: "November 5, 2023"
    },
    {
      id: 3,
      name: "Amit Shah",
      position: "Manufacturing Entrepreneur",
      location: "Surat",
      category: "industrial",
      rating: 4,
      testimonial: "We were searching for the perfect location to expand our manufacturing operations, and Dholera SIR seemed promising. Nestoria Group helped us secure an industrial plot in a prime location with excellent connectivity. Their knowledge about industrial zoning regulations and future development plans was impressive. The investment has already started paying off as the area develops rapidly.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
      date: "October 20, 2023"
    },
    {
      id: 4,
      name: "Meera Desai",
      position: "Financial Advisor",
      location: "Mumbai",
      category: "investment",
      rating: 5,
      testimonial: "As a financial advisor, I'm always looking for solid investment opportunities for my clients. Nestoria Group's investment advisory services provided detailed market analysis and growth projections for Dholera SIR that helped me make informed recommendations. Several of my clients have invested in their projects and have seen impressive returns. Their professionalism and market knowledge are commendable.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
      date: "September 12, 2023"
    },
    {
      id: 5,
      name: "Vikram Mehta",
      position: "Retired Government Official",
      location: "Vadodara",
      category: "residential",
      rating: 5,
      testimonial: "After retirement, I wanted to invest in a property with good long-term potential. The Nestoria team patiently explained the benefits of investing in Dholera SIR and helped me select a residential plot that suited my budget and requirements. The documentation process was smooth, and they assisted at every step. I'm very satisfied with my investment and the service provided.",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998",
      date: "August 30, 2023"
    },
    {
      id: 6,
      name: "Ananya Joshi",
      position: "Retail Chain Owner",
      location: "Ahmedabad",
      category: "commercial",
      rating: 4,
      testimonial: "We were looking to establish our presence in upcoming urban centers, and Dholera SIR was on our radar. Nestoria Group's commercial property options were impressive, and their team provided valuable insights about future foot traffic and development plans. We've secured a prime location for our flagship store, and the investment seems promising as the area develops.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
      date: "July 15, 2023"
    },
    {
      id: 7,
      name: "Sanjay Kapoor",
      position: "NRI Investor",
      location: "Dubai (Originally from Gujarat)",
      category: "investment",
      rating: 5,
      testimonial: "As an NRI looking to invest in Indian real estate, I needed a trustworthy partner who could handle everything while I was abroad. Nestoria Group managed the entire process seamlessly - from property selection to legal documentation. Their virtual tours and detailed reports helped me make confident decisions without being physically present. The investment has shown good appreciation, and I'm considering additional investments through them.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974",
      date: "June 22, 2023"
    },
    {
      id: 8,
      name: "Ravi Patel",
      position: "Logistics Company Owner",
      location: "Bhavnagar",
      category: "industrial",
      rating: 5,
      testimonial: "The strategic location of Dholera SIR is perfect for our logistics operations. Nestoria Group helped us acquire an industrial plot with excellent connectivity to major highways and the upcoming port. Their knowledge about the master plan and future infrastructure developments was crucial in our decision-making. The investment has already appreciated significantly, and we're excited about the future prospects.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
      date: "May 10, 2023"
    }
  ];

  // Filter testimonials based on active category
  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(item => item.category === activeCategory);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fas fa-star ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="testimonial-page">
      {/* Page Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
              <p className="text-xl">Hear what our satisfied clients have to say about their experience with Nestoria Group</p>
            </div>
            <div className="w-full lg:w-1/3 hidden lg:flex justify-end">
              <i className="fas fa-quote-right text-5xl text-white opacity-25"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Filter Section */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full transition-colors duration-300 ${activeCategory === category.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {filteredTestimonials.map(testimonial => (
              <div className="w-full md:w-1/2 p-4" key={testimonial.id}>
                <div className="h-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                  <div className="p-6">
                    <div className="flex mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 object-cover rounded-full mr-3"
                      />
                      <div>
                        <h5 className="font-semibold text-lg mb-1">{testimonial.name}</h5>
                        <p className="text-gray-600 mb-1 text-sm">{testimonial.position}, {testimonial.location}</p>
                        <div className="mb-1">
                          {renderStars(testimonial.rating)}
                        </div>
                        <span className="text-gray-500 text-xs">{testimonial.date}</span>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <i className="fas fa-quote-left text-blue-800 mr-2 opacity-50"></i>
                      <p className="mb-0">{testimonial.testimonial}</p>
                      <i className="fas fa-quote-right text-blue-800 ml-2 opacity-50"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <i className="fas fa-search text-4xl text-gray-500 mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">No testimonials found</h3>
              <p className="text-gray-600">We don't have any testimonials in this category yet. Please check back later or select another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Video Testimonials</h2>
              <p className="text-xl text-gray-600">Watch our clients share their experience</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative pb-[56.25%]">
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white">
                    <div className="text-center">
                      <i className="fas fa-video text-4xl mb-4"></i>
                      <p className="mb-2">Video testimonial placeholder</p>
                      <p className="text-sm text-gray-400">Rajesh Patel - Business Owner</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="text-xl font-semibold mb-2">Commercial Investment Success Story</h5>
                  <p className="text-gray-700">Rajesh shares his journey of investing in a commercial property in Dholera SIR and the returns he's seeing.</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative pb-[56.25%]">
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white">
                    <div className="text-center">
                      <i className="fas fa-video text-4xl mb-4"></i>
                      <p className="mb-2">Video testimonial placeholder</p>
                      <p className="text-sm text-gray-400">Priya Sharma - IT Professional</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="text-xl font-semibold mb-2">First-Time Investor Experience</h5>
                  <p className="text-gray-700">Priya discusses her experience as a first-time property investor with Nestoria Group.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Detailed case studies of our client success</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
                  className="w-full h-48 object-cover" 
                  alt="Commercial Development"
                />
                <div className="p-6">
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded mb-2">Commercial</span>
                  <h5 className="text-xl font-semibold mb-2">From Empty Plot to Thriving Business Hub</h5>
                  <p className="text-gray-600 mb-4">How Mehta Enterprises transformed their Dholera SIR commercial plot into a profitable business center within 2 years.</p>
                  <a href="#" className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors duration-300">Read Case Study</a>
                </div>
              </div>
            </div>
            <div>
              <div className="h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973" 
                  className="w-full h-48 object-cover" 
                  alt="Residential Community"
                />
                <div className="p-6">
                  <span className="inline-block bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded mb-2">Residential</span>
                  <h5 className="text-xl font-semibold mb-2">Building a Dream Community</h5>
                  <p className="text-gray-600 mb-4">The journey of 50 families who collectively invested in adjacent plots to create a gated community with shared amenities.</p>
                  <a href="#" className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors duration-300">Read Case Study</a>
                </div>
              </div>
            </div>
            <div>
              <div className="h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070" 
                  className="w-full h-48 object-cover" 
                  alt="Industrial Development"
                />
                <div className="p-6">
                  <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-semibold px-2.5 py-1 rounded mb-2">Industrial</span>
                  <h5 className="text-xl font-semibold mb-2">Manufacturing Excellence in Dholera</h5>
                  <p className="text-gray-600 mb-4">How Gujarat Precision Tools established their state-of-the-art manufacturing facility and benefited from Dholera's strategic location.</p>
                  <a href="#" className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors duration-300">Read Case Study</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <h2 className="text-3xl font-bold mb-4">Share Your Nestoria Story</h2>
              <p className="mb-6 text-gray-700">We'd love to hear about your experience with Nestoria Group. Your feedback helps us improve and inspires others who are considering investing in Dholera SIR.</p>
              <ul className="mb-6">
                <li className="mb-3 flex items-start">
                  <i className="fas fa-check-circle text-green-600 mr-2 mt-1"></i>
                  <span>Your testimonial may be featured on our website</span>
                </li>
                <li className="mb-3 flex items-start">
                  <i className="fas fa-check-circle text-green-600 mr-2 mt-1"></i>
                  <span>Opportunity to participate in our video testimonial program</span>
                </li>
                <li className="mb-3 flex items-start">
                  <i className="fas fa-check-circle text-green-600 mr-2 mt-1"></i>
                  <span>Help others make informed investment decisions</span>
                </li>
              </ul>
              <a href="#testimonial-form" className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 inline-block">Share Your Story</a>
            </div>
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070" 
                alt="Share Your Story" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Form Section */}
      <section id="testimonial-form" className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Submit Your Testimonial</h2>
              <p className="text-xl text-gray-600">We appreciate your feedback</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="bg-white rounded-lg shadow-md p-6">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="col-span-1">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="name" placeholder="Your name" required />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="email" placeholder="Your email" required />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="phone" placeholder="Your phone number" />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="property-type" required defaultValue="">
                          <option value="" disabled>Select property type</option>
                          <option value="residential">Residential Plot</option>
                          <option value="commercial">Commercial Property</option>
                          <option value="industrial">Industrial Plot</option>
                          <option value="investment">Investment Advisory</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">Your Testimonial</label>
                        <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="testimonial" rows="5" placeholder="Share your experience with Nestoria Group" required></textarea>
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Rate Your Experience</label>
                        <div className="mb-3">
                          {[1, 2, 3, 4, 5].map(star => (
                            <i key={star} className="far fa-star text-lg mr-2 cursor-pointer hover:text-yellow-400 transition-colors"></i>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-start">
                          <input className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 mr-2" type="checkbox" id="permission" required />
                          <label className="text-sm text-gray-700" htmlFor="permission">
                            I give permission to Nestoria Group to use my testimonial on their website and marketing materials
                          </label>
                        </div>
                      </div>
                      <div className="col-span-2 mt-4">
                        <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300">Submit Testimonial</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Testimonial;
