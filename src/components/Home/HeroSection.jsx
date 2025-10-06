// src/components/HeroSection.jsx
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const HeroSection = () => {
  const homeRef = useRef(null); // Create a reference to the Home section

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-out-cubic", // Easing type
      once: true, // Animate only once
    });

    // Scroll to #home if hash is present
    if (window.location.hash === "#home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className="relative w-full h-[100vh] bg-black dark:bg-gray-900"
      id="home"
      ref={homeRef}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>

      {/* Text & Buttons */}
      <div className="relative z-10 flex items-center justify-center text-center text-white px-4 md:px-8 h-full">
        <div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4"
            data-aos="fade-up"
          >
            Expert Automotive Care
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 max-w-4xl mx-auto text-gray-200 dark:text-gray-300"
            data-aos="fade-up"
          >
            Professional vehicle servicing, MOT testing, and repairs with
            state-of-the-art testing equipment and dealer-level diagnostic
            capabilities.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
          >
            <a
              href="tel:07846953888"
              className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 px-5 sm:py-2 sm:px-4 rounded-md text-base sm:text-lg md:text-xl font-semibold transition-transform hover:-translate-y-0.5 active:scale-95 leading-snug"
            >
              Call +44 7846 953 888 Today
            </a>

            <a
              href="https://wa.me/447850953737"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-5 sm:py-2 sm:px-4 rounded-md text-base sm:text-lg md:text-xl font-semibold transition-transform hover:-translate-y-0.5 active:scale-95 leading-snug"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
