import React from "react";
import { CheckCircle, Cpu, Laptop2, Server, Zap } from "lucide-react";

const services = [
  {
    icon: <Cpu className="w-10 h-10 text-white" />,
    bg: "bg-gradient-to-tr from-indigo-500 to-pink-500",
    title: "Engine Diagnostics",
    subtitle: "Comprehensive engine fault finding and analysis",
    items: [
      "ECU fault code reading and clearing",
      "Live data monitoring",
      "Engine performance analysis",
      "Emission system diagnostics",
      "Fuel system testing",
    ],
  },
  {
    icon: <Laptop2 className="w-10 h-10 text-white" />,
    bg: "bg-gradient-to-tr from-pink-500 to-indigo-500",
    title: "ECU Programming",
    subtitle: "Software updates and ECU reprogramming services",
    items: [
      "ECU software updates",
      "Module programming",
      "Key programming",
      "Immobilizer programming",
      "Module coding and adaptation",
    ],
  },
  {
    icon: <Server className="w-10 h-10 text-white" />,
    bg: "bg-gradient-to-tr from-indigo-500 to-pink-500",
    title: "Dealer Level Access",
    subtitle: "Professional diagnostic tools with manufacturer access",
    items: [
      "OEM diagnostic software",
      "Technical service bulletins",
      "Wiring diagrams access",
      "Component testing procedures",
      "Factory reset procedures",
    ],
  },
  {
    icon: <Zap className="w-10 h-10 text-white" />,
    bg: "bg-gradient-to-tr from-pink-500 to-indigo-500",
    title: "Electrical Diagnostics",
    subtitle: "Advanced electrical system fault finding",
    items: [
      "Circuit testing and analysis",
      "Component functionality testing",
      "Wiring harness inspection",
      "Sensor calibration",
      "Network communication testing",
    ],
  },
];

const DiagnosticsServices = () => {
  return (
    <section className="px-4 py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-blue-100 rounded-xl shadow-sm p-6 flex flex-col gap-4 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center">
              <div className={`rounded-full p-3 ${service.bg}`}>
                {service.icon}
              </div>
            </div>
            <h3 className="text-center text-lg font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="text-sm text-center text-gray-500">
              {service.subtitle}
            </p>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiagnosticsServices;
