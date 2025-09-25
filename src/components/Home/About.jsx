import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutUs = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration (in ms)
            once: true, // Animation will trigger once when it comes into view
        });
    }, []);

    return (
        <section className="scroll-m-25 bg-black" id="about">
            <div className="flex flex-col-reverse md:flex-row items-center p-6">
                <div
                    className="md:w-1/2 p-4"
                    data-aos="fade-right" // AOS animation for the image on scroll
                >
                    <img
                        src="image.jpg"
                        alt="About Us"
                        className="w-full h-auto rounded-lg shadow-lg mt-10"
                    />
                </div>
                <div
                    className="md:w-1/2 p-4 mt-10 py-15"
                    data-aos="fade-left" // AOS animation for the text section on scroll
                >
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4">About Us</h2>
                    <p className="text-lg text-gray-200 mb-4">
                        At Mehran Garages, we are more than just a service — we are a family. As a family-owned business with decades of hands-on experience, we’ve built our reputation on trust, integrity, and a deep commitment to excellence.
                    </p>
                    <p className="text-lg text-gray-200 mb-4">
                        We take immense pride in our craftsmanship and use only best-in-class tools and technology to ensure every job is done right the first time. Whether it’s a simple check-up or a complex repair, we treat your vehicle with the same care and attention as if it were our own.
                    </p>
                    <p className="text-lg text-gray-200">
                        What truly sets us apart is how we treat people. Every customer is welcomed with respect, transparency, and a genuine desire to help. When you choose us, you’re not just getting a service — you’re becoming part of our family.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
