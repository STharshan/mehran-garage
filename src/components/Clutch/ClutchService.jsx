import React from "react";
import { CheckCircle, AlertTriangle, CircleDashed, Settings2, Wrench } from "lucide-react";

const ClutchServices = () => {
  return (
    <section className="px-6 py-16 bg-gray-50">
      {/* Title */}
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-10">
        Our Services
      </h2>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {[
          "Engine Diagnostics",
          "Brake Repair",
          "Oil Change",
          "Air Conditioning",
          "MOT Testing",
        ].map((tag, idx) => (
          <span
            key={idx}
            className="px-5 py-2 text-base font-medium rounded-full bg-blue-100 text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
        {/* Clutch Replacement */}
        <div
          className="bg-white rounded-xl p-10 shadow-md
                     transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <CircleDashed className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-2xl text-gray-800 mb-2">
            Clutch Replacement
          </h3>
          <p className="text-center text-base text-gray-600 mb-6">
            Complete clutch kit replacement service
          </p>
          <ul className="space-y-3 text-base text-gray-700">
            {[
              "Clutch disc replacement",
              "Pressure plate replacement",
              "Release bearing service",
              "Flywheel inspection/replacement",
              "Clutch hydraulics service",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Clutch Diagnostics */}
        <div
          className="bg-white rounded-xl p-10 shadow-md
                     transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Settings2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-2xl text-gray-800 mb-2">
            Clutch Diagnostics
          </h3>
          <p className="text-center text-base text-gray-600 mb-6">
            Professional clutch system fault finding
          </p>
          <ul className="space-y-3 text-base text-gray-700">
            {[
              "Clutch slip testing",
              "Hydraulic system testing",
              "Clutch pedal adjustment",
              "Release mechanism inspection",
              "Flywheel condition assessment",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hydraulic Systems */}
        <div
          className="bg-white rounded-xl p-10 shadow-md
                     transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Wrench className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-2xl text-gray-800 mb-2">
            Hydraulic Systems
          </h3>
          <p className="text-center text-base text-gray-600 mb-6">
            Clutch hydraulic system repair and service
          </p>
          <ul className="space-y-3 text-base text-gray-700">
            {[
              "Master cylinder replacement",
              "Slave cylinder service",
              "Hydraulic fluid replacement",
              "System bleeding",
              "Leak detection and repair",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Clutch Problem Signs */}
      <div
        className="max-w-7xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-10 shadow-md
                   transform transition-all duration-300 ease-in-out
                   hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
      >
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-blue-700">
            Clutch Problem Signs
          </h3>
        </div>
        <p className="text-base text-gray-700 mb-6">
          Don’t ignore these warning signs – clutch problems can lead to expensive transmission damage:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-blue-900">
          {[
            "Clutch pedal feels heavy or light",
            "Clutch slipping under acceleration",
            "Clutch pedal sticks to floor",
            "Juddering when moving off",
            "Difficulty engaging gears",
            "Burning smell from clutch",
            "Grinding noise when changing gear",
            "High clutch biting point",
          ].map((sign, i) => (
            <div key={i} className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 mt-0.5 text-blue-500" />
              <span>{sign}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClutchServices;
