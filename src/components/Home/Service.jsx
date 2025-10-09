// File: ServicesCarousel.jsx
import React, { useRef, useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCar,
  FaRegSnowflake,
  FaRegClock,
  FaShuttleVan,
} from "react-icons/fa";
import { IoSettingsOutline, IoSpeedometerOutline } from "react-icons/io5";
import { LuBrackets, LuCog, LuShipWheel, LuWrench } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const services = [
  { title: "MOT Testing", subtitle: "Class 4 & Class 7 MOT testing with certified technicians", description: "Professional MOT testing for cars and light commercial vehicles", icon: <FaCar className="text-2xl sm:text-3xl" />, path: "/services/mot-testing" },
  { title: "Vehicle Service", subtitle: "Comprehensive vehicle servicing and maintenance", description: "Full and interim services to keep your vehicle running smoothly", icon: <LuWrench className="text-2xl sm:text-3xl" />, path: "/services/vehicle-service" },
  { title: "Diagnostics", subtitle: "Advanced diagnostic services with dealer-level tools", description: "ECU updates and dealer-level diagnostic information", icon: <IoSettingsOutline className="text-2xl sm:text-3xl" />, path: "/services/diagnostics" },
  { title: "Braking Systems", subtitle: "Complete brake repair and maintenance services", description: "Brake pads, discs, fluid changes and brake system repairs", icon: <LuBrackets className="text-2xl sm:text-3xl" />, path: "/services/brake" },
  { title: "Suspension", subtitle: "Suspension repair and replacement services", description: "Shock absorbers, springs, and complete suspension systems", icon: <IoSpeedometerOutline className="text-2xl sm:text-3xl" />, path: "/services/suspension" },
  { title: "Air Conditioning", subtitle: "AC repair, servicing and re-gassing", description: "Keep cool with our professional AC services", icon: <FaRegSnowflake className="text-2xl sm:text-3xl" />, path: "/services/air-condition" },
  { title: "Tyres & Alignment", subtitle: "High-tech wheel alignment and tyre services", description: "Premium tyres and precision wheel alignment technology", icon: <LuShipWheel className="text-2xl sm:text-3xl" />, path: "/services/tyre-alignment" },
  { title: "Clutch Repair", subtitle: "Complete clutch repair and replacement", description: "Expert clutch repairs for all vehicle types", icon: <LuCog className="text-2xl sm:text-3xl" />, path: "/services/clutch" },
  { title: "Timing Systems", subtitle: "Timing belts, wet belts, and timing chains", description: "Precision timing system repairs and replacements", icon: <FaRegClock className="text-2xl sm:text-3xl" />, path: "/services/timing-system" },
  { title: "Fleet Management", subtitle: "Fleet management services for businesses", description: "Efficient and reliable fleet management solutions", icon: <MdManageAccounts className="text-2xl sm:text-3xl" />, path: "/services/fleet-management" },
  { title: "Commercial Van", subtitle: "Commercial van servicing and repairs", description: "Comprehensive service for commercial vans", icon: <FaShuttleVan className="text-2xl sm:text-3xl" />, path: "/services/commercial-van" },
];

export default function ServicesCarousel() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { current } = scrollRef;
      if (current) {
        setShowLeftArrow(current.scrollLeft > 0);
        setShowRightArrow(
          current.scrollLeft < current.scrollWidth - current.clientWidth - 10
        );
      }
    };

    const { current } = scrollRef;
    if (current) {
      current.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (current) {
        current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    
    const cardWidth = current.firstChild.offsetWidth;
    const gap = 16; // gap-4 = 16px
    const scrollAmount = cardWidth + gap;
    
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6 sm:mb-8">
        Our Services
      </h2>

      <div className="relative">
        {/* Left Arrow - Hidden on mobile when at start */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2
                       sm:-translate-x-4 bg-white shadow-md p-2 sm:p-3 rounded-full 
                       z-20 hover:bg-gray-100 transition-all"
            data-aos="fade-left"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-sm sm:text-base" />
          </button>
        )}

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto px-2 py-6 sm:py-10 
                     scroll-smooth scrollbar-hide"
          data-aos="fade-up"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-1/4 
                         min-h-[280px] sm:min-h-[300px] md:min-h-[320px]
                         bg-blue-50 rounded-xl p-4 sm:p-5 md:p-6 shadow-md text-center 
                         transition-transform hover:scale-105 hover:shadow-lg 
                         hover:shadow-blue-400/50 flex flex-col"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                              flex items-center justify-center mx-auto 
                              bg-blue-100 rounded-full mb-3 sm:mb-4 
                              text-blue-600 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold 
                             text-blue-600 mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-2 leading-relaxed">
                {service.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 flex-grow leading-relaxed">
                {service.description}
              </p>

              <Link to={service.path}>
                <button className="mt-3 sm:mt-4 bg-blue-600 text-white 
                                   px-3 sm:px-4 py-2 rounded-lg 
                                   hover:bg-blue-700 hover:shadow-lg 
                                   hover:shadow-blue-400/60 transition-all 
                                   duration-300 text-xs sm:text-sm w-full
                                   font-medium">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Right Arrow - Hidden on mobile when at end */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2
                       sm:translate-x-4 bg-white shadow-md p-2 sm:p-3 rounded-full 
                       z-20 hover:bg-gray-100 transition-all"
            data-aos="fade-right"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-sm sm:text-base" />
          </button>
        )}
      </div>

      {/* Mobile scroll indicator */}
      <div className="flex justify-center mt-4 sm:hidden">
        <p className="text-xs text-gray-500">← Swipe to see more services →</p>
      </div>
    </div>
  );
}