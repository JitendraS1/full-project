import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactService from '../services/ContactService';
import ParallaxSection from '../components/ParallaxSection';
import ParallaxScroll from '../components/ParallaxScroll';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // For demo purposes, simulate successful submission
      // Comment this section and uncomment the line below when email is properly configured
      console.log('Form data submitted:', formData);
      setTimeout(() => {
        setSubmitted(true);
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        // Reset submission status after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
        setLoading(false);
      }, 1500);
      
      // Uncomment this when email server is properly configured
      // await ContactService.sendContactForm(formData);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to send message. Please try again later or contact us directly at info@nestoriagroup.com');
      setLoading(false);
    }
  };

  const faqs = [
    {
      question: "What types of properties does Nestoria Group offer in Dholera SIR?",
      answer: "Nestoria Group offers a diverse range of properties in Dholera SIR, including residential plots, commercial properties, and industrial land parcels. Each property is strategically located to maximize investment potential and future growth."
    },
    {
      question: "How can I schedule a site visit to Dholera SIR?",
      answer: "You can schedule a site visit by contacting our office directly via phone, email, or by filling out the contact form on our website. Our team will arrange a convenient time for your visit and provide all necessary guidance."
    },
    {
      question: "What are the payment options available for property purchases?",
      answer: "We offer flexible payment options including lump sum payments, installment plans, and bank financing options. Our financial advisors can help you choose the best payment plan that suits your budget and requirements."
    },
    {
      question: "Is Dholera SIR a good investment opportunity?",
      answer: "Yes, Dholera SIR presents an exceptional investment opportunity due to its status as India's first planned smart city, strategic location within the Delhi-Mumbai Industrial Corridor, world-class infrastructure, and government backing. Early investors can benefit from significant appreciation potential."
    },
    {
      question: "What documents are required for property purchase in Dholera SIR?",
      answer: "The required documents typically include identity proof (Aadhar Card, PAN Card, Passport), address proof, passport-sized photographs, and bank statements or income proof. Our legal team will guide you through the complete documentation process."
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?q=80&w=2073"
        height="auto"
        overlayColor="rgba(243, 244, 246, 0.9)"
        speed={0.4}
        className="py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ParallaxScroll speed={-0.2}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Contact Us</h1>
              <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl mb-6 text-gray-700">We're here to answer any questions you may have about our services</p>
              <nav className="flex justify-center">
                <ol className="flex space-x-2">
                  <li><Link to="/" className="text-blue-600 hover:text-blue-500">Home</Link></li>
                  <li><span className="mx-2">/</span></li>
                  <li className="text-gray-500">Contact</li>
                </ol>
              </nav>
            </ParallaxScroll>
          </div>
        </div>
      </ParallaxSection>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <ParallaxScroll speed={0.05} className="z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 animate-fade-in animation-delay-1">
              <div className="text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 animate-scale-in">
                  <i className="fas fa-map-marker-alt text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Office</h3>
                <p className="text-gray-600 mb-1">3RD FLOOR, SARTHIK ANNEX, SATELLITE ROAD,</p>
                <p className="text-gray-600">ISCKON CROSS ROAD, AHMEDABAD - 380015, Gujarat, India</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 animate-fade-in animation-delay-2">
              <div className="text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 animate-scale-in animation-delay-300">
                  <i className="fas fa-phone-alt text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Phone & Email</h3>
                <p className="text-gray-600 mb-2"><a href="tel:+919876543210" className="hover:text-blue-600 transition-colors">+91 98765 43210</a></p>
                <p className="text-gray-600 mb-0"><a href="mailto:info@nestoriagroup.com" className="hover:text-blue-600 transition-colors">info@nestoriagroup.com</a></p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 animate-fade-in animation-delay-3">
              <div className="text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 animate-scale-in animation-delay-500">
                  <i className="fas fa-clock text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Office Hours</h3>
                <p className="text-gray-600 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600 mb-0">Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 animate-fade-in-left">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Customer Support</h3>
              <p className="text-gray-600 mb-4">Our dedicated customer support team is available to assist you with any inquiries or concerns you may have about our properties or services.</p>
              <p className="text-gray-600 mb-2"><strong>Support Email:</strong> <a href="mailto:support@nestoriagroup.com" className="text-blue-600 hover:text-blue-500 transition-colors">support@nestoriagroup.com</a></p>
              <p className="text-gray-600"><strong>Support Phone:</strong> <a href="tel:+919876543211" className="text-blue-600 hover:text-blue-500 transition-colors">+91 98765 43211</a></p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 animate-fade-in-right">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Connect With Us</h3>
              <p className="text-gray-600 mb-4">Follow us on social media to stay updated with the latest news, property listings, and developments in Dholera SIR.</p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors transform hover:scale-110 duration-300 animate-fade-in animation-delay-1" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors transform hover:scale-110 duration-300 animate-fade-in animation-delay-2" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors transform hover:scale-110 duration-300 animate-fade-in animation-delay-3" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors transform hover:scale-110 duration-300 animate-fade-in animation-delay-4" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          </div>
        </ParallaxScroll>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <ParallaxScroll speed={0.03} className="z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
              <div className="h-1 w-24 bg-blue-600 mx-auto mb-6 animate-scale-in"></div>
              <p className="text-gray-600">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 animate-fade-in" role="alert">
                <div className="flex items-center">
                  <i className="fas fa-check-circle mr-2"></i>
                  <span>Thank you for your message! We will get back to you shortly.</span>
                </div>
              </div>
            ) : error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 animate-fade-in" role="alert">
                <div className="flex items-center">
                  <i className="fas fa-exclamation-circle mr-2"></i>
                  <span>{error}</span>
                </div>
              </div>
            ) : null}

            <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in animation-delay-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in animation-delay-2">
                    <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="animate-fade-in animation-delay-3">
                    <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="animate-fade-in animation-delay-4">
                    <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="animate-fade-in animation-delay-5">
                    <label htmlFor="subject" className="block text-gray-800 font-medium mb-2">Subject *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                <div className="animate-fade-in animation-delay-6">
                  <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Your Message *</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300" 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  ></textarea>
                </div>
                <div className="text-center mt-8 animate-fade-in animation-delay-7">
                  <button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center mx-auto transform hover:scale-105 duration-300 animate-scale-in"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          </div>
        </ParallaxScroll>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <ParallaxScroll speed={0.04} className="z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-6 animate-scale-in"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Visit our office in Ahmedabad</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 animate-fade-in animation-delay-1">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0394654146404!2d72.52113907596398!3d23.02730447917881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84faa946ad7b%3A0x8c4f4b53e3e1e4eb!2sSarthik%20Annex%2C%20Satellite%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1698000000000!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nestoria Group Office Location"
              className="w-full h-full"
            ></iframe>
          </div>
          </div>
        </ParallaxScroll>
      </section>

      {/* FAQ Section */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074"
        height="auto"
        overlayColor="rgba(255, 255, 255, 0.95)"
        speed={0.2}
        className="py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-6 animate-scale-in"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our properties and services</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden animate-fade-in animation-delay-dynamic" style={{"--index": index}} key={index}>
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-800">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180 text-blue-600">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="text-gray-600 p-4 border-t border-gray-200">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10 animate-fade-in animation-delay-5">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <a href="mailto:info@nestoriagroup.com" className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 animate-fade-in animation-delay-300">Email Us</a>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Contact;
