import React from "react";
import {
  CheckCircle,
  AlertTriangle,
  Activity,
  Car,
  Wrench,
} from "lucide-react";

const SuspensionServices = () => {
  return (
    <section className="px-6 py-16 bg-gray-50">
      {/* Section Header */}
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
        ].map((label, idx) => (
          <span
            key={idx}
            className="px-5 py-2 text-base font-medium rounded-full bg-blue-100 text-blue-700"
          >
            {label}
          </span>
        ))}
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
        {/* Card 1: Shock Absorbers */}
        <div
          className="bg-white rounded-xl p-10 shadow-md 
                     transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Activity className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-2xl text-gray-800 mb-2">
            Shock Absorbers
          </h3>
          <p className="text-center text-base text-gray-600 mb-6">
            Professional shock absorber testing and replacement
          </p>
          <ul className="space-y-3 text-base text-gray-700">
            {[
              "Shock absorber replacement",
              "Strut replacement and repair",
              "Performance shock upgrades",
              "Shock absorber testing",
              "Gas and oil shock servicing",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-blue-500 w-5 h-5 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2: Springs & Coils */}
        <div
          className="bg-white rounded-xl p-10 shadow-md 
                     transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Car className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-2xl text-gray-800 mb-2">
            Springs & Coils
          </h3>
          <p className="text-center text-base text-gray-600 mb-6">
            Spring replacement and suspension height adjustment
          </p>
          <ul className="space-y-3 text-base text-gray-700">
            {[
              "Coil spring replacement",
              "Leaf spring repair",
              "Lowering spring installation",
              "Air spring replacement",
              "Spring compressor service",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-blue-500 w-5 h-5 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3: Suspension Components */}
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
            Suspension Components
          </h3>
          <p className="text-center text-base text-gray-600 mb-6">
            Complete suspension system component service
          </p>
          <ul className="space-y-3 text-base text-gray-700">
            {[
              "Ball joint replacement",
              "Control arm bushes",
              "Anti-roll bar links",
              "Suspension mounting points",
              "Steering rack bushes",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-blue-500 w-5 h-5 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Suspension Problem Signs */}
      <div className="max-w-7xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-blue-600 w-6 h-6" />
          <h3 className="text-xl font-bold text-blue-700">
            Suspension Problem Signs
          </h3>
        </div>
        <p className="text-base text-gray-700 mb-6">
          Watch out for these signs that your suspension system may need
          attention:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-blue-900">
          {[
            "Vehicle bounces excessively after hitting bumps",
            "Vehicle pulls to one side while driving",
            "Excessive body roll when cornering",
            "Vehicle sits lower on one side",
            "Uneven tyre wear patterns",
            "Nose dives when braking hard",
            "Clunking or knocking noises over bumps",
            "Steering feels loose or imprecise",
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

export default SuspensionServices;
