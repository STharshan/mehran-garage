import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const FindUs = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Trigger animation once when it enters the viewport
    });
  }, []);

  return (
    <section className="py-10 px-4 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-blue-600" data-aos="fade-up">
          Find Us
        </h2>

        <div
          className="rounded-lg overflow-hidden shadow-lg w-full h-[400px]"
          data-aos="fade-up" // AOS animation for the iframe container
        >
          <iframe
            title="Google Map - Unit 7, Elliot Business Park, Chambers Ln, Sheffield S4 8DA, United Kingdom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.196634020184!2d-1.1827928232908018!3d52.98086497218548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c1c13361de47%3A0x7a2fb9a3a27088da!2s29%20Church%20St%2C%20Old%20Basford%2C%20Nottingham%20NG6%200GD%2C%20UK!5e0!3m2!1sen!2slk!4v1758185867159!5m2!1sen!2slk"
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
