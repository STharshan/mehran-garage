import { CheckCircle } from "lucide-react";
import React from "react";
import { AiOutlineTool, AiOutlineSafety } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { MdBuild, MdBatteryChargingFull } from "react-icons/md";

const services = [
  {
    id: 1,
    title: "Comprehensive Diagnostics",
    description: "Advanced diagnostic tools to identify issues fast and accurately.",
    icon: <IoMdSettings className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 2,
    title: "Engine & Transmission Repairs",
    description: "Expert repairs and replacements to keep your vans running smoothly.",
    icon: <AiOutlineTool className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 3,
    title: "Brake, Suspension & Steering Work",
    description: "Ensuring safety and stability on the road.",
    icon: <AiOutlineSafety className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 4,
    title: "Electrical System Repairs",
    description: "From battery issues to complex wiring faults.",
    icon: <MdBatteryChargingFull className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 5,
    title: "Routine Maintenance",
    description: "Oil changes, fluid checks, filters, belts, and more to prevent costly breakdowns.",
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
  },
];

const WeWhy = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto text-black text-center">
        <h2 className="text-3xl font-semibold mb-7">What We Offer</h2>
        <p className="text-xl max-w-3xl mx-auto font-semibold mb-7">
          Comprehensive repair and maintenance services to keep your commercial fleet running at peak performance.
        </p>
      </div>
      <div className="container mx-auto text-center max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-start p-6 border rounded-lg shadow-md hover:shadow-xl hover:z-10 hover:scale-105 transition-all duration-300 relative"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">{service.icon}</div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-700 text-left">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeWhy;
