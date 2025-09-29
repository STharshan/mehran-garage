import React from "react";
import { CheckCircle, Wrench, Settings } from "lucide-react"; // icons for services

export default function VehicleServices() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-black mb-10">
          Our Services
        </h2>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {[
            "Engine Diagnostics",
            "Brake Repair",
            "Oil Change",
            "Air Conditioning",
            "MOT Testing",
          ].map((tag, i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-base"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Full Service */}
          <div
            className="rounded-xl bg-white p-10 text-left shadow-md 
            transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]
            active:scale-95 active:shadow-[0_0_30px_6px_rgba(59,130,246,0.9)]"
          >
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-3">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700">Full Service</h3>
              <p className="text-base text-gray-700 text-center mt-2">
                Comprehensive annual service covering all major systems
              </p>
              <p className="text-base text-blue-700 mt-1">Duration: 2-3 hours</p>
            </div>
            <ul className="space-y-3">
              {[
                "Engine oil and filter change",
                "Brake system inspection",
                "Suspension check",
                "Battery and charging system test",
                "Cooling system check",
                "Lights and electrical systems",
                "Tyre condition and pressure",
                "Windscreen wipers and washers",
              ].map((item, index) => (
                <li key={index} className="flex items-start text-base text-gray-800">
                  <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Interim Service */}
          <div
            className="rounded-xl bg-white p-10 text-left shadow-md 
            transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]
            active:scale-95 active:shadow-[0_0_30px_6px_rgba(59,130,246,0.9)]"
          >
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-3">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700">Interim Service</h3>
              <p className="text-base text-gray-700 text-center mt-2">
                Essential 6-month service to keep your vehicle running smoothly
              </p>
              <p className="text-base text-blue-700 mt-1">Duration: 1-2 hours</p>
            </div>
            <ul className="space-y-3">
              {[
                "Engine oil and filter change",
                "Fluid level checks",
                "Battery test",
                "Lights inspection",
                "Tyre pressure check",
                "Windscreen washers",
                "Basic safety checks",
              ].map((item, index) => (
                <li key={index} className="flex items-start text-base text-gray-800">
                  <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
