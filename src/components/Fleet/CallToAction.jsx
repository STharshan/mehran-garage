import { Phone, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to another route if needed (e.g., to the contact page or home)
    navigate("/contact");

    // Scroll to the section after navigation
    const contactSection = document.getElementById("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="contact" className="bg-gradient-to-r from-blue-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 mt-20">
          Keep Your Entire Fleet Running Smoothly
        </h2>
        <p className="text-xl text-white mb-8 max-w-lg mx-auto">
          Complete maintenance, repairs, and servicing for company vehicles - all handled under one roof.
        </p>

        {/* Responsive Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">

          {/* Email Quote Button */}
          <button
            onClick={handleClick}
            className="flex items-center justify-center gap-2 border border-white px-5 py-3 rounded-md text-white hover:bg-white hover:text-blue-700 transition w-full"
          >
            <Calendar size={18} />
            Book Consultation
          </button>
          {/* Call Now Button */}
          <a
            href="tel:+447846953888"// Trigger handleCall when clicked
            className="flex items-center justify-center gap-2 bg-white text-black font-medium px-5 py-3 rounded-md shadow hover:bg-gray-300 transition w-full"
          >
            Schedule Your First Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
