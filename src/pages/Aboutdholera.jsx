import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TabsComponent from '../components/TabsComponent';
import ParallaxSection from '../components/ParallaxSection';
import ParallaxScroll from '../components/ParallaxScroll';
import aboutdholeraimg from '/src/assets/img/aboutdholera.png'
import futuredholera from '/src/assets/img/futuredholera.png'
import dholeraconnectivity from '/src/assets/img/dholeraconnectivity.png'

function Aboutdholera() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    propertyType: '1',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/[\s-]/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Import the service dynamically to avoid circular dependencies
        const { AboutdholeraService } = await import('../services/AboutdholeraService');
        
        const result = await AboutdholeraService.sendAboutdholeraRequest(formData);
        
        if (result.success) {
          setFormSubmitted(true);
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            mobile: '',
            propertyType: '1',
            message: ''
          });
        } else {
          alert(result.message || 'There was an error submitting your request. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your request. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  return (
    <>
      {/* Header Start */}
       <ParallaxSection
        backgroundImage={aboutdholeraimg}
        height="auto"
        overlayColor="#673a377e"
        speed={0.4}
        className="py-20 mb-8 overflow-hidden"
      >
        <div className="container mx-auto px-4 relative text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-up text-shadow-lg">About Dholera SIR</h1>
          <div className="h-1 w-24 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-slide-up opacity-0 animation-delay-200 text-shadow-lg">India's First Planned Smart Industrial City</p>
        </div>
      </ParallaxSection>
     
      {/* Header End */}

      {/* Introduction Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-blue-600 uppercase font-semibold mb-2">India's First Smart City</h6>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Dholera Special Investment Region (SIR)</h1>
              <p className="text-gray-600 mb-6">Dholera SIR is a greenfield industrial planned city near Dholera in Gujarat's Ahmedabad district, around 100 kilometers to the south-west. Spread over more than 920 sq. km, it is a new industrial city being jointly developed by the Government of India and Gujarat.</p>
              <p className="text-gray-600 mb-6">Dholera is strategically located, well connected with trade gateways and falls in the influence zone of proposed Delhi – Mumbai Industrial Corridor project (DMIC), a joint initiative by the Government of India and Japan.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <i className="fa fa-check bg-blue-600 text-white rounded-full p-2 mr-3" aria-hidden="true"></i>
                  <h6 className="font-medium">Strategic Location</h6>
                </div>
                <div className="flex items-center">
                  <i className="fa fa-check bg-blue-600 text-white rounded-full p-2 mr-3" aria-hidden="true"></i>
                  <h6 className="font-medium">World-Class Infrastructure</h6>
                </div>
                <div className="flex items-center">
                  <i className="fa fa-check bg-blue-600 text-white rounded-full p-2 mr-3" aria-hidden="true"></i>
                  <h6 className="font-medium">Government Backed</h6>
                </div>
                <div className="flex items-center">
                  <i className="fa fa-check bg-blue-600 text-white rounded-full p-2 mr-3" aria-hidden="true"></i>
                  <h6 className="font-medium">Investment Potential</h6>
                </div>
              </div>
              <Link to="/land-deals" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300" aria-label="Explore Land Deals">Explore Opportunities</Link>
            </div>
            <div className="w-full lg:w-1/2 wow fadeInUp" data-wow-delay="0.5s">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  className="w-full h-auto object-cover" 
                  src={futuredholera} 
                  alt="Overview of Dholera SIR" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dholera SIR Tabs Section */}
      <section id='tab-section' className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mx-auto mb-10" style={{ maxWidth: '800px' }}>
            <h1 className="text-3xl font-bold mb-3">Explore <span className="text-blue-600">Dholera SIR</span></h1>
            <p className="text-gray-600">Discover the vision, infrastructure, connectivity, and investment opportunities in India's first planned smart city.</p>
          </div>
          
          {/* Tabs Component */}
          <div className="mb-10">
            {/* Tabs Navigation */}
            <TabsComponent />
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mx-auto mb-10" style={{ maxWidth: '600px' }}>
            <h1 className="text-3xl font-bold mb-3">Key Features of <span className="text-blue-600">Dholera SIR</span></h1>
            <p className="text-gray-600">Dholera SIR is being developed with world-class infrastructure and facilities to create a sustainable and smart urban environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-white rounded-lg shadow-md h-full p-6 transition duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full -ml-6">
                    <i className="fa fa-road text-xl" aria-hidden="true"></i>
                  </div>
                  <h4 className="text-xl font-semibold ml-3">Smart Transportation</h4>
                </div>
                <p className="text-gray-600 mb-4">Integrated transportation network with metro rail, high-speed rail, expressways, and international airport connectivity.</p>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-white rounded-lg shadow-md h-full p-6 transition duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full -ml-6">
                    <i className="fa fa-solar-panel text-xl" aria-hidden="true"></i>
                  </div>
                  <h4 className="text-xl font-semibold ml-3">Renewable Energy</h4>
                </div>
                <p className="text-gray-600 mb-4">Focus on renewable energy sources including solar parks and wind farms to ensure sustainable power supply.</p>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-white rounded-lg shadow-md h-full p-6 transition duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full -ml-6">
                    <i className="fa fa-tint text-xl" aria-hidden="true"></i>
                  </div>
                  <h4 className="text-xl font-semibold ml-3">Water Management</h4>
                </div>
                <p className="text-gray-600 mb-4">Advanced water management systems including water treatment plants, recycling facilities, and flood control measures.</p>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-white rounded-lg shadow-md h-full p-6 transition duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full -ml-6">
                    <i className="fa fa-wifi text-xl" aria-hidden="true"></i>
                  </div>
                  <h4 className="text-xl font-semibold ml-3">Digital Connectivity</h4>
                </div>
                <p className="text-gray-600 mb-4">High-speed internet connectivity and smart city infrastructure for seamless digital integration.</p>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-white rounded-lg shadow-md h-full p-6 transition duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full -ml-6">
                    <i className="fa fa-industry text-xl" aria-hidden="true"></i>
                  </div>
                  <h4 className="text-xl font-semibold ml-3">Industrial Zones</h4>
                </div>
                <p className="text-gray-600 mb-4">Dedicated industrial zones for various sectors including manufacturing, IT, electronics, and more.</p>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-white rounded-lg shadow-md h-full p-6 transition duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full -ml-6">
                    <i className="fa fa-leaf text-xl" aria-hidden="true"></i>
                  </div>
                  <h4 className="text-xl font-semibold ml-3">Green Spaces</h4>
                </div>
                <p className="text-gray-600 mb-4">Abundant green spaces, parks, and recreational areas for a balanced urban environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Location Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 wow fadeInUp" data-wow-delay="0.1s">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  className="w-full h-auto object-cover  rounded-sm" 
                  src= {dholeraconnectivity}
                  alt="Strategic Location of Dholera SIR" 
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 wow fadeInUp" data-wow-delay="0.5s">
              <h6 className="text-blue-600 uppercase font-semibold mb-2">Strategic Location</h6>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Perfectly Positioned for Growth</h1>
              <p className="text-gray-600 mb-4">Dholera SIR is strategically located in the Delhi-Mumbai Industrial Corridor (DMIC), one of the world's largest infrastructure projects. This prime location offers excellent connectivity and access to major markets.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="flex items-center mb-3">
                    <i className="fa fa-check text-blue-600 mr-2" aria-hidden="true"></i>
                    <h6 className="font-medium">100 km from Ahmedabad</h6>
                  </div>
                  <div className="flex items-center mb-3">
                    <i className="fa fa-check text-blue-600 mr-2" aria-hidden="true"></i>
                    <h6 className="font-medium">30 km from Bhavnagar</h6>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <i className="fa fa-check text-blue-600 mr-2" aria-hidden="true"></i>
                    <h6 className="font-medium">Dedicated Freight Corridor</h6>
                  </div>
                  <div className="flex items-center mb-3">
                    <i className="fa fa-check text-blue-600 mr-2" aria-hidden="true"></i>
                    <h6 className="font-medium">Planned International Airport</h6>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">The strategic location of Dholera SIR makes it an ideal destination for businesses looking to establish a presence in India's rapidly growing economy. With excellent connectivity to major cities and ports, Dholera SIR offers unparalleled access to domestic and international markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Potential Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mx-auto mb-10" style={{ maxWidth: '600px' }}>
            <h1 className="text-3xl font-bold mb-3">Investment <span className="text-blue-600">Potential</span></h1>
            <p className="text-gray-600">Dholera SIR offers significant investment opportunities across various sectors, backed by government support and world-class infrastructure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-white text-center rounded-lg shadow-md h-full p-6 transition duration-300 hover:shadow-xl">
                <i className="fa fa-chart-line text-4xl text-blue-600 mb-4" aria-hidden="true"></i>
                <h5 className="text-xl font-semibold mb-3">High ROI</h5>
                <p className="text-gray-600">Significant appreciation potential with government backing and planned development.</p>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-white text-center rounded-lg shadow-md h-full p-6 transition duration-300 hover:shadow-xl">
                <i className="fa fa-building text-4xl text-blue-600 mb-4" aria-hidden="true"></i>
                <h5 className="text-xl font-semibold mb-3">Multiple Sectors</h5>
                <p className="text-gray-600">Investment opportunities in residential, commercial, and industrial sectors.</p>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-white text-center rounded-lg shadow-md h-full p-6 transition duration-300 hover:shadow-xl">
                <i className="fa fa-handshake text-4xl text-blue-600 mb-4" aria-hidden="true"></i>
                <h5 className="text-xl font-semibold mb-3">Government Support</h5>
                <p className="text-gray-600">Strong government backing with special incentives for investors.</p>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.7s">
              <div className="bg-white text-center rounded-lg shadow-md h-full p-6 transition duration-300 hover:shadow-xl">
                <i className="fa fa-globe text-4xl text-blue-600 mb-4" aria-hidden="true"></i>
                <h5 className="text-xl font-semibold mb-3">Global Hub</h5>
                <p className="text-gray-600">Positioned to become a global manufacturing and trading hub.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <ParallaxSection
        backgroundImage= {aboutdholeraimg} //https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1844&q=80
        height="auto"
        overlayColor="#673a377e"
        speed={0.3}
        className="py-12"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-7/12 text-white">
             
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Ready to Invest in Dholera SIR?</h1>
                <p className="mb-4">Contact our expert team today to explore premium investment opportunities in Dholera SIR. We'll guide you through every step of your investment journey.</p>
                <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-full transition duration-300" aria-label="Contact Us Now">Contact Us Now</Link>
             
            </div>
            <div className="w-full lg:w-5/12">
              <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                <h5 className="text-xl font-semibold mb-4 text-blue-600">Request Information</h5>
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="text-green-500 text-5xl mb-4">
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-gray-600">Your request has been submitted successfully. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <input 
                          type="text" 
                          className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name" 
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div className="relative">
                        <input 
                          type="email" 
                          className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email" 
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div className="relative">
                        <input 
                          type="text" 
                          className={`w-full px-4 py-3 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} 
                          id="mobile" 
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Your Mobile" 
                        />
                        {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                      </div>
                      <div className="relative">
                        <select 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white" 
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                        >
                          <option value="1">Residential Plot</option>
                          <option value="2">Commercial Property</option>
                          <option value="3">Industrial Plot</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <textarea 
                          className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} 
                          placeholder="Your Message" 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                      </div>
                      <div className="sm:col-span-2 text-center">
                        <button 
                          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg transition duration-300" 
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <i className="fa fa-spinner fa-spin mr-2" aria-hidden="true"></i>
                              Submitting...
                            </>
                          ) : (
                            'Submit Request'
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </>
  );
}

export default Aboutdholera;
