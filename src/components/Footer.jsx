import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white" id='contact'>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-center text-2xl font-bold mb-8">Contact Mehran Garages</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-10">
          {/* Phone */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">Phone</h3>
            <a
              href="https://wa.me/447846953888"
              className="text-white hover:text-blue-300 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              +44 7846 953888
            </a>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-red-400 font-semibold mb-2">Address</h3>
            <a
              href="https://www.google.com/maps?q=29+Church+St,+Old+Basford,+Nottingham+NG6+0GA+United+Kingdom"
              className="text-white hover:text-red-300 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              29 Church St, Old Basford
              <br />
              Nottingham NG6 0GA
              <br />
              United Kingdom
            </a>
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
      <div className="bg-gradient-to-r from-blue-900 to-red-900 py-5 text-center text-white text-sm">
        <p className="mb-2">© 2024 Mehran Garages. All rights reserved.</p>
      {/* Bottom Bar */}
      <div className="text-center font-semibold">
        <p>
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Ansely
          </a>
        </p>
      </div>
      </div>
    </footer>
  );
}
