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
    <section className="px-4 py-10 bg-gray-50">
      {/* Section Header */}
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
        Our Services
      </h2>

      {/* Category Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          { label: "Engine Diagnostics", color: "bg-blue-100 text-blue-600" },
          { label: "Brake Repair", color: "bg-red-100 text-red-600" },
          { label: "Oil Change", color: "bg-green-100 text-green-600" },
          { label: "Air Conditioning", color: "bg-yellow-100 text-yellow-600" },
          { label: "MOT Testing", color: "bg-purple-100 text-purple-600" },
        ].map((tag, idx) => (
          <span
            key={idx}
            className={`px-4 py-1 text-sm font-medium rounded-full ${tag.color}`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Card 1: Shock Absorbers */}
        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-tr from-pink-500 to-red-500 rounded-full">
              <Activity className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-semibold text-lg text-gray-800">
            Shock Absorbers
          </h3>
          <p className="text-center text-sm text-gray-500 mb-4">
            Professional shock absorber testing and replacement
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Shock absorber replacement",
              "Strut replacement and repair",
              "Performance shock upgrades",
              "Shock absorber testing",
              "Gas and oil shock servicing",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-4 h-4 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2: Springs & Coils */}
        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-tr from-blue-500 to-pink-500 rounded-full">
              <Car className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-semibold text-lg text-gray-800">
            Springs & Coils
          </h3>
          <p className="text-center text-sm text-gray-500 mb-4">
            Spring replacement and suspension height adjustment
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Coil spring replacement",
              "Leaf spring repair",
              "Lowering spring installation",
              "Air spring replacement",
              "Spring compressor service",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-4 h-4 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3: Suspension Components */}
        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-tr from-purple-500 to-red-500 rounded-full">
              <Wrench className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-semibold text-lg text-gray-800">
            Suspension Components
          </h3>
          <p className="text-center text-sm text-gray-500 mb-4">
            Complete suspension system component service
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Ball joint replacement",
              "Control arm bushes",
              "Anti-roll bar links",
              "Suspension mounting points",
              "Steering rack bushes",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-4 h-4 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Suspension Problem Signs */}
      <div className="max-w-7xl mx-auto bg-yellow-50 border border-yellow-200 rounded-xl p-6 md:p-8">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="text-yellow-600 w-6 h-6" />
          <h3 className="text-lg font-semibold text-yellow-700">
            Suspension Problem Signs
          </h3>
        </div>
        <p className="text-sm text-gray-700 mb-6">
          Watch out for these signs that your suspension system may need attention:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-900">
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
              <AlertTriangle className="w-4 h-4 mt-0.5 text-yellow-500" />
              <span>{sign}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuspensionServices;
