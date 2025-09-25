import React, { useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaCarSide, FaRegSnowflake, FaRegClock, FaShuttleVan, FaCar } from 'react-icons/fa';
import { IoSettingsOutline, IoSpeedometerOutline } from 'react-icons/io5';
import { LuBrackets, LuCog, LuShipWheel, LuWrench } from 'react-icons/lu';
import { MdManageAccounts } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const services = [
  {
    title: "MOT Testing",
    subtitle: "Class 4 & Class 7 MOT testing with certified technicians",
    description: "Professional MOT testing for cars and light commercial vehicles",
    icon: <FaCar className="text-2xl text-white" />
  },
  {
    title: "Vehicle Service",
    subtitle: "Comprehensive vehicle servicing and maintenance",
    description: "Full and interim services to keep your vehicle running smoothly",
    icon: <LuWrench className="text-2xl text-white" />
  },
  {
    title: "Diagnostics",
    subtitle: "Advanced diagnostic services with dealer-level tools",
    description: "ECU updates and dealer-level diagnostic information",
    icon: <IoSettingsOutline className="text-2xl text-white" />
  },
  {
    title: "Braking Systems",
    subtitle: "Complete brake repair and maintenance services",
    description: "Brake pads, discs, fluid changes and brake system repairs",
    icon: <LuBrackets className="text-2xl text-white" />
  },
  {
    title: "Suspension",
    subtitle: "Suspension repair and replacement services",
    description: "Shock absorbers, springs, and complete suspension systems",
    icon: <IoSpeedometerOutline className="text-2xl text-white" />
  },
  {
    title: "Air Conditioning",
    subtitle: "AC repair, servicing and re-gassing",
    description: "Keep cool with our professional AC services",
    icon: <FaRegSnowflake className="text-2xl text-white" />
  },
  {
    title: "Tyres & Alignment",
    subtitle: "High-tech wheel alignment and tyre services",
    description: "Premium tyres and precision wheel alignment technology",
    icon: <LuShipWheel className="text-2xl text-white" />
  },
  {
    title: "Clutch Repair",
    subtitle: "Complete clutch repair and replacement",
    description: "Expert clutch repairs for all vehicle types",
    icon: <LuCog className="text-2xl text-white" />
  },
  {
    title: "Timing Systems",
    subtitle: "Timing belts, wet belts, and timing chains",
    description: "Precision timing system repairs and replacements",
    icon: <FaRegClock className="text-2xl text-white" />
  },
  {
    title: "Fleet Management",
    subtitle: "Timing belts, wet belts, and timing chains",
    description: "Precision timing system repairs and replacements",
    icon: <MdManageAccounts className="text-2xl text-white" />
  },
  {
    title: "Commercial Van",
    subtitle: "Timing belts, wet belts, and timing chains",
    description: "Precision timing system repairs and replacements",
    icon: <FaShuttleVan className="text-2xl text-white" />
  },
];

export default function ServicesCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-out-cubic", // Easing type
      once: true, // Ensure the animation only triggers once
      mirror: true, // Animate elements both scrolling down AND up
    });
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full px-4 py-18">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Our Services</h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100"
          data-aos="fade-left" // Animation for left arrow
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide px-10"
          data-aos="fade-up" // Animation for carousel container
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[280px] h-[320px] max-w-sm bg-white rounded-lg p-6 shadow-md flex-shrink-0 text-center border hover:shadow-lg transition flex flex-col"
              data-aos="zoom-in" // Animation for each service card
              data-aos-delay={index * 100} // Stagger animations for each card
            >
              <div className="w-16 h-16 flex items-center justify-center mx-auto bg-gradient-to-r from-gray-900 to-blue-800 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{service.subtitle}</p>
              <p className="text-sm text-gray-500 flex-grow">{service.description}</p>
              <button className="mt-4 bg-gradient-to-r from-gray-900 to-blue-800 text-white px-2 w-50 mx-auto py-2 rounded hover:opacity-90 text-sm">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100"
          data-aos="fade-right" // Animation for right arrow
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
