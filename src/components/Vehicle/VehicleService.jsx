import React from 'react';
import { CheckCircle } from 'lucide-react'; // or use your preferred icon library

export default function VehicleServices() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Services</h2>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">Engine Diagnostics</span>
          <span className="px-4 py-2 rounded-full bg-red-100 text-red-600 font-medium">Brake Repair</span>
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">Oil Change</span>
          <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium">Air Conditioning</span>
          <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">MOT Testing</span>
        </div>

        {/* MOT Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Class 4 MOT */}
          <div className="bg-white rounded-xl shadow-sm border p-8 text-left hover:shadow-md transition-all">
            <div className="flex flex-col items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-red-500 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 10h14l1-2h2a1 1 0 0 1 1 1v2h-1l-1 2h-1.5M3 10v4a2 2 0 0 0 2 2h1.5M10 14v2m-2 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Full Service</h3>
              <p className="text-sm text-gray-500 text-center">
                Comprehensive annual service covering all major systems
              </p>
              <p className='text-sm text-blue-500'>Duration: 2-3 hours</p>
            </div>
            <ul className="space-y-3">
              {[
                'Engine oil and filter change',
                'Brake system inspection',
                'Suspension check',
                'Battery and charging system test',
                'Cooling system check',
                'Lights and electrical systems',
                "Tyre condition and pressure",
                "Windscreen wipers and washers"
              ].map((item, index) => (
                <li key={index} className="flex items-start text-sm text-gray-700">
                  <CheckCircle className="text-blue-500 w-5 h-5 mr-2 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Class 7 MOT */}
          <div className="bg-white rounded-xl shadow-sm border p-8 text-left hover:shadow-md transition-all">
            <div className="flex flex-col items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-red-500 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M2 12h18M2 16h18M4 6h16l2 6H2l2-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Interim Service</h3>
              <p className="text-sm text-gray-500 text-center">
                Essential 6-month service to keep your vehicle running smoothly
              </p>
              <p className='text-sm text-blue-500'>Duration: 1-2 hours</p>
            </div>
            <ul className="space-y-3">
              {[
                'Engine oil and filter change',
                'Fluid level checks',
                'Battery test',
                'Lights inspection',
                'Tyre pressure check',
                'Windscreen washers',
                "Basic safety checks"
              ].map((item, index) => (
                <li key={index} className="flex items-start text-sm text-gray-700">
                  <CheckCircle className="text-blue-500 w-5 h-5 mr-2 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
