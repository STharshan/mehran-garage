import React from 'react';

export default function VehicleHeader() {
  return (
    <div className="w-full py-25 px-4 mt-20 text-center bg-gradient-to-r from-blue-800 to-gray-900 text-white">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Vehicle Servicing</h1>
      <p className="text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
        Comprehensive vehicle servicing and maintenance to keep your car running at its best<br />
        with genuine parts and expert technicians
      </p>
    </div>
  );
}
