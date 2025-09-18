import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full bg-black">
      {/* Background Video */}
      <video
        className="object-cover w-full h-full"
        autoPlay
        loop
        muted
        src="/video.mp4" // Replace with your video path
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      
      {/* Text and Button */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
            Expert Automotive Care
          </h1>
          <p className="text-xl sm:text-2xl mb-6">
            Professional vehicle servicing, MOT testing, and repairs with state-of-the-art testing equipment and dealer-level diagnostic capabilities
          </p>
          <a
            href="tel:+447846953888"
            className="bg-blue-600 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-700 transition"
          >
            Call +44 7846 953888 Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
