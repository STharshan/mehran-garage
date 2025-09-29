import React from "react";
import { CheckCircle, CircleDot, Radar, Settings } from "lucide-react";

export default function TyreServices() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      {/* Title */}
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
            className="px-5 py-2 text-base font-medium rounded-full bg-blue-100 text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
        {/* Card 1 */}
        <div
          className="bg-white rounded-xl p-10 shadow-md 
                     transform transition-all duration-300 ease-in-out 
                     hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <CircleDot className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-2xl text-gray-800 mb-2">
            Tyre Fitting
          </h3>
          <p className="text-center text-base text-gray-600 mb-6">
            Professional tyre supply and fitting service
          </p>
          <ul className="space-y-3 text-base text-gray-700">
            {[
              "Premium brand tyres",
              "Budget tyre options",
              "Run-flat tyre fitting",
              "Tyre pressure monitoring",
              "Wheel balancing",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white rounded-xl p-10 shadow-md 
                     transform transition-all duration-300 ease-in-out 
                     hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Radar className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-2xl text-gray-800 mb-2">
            Wheel Alignment
          </h3>
          <p className="text-center text-base text-gray-600 mb-6">
            High tech precision wheel alignment service
          </p>
          <ul className="space-y-3 text-base text-gray-700">
            {[
              "4-wheel laser alignment",
              "Toe, camber, and caster adjustment",
              "Thrust angle correction",
              "Steering wheel centering",
              "Alignment reports",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white rounded-xl p-10 shadow-md 
                     transform transition-all duration-300 ease-in-out 
                     hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Settings className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-2xl text-gray-800 mb-2">
            Wheel Services
          </h3>
          <p className="text-center text-base text-gray-600 mb-6">
            Complete wheel repair and maintenance
          </p>
          <ul className="space-y-3 text-base text-gray-700">
            {[
              "Alloy wheel refurbishment",
              "Wheel rim repair",
              "Valve replacement",
              "Wheel cleaning service",
              "Custom wheel fitting",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* High-Tech Alignment Equipment Section */}
      <div
        className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-10
                   transform transition-all duration-300 ease-in-out
                   hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)]"
      >
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
          High-Tech Alignment Equipment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base">
          {/* Left: Technology */}
          <div>
            <h3 className="text-blue-700 font-semibold mb-3">
              Advanced Technology
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>3D laser alignment system</li>
              <li>Computer-controlled measurements</li>
              <li>Real-time adjustment monitoring</li>
              <li>Precision angle calculations</li>
              <li>Digital reporting system</li>
              <li>Before and after comparisons</li>
            </ul>
          </div>

          {/* Right: Parameters */}
          <div>
            <h3 className="text-blue-700 font-semibold mb-3">
              Alignment Parameters
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Toe angle adjustment</li>
              <li>Camber angle correction</li>
              <li>Caster angle setting</li>
              <li>Thrust angle alignment</li>
              <li>Steering wheel positioning</li>
              <li>Manufacturer specifications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
