import React from "react";
import {
  FaExclamationTriangle,
  FaClock,
  FaTools,
  FaCogs,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const TimingServices = () => {
  return (
    <section className="bg-gray-50 px-4 py-10">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        Our Services
      </h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          { label: "Engine Diagnostics", color: "bg-blue-100 text-blue-600" },
          { label: "Brake Repair", color: "bg-blue-100 text-blue-600" },
          { label: "Oil Change", color: "bg-blue-100 text-blue-600" },
          { label: "Air Conditioning", color: "bg-blue-100 text-blue-600" },
          { label: "MOT Testing", color: "bg-blue-100 text-blue-600" },
        ].map((tag, index) => (
          <span
            key={index}
            className={`px-4 py-1 text-sm font-medium rounded-full ${tag.color}`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {/* Main Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Timing Belts */}
        <div
          className="bg-white rounded-lg p-6 shadow-sm border border-transparent 
                     transform transition-all duration-300 ease-in-out 
                     hover:scale-105 active:scale-105 
                     hover:shadow-[0_0_25px_5px_rgba(0,123,255,0.35)]"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-gray-900 text-white rounded-full flex items-center justify-center text-lg">
              <FaClock />
            </div>
            <h3 className="mt-2 font-semibold">Timing Belts</h3>
            <p className="text-xs text-gray-500">
              Traditional rubber timing belt replacement service
            </p>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-blue-700">
            {[
              "Timing belt replacement",
              "Tensioner and idler pulley service",
              "Water pump replacement",
              "Timing belt inspection",
              "Engine timing verification",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FiCheckCircle className="mt-1 mr-2 text-blue-500" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Wet Belts */}
        <div
          className="bg-white rounded-lg p-6 shadow-sm border border-transparent 
                     transform transition-all duration-300 ease-in-out 
                     hover:scale-105 active:scale-105 
                     hover:shadow-[0_0_25px_5px_rgba(0,123,255,0.35)]"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-gray-900 text-white rounded-full flex items-center justify-center text-lg">
              <FaTools />
            </div>
            <h3 className="mt-2 font-semibold">Wet Belts</h3>
            <p className="text-xs text-gray-500">
              Oil bathed timing belt systems (Ford EcoBoost, etc.)
            </p>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-blue-700">
            {[
              "Wet belt replacement",
              "Oil pump drive belt service",
              "Engine oil and filter change",
              "Timing system cleaning",
              "Wet belt system diagnostics",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FiCheckCircle className="mt-1 mr-2 text-blue-500" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Timing Chains */}
        <div
          className="bg-white rounded-lg p-6 shadow-sm border border-transparent 
                     transform transition-all duration-300 ease-in-out 
                     hover:scale-105 active:scale-105 
                     hover:shadow-[0_0_25px_5px_rgba(0,123,255,0.35)]"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-gray-900 text-white rounded-full flex items-center justify-center text-lg">
              <FaCogs />
            </div>
            <h3 className="mt-2 font-semibold">Timing Chains</h3>
            <p className="text-xs text-gray-500">
              Metal timing chain systems and components
            </p>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-blue-700">
            {[
              "Timing chain replacement",
              "Chain tensioner service",
              "Chain guide replacement",
              "VVT system service",
              "Timing chain stretch measurement",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FiCheckCircle className="mt-1 mr-2 text-blue-600" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Warning Box */}
      <div
        className="mt-10 max-w-7xl mx-auto bg-blue-50 border border-blue-200 rounded-md p-6
                   transform transition-all duration-300 ease-in-out
                   hover:scale-105 active:scale-105
                   hover:shadow-[0_0_20px_4px_rgba(0,123,255,0.25)]"
      >
        <h4 className="text-blue-700 font-bold flex items-center text-lg mb-2">
          <FaExclamationTriangle className="mr-2" /> Critical Warning Signs
        </h4>
        <p className="text-sm font-semibold text-blue-700 mb-4">
          IMPORTANT:{" "}
          <span className="font-normal text-gray-700">
            Timing system failure can cause catastrophic engine damage. Watch
            for these warning signs:
          </span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-blue-600">
          <ul className="space-y-2">
            {[
              "Rattling noise from engine on startup",
              "Metal particles in engine oil",
              "Reduced engine performance",
              "Engine won’t start after timing service",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FaExclamationTriangle className="mr-2 mt-1 text-blue-500" />{" "}
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {[
              "Engine misfiring or running rough",
              "Engine timing error codes",
              "Unusual engine noise at idle",
              "Visible timing belt wear or cracking",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FaExclamationTriangle className="mr-2 mt-1 text-blue-500" />{" "}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TimingServices;
