import { CheckCircle, CircleSlash, Target } from 'lucide-react';
import React from 'react';

export default function TyreEnd() {
   return (
    <section className="px-4 py-10 bg-gray-50">
      {/* Top Two Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Alignment Benefits */}
        <div className="border border-blue-300 bg-blue-50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-blue-600" />
            <h3 className="text-blue-700 font-semibold text-lg">
              Alignment Benefits
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-800">
            {[
              "Improved fuel economy",
              "Extended tyre life",
              "Better vehicle handling",
              "reduced steering effort",
              "Safer driving experience",
              "Prevents premature wear",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tyre Health Checks */}
        <div className="border border-blue-300 bg-blue-50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <CircleSlash className="w-5 h-5 text-blue-600" />
            <h3 className="text-blue-700 font-semibold text-lg">
              Tyre Health Checks
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-800">
            {[
              "Tread depth measurement",
              "Sidewall damage inspection",
              "Pressure monitoring",
              "Uneven wear patterns",
              "Age and condition assessment",
              "Legal compliance check",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tyre Brands */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-100 to-blue-100 rounded-xl p-6 md:p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Tyre Brand We Offer
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base text-gray-800">
          <div>
            <h3 className="text-blue-700 font-semibold mb-2">Premium</h3>
            <ul className="space-y-1">
              <li>Michelin</li>
              <li>Continental</li>
              <li>Bridgestone</li>
              <li>Pirelli</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-600 font-semibold mb-2">Mid-Range</h3>
            <ul className="space-y-1">
              <li>Goodyear</li>
              <li>Davanti</li>
              <li>Yokohama</li>
              <li>Hankook</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-700 font-semibold mb-2">Budget</h3>
            <ul className="space-y-1">
              <li>Falken</li>
              <li>Kumho</li>
              <li>Nexen</li>
              <li>Toyo</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-600 font-semibold mb-2">Specialist</h3>
            <ul className="space-y-1">
              <li>Run-flat tyres</li>
              <li>Winter tyres</li>
              <li>Performance tyres</li>
              <li>Commercial tyres</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};