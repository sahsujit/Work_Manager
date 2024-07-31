"use client";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import "swiper/css/freeMode"

import { UserIcon } from '@heroicons/react/solid'

const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Company',
      content: 'This task management tool has revolutionized the way our team works!',
    },
    {
      name: 'Jane Smith',
      role: 'Project Manager',
      content: 'The best task management software I have ever used. Highly recommend!',
    },
    {
      name: 'Alice Johnson',
      role: 'Developer',
      content: 'Great tool for managing tasks and staying organized!',
    }
  ]
  
  const TestimonialSection = () => {
    return (
      <div className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-richblack-5">What Our Users Say</h2>
          <Swiper
            
            slidesPerView={1}
            spaceBetween={25}
            pagination={true}
            loop={true}
            freeMode={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            
            modules={[Pagination,FreeMode,Autoplay]}
            className="mySwiper "
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="bg-richblack-800 rounded-lg shadow-lg p-10">
                <div className="flex justify-center mb-4">
                  <UserIcon className="w-16 h-16 text-richblack-5" />
                </div>
                <h3 className="text-xl text-richblack-50 font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-sm text-richblack-300 mb-4">{testimonial.role}</p>
                <p className="text-richblack-100">{testimonial.content}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    )
  }
  
  export default TestimonialSection