import React from "react";
import { CheckCircle, Phone } from "lucide-react";
import { AiOutlineTool, AiOutlineSafety } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";

const services = [
  {
    id: 1,
    title: "Scheduled Servicing & MOT",
    description:
      "Regular maintenance schedules and MOT testing to keep your fleet compliant and roadworthy.",
    icon: <IoMdSettings className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 2,
    title: "General Mechanical Repairs",
    description:
      "Expert repairs for brakes, suspension, engines, and all mechanical components.",
    icon: <AiOutlineTool className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 3,
    title: "Tyre Fitting & Alignment",
    description:
      "Professional tyre fitting and wheel alignment services for optimal performance and safety.",
    icon: <AiOutlineSafety className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 4,
    title: "Diagnostics & Electrical",
    description:
      "Advanced diagnostic equipment and electrical repair services for modern vehicle systems.",
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 5,
    title: "Breakdown Recovery",
    description:
      "24/7 emergency breakdown recovery and on-site repairs to minimize downtime.",
    icon: <Phone className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 6,
    title: "Collection & Delivery",
    description:
      "Convenient vehicle collection and delivery service with fleet tracking and reminders.",
    icon: <LuMapPin className="h-8 w-8 text-blue-600" />,
  },
];

const WhyWe = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto text-black text-center">
        <h2 className="text-3xl font-semibold mb-7">What We Offer</h2>
        <p className="text-xl max-w-3xl mx-auto font-semibold mb-7">
          Comprehensive fleet services designed to keep your vehicles on the
          road and your business moving forward.
        </p>
      </div>
      <div className="container mx-auto text-center max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-start p-6 rounded-xl bg-white shadow-sm 
                         transform transition-all duration-300 ease-in-out
                         hover:scale-105 active:scale-105
                         hover:shadow-[0_0_25px_5px_rgba(0,123,255,0.35)]"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">{service.icon}</div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-left">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 text-left">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWe;
