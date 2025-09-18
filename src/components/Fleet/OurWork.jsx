import { Shield, Clock, Users, Award } from "lucide-react";

const programSteps = [
  {
    icon: 1 ,
    bg: "bg-blue-600",
    title: "Initial Fleet Assessment",
    description: "We review your vehicles' current condition and service history to understand your needs.",
  },
  {
    icon: 2,
    bg: "bg-blue-600",
    title: "Custom Maintenance Plan",
    description: "Tailored schedule to suit your operations and reduce downtime across your fleet.",
  },
  {
    icon: 3,
    bg: "bg-blue-600",
    title: "Dedicated Account Manager",
    description: "One point of contact for all booking, updates, and fleet management needs.",
  },
  {
    icon: 4,
    bg: "bg-blue-600",
    title: "Fast Turnarounds",
    description: "Priority servicing to get your vehicles back on the road quickly and efficiently.",
  },
];

const OurWork = () => {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          How Our Fleet Program Works
        </h2>
        <p className="text-gray-600 mb-12 mt-3 text-sm sm:text-lg max-w-xl mx-auto">
          A streamlined process designed to make fleet management effortless and efficient.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {programSteps.map((step, idx) => (
            <div key={idx} className="group flex flex-col items-center transition duration-300">
              {/* Icon wrapper with hover scale */}
              <div
                className={`rounded-full p-3 mb-4 text-white w-15 h-15 ${step.bg} text-2xl items-center transform transition-transform duration-300 group-hover:scale-110`}
              >
                {step.icon}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-800">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
