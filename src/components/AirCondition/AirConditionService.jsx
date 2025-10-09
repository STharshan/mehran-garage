import React from "react";
import { CheckCircle, Snowflake, Wind } from "lucide-react";

const services = [
  {
    title: "Standard Air Con Re-Gas",
    subtitle: "For vehicles manufactured before 2017 using R134a gas",
    icon: Snowflake,
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
    icon: Wind,
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
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-10 sm:mb-14">
          Our Services
        </h2>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
          {["Re-Gas", "Cooling", "Leak Detection", "Compressor", "Fresh Air"].map(
            (tag, i) => (
              <span
                key={i}
                className="px-4 sm:px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm sm:text-base"
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-blue-50 rounded-xl p-6 sm:p-8 lg:p-10 text-left shadow-md 
                           transform transition-all duration-300 ease-in-out 
                           hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
              >
                <div className="flex flex-col items-center mb-5 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-blue-600 flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center max-w-xs sm:max-w-sm">
                    {service.subtitle}
                  </p>
                </div>

                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm sm:text-base text-gray-700"
                    >
                      <CheckCircle className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 flex-shrink-0" />
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
