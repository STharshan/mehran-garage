import React from "react";
import { CheckCircle, AlertTriangle, CircleDashed, Settings2, Wrench } from "lucide-react";

const ClutchServices = () => {
  return (
    <section className="px-4 py-10 bg-gray-50">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
        Our Services
      </h2>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          { label: "Engine Diagnostics", color: "bg-blue-100 text-blue-600" },
          { label: "Brake Repair", color: "bg-blue-100 text-blue-600" },
          { label: "Oil Change", color: "bg-blue-100 text-blue-600" },
          { label: "Air Conditioning", color: "bg-blue-100 text-blue-600" },
          { label: "MOT Testing", color: "bg-blue-100 text-blue-600" },
        ].map((tag, idx) => (
          <span
            key={idx}
            className={`px-4 py-1 text-sm font-medium rounded-full ${tag.color}`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Clutch Replacement */}
        <div
          className="bg-white rounded-xl p-6 shadow-sm
                     transform transition-all duration-300 ease-in-out
                     hover:scale-105 active:scale-105
                     hover:shadow-[0_0_25px_5px_rgba(0,123,255,0.4)]"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-800 to-gray-900 rounded-full">
              <CircleDashed className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-semibold text-lg text-gray-800">
            Clutch Replacement
          </h3>
          <p className="text-center text-sm text-gray-500 mb-4">
            Complete clutch kit replacement service
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Clutch disc replacement",
              "Pressure plate replacement",
              "Release bearing service",
              "Flywheel inspection/replacement",
              "Clutch hydraulics service",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Clutch Diagnostics */}
        <div
          className="bg-white rounded-xl p-6 shadow-sm
                     transform transition-all duration-300 ease-in-out
                     hover:scale-105 active:scale-105
                     hover:shadow-[0_0_25px_5px_rgba(0,123,255,0.4)]"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-800 to-gray-900 rounded-full">
              <Settings2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-semibold text-lg text-gray-800">
            Clutch Diagnostics
          </h3>
          <p className="text-center text-sm text-gray-500 mb-4">
            Professional clutch system fault finding
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Clutch slip testing",
              "Hydraulic system testing",
              "Clutch pedal adjustment",
              "Release mechanism inspection",
              "Flywheel condition assessment",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hydraulic Systems */}
        <div
          className="bg-white rounded-xl p-6 shadow-sm
                     transform transition-all duration-300 ease-in-out
                     hover:scale-105 active:scale-105
                     hover:shadow-[0_0_25px_5px_rgba(0,123,255,0.4)]"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-800 to-gray-900 rounded-full">
              <Wrench className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-semibold text-lg text-gray-800">
            Hydraulic Systems
          </h3>
          <p className="text-center text-sm text-gray-500 mb-4">
            Clutch hydraulic system repair and service
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Master cylinder replacement",
              "Slave cylinder service",
              "Hydraulic fluid replacement",
              "System bleeding",
              "Leak detection and repair",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Clutch Problem Signs */}
      <div
        className="max-w-7xl mx-auto bg-blue-50 rounded-xl p-6 md:p-8 shadow-sm
                   transform transition-all duration-300 ease-in-out
                   hover:scale-105 active:scale-105
                   hover:shadow-[0_0_25px_5px_rgba(0,123,255,0.4)]"
      >
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-blue-700">
            Clutch Problem Signs
          </h3>
        </div>
        <p className="text-sm text-gray-700 mb-6">
          Don’t ignore these warning signs – clutch problems can lead to expensive transmission damage:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-900">
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
              <AlertTriangle className="w-4 h-4 mt-0.5 text-blue-500" />
              <span>{sign}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClutchServices;
