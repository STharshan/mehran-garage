import React from 'react';

export default function MotAbout() {
  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: "#D7E7FE" }} // Applied your uploaded bg color
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          About Mehran’s Garage
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Mehran’s Garage is your go-to automotive service provider in the UK.
          From diagnostics to full-scale repairs, we offer unmatched service
          quality using modern tools and technologies. Our goal is to keep your
          vehicle safe, smooth, and road-ready at all times.
        </p>
      </div>
    </section>
  );
}
