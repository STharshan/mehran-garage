import React from 'react';

export default function DiagnosticsEnd() {
  return (
    <section className="px-4 py-10 bg-gray-50">
      {/* Section 1: Diagnostic Equipment */}
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Professional Diagnostic Equipment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
          <div>
            <h3 className="text-blue-600 font-semibold mb-3">
              Manufacturer Specific Tools
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>BMW ISTA/D and ISTA/P</li>
              <li>Mercedes XENTRY and DAS</li>
              <li>Audi/VW ODIS and VCDS</li>
              <li>Ford IDS and FDRS</li>
              <li>Toyota Techstream</li>
              <li>Jaguar Land Rover SDD</li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-600 font-semibold mb-3">
              Multi-Brand Platforms
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Bosch KTS diagnostic systems</li>
              <li>Launch X431 professional</li>
              <li>Snap-on VERUS Edge</li>
              <li>Autel MaxiSys Elite</li>
              <li>Delphi DS150E</li>
              <li>OBD-II and CAN bus analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2: Why Choose Us */}
      <div className="max-w-7xl mx-auto mt-10 p-8 rounded-xl bg-gradient-to-r from-blue-100 to-red-100 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Why Choose Our Diagnostics?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
          <div>
            <h3 className="text-blue-700 font-semibold mb-2">Dealer Level Access</h3>
            <p className="text-gray-700">
              Access to manufacturer databases and technical information that independent garages typically don’t have
            </p>
          </div>
          <div>
            <h3 className="text-red-600 font-semibold mb-2">Expert Technicians</h3>
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