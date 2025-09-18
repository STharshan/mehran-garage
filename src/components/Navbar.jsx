import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars } from "react-icons/fa"; // Importing required React Icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false); // Track service visibility
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServices = () => setIsServicesVisible(!isServicesVisible); // Toggle service visibility

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

  return (
    <nav className="bg-gradient-to-r from-gray-900  to-blue-800 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <img
          src="/mehran-logo.png" // Logo image source (replace with your actual path or URL)
          alt="Logo"
          className="h-25 w-30" // Adjust the height of the logo as needed
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white items-center relative" ref={dropdownRef}>
          <Link to="/" className="hover:text-gray-300 text-lg">
            Home
          </Link>
          <button onClick={toggleServices} className="hover:text-gray-300 relative text-lg flex items-center">
            Services
            {/* Down Arrow Icon */}
            <FaChevronDown
              className={`h-4 w-4 ml-2 transition-transform duration-200 ${isServicesVisible ? 'transform rotate-180' : ''}`}
            />
          </button>

          {isServicesVisible && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white text-black shadow-md rounded-md z-50">
              {serviceLinks.map((service) => (
                <Link
                  key={service.label}
                  to={service.path}
                  className="block px-5 py-2 mt-2 hover:bg-gray-200 hover:rounded-lg"
                  onClick={() => setIsServicesVisible(false)} // Close the menu on click
                >
                  {service.label}
                </Link>
              ))}
            </div>
          )}

          {/* Fix for About Us Link */}
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
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 text-white p-4">
          <Link to="/" className="hover:text-gray-300 text-lg">
            Home
          </Link>
          {/* Service toggle for mobile */}
          <div className="flex">
            <button
              className="py-2 text-lg flex items-center"
              onClick={() => setIsServicesVisible(!isServicesVisible)} // Toggle services visibility
            >
              Services
              {/* Down Arrow Icon */}
              <FaChevronDown
                className={`h-4 w-4 ml-1 mt-2.5 transition-transform duration-200 ${isServicesVisible ? 'transform rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Display services if visible */}
          {isServicesVisible && (
            <div className="top-full right-0 mt-2 w-56 bg-white text-black shadow-md rounded-md z-50">
              {serviceLinks.map((service) => (
                <Link
                  key={service.label}
                  to={service.path}
                  className="block px-5 py-2 mt-2 hover:bg-gray-200 hover:rounded-lg"
                  onClick={() => setIsServicesVisible(false)} // Close the menu on click
                >
                  {service.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="#about" // Change to hash link for smooth scrolling to the About section
            className="block py-2"
            onClick={() => setIsMobileMenuOpen(false)} // Close the menu
          >
            About Us
          </Link>
          <Link
            to="#contact" // Assuming the same for the contact link
            className="block py-2"
            onClick={() => setIsMobileMenuOpen(false)} // Close the menu
          >
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
