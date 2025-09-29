import React from "react";
import {
  CheckCircle,
  AlertTriangle,
  SquareCode,
  Wrench,
  Shield,
} from "lucide-react";

const BrakeServices = () => {
  return (
    <section className="px-6 py-16 bg-gray-50">
      {/* Heading */}
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-10">
        Our Services
      </h2>

      {/* Category Tags */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {[
          "Engine Diagnostics",
          "Brake Repair",
          "Oil Change",
          "Air Conditioning",
          "MOT Testing",
        ].map((tag, index) => (
          <span
            key={index}
            className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-base"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Services Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div
          className="bg-white rounded-xl p-10 
                     shadow-md transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <SquareCode className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-2xl text-gray-800 mb-2">
            Brake Pads & Discs
          </h3>
          <p className="text-center text-base text-gray-600 mb-6">
            Professional brake pad and disc replacement
          </p>
          <ul className="space-y-3 text-base text-gray-700">
            {[
              "Brake pad replacement",
              "Brake disc replacement",
              "Brake disc skimming",
              "Performance brake upgrades",
              "Brake pad wear sensors",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-blue-500 w-5 h-5 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white rounded-xl p-10 
                     shadow-md transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Wrench className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-2xl text-gray-800 mb-2">
            Brake System Service
          </h3>
          <p className="text-center text-base text-gray-600 mb-6">
            Complete brake system maintenance and repair
          </p>
          <ul className="space-y-3 text-base text-gray-700">
            {[
              "Brake fluid replacement",
              "Brake system bleeding",
              "Brake line inspection",
              "Master cylinder service",
              "Brake servo testing",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-blue-500 w-5 h-5 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white rounded-xl p-10 
                     shadow-md transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-2xl text-gray-800 mb-2">
            ABS & Electronic Systems
          </h3>
          <p className="text-center text-base text-gray-600 mb-6">
            Advanced brake system diagnostics and repair
          </p>
          <ul className="space-y-3 text-base text-gray-700">
            {[
              "ABS system diagnostics",
              "ESP/ESC system repair",
              "Brake assist systems",
              "Electronic parking brake",
              "Brake sensor replacement",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-blue-500 w-5 h-5 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Brake Warning Signs */}
      <div className="max-w-7xl mx-auto mt-14 p-8 border border-blue-200 bg-blue-50 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-blue-600 w-6 h-6" />
          <h3 className="text-xl font-bold text-blue-700">
            Brake Warning Signs
          </h3>
        </div>
        <p className="text-base text-gray-700 mb-6">
          Don’t ignore these warning signs – your safety depends on properly
          functioning brakes:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-blue-700">
          {[
            "Squealing or grinding noises when braking",
            "Vehicle pulls to one side when braking",
            "Vibration through brake pedal or steering wheel",
            "Brake pedal feels spongy or soft",
            "Brake warning light on dashboard",
            "Longer stopping distances than normal",
          ].map((warning, i) => (
            <div key={i} className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 mt-0.5 text-blue-500" />
              <span>{warning}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrakeServices;
