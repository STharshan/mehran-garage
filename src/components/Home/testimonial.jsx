import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Elizabeth Ezedjiaro",
    time: "5 years ago",
    review:
      "I have been going to this garage since I got my car 5 years now. My car is old 2005 and almost never gives me trouble. I feel he is fair with his prices and good customer service. I highly recommend.",
  },
  {
    name: "Javid Dashti",
    time: "4 years ago",
    review:
      "Very kind and honest staff! I definitely recommend going to this garage if you don't know where to take your car! 10/10 customer service and fantastic prices!",
  },
  {
    name: "Matthew Hearnshaw",
    time: "1 year ago",
    review:
      "These guys are amazing - top quality work and great customer service at best prices for all vehicle maintenance and repair work!",
  },
  {
    name: "Andrew Kumbula",
    time: "2 years ago",
    review:
      "They are very professional and respectful, they will have your car done and ready in no time. They are honest and I use my car very often.",
  },
  {
    name: "Ripper",
    time: "7 years ago",
    review:
      "Excellent engineer always fixes my car at a reasonable price. I wouldn't go anywhere else.",
  },
  {
    name: "Kaspras Knojukas",
    time: "4 years ago",
    review:
      "Good service. Reasonable price. Person knows what he's doing. Recommend.",
  },
  {
    name: "Lawrence Byaruhanga",
    time: "6 months ago",
    review: "Good service and repairs",
  },
  {
    name: "Shamal Mohammed",
    time: "5 years ago",
    review: "Best service and very polite",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600" data-aos="fade-up">
          What Our Customers Say
        </h2>
        <p
          className="text-gray-200 mt-2 mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Don&apos;t just take our word for it – hear from our satisfied
          customers
        </p>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-16"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white rounded-lg p-6 text-left flex-shrink-0 w-full 
                border border-gray-200 shadow-md transition-all duration-300 ease-in-out
                hover:scale-105 hover:border-blue-500 
                hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.8)]
                active:scale-95 active:shadow-[0_0_30px_6px_rgba(59,130,246,0.9)]
                cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div>
                    <h4 className="text-blue-600 mb-2 font-semibold">{t.name}</h4>
                    <div className="flex text-yellow-500 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-3">{t.review}</p>
                <div className="text-blue-600 font-bold">{t.time}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div
          className="flex justify-center gap-6 mt-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            className="swiper-button-prev-custom w-10 h-10 flex items-center justify-center rounded-full border transition
                       border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:scale-95"
          >
            <BsArrowLeft className="w-5 h-5" />
          </button>
          <button
            className="swiper-button-next-custom w-10 h-10 flex items-center justify-center rounded-full border transition
                       border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:scale-95"
          >
            <BsArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;