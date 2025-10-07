import React from "react";
import { CheckCircle, Wrench, Settings } from "lucide-react";
import { FaCar } from "react-icons/fa";

export default function VehicleServices() {
  const services = [
    {
      title: "Interim Service",
      icon: <Settings className="w-8 h-8 text-white" />,
      bgColor: "bg-blue-600",
      textColor: "text-blue-700",
      description: "Essential 6-month service to keep your vehicle running smoothly",
      duration: "6 months / 6,000 miles",
      items: [
        "Engine oil",
        "Oil Filter",
      ],
    },
    {
      title: "Full Service",
      icon: <Wrench className="w-8 h-8 text-white" />,
      bgColor: "bg-blue-600",
      textColor: "text-blue-700",
      description: "Comprehensive annual service covering full services",
      duration: "12 months / 12,000 miles",
      items: [
        "Engine oil",
        "Oil Filter",
        "Air Filter"
      ],
    },
    {
      title: "Major Service",
      icon: <FaCar className="w-8 h-8 text-white" />,
      bgColor: "bg-blue-600",
      textColor: "text-blue-700",
      description: "Comprehensive two-year service covering all major systems.",
      duration: "24 months / 24,000 miles",
      items: [
        "Engine oil",
        "Oil Filter",
        "Air Filter",
        "Cabin Filter",
        "Brake Fluid"
      ],
    },
    
  ];

  const tags = [
    "Engine Diagnostics",
    "Brake Repair",
    "Oil Change",
    "Air Conditioning",
    "MOT Testing",
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-black mb-10">Our Services</h2>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-base"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-10 text-left shadow-md 
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]
              active:scale-95 active:shadow-[0_0_30px_6px_rgba(59,130,246,0.9)]"
            >
              <div className="flex flex-col items-center mb-6">
                <div className={`w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center mb-3`}>
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold ${service.textColor}`}>{service.title}</h3>
                <p className="text-base text-gray-700 text-center mt-2">{service.description}</p>
                <p className={`text-base ${service.textColor} mt-1`}>Duration: {service.duration}</p>
              </div>

              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start text-base text-gray-800">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
