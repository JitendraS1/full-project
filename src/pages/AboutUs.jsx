import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ParallaxSection from '../components/ParallaxSection';

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>About Us - Nestoria Group | Most Trusted Real Estate Developer</title>
        <meta name="description" content="Nestoria Group is one of the fastest-growing real estate companies with prime focus on Dholera Special Investment Region. Learn about our journey, vision and achievements." />
      </Helmet>
      {/* Page Header */}
      <ParallaxSection
        backgroundImage="/src/assets/img/about.png"
        height="auto"
        overlayColor="#673a377e"
        speed={0.4}
        className="py-32 mb-8 overflow-hidden"
      >
        <div className="container mx-auto px-4 relative text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-up">About Us</h1>
          <div className="h-1 w-24 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-slide-up opacity-0 animation-delay-200">Learn about Nestoria Group's journey, vision, and commitment to excellence in Dholera SIR</p>
          <nav aria-label="breadcrumb" className="animate-slide-up opacity-0 animation-delay-300">
            <ol className="flex justify-center items-center space-x-2 text-white">
              <li className="breadcrumb-item"><Link className="text-white hover:text-blue-200 transition-colors" to="/">Home</Link></li>
              <li className="breadcrumb-item flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="breadcrumb-item text-blue-200 active" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </ParallaxSection>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 animate-fade-in-left">
              <div className="relative overflow-hidden h-96 rounded-lg shadow-xl">
                <img 
                  className="absolute w-full h-full object-cover" 
                  src="https://raw.githubusercontent.com/JitendraS1/nestoriagroup/refs/heads/main/img/back.jpg" 
                  alt="About Nestoria Group" 
                />
                <div className="absolute top-0 left-0 bg-blue-600 p-4 w-48 h-48 flex flex-col justify-center items-center shadow-lg">
                  <h1 className="text-5xl font-bold text-white">15+</h1>
                  <h2 className="text-2xl font-semibold text-white">Years</h2>
                  <h5 className="text-lg text-white">Experience</h5>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 animate-fade-in-right">
              <div className="h-full">
                <h6 className="text-blue-600 uppercase mb-2 font-medium tracking-wider">About Us</h6>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">We Are Your Trusted Partner In Dholera SIR</h1>
                <div className="h-1 w-24 bg-yellow-400 mb-6"></div>
                <p className="text-gray-600 mb-4 leading-relaxed">Nestoria Buildcon Pvt. Ltd. is one of the fastest-growing real estate companies with the prime focus on Dholera Special Investment Region. We have been emblem of trust, transparency, and customer-oriented solutions for 13 years.</p>
                <p className="text-gray-600 mb-4 leading-relaxed">In 2010, we started our journey from Gwalior, Madhya Pradesh. Our passion to help others in choosing the perfect property based on their requirement and our hard work led us to the path of success.</p>
                <p className="text-gray-600 mb-6 leading-relaxed">We continued our journey in Real Estate with a vision of opportunistic investment which led us to Dholera SIR. In 2018, we started our engagement in Dholera SIR. A roadmap to one of the best smart cities in the world with state-of-the-art facilities and international connectivity caught our eyes and compelled us to showcase this potential to the people and help them go with the future.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center">
                    <i className="fa fa-check text-blue-600 mr-2"></i>
                    <span className="text-gray-700">Premium Land Parcels</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fa fa-check text-blue-600 mr-2"></i>
                    <span className="text-gray-700">Strategic Locations</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fa fa-check text-blue-600 mr-2"></i>
                    <span className="text-gray-700">Legal Documentation</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fa fa-check text-blue-600 mr-2"></i>
                    <span className="text-gray-700">Investment Advisory</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fa fa-check text-blue-600 mr-2"></i>
                    <span className="text-gray-700">Transparent Dealings</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fa fa-check text-blue-600 mr-2"></i>
                    <span className="text-gray-700">Client Satisfaction</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-1">
                      <h1 className="text-5xl font-bold text-blue-600">5500</h1>
                      <span className="text-yellow-500 text-2xl font-bold">+</span>
                    </div>
                    <h6 className="text-gray-600 font-medium">Happy Clients</h6>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-1">
                      <h1 className="text-5xl font-bold text-blue-600">50</h1>
                      <span className="text-yellow-500 text-2xl font-bold">+</span>
                    </div>
                    <h6 className="text-gray-600 font-medium">Projects Completed</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <ParallaxSection
        backgroundImage="/src/assets/img/about.png"
        height="auto"
        overlayColor="#673a377e"
        speed={0.4}
        className="py-32 mb-8 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mx-auto mb-12" style={{ maxWidth: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-whit-800 mb-4">Our Vision & Mission</h2>
            <div className="h-1 w-24 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-white-600 mb-8">Guiding principles that drive our business forward</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="animate-fade-in-left">
              <div className="bg-white h-full p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
                <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
                <p className="text-gray-600 mb-4 leading-relaxed">To be the most trusted and preferred real estate developer in Dholera SIR, known for our commitment to quality, transparency, and customer satisfaction.</p>
                <p className="text-gray-600 leading-relaxed">We envision Dholera SIR as a global manufacturing and trading hub, and we aim to play a pivotal role in its development by providing premium real estate solutions to investors and businesses.</p>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="bg-white h-full p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
                <p className="text-gray-600 mb-4 leading-relaxed">To provide premium land parcels and real estate solutions in Dholera SIR, helping investors capitalize on the immense growth potential of India's first planned smart city.</p>
                <p className="text-gray-600 leading-relaxed">We are committed to maintaining the highest standards of transparency, legal compliance, and customer service, ensuring that our clients' investments are secure and profitable.</p>
              </div>
            </div>
          </div>
        </div>
        </ParallaxSection>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mx-auto mb-12" style={{ maxWidth: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600 mb-8">The principles that guide our business and relationships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-fade-in animation-delay-1">
              <div className="bg-white p-6 text-center h-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4">
                    <i className="fa fa-handshake text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Trust</h3>
                </div>
                <p className="text-gray-600">We build lasting relationships with our clients based on trust and mutual respect.</p>
              </div>
            </div>
            <div className="animate-fade-in animation-delay-3">
              <div className="bg-white p-6 text-center h-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4">
                    <i className="fa fa-balance-scale text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Integrity</h3>
                </div>
                <p className="text-gray-600">We conduct our business with the highest standards of integrity and ethical practices.</p>
              </div>
            </div>
            <div className="animate-fade-in animation-delay-5">
              <div className="bg-white p-6 text-center h-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4">
                    <i className="fa fa-gem text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Excellence</h3>
                </div>
                <p className="text-gray-600">We strive for excellence in everything we do, from property selection to client service.</p>
              </div>
            </div>
            <div className="animate-fade-in animation-delay-7">
              <div className="bg-white p-6 text-center h-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4">
                    <i className="fa fa-users text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Client Focus</h3>
                </div>
                <p className="text-gray-600">Our clients' needs and satisfaction are at the center of all our decisions and actions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mx-auto mb-12" style={{ maxWidth: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Leadership</h2>
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600 mb-8">Meet the team dedicated to your success in Dholera SIR</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-fade-in animation-delay-1">
              <div className="bg-white p-6 text-center h-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                  <img 
                    className="w-48 h-48 rounded-full mx-auto object-cover mb-4 border-2 border-blue-500 shadow-md" 
                    src="https://raw.githubusercontent.com/JitendraS1/assets/refs/heads/master/nitinsir.jpg" 
                    alt="Nitin Singh Tomar" 
                  />
                  <h3 className="text-xl font-bold text-gray-800 mt-4">Nitin Singh Tomar</h3>
                  <p className="text-blue-600 font-medium">Director</p>
                </div>
                <p className="text-gray-600 leading-relaxed">It's always a pleasure to have a creative and energetic force on board. Out of the box thinking, passion to grow, and creativity to serve our clients are some of his attributes. His energy and team management help the entire group to be on a same page and work smart to achieve our vision.</p>
              </div>
            </div>
            <div className="animate-fade-in animation-delay-3">
              <div className="bg-white p-6 text-center h-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                  <img 
                    className="w-48 h-48 rounded-full mx-auto object-cover mb-4 border-2 border-blue-500 shadow-md" 
                    src="https://raw.githubusercontent.com/JitendraS1/assets/refs/heads/master/mohansir.jpg" 
                    alt="Team Member" 
                  />
                  <h3 className="text-xl font-bold text-gray-800 mt-4">Leadership Team</h3>
                  <p className="text-blue-600 font-medium">Management</p>
                </div>
                <p className="text-gray-600 leading-relaxed">We have an experienced management team equipped with technical knowledge and domain expertise that has led us to gain 5500+ Happy Customers. Recently, we were awarded 'Rajiv Gandhi Global Excellence Award – 2022 – New Delhi'.</p>
              </div>
            </div>
            <div className="animate-fade-in animation-delay-5">
              <div className="bg-white p-6 text-center h-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                  <img 
                    className="w-48 h-48 rounded-full mx-auto object-cover mb-4 border-2 border-blue-500 shadow-md" 
                    src="/src/assets/img/" 
                    alt="Dholera SIR" 
                  />
                  <h3 className="text-xl font-bold text-gray-800 mt-4">Dholera SIR</h3>
                  <p className="text-blue-600 font-medium">Our Focus</p>
                </div>
                <p className="text-gray-600 leading-relaxed">Dholera is India's first platinum-rated industrial smart city, comprising the largest land parcels in southeast Asia. Dholera is committed to increasing transport efficiency and improving trade flows based on the strategic pillars of sustainability, digitisation, and innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Disclaimer</h3>
            <div className="h-1 w-16 bg-yellow-400 mb-6"></div>
            <div className="text-gray-600 text-sm space-y-3 leading-relaxed">
              <p>Nestoria Buildcon Pvt. Ltd. is a rapidly growing real estate company specializing in Dholera Smart City. We have earned a reputation for trust, transparency, and customer-centric solutions over our 13-year presence in the industry.</p>
              <p>The content displayed on our website(s), including images, renderings, copy, and other materials collectively referred to as "Website Content," are purely indicative and artistic in nature. They do not represent actual buildings, landscapes, or facilities. The Website Content was created prior to the implementation of relevant regulations and may include content related to future project phases or different projects altogether.</p>
              <p>Until the Website Content is fully updated, it should not be considered as an advertisement, invitation, solicitation, offer, or sale of any product offerings. We disclaim any responsibility for any consequences arising from actions taken by individuals or authorities relying on the provided material/information.</p>
              <p>The primary purpose of the Website Content is to support the government's initiative to develop the Dholera Greenfield region into a sophisticated smart city. We advise investors to independently verify all details, including area, services, sales and payment terms, and other relevant information with the Nestoria Buildcon Pvt. Ltd. Sales Team Only.</p>
              <p>We strongly recommend avoiding unauthorized or unverified websites/brokers (online/offline) for information on Nestoria Buildcon Pvt. Ltd. projects. Information about projects displayed on the website(s) is indicative and for reference purposes only. Artist's impressions, products, features, etc., are presented as illustrations and for reference only.</p>
              <p>The actual land parcels and final prices of the mentioned plots may differ due to future alterations. While we have made every effort to ensure the accuracy of the website, Nestoria Buildcon Pvt. Ltd. shall not be liable for any loss, claim, damage, errors, directly or indirectly, consequential or incidental, suffered by any person due to the use or inability to use this website.</p>
              <p>Please note that this disclaimer is intended to provide general information and should not be considered legal advice. It is advisable to consult legal professionals for specific advice and clarification regarding relevant regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-yellow-400 opacity-10 transform -skew-x-12"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-2/3 animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Invest in Dholera SIR?</h2>
              <div className="h-1 w-24 bg-blue-400 mb-6"></div>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">Contact our expert team today to explore premium investment opportunities in Dholera SIR. We'll guide you through every step of your investment journey.</p>
              <Link to="/contact" className="inline-block px-8 py-4 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">Contact Us Now</Link>
            </div>
            <div className="w-full lg:w-1/3 animate-fade-in-right">
              <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  className="contrast-100 w-full h-auto transform transition-transform duration-500 hover:scale-110" 
                  src="https://nestoriagroup.com/wp-content/uploads/2022/11/dholera-dp-map.png" 
                  alt="Dholera SIR" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
