import React from "react";

const suspensionComponents = [
  {
    title: "Front Suspension",
    color: "text-blue-700",
    items: [
      "MacPherson struts or shock absorbers",
      "Coil springs or leaf springs",
      "Control arms and ball joints",
      "Anti-roll bar and drop links",
      "Suspension mounting points",
      "Steering rack and tie rods",
    ],
  },
  {
    title: "Rear Suspension",
    color: "text-blue-600",
    items: [
      "Rear shock absorbers or struts",
      "Coil springs or leaf springs",
      "Trailing arms and bushes",
      "Rear anti-roll bar",
      "Panhard rod (if fitted)",
      "Rear axle components",
    ],
  },
];

const suspensionMaintenance = [
  {
    title: "Regular Inspection",
    color: "text-blue-700",
    description:
      "Annual suspension inspection to identify worn components before they cause handling problems",
  },
  {
    title: "Quality Parts",
    color: "text-blue-600",
    description:
      "We use OEM or equivalent quality suspension components for reliable, long-lasting repairs",
  },
  {
    title: "Professional Service",
    color: "text-blue-700",
    description:
      "Expert technicians with specialized tools ensure proper suspension component installation",
  },
];

export default function SuspensionEnd() {
  return (
    <section className="px-4 py-10 bg-gray-50">
      {/* Suspension System Components */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10 mb-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Suspension System Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm md:text-base">
          {suspensionComponents.map((section, idx) => (
            <div key={idx}>
              <h3 className={`${section.color} font-semibold mb-3`}>
                {section.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Suspension Maintenance */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
          Suspension Maintenance
        </h2>
      <div className="max-w-7xl mx-auto  text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
          {suspensionMaintenance.map((item, idx) => (
            <div key={idx} className="bg-blue-100 rounded-xl p-6 md:p-10   hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)]
            active:scale-95 active:shadow-[0_0_30px_6px_rgba(59,130,246,0.9)] duration-300 transform transform-all">
              <h3 className={`${item.color} font-semibold mb-2`}>
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
