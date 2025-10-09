import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServices = () => setIsServicesVisible(!isServicesVisible);

  const serviceLinks = [
    { label: "MOT Testing", path: "/services/mot-testing" },
    { label: "Vehicle Service", path: "/services/vehicle-service" },
    { label: "Diagnostics", path: "/services/diagnostics" },
    { label: "Braking Systems", path: "/services/brake" },
    { label: "Suspension", path: "/services/suspension" },
    { label: "Air Conditioning", path: "/services/air-condition" },
    { label: "Tyre & Alignment", path: "/services/tyre-Alignment" },
    { label: "Clutch Repair", path: "/services/clutch" },
    { label: "Timing Systems", path: "/services/timing-system" },
    { label: "Fleet Management", path: "/services/fleet-management" },
    { label: "Commercial Van Repair", path: "/services/commercial-van" },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/#about");
  }

  return (
    <nav className="bg-gradient-to-r from-gray-400 to-blue-800 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-3 sm:px-6">
        {/* Logo - Responsive sizing */}
        <img
          src="/logo.png"
          alt="Logo"
          className="h-25 w-25 sm:h-20 sm:w-32 md:h-25 md:w-36 lg:h-30 lg:w-40"
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 text-white items-center relative">
          <Link to="/" className="hover:text-gray-300 text-lg">
            Home
          </Link>
          <button onClick={toggleServices} className="hover:text-gray-300 relative text-lg flex items-center">
            Services
            <FaChevronDown
              className={`h-4 w-4 ml-2 transition-transform duration-200 ${isServicesVisible ? 'transform rotate-180' : ''}`}
            />
          </button>

          {isServicesVisible && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white text-black shadow-md rounded-md z-50">
              {serviceLinks.map((service) => (
                <HashLink
                  key={service.label}
                  to={service.path}
                  className="block px-5 py-2 mt-2 hover:bg-gray-200 hover:rounded-lg"
                  onClick={() => setIsServicesVisible(false)}
                >
                  {service.label}
                </HashLink>
              ))}
            </div>
          )}

          <HashLink smooth to="/#about" className="hover:text-gray-300 text-lg">
            About Us
          </HashLink>
          <a href="/contact" className="hover:text-gray-300 text-lg">
            Contact
          </a>
        </div>

        {/* Contact on desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <span className="text-white text-sm xl:text-base">Call Us Today</span>
          <a
            href="tel:+447846953888"
            className="bg-white text-blue-700 py-2 px-3 xl:px-4 rounded-md hover:bg-gray-200 hover:border-blue-600 hover:border-2 text-sm xl:text-base whitespace-nowrap"
          >
            +44 7846 953888
          </a>
        </div>

        {/* Mobile menu icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-2xl p-2">
            {isMobileMenuOpen ? <FaTimes className="h-5 w-5 sm:h-6 sm:w-6" /> : <FaBars className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-blue-700 text-white px-4 py-3">
          <Link
            to="/"
            className="block py-2 text-base sm:text-lg hover:text-gray-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <div className="flex flex-col">
            <button
              className="py-2 text-base sm:text-lg flex items-center gap-1 w-full"
              onClick={() => setIsServicesVisible(!isServicesVisible)}
            >
              <span>Services</span>
              <FaChevronDown
                className={`h-4 w-4 mt-1.5 transition-transform duration-200 ${isServicesVisible ? 'transform rotate-180' : ''
                  }`}
              />
            </button>
          </div>


          {isServicesVisible && (
            <div className="mt-2 ml-4 bg-blue-600 rounded-md overflow-hidden">
              {serviceLinks.map((service) => (
                <Link
                  key={service.label}
                  to={service.path}
                  className="block px-4 py-2 text-sm sm:text-base hover:bg-blue-500"
                  onClick={() => {
                    setIsServicesVisible(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          )}

          <HashLink
            smooth
            to="/#about"
            className="block py-2 text-base sm:text-lg hover:text-gray-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </HashLink>

          <a
            href="/contact"
            className="block py-2 text-base sm:text-lg hover:text-gray-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>

          <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-blue-600">
            <span className="text-sm sm:text-base">Call Us Today</span>
            <a
              href="tel:+447846953888"
              className="bg-white text-blue-700 py-2 px-4 rounded-md hover:bg-gray-200 hover:border-blue-600 hover:border-2 text-center text-sm sm:text-base font-medium"
            >
              +44 7846 953888
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;