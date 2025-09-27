import React, { useState } from "react";
import { ShieldCheck, Wrench, Users } from "lucide-react";

export default function VehicleWhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const features = [
    {
      title: "Trusted & Reliable",
      description: "Years of proven experience and hundreds of satisfied customers.",
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Expert Technicians",
      description: "Certified mechanics delivering precise and high-quality service.",
      icon: <Wrench className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Customer-Centric",
      description: "We care about your satisfaction and aim to exceed expectations.",
      icon: <Users className="w-10 h-10 text-blue-600" />,
    },
  ];

  // ✅ toggle activeIndex when clicking
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-12 text-black">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`bg-white rounded-xl p-8 shadow-md transition-all duration-300 ease-in-out 
              flex flex-col items-center text-center cursor-pointer
              ${
                activeIndex === index
                  ? "scale-105 shadow-[0_0_25px_5px_rgba(59,130,246,0.9)]" // 👈 Mobile tap (active)
                  : "hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]" // 👈 Desktop hover
              }`}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg text-black font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
