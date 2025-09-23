import React from "react";
import achievementBg from "../assets/img/icon/counter-bg-2.webp";
import { motion } from "framer-motion";

const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://cdn.prod.website-files.com/67f0dc08b0257791feaaf491/67f0dc08b0257791feaaf5fe_qms.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://cdn.prod.website-files.com/67f0dc08b0257791feaaf491/67f0dc08b0257791feaaf5ff_env%20mgmt%20system.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://cdn.prod.website-files.com/67f0dc08b0257791feaaf491/67f0dc08b0257791feaaf600_occupat.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

function Achievements() {
  // Page animation variants
  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  // Awards data
  const awards = [
    {
      id: 1,
      title: "Atmanirbhar Face of Bharat Award",
      organization: "Gujarat Real Estate Awards",
      year: "2024",
      description:
        "Recognized for excellence in developing sustainable and innovative real estate projects in Dholera SIR.",
      image:
        "https://cdn.prod.website-files.com/67f0dc08b0257791feaaf491/68064027657d9b338a82ba5c_Mask%20group12.png",
    },
    {
      id: 2,
      title: "Received Credai Award as a Real Estate Developer exhibition held in Bhavnagar",
      organization: "Indian Association of Urban Planners",
      year: "2022",
      description:
        "Awarded for the master planning and execution of Nestoria Green Valley residential township in Dholera SIR.",
      image:
        "https://cdn.prod.website-files.com/67f0dc08b0257791feaaf491/68064027657d9b338a82ba59_Mask%20group-4.png",
    },
    {
      id: 3,
      title: "Gujarat Business Glory Award",
      organization: "for Professional Excellence in Real Estate ",
      year: "2022",
      description:
        "Recognized for incorporating sustainable practices and eco-friendly technologies in our residential and commercial projects.",
      image:
        "https://cdn.prod.website-files.com/67f0dc08b0257791feaaf491/68064027657d9b338a82ba58_Mask%20group.png",
    },
    {
      id: 4,
      title: "4th Edition India Business Award (MSME) ",
      organization: "as a Best Enterprise Of The Year (Real Estate)",
      year: "2021",
      description:
        "Nestoria Business Hub recognized for its innovative design, amenities, and contribution to the commercial development of Dholera SIR.",
      image:
        "https://cdn.prod.website-files.com/67f0dc08b0257791feaaf491/68064027657d9b338a82ba5b_Mask%20group-1.png",
    },
  ];

  // Milestones data
  const milestones = [
    {
      id: 1,
      year: "2010",
      title: "The Beginning of the Success Story",
      description:
        "Nestoria Buildcon Pvt. Ltd., one of the fastest-growing real estate companies, has been a symbol of trust and transparency since 2010. Starting in Gwalior, Madhya Pradesh, we expanded to focus on Dholera SIR in 2018, attracted by its potential as a world-class smart city. With over a decade of experience, a skilled management team, and 5,500 happy customers, we provide customer-focused solutions for residential, commercial, and investment properties across India. Honored with the Rajiv Gandhi Global Excellence Award 2022, we continue to scale up and deliver trusted real estate services nationwide.",
    },
    {
      id: 2,
      year: "2010",
      title: "Another Step in this phenomenal Journey",
      description:
        "Recognizing the growing demand for genuine real estate solutions, we expanded pan-India to provide the best residential, commercial, and investment options. Our reputation, passion, and efforts allowed us to reach and serve customers nationwide under various brand names.",
    },
    {
      id: 3,
      year: "2018",
      title: "Go Global",
      description:
        "Growing up, we believed the sky was the limit, but we soon discovered that with dedication, hard work, and a sincere desire to make a difference, there are truly no limits. This realization inspired us to expand globally, refining our expertise in marketing, sales, and beyond. Now, with a presence in 9 countries and a portfolio of successful projects, we’ve gained invaluable experience that helps us bring joy and meaningful solutions to more people. Our achievements are a testament to the strong values that guide us, and we take pride in carrying them forward in everything we do.",
    },
    {
      id: 4,
      year: "2019",
      title: "Future Goals",
      description:
        "Nestoria Buildcon Pvt. Ltd. is paving the way for the future by embracing opportunities in Dholera Special Investment Region, one of the most promising smart cities in the world. Driven by a vision to provide innovative real estate solutions, the company has expanded pan-India, offering residential, commercial, and investment options that align with the evolving needs of modern customers. With a focus on trust, transparency, and excellence, Nestoria continues its journey toward shaping a brighter future in real estate.",
    },
    {
      id: 5,
      year: "2020",
      title: "100+ Acres Under Development",
      description:
        "Reached the milestone of having more than 100 acres of land under active development across various projects.",
    },
    {
      id: 6,
      year: "2021",
      title: "Launch of Industrial Projects",
      description:
        "Expanded portfolio with the launch of Nestoria Industrial Park, catering to manufacturing and logistics sectors.",
    },
    {
      id: 7,
      year: "2022",
      title: "5000+ Happy Customers",
      description:
        "Celebrated the milestone of serving over 500 satisfied customers across our residential and commercial projects.",
    },
    {
      id: 8,
      year: "2023",
      title: "Strategic Partnerships",
      description:
        "Formed strategic alliances with international investors and technology providers to enhance our project offerings.",
    },
  ];

  // Press coverage data
  const pressCoverage = [
    {
      id: 1,
      title: "Nestoria Group Leads Investment in Dholera SIR",
      publication: "The Economic Times",
      date: "June 15, 2023",
      excerpt:
        "Nestoria Group has emerged as one of the leading investors in Dholera SIR, with projects spanning residential, commercial, and industrial sectors.",
      link: "#",
    },
    {
      id: 2,
      title: "Smart City Development: Nestoria's Sustainable Approach",
      publication: "Business Standard",
      date: "March 22, 2023",
      excerpt:
        "Nestoria Group's approach to sustainable development in Dholera SIR is setting new standards for smart city projects across India.",
      link: "#",
    },
    {
      id: 3,
      title: "Real Estate Boom in Dholera SIR: Nestoria Group at the Forefront",
      publication: "Gujarat Business Review",
      date: "November 10, 2022",
      excerpt:
        "As Dholera SIR gains momentum as India's first planned smart city, Nestoria Group is positioned at the forefront of its real estate development.",
      link: "#",
    },
    {
      id: 4,
      title: "Interview: Nestoria Group CEO on Future of Smart Cities",
      publication: "CNBC India",
      date: "August 5, 2022",
      excerpt:
        "In an exclusive interview, Nestoria Group's CEO shares insights on the future of smart cities and the company's vision for Dholera SIR.",
      link: "#",
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="w-full"
    >
      
      
      {/* Page Header */}
      <div
        className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 md:py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url(${achievementBg})`,
          backgroundSize: "cover",
          backgroundRepeat: `no-repeat`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-2/3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight">
                Our <span className="text-blue-300">Achievements</span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-white to-blue-300 mb-6 md:mb-8"></div>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 text-white/90 leading-relaxed">
                Celebrating excellence and milestones in our journey of creating
                exceptional real estate developments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="#press-coverage"
                  className="group bg-white text-blue-600 font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-lg"
                >
                  <span className="flex items-center justify-center">
                    <i className="fas fa-newspaper mr-2"></i>
                    Press Coverage
                  </span>
                </a>
                <a
                  href="#awards"
                  className="group bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-lg backdrop-blur-sm"
                >
                  <span className="flex items-center justify-center">
                    <i className="fas fa-trophy mr-2"></i>
                    View Awards
                  </span>
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 lg:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Key Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Years of Excellence</span>
                    <span className="text-2xl font-bold text-blue-300">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Happy Customers</span>
                    <span className="text-2xl font-bold text-blue-300">5000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Awards Won</span>
                    <span className="text-2xl font-bold text-blue-300">10+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Projects Completed</span>
                    <span className="text-2xl font-bold text-blue-300">50+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Awards & Recognition Section */}
      <section id="awards" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Recognition
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Awards & <span className="text-blue-600">Recognition</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Honoring our commitment to excellence in real estate development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {awards.map((award, index) => (
              <motion.div 
                key={award.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-t-4 border-blue-500">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative overflow-hidden">
                      <img
                        src={award.image}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt={award.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-white text-lg font-bold px-4 py-2 border-2 border-white rounded-lg mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          Award
                        </span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="p-6 md:p-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                          <h5 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                            {award.title}
                          </h5>
                          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full">
                            {award.year}
                          </span>
                        </div>
                        <p className="text-blue-600 font-semibold mb-3 text-lg">
                          {award.organization}
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">{award.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              {/* <h2 className="text-2xl font-bold text-gray-900">Collections</h2> */}
             

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6 ">
                {callouts.map((callout, index) => (
                  <motion.div 
                    key={callout.name} 
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <motion.img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="w-full h-full rounded-xl object-contain 
                      group-hover:scale-105 group-hover:shadow-lg transition-all duration-500 ease-in-out max-sm:h-80 sm:aspect-2/1 lg:aspect-square p-2" 
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                   
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}

      {/* <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-3">Key Metrics</h2>
              <p className="text-xl text-gray-600">
                Our growth and impact in numbers
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="bg-white rounded-lg shadow-md py-6 px-4 h-full">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  100+
                </div>
                <h5 className="text-lg font-medium">Acres Developed</h5>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md py-6 px-4 h-full">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <h5 className="text-lg font-medium">Happy Customers</h5>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md py-6 px-4 h-full">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  6
                </div>
                <h5 className="text-lg font-medium">Major Projects</h5>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md py-6 px-4 h-full">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  8
                </div>
                <h5 className="text-lg font-medium">Years of Excellence</h5>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Milestones Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-12 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Our Journey
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Key <span className="text-blue-600">Milestones</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Key milestones that have shaped our growth and success
            </p>
          </motion.div>

          {/* Timeline wrapper */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-blue-600"></div>

            {/* Timeline items */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100, // alternate slide left/right
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex md:flex-row flex-col md:items-center md:gap-6 relative mb-16 z-10 ${
                  index % 2 === 0
                    ? "md:justify-start md:pr-[55%]"
                    : "md:justify-end md:pl-[55%]"
                } group`}
              >
                {/* Year Circle (always on center line) */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold shadow-xl
                    absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0
                    transition-all duration-500 group-hover:scale-110 group-hover:shadow-blue-400/70 group-hover:shadow-2xl"
                >
                  {milestone.year}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white shadow-xl rounded-2xl p-6 md:p-8 md:max-w-md w-full mt-20 md:mt-0 border-t-4 border-blue-500 hover:shadow-2xl transition-all duration-300"
                >
                  <h4 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {milestone.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Coverage Section */}
      <section id="press-coverage" className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Media Coverage
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Press <span className="text-blue-600">Coverage</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Nestoria Group in the news - featuring our latest achievements and developments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {pressCoverage.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <motion.div 
                  className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-blue-500"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                      <span className="text-blue-600 font-semibold text-lg mb-2">
                        {item.publication}
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{item.date}</span>
                    </div>
                    <h5 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h5>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">{item.excerpt}</p>
                    <motion.a
                      href={item.link}
                      className="group/btn inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center">
                        <i className="fas fa-external-link-alt mr-2"></i>
                        Read Full Article
                      </span>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <div className="text-center bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Press Inquiries</h3>
              <p className="text-lg text-gray-600 mb-6">
                For press inquiries, please contact our media relations team
              </p>
              <a
                href="mailto:info@nestoriagroup.com"
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <span className="flex items-center">
                  <i className="fas fa-envelope mr-2"></i>
                  Contact Media Relations
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Initiatives Section */}
      {/* <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-3">
                Corporate Social Responsibility
              </h2>
              <p className="text-xl text-gray-600">
                Making a positive impact beyond real estate
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
                alt="CSR Initiative"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h3 className="text-2xl font-bold mb-4">
                Our Commitment to Society
              </h3>
              <p className="text-gray-700 mb-6">
                At Nestoria Group, we believe in giving back to the communities
                where we operate. Our corporate social responsibility
                initiatives focus on education, environmental sustainability,
                and community development.
              </p>

              <div className="mt-6">
                <h5 className="text-xl font-semibold mb-4">
                  Key CSR Initiatives:
                </h5>
                <ul className="space-y-4">
                  <li className="border-b border-gray-100 pb-3">
                    <span className="text-green-600 mr-2">
                      <i className="fas fa-seedling"></i>
                    </span>
                    <strong className="font-medium">
                      Green Dholera Initiative:
                    </strong>{" "}
                    Planted over 5,000 trees in Dholera SIR as part of our
                    commitment to environmental sustainability.
                  </li>
                  <li className="border-b border-gray-100 pb-3">
                    <span className="text-green-600 mr-2">
                      <i className="fas fa-book-open"></i>
                    </span>
                    <strong className="font-medium">
                      Education Support Program:
                    </strong>{" "}
                    Provided scholarships to 50+ underprivileged students from
                    villages around Dholera SIR.
                  </li>
                  <li className="border-b border-gray-100 pb-3">
                    <span className="text-green-600 mr-2">
                      <i className="fas fa-hands-helping"></i>
                    </span>
                    <strong className="font-medium">
                      Skill Development Center:
                    </strong>{" "}
                    Established a vocational training center to empower local
                    youth with construction and hospitality skills.
                  </li>
                  <li className="border-b border-gray-100 pb-3">
                    <span className="text-green-600 mr-2">
                      <i className="fas fa-heart"></i>
                    </span>
                    <strong className="font-medium">
                      Community Health Camps:
                    </strong>{" "}
                    Organized regular health check-up camps for residents of
                    neighboring villages.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </motion.div>
  );
}

export default Achievements;
