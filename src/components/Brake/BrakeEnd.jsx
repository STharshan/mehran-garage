import React from 'react';

export default function BrakeEnd() {
  return (
    <section className="px-4 py-10 bg-gray-50">
      {/* Brake Service Process */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Brake Service Process
        </h2>
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            {
              number: "1",
              color: "bg-blue-600",
              title: "Inspection",
              text: "Comprehensive brake system inspection and measurement",
              titleColor: "text-blue-600",
            },
            {
              number: "2",
              color: "bg-blue-500",
              title: "Diagnosis",
              text: "Identify worn components and system issues",
              titleColor: "text-blue-500",
            },
            {
              number: "3",
              color: "bg-blue-600",
              title: "Repair",
              text: "Professional repair using quality parts",
              titleColor: "text-blue-600",
            },
            {
              number: "4",
              color: "bg-blue-500",
              title: "Testing",
              text: "Road test and brake performance verification",
              titleColor: "text-blue-500",
            },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-2 bg-white rounded-xl shadow-md p-6 md:p-10   hover:scale-105 active:scale-105 
                     hover:shadow-[0_0_25px_5px_rgba(0,123,255,0.4)] duration-300 mb-10">
              <div className={`w-10 h-10 rounded-full text-white font-semibold flex items-center justify-center ${step.color}`}>
                {step.number}
              </div>
              <h3 className={`font-semibold ${step.titleColor}`}>{step.title}</h3>
              <p className="text-sm text-gray-700">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Brake Maintenance Tips */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Brake Maintenance Tips
        </h2>
      <div className="max-w-5xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm md:text-base ">
          {/* Regular Checks */}
          <div className='rounded-xl shadow-md p-6 bg-gradient-to-r from-blue-100 to-blue-100   hover:scale-105 active:scale-105 
                     hover:shadow-[0_0_25px_5px_rgba(0,123,255,0.4)] duration-300'>
            <h3 className="text-blue-700 font-semibold mb-3 text-center">Regular Checks</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Check brake fluid level monthly</li>
              <li>Listen for unusual brake noises</li>
              <li>Feel for brake pedal changes</li>
              <li>Annual brake system inspection</li>
            </ul>
          </div>

          {/* Driving Tips */}
          <div className='rounded-xl shadow-md p-6 bg-gradient-to-r from-blue-100 to-blue-100   hover:scale-105 active:scale-105'>
            <h3 className="text-blue-600 font-semibold mb-3 text-center">Driving Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Avoid harsh braking when possible</li>
              <li>Allow brakes to cool on long descents</li>
              <li>Don't ride the brake pedal</li>
              <li>Service brakes every 12 months</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};