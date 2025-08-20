import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  
  // Scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'general', name: 'General Questions' },
    { id: 'property', name: 'Property Related' },
    { id: 'investment', name: 'Investment' },
    { id: 'dholera', name: 'About Dholera SIR' },
    { id: 'legal', name: 'Legal & Documentation' }
  ];

  const faqs = {
    general: [
      {
        question: "Who is Nestoria Group?",
        answer: "Nestoria Group is a leading real estate developer specializing in properties within Dholera Special Investment Region (SIR). With years of experience in the industry, we offer residential, commercial, and industrial land parcels with a focus on trust, transparency, and client satisfaction."
      },
      {
        question: "How long has Nestoria Group been in business?",
        answer: "Nestoria Group has been operating in the real estate sector since 2010, with a specific focus on the Dholera SIR region. Over the years, we have built a strong reputation for delivering quality properties and exceptional customer service."
      },
      {
        question: "What services does Nestoria Group offer?",
        answer: "Nestoria Group offers a comprehensive range of real estate services including property sales, investment advisory, legal assistance for property documentation, site visits to Dholera SIR, property management, and ongoing customer support for all property-related matters."
      },
      {
        question: "How can I contact Nestoria Group?",
        answer: "You can contact us through multiple channels: visit our office in Dholera SIR, call us at +91 98765 43210, email us at info@nestoriagroup.com, or fill out the contact form on our website. Our customer support team is available Monday to Saturday during business hours."
      },
      {
        question: "Does Nestoria Group have any ongoing projects?",
        answer: "Yes, Nestoria Group has several ongoing projects in different zones of Dholera SIR. These include residential townships, commercial complexes, and industrial plots. Please contact our sales team for information about our current and upcoming projects."
      }
    ],
    property: [
      {
        question: "What types of properties does Nestoria Group offer in Dholera SIR?",
        answer: "Nestoria Group offers a diverse range of properties in Dholera SIR, including residential plots, commercial properties, and industrial land parcels. Each property is strategically located to maximize investment potential and future growth."
      },
      {
        question: "What is the price range of properties in Dholera SIR?",
        answer: "The price of properties in Dholera SIR varies based on location, size, and type. Residential plots typically start from ₹X per square meter, commercial properties from ₹Y per square meter, and industrial plots from ₹Z per square meter. Please contact our sales team for current pricing details."
      },
      {
        question: "Are the properties offered by Nestoria Group ready to move in?",
        answer: "We offer both ready-to-develop plots and under-development properties. Our sales representatives can guide you through the available options based on your requirements and timeline for development or occupancy."
      },
      {
        question: "Can I customize my property according to my requirements?",
        answer: "Yes, when purchasing land parcels from Nestoria Group, you have the flexibility to develop the property according to your specific requirements, subject to the zoning regulations and building codes of Dholera SIR."
      },
      {
        question: "How can I schedule a site visit to see the properties?",
        answer: "You can schedule a site visit by contacting our office directly via phone, email, or by filling out the contact form on our website. Our team will arrange a convenient time for your visit and provide all necessary guidance."
      }
    ],
    investment: [
      {
        question: "Is Dholera SIR a good investment opportunity?",
        answer: "Yes, Dholera SIR presents an exceptional investment opportunity due to its status as India's first planned smart city, strategic location within the Delhi-Mumbai Industrial Corridor, world-class infrastructure, and government backing. Early investors can benefit from significant appreciation potential."
      },
      {
        question: "What is the expected return on investment in Dholera SIR?",
        answer: "While specific returns cannot be guaranteed, investments in Dholera SIR have shown promising growth potential. The region's development as a smart city and its inclusion in the Delhi-Mumbai Industrial Corridor are expected to drive property values upward over the medium to long term."
      },
      {
        question: "What are the payment options available for property purchases?",
        answer: "We offer flexible payment options including lump sum payments, installment plans, and bank financing options. Our financial advisors can help you choose the best payment plan that suits your budget and requirements."
      },
      {
        question: "Are there any ongoing maintenance costs for properties in Dholera SIR?",
        answer: "Yes, there may be maintenance charges for common infrastructure and services in developed areas. These charges vary depending on the location and type of property. Our team will provide you with detailed information about any applicable maintenance costs."
      },
      {
        question: "Can NRIs invest in Dholera SIR properties through Nestoria Group?",
        answer: "Yes, Non-Resident Indians (NRIs) can invest in properties in Dholera SIR. We have a dedicated team to assist NRIs with the investment process, documentation, and compliance with relevant regulations. We also offer property management services for absentee owners."
      }
    ],
    dholera: [
      {
        question: "What is Dholera Special Investment Region (SIR)?",
        answer: "Dholera SIR is India's first planned smart city being developed as part of the Delhi-Mumbai Industrial Corridor (DMIC). It is designed to be a global manufacturing and trading hub with world-class infrastructure, sustainable urban planning, and smart technology integration."
      },
      {
        question: "Where is Dholera SIR located?",
        answer: "Dholera SIR is strategically located in the state of Gujarat, approximately 100 km southwest of Ahmedabad. Its proximity to major ports, highways, and the proposed international airport makes it an ideal location for business and residence."
      },
      {
        question: "What infrastructure facilities are being developed in Dholera SIR?",
        answer: "Dholera SIR is being developed with world-class infrastructure including smart transportation networks, renewable energy sources, efficient water management systems, digital connectivity, industrial zones, and green spaces. The city is designed to provide a high quality of life with all modern amenities."
      },
      {
        question: "What is the current status of development in Dholera SIR?",
        answer: "Dholera SIR is being developed in phases, with significant progress already made in trunk infrastructure development. Various projects including roads, water systems, and power infrastructure are underway. The city is expected to be fully developed by 2040, with different zones becoming operational in phases."
      },
      {
        question: "What industries are expected to establish in Dholera SIR?",
        answer: "Dholera SIR is expected to attract industries in sectors such as electronics, pharmaceuticals, heavy engineering, defense, aviation, renewable energy, and IT/ITeS. The region is designed to be a major manufacturing hub with dedicated zones for different industrial sectors."
      }
    ],
    legal: [
      {
        question: "What documents are required for property purchase in Dholera SIR?",
        answer: "The required documents typically include identity proof (Aadhar Card, PAN Card, Passport), address proof, passport-sized photographs, and bank statements or income proof. Our legal team will guide you through the complete documentation process."
      },
      {
        question: "Is the title of the properties offered by Nestoria Group clear?",
        answer: "Yes, all properties offered by Nestoria Group come with clear titles. We conduct thorough legal verification of all properties before offering them to our clients. Additionally, we provide complete assistance with legal documentation during the purchase process."
      },
      {
        question: "What are the legal procedures involved in purchasing property in Dholera SIR?",
        answer: "The legal procedures include property verification, agreement preparation, payment processing, registration of the sale deed, and mutation of property records. Our legal team handles these procedures efficiently to ensure a smooth and transparent transaction process."
      },
      {
        question: "Are there any restrictions on property development in Dholera SIR?",
        answer: "Yes, property development in Dholera SIR must comply with the master plan and building regulations established by the Dholera Special Investment Regional Development Authority (DSIRDA). These regulations ensure planned and sustainable development of the region."
      },
      {
        question: "What taxes are applicable on property purchase in Dholera SIR?",
        answer: "Property purchases in Dholera SIR are subject to stamp duty, registration fees, and GST (if applicable). The exact tax amounts depend on the property value and current government rates. Our team will provide you with a detailed breakdown of all applicable taxes before the purchase."
      }
    ]
  };

  return (
    <div className="faq-page bg-white">
      <Helmet>
        <title>FAQ - Nestoria Group | Dholera SIR</title>
        <meta name="description" content="Find answers to frequently asked questions about Nestoria Group, Dholera SIR properties, investments, and more." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Frequently Asked Questions</h1>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl mb-6 text-blue-100 max-w-2xl text-center">Find answers to common questions about Nestoria Group and Dholera SIR</p>
            <nav aria-label="breadcrumb">
              <ol className="flex justify-center space-x-2 text-blue-200">
                <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">Home</Link></li>
                <li className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-white">FAQ</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-5 text-gray-800 border-b border-gray-100 pb-3">Categories</h3>
                  <div className="flex flex-col space-y-2 mt-4">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        className={`px-4 py-3 rounded-md text-left transition-all duration-300 ${activeCategory === category.id 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/4">
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">{categories.find(cat => cat.id === activeCategory).name}</h2>
                  <div className="h-1 w-24 bg-yellow-500 mb-8"></div>
                  
                  <div className="space-y-5">
                    {faqs[activeCategory].map((faq, index) => (
                      <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md" key={index}>
                        <details className="group">
                          <summary 
                            className="flex justify-between items-center p-5 cursor-pointer bg-white hover:bg-blue-50 transition-all duration-300"
                          >
                            <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                            <span className="transition-transform duration-300 group-open:rotate-180 text-blue-600">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                              </svg>
                            </span>
                          </summary>
                          <div className="px-5 py-4 bg-white text-gray-600 border-t border-gray-100">
                            <p className="leading-relaxed">{faq.answer}</p>
                          </div>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            <div className="w-full lg:w-2/3 text-center">
              <h2 className="text-3xl font-bold mb-4">Didn't Find Your Answer?</h2>
              <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Our team is here to help you with any questions you may have about our properties or services in Dholera SIR.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <Link to="/contact" className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">Contact Us</Link>
                <a href="mailto:info@nestoriagroup.com" className="border-2 border-white hover:bg-blue-800 font-bold py-4 px-8 rounded-lg transition-all duration-300 w-full sm:w-auto mt-4 sm:mt-0">Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Stay Updated</h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg mb-8 text-gray-600">Subscribe to our newsletter for the latest updates on Dholera SIR development and investment opportunities.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-96"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4 text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
