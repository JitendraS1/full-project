import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'real-estate', name: 'Real Estate' },
    { id: 'investment', name: 'Investment' },
    { id: 'dholera', name: 'Dholera SIR' },
    { id: 'market-trends', name: 'Market Trends' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Why Dholera SIR is the Future of Smart City Living",
      excerpt: "Explore how Dholera SIR is setting new standards for smart urban development with its cutting-edge infrastructure and sustainable design.",
      date: "June 15, 2023",
      author: "Rajesh Sharma",
      category: "dholera",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "5 Reasons to Invest in Dholera SIR Right Now",
      excerpt: "Discover why investors are flocking to Dholera SIR and how early investment in this emerging smart city can yield significant returns.",
      date: "May 28, 2023",
      author: "Priya Patel",
      category: "investment",
      image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Delhi-Mumbai Industrial Corridor: A Game Changer for Gujarat",
      excerpt: "Learn how the DMIC project is transforming the economic landscape of Gujarat and creating unprecedented opportunities for growth.",
      date: "April 10, 2023",
      author: "Amit Shah",
      category: "market-trends",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Residential vs. Commercial: Which Property Type Offers Better Returns in Dholera?",
      excerpt: "A comparative analysis of residential and commercial property investments in Dholera SIR to help you make informed investment decisions.",
      date: "March 22, 2023",
      author: "Neha Gupta",
      category: "real-estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "The Future of Sustainable Development in Dholera SIR",
      excerpt: "Explore how Dholera SIR is implementing green technologies and sustainable practices to create an eco-friendly urban environment.",
      date: "February 15, 2023",
      author: "Vikram Singh",
      category: "dholera",
      image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "How to Finance Your Property Purchase in Dholera SIR",
      excerpt: "A comprehensive guide to financing options, loan schemes, and payment plans available for property purchases in Dholera SIR.",
      date: "January 30, 2023",
      author: "Sanjay Mehta",
      category: "real-estate",
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      readTime: "7 min read"
    },
    {
      id: 7,
      title: "2023 Real Estate Market Trends: What Investors Should Know",
      excerpt: "Stay ahead of the curve with insights into the latest real estate market trends and how they might impact your investment strategy.",
      date: "January 12, 2023",
      author: "Ananya Desai",
      category: "market-trends",
      image: "https://images.unsplash.com/photo-1542879379-a0c18549e8a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      readTime: "6 min read"
    },
    {
      id: 8,
      title: "The Rise of Industrial Real Estate in Dholera SIR",
      excerpt: "Discover why industrial properties in Dholera SIR are becoming increasingly attractive to investors and businesses alike.",
      date: "December 5, 2022",
      author: "Rahul Verma",
      category: "investment",
      image: "https://images.unsplash.com/photo-1553697388-94e804e2f0f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      readTime: "5 min read"
    },
    {
      id: 9,
      title: "Smart Infrastructure: The Backbone of Dholera SIR",
      excerpt: "An in-depth look at the cutting-edge infrastructure being developed in Dholera SIR and how it's setting new standards for urban development.",
      date: "November 18, 2022",
      author: "Deepak Kumar",
      category: "dholera",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      readTime: "8 min read"
    }
  ];

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-page bg-white">
      <Helmet>
        <title>Blog - Nestoria Group | Dholera SIR</title>
        <meta name="description" content="Stay updated with the latest news, insights, and trends in real estate and Dholera SIR through our blog." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Blog</h1>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl mb-6 text-blue-100 text-center max-w-2xl">Stay updated with the latest news, insights, and trends in real estate and Dholera SIR</p>
            <nav aria-label="breadcrumb">
              <ol className="flex justify-center space-x-2 text-blue-200">
                <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">Home</Link></li>
                <li className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-white">Blog</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex justify-center flex-wrap gap-3">
              {categories.map(category => (
                <button 
                  key={category.id} 
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm ${activeCategory === category.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div className="mb-6" key={post.id}>
                <div className="h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative border border-gray-100 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      className="w-full h-[220px] object-cover transform transition-transform duration-500 group-hover:scale-105" 
                      alt={post.title}
                    />
                    <div className="absolute top-0 left-0 m-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                        {categories.find(cat => cat.id === post.category).name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-500 font-medium">{post.date}</span>
                      <span className="text-sm text-blue-600">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{post.title}</h3>
                    <p className="text-gray-600 mb-5 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center pt-4 border-t border-gray-100">
                      <div className="mr-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center font-medium shadow-sm">
                          {post.author.charAt(0)}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`} className="absolute inset-0" aria-label={`Read more about ${post.title}`}></Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="w-full col-span-1 md:col-span-2 lg:col-span-3">
              <div className="text-center py-16 bg-gray-50 rounded-lg border border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">No posts found in this category</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">Please try selecting a different category or check back later for new content.</p>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                  onClick={() => setActiveCategory('all')}
                >
                  View All Posts
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Subscribe to Our Newsletter</h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg mb-8 text-gray-600">Stay updated with the latest news, property listings, and insights about Dholera SIR development and investment opportunities.</p>
            
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
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Ready to Invest in Dholera SIR?</h2>
              <p className="text-xl mb-0 text-blue-100">Contact our team today to explore investment opportunities in India's first planned smart city.</p>
            </div>
            <div>
              <Link to="/contact" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
