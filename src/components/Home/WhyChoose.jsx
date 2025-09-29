import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const features = [
  {
    title: "Decades of Experience",
    description:
      "With years of industry expertise, we bring unmatched knowledge and hands-on skill to every service we provide.",
  },
  {
    title: "Family-Owned Values",
    description:
      "We treat our customers like family — with honesty, respect, and genuine care in every interaction.",
  },
  {
    title: "Best-in-Class Equipment",
    description:
      "We use the latest tools and technologies to ensure precise, efficient, and high-quality service every time.",
  },
  {
    title: "Customer-Centered Service",
    description:
      "Every person matters to us. We listen, understand, and go above and beyond to meet your needs.",
  },
  {
    title: "Transparent & Trustworthy",
    description:
      "No hidden fees, no surprises. Just honest advice, fair pricing, and dependable service.",
  },
  {
    title: "Proven Customer Satisfaction",
    description:
      "Our loyal customers and glowing reviews are a testament to the quality and consistency we deliver.",
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-4xl font-extrabold text-blue-600 text-center mb-12"
        data-aos="fade-up"
      >
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-md min-h-[250px] md:min-h-[280px]
                       transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.5)]
                       active:scale-95 active:shadow-[0_0_30px_6px_rgba(59,130,246,0.7)]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-blue-700 font-bold text-2xl mb-4 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
