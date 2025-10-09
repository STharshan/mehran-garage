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
    <section className="bg-gray-50 px-4 sm:px-6 md:px-10 py-16 md:py-20">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-10 sm:mb-14">
        Our Services
      </h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
        {[
          "Engine Diagnostics",
          "Brake Repair",
          "Oil Change",
          "Air Conditioning",
          "MOT Testing",
        ].map((tag, index) => (
          <span
            key={index}
            className="px-4 sm:px-5 py-2 text-sm sm:text-base font-medium rounded-full bg-blue-100 text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Main Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
        {/* Timing Belts */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
              <FaClock className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="mt-4 font-bold text-xl sm:text-2xl text-gray-800">
              Timing Belts
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Traditional rubber timing belt replacement service
            </p>
          </div>
          <ul className="mt-6 space-y-3 text-sm sm:text-base text-gray-700">
            {[
              "Timing belt replacement",
              "Tensioner and idler pulley service",
              "Water pump replacement",
              "Timing belt inspection",
              "Engine timing verification",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FiCheckCircle className="mt-1 mr-2 text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Wet Belts */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
              <FaTools className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="mt-4 font-bold text-xl sm:text-2xl text-gray-800">
              Wet Belts
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Oil bathed timing belt systems (Ford EcoBoost, etc.)
            </p>
          </div>
          <ul className="mt-6 space-y-3 text-sm sm:text-base text-gray-700">
            {[
              "Wet belt replacement",
              "Oil pump drive belt service",
              "Engine oil and filter change",
              "Timing system cleaning",
              "Wet belt system diagnostics",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FiCheckCircle className="mt-1 mr-2 text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Timing Chains */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
              <FaCogs className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="mt-4 font-bold text-xl sm:text-2xl text-gray-800">
              Timing Chains
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Metal timing chain systems and components
            </p>
          </div>
          <ul className="mt-6 space-y-3 text-sm sm:text-base text-gray-700">
            {[
              "Timing chain replacement",
              "Chain tensioner service",
              "Chain guide replacement",
              "VVT system service",
              "Timing chain stretch measurement",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FiCheckCircle className="mt-1 mr-2 text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Warning Box */}
      <div className="mt-14 max-w-7xl mx-auto bg-blue-50 border border-blue-200 rounded-2xl p-8 sm:p-10 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.3)]">
        <h4 className="text-blue-700 font-bold flex items-center text-lg sm:text-xl mb-4">
          <FaExclamationTriangle className="mr-2 w-5 h-5 sm:w-6 sm:h-6" /> Critical
          Warning Signs
        </h4>
        <p className="text-sm sm:text-base font-medium text-blue-700 mb-6">
          IMPORTANT:{" "}
          <span className="font-normal text-gray-700">
            Timing system failure can cause catastrophic engine damage. Watch
            for these warning signs:
          </span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-blue-900">
          <ul className="space-y-3">
            {[
              "Rattling noise from engine on startup",
              "Metal particles in engine oil",
              "Reduced engine performance",
              "Engine won’t start after timing service",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FaExclamationTriangle className="mr-2 mt-1 text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {[
              "Engine misfiring or running rough",
              "Engine timing error codes",
              "Unusual engine noise at idle",
              "Visible timing belt wear or cracking",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FaExclamationTriangle className="mr-2 mt-1 text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
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
