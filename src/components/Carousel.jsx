import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Carousel = () => {
  const testimonials = [
    {
      name: "Rajesh Patel",
      position: "Business Owner",
      testimonial: "Investing in Dholera SIR through Nestoria Group was one of the best decisions I've made. Their transparent approach and expert guidance made the entire process smooth and hassle-free.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Shah",
      position: "Real Estate Investor",
      testimonial: "I've worked with several real estate developers, but Nestoria Group stands out for their integrity and commitment to client satisfaction. Their knowledge about Dholera SIR is unmatched.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Amit Desai",
      position: "Entrepreneur",
      testimonial: "The team at Nestoria Group provided exceptional service from property selection to documentation. Their insights into the future potential of Dholera SIR helped me make an informed investment decision.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      name: "Neha Sharma",
      position: "First-time Investor",
      testimonial: "As a first-time investor, I had many questions and concerns. The Nestoria team patiently addressed all my queries and guided me through each step of the property purchase process.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/29.jpg"
    },
    {
      name: "Vikram Singh",
      position: "Corporate Executive",
      testimonial: "Nestoria Group's professional approach and in-depth market knowledge impressed me. They helped me find the perfect commercial property in Dholera SIR that aligned with my investment goals.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/81.jpg"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fas fa-star ${i <= rating ? 'text-jurska-accent' : 'text-gray-300'}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="py-12 relative w-full max-w-7xl mx-auto touch-pan-y">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ 
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active bg-jurska-accent'
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        className="w-full overflow-hidden py-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="jurska-card p-6 m-4 transition-all duration-300 hover:border-jurska-accent border border-transparent min-w-[280px] h-full flex flex-col relative overflow-hidden">
              <div className="flex items-center mb-4 border-b border-gray-100 pb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 shadow-sm border-2 border-jurska-accent">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-jurska-primary">{testimonial.name}</h4>
                  <p className="text-jurska-gray text-sm">{testimonial.position}</p>
                </div>
              </div>
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <div className="flex-grow">
                <p className="text-jurska-gray text-base italic pl-2 border-l-3 border-jurska-accent">"{testimonial.testimonial}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom pagination styles with Tailwind */}
      <div className="mt-6 flex justify-center gap-2 flex-wrap px-4">
        {/* Pagination is handled by Swiper, this is just for additional styling if needed */}
      </div>
    </div>
  );
}

export default Carousel;
