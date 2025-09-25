import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const features = [
  {
    title: "Decades of Experience",
    description: "With years of industry expertise, we bring unmatched knowledge and hands-on skill to every service we provide."
  },
  {
    title: "Family-Owned Values",
    description: "We treat our customers like family — with honesty, respect, and genuine care in every interaction."
  },
  {
    title: "Best-in-Class Equipment",
    description: "We use the latest tools and technologies to ensure precise, efficient, and high-quality service every time."
  },
  {
    title: "Customer-Centered Service",
    description: "Every person matters to us. We listen, understand, and go above and beyond to meet your needs."
  },
  {
    title: "Transparent & Trustworthy",
    description: "No hidden fees, no surprises. Just honest advice, fair pricing, and dependable service."
  },
  {
    title: "Proven Customer Satisfaction",
    description: "Our loyal customers and glowing reviews are a testament to the quality and consistency we deliver."
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-out-cubic", // Easing type
      once: true, // Ensure the animation only triggers once
      mirror: true, // Animate elements both scrolling down AND up
    });
  }, []);

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-10" data-aos="fade-up">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg focus:ring-offset-1 focus:ring-offset-blue-600 hover:ring-1 hover:ring-blue-600
      hover:ring-offset-1 hover:ring-offset-blue-600 active:border-blue-600 active:border-2 active:shadow-lg hover:z-10 hover:scale-105 active:scale-105 transition p-6"
            data-aos="fade-up" // Apply fade-up animation for each feature
            data-aos-delay={index * 100} // Add delay for each feature to stagger the animation
          >
            <h3 className="text-blue-600 font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
