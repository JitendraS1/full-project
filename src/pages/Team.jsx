import React from 'react';
import kuldeepSoniImg from '../assets/img/team/sales/Kuldeepsoni.jpg';
import ankitjiiImg from '../assets/img/team/sales/ankitji.jpg';
import arvindjiiImg from '../assets/img/team/sales/arvindji.jpg';
import devendrajiiImg from '../assets/img/team/sales/devendraji.jpg';
import ramendrajiiImg from '../assets/img/team/sales/ramendraji.jpg';
import jagdishjiiImg from '../assets/img/team/sales/jagdishji.jpg';
import garimajiiImg from '../assets/img/team/management/garimaji0.jpg';
import bhavnajiImg from '../assets/img/team/management/bhavnaji.jpg';


function Team() {
  // Team members data
  const leadershipTeam = [
    {
      id: 1,
      name: "Rajesh Patel",
      position: "Founder & CEO",
      bio: "With over 25 years of experience in real estate development, Rajesh has led Nestoria Group to become one of the leading developers in Dholera SIR. His vision and strategic leadership have been instrumental in the company's growth.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149",
      
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "rajesh@nestoriagroup.com"
      }
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Chief Operating Officer",
      bio: "Priya oversees all operational aspects of Nestoria Group. With her background in urban planning and project management, she ensures that all projects are delivered on time and to the highest standards.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "priya@nestoriagroup.com"
      }
    },
    {
      id: 3,
      name: "Amit Desai",
      position: "Chief Financial Officer",
      bio: "Amit brings 15 years of financial expertise to Nestoria Group. His strategic financial planning and risk management skills have been crucial in securing investments for our major development projects.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "amit@nestoriagroup.com"
      }
    },
    // {
    //   id: 4,
    //   name: "Neha Verma",
    //   position: "Marketing Director",
    //   bio: "Neha leads our marketing initiatives with innovative strategies. Her expertise in digital marketing and brand development has significantly enhanced Nestoria Group's market presence and customer engagement.",
    //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061",
    //   socialLinks: {
    //     linkedin: "#",
    //     twitter: "#",
    //     email: "neha@nestoriagroup.com"
    //   }
    // }
  ];

  const departmentTeams = [
    {
      id: 1,
      name: "Sales Team",
      members: [
        {
          id: 1,
          name: "Kuldeep Soni",
          position: "Sales ",
          image: kuldeepSoniImg
        },
        {
          id: 2,
           name: "Kuldeep Soni",
          position: "Sales ",
          image: devendrajiiImg
        },
        {
          id: 3,
           name: "Ramendra Singh Tomar",
          position: "Sales ",
          image: ramendrajiiImg
        },
        {
          id: 4,
           name: "Arvind Singh Tomar",
          position: "Sales ",
          image: arvindjiiImg
        },
        {
          id: 5,
          name: "Jagdish Patel",
          position: "Sales ",
          image: jagdishjiiImg
        },
        {
          id: 5,
          name: "Ankit Singh Chauhan",
          position: "Sales ",
          image: ankitjiiImg
        }
       
      ]
    },
    {
      id: 2,
      name: "Management",
      members: [
        {
          id: 1,
          name: "Garima Bora",
          position: "HR Admin",
          image: garimajiiImg
        }
        // {
        //   id: 2,
        //   name: "Divya Joshi",
        //   position: "Senior Project Manager",
        //   image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2187"
        // },
        // {
        //   id: 3,
        //   name: "Arjun Kumar",
        //   position: "Project Engineer",
        //   image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2199"
        // }
      ]
    },
    {
      id: 3,
      name: "Legal Team",
      members: [
        {
          id: 1,
          name: "Bhavna Vyas",
          position: "Legal Advisor",
          image: bhavnajiImg
        },
        // {
        //   id: 2,
        //   name: "Sneha Kapoor",
        //   position: "Paralegal",
        //   image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2187"
        // },
        // {
        //   id: 3,
        //   name: "Vikram Singh",
        //   position: "Contract Specialist",
        //   image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2187"
        // }
      ]
    },
    // {
    //   id: 4,
    //   name: "Customer Support Team",
    //   members: [
    //     {
    //       id: 1,
    //       name: "Ajay Toamr",
    //       position: "Customer Relations Manager",
    //       image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=2187"
    //     },
    //     {
    //       id: 2,
    //       name: "Karan Malhotra",
    //       position: "Customer Support Specialist",
    //       image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2187"
    //     },
    //     {
    //       id: 3,
    //       name: "Pooja Shah",
    //       position: "Client Relationship Officer",
    //       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2188"
    //     }
    //   ]
    // }
  ];

  return (
    <div className="team-page">
      {/* Page Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-2/3">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Team</h1>
              <p className="text-xl">Meet the dedicated professionals behind Nestoria Group's success</p>
            </div>
            <div className="w-full lg:w-1/3 mt-6 lg:mt-0 lg:text-right">
              <a href="#join-us" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition duration-300">Join Our Team</a>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600">The visionaries guiding Nestoria Group towards excellence</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map(leader => (
              <div key={leader.id} >
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 h-full align-middle ">
                  <div className="relative">
                    <img 
                      src={leader.image} 
                      className="w-full h-[280px] object-cover rounded-t-lg" 
                      alt={leader.name} 
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
                      <a href={leader.socialLinks.linkedin} className="bg-blue-600 text-white p-2 rounded-full mx-1 hover:bg-blue-700 transition duration-300">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href={leader.socialLinks.twitter} className="bg-blue-600 text-white p-2 rounded-full mx-1 hover:bg-blue-700 transition duration-300">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href={`mailto:${leader.socialLinks.email}`} className="bg-blue-600 text-white p-2 rounded-full mx-1 hover:bg-blue-700 transition duration-300">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h5 className="text-xl font-semibold mb-1">{leader.name}</h5>
                    <p className="text-blue-600 mb-3">{leader.position}</p>
                    <p className="text-gray-700">{leader.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Teams Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Our Departments</h2>
              <p className="text-xl text-gray-600">Specialized teams working together to deliver excellence</p>
            </div>
          </div>

          {departmentTeams.map(department => (
            <div className="mb-20" key={department.id}>
              <div className="mb-6">
                <div className="w-full">
                  <h3 className="text-xl font-semibold border-l-4 border-blue-600 pl-3">{department.name}</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {department.members.map(member => (
                  <div key={member.id}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                      <div className="flex">
                        <div className="w-1/3">
                          <img 
                            src={member.image} 
                            className="w-full h-full object-cover rounded-l-lg" 
                            alt={member.name} 
                          />
                        </div>
                        <div className="w-2/3">
                          <div className="p-4">
                            <h5 className="text-base font-semibold mb-1">{member.name}</h5>
                            <p className="text-blue-600 text-sm mb-2">{member.position}</p>
                            <div className="text-sm">
                              <a href="#" className="text-gray-500 mr-2">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                              <a href="#" className="text-gray-500">
                                <i className="fas fa-envelope"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">Our Company Culture</h2>
              <p className="mb-8">At Nestoria Group, we foster a culture of innovation, integrity, and excellence. We believe in creating an environment where our team members can thrive professionally and personally.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <i className="fas fa-users text-2xl text-blue-600"></i>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-semibold mb-1">Collaborative Environment</h5>
                      <p>We work together across departments to achieve common goals.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <i className="fas fa-lightbulb text-2xl text-blue-600"></i>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-semibold mb-1">Innovation</h5>
                      <p>We encourage creative thinking and new approaches to challenges.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <i className="fas fa-award text-2xl text-blue-600"></i>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-semibold mb-1">Excellence</h5>
                      <p>We strive for the highest standards in all our endeavors.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <i className="fas fa-handshake text-2xl text-blue-600"></i>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-semibold mb-1">Integrity</h5>
                      <p>We conduct business with honesty, transparency, and ethical practices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" alt="Team Collaboration" className="w-full rounded shadow" />
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" alt="Team Meeting" className="w-full rounded shadow" />
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070" alt="Office Space" className="w-full rounded shadow" />
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070" alt="Team Building" className="w-full rounded shadow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section id="join-us" className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-2/3 text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-xl mb-8">We're always looking for talented individuals to join our growing team. Check out our current openings or send us your resume for future opportunities.</p>
              <a href="#current-openings" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded mr-3 mb-3 hover:bg-gray-100 transition duration-300">View Current Openings</a>
              <a href="mailto:careers@nestoriagroup.com" className="inline-block border border-white text-white font-semibold px-6 py-3 rounded mb-3 hover:bg-white hover:text-blue-600 transition duration-300">Send Your Resume</a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section id="current-openings" className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
              <p className="text-xl text-gray-600">Explore career opportunities at Nestoria Group</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 h-full">
                <div className="p-6">
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full mb-3">Full-time</span>
                  <h5 className="text-xl font-semibold mb-2">Senior Project Manager</h5>
                  <p className="text-gray-500 mb-4"><i className="fas fa-map-marker-alt mr-2"></i>Dholera SIR, Gujarat</p>
                  <p className="text-gray-700 mb-6">We are looking for an experienced Project Manager to oversee our residential development projects in Dholera SIR. The ideal candidate will have at least 8 years of experience in real estate project management.</p>
                  <div className="flex justify-between items-center">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300">View Details</button>
                    <span className="text-gray-500 text-sm">Posted 2 weeks ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 h-full">
                <div className="p-6">
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full mb-3">Full-time</span>
                  <h5 className="text-xl font-semibold mb-2">Marketing Specialist</h5>
                  <p className="text-gray-500 mb-4"><i className="fas fa-map-marker-alt mr-2"></i>Ahmedabad, Gujarat</p>
                  <p className="text-gray-700 mb-6">Join our marketing team to develop and implement marketing strategies for our real estate projects. The ideal candidate will have experience in digital marketing and content creation for the real estate sector.</p>
                  <div className="flex justify-between items-center">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300">View Details</button>
                    <span className="text-gray-500 text-sm">Posted 1 week ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 h-full">
                <div className="p-6">
                  <span className="inline-block bg-blue-400 text-white text-xs font-semibold px-2 py-1 rounded-full mb-3">Part-time</span>
                  <h5 className="text-xl font-semibold mb-2">Legal Advisor</h5>
                  <p className="text-gray-500 mb-4"><i className="fas fa-map-marker-alt mr-2"></i>Dholera SIR, Gujarat</p>
                  <p className="text-gray-700 mb-6">We are seeking a Legal Advisor with expertise in real estate law to provide guidance on property transactions, contracts, and regulatory compliance for our projects in Dholera SIR.</p>
                  <div className="flex justify-between items-center">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300">View Details</button>
                    <span className="text-gray-500 text-sm">Posted 3 days ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 h-full">
                <div className="p-6">
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full mb-3">Full-time</span>
                  <h5 className="text-xl font-semibold mb-2">Sales Executive</h5>
                  <p className="text-gray-500 mb-4"><i className="fas fa-map-marker-alt mr-2"></i>Dholera SIR, Gujarat</p>
                  <p className="text-gray-700 mb-6">We are looking for enthusiastic Sales Executives to join our team. The ideal candidate will have experience in real estate sales and excellent communication skills to engage with potential clients.</p>
                  <div className="flex justify-between items-center">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300">View Details</button>
                    <span className="text-gray-500 text-sm">Posted 5 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center">
              <p className="mb-4">Don't see a position that matches your skills?</p>
              <a href="mailto:careers@nestoriagroup.com" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition duration-300">Send Us Your Resume</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
