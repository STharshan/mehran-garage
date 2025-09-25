import React from 'react';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TimingHeader() {

    const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to another route if needed (e.g., to the contact page or home)
    navigate("/#contact");

    // Scroll to the section after navigation
    const contactSection = document.getElementById("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="w-full py-25 px-4 mt-20 text-center bg-gradient-to-r from-blue-800 to-gray-900 text-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Timing Systems Service</h1>
      <p className="text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
Expert timing belt, wet belt, and timing chain services to keep your engine running in perfect synchronization
      </p>
       {/* Responsive Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
        {/* Email Quote Button */}
        <button
          onClick={handleClick} // Scroll to Contact section on Home page
          className="flex items-center justify-center gap-2 border border-white px-5 py-3 rounded-md text-white hover:bg-white hover:text-blue-700 transition w-full sm:w-auto"
        >
          <Calendar size={18} />
          Book Consultation
        </button>

        {/* Call Now Button */}
        <a
          href="tel:+447846953888" // Corrected the phone number format for proper functionality
          className="flex items-center justify-center gap-2 bg-white text-black font-medium px-5 py-3 rounded-md shadow hover:bg-gray-300 transition w-full sm:w-auto"
        >
          Schedule Your First Service
        </a>
      </div>
    </div>
  );
}
