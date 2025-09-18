import { ShieldCheck } from 'lucide-react';
import React from 'react';

export default function VehicleEnd() {
  return (
    <section className="px-4 py-10 bg-black">
      {/* Service Guarantee Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-12 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mb-6">
          <ShieldCheck className="text-blue-600 w-8 h-8" />
          <h2 className="text-2xl font-bold text-gray-900">Service Guarantee</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm md:text-base text-gray-700">
          <div>
            <h3 className="font-semibold text-blue-600 mb-2">Quality Parts</h3>
            <p>We use only genuine or OEM equivalent parts for all repairs and services</p>
          </div>
          <div>
            <h3 className="font-semibold text-red-600 mb-2">Expert Technicians</h3>
            <p>Our qualified mechanics have years of experience with all vehicle makes</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-600 mb-2">12 Month Warranty</h3>
            <p>All our work comes with a comprehensive 12-month warranty for peace of mind</p>
          </div>
        </div>
      </div>

      {/* Service Intervals Section */}
      <div className="max-w-7xl mx-auto mt-10 p-6 md:p-10 rounded-xl bg-gradient-to-r from-blue-100 to-white text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Service Intervals</h2>
        <p className="text-gray-700 mb-6  mx-auto">
          Regular servicing is essential for vehicle safety, reliability, and maintaining your warranty.
          We recommend following manufacturer guidelines for service intervals.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm md:text-base">
          <div>
            <h3 className="text-blue-600 font-semibold mb-1">Petrol Vehicles</h3>
            <p>Every 12 months or 10,000 miles</p>
          </div>
          <div>
            <h3 className="text-red-600 font-semibold mb-1">Diesel Vehicles</h3>
            <p>Every 12 months or 10,000 miles</p>
          </div>
        </div>
      </div>
    </section>
  );
};