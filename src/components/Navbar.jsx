import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  // Hide dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-red-900 p-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="text-white text-2xl font-semibold">
          <span>Mehran Garages</span>
          <p className="text-sm">Professional Automotive Services</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white items-center relative" ref={dropdownRef}>
          <button onClick={toggleServices} className="hover:text-gray-300 relative text-lg">
            Services
          </button>

          {isServicesOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white text-black shadow-md rounded-md z-50">
              {serviceLinks.map((service) => (
                <Link
                  key={service.label}
                  to={service.path}
                  className="block px-5 py-2 mt-2  hover:bg-gray-200 hover:rounded-lg"
                  onClick={() => setIsServicesOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          )}

          <Link to="#about" className="hover:text-gray-300 text-lg">
            About Us
          </Link>
          <Link to="#contact" className="hover:text-gray-300 text-lg">
            Contact
          </Link>
        </div>

        {/* Contact on desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-white">Call Us Today</span>
          <a
            href="tel:+447846953888"
            className="bg-white text-blue-700 py-2 px-4 rounded-md hover:bg-gray-200"
          >
            +44 7846 953888
          </a>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 text-white p-4">
          <Link to="/services/mot-testing" className="block py-2">
            Services
          </Link>
          <Link to="#about" className="block py-2">
            About Us
          </Link>
          <Link to="#contact" className="block py-2">
            Contact
          </Link>
          <div className="flex items-center space-x-4 mt-4">
            <span>Call Us Today</span>
            <a
              href="tel:+447846953888"
              className="bg-white text-blue-700 py-2 px-4 rounded-md hover:bg-gray-200"
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
