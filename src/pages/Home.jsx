import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import ParallaxSection from "../components/ParallaxSection";
import ParallaxScroll from "../components/ParallaxScroll";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import dholeraBanner from "../assets/img/Home-banner.svg";
import aboutimage from "../assets/img/about.webp";

// Import project images for slider
import dholeraBhoomi from "../assets/img/project/Dholera-Bhoomi.webp";
import dholeraBhoomi2 from "../assets/img/project/Dhollera-Bhoomi2 .webp";
import dholeraBhoomi3 from "../assets/img/project/DHOLERA BHOOMI-III .webp";
import orchidLuxury from "../assets/img/project/ORCHID LUXURY-BROSER.webp";
import orchidRiverView from "../assets/img/project/ORCHID-RIVER-VIEW.webp";
import orchidVillaGreens from "../assets/img/project/ORCHID VILLA GREENS-BROSHER.webp";
import orchidVillaLuxuriya from "../assets/img/project/ORCHID VILLA LUXURIYA-BROSHER.webp";
import orchidVillaParadise from "../assets/img/project/ORCHID VILLA PARADISE 2 NEW 12-12-2023 POXI.webp";
import orchidVillaGold from "../assets/img/project/ORCHILD-VILLA-GOLD.webp";
import leadershipImage from "../assets/img/team/team-dis.webp"; // Leadership image

// Import team images
import teamBg from "../assets/img/team/team-circle.webp";
import shivji from "../assets/img/team/management/shivji.webp";
import mohanji from "../assets/img/team/management/mohanji.webp";
import nitinji from "../assets/img/team/management/nitinji.webp";

function Home() {
  return (
    <div className="overflow-hidden bg-[#673a37]">

      {/* Hero Section */}
      <ParallaxSection
        backgroundImage={dholeraBanner}
        height="100vh"
        overlayColor="#673a377e"
        speed={0.4}
        className="flex items-center justify-center text-center"
        backgroundSize="cover"
      >
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20 md:py-32">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 animate-slide-up font-condor leading-tight drop-shadow-lg ">
              Leading Real Estate Developer in Dholera SIR
            </h1>
            <div className="h-1 w-24 sm:w-32 bg-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 animate-slide-up opacity-0 animation-delay-300 max-w-3xl mx-auto leading-relaxed ">
              Discover exclusive properties and investment opportunities in
              India's first smart city with world-class infrastructure and unlimited growth potential.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-6 animate-slide-up opacity-0 animation-delay-500">
              <Link
                to="/land-deals"
                className="group bg-blue-700 hover:bg-blue-800 text-white font-bold text-base md:text-lg py-4 px-6 md:py-4 md:px-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center relative overflow-hidden min-h-[44px]"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-search mr-2"></i>
                  Explore Properties
                </span>
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/contact"
                className="group bg-transparent hover:bg-white/10 text-white font-bold text-base md:text-lg py-4 px-6 md:py-4 md:px-8 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm min-h-[44px]"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-phone mr-2"></i>
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6 md:pb-8 animate-bounce">
          <a href="#about" className="text-white hover:text-blue-300 transition-colors duration-300">
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </a>
        </div>
      </ParallaxSection>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  className="w-full h-64 sm:h-80 md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  src={aboutimage}
                  alt="Nestoria Group - Premier Real Estate Developer in Dholera SIR Gujarat"

                />
                <div className="absolute inset-0 bg-blue-900/60 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-bold px-4 sm:px-6 py-3 border-2 border-white rounded-lg mb-6 sm:mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Discover Nestoria
                  </span>
                </div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 sm:px-4 sm:py-2">
                  <span className="text-blue-600 font-semibold text-xs sm:text-sm">Since 2010</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:pl-0 sm:pl-6">
                <h6 className="text-blue-600 font-semibold text-base sm:text-lg mb-2 sm:mb-3 uppercase tracking-wider">
                  About Us
                </h6>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  About <span className="text-blue-600">Nestoria Group</span>
                </h2>
                <div className="h-1 w-24 sm:w-32 bg-blue-600 mb-6 sm:mb-8"></div>
                <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  Established in 2010, Nestoria Group has emerged as a leading
                  real estate developer in Dholera SIR. We are committed to
                  excellence, transparency, and client satisfaction with over 5000+ happy customers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10">
                  {[
                    {
                      title: "Premium Land Parcels",
                      desc: "High-value properties",
                      icon: "fas fa-gem"
                    },
                    {
                      title: "Strategic Locations",
                      desc: "Prime investment areas",
                      icon: "fas fa-map-marker-alt"
                    },
                    {
                      title: "Legal Documentation",
                      desc: "Transparent process",
                      icon: "fas fa-file-contract"
                    },
                    { 
                      title: "Investment Advisory", 
                      desc: "Expert guidance",
                      icon: "fas fa-chart-line"
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group flex items-start p-4 sm:p-5 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-l-4 border-blue-500"
                    >
                      <div className="flex-shrink-0 mr-3 sm:mr-4 bg-blue-100 p-2.5 sm:p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <i className={`${item.icon} text-blue-600 text-base sm:text-lg`}></i>
                      </div>
                      <div>
                        <h6 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                          {item.title}
                        </h6>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/about"
                className="group inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 sm:py-4 sm:px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base min-h-[44px]"
                  aria-label="Discover More About Nestoria"
                >
                  <span>Discover More</span>
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Services Section */}
      <section
        id="services"
        className="bg-blue-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <ParallaxSection
          backgroundImage={dholeraBanner}
          height="auto"
          overlayColor="#673a377e"
          speed={0.4}
          className="py-16 md:py-24 lg:py-32 flex items-center justify-center text-center relative z-10"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
              <h6 className="text-blue-300 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
                What We Offer
              </h6>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Our <span className="text-blue-300">Services</span>
              </h2>
              <div className="h-1 w-32 bg-blue-500 mx-auto mb-8"></div>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                We offer comprehensive real estate services tailored to meet
                your investment needs in Dholera SIR with world-class infrastructure and unlimited growth potential.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: "fas fa-home",
                  title: "Residential Properties",
                  desc: "Premium residential properties in strategic locations with excellent appreciation potential and modern amenities.",
                  color: "blue"
                },
                {
                  icon: "fas fa-building",
                  title: "Commercial Properties",
                  desc: "High-potential commercial properties in Dholera's developing business districts with excellent ROI.",
                  color: "green"
                },
                {
                  icon: "fas fa-industry",
                  title: "Industrial Properties",
                  desc: "Strategic industrial properties in Dholera SIR with excellent connectivity and infrastructure support.",
                  color: "purple"
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl hover:bg-white/20"
                >
                  <div className={`bg-blue-600 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <i
                      className={`${item.icon} text-2xl text-white`}
                    ></i>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-center mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-200 mb-6 text-center leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="text-center">
                    <Link
                      to="/services"
                      className="group/btn inline-flex items-center text-blue-300 hover:text-white font-semibold border-2 border-blue-300 hover:border-white rounded-full py-4 px-8 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm min-h-[44px]"
                      aria-label={`Learn More About ${item.title}`}
                    >
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* Why Dholera SIR Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Investment Opportunity
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Why <span className="text-blue-600">Dholera SIR</span>
            </h2>
              <div className="h-1 w-32 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Dholera Special Investment Region (SIR) is India's first planned
              smart city and a global manufacturing hub with unlimited growth potential.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "fas fa-map-marker-alt",
                title: "Strategic Location",
                desc: "Located in the Delhi-Mumbai Industrial Corridor with excellent connectivity to major cities and ports.",
                color: "blue"
              },
              {
                icon: "fas fa-cogs",
                title: "World-Class Infrastructure",
                desc: "Smart transportation, renewable energy, water management, and digital connectivity.",
                color: "green"
              },
              {
                icon: "fas fa-chart-line",
                title: "Investment Potential",
                desc: "Significant appreciation potential with government backing and planned development.",
                color: "purple"
              },
              {
                icon: "fas fa-leaf",
                title: "Sustainable Development",
                desc: "Eco-friendly planning with green spaces, renewable energy, and sustainable practices.",
                color: "emerald"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl shadow-xl p-8 text-center transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border-t-4 border-blue-600 hover:border-blue-500"
              >
                <div className={`bg-blue-600 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <i className={`${item.icon} text-2xl text-white`}></i>
                </div>
                <h5 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Achievements</h2>
            <div className="h-1 w-20 sm:w-24 bg-blue-400 mx-auto mb-5 sm:mb-6"></div>
            <p className="text-gray-300 text-base sm:text-lg">Numbers that speak for our success and growth</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { number: "50000+", label: "Visitors", icon: "fas fa-users" },
              { number: "5000+", label: "Happy Clients", icon: "fas fa-heart" },
              { number: "50+", label: "Projects", icon: "fas fa-building" },
              { number: "15+", label: "Years Experience", icon: "fas fa-calendar" },
              { number: "50+", label: "Cities Covered", icon: "fas fa-map" },
              { number: "9+", label: "Countries Covered", icon: "fas fa-globe" },
            ].map((stat, i) => (
              <div key={i} className="group text-center p-4 sm:p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 staggered-animation staggered-animation-{i+1}">
                <div className="mb-3 sm:mb-4">
                  <i className={`${stat.icon} text-2xl sm:text-3xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300`}></i>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1.5 sm:mb-2 text-blue-200">
                  {stat.number}
                </div>
                <p className="text-gray-300 font-medium text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Swiper Slider Section */}
      <section className="py-16 md:py-24 bg-white w-screen">
        <div className="w-full px-4">
          {/* Gallery Title */}
          <div className="text-center mb-12">
            {/* <h6 className="text-blue-600 font-semibold text-base sm:text-lg mb-2 sm:mb-3 uppercase tracking-wider">
              Our Projects
            </h6> */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
              Gallery
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={dholeraBhoomi} alt="Dholera Bhoomi Project" className="w-full h-full object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={dholeraBhoomi2} alt="Dholera Bhoomi 2 Project" className="w-full h-full object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={dholeraBhoomi3} alt="Dholera Bhoomi III Project" className="w-full h-full object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={orchidLuxury} alt="Orchid Luxury Project" className="w-full h-full object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={orchidRiverView} alt="Orchid River View Project" className="w-full h-full object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={orchidVillaGreens} alt="Orchid Villa Greens Project" className="w-full h-full object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={orchidVillaLuxuriya} alt="Orchid Villa Luxuriya Project" className="w-full h-full object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={orchidVillaParadise} alt="Orchid Villa Paradise Project" className="w-full h-full object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={orchidVillaGold} alt="Orchid Villa Gold Project" className="w-full h-full object-cover" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <ParallaxSection
        backgroundImage={dholeraBanner}
        height="auto"
        overlayColor="#673a377e"
        speed={0.3}
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Ready to Invest in Your <span className="text-blue-300">Future</span>?
            </h2>
            <div className="h-1 w-32 bg-white mx-auto mb-8"></div>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
              Our experts are ready to guide you through the best investment
              opportunities in Dholera SIR with personalized solutions and expert advice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-6">
              <Link
                to="/contact"
                className="group bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 md:px-12 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-lg min-h-[44px]"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-phone mr-2"></i>
                  Contact Our Experts
                </span>
              </Link>
              <Link
                to="/land-deals"
                className="group bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 md:px-12 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-lg backdrop-blur-sm min-h-[44px]"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-search mr-2"></i>
                  View Properties
                </span>
              </Link>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Executive Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            {/* <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Visinory Leadership
            </h6> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
               Visinory  <span className="text-blue-600"> Leadership</span>
            </h2>
            <div className="h-1 w-32 bg-blue-600 mx-auto mb-8"></div>
            {/* <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Meet the visionary leaders driving Nestoria Group's success in transforming Dholera SIR into India's premier smart city destination.
            </p> */}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Team Member 1 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={shivji} 
                  alt="ShivKumar Singh Tomar  Ji - Director" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                 ShivKumar Singh Tomar
                </h3>
                <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide text-sm">
                 Chairman
                </p>
                
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={mohanji} 
                  alt="Mohan singh Tomar CEO of the company" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Mohan Singh Tomar </h3>
                <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide text-sm">
                  Chief Executive Officer (CEO)
                </p>
               
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={nitinji} 
                  alt="Nitin Singh Tomar Managing Director Of the company" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Nitin Singh Tomar
                </h3>
                <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide text-sm">
                  Managing Director
                </p>
                
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link
              to="/team"
              className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <span>Meet Our Full Team</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Testimonials
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Hear from our satisfied clients who have invested in Dholera SIR
              through Nestoria Group and achieved their investment goals.
            </p>
          </div>
          <div className="relative">
            <Carousel />
          </div>
        </div>
      </section> */}

      

      {/* Newsletter Section */}
      {/* <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 md:p-12">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                Subscribe to Our{" "}
                <span className="text-blue-600">Newsletter</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Stay updated with the latest news, property listings, and
                investment opportunities in Dholera SIR.
              </p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.elements.email.value;
                fetch(
                  (process.env.NODE_ENV === "production"
                    ? "/api"
                    : "http://localhost:5000/api") + "/send-email",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name: "Newsletter Subscriber",
                      email,
                      phone: "",
                      subject: "Newsletter Subscription",
                      message: `Please subscribe ${email} to the newsletter.`,
                    }),
                  }
                )
                  .then((res) => res.json())
                  .then((data) => {
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
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm md:text-base"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-sm md:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* Parallax Scroll Showcase */}
      <ParallaxScroll />
    </div>
  );
}

export default Home;
