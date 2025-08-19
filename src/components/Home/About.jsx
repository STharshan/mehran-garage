import React from 'react';

const AboutUs = () => {
    return (
        <section className="">
            <div className='flex flex-col-reverse md:flex-row items-center p-6 mt-10'>
                <div className="md:w-1/2 p-4">
                    <img
                        src="image.jpg"
                        alt="About Us"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        At Mehran Garages, we are more than just a service — we are a family. As a family-owned business with decades of hands-on experience, we’ve built our reputation on trust, integrity, and a deep commitment to excellence.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        We take immense pride in our craftsmanship and use only best-in-class tools and technology to ensure every job is done right the first time. Whether it’s a simple check-up or a complex repair, we treat your vehicle with the same care and attention as if it were our own.
                    </p>
                    <p className="text-lg text-gray-600">
                        What truly sets us apart is how we treat people. Every customer is welcomed with respect, transparency, and a genuine desire to help. When you choose us, you’re not just getting a service — you’re becoming part of our family.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
