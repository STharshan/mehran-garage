import React from 'react';

export default function SuspensionEnd() {
   return (
    <section className="px-4 py-10 bg-gray-50">
      {/* Suspension System Components */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10 mb-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Suspension System Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm md:text-base">
          {/* Front Suspension */}
          <div>
            <h3 className="text-blue-700 font-semibold mb-3">Front Suspension</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>MacPherson struts or shock absorbers</li>
              <li>Coil springs or leaf springs</li>
              <li>Control arms and ball joints</li>
              <li>Anti-roll bar and drop links</li>
              <li>Suspension mounting points</li>
              <li>Steering rack and tie rods</li>
            </ul>
          </div>

          {/* Rear Suspension */}
          <div>
            <h3 className="text-blue-600 font-semibold mb-3">Rear Suspension</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Rear shock absorbers or struts</li>
              <li>Coil springs or leaf springs</li>
              <li>Trailing arms and bushes</li>
              <li>Rear anti-roll bar</li>
              <li>Panhard rod (if fitted)</li>
              <li>Rear axle components</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Suspension Maintenance */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-100 to-white rounded-xl p-6 md:p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Suspension Maintenance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
          <div>
            <h3 className="text-blue-700 font-semibold mb-2">Regular Inspection</h3>
            <p className="text-gray-700">
              Annual suspension inspection to identify worn components before they cause handling problems
            </p>
          </div>
          <div>
            <h3 className="text-blue-600 font-semibold mb-2">Quality Parts</h3>
            <p className="text-gray-700">
              We use OEM or equivalent quality suspension components for reliable, long-lasting repairs
            </p>
          </div>
          <div>
            <h3 className="text-blue-700 font-semibold mb-2">Professional Service</h3>
            <p className="text-gray-700">
              Expert technicians with specialized tools ensure proper suspension component installation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};