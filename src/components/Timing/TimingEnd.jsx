import React from 'react';

export default function TimingEnd() {

  const whyChooseData = [
  {
    title: "Specialist Knowledge",
    description:
      "Our technicians are trained in all timing system types including the latest wet belt technology",
  },
  {
    title: "Quality Parts",
    description:
      "We use OEM or equivalent quality timing components with comprehensive warranties",
  },
  {
    title: "Precision Service",
    description:
      "Accurate timing setup using specialized tools to ensure perfect engine synchronization",
  },
];

  return (
    <section className="bg-gray-50 py-10 px-4">
      {/* Service Intervals */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]
            active:scale-95 active:shadow-[0_0_30px_6px_rgba(59,130,246,0.9)] duration-300">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
          Service Intervals
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Regular timing system maintenance is crucial to prevent expensive engine damage
        </p>

        {/* Intervals Table */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center bg-gray-100 rounded px-4 py-3">
            <span className="font-semibold text-gray-800">Timing Belt (Petrol)</span>
            <span className="text-blue-600 font-medium">60,000 - 100,000 miles or 4–6 years</span>
          </div>
          <div className="flex justify-between items-center bg-gray-100 rounded px-4 py-3">
            <span className="font-semibold text-gray-800">Timing Belt (Diesel)</span>
            <span className="text-blue-600 font-medium">80,000 - 120,000 miles or 5–7 years</span>
          </div>
          <div className="flex justify-between items-center bg-gray-100 rounded px-4 py-3">
            <span className="font-semibold text-gray-800">Wet Belt (Ford EcoBoost)</span>
            <span className="text-blue-600 font-medium">100,000 miles or 10 years</span>
          </div>
          <div className="flex justify-between items-center bg-gray-100 rounded px-4 py-3">
            <span className="font-semibold text-gray-800">Timing Chain</span>
            <span className="text-blue-600 font-medium">100,000 - 200,000 miles (condition dependent)</span>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <h2 className="text-xl md:text-2xl font-bold text-center mt-10 text-gray-800 mb-6">
        Why Choose Mehran’s Garage?
      </h2>

      <div className="max-w-7xl mx-auto mt-10">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm 
                     "
        >
          {whyChooseData.map((item, idx) => (
            <div key={idx} className='hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]
                     active:scale-95 active:shadow-[0_0_30px_6px_rgba(59,130,246,0.9)] 
                     rounded-lg shadow-lg p-6 bg-white duration-300'>
              <h3 className="font-semibold text-blue-600 mb-1">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
