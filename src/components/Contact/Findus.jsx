import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const FindUs = () => {
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
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-blue-600" data-aos="fade-up">
          Find Us
        </h2>

        <div
          className="rounded-lg overflow-hidden shadow-sm w-full h-[400px]  
                     hover:shadow-[0_0_25px_5px_rgba(0,123,255,0.4)] active:shadow-[0_0_25px_5px_rgba(0,123,255,0.4)]"
          data-aos="fade-up" // AOS animation for the iframe container
        >
          <iframe
            title="Google Map - Unit 7, Elliot Business Park, Chambers Ln, Sheffield S4 8DA, United Kingdom"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150.1371044959562!2d-1.1803480716965562!3d52.98091824769079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c1c14abfe1f5%3A0xdc63a0cefb0a48be!2sMehrans%20Garage%20MOT%20Centre!5e0!3m2!1sen!2slk!4v1760076369309!5m2!1sen!2slk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
