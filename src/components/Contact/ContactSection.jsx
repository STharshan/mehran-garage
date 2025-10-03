import React, { useState, useRef } from "react";

const HOURS = [
  { day: "Monday", time: "9:30 am – 5:30 pm" },
  { day: "Tuesday", time: "9:30 am – 5:30 pm" },
  { day: "Wednesday", time: "9:30 am – 5:30 pm" },
  { day: "Thursday", time: "9:30 am – 5:30 pm" },
  { day: "Friday", time: "9:30 am – 5:30 pm" },
  { day: "Saturday", time: "9:30 am – 2:30 pm" },
  { day: "Sunday", time: "Closed" },
];

// Static list of services
const SERVICES = [
  "MOT Testing",
  "Vehicle Service",
  "Diagnostics",
  "Brake Service",
  "Suspension",
  "Air Conditioning",
  "Tyre Alignment",
  "Clutch Repair",
  "Timing System",
  "Fleet Management",
  "Commercial Van Services",
];

// Email regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

// Updated phone number regex to match UK format
const PHONE_REGEX = /^(?:\+44|0)[1-9]\d{8,9}$/;

export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [selectedService, setSelectedService] = useState(""); // State to manage selected service

  // Validate form fields
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value?.trim()) return "Please enter your name.";
        if (value.trim().length < 2) return "Name looks too short.";
        return "";
      case "email":
        if (!value?.trim()) return "Please enter your email.";
        if (!EMAIL_REGEX.test(value.trim())) return "Enter a valid email address.";
        return "";
      case "phone":
        if (!value) return ""; // optional
        if (!PHONE_REGEX.test(value.trim())) {
          return "Enter a valid phone (e.g. 07912 345 678 or +44 7912 345 678).";
        }
        return "";
      case "message":
        if (!value?.trim()) return "Please tell us a bit about the issue.";
        if (value.trim().length < 10) return "Message should be at least 10 characters.";
        return "";
      case "service":
        if (!value) return "Please select a service."; // Error for service field
        return "";
      default:
        return "";
    }
  };

  const validateForm = (form) => {
    const fd = new FormData(form);
    const fields = ["name", "email", "phone", "message", "service"];
    const newErrors = {};
    fields.forEach((f) => {
      const msg = validateField(f, fd.get(f));
      if (msg) newErrors[f] = msg;
    });
    // Honeypot check
    if (fd.get("website")) {
      newErrors.website = "Bot detected.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const msg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  // Send WhatsApp message with form data
  const sendWhatsAppMessage = (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    if (!validateForm(formRef.current)) {
      setStatus({
        state: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Create a WhatsApp message with selected service
    const messageText = `
      Name: ${name} 
      Email: ${email}
      Phone: ${phone}
      Service Requested: ${selectedService}
      Message: ${message}
    `;

    // URL encode the message text
    const encodedMessage = encodeURIComponent(messageText);

    // WhatsApp phone number
    const whatsappNumber = "+447850953737"; // Use the number to which messages are to be sent

    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    setStatus({
      state: "success",
      message: "Thanks! Your message has been sent. We'll get back to you shortly.",
    });
    formRef.current.reset();
    setTouched({});
    setErrors({});
    setSelectedService(""); // Reset selected service after submission
  };

  return (
    <section id="contact" className="bg-black py-12 px-4 transition-colors duration-300 mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 data-aos="fade-up" className="text-center text-2xl md:text-3xl font-bold text-blue-600">
          Ready to Get Your Car Fixed?
        </h2>
        <p data-aos="fade-up" className="text-center text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
          Contact us to schedule a mobile repair service, ask questions, or request a quote. Our team is ready to help.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Left Side - Contact Information */}
          <div data-aos="fade-right" className="bg-white dark:bg-neutral-800 rounded-2xl shadow p-6 md:p-8 transition-colors duration-300">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Contact Information
            </h3>
            <div className="mt-4 space-y-6 text-gray-600 dark:text-gray-300">
              <div>
                <a  href="https://www.google.com/maps?q=29+Church+St,+Old+Basford,+Nottingham+NG6+0GA+United+Kingdom">
                  <p className="font-medium dark:text-gray-200">Address</p>
                  <address className="not-italic hover:underline">
                    29 Church St, Old Basford
                    <br />
                    Nottingham NG6 0GA
                    United Kingdom
                  </address>
                </a>
              </div>

              <div>
                <p className="font-medium">Phone</p>
                <a href="tel: +447846 953888" className="hover:underline text-gray-600">
                  07846 953888
                </a>
              </div>

              <div>
                <p className="font-medium dark:text-gray-200">Opening Hours</p>
                <ul className="mt-2 divide-y divide-gray-200 dark:divide-neutral-700 border border-gray-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                  {HOURS.map(({ day, time }) => (
                    <li key={day} className="grid grid-cols-2 gap-4 px-4 py-2 text-sm md:text-base">
                      <span className="text-gray-700 dark:text-gray-200">{day}</span>
                      <span className="text-right font-medium text-gray-900 dark:text-gray-100">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div data-aos="fade-left" className="bg-white dark:bg-neutral-800 rounded-2xl shadow p-6 md:p-8 transition-colors duration-300">
            <form ref={formRef} onSubmit={sendWhatsAppMessage} className="space-y-4" noValidate>
              {/* Honeypot (should stay hidden) */}
              <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" />

              {/* Name, Email, Phone, Message Inputs as before */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name*"
                  required
                  onBlur={handleBlur}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full border bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.name && touched.name ? "border-blue-600" : "border-gray-300 dark:border-gray-600"}`}
                />
                {errors.name && touched.name && (
                  <p id="name-error" className="mt-1 text-sm text-blue-600">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com*"
                  required inputMode="email"
                  onBlur={handleBlur}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  pattern={EMAIL_REGEX.source}
                  title="Enter a valid email like name@example.com"
                  className={`w-full border bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.email && touched.email ? "border-blue-600" : "border-gray-300 dark:border-gray-600"}`}
                />
                {errors.email && touched.email && (<p id="email-error" className="mt-1 text-sm text-blue-600">{errors.email}</p>)}
              </div>
              <div>
                <select
                  name="service"
                  id="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className={`w-full border bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.service && touched.service ? "border-blue-600" : "border-gray-300 dark:border-gray-600"}`}
                  required
                >
                  <option value="">-- Select a Service --</option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                {errors.service && touched.service && (
                  <p id="service-error" className="mt-1 text-sm text-blue-600">{errors.service}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="07912 345 678 or +44 7912 345 678*"
                  inputMode="tel"
                  onBlur={handleBlur}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  pattern={PHONE_REGEX.source}
                  title="Enter a valid phone number like 07912 345 678 or +44 7912 345 678"
                  className={`w-full border bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.phone && touched.phone ? "border-blue-600" : "border-gray-300 dark:border-gray-600"}`}
                />
                {errors.phone && touched.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-blue-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your car issue*"
                  rows="4"
                  required
                  onBlur={handleBlur}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full border bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.message && touched.message ? "border-blue-600" : "border-gray-300 dark:border-gray-600"}`}
                />
                {errors.message && touched.message && (
                  <p id="message-error" className="mt-1 text-sm text-blue-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status.state === "sending"}
                className={`w-full text-white font-semibold bg-blue-600 py-3 rounded-full flex items-center justify-center gap-2 transition ${status.state === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {status.state === "sending" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>

              <p className="text-sm text-gray-600 text-center">
                Same-day appointments often available • No obligation consultation
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
