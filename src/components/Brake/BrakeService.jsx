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
    <section className="px-4 py-10 bg-gray-50">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
        Our Services
      </h2>

      {/* Category Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          { text: "Engine Diagnostics", color: "bg-blue-100 text-blue-600" },
          { text: "Brake Repair", color: "bg-blue-100 text-blue-600" },
          { text: "Oil Change", color: "bg-blue-100 text-blue-600" },
          { text: "Air Conditioning", color: "bg-blue-100 text-blue-600" },
          { text: "MOT Testing", color: "bg-blue-100 text-blue-600" },
        ].map((tag, index) => (
          <span
            key={index}
            className={`px-4 py-1 rounded-full text-sm font-medium ${tag.color}`}
          >
            {tag.text}
          </span>
        ))}
      </div>

      {/* Services Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-800 to-gray-900 rounded-full">
              <SquareCode className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-semibold text-lg text-gray-800">
            Brake Pads & Discs
          </h3>
          <p className="text-center text-sm text-gray-500 mb-4">
            Professional brake pad and disc replacement
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Brake pad replacement",
              "Brake disc replacement",
              "Brake disc skimming",
              "Performance brake upgrades",
              "Brake pad wear sensors",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-blue-500 w-4 h-4 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-800 to-gray-900 rounded-full">
              <Wrench className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-semibold text-lg text-gray-800">
            Brake System Service
          </h3>
          <p className="text-center text-sm text-gray-500 mb-4">
            Complete brake system maintenance and repair
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Brake fluid replacement",
              "Brake system bleeding",
              "Brake line inspection",
              "Master cylinder service",
              "Brake servo testing",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-blue-500 w-4 h-4 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-800 to-gray-900 rounded-full">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-semibold text-lg text-gray-800">
            ABS & Electronic Systems
          </h3>
          <p className="text-center text-sm text-gray-500 mb-4">
            Advanced brake system diagnostics and repair
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "ABS system diagnostics",
              "ESP/ESC system repair",
              "Brake assist systems",
              "Electronic parking brake",
              "Brake sensor replacement",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-blue-500 w-4 h-4 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Brake Warning Signs */}
      <div className="max-w-7xl mx-auto mt-10 p-6 border border-blue-200 bg-blue-50 rounded-xl">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="text-blue-600 w-6 h-6" />
          <h3 className="text-lg font-semibold text-blue-700">
            Brake Warning Signs
          </h3>
        </div>
        <p className="text-sm text-gray-700 mb-6">
          Don’t ignore these warning signs - your safety depends on properly functioning brakes:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
          {[
            "Squealing or grinding noises when braking",
            "Vehicle pulls to one side when braking",
            "Vibration through brake pedal or steering wheel",
            "Brake pedal feels spongy or soft",
            "Brake warning light on dashboard",
            "Longer stopping distances than normal",
          ].map((warning, i) => (
            <div key={i} className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 text-blue-500" />
              <span>{warning}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrakeServices;
