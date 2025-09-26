import React, { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

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
  const testimonialsRef = useRef(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      mirror: true,
    });
  }, []);

  const scrollTestimonials = (direction) => {
    if (direction === "left") {
      testimonialsRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    } else {
      testimonialsRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

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

        {/* Container for left and right arrows */}
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-blue-600 hover:text-blue-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            onClick={() => scrollTestimonials("left")}
            data-aos="fade-left"
          >
            <FaArrowLeft />
          </button>
          <button
            className="text-blue-600 hover:text-blue-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            onClick={() => scrollTestimonials("right")}
            data-aos="fade-right"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Testimonials Container with Horizontal Scrolling */}
        <div
          ref={testimonialsRef}
          className="flex gap-6 overflow-x-auto scroll-smooth p-3"
          style={{
            scrollBehavior: "smooth",
            overflowY: "hidden",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-left flex-shrink-0 w-80 
              border border-gray-200 shadow-md transition-all duration-300 ease-in-out
              hover:scale-105 hover:border-blue-500 
              hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.8)]
              active:scale-95 active:shadow-[0_0_30px_6px_rgba(59,130,246,0.9)]"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
