import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

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
    time: "6 month ago",
    review:
      "Good service and repairs",
  },
  {
    name: "Shamal Mohammed",
    time: "5 years ago",
    review:
      "Best service and very polite",
  },
];

const Testimonials = () => {
  const testimonialsRef = useRef(null);

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
        <h2 className="text-4xl font-bold text-blue-600">What Our Customers Say</h2>
        <p className="text-gray-200 mt-2 mb-10">
          Don&apos;t just take our word for it – hear from our satisfied customers
        </p>

        {/* Container for left and right arrows */}
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-blue-600 hover:text-blue-700 text-3xl"
            onClick={() => scrollTestimonials("left")}
          >
            <FaArrowLeft />
          </button>
          <button
            className="text-blue-600 hover:text-blue-700 text-3xl"
            onClick={() => scrollTestimonials("right")}
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Testimonials Container with Horizontal Scrolling */}
        <div
          ref={testimonialsRef}
          className="flex gap-6 overflow-x-auto scroll-smooth"
          style={{
            scrollBehavior: "smooth",
            overflowY: "hidden", // Prevent vertical scroll
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE and Edge
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-100 rounded-lg p-6 text-left shadow-sm flex-shrink-0 w-80 active:scale-95 active:shadow-lg hover:scale-105 hover:shadow-2xl hover:z-10 transition-all duration-300 ease-in-out"
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
              <p className="text-gray-700 italic">{t.review}</p>
              <div className="text-blue-600 font-bold">
                {t.time}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-10 bg-green-900 px-6 py-2 inline-block rounded-lg font-semibold hover:bg-green-700 transition">
          <a href="https://www.google.com/search?sca_esv=f6511093bb828960&rlz=1C1KNTJ_enLK1089LK1089&sxsrf=AE3TifOkBLRu8nGy-FlAR1X3Lix5DYx9PA:1757413578963&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3sLC7bjrckBi1PHIXn7go03qo5P12SF7Jpk1I6xQBcPijXsdDbO7K6gm0uHbT1pSv9B-0jfeblIYcLgaCX4RGVhA65vYx3OO0T1N8aTPyD4JXO56g%3D%3D&q=Lahori+Chaska+The+Braai+Master+Reviews&sa=X&ved=2ahUKEwi41OPgu8uPAxXZrlYBHWgxAYcQ0bkNegQIJRAE&biw=1366&bih=633&dpr=1" target="_blank">Review</a>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
