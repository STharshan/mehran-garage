import React from 'react';
import { CheckCircle, Snowflake, Wind } from 'lucide-react'; // better suited icons

const services = [
  {
    title: "Standard Air Con Re-Gas",
    subtitle: "For vehicles manufactured before 2017 using R134a gas",
    icon: Snowflake, // ❄️ Cooling icon
    features: [
      "Refrigerant refill & top-up",
      "Pressure & temperature checks",
      "Leak detection with UV dye",
      "Compressor functionality test",
      "Condenser & evaporator inspection",
      "Cabin air filter condition check",
      "System lubrication with PAG oil",
      "Vent temperature performance test",
    ],
  },
  {
    title: "New Generation Air Con Re-Gas",
    subtitle: "For vehicles manufactured after 2017 using R1234yf gas",
    icon: Wind, // 🌬️ Fresh air flow icon
    features: [
      "Advanced refrigerant refill & calibration",
      "Full system pressure & leak testing",
      "Environmentally friendly low-emission refrigerant",
      "Electronic control & sensor diagnostics",
      "Evaporator & condenser performance check",
      "Cabin air quality assessment",
      "Compressor operation & clutch engagement test",
      "Final cooling efficiency verification",
    ],
  },
];

export default function AirConditionServices() {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-rose-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Our Services
        </h2>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {["Re-Gas", "Cooling", "Leak Detection", "Compressor", "Fresh Air"].map(
            (tag, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-base"
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-10 text-left shadow-md 
                           transform transition-all duration-300 ease-in-out 
                           hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-600 text-center">
                    {service.subtitle}
                  </p>
                </div>
                <ul className="space-y-3">
                  {service.features.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-base text-gray-700"
                    >
                      <CheckCircle className="text-blue-500 w-5 h-5 mr-2 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
