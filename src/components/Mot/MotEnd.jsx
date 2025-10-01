import React from 'react';

export default function MotEnd() {
  const features = [
    {
      title: 'Certified Technicians',
      description:
        'Our MOT testers are fully qualified and regularly updated on the latest testing standards and regulations.',
    },
    {
      title: 'Modern Equipment',
      description:
        'We use the latest MOT testing equipment to ensure accurate and reliable results for your vehicle.',
    },
    {
      title: 'Quick Turnaround',
      description:
        'Most MOT tests completed within 45 minutes, with immediate results and certificates issued on-site.',
    },
    {
      title: 'Competitive Pricing',
      description:
        "Fair and transparent pricing with no hidden costs. We'll also provide a free basic health check.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto bg-blue-100 rounded-xl shadow-md p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
          Why Choose Mehran’s Garage for MOT?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <h3 className={`text-lg text-black font-semibold mb-2`}>
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
