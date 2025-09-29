import React from 'react';

export default function DiagnosticsEnd() {
  return (
    <section className="px-4 py-10 bg-gray-50">
      {/* Section 2: Why Choose Us */}
        <h2 className="text-xl md:text-2xl text-center font-bold text-gray-900">
          Why Choose Our Diagnostics?
        </h2>
      <div className="max-w-7xl mx-auto mt-5 p-8 rounded-xl bg-gradient-to-r from-blue-100 to-white text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
          <div>
            <h3 className="text-blue-700 font-semibold mb-2">Dealer Level Access</h3>
            <p className="text-gray-700">
              Access to manufacturer databases and technical information that independent garages typically don’t have
            </p>
          </div>
          <div>
            <h3 className="text-blue-600 font-semibold mb-2">Expert Technicians</h3>
            <p className="text-gray-700">
              Our technicians are trained in advanced diagnostics and stay updated with the latest automotive technology
            </p>
          </div>
          <div>
            <h3 className="text-blue-700 font-semibold mb-2">Comprehensive Reports</h3>
            <p className="text-gray-700">
              Detailed diagnostic reports with fault codes, live data, and recommended repair procedures
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};