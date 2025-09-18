import { Phone, Calendar } from "lucide-react";

const CallToAction = () => {
  // Function to handle the call action
  const handleCall = () => {
    console.log("Calling 01159 641 600");
    // You can add more actions here, like tracking analytics or showing a modal
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-blue-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 mt-20">
          Commercial Van Repair
        </h2>
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
          Keep your business moving with our reliable commercial van repair services. We understand how essential your vans are to daily operations — when one is off the road, your business can come to a standstill.
        </p>

        {/* Responsive Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          {/* Schedule Service Button */}
          <a
            href="mailto:" 
            className="flex items-center justify-center gap-2 border border-white px-5 py-3 rounded-md text-white hover:bg-white hover:text-blue-700 transition w-full"
          >
            <Calendar size={18} />
            Schedule Service
          </a>

          {/* Emergency Repair Button */}
          <a
            href="tel:01159641600" // Call action link
            onClick={handleCall}  // Trigger handleCall when clicked
            className="flex items-center justify-center gap-2 bg-white text-black font-medium px-5 py-3 rounded-md shadow hover:bg-gray-300 transition w-full"
          >
            <Phone size={18} />
            Emergency Repair
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
