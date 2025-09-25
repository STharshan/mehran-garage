import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-800 dark:bg-neutral-950 border-t dark:border-neutral-800 py-6">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="max-w-sm">
            <img src="/mehran-logo.png" alt="SL Smart Repair logo" className="block" />
            <p className="text-gray-200 -mt-15 dark:text-gray-300 leading-relaxed text-center">
              Professional automotive repair services that restore your vehicle to perfect condition.
            </p>

            {/* Socials */}
            <div className="mt-4 flex justify-center">
              <a
                href="https://web.facebook.com/p/Mehrans-Garage-100064103162650/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-200"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-blue-600 text-lg dark:text-white">Services</h3>
            <ul className="space-y-2 text-white dark:text-gray-300">
              <li><Link to="/services/mot-testing" className="hover:text-gray-400 dark:hover:text-gray-200 transition-colors">MOT Testing</Link></li>
              <li><Link to="/services/vehicle-service" className="hover:text-gray-400 dark:hover:text-gray-200 transition-colors">Vehicle Service</Link></li>
              <li><Link to="/services/diagnostics" className="hover:text-gray-400 dark:hover:text-gray-200 transition-colors">Diagnostics</Link></li>
              <li><Link to="/services/brake" className="hover:text-gray-400 dark:hover:text-gray-200 transition-colors">Braking Systems</Link></li>
              <li><Link to="/services/suspension" className="hover:text-gray-400 dark:hover:text-gray-200 transition-colors">Suspension</Link></li>
              <li><Link to="/services/air-condition" className="hover:text-gray-400 dark:hover:text-gray-200 transition-colors">Air Conditioning</Link></li>
              <li><Link to="/services/tyre-alignment" className="hover:text-gray-400 dark:hover:text-gray-200 transition-colors">Tyre & Alignment</Link></li>
              <li><Link to="/services/clutch" className="hover:text-gray-400 dark:hover:text-gray-200 transition-colors">Clutch Repair</Link></li>
              <li><Link to="/services/timing-system" className="hover:text-gray-400 dark:hover:text-gray-200 transition-colors">Timing Systems</Link></li>
              <li><Link to="/services/fleet-management" className="hover:text-gray-400 dark:hover:text-gray-200 transition-colors">Fleet Management</Link></li>
              <li><Link to="/services/commercial-van" className="hover:text-gray-400 dark:hover:text-gray-200 transition-colors">Commercial Van Repair</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-blue-600 text-lg">Contact</h3>
            <ul className="space-y-2 text-white">
              <li>
                Phone:{" "}
                <a href="tel:+44 7846 953888" className="hover:text-gray-400 dark:hover:text-gray-200">
                  07846 953888
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:Sldetailingservices@gmail.com" className="hover:text-gray-400 dark:hover:text-gray-200">
                  Sldetailingservices@gmail.com
                </a>
              </li>
              <li>
                Address:{" "}
                <a
                  href="https://www.google.com/maps?q=29+Church+St,+Old+Basford,+Nottingham+NG6+0GA+United+Kingdom"
                  className="cursor-pointer hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  29 Church St, Old Basford
                  <br />
                  Nottingham NG6 0GA
                  United Kingdom
                </a>
              </li>

              <li><Link to="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-gray-400">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 font-semibold text-blue-600 text-lg dark:text-white">Hours</h3>
            <ul className="space-y-2 text-white dark:text-gray-300">
              <p>Mon–Fri: 9:30 AM – 5:30 PM</p>
              <p>Sat: 9:30 AM – 2:30 PM</p>
              <p>Sun: Closed</p>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-300 dark:border-neutral-800 pt-8 text-center text-gray-200 dark:text-gray-400">
          © {new Date().getFullYear()} Mehran Garages. All rights reserved.
          <span className="mx-1">|</span>
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline text-white"
          >
            Ansely
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
