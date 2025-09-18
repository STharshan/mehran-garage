import React from "react";
import {
  CheckCircle,
  CircleDot,
  Radar,
  Settings,
} from "lucide-react";

export default function TyreServices() {

  return (
    <section className="px-4 py-10 bg-gray-50">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
        Our Services
      </h2>

      {/* Category Tags */}
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

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Card 1 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-800 to-gray-900 rounded-full">
              <CircleDot className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-semibold text-lg text-gray-800">
            Tyre Fitting
          </h3>
          <p className="text-center text-sm text-gray-500 mb-4">
            Professional tyre supply and fitting service
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Premium brand tyres",
              "Budget tyre options",
              "Run-flat tyre fitting",
              "Tyre pressure monitoring",
              "Wheel balancing",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-800 to-gray-900 rounded-full">
              <Radar className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-semibold text-lg text-gray-800">
            Wheel Alignment
          </h3>
          <p className="text-center text-sm text-gray-500 mb-4">
            High tech precision wheel alignment service
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "4-wheel laser alignment",
              "Toe, camber, and caster adjustment",
              "Thrust angle correction",
              "Steering wheel centering",
              "Alignment reports",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-800 to-gray-900 rounded-full">
              <Settings className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-semibold text-lg text-gray-800">
            Wheel Services
          </h3>
          <p className="text-center text-sm text-gray-500 mb-4">
            Complete wheel repair and maintenance
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Alloy wheel refurbishment",
              "Wheel rim repair",
              "Valve replacement",
              "Wheel cleaning service",
              "Custom wheel fitting",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* High-Tech Alignment Equipment Section */}
      <div className="max-w-7xl mx-auto bg-white border rounded-xl shadow-md p-6 md:p-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          High-Tech Alignment Equipment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm md:text-base">
          {/* Left: Technology */}
          <div>
            <h3 className="text-blue-700 font-semibold mb-3">Advanced Technology</h3>
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
            <h3 className="text-blue-600 font-semibold mb-3">Alignment Parameters</h3>
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
};

