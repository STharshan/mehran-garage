import React from 'react';

export default function ClutchEnd() {
 const steps = [
    {
      step: "1",
      title: "Diagnosis",
      color: "text-blue-600",
      bg: "bg-blue-500",
      desc: "Comprehensive clutch system inspection and testing",
    },
    {
      step: "2",
      title: "Removal",
      color: "text-red-600",
      bg: "bg-red-500",
      desc: "Safe removal of gearbox and clutch components",
    },
    {
      step: "3",
      title: "Installation",
      color: "text-blue-600",
      bg: "bg-blue-500",
      desc: "Professional installation of new clutch components",
    },
    {
      step: "4",
      title: "Testing",
      color: "text-red-600",
      bg: "bg-red-500",
      desc: "Road test and clutch operation verification",
    },
  ];

  return (
    <section className="px-4 py-10 bg-gray-50">
      {/* Clutch Replacement Process */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow p-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Clutch Replacement Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {steps.map((s, i) => (
            <div key={i}>
              <div className={`w-12 h-12 mx-auto flex items-center justify-center rounded-full text-white text-lg font-bold ${s.bg}`}>
                {s.step}
              </div>
              <h3 className={`mt-3 font-semibold ${s.color}`}>{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clutch Care Tips */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-50 to-rose-50 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Clutch Care Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">
          {/* Good Driving Habits */}
          <div>
            <h3 className="text-blue-700 font-semibold mb-2">Good Driving Habits</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Don't rest your foot on the clutch pedal</li>
              <li>Use handbrake on hills, not clutch</li>
              <li>Avoid riding the clutch in traffic</li>
              <li>Depress clutch fully when changing gear</li>
            </ul>
          </div>

          {/* Maintenance */}
          <div>
            <h3 className="text-red-600 font-semibold mb-2">Maintenance</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Check clutch fluid level regularly</li>
              <li>Service clutch hydraulics annually</li>
              <li>Address problems early</li>
              <li>Use quality replacement parts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
