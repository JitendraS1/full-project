import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getReviewSchema } from '../utils/SchemaMarkup';
import testomonial1 from '/src/assets/img/testomonials/D-P-Kaushik.webp'
import testomonial2 from '/src/assets/img/testomonials/Khargeswar-Brahma.webp'
import testomonial3 from '/src/assets/img/testomonials/Miss.-Arti-Nagpal.webp'
import testomonial4 from '/src/assets/img/testomonials/Mr-CHARANJIT-SINGH.webp'
import testomonial5 from '/src/assets/img/testomonials/Mr-K-C-Anand.webp'
import testomonial6 from '/src/assets/img/testomonials/Mr.-Dayananda-Reddy.webp'
import testomonial7 from '/src/assets/img/testomonials/Shahnawaz-Choudhary.webp'
import testomonial8 from '/src/assets/img/testomonials/Jasbir-Singh-Arora.webp'
// Video imports removed as files don't exist in the assets directory


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
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Mr. D P Kaushik",
      position: "- Manager, Human Resource Deppt, Govt of India",
      // location: "Ahmedabad",
      category: "commercial",
      rating: 5,
      testimonial: "Hello guys. If you are planning to buy some property, don’t waste your time, just dial Nestoria Group and let them do the rest. You just tell them what you need and sit relaxed. Trust me, you will get the perfect piece of property. I must say, one hundred percent satisfaction.",
      image: testomonial1,
      // date: "December 15, 2023"
    },
    {
      id: 2,
      name: "Mr. Khargeswar Brahma",
      position: "EX. ARMY EME (Junior commissioned officer) Indian ARMY",
      // location: "Gandhinagar",
      category: "residential",
      rating: 5,
      testimonial: "I would really like to thank the team of Nestoria group for helping me find the best option in Dholera SIR. They understood my requirements and presented me with the best investment option in the Dholera Smart City project. A big thanks to team Nestoria.",
      image: testomonial2,
      // date: "November 5, 2023"
    },
    {
      id: 3,
      name: "Miss. Arti Nagpal",
      position: "Bollywood Actor & Investor",
      // location: "Surat",
      category: "industrial",
      rating: 4,
      testimonial: "It’s almost Five years since I got a perfect place to my dream home through Nestoria. And I have recommended it to everyone looking for any type of property. Whenever my friends, relatives, or known ones ask me about the property, my call goes to only Nestoria Group. And this confidence comes from the level of satisfaction we had.",
      image: testomonial3,
      // date: "October 20, 2023"
    },
    {
      id: 4,
      name: "Mr. Charanjit Singh",
      position: "(RETD.) Manager, RBI",
      // location: "Mumbai",
      category: "investment",
      rating: 5,
      testimonial: "Now I am the owner of a fantastic property in Dholera Smart City. To be honest, I spent around seven months deciding that and I was confused about investing in Dholera SIR. But then the Nestoria group came to help and explained everything about the location in a transparent manner with appropriate investment options. It really helped me in the right decision-making. And now, I own some properties in Dholera Smart City.",
      image: testomonial4,
      // date: "September 12, 2023"
    },
    {
      id: 5,
      name: "Mr. K. C. Anand",
      position: "General Manager, (Retd) RBI",
      // location: "Vadodara",
      category: "residential",
      rating: 5,
      testimonial: "I only explained my requirements and budget to them, and the rest was taken care of by an excellent team of Nestoria. Showcasing only the best possible options really helped me in saving huge time and effort. Really professional.",
      image: testomonial5,
      // date: "August 30, 2023"
    },
    {
      id: 6,
      name: "Mr. Dayananda Reddy",
      position: "MLC Bengaluru & Founder of Dayananda foundation",
      // location: "Ahmedabad",
      category: "commercial",
      rating: 4,
      testimonial: "It is tedious and demanding to look for the right property while in a job. It needs effort and involves a risk of wrong selection, but Nestoria made it simple for me. It made my experience as cozy as their property.",
      image: testomonial6,
      // date: "July 15, 2023"
    },
    {
      id: 7,
      name: "Mr. Shahnawaz Choudhary",
      position: "Director of Institute of Political Leadership & Political Trainer",
      // location: "Dubai (Originally from Gujarat)",
      category: "investment",
      rating: 5,
      testimonial: "As an NRI looking to invest in Indian real estate, I needed a trustworthy partner who could handle everything while I was abroad. Nestoria Group managed the entire process seamlessly - from property selection to legal documentation. Their virtual tours and detailed reports helped me make confident decisions without being physically present. The investment has shown good appreciation, and I'm considering additional investments through them.",
      image: testomonial7,
      // date: "June 22, 2023"
    },
    {
      id: 8,
      name: "Dr. Jasbir Singh Arora",
      position: "International Trainer, business coach & Motivational speaker.",
      // location: "Bhavnagar",
      category: "industrial",
      rating: 5,
      testimonial: "Nestoria Group is more than a real estate company. It’s a solution provider, working hard to provide you with the best options. It was a great experience with Nestoria to own the right property.",
      image: testomonial8,
      // date: "May 10, 2023"
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

  // Generate schema markup for testimonials
  const testimonialSchemas = testimonials.map(testimonial => {
    return getReviewSchema({
      author: testimonial.name,
      rating: testimonial.rating,
      content: testimonial.testimonial,
      date: testimonial.date || new Date().toISOString().split('T')[0],
      title: `${testimonial.name}'s experience with Nestoria Group`
    });
  });

  return (
    <div className="testimonial-page">
      {/* SEO Helmet */}
      <Helmet>
        <title>Client Testimonials - Nestoria Group | Real Estate Developer in Dholera SIR</title>
        <meta name="description" content="Read authentic testimonials from our satisfied clients who have invested in Dholera SIR through Nestoria Group. Discover why we are the most trusted real estate developer." />
        <meta name="keywords" content="Nestoria Group testimonials, client reviews, Dholera SIR investment reviews, real estate testimonials" />
        <link rel="canonical" href="https://nestoriagroup.com/testimonial" />
        
        {/* Add schema markup for testimonials */}
        {testimonialSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      
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
      {/* Video 1 */}
      <div className="w-full">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // placeholder - replace with actual YouTube video ID
              title="Gulshan Kumar Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4">
            <h5 className="text-xl font-semibold mb-2">
              Commercial Investment Success Story
            </h5>
            <p className="text-gray-700">
              Gulshan shares his journey of investing in a commercial property in
              Dholera SIR and the returns he's seeing.
            </p>
          </div>
        </div>
      </div>

      {/* Video 2 */}
      <div className="w-full">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/jNQXAC9IVRw" // placeholder - replace with actual YouTube video ID
              title="Nitin Singh Tomar Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4">
            <h5 className="text-xl font-semibold mb-2">
              Owner's Testimonial
            </h5>
            <p className="text-gray-700">
              Nitin Singh Tomar, Director of Nestoria Group, envisions transforming real estate with personalized guidance, expert insights, and unwavering client success.
            </p>
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
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = {
                    name: e.target.elements.name.value,
                    email: e.target.elements.email.value,
                    phone: e.target.elements.phone.value,
                    subject: 'Testimonial Submission',
                    message: `Testimonial from ${e.target.elements.name.value}\n\nProperty Type: ${e.target.elements['property-type'].value}\n\nTestimonial: ${e.target.elements.testimonial.value}`
                  };
                  
                  // Use relative URL in production for Vercel deployment
                  fetch((process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api') + "/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                  })
                  .then(res => res.json())
                  .then(data => {
                    if (data.success) {
                      alert("Thank you for your testimonial! We appreciate your feedback.");
                      e.target.reset();
                    } else {
                      alert(data.message || "Failed to submit testimonial. Please try again later.");
                    }
                  })
                  .catch(() => {
                    alert("Failed to submit testimonial. Please try again later.");
                  });
                }}>
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
