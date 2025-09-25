import React from 'react';

export default function AirConditonEnd() {
  const features = [
    {
      title: 'Certified Technicians',
      color: 'text-blue-600',
      description:
        'Our AC specialists are fully trained and experienced in diagnosing, repairing, and re-gassing all types of air conditioning systems.',
    },
    {
      title: 'Quick Turnaround',
      color: 'text-blue-600',
      description:
        'Most air con services and re-gas jobs are completed within the hour, so you can get back on the road quickly.',
    },
    {
      title: 'Modern Equipment',
      color: 'text-blue-600',
      description:
        'We use the latest re-gas machines and diagnostic tools to ensure accurate results and long-lasting performance.',
    },
    {
      title: 'Competitive Pricing',
      color: 'text-blue-600',
      description:
        "Fair and transparent pricing with no hidden extras. Every service includes a free basic AC health check.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto rounded-xl shadow-md p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
          Why Choose Mehran Garages for Air Conditioning?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className='bg-gray-200 p-4 rounded-lg hover:z-50 transition-all duration-300 hover:bg-white  hover:border-[#f5a9bd] active:bg-white active:shadow-lg active:border-gray-200 hover:scale-105 active:scale-100'>
              <h3 className={`text-lg font-semibold mb-2 ${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
