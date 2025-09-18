import React from 'react';
import { ShieldCheck, Wrench, Users } from 'lucide-react'; // Lucide icons

export default function SuspensionWhyChooseUs() {
  const features = [
    {
      title: 'Trusted & Reliable',
      description: 'Years of proven experience and hundreds of satisfied customers.',
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    },
    {
      title: 'Expert Technicians',
      description: 'Certified mechanics delivering precise and high-quality service.',
      icon: <Wrench className="w-10 h-10 text-blue-500" />,
    },
    {
      title: 'Customer-Centric',
      description: 'We care about your satisfaction and aim to exceed expectations.',
      icon: <Users className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <div className="py-16 px-4 text-center bg-white">
      <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
