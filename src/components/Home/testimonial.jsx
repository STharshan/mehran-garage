import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Elizabeth Ezedjiaro",
    time: "5 years ago",
    review: "I have been going to this garage since I got my car 5 years now. My car is old 2005 and almost never gives me trouble. I feel he is fair with his prices and good customer service. I highly recommend.",
    borderColor: "border-blue-300"
  },
  {
    name: "Javid Dashti",
    time: "4 years ago",
    review: "Very kind and honest staff! I definitely recommend going to this garage if you don't know where to take your car! 10/10 customer service and fantastic prices!",
    borderColor: "border-red-300"
  },
  {
    name: "Matthew Hearnshaw",
    time: "1 year ago",
    review: "These guys are amazing - top quality work and great customer service at best prices for all vehicle maintenance and repair work!",
    borderColor: "border-blue-300"
  },
  {
    name: "Andrew Kumbula",
    time: "2 years ago",
    review: "They are very professional and respectful, they will have your car done and ready in no time. They are honest and I use my car very often.",
    borderColor: "border-red-300"
  },
  {
    name: "Ripper",
    time: "7 years ago",
    review: "Excellent engineer always fixes my car at a reasonable price. I wouldn't go anywhere else.",
    borderColor: "border-blue-300"
  },
  {
    name: "Kaspras Knojukas",
    time: "4 years ago",
    review: "Good service. Reasonable price. Person knows what he's doing. Recommend.",
    borderColor: "border-red-300"
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className={`border ${testimonial.borderColor} rounded-lg p-6 shadow-sm hover:shadow-md transition`}
          >
            <div className="flex mb-3 text-yellow-500">
              {Array(5).fill().map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
            <p className="font-semibold text-gray-900">
              {testimonial.name} <span className="font-normal text-gray-600">• {testimonial.time}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
