import React from "react";
import {
  CheckCircle,
  Car,
  Truck,
} from "lucide-react"; // Icons

const motData = [
  {
    title: "Class 4 MOT",
    description: "For cars, light vans and ambulances up to 3,000kg",
    items: [
      "Comprehensive safety inspection",
      "Emissions testing",
      "Brake performance testing",
      "Suspension and steering checks",
      "Lights and electrical systems",
      "Bodywork and structure inspection",
    ],
    icon: Car,
  },
  {
    title: "Class 7 MOT",
    description: "For goods vehicles between 3,000kg and 3,500kg",
    items: [
      "Commercial vehicle inspection",
      "Load capacity verification",
      "Enhanced brake testing",
      "Commercial lighting checks",
      "Tachograph inspection",
      "Commercial vehicle emissions",
    ],
    icon: Truck,
  },
];

const MOTCard = ({ title, description, items, icon: Icon }) => (
  <div
    className="rounded-xl bg-white p-10 text-left shadow-md 
    transition-all duration-300 ease-in-out
    hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]
    active:scale-95 active:shadow-[0_0_30px_6px_rgba(59,130,246,0.9)]"
  >
    <div className="flex flex-col items-center mb-6">
      <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-3">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-black">{title}</h3>
      <p className="text-base text-gray-700 text-center mt-2">{description}</p>
    </div>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start text-base text-black">
          <CheckCircle className="text-blue-500 w-5 h-5 mr-2 mt-0.5" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function MOTServices() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-black mb-10">
          Our Services
        </h2>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-base">
            TPMS Sensor Calibration
          </span>
          <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-base">
            Fault Finding And Programming
          </span>
        </div>

        {/* MOT Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {motData.map((mot, index) => (
            <MOTCard
              key={index}
              title={mot.title}
              description={mot.description}
              items={mot.items}
              icon={mot.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
