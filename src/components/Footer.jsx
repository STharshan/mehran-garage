import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-center text-2xl font-bold mb-8">Contact Mehran Garages</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-10">
          {/* Phone */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">Phone</h3>
            <p className="text-white hover:text-blue-300 cursor-pointer">+44 7846 953888</p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-red-400 font-semibold mb-2">Address</h3>
            <p>29 Church St, Old Basford</p>
            <p>Nottingham NG6 0GA</p>
            <p>United Kingdom</p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">Hours</h3>
            <p>Mon–Fri: 8:00 AM – 5:30 PM</p>
            <p>Sat: 8:00 AM – 4:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-red-900 py-10 text-center text-white text-sm">
        <p className="mb-1">© 2024 Mehran Garages. All rights reserved.</p>
        <p>Professional automotive services you can trust</p>
      </div>
    </footer>
  );
}
