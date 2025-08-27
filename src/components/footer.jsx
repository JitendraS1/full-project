import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 py-20 bg-gradient-to-l from-blue-900 to-yellow-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-blue-400 font-condor">
              Nestoria Group
            </h3>
            <p className="mb-4 text-gray-400">
              A leading real estate developer with a focus on premium properties
              in Dholera SIR and beyond.
            </p>
            <div className="w-20 h-1 bg-blue-600 my-6"></div>
            <div className="flex space-x-4 mt-6">
              <a
                href="http://www.youtube.com/@nestoriagroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/nestoria.group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/nestoriagroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              
              <a
                href="https://www.linkedin.com/company/nestoriagroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              {/* <a
                href="https://www.twitter.com/nestoriagroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-blue-400 font-condor">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-400 text-xs"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-400 text-xs"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-400 text-xs"></i>
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-400 text-xs"></i>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-400 text-xs"></i>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-400 text-xs"></i>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Dholera SIR Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-blue-400 font-condor">
              Dholera SIR
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about-dholera"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-400 text-xs"></i>
                  About Dholera SIR
                </Link>
              </li>
              <li>
                <Link
                  to="/dholera-infrastructure"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-400 text-xs"></i>
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/dholera-investment"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-400 text-xs"></i>
                  Investment Opportunities
                </Link>
              </li>
              <li>
                <Link
                  to="/dholera-news"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-400 text-xs"></i>
                  Latest News
                </Link>
              </li>
              <li>
                <Link
                  to="/dholera-faq"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-400 text-xs"></i>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4 text-blue-400 font-condor">
              Contact Us
            </h3>
            <p className="flex items-start mb-4">
              <i className="fas fa-map-marker-alt mr-3 mt-1 text-blue-400"></i>
              <span className="text-gray-400">
                3rd Floor, Sarthik Annexe , Satellite Road, Iskon Cross Road,
                Ahmedabad - 380015, Gujarat, India
              </span>
            </p>
            <p className="flex items-center mb-4">
              <i className="fas fa-phone-alt mr-3 text-blue-400"></i>
              <a
                href="tel:+919876543210"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                +919274411705
              </a>
            </p>
            <p className="flex items-center mb-4">
              <i className="fas fa-envelope mr-3 text-blue-400"></i>
              <a
                href="mailto:info@nestoriagroup.com"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                info@nestoriagroup.com
              </a>
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-white font-condor">
                Subscribe to Our Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-900 text-white px-4 py-2 rounded-l focus:outline-none w-full"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-500 transition duration-300">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Nestoria Group. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-blue-400 text-sm transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-400 hover:text-blue-400 text-sm transition duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/sitemap"
              className="text-gray-400 hover:text-blue-400 text-sm transition duration-300"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
