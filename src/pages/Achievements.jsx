import React from 'react';

function Achievements() {
  // Awards data
  const awards = [
    {
      id: 1,
      title: "Best Real Estate Developer - Dholera SIR",
      organization: "Gujarat Real Estate Awards",
      year: "2023",
      description: "Recognized for excellence in developing sustainable and innovative real estate projects in Dholera SIR.",
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=2070"
    },
    {
      id: 2,
      title: "Excellence in Township Planning",
      organization: "Indian Association of Urban Planners",
      year: "2022",
      description: "Awarded for the master planning and execution of Nestoria Green Valley residential township in Dholera SIR.",
      image: "https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=2070"
    },
    {
      id: 3,
      title: "Sustainable Development Award",
      organization: "Green Building Council of India",
      year: "2022",
      description: "Recognized for incorporating sustainable practices and eco-friendly technologies in our residential and commercial projects.",
      image: "https://images.unsplash.com/photo-1624969862293-b749659a180b?q=80&w=2070"
    },
    {
      id: 4,
      title: "Best Commercial Project",
      organization: "National Real Estate Development Council",
      year: "2021",
      description: "Nestoria Business Hub recognized for its innovative design, amenities, and contribution to the commercial development of Dholera SIR.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074"
    }
  ];

  // Milestones data
  const milestones = [
    {
      id: 1,
      year: "2010",
      title: "Foundation of Nestoria Group",
      description: "Established with a vision to become a leading real estate developer in emerging smart cities of India."
    },
    {
      id: 2,
      year: "2017",
      title: "First Land Acquisition in Dholera SIR",
      description: "Acquired 50 acres of prime land in Dholera Special Investment Region for future development."
    },
    {
      id: 3,
      year: "2018",
      title: "Launch of First Residential Project",
      description: "Successfully launched Nestoria Green Valley, our first residential township project in Dholera SIR."
    },
    {
      id: 4,
      year: "2019",
      title: "Expansion into Commercial Real Estate",
      description: "Began development of Nestoria Business Hub, marking our entry into commercial real estate sector."
    },
    {
      id: 5,
      year: "2020",
      title: "100+ Acres Under Development",
      description: "Reached the milestone of having more than 100 acres of land under active development across various projects."
    },
    {
      id: 6,
      year: "2021",
      title: "Launch of Industrial Projects",
      description: "Expanded portfolio with the launch of Nestoria Industrial Park, catering to manufacturing and logistics sectors."
    },
    {
      id: 7,
      year: "2022",
      title: "500+ Happy Customers",
      description: "Celebrated the milestone of serving over 500 satisfied customers across our residential and commercial projects."
    },
    {
      id: 8,
      year: "2023",
      title: "Strategic Partnerships",
      description: "Formed strategic alliances with international investors and technology providers to enhance our project offerings."
    }
  ];

  // Press coverage data
  const pressCoverage = [
    {
      id: 1,
      title: "Nestoria Group Leads Investment in Dholera SIR",
      publication: "The Economic Times",
      date: "June 15, 2023",
      excerpt: "Nestoria Group has emerged as one of the leading investors in Dholera SIR, with projects spanning residential, commercial, and industrial sectors.",
      link: "#"
    },
    {
      id: 2,
      title: "Smart City Development: Nestoria's Sustainable Approach",
      publication: "Business Standard",
      date: "March 22, 2023",
      excerpt: "Nestoria Group's approach to sustainable development in Dholera SIR is setting new standards for smart city projects across India.",
      link: "#"
    },
    {
      id: 3,
      title: "Real Estate Boom in Dholera SIR: Nestoria Group at the Forefront",
      publication: "Gujarat Business Review",
      date: "November 10, 2022",
      excerpt: "As Dholera SIR gains momentum as India's first planned smart city, Nestoria Group is positioned at the forefront of its real estate development.",
      link: "#"
    },
    {
      id: 4,
      title: "Interview: Nestoria Group CEO on Future of Smart Cities",
      publication: "CNBC India",
      date: "August 5, 2022",
      excerpt: "In an exclusive interview, Nestoria Group's CEO shares insights on the future of smart cities and the company's vision for Dholera SIR.",
      link: "#"
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Achievements</h1>
              <p className="text-xl mb-0">Celebrating excellence and milestones in our journey of creating exceptional real estate developments</p>
            </div>
            <div className="lg:w-1/3 lg:text-right mt-4 lg:mt-0">
              <a href="#press-coverage" className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition duration-300">Press Coverage</a>
            </div>
          </div>
        </div>
      </div>

      {/* Awards & Recognition Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-3">Awards & Recognition</h2>
              <p className="text-xl text-gray-600">Honoring our commitment to excellence in real estate development</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map(award => (
              <div key={award.id}>
                <div className="h-full bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={award.image} 
                        className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none" 
                        alt={award.title} 
                      />
                    </div>
                    <div className="md:w-2/3">
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="text-xl font-semibold mb-0">{award.title}</h5>
                          <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded">{award.year}</span>
                        </div>
                        <p className="text-gray-600 mb-2">{award.organization}</p>
                        <p className="text-gray-800">{award.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-3">Key Metrics</h2>
              <p className="text-xl text-gray-600">Our growth and impact in numbers</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="bg-white rounded-lg shadow-md py-6 px-4 h-full">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100+</div>
                <h5 className="text-lg font-medium">Acres Developed</h5>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md py-6 px-4 h-full">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
                <h5 className="text-lg font-medium">Happy Customers</h5>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md py-6 px-4 h-full">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">6</div>
                <h5 className="text-lg font-medium">Major Projects</h5>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md py-6 px-4 h-full">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">8</div>
                <h5 className="text-lg font-medium">Years of Excellence</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-3">Our Journey</h2>
              <p className="text-xl text-gray-600">Key milestones that have shaped our growth</p>
            </div>
          </div>

          <div className="relative">
            {milestones.map((milestone, index) => (
              <div className={`flex flex-col lg:flex-row mb-10 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`} key={milestone.id}>
                <div className="lg:w-1/2">
                  <div className={`bg-white p-6 shadow-md rounded-lg ${index % 2 === 0 ? 'lg:ml-auto lg:mr-8' : 'lg:mr-auto lg:ml-8'} max-w-lg`}>
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded mr-3 text-sm font-medium">{milestone.year}</span>
                      <h4 className="text-lg font-semibold mb-0">{milestone.title}</h4>
                    </div>
                    <p className="mb-0 text-gray-700">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Coverage Section */}
      <section id="press-coverage" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-3">Press Coverage</h2>
              <p className="text-xl text-gray-600">Nestoria Group in the news</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pressCoverage.map(item => (
              <div key={item.id}>
                <div className="h-full bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="p-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-600 font-medium">{item.publication}</span>
                      <span className="text-gray-500 text-sm">{item.date}</span>
                    </div>
                    <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                    <p className="text-gray-700 mb-6">{item.excerpt}</p>
                    <a href={item.link} className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-600 hover:text-white transition duration-300">Read Full Article</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="text-center">
              <p className="mb-4 text-gray-700">For press inquiries, please contact our media relations team</p>
              <a href="mailto:media@nestoriagroup.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">Contact Media Relations</a>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Initiatives Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-3">Corporate Social Responsibility</h2>
              <p className="text-xl text-gray-600">Making a positive impact beyond real estate</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070" alt="CSR Initiative" className="w-full rounded-lg shadow-md" />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h3 className="text-2xl font-bold mb-4">Our Commitment to Society</h3>
              <p className="text-gray-700 mb-6">At Nestoria Group, we believe in giving back to the communities where we operate. Our corporate social responsibility initiatives focus on education, environmental sustainability, and community development.</p>
              
              <div className="mt-6">
                <h5 className="text-xl font-semibold mb-4">Key CSR Initiatives:</h5>
                <ul className="space-y-4">
                  <li className="border-b border-gray-100 pb-3">
                    <span className="text-green-600 mr-2"><i className="fas fa-seedling"></i></span>
                    <strong className="font-medium">Green Dholera Initiative:</strong> Planted over 5,000 trees in Dholera SIR as part of our commitment to environmental sustainability.
                  </li>
                  <li className="border-b border-gray-100 pb-3">
                    <span className="text-green-600 mr-2"><i className="fas fa-book-open"></i></span>
                    <strong className="font-medium">Education Support Program:</strong> Provided scholarships to 50+ underprivileged students from villages around Dholera SIR.
                  </li>
                  <li className="border-b border-gray-100 pb-3">
                    <span className="text-green-600 mr-2"><i className="fas fa-hands-helping"></i></span>
                    <strong className="font-medium">Skill Development Center:</strong> Established a vocational training center to empower local youth with construction and hospitality skills.
                  </li>
                  <li className="border-b border-gray-100 pb-3">
                    <span className="text-green-600 mr-2"><i className="fas fa-heart"></i></span>
                    <strong className="font-medium">Community Health Camps:</strong> Organized regular health check-up camps for residents of neighboring villages.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Achievements;
