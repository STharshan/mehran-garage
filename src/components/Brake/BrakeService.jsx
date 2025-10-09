import React from "react";
import {
  CheckCircle,
  AlertTriangle,
  SquareCode,
  Wrench,
  Shield,
} from "lucide-react";

const BrakeServices = () => {
  const tags = [
    "Engine Diagnostics",
    "Brake Repair",
    "Oil Change",
    "Air Conditioning",
    "MOT Testing",
  ];

  const brakeWarnings = [
    "Squealing or grinding noises when braking",
    "Vehicle pulls to one side when braking",
    "Vibration through brake pedal or steering wheel",
    "Brake pedal feels spongy or soft",
    "Brake warning light on dashboard",
    "Longer stopping distances than normal",
  ];

  const services = [
    {
      title: "Brake Pads & Discs",
      icon: <SquareCode className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      description: "Professional brake pad and disc replacement",
      items: [
        "Brake pad replacement",
        "Brake disc replacement",
        "Brake disc skimming",
        "Performance brake upgrades",
        "Brake pad wear sensors",
      ],
    },
    {
      title: "Brake System Service",
      icon: <Wrench className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      description: "Complete brake system maintenance and repair",
      items: [
        "Brake fluid replacement",
        "Brake system bleeding",
        "Brake line inspection",
        "Master cylinder service",
        "Brake servo testing",
      ],
    },
    {
      title: "ABS & Electronic Systems",
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      description: "Advanced brake system diagnostics and repair",
      items: [
        "ABS system diagnostics",
        "ESP/ESC system repair",
        "Brake assist systems",
        "Electronic parking brake",
        "Brake sensor replacement",
      ],
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-14 sm:py-16 bg-gray-50">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-10">
        Our Services
      </h2>

      {/* Category Tags */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 sm:px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm sm:text-base"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 sm:p-10 shadow-md transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.4)] active:scale-95"
          >
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center">
                {service.icon}
              </div>
            </div>
            <h3 className="text-center font-bold text-xl sm:text-2xl text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-center text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Brake Warning Signs */}
      <div className="max-w-7xl mx-auto mt-14 p-6 sm:p-8 border border-blue-200 bg-blue-50 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
          <h3 className="text-lg sm:text-xl font-bold text-blue-700">
            Brake Warning Signs
          </h3>
        </div>
        <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
          Don’t ignore these warning signs – your safety depends on properly
          functioning brakes:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-blue-700">
          {brakeWarnings.map((warning, i) => (
            <div key={i} className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 text-blue-500 flex-shrink-0" />
              <span>{warning}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrakeServices;
